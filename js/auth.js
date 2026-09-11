// Shared moderator login/session logic — used by both index.html (view-only
// public map, no dev UI) and moderator.html (fully login-walled panel).
// Verifies against js/data/mod-accounts.js (PBKDF2-SHA256, 200k iterations,
// via the browser's Web Crypto API — see that file's header for the
// "casual deterrent, not real security" caveat). Session lives in
// sessionStorage under "modSession" as { username, role } — never the
// password/hash — so it survives reloads in the same tab but not a fresh
// browser session.
const Auth = (function () {
  "use strict";

  const SESSION_KEY = "modSession";
  let session = null;

  function hexToBytes(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
  }

  function bytesToHex(bytes) {
    return Array.from(new Uint8Array(bytes))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function randomSaltHex() {
    return bytesToHex(crypto.getRandomValues(new Uint8Array(16)));
  }

  async function pbkdf2Hash(password, saltHex, iterations) {
    const keyMaterial = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(password), { name: "PBKDF2" }, false, ["deriveBits"]
    );
    const bits = await crypto.subtle.deriveBits(
      { name: "PBKDF2", salt: hexToBytes(saltHex), iterations, hash: "SHA-256" },
      keyMaterial, 256
    );
    return bytesToHex(bits);
  }

  function findAccount(username) {
    return MOD_ACCOUNTS.find(a => a.username.toLowerCase() === (username || "").toLowerCase()) || null;
  }

  async function attemptLogin(username, password) {
    const account = findAccount(username);
    if (!account) return null;
    const computed = await pbkdf2Hash(password, account.salt, account.iterations);
    return computed === account.hash ? account : null;
  }

  function saveSession() {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  }

  function loadSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      // Re-validate against the current roster in case the account was
      // removed since this session was saved.
      if (parsed && findAccount(parsed.username)) {
        session = { username: parsed.username, role: findAccount(parsed.username).role };
        return session;
      }
    } catch (e) { /* ignore malformed/blocked storage */ }
    return null;
  }

  async function login(username, password) {
    const account = await attemptLogin(username, password);
    if (!account) return null;
    session = { username: account.username, role: account.role };
    saveSession();
    return session;
  }

  function logout() {
    session = null;
    saveSession();
  }

  function currentSession() {
    return session;
  }

  // Serializes MOD_ACCOUNTS back to the mod-accounts.js source text, for
  // "Copy updated mod-accounts.js" after adding/removing an account in the
  // browser — the human still has to paste it over the real file and
  // commit, same export-then-commit pattern as everything else here.
  function formatAccountsFile(accounts) {
    const lines = accounts.map(a =>
      `  {\n    username: ${JSON.stringify(a.username)},\n    salt: ${JSON.stringify(a.salt)},\n    hash: ${JSON.stringify(a.hash)},\n    iterations: ${a.iterations},\n    role: ${JSON.stringify(a.role)}\n  }`
    );
    return `// Moderator login accounts. Passwords are never stored in plaintext — each\n` +
      `// entry holds a random salt plus a PBKDF2-HMAC-SHA256 hash (200,000\n` +
      `// iterations), computed client-side via the browser's Web Crypto API on\n` +
      `// login and compared against the stored hash.\n` +
      `//\n` +
      `// This is a static site with no backend, and this repo is public, so treat\n` +
      `// this as a casual deterrent (keeps random visitors out of the moderator\n` +
      `// tools), not real account security — a determined attacker could still\n` +
      `// brute-force a weak password offline, just far more slowly than a plain\n` +
      `// hash would allow. Don't reuse an important password for an account here.\n` +
      `//\n` +
      `// The "main" role account cannot be removed and can add/remove other\n` +
      `// accounts from the moderator login screen once logged in.\n` +
      `const MOD_ACCOUNTS = [\n${lines.join(",\n")}\n];\n`;
  }

  async function addAccount(username, password, role) {
    const salt = randomSaltHex();
    const iterations = 200000;
    const hash = await pbkdf2Hash(password, salt, iterations);
    const account = { username, salt, hash, iterations, role: role || "mod" };
    MOD_ACCOUNTS.push(account);
    return account;
  }

  function removeAccount(username) {
    const idx = MOD_ACCOUNTS.findIndex(a => a.username.toLowerCase() === username.toLowerCase());
    if (idx === -1) return false;
    if (MOD_ACCOUNTS[idx].role === "main") return false;
    MOD_ACCOUNTS.splice(idx, 1);
    return true;
  }

  return {
    login, logout, loadSession, currentSession,
    findAccount, addAccount, removeAccount, formatAccountsFile
  };
})();
