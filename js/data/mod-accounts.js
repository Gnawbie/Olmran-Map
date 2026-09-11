// Moderator login accounts. Passwords are never stored in plaintext — each
// entry holds a random salt plus a PBKDF2-HMAC-SHA256 hash (200,000
// iterations), computed client-side via the browser's Web Crypto API on
// login and compared against the stored hash.
//
// This is a static site with no backend, and this repo is public, so treat
// this as a casual deterrent (keeps random visitors out of the moderator
// tools), not real account security — a determined attacker could still
// brute-force a weak password offline, just far more slowly than a plain
// hash would allow. Don't reuse an important password for an account here.
//
// The "main" role account cannot be removed and can add/remove other
// accounts from the moderator login screen once logged in.
const MOD_ACCOUNTS = [
  {
    username: "Gnawbie",
    salt: "f7e81ad3d84f5b171b8f5a670176ef81",
    hash: "01ef8e3e6c5949b13e4840f291cfd69c91d085b097373695110835d01165a84a",
    iterations: 200000,
    role: "main"
  }
];
