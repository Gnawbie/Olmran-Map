// Item-drop records for the "Items" tab of the Jump-to-Area sidebar, keyed
// by area name (the same name shown in the Area picker -- an area's flag
// name if it has one, otherwise its own name). Tree-shaped: each item lists
// every monster that drops it. A material is just an item with
// type: "material" -- shown in the same tree, no separate list.
//
// Extracted 2026-09-13 from the community-maintained
// "Olmran Community Eq and Stats List" spreadsheet (Equipment + Enchant &
// Craft Mats sheets), matched here purely by area-name text -- re-extract
// this file whenever that spreadsheet is updated, and note that entries
// will only actually show up once a Test Builder area's flag name matches
// one of these area names exactly.
const AREA_ITEMS = {
  "Abrishamkar Mountains": [
    {
      "item": "bar of bronze",
      "type": "material",
      "monsters": [
        "mountain nomad"
      ]
    },
    {
      "item": "black ice skewer",
      "type": "weapon",
      "monsters": [
        "egg-eater"
      ]
    },
    {
      "item": "blood red cloak",
      "type": "cloak",
      "monsters": [
        "birdwoman",
        "egg-eater"
      ]
    },
    {
      "item": "boots of growth",
      "type": "feet",
      "monsters": [
        "birdman"
      ]
    },
    {
      "item": "bow of night",
      "type": "weapon",
      "monsters": [
        "mountain nomad"
      ]
    },
    {
      "item": "breastplate of the falcon",
      "type": "body",
      "monsters": [
        "golden falcon"
      ]
    },
    {
      "item": "brightly glowing band",
      "type": "jewel",
      "monsters": [
        "golden falcon"
      ]
    },
    {
      "item": "crystalized elemental claymore",
      "type": "weapon",
      "monsters": [
        "large water elemental"
      ]
    },
    {
      "item": "defiant warlock's staff",
      "type": "weapon",
      "monsters": [
        "burly birdman"
      ]
    },
    {
      "item": "eagle's claw polearm",
      "type": "weapon",
      "monsters": [
        "silver eagle"
      ]
    },
    {
      "item": "eggshell cap",
      "type": "head",
      "monsters": [
        "burly birdman"
      ]
    },
    {
      "item": "feathered sandals",
      "type": "feet",
      "monsters": [
        "large water elemental"
      ]
    },
    {
      "item": "goat-hide buckler",
      "type": "shield",
      "monsters": [
        "mountain nomad"
      ]
    },
    {
      "item": "grim double-sided axe of the bear",
      "type": "weapon",
      "monsters": [
        "birdman"
      ]
    },
    {
      "item": "headband of memory",
      "type": "head",
      "monsters": [
        "scorned birdwoman"
      ]
    },
    {
      "item": "hunter's bow",
      "type": "weapon",
      "monsters": [
        "mountain nomad"
      ]
    },
    {
      "item": "leather boots of the birds",
      "type": "feet",
      "monsters": [
        "scorned birdwoman"
      ]
    },
    {
      "item": "leather pants of lion hide",
      "type": "legs",
      "monsters": [
        "mountain lion"
      ]
    },
    {
      "item": "lesser staff of lightning",
      "type": "weapon",
      "monsters": [
        "silver eagle"
      ]
    },
    {
      "item": "necklace of the sea",
      "type": "jewel",
      "monsters": [
        "siren"
      ]
    },
    {
      "item": "oiled explorer's jacket",
      "type": "body",
      "monsters": [
        "black wolf"
      ]
    },
    {
      "item": "pickaxe of polarity",
      "type": "weapon",
      "monsters": [
        "silver eagle"
      ]
    },
    {
      "item": "ringmail mountaineer's legguards",
      "type": "legs",
      "monsters": [
        "mountain griffin"
      ]
    },
    {
      "item": "siren's torn cloak",
      "type": "cloak",
      "monsters": [
        "siren"
      ]
    },
    {
      "item": "spider dagger",
      "type": "weapon",
      "monsters": [
        "egg-eater"
      ]
    },
    {
      "item": "studded nomad's harness",
      "type": "body",
      "monsters": [
        "mountain nomad"
      ]
    },
    {
      "item": "swooping death",
      "type": "weapon",
      "monsters": [
        "silver eagle"
      ]
    },
    {
      "item": "swooping raptor talons",
      "type": "weapon",
      "monsters": [
        "golden falcon"
      ]
    },
    {
      "item": "taskmaster's barbed baton",
      "type": "weapon",
      "monsters": [
        "burly birdman"
      ]
    },
    {
      "item": "torturer's cane",
      "type": "weapon",
      "monsters": [
        "siren"
      ]
    },
    {
      "item": "wyvern pike",
      "type": "weapon",
      "monsters": [
        "mountain wyvern"
      ]
    },
    {
      "item": "wyvern scales",
      "type": "material",
      "monsters": [
        "mountain wyvern"
      ]
    }
  ],
  "Arachenlair Forest": [
    {
      "item": "arcane spidersilk boots",
      "type": "feet",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "chitin-scaled recurve bow",
      "type": "weapon",
      "monsters": [
        "Broodmother, Nizeret"
      ]
    },
    {
      "item": "chitin-studded jacket",
      "type": "body",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "corroded hammer",
      "type": "weapon",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "crawler boots",
      "type": "feet",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "Dur'mulian scarab",
      "type": "jewel",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "fine black silk cape",
      "type": "cloak",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "gloves of distortion",
      "type": "hands",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "gloves of silkwood",
      "type": "hands",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "ichor-stained mesh boots",
      "type": "feet",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "jagged blade of chitin",
      "type": "weapon",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "pendant of ancient amber",
      "type": "jewel",
      "monsters": [
        "Broodmother, Nizeret"
      ]
    },
    {
      "item": "petrified spiderweave gauntlets",
      "type": "hands",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "raging lanate hammer",
      "type": "weapon",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "severed broodmother chelicera",
      "type": "weapon",
      "monsters": [
        "Broodmother, Nizeret"
      ]
    },
    {
      "item": "severed broodmother leg",
      "type": "weapon",
      "monsters": [
        "Broodmother, Nizeret"
      ]
    },
    {
      "item": "sharpened spider-leg spear",
      "type": "weapon",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "silk footguards of strength",
      "type": "feet",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "snow worm larva",
      "type": "material",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "sparkling spider-shaped broach",
      "type": "jewel",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "spider shield",
      "type": "shield",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "steady spiderwave leather boots",
      "type": "feet",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "thick spider-hair pants",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "thin chitin buckler",
      "type": "shield",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "torn studded riding leggings",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "travel-worn cloak",
      "type": "cloak",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "war-torn drape",
      "type": "cloak",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "warped hissing blade",
      "type": "weapon",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "widow's pike",
      "type": "weapon",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "worn studded scout's hood",
      "type": "head",
      "monsters": [
        "great hissing spider"
      ]
    }
  ],
  "Blackwoods": [
    {
      "item": "banded wolf's boots",
      "type": "feet",
      "monsters": [
        "twisted rock troll"
      ]
    },
    {
      "item": "bark-studded leggings",
      "type": "legs",
      "monsters": [
        "huge ettin"
      ]
    },
    {
      "item": "blood splattering maul",
      "type": "weapon",
      "monsters": [
        "twisted rock troll"
      ]
    },
    {
      "item": "brutish troll's jawbone axe",
      "type": "weapon",
      "monsters": [
        "troll woodsman"
      ]
    },
    {
      "item": "darkwood dagger",
      "type": "weapon",
      "monsters": [
        "undead ettin"
      ]
    },
    {
      "item": "dragon-skin boots",
      "type": "feet",
      "monsters": [
        "troll woodsman"
      ]
    },
    {
      "item": "dull onyx ring",
      "type": "jewel",
      "monsters": [
        "tree spirit"
      ]
    },
    {
      "item": "exalted wanderer's cape",
      "type": "cloak",
      "monsters": [
        "ogre enchanter"
      ]
    },
    {
      "item": "giant owl-hide leggings",
      "type": "legs",
      "monsters": [
        "troll woodsman"
      ]
    },
    {
      "item": "helmet of enchanted bark",
      "type": "head",
      "monsters": [
        "huge ettin",
        "tree spirit",
        "undead ettin"
      ]
    },
    {
      "item": "loop of bone",
      "type": "jewel",
      "monsters": [
        "forest troll"
      ]
    },
    {
      "item": "mage leggings of mist walking",
      "type": "legs",
      "monsters": [
        "ogre enchanter"
      ]
    },
    {
      "item": "ogre-knight's tempered kickers",
      "type": "feet",
      "monsters": [
        "ogre enchanter"
      ]
    },
    {
      "item": "Overseer's Impaler",
      "type": "weapon",
      "monsters": [
        "massive troll overseer"
      ]
    },
    {
      "item": "pair of earthshaker gloves",
      "type": "hands",
      "monsters": [
        "undead ettin"
      ]
    },
    {
      "item": "rakurite studded gloves",
      "type": "hands",
      "monsters": [
        "forest troll"
      ]
    },
    {
      "item": "rune-etched moon staff",
      "type": "weapon",
      "monsters": [
        "tree spirit"
      ]
    },
    {
      "item": "rune-shod pike",
      "type": "weapon",
      "monsters": [
        "ogre enchanter"
      ]
    },
    {
      "item": "runed gloves of violence",
      "type": "hands",
      "monsters": [
        "ogre enchanter"
      ]
    },
    {
      "item": "shiny ebony warfists",
      "type": "hands",
      "monsters": [
        "forest troll"
      ]
    },
    {
      "item": "studded nomad's cowl",
      "type": "head",
      "monsters": [
        "troll woodsman"
      ]
    },
    {
      "item": "twisted, blackened staff",
      "type": "weapon",
      "monsters": [
        "twisted rock troll"
      ]
    },
    {
      "item": "undead ettin armor",
      "type": "body",
      "monsters": [
        "undead ettin"
      ]
    },
    {
      "item": "undead's scarred plate greaves",
      "type": "legs",
      "monsters": [
        "undead ettin"
      ]
    },
    {
      "item": "wolfhide leggings",
      "type": "legs",
      "monsters": [
        "forest troll"
      ]
    }
  ],
  "Cavern of Roots": [
    {
      "item": "black rock",
      "type": "material",
      "monsters": [
        "swarm of root weevils"
      ]
    },
    {
      "item": "bloodsurged necklace of obscurity",
      "type": "jewel",
      "monsters": [
        "swarm of root weevils"
      ]
    },
    {
      "item": "breastplate of tainted earth",
      "type": "body",
      "monsters": [
        "death vine"
      ]
    },
    {
      "item": "charred black leather armor",
      "type": "body",
      "monsters": [
        "root of evil"
      ]
    },
    {
      "item": "cowl of bramblescar",
      "type": "head",
      "monsters": [
        "dande-lion"
      ]
    },
    {
      "item": "darkwood studded treads",
      "type": "feet",
      "monsters": [
        "swarm of root weevils"
      ]
    },
    {
      "item": "forked thistle blade",
      "type": "weapon",
      "monsters": [
        "dande-lioness"
      ]
    },
    {
      "item": "foul bronze bludgeon",
      "type": "weapon",
      "monsters": [
        "dande-lion"
      ]
    },
    {
      "item": "gauntlets of the swarm",
      "type": "hands",
      "monsters": [
        "swarm of root weevils"
      ]
    },
    {
      "item": "knuckles of thorns",
      "type": "weapon",
      "monsters": [
        "dande-lion"
      ]
    },
    {
      "item": "living-root buckler",
      "type": "shield",
      "monsters": [
        "venus man trap"
      ]
    },
    {
      "item": "lurker's blood leggings",
      "type": "legs",
      "monsters": [
        "death vine"
      ]
    },
    {
      "item": "midnight spider maul",
      "type": "weapon",
      "monsters": [
        "root of evil"
      ]
    },
    {
      "item": "pair of lost pathfinder boots",
      "type": "feet",
      "monsters": [
        "venus man trap"
      ]
    },
    {
      "item": "pair of old dirty magic gloves",
      "type": "hands",
      "monsters": [
        "venus man trap"
      ]
    },
    {
      "item": "perfectly woven boots",
      "type": "feet",
      "monsters": [
        "death vine"
      ]
    },
    {
      "item": "reinforced hunter's hood",
      "type": "head",
      "monsters": [
        "dande-lioness"
      ]
    },
    {
      "item": "robe of twisted vines",
      "type": "body",
      "monsters": [
        "slimy sodwyrm"
      ]
    },
    {
      "item": "screeching fire bow",
      "type": "weapon",
      "monsters": [
        "slimy sodwyrm"
      ]
    },
    {
      "item": "shroud of ironskin",
      "type": "cloak",
      "monsters": [
        "slimy sodwyrm"
      ]
    },
    {
      "item": "stone-dusted studded helm",
      "type": "head",
      "monsters": [
        "death vine"
      ]
    },
    {
      "item": "studded nomad's sandals",
      "type": "feet",
      "monsters": [
        "slimy sodwyrm"
      ]
    },
    {
      "item": "translucent great bow",
      "type": "weapon",
      "monsters": [
        "dande-lioness"
      ]
    },
    {
      "item": "twig of the mother tree",
      "type": "weapon",
      "monsters": [
        "dande-lion"
      ]
    }
  ],
  "Caverns of Gaggsith": [
    {
      "item": "balrog's fiery gauntlets",
      "type": "hands",
      "monsters": [
        "slimey-skinned black balrog"
      ]
    },
    {
      "item": "black cloak of discord",
      "type": "cloak",
      "monsters": [
        "sable-robed drow cultist"
      ]
    },
    {
      "item": "bloodied demonic gladius",
      "type": "weapon",
      "monsters": [
        "six-armed demonic swordsman"
      ]
    },
    {
      "item": "Bvolgard light shield",
      "type": "shield",
      "monsters": [
        "Bvolgard knight"
      ]
    },
    {
      "item": "charged crystal",
      "type": "material",
      "monsters": [
        "sable-robed drow cultist"
      ]
    },
    {
      "item": "coif of binding power",
      "type": "head",
      "monsters": [
        "slimey-skinned black balrog"
      ]
    },
    {
      "item": "demonic shiv",
      "type": "weapon",
      "monsters": [
        "six-armed demonic swordsman"
      ]
    },
    {
      "item": "demonmaster's flaming whip",
      "type": "weapon",
      "monsters": [
        "demonmaster of Bvolg"
      ]
    },
    {
      "item": "demons heartless footguards",
      "type": "feet",
      "monsters": [
        "grinning imp demon"
      ]
    },
    {
      "item": "demonscale leggings",
      "type": "legs",
      "monsters": [
        "veniom-winged red daemon"
      ]
    },
    {
      "item": "dirt covered gardening manual",
      "type": "weapon",
      "monsters": [
        "sable-robed drow cultist"
      ]
    },
    {
      "item": "gore splattered imp skull",
      "type": "jewel",
      "monsters": [
        "grinning imp demon"
      ]
    },
    {
      "item": "grinning keen teethed gauntlets",
      "type": "weapon",
      "monsters": [
        "grinning imp demon"
      ]
    },
    {
      "item": "hellforged greatsword",
      "type": "weapon",
      "monsters": [
        "veniom-winged red daemon"
      ]
    },
    {
      "item": "infernal flanged mace",
      "type": "weapon",
      "monsters": [
        "six-armed demonic swordsman"
      ]
    },
    {
      "item": "mischievious sling",
      "type": "weapon",
      "monsters": [
        "grinning imp demon"
      ]
    },
    {
      "item": "rune inscribed headband",
      "type": "head",
      "monsters": [
        "Bvolgard knight"
      ]
    },
    {
      "item": "scaled cape of faded visions",
      "type": "cloak",
      "monsters": [
        "veniom-winged red daemon"
      ]
    },
    {
      "item": "shiv of black ice",
      "type": "weapon",
      "monsters": [
        "Bvolgard knight"
      ]
    },
    {
      "item": "staff of twisted roots",
      "type": "weapon",
      "monsters": [
        "sable-robed drow cultist"
      ]
    },
    {
      "item": "voluminous, cowled brown robe",
      "type": "body",
      "monsters": [
        "demonmaster of Bvolg"
      ]
    }
  ],
  "Citadel of Gnovormir": [
    {
      "item": "armor of woven shadows",
      "type": "body",
      "monsters": [
        "spectral demon"
      ]
    },
    {
      "item": "dragoon plated gauntlets",
      "type": "hands",
      "monsters": [
        "tarnished platinum golem"
      ]
    },
    {
      "item": "fiery whirlwind axe",
      "type": "weapon",
      "monsters": [
        "spirit of a gnomic champion"
      ]
    },
    {
      "item": "heavy platinum fists",
      "type": "weapon",
      "monsters": [
        "tarnished platinum golem"
      ]
    },
    {
      "item": "hovering sword of the righteous",
      "type": "weapon",
      "monsters": [
        "whirlwind clockwork blade machine"
      ]
    },
    {
      "item": "imbued metal ribcage",
      "type": "body",
      "monsters": [
        "animated metal skeleton"
      ]
    },
    {
      "item": "pound of steel",
      "type": "material",
      "monsters": [
        "animated metal skeleton"
      ]
    },
    {
      "item": "red crystalline bow",
      "type": "weapon",
      "monsters": [
        "mysterious floating sphere"
      ]
    },
    {
      "item": "rune-etched platinum claymore",
      "type": "weapon",
      "monsters": [
        "tarnished platinum golem"
      ]
    },
    {
      "item": "scaled chestguard of freedom",
      "type": "body",
      "monsters": [
        "spirit of a gnomic warrior"
      ]
    },
    {
      "item": "shifting halberd",
      "type": "weapon",
      "monsters": [
        "spirit of a gnomic warrior"
      ]
    },
    {
      "item": "softly pulsing gloves of light",
      "type": "hands",
      "monsters": [
        "mysterious floating sphere"
      ]
    },
    {
      "item": "spark of light",
      "type": "jewel",
      "monsters": [
        "mysterious floating sphere"
      ]
    },
    {
      "item": "spiked gnomish warhammer",
      "type": "weapon",
      "monsters": [
        "spirit of a gnomic champion"
      ]
    },
    {
      "item": "staff of gears and springs",
      "type": "weapon",
      "monsters": [
        "giant clockwork spider"
      ]
    },
    {
      "item": "steam-powered grips of clockwork",
      "type": "hands",
      "monsters": [
        "whirling clockwork blade machine"
      ]
    },
    {
      "item": "studded greaves of misery",
      "type": "legs",
      "monsters": [
        "spectral demon"
      ]
    }
  ],
  "Class": [
    {
      "item": "ambusher's studded legwraps",
      "type": "legs",
      "monsters": [
        "Kenku"
      ]
    },
    {
      "item": "ancient's steel scaled legplates",
      "type": "legs",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "anointed Reilyn prayer beads",
      "type": "jewel",
      "monsters": [
        "Inquisitor"
      ]
    },
    {
      "item": "badly battered horned helm",
      "type": "head",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "bat shaped black iron pin",
      "type": "jewel",
      "monsters": [
        "Coven"
      ]
    },
    {
      "item": "beaming baton",
      "type": "weapon",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "black painted steel banded chest",
      "type": "body",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "black silk handwraps",
      "type": "hands",
      "monsters": [
        "Monk"
      ]
    },
    {
      "item": "black velvet cloak of dark powers",
      "type": "cloak",
      "monsters": [
        "Necromancer"
      ]
    },
    {
      "item": "blackened leather banded chest",
      "type": "body",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "blood etched staff of black wood",
      "type": "weapon",
      "monsters": [
        "Coven"
      ]
    },
    {
      "item": "blood red robes of the Inquisition",
      "type": "body",
      "monsters": [
        "Inquisitor"
      ]
    },
    {
      "item": "blood-dyed leather armor",
      "type": "body",
      "monsters": [
        "Coven"
      ]
    },
    {
      "item": "bloodstained berzerker's shoulderguards",
      "type": "body",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "bloodstone pentagram pendant",
      "type": "jewel",
      "monsters": [
        "Necromancer"
      ]
    },
    {
      "item": "bloody animal hide bound by rope",
      "type": "body",
      "monsters": [
        "Orc"
      ]
    },
    {
      "item": "boiled leather open face helm",
      "type": "head",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "bracelets of steelbound elf femurs",
      "type": "hands",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "Branch of the Holy Tree",
      "type": "weapon",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "buckle bound black leather cuirass",
      "type": "body",
      "monsters": [
        "Kobold"
      ]
    },
    {
      "item": "burning staff of hellfire",
      "type": "weapon",
      "monsters": [
        "Burning Hand"
      ]
    },
    {
      "item": "cape depicting the changing seasons",
      "type": "cloak",
      "monsters": [
        "Wizard"
      ]
    },
    {
      "item": "carved mammoth bone hilted claymore",
      "type": "weapon",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "carved mammoth bone xyston",
      "type": "weapon",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "carved mammoth handled bar mace",
      "type": "weapon",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "charred staff of hellfire",
      "type": "weapon",
      "monsters": [
        "Burning Hand"
      ]
    },
    {
      "item": "chestplate of hard leather leaves",
      "type": "body",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "chestplate of iron leaves",
      "type": "body",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "chiseled obsidian blade",
      "type": "weapon",
      "monsters": [
        "Kobold"
      ]
    },
    {
      "item": "circle amulet made from shaped twigs",
      "type": "jewel",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "cloak of the darkest night",
      "type": "cloak",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "cracked mask of the pariah",
      "type": "head",
      "monsters": [
        "Inquisitor"
      ]
    },
    {
      "item": "crudely cast spike of bits",
      "type": "weapon",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "dark crimson flowing satin cape",
      "type": "cloak",
      "monsters": [
        "Coven"
      ]
    },
    {
      "item": "decomposing flat top greathelm",
      "type": "head",
      "monsters": [
        "Zombie"
      ]
    },
    {
      "item": "dented, open faced steel barbute",
      "type": "head",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "dried human eye on a string",
      "type": "jewel",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "dull black crystal breastpin",
      "type": "jewel",
      "monsters": [
        "Sin"
      ]
    },
    {
      "item": "faded greying cloth hood",
      "type": "head",
      "monsters": [
        "Sin"
      ]
    },
    {
      "item": "featherless wings of studded leather",
      "type": "cloak",
      "monsters": [
        "Kenku"
      ]
    },
    {
      "item": "finely mended blade of bits",
      "type": "weapon",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "forge drawn hammer axe",
      "type": "weapon",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "forge welded maul of bits",
      "type": "weapon",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "forgotten battleworn plate armor",
      "type": "body",
      "monsters": [
        "Skeleton"
      ]
    },
    {
      "item": "fossilized wicked dragon's bone",
      "type": "weapon",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "fur lined squirrel skin forge gloves",
      "type": "hands",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "garnet ring with a twisted black gold band",
      "type": "jewel",
      "monsters": [
        "Stalker"
      ]
    },
    {
      "item": "giant wailing wood balista bolt",
      "type": "weapon",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "giant wailing wood handled war cleaver",
      "type": "weapon",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "giant wailing wood warhammer",
      "type": "weapon",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "gloves of the light gatherer",
      "type": "hands",
      "monsters": [
        "Wizard"
      ]
    },
    {
      "item": "gold trimmed white white fist pin",
      "type": "jewel",
      "monsters": [
        "Monk"
      ]
    },
    {
      "item": "grass dyed leather corselet",
      "type": "body",
      "monsters": [
        "Gnoll"
      ]
    },
    {
      "item": "grasshopper embroidered white silk robe",
      "type": "body",
      "monsters": [
        "Monk"
      ]
    },
    {
      "item": "greatstaff of fused mountain goat femurs",
      "type": "weapon",
      "monsters": [
        "Orc"
      ]
    },
    {
      "item": "greatstaff of fused mountain goat horns",
      "type": "weapon",
      "monsters": [
        "Orc"
      ]
    },
    {
      "item": "green woven twill wrap pants",
      "type": "legs",
      "monsters": [
        "Monk"
      ]
    },
    {
      "item": "grinning dagger",
      "type": "weapon",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "Hammer of Decay",
      "type": "weapon",
      "monsters": [
        "Zombie"
      ]
    },
    {
      "item": "hardened leather long smith's apron",
      "type": "body",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "heirloom sharpshooter's wrapped crossbow",
      "type": "weapon",
      "monsters": [
        "Gnoll"
      ]
    },
    {
      "item": "Holy Knight's Club of Purification",
      "type": "weapon",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "holy knight's pledge pin",
      "type": "jewel",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "Holy Knight's Rapier of Truth",
      "type": "weapon",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "Holy Knight's Sword of the Sinless",
      "type": "weapon",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "intricately laced fur lined cloth buskin",
      "type": "feet",
      "monsters": [
        "Bard"
      ]
    },
    {
      "item": "Ivory Breastplate of Hope",
      "type": "body",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "ivory handled black steel bulawa",
      "type": "weapon",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "ivory hilted black steel blade",
      "type": "weapon",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "ivory hilted black steel katar",
      "type": "weapon",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "jagged black stone staff",
      "type": "weapon",
      "monsters": [
        "Necromancer"
      ]
    },
    {
      "item": "Karimere maple composite bow",
      "type": "weapon",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "knobbly black staff",
      "type": "weapon",
      "monsters": [
        "Sin"
      ]
    },
    {
      "item": "lava rock stone staff",
      "type": "weapon",
      "monsters": [
        "Ogre"
      ]
    },
    {
      "item": "lava shard stone staff",
      "type": "weapon",
      "monsters": [
        "Ogre"
      ]
    },
    {
      "item": "Leather Breastplate of Hope",
      "type": "body",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "leather cord tied to an engraved ring",
      "type": "jewel",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "Leather Tunic of Burning whispers",
      "type": "body",
      "monsters": [
        "Xionakis"
      ]
    },
    {
      "item": "long wicked dragon's tooth",
      "type": "weapon",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "lurker's cloak of woven grass",
      "type": "cloak",
      "monsters": [
        "Gnoll"
      ]
    },
    {
      "item": "Medal of Fallen Fire",
      "type": "jewel",
      "monsters": [
        "Burning Hand"
      ]
    },
    {
      "item": "mended pants of fleeing",
      "type": "legs",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "metalcrafter's two hand sledge",
      "type": "weapon",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "midnight forged blade of shadows",
      "type": "weapon",
      "monsters": [
        "Vampire"
      ]
    },
    {
      "item": "midnight forged foil of shadows",
      "type": "weapon",
      "monsters": [
        "Vampire"
      ]
    },
    {
      "item": "midnight forged scepter of shadows",
      "type": "weapon",
      "monsters": [
        "Vampire"
      ]
    },
    {
      "item": "midnight purple beak cover",
      "type": "head",
      "monsters": [
        "Kenku"
      ]
    },
    {
      "item": "mirror polished full faced helmet",
      "type": "head",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "nightmist leggings of shadowdancing",
      "type": "legs",
      "monsters": [
        "Stalker"
      ]
    },
    {
      "item": "ogrefire scorched stone",
      "type": "jewel",
      "monsters": [
        "Ogre"
      ]
    },
    {
      "item": "pair of hardened reef sharkskin boots",
      "type": "feet",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "pair of rust covered warboots",
      "type": "legs",
      "monsters": [
        "Zombie"
      ]
    },
    {
      "item": "patchwork quilted padded leather vest",
      "type": "body",
      "monsters": [
        "Goblin"
      ]
    },
    {
      "item": "philosopher's walking stick",
      "type": "weapon",
      "monsters": [
        "Wizard"
      ]
    },
    {
      "item": "polished black stone staff",
      "type": "weapon",
      "monsters": [
        "Necromancer"
      ]
    },
    {
      "item": "polished full faced leather helm",
      "type": "head",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "Raven's Beak Spiked Hammer",
      "type": "weapon",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "raw Arachenlair silk bodywrap",
      "type": "body",
      "monsters": [
        "Ogre"
      ]
    },
    {
      "item": "red gloves of internal flame",
      "type": "hands",
      "monsters": [
        "Ogre"
      ]
    },
    {
      "item": "reinforced leather blacksmithing gloves",
      "type": "hands",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "ring of blackened moon rock",
      "type": "jewel",
      "monsters": [
        "Werewolf"
      ]
    },
    {
      "item": "robe of ancient visions",
      "type": "body",
      "monsters": [
        "Sin"
      ]
    },
    {
      "item": "Robes of Unholy Magic",
      "type": "body",
      "monsters": [
        "Necromancer"
      ]
    },
    {
      "item": "Roots of the Holy Tree",
      "type": "weapon",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "rope handled polished obsidian block",
      "type": "weapon",
      "monsters": [
        "Kobold"
      ]
    },
    {
      "item": "rune engraved staff of black wood",
      "type": "weapon",
      "monsters": [
        "Coven"
      ]
    },
    {
      "item": "scalpel of interrogation",
      "type": "weapon",
      "monsters": [
        "Inquisitor"
      ]
    },
    {
      "item": "scoundrel's wrapped leather armor",
      "type": "body",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "set of leather fingerless half gloves",
      "type": "hands",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "set of mended chitinplate shinguards",
      "type": "legs",
      "monsters": [
        "Troll"
      ]
    },
    {
      "item": "set of plated fingerless half gloves",
      "type": "hands",
      "monsters": [
        "Rogue"
      ]
    },
    {
      "item": "shearling soled sneaker's sandals",
      "type": "feet",
      "monsters": [
        "Gnoll"
      ]
    },
    {
      "item": "shortbow of harmonic assault",
      "type": "weapon",
      "monsters": [
        "Bard"
      ]
    },
    {
      "item": "silk footpads of the stalker",
      "type": "feet",
      "monsters": [
        "Werewolf"
      ]
    },
    {
      "item": "skull and crossbone coin on a string",
      "type": "jewel",
      "monsters": [
        "Kobold"
      ]
    },
    {
      "item": "slime covered corroded breastplate",
      "type": "body",
      "monsters": [
        "Zombie"
      ]
    },
    {
      "item": "sliver of wailing wood",
      "type": "weapon",
      "monsters": [
        "Kobold"
      ]
    },
    {
      "item": "smiling slicer",
      "type": "weapon",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "smoldering hellforged spike launcher",
      "type": "weapon",
      "monsters": [
        "Xionakis"
      ]
    },
    {
      "item": "smooth black staff",
      "type": "weapon",
      "monsters": [
        "Sin"
      ]
    },
    {
      "item": "Snarewood spun spidersilk vest",
      "type": "body",
      "monsters": [
        "Werewolf"
      ]
    },
    {
      "item": "soot covered pair of dancer's boots",
      "type": "feet",
      "monsters": [
        "Imp"
      ]
    },
    {
      "item": "soot covered rainment of black flame",
      "type": "body",
      "monsters": [
        "Burning Hand"
      ]
    },
    {
      "item": "sophist's walking stick",
      "type": "weapon",
      "monsters": [
        "Wizard"
      ]
    },
    {
      "item": "staghorn crab shell plated armor",
      "type": "body",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "steel lined blacksmithing gloves",
      "type": "hands",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "steel plate banded long smith's apron",
      "type": "body",
      "monsters": [
        "Craftsman"
      ]
    },
    {
      "item": "steel plated cape of living moss",
      "type": "cloak",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "stitched leather cape of living moss",
      "type": "cloak",
      "monsters": [
        "Ranger"
      ]
    },
    {
      "item": "stormchaser's overcoat",
      "type": "body",
      "monsters": [
        "Wizard"
      ]
    },
    {
      "item": "studded bodywrap of shattered fortunes",
      "type": "body",
      "monsters": [
        "Kenku"
      ]
    },
    {
      "item": "sturdy set of burnt leather legwraps",
      "type": "legs",
      "monsters": [
        "Xionakis"
      ]
    },
    {
      "item": "tattered cloth sheet",
      "type": "cloak",
      "monsters": [
        "Burning Hand"
      ]
    },
    {
      "item": "tattered knee length pantaloons",
      "type": "legs",
      "monsters": [
        "Werewolf"
      ]
    },
    {
      "item": "tight fitting vest over a puffy, ruffled shirt",
      "type": "body",
      "monsters": [
        "Bard"
      ]
    },
    {
      "item": "tight-fitting black leather vest",
      "type": "body",
      "monsters": [
        "Vampire"
      ]
    },
    {
      "item": "torn and tied animal skin waistwrap",
      "type": "legs",
      "monsters": [
        "Orc"
      ]
    },
    {
      "item": "twisted rope bracelet of servitude",
      "type": "jewel",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "velvet gold rimmed floppy muffin hat",
      "type": "head",
      "monsters": [
        "Bard"
      ]
    },
    {
      "item": "white cured leather chestplate",
      "type": "body",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "white flowing lambskin cape",
      "type": "cloak",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "white flowing plated cape",
      "type": "cloak",
      "monsters": [
        "Priest"
      ]
    },
    {
      "item": "white painted steel chestplate",
      "type": "body",
      "monsters": [
        "Paladin"
      ]
    },
    {
      "item": "wicked dragon's shoulder blade",
      "type": "weapon",
      "monsters": [
        "Lizardman"
      ]
    },
    {
      "item": "worn set of flame kissed leather boots",
      "type": "feet",
      "monsters": [
        "Xionakis"
      ]
    }
  ],
  "Crystalline Mines": [
    {
      "item": "ancient sharpened femur",
      "type": "weapon",
      "monsters": [
        "skeleton slave"
      ]
    },
    {
      "item": "bar of steel",
      "type": "material",
      "monsters": [
        "skeleton slave"
      ]
    },
    {
      "item": "cluster of worm teeth",
      "type": "weapon",
      "monsters": [
        "cartiaka worm"
      ]
    },
    {
      "item": "elven trueaim helmet",
      "type": "head",
      "monsters": [
        "Elf slave"
      ]
    },
    {
      "item": "gloves of eternal labor",
      "type": "hands",
      "monsters": [
        "skeleton slave"
      ]
    },
    {
      "item": "pound of steel",
      "type": "material",
      "monsters": [
        "skeleton slave"
      ]
    },
    {
      "item": "regal jet black trousers",
      "type": "legs",
      "monsters": [
        "dark shawalein"
      ]
    },
    {
      "item": "shadowed cloak of blades",
      "type": "cloak",
      "monsters": [
        "dark shawalein"
      ]
    },
    {
      "item": "tattered red robes",
      "type": "body",
      "monsters": [
        "ogre slave"
      ]
    },
    {
      "item": "wormhide cowl",
      "type": "head",
      "monsters": [
        "cartiaka worm"
      ]
    },
    {
      "item": "woven cartiaka silk boots",
      "type": "feet",
      "monsters": [
        "cartiaka worm"
      ]
    }
  ],
  "Curdled Blood Marsh": [
    {
      "item": "blood-smeared cape of petals",
      "type": "cloak",
      "monsters": [
        "wilted blood lotus"
      ]
    },
    {
      "item": "bloodlord's ivory walkers",
      "type": "feet",
      "monsters": [
        "rotted blood root"
      ]
    },
    {
      "item": "charred visored helm",
      "type": "head",
      "monsters": [
        "corrosive giant red newt"
      ]
    },
    {
      "item": "crimson staff of dark rituals",
      "type": "weapon",
      "monsters": [
        "wilted blood lotus"
      ]
    },
    {
      "item": "crocodile tear",
      "type": "material",
      "monsters": [
        "venomous giant crocodile"
      ]
    },
    {
      "item": "crossbow of stinging",
      "type": "weapon",
      "monsters": [
        "crazed giant mosquito"
      ]
    },
    {
      "item": "dull ringmail boots",
      "type": "feet",
      "monsters": [
        "wilted blood lotus"
      ]
    },
    {
      "item": "ebon vest of blight",
      "type": "body",
      "monsters": [
        "toxic blood snake"
      ]
    },
    {
      "item": "ember-fused molten tachi",
      "type": "weapon",
      "monsters": [
        "noxious dragon's fly"
      ]
    },
    {
      "item": "fists of faded voices",
      "type": "hands",
      "monsters": [
        "convulsing giant leech"
      ]
    },
    {
      "item": "legionnaire cloth cap",
      "type": "head",
      "monsters": [
        "baleful blood salamander"
      ]
    },
    {
      "item": "mage's dissident robes",
      "type": "body",
      "monsters": [
        "wilted blood lotus"
      ]
    },
    {
      "item": "marsh stalker's greaves",
      "type": "legs",
      "monsters": [
        "venemous giant crocodile"
      ]
    },
    {
      "item": "one-handed flesh carver",
      "type": "weapon",
      "monsters": [
        "noxious dragon's fly"
      ]
    },
    {
      "item": "oozing firefly's head",
      "type": "head",
      "monsters": [
        "dragon's fly maggot"
      ]
    },
    {
      "item": "sanguine ringmail coif",
      "type": "head",
      "monsters": [
        "toxic blood snake"
      ]
    },
    {
      "item": "studded nomad's kilt",
      "type": "legs",
      "monsters": [
        "dragon's fly maggot"
      ]
    },
    {
      "item": "twin-blades of blood",
      "type": "weapon",
      "monsters": [
        "cancerous red vine snake",
        "toxic blood snake"
      ]
    },
    {
      "item": "two-handed marsh axe",
      "type": "weapon",
      "monsters": [
        "berzerk leeching vine"
      ]
    },
    {
      "item": "wavering marsh headgear",
      "type": "head",
      "monsters": [
        "baleful blood salamander"
      ]
    }
  ],
  "Darikor": [
    {
      "item": "azure jewel encrusted gavel",
      "type": "weapon",
      "monsters": [
        "jungle explorer"
      ]
    },
    {
      "item": "chunk of iron",
      "type": "material",
      "monsters": [
        "iron ore dealer"
      ]
    },
    {
      "item": "pile of leather",
      "type": "material",
      "monsters": [
        "leather dealer"
      ]
    },
    {
      "item": "silver nugget",
      "type": "material",
      "monsters": [
        "miner"
      ]
    },
    {
      "item": "sturdy iron chest piece",
      "type": "body",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sturdy iron helm",
      "type": "head",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sturdy pair of iron boots",
      "type": "feet",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sturdy pair of iron gauntlets",
      "type": "hands",
      "monsters": [
        "Shop",
        "master craftsman"
      ]
    },
    {
      "item": "sturdy pair of iron leggings",
      "type": "legs",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Darikor Coast": [
    {
      "item": "long skullhead staff",
      "type": "weapon",
      "monsters": [
        "wandering vagabond",
        "wild-eyed kobold pirate"
      ]
    },
    {
      "item": "turtle shell",
      "type": "material",
      "monsters": [
        "snapping rigan sea-turtle"
      ]
    },
    {
      "item": "vagabond's broken clawfist",
      "type": "weapon",
      "monsters": [
        "wandering vagabond"
      ]
    }
  ],
  "Darikor Forest": [
    {
      "item": "apothecary spellstaff",
      "type": "weapon",
      "monsters": [
        "large porcupine"
      ]
    },
    {
      "item": "deadman's cleaver",
      "type": "weapon",
      "monsters": [
        "black-winged hawk",
        "leaping toad"
      ]
    },
    {
      "item": "destroyer",
      "type": "weapon",
      "monsters": [
        "leaping toad",
        "rabid armadillo"
      ]
    },
    {
      "item": "fine two-handed axe",
      "type": "weapon",
      "monsters": [
        "rabid armadillo"
      ]
    },
    {
      "item": "fitted silk slippers",
      "type": "feet",
      "monsters": [
        "dancing fairy"
      ]
    },
    {
      "item": "flanged mace",
      "type": "weapon",
      "monsters": [
        "large porcupine",
        "red-eyed crow",
        "spitting mouse",
        "woodland bunny"
      ]
    },
    {
      "item": "fur-lined boots",
      "type": "feet",
      "monsters": [
        "silver fox"
      ]
    },
    {
      "item": "pair of cloth gloves",
      "type": "hands",
      "monsters": [
        "large porcupine"
      ]
    },
    {
      "item": "pair of rustbound gauntlets",
      "type": "hands",
      "monsters": [
        "red-eyed crow"
      ]
    },
    {
      "item": "spidersilk skirt",
      "type": "legs",
      "monsters": [
        "spitting mouse"
      ]
    },
    {
      "item": "staff of the treant",
      "type": "weapon",
      "monsters": [
        "leaping toad",
        "silver fox"
      ]
    },
    {
      "item": "steel scimitar",
      "type": "weapon",
      "monsters": [
        "dancing fairy"
      ]
    },
    {
      "item": "turtle hide helm",
      "type": "head",
      "monsters": [
        "flying squirrel",
        "large porcupine"
      ]
    }
  ],
  "Darikor Great Hall": [
    {
      "item": "pitch-black ranseur",
      "type": "weapon",
      "monsters": [
        "Stonefist lizardman"
      ]
    }
  ],
  "Darikor Ogre Tower": [
    {
      "item": "bright green robe of magicks",
      "type": "body",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "mage's cap of fire and earth",
      "type": "head",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "magnifying glass",
      "type": "wielded",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "staff of flickering flames",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Darikor Tannery": [
    {
      "item": "blood-red studded leather cuirass",
      "type": "body",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "foul studded leather leggings",
      "type": "legs",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "gloves of sewn possum hide",
      "type": "hands",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pair of slightly worn boots",
      "type": "hands",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "patchwork leather helmet",
      "type": "head",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "small leather shield",
      "type": "shield",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "tight leather pants",
      "type": "legs",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Deadlands": [
    {
      "item": "abysmal underworld rod",
      "type": "weapon",
      "monsters": [
        "underworld mystic"
      ]
    },
    {
      "item": "aegis of the underworld",
      "type": "shield",
      "monsters": [
        "underworld honor guard"
      ]
    },
    {
      "item": "aged leggings of movement",
      "type": "legs",
      "monsters": [
        "underworld assassin"
      ]
    },
    {
      "item": "blade of concentrated shadow",
      "type": "weapon",
      "monsters": [
        "underworld assassin"
      ]
    },
    {
      "item": "bone cuirass of blessed nightmares",
      "type": "body",
      "monsters": [
        "underdweller"
      ]
    },
    {
      "item": "boots of twisted torment",
      "type": "feet",
      "monsters": [
        "undead warrior general"
      ]
    },
    {
      "item": "boundless shackles of energy",
      "type": "weapon",
      "monsters": [
        "underworld honor guard"
      ]
    },
    {
      "item": "crown of black rotting leaves",
      "type": "head",
      "monsters": [
        "underwold mystic"
      ]
    },
    {
      "item": "flesh-eating longbow",
      "type": "weapon",
      "monsters": [
        "flesh eater"
      ]
    },
    {
      "item": "forsaken broadsword",
      "type": "weapon",
      "monsters": [
        "fallen troll warrior"
      ]
    },
    {
      "item": "greatplate of the dead",
      "type": "body",
      "monsters": [
        "fallen troll warrior"
      ]
    },
    {
      "item": "grips of the damned",
      "type": "hands",
      "monsters": [
        "flesh eater"
      ]
    },
    {
      "item": "hammer of midnight",
      "type": "weapon",
      "monsters": [
        "underworld honor guard"
      ]
    },
    {
      "item": "helm of the ancients",
      "type": "head",
      "monsters": [
        "undead warrior general"
      ]
    },
    {
      "item": "hood of stitched flesh",
      "type": "head",
      "monsters": [
        "fleshed eater"
      ]
    },
    {
      "item": "leggings of flame",
      "type": "legs",
      "monsters": [
        "flaming ogre skeleton"
      ]
    },
    {
      "item": "lump of clay",
      "type": "material",
      "monsters": [
        "underdweller"
      ]
    },
    {
      "item": "maul of decay",
      "type": "weapon",
      "monsters": [
        "black plague zombie"
      ]
    },
    {
      "item": "plate warboots of molten fire",
      "type": "feet",
      "monsters": [
        "flaming ogre skeleton"
      ]
    },
    {
      "item": "rotting zombie's hands",
      "type": "hands",
      "monsters": [
        "black plague zombie"
      ]
    },
    {
      "item": "veil of death",
      "type": "head",
      "monsters": [
        "underdweller"
      ]
    },
    {
      "item": "void-touched glass rod",
      "type": "weapon",
      "monsters": [
        "flaming ogre skeleton"
      ]
    },
    {
      "item": "warmaster's mastercraft leggings",
      "type": "legs",
      "monsters": [
        "undead warrior general"
      ]
    },
    {
      "item": "wraith's footwraps of blight",
      "type": "feet",
      "monsters": [
        "underdweller"
      ]
    }
  ],
  "Doral Coast": [
    {
      "item": "alloy staghorn shield",
      "type": "shield",
      "monsters": [
        "alloy-shelled staghorn crab"
      ]
    },
    {
      "item": "bloody victor's scaled handguards",
      "type": "hands",
      "monsters": [
        "predatory staghorn caiman"
      ]
    },
    {
      "item": "blue-green rippling leggings",
      "type": "legs",
      "monsters": [
        "sea warrior"
      ]
    },
    {
      "item": "carapace plated boots",
      "type": "feet",
      "monsters": [
        "steel-shelled staghorn crab"
      ]
    },
    {
      "item": "dismal studded leggings",
      "type": "legs",
      "monsters": [
        "coral reef sentinel"
      ]
    },
    {
      "item": "gator grips",
      "type": "hands",
      "monsters": [
        "predatory staghorn caiman"
      ]
    },
    {
      "item": "giant conch shield",
      "type": "shield",
      "monsters": [
        "coral knight"
      ]
    },
    {
      "item": "glistening titan's maul",
      "type": "weapon",
      "monsters": [
        "coral reef sentinel"
      ]
    },
    {
      "item": "golden greatsword",
      "type": "weapon",
      "monsters": [
        "coral knight"
      ]
    },
    {
      "item": "legguards of vigilance",
      "type": "legs",
      "monsters": [
        "coral reef sentinel"
      ]
    },
    {
      "item": "legionnaire's cloth pants",
      "type": "legs",
      "monsters": [
        "sea warrior"
      ]
    },
    {
      "item": "primitive staghorn shield",
      "type": "shield",
      "monsters": [
        "steel-shelled staghorn crab"
      ]
    },
    {
      "item": "robe of the sea",
      "type": "body",
      "monsters": [
        "coral knight"
      ]
    },
    {
      "item": "shroud of the starkeeper",
      "type": "head",
      "monsters": [
        "coral reef sentinel"
      ]
    },
    {
      "item": "spiked skeletal femur mace",
      "type": "weapon",
      "monsters": [
        "sea warrior"
      ]
    },
    {
      "item": "staghorn claw",
      "type": "weapon",
      "monsters": [
        "mithril-shelled staghorn crab"
      ]
    },
    {
      "item": "staghorn shell armor",
      "type": "body",
      "monsters": [
        "steel-shelled staghorn crab"
      ]
    },
    {
      "item": "sunken pirates hook",
      "type": "weapon",
      "monsters": [
        "sea warrior"
      ]
    },
    {
      "item": "thundering crystal dagger",
      "type": "weapon",
      "monsters": [
        "sea warrior"
      ]
    },
    {
      "item": "vindication grips",
      "type": "hands",
      "monsters": [
        "coral knight"
      ]
    }
  ],
  "Doral Straits": [
    {
      "item": "barnacle studded chestpiece",
      "type": "body",
      "monsters": [
        "riftwater prowler"
      ]
    },
    {
      "item": "blade of petrified coral",
      "type": "weapon",
      "monsters": [
        "enormous doral squid"
      ]
    },
    {
      "item": "chunk of coral",
      "type": "jewel",
      "monsters": [
        "lesser plague shark"
      ]
    },
    {
      "item": "Doral driftwood staff",
      "type": "weapon",
      "monsters": [
        "frantic reef shark",
        "huge startled brown stingray"
      ]
    },
    {
      "item": "doral greatspear",
      "type": "weapon",
      "monsters": [
        "huge startled brown stingray"
      ]
    },
    {
      "item": "eel eye",
      "type": "material",
      "monsters": [
        "red striped water eel"
      ]
    },
    {
      "item": "eel skin boots",
      "type": "feet",
      "monsters": [
        "red striped water eel"
      ]
    },
    {
      "item": "giant stinger",
      "type": "weapon",
      "monsters": [
        "huge startled brown stingray"
      ]
    },
    {
      "item": "hazy cotton pants",
      "type": "legs",
      "monsters": [
        "riftwater prowler"
      ]
    },
    {
      "item": "inky black gauntlets",
      "type": "hands",
      "monsters": [
        "enormous doral squid"
      ]
    },
    {
      "item": "legplates of deep currents",
      "type": "legs",
      "monsters": [
        "red striped water eel"
      ]
    },
    {
      "item": "manta vertabrae bow",
      "type": "weapon",
      "monsters": [
        "riftwater prowler"
      ]
    },
    {
      "item": "seastalker gauntlets",
      "type": "hands",
      "monsters": [
        "lesser plague shark"
      ]
    },
    {
      "item": "shark skin helmet",
      "type": "head",
      "monsters": [
        "frantic reef shark",
        "greater plague shark"
      ]
    },
    {
      "item": "skin of a shark",
      "type": "wielded",
      "monsters": [
        "greater plague shark"
      ]
    }
  ],
  "Dragonclaw Island": [
    {
      "item": "ancient saurian two-bladed sword",
      "type": "weapon",
      "monsters": [
        "mounted dragon rider general"
      ]
    },
    {
      "item": "circlet of draconic wisdom",
      "type": "head",
      "monsters": [
        "white dragon elder"
      ]
    },
    {
      "item": "crystallized ebony tear",
      "type": "jewel",
      "monsters": [
        "black dragon elder"
      ]
    },
    {
      "item": "elder's pendant of dedication",
      "type": "jewel",
      "monsters": [
        "white dragon elder"
      ]
    },
    {
      "item": "flamescale warhammer",
      "type": "weapon",
      "monsters": [
        "flaming wyrm"
      ]
    },
    {
      "item": "flaming wyrmtalon longbow",
      "type": "weapon",
      "monsters": [
        "ancient fire wyrm"
      ]
    },
    {
      "item": "flickering blackened flamberge",
      "type": "weapon",
      "monsters": [
        "flaming wyrm"
      ]
    },
    {
      "item": "frosbound clawed gauntlets",
      "type": "hands",
      "monsters": [
        "icy wyrm"
      ]
    },
    {
      "item": "gem-capped staff of wyrms",
      "type": "weapon",
      "monsters": [
        "ancient fire wyrm"
      ]
    },
    {
      "item": "helmet of frostbite",
      "type": "head",
      "monsters": [
        "ancient wyrm of winter"
      ]
    },
    {
      "item": "ice lord's azure cowl",
      "type": "head",
      "monsters": [
        "icy wyrm"
      ]
    },
    {
      "item": "obsidian dragonscale kilt",
      "type": "legs",
      "monsters": [
        "mounted dragon rider lieutenant"
      ]
    },
    {
      "item": "spear of twisted reality",
      "type": "weapon",
      "monsters": [
        "venemous wyrm"
      ]
    },
    {
      "item": "studded cowl of fury",
      "type": "head",
      "monsters": [
        "black dragon elder"
      ]
    },
    {
      "item": "supple white wyrm boots",
      "type": "feet",
      "monsters": [
        "ancient wyrm of winter"
      ]
    },
    {
      "item": "torn Draconian wing bracelet",
      "type": "jewel",
      "monsters": [
        "mounted dragon rider lieutenant"
      ]
    },
    {
      "item": "venomous wyrm treads",
      "type": "feet",
      "monsters": [
        "venemous wyrm"
      ]
    },
    {
      "item": "venomspine brigandine",
      "type": "body",
      "monsters": [
        "venemous wyrm"
      ]
    },
    {
      "item": "winged sky-knight's armet",
      "type": "head",
      "monsters": [
        "mounted dragon rider"
      ]
    }
  ],
  "Drakurat's Spine - Cave": [
    {
      "item": "brutal studded cap",
      "type": "head",
      "monsters": [
        "dragon rider"
      ]
    },
    {
      "item": "dragon cavalier's spurs",
      "type": "feet",
      "monsters": [
        "master dragon rider"
      ]
    },
    {
      "item": "dragon-paragon's vestments",
      "type": "body",
      "monsters": [
        "master dragon rider"
      ]
    },
    {
      "item": "heavy dragon scale leggings",
      "type": "legs",
      "monsters": [
        "dragon rider instructor"
      ]
    },
    {
      "item": "honorbound footsteps",
      "type": "feet",
      "monsters": [
        "apprentice rider"
      ]
    },
    {
      "item": "lance of devastation",
      "type": "weapon",
      "monsters": [
        "dragon rider adept"
      ]
    },
    {
      "item": "mist-dragon protector's gloves",
      "type": "hands",
      "monsters": [
        "dragon rider"
      ]
    },
    {
      "item": "skyborn sword of Drakurat",
      "type": "weapon",
      "monsters": [
        "dragon rider instructor"
      ]
    }
  ],
  "Drakurat's Spine - Lower": [
    {
      "item": "cinder singed dragonspawn breastplate",
      "type": "body",
      "monsters": [
        "blazing drake"
      ]
    },
    {
      "item": "dragon hatchling's talon",
      "type": "weapon",
      "monsters": [
        "blue dragon hatchling"
      ]
    },
    {
      "item": "dragon hide buckler",
      "type": "shield",
      "monsters": [
        "red dragon hatchling"
      ]
    },
    {
      "item": "dragon rider's longsword",
      "type": "weapon",
      "monsters": [
        "apprentice rider"
      ]
    },
    {
      "item": "dragon-claw necklace",
      "type": "jewel",
      "monsters": [
        "green dragon hatchling"
      ]
    },
    {
      "item": "dragon-leather jerkin",
      "type": "body",
      "monsters": [
        "snow dragon hatchling"
      ]
    },
    {
      "item": "Drakurat's cape of the talon",
      "type": "cloak",
      "monsters": [
        "pale drake"
      ]
    },
    {
      "item": "enchanted blue-frosted battle axe",
      "type": "weapon",
      "monsters": [
        "blizzard drake"
      ]
    },
    {
      "item": "frost-rimed drakebone blade",
      "type": "weapon",
      "monsters": [
        "pale drake"
      ]
    },
    {
      "item": "greathammer of winter",
      "type": "weapon",
      "monsters": [
        "snow dragon hatchling"
      ]
    },
    {
      "item": "guardian drake's claws",
      "type": "hands",
      "monsters": [
        "noxious drake"
      ]
    },
    {
      "item": "hammer of white flame",
      "type": "weapon",
      "monsters": [
        "white dragon hatchling"
      ]
    },
    {
      "item": "ivory studded tunic",
      "type": "body",
      "monsters": [
        "pale drake"
      ]
    },
    {
      "item": "lance of dragontide",
      "type": "weapon",
      "monsters": [
        "apprentice rider"
      ]
    },
    {
      "item": "length of petrified dragon bone",
      "type": "weapon",
      "monsters": [
        "white dragon hatchling"
      ]
    },
    {
      "item": "noxious partisan",
      "type": "weapon",
      "monsters": [
        "noxious drake"
      ]
    },
    {
      "item": "pale boots of frost",
      "type": "feet",
      "monsters": [
        "pale drake"
      ]
    },
    {
      "item": "red dragon tooth",
      "type": "weapon",
      "monsters": [
        "red dragon hatchling"
      ]
    },
    {
      "item": "scaled dragon hide leggings",
      "type": "legs",
      "monsters": [
        "blue dragon hatchling"
      ]
    },
    {
      "item": "scarred dragonscale great boots",
      "type": "feet",
      "monsters": [
        "mounted journeyman rider"
      ]
    },
    {
      "item": "sharpened dragonspine spear",
      "type": "weapon",
      "monsters": [
        "green dragon hatchling"
      ]
    },
    {
      "item": "talon of the blue",
      "type": "weapon",
      "monsters": [
        "blue dragon hatchling"
      ]
    },
    {
      "item": "volcanic two-handed mace",
      "type": "weapon",
      "monsters": [
        "blazing drake"
      ]
    },
    {
      "item": "zealous dragoncaller leggings",
      "type": "legs",
      "monsters": [
        "apprentice rider"
      ]
    }
  ],
  "Drakurat's Spine - Upper": [
    {
      "item": "azure boots of misty rain",
      "type": "feet",
      "monsters": [
        "azure dragon"
      ]
    },
    {
      "item": "dragon claw gloves",
      "type": "hands",
      "monsters": [
        "mounted journeyman rider"
      ]
    },
    {
      "item": "Dragon's tooth staff",
      "type": "weapon",
      "monsters": [
        "minor blue dragon"
      ]
    },
    {
      "item": "dragonflame crossbow",
      "type": "weapon",
      "monsters": [
        "minor red dragon"
      ]
    },
    {
      "item": "dragonhorn dagger",
      "type": "weapon",
      "monsters": [
        "minor green dragon"
      ]
    },
    {
      "item": "dragonrider's horned helm",
      "type": "head",
      "monsters": [
        "mounted dragon rider sentinel"
      ]
    },
    {
      "item": "ensorcelled drakespine warstaff",
      "type": "weapon",
      "monsters": [
        "black dragon"
      ]
    },
    {
      "item": "flame-licked knight's drape",
      "type": "cloak",
      "monsters": [
        "golden dragon"
      ]
    },
    {
      "item": "flamescale leather chausses",
      "type": "legs",
      "monsters": [
        "crimson dragon"
      ]
    },
    {
      "item": "frozen dragon hammer",
      "type": "weapon",
      "monsters": [
        "azure dragon"
      ]
    },
    {
      "item": "heavy dragon scale cloak",
      "type": "cloak",
      "monsters": [
        "emerald green dragon"
      ]
    },
    {
      "item": "heavy dragon scale helm",
      "type": "head",
      "monsters": [
        "ivory dragon"
      ]
    },
    {
      "item": "jagged dragonbane lance",
      "type": "weapon",
      "monsters": [
        "mounted dragon rider sentinel"
      ]
    },
    {
      "item": "mail boots of the far traveler",
      "type": "feet",
      "monsters": [
        "emerald green dragon"
      ]
    },
    {
      "item": "red dragon scale necklace",
      "type": "jewel",
      "monsters": [
        "minor red dragon"
      ]
    },
    {
      "item": "resplendent golden boots",
      "type": "feet",
      "monsters": [
        "golden dragon"
      ]
    },
    {
      "item": "scaled dragon hide armor",
      "type": "body",
      "monsters": [
        "minor green dragon"
      ]
    },
    {
      "item": "scaled dragon hide helm",
      "type": "head",
      "monsters": [
        "minor white dragon"
      ]
    },
    {
      "item": "studded black dragonscale cloak",
      "type": "cloak",
      "monsters": [
        "black dragon"
      ]
    },
    {
      "item": "tome of the Sacred Arts",
      "type": "weapon",
      "monsters": [
        "mounted dragon rider sentinel"
      ]
    },
    {
      "item": "white dragon's talon",
      "type": "weapon",
      "monsters": [
        "minor white dragon"
      ]
    },
    {
      "item": "wrist-mounted dart thrower",
      "type": "weapon",
      "monsters": [
        "crimson dragon"
      ]
    }
  ],
  "Enchanted Woods of Acornak": [
    {
      "item": "Aegis of the wood",
      "type": "shield",
      "monsters": [
        "blood owl"
      ]
    },
    {
      "item": "ankle-length emerald green silk skirt",
      "type": "legs",
      "monsters": [
        "night-elf"
      ]
    },
    {
      "item": "archivist's staff",
      "type": "weapon",
      "monsters": [
        "greenwood faerie"
      ]
    },
    {
      "item": "blazing white leggings",
      "type": "legs",
      "monsters": [
        "unicorn"
      ]
    },
    {
      "item": "circlet of multi-colored autumn leaves",
      "type": "head",
      "monsters": [
        "greenwood faerie"
      ]
    },
    {
      "item": "dark staff of tanglewood",
      "type": "weapon",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "enchanted pair of sprinters",
      "type": "feet",
      "monsters": [
        "unicorn"
      ]
    },
    {
      "item": "feather tufted staff",
      "type": "weapon",
      "monsters": [
        "greenwood faerie"
      ]
    },
    {
      "item": "fiery red cane",
      "type": "weapon",
      "monsters": [
        "bogie"
      ]
    },
    {
      "item": "fiery two-handed lava hammer",
      "type": "weapon",
      "monsters": [
        "leprechaun"
      ]
    },
    {
      "item": "flaming tomahawk",
      "type": "weapon",
      "monsters": [
        "night-elf"
      ]
    },
    {
      "item": "forest green studded cloak",
      "type": "cloak",
      "monsters": [
        "hyena"
      ]
    },
    {
      "item": "giant two-handed sword",
      "type": "weapon",
      "monsters": [
        "river reaper"
      ]
    },
    {
      "item": "grim double-sided axe of the bear",
      "type": "weapon",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "interogator's sickle",
      "type": "weapon",
      "monsters": [
        "forest faerie"
      ]
    },
    {
      "item": "jet black shiv",
      "type": "weapon",
      "monsters": [
        "hyena"
      ]
    },
    {
      "item": "leprechaun's lucky skullcrusher",
      "type": "weapon",
      "monsters": [
        "leprechaun"
      ]
    },
    {
      "item": "lightning bug stinger",
      "type": "weapon",
      "monsters": [
        "forest faerie"
      ]
    },
    {
      "item": "moldy clay bound journal",
      "type": "shield",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "nightwalker jerkin",
      "type": "body",
      "monsters": [
        "night elf"
      ]
    },
    {
      "item": "reaper fang",
      "type": "weapon",
      "monsters": [
        "river reaper"
      ]
    },
    {
      "item": "reed blowgun",
      "type": "weapon",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "reinforced forest greaves",
      "type": "legs",
      "monsters": [
        "river reaper"
      ]
    },
    {
      "item": "rhinocerous horn",
      "type": "material",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "ring of rose petals",
      "type": "jewel",
      "monsters": [
        "druid of the forest",
        "forest faerie",
        "unicorn"
      ]
    },
    {
      "item": "river reaper skin",
      "type": "cloak",
      "monsters": [
        "river reaper"
      ]
    },
    {
      "item": "sandstone gargoyle mace",
      "type": "weapon",
      "monsters": [
        "bogie"
      ]
    },
    {
      "item": "silver rock",
      "type": "material",
      "monsters": [
        "greenwood faerie"
      ]
    },
    {
      "item": "sin cutlass",
      "type": "weapon",
      "monsters": [
        "blood owl"
      ]
    },
    {
      "item": "slag hammer",
      "type": "weapon",
      "monsters": [
        "blood owl",
        "firefly",
        "forest lizard",
        "greenwood faerie"
      ]
    },
    {
      "item": "spire of nature",
      "type": "weapon",
      "monsters": [
        "forest faerie"
      ]
    },
    {
      "item": "studded fey boots",
      "type": "feet",
      "monsters": [
        "leprechaun"
      ]
    },
    {
      "item": "studded nomad's drape",
      "type": "cloak",
      "monsters": [
        "druid of the forest"
      ]
    },
    {
      "item": "superior hunting bow",
      "type": "weapon",
      "monsters": [
        "forest lizard",
        "hyena",
        "night-elf"
      ]
    },
    {
      "item": "talon of the nocturnal",
      "type": "weapon",
      "monsters": [
        "blood owl"
      ]
    },
    {
      "item": "two-handed war mattock",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "vibrant green leather boots",
      "type": "feet",
      "monsters": [
        "forest lizard"
      ]
    },
    {
      "item": "wand of polarity",
      "type": "weapon",
      "monsters": [
        "river reaper"
      ]
    },
    {
      "item": "wild owl leggings",
      "type": "legs",
      "monsters": [
        "night-elf"
      ]
    },
    {
      "item": "willow staff",
      "type": "weapon",
      "monsters": [
        "forest faerie"
      ]
    },
    {
      "item": "yard of cotton",
      "type": "material",
      "monsters": [
        "leprachaun"
      ]
    }
  ],
  "Fields of Mo'Serat": [
    {
      "item": "black leather gloves",
      "type": "hands",
      "monsters": [
        "baby rhinoceros",
        "wild dog"
      ]
    },
    {
      "item": "frost mace",
      "type": "weapon",
      "monsters": [
        "Mo'Serat Soothsayer"
      ]
    },
    {
      "item": "large bloody club",
      "type": "weapon",
      "monsters": [
        "Mo'Serat gatherer"
      ]
    },
    {
      "item": "military chestpiece",
      "type": "body",
      "monsters": [
        "Mo'Serat Soothsayer",
        "Mo'Serat gatherer"
      ]
    },
    {
      "item": "pair of plate greaves",
      "type": "legs",
      "monsters": [
        "Mo'Serat Hunter"
      ]
    },
    {
      "item": "pitch-black ranseur",
      "type": "weapon",
      "monsters": [
        "young zebra"
      ]
    },
    {
      "item": "raccoon skin cap",
      "type": "head",
      "monsters": [
        "small death adder",
        "wildabeest"
      ]
    },
    {
      "item": "small silver earring",
      "type": "jewel",
      "monsters": [
        "saurian scavenger"
      ]
    },
    {
      "item": "staff of frost",
      "type": "weapon",
      "monsters": [
        "Mo'Serat gatherer"
      ]
    },
    {
      "item": "superior short bow",
      "type": "weapon",
      "monsters": [
        "Mo'Serat Hunter"
      ]
    }
  ],
  "Fields of Mo'serat": [
    {
      "item": "ironbark crusher",
      "type": "weapon",
      "monsters": [
        "screeching baboon"
      ]
    }
  ],
  "Fort Darkbane": [
    {
      "item": "Allorien tower shield",
      "type": "shield",
      "monsters": [
        "Allorien corporal"
      ]
    },
    {
      "item": "blessed short sword",
      "type": "weapon",
      "monsters": [
        "Allorien Guardian"
      ]
    },
    {
      "item": "casque of mountains",
      "type": "head",
      "monsters": [
        "Allorien mason"
      ]
    },
    {
      "item": "contaminated scalpel",
      "type": "weapon",
      "monsters": [
        "Allorien lancer"
      ]
    },
    {
      "item": "cracked stone armor",
      "type": "body",
      "monsters": [
        "Allorien mason"
      ]
    },
    {
      "item": "crested Allorien helm",
      "type": "head",
      "monsters": [
        "Allorien corporal"
      ]
    },
    {
      "item": "foreman's mace",
      "type": "weapon",
      "monsters": [
        "Allorien foreman"
      ]
    },
    {
      "item": "full helm of titanium",
      "type": "head",
      "monsters": [
        "Allorien Guardian"
      ]
    },
    {
      "item": "gleaming purple dagger",
      "type": "weapon",
      "monsters": [
        "elven scribe"
      ]
    },
    {
      "item": "guard's defender clutches",
      "type": "hands",
      "monsters": [
        "Allorien Guardian"
      ]
    },
    {
      "item": "heartwood composite bow",
      "type": "weapon",
      "monsters": [
        "Allorien sergeant"
      ]
    },
    {
      "item": "imperial guard's treads",
      "type": "feet",
      "monsters": [
        "Allorien foreman"
      ]
    },
    {
      "item": "inscribed leather tunic",
      "type": "body",
      "monsters": [
        "Allorien master smith"
      ]
    },
    {
      "item": "ivory and gold breastplate",
      "type": "body",
      "monsters": [
        "Allorien master smith"
      ]
    },
    {
      "item": "komodo scale skullcap",
      "type": "head",
      "monsters": [
        "Allorien mason"
      ]
    },
    {
      "item": "necklace of goblin ears",
      "type": "jewel",
      "monsters": [
        "Allorien Guardian"
      ]
    },
    {
      "item": "oil-stained studded cape",
      "type": "cloak",
      "monsters": [
        "Allorien corporal"
      ]
    },
    {
      "item": "shadow feral walkers",
      "type": "feet",
      "monsters": [
        "Allorien master smith"
      ]
    },
    {
      "item": "silver-inlaid moleskin gloves",
      "type": "hands",
      "monsters": [
        "elven wizard"
      ]
    },
    {
      "item": "soul priest's gloves",
      "type": "hands",
      "monsters": [
        "elven scribe"
      ]
    },
    {
      "item": "staff of petrified wood",
      "type": "weapon",
      "monsters": [
        "elven wizard"
      ]
    },
    {
      "item": "static charge",
      "type": "material",
      "monsters": [
        "elven scribe"
      ]
    },
    {
      "item": "thunderous battlehammer",
      "type": "weapon",
      "monsters": [
        "Allorien master smith"
      ]
    },
    {
      "item": "wanderer's leather pants",
      "type": "legs",
      "monsters": [
        "Allorien foreman",
        "Allorien sergeant"
      ]
    },
    {
      "item": "wizard's tights",
      "type": "legs",
      "monsters": [
        "elven wizard"
      ]
    }
  ],
  "Greater Rulan Jungle": [
    {
      "item": "archer's leather gloves",
      "type": "hands",
      "monsters": [
        "black-leaved huron"
      ]
    },
    {
      "item": "bleached ivory long bow",
      "type": "weapon",
      "monsters": [
        "prowling jungle grimalkin"
      ]
    },
    {
      "item": "bloody hatchet of fangs",
      "type": "weapon",
      "monsters": [
        "greater malevolent ceiba tree"
      ]
    },
    {
      "item": "decayed fleshy hands",
      "type": "hands",
      "monsters": [
        "prowling jungle grimalkin"
      ]
    },
    {
      "item": "delicate leaf",
      "type": "material",
      "monsters": [
        "black-leaved huron"
      ]
    },
    {
      "item": "enchanted spear of living huron",
      "type": "weapon",
      "monsters": [
        "black-leaven huron"
      ]
    },
    {
      "item": "glimmering jade infused sandals",
      "type": "feet",
      "monsters": [
        "black-leaved huron",
        "shambling juglug beast"
      ]
    },
    {
      "item": "harpy eagle talon's halberd",
      "type": "weapon",
      "monsters": [
        "greater black huron"
      ]
    },
    {
      "item": "mace of restful death",
      "type": "weapon",
      "monsters": [
        "verdant giant"
      ]
    },
    {
      "item": "massive blood oak spiked-club",
      "type": "weapon",
      "monsters": [
        "shambling juglug beast"
      ]
    },
    {
      "item": "thunder-forged skeletal warboots",
      "type": "feet",
      "monsters": [
        "prowling jungle grimalkin"
      ]
    },
    {
      "item": "twisted living wood trident",
      "type": "weapon",
      "monsters": [
        "greater black huron"
      ]
    },
    {
      "item": "verdant flora hammer",
      "type": "weapon",
      "monsters": [
        "verdant giant"
      ]
    },
    {
      "item": "woven cloak of fronds",
      "type": "cloak",
      "monsters": [
        "verdant giant"
      ]
    }
  ],
  "Greater Wailing Woods": [
    {
      "item": "black bat hide armor",
      "type": "body",
      "monsters": [
        "greater putrid scarecrow"
      ]
    },
    {
      "item": "bramble root armor",
      "type": "body",
      "monsters": [
        "gaunt mummy"
      ]
    },
    {
      "item": "brightly glowing gold band",
      "type": "jewel",
      "monsters": [
        "gaunt mummy"
      ]
    },
    {
      "item": "cursed greatsword",
      "type": "weapon",
      "monsters": [
        "baleful curse"
      ]
    },
    {
      "item": "dutysworn helmet",
      "type": "head",
      "monsters": [
        "bloodthirsty corpse"
      ]
    },
    {
      "item": "ebony hide footsteps",
      "type": "feet",
      "monsters": [
        "ghastly carcass"
      ]
    },
    {
      "item": "fiend's cape of undeath",
      "type": "cloak",
      "monsters": [
        "cadaverous fiend"
      ]
    },
    {
      "item": "forsaken shield",
      "type": "shield",
      "monsters": [
        "ghastly carcass"
      ]
    },
    {
      "item": "foxhide leggings",
      "type": "legs",
      "monsters": [
        "cadaverous fiend"
      ]
    },
    {
      "item": "fused skeletal rib cage",
      "type": "body",
      "monsters": [
        "plague-ridden skeleton"
      ]
    },
    {
      "item": "jagged bone spike",
      "type": "weapon",
      "monsters": [
        "plague-ridden skeleton"
      ]
    },
    {
      "item": "mighty barbarian's hand axe",
      "type": "weapon",
      "monsters": [
        "cadaverous fiend"
      ]
    },
    {
      "item": "pair of bone earrings",
      "type": "jewel",
      "monsters": [
        "pallid grave walker"
      ]
    },
    {
      "item": "pitch black leather jacket",
      "type": "body",
      "monsters": [
        "baleful curse"
      ]
    },
    {
      "item": "polearm of horrors",
      "type": "weapon",
      "monsters": [
        "pallid grave walker"
      ]
    },
    {
      "item": "rogue's heavy hide boots",
      "type": "feet",
      "monsters": [
        "disemboweled cadaver"
      ]
    },
    {
      "item": "ruiner staff",
      "type": "weapon",
      "monsters": [
        "baleful curse"
      ]
    },
    {
      "item": "rune-etched black staff",
      "type": "weapon",
      "monsters": [
        "baleful curse"
      ]
    },
    {
      "item": "rune-forged legwraps",
      "type": "legs",
      "monsters": [
        "baleful curse"
      ]
    },
    {
      "item": "runewood staff of mystic rage",
      "type": "weapon",
      "monsters": [
        "lesser putrid scarecrow"
      ]
    },
    {
      "item": "silvery hood of the talon",
      "type": "head",
      "monsters": [
        "pallid grave walker"
      ]
    },
    {
      "item": "spectral battlehammer",
      "type": "weapon",
      "monsters": [
        "ghastly carcass"
      ]
    },
    {
      "item": "spider-thread bow",
      "type": "weapon",
      "monsters": [
        "lesser putrid scarecrow"
      ]
    },
    {
      "item": "spiked plate boots of bone",
      "type": "feet",
      "monsters": [
        "plague-ridden skeleton"
      ]
    },
    {
      "item": "staff of mortal's bane",
      "type": "weapon",
      "monsters": [
        "flesh-devouring evil soul"
      ]
    },
    {
      "item": "streaked iron gauntlets",
      "type": "hands",
      "monsters": [
        "bloodthirsty corpse"
      ]
    },
    {
      "item": "studded wailing walkers",
      "type": "feet",
      "monsters": [
        "bloodthirsty corpse"
      ]
    },
    {
      "item": "swatch of silk",
      "type": "material",
      "monsters": [
        "gaunt mummy"
      ]
    },
    {
      "item": "unearthly voodoo staff",
      "type": "weapon",
      "monsters": [
        "greater putrid scarecrow"
      ]
    }
  ],
  "Greatsmith's Weapon Shop": [
    {
      "item": "fine iron mace",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "finely-crafted shortbow",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "heavy two-handed hammer",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "ivory-hilted dagger",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "leather-handled longsword",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "long steel barbed spear",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "polished knuckles",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "polished steel quarter staff",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "small steel hatchet",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sturdy two-handed axe",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Lake Dragonclaw": [
    {
      "item": "buckler of fathomless depths",
      "type": "shield",
      "monsters": [
        "wyrm of the deep"
      ]
    },
    {
      "item": "emerald rod of ruin",
      "type": "weapon",
      "monsters": [
        "emerald scaled leviathan"
      ]
    },
    {
      "item": "emerald studded fist of the deep",
      "type": "weapon",
      "monsters": [
        "emerald scaled leviathan"
      ]
    },
    {
      "item": "heavy emerald scaled drape",
      "type": "cloak",
      "monsters": [
        "emerald scaled leviathan"
      ]
    },
    {
      "item": "hydromancer's webbed boots",
      "type": "feet",
      "monsters": [
        "coiled nightmare"
      ]
    },
    {
      "item": "leggings of the lightless deep",
      "type": "legs",
      "monsters": [
        "wyrm of the deep"
      ]
    },
    {
      "item": "sea-serpent's spine",
      "type": "weapon",
      "monsters": [
        "razor-toothed sea serpent"
      ]
    },
    {
      "item": "tri-woven leather handguards",
      "type": "hands",
      "monsters": [
        "razor-toothed sea serpent"
      ]
    },
    {
      "item": "twisted nightmare harpoon",
      "type": "weapon",
      "monsters": [
        "coiled nightmare"
      ]
    }
  ],
  "Lesser Rulan Jungle": [
    {
      "item": "archer's leather gloves",
      "type": "hands",
      "monsters": [
        "malevolent ceiba tree"
      ]
    },
    {
      "item": "carved ceiba wood blowgun",
      "type": "weapon",
      "monsters": [
        "malevolent ceiba tree"
      ]
    },
    {
      "item": "crystallized spell-splintered chest",
      "type": "body",
      "monsters": [
        "landstryder"
      ]
    },
    {
      "item": "exalted wanderer's chestpiece",
      "type": "body",
      "monsters": [
        "landstryder"
      ]
    },
    {
      "item": "exalted wanderer's treads",
      "type": "feet",
      "monsters": [
        "brazenly-colored kalida bird"
      ]
    },
    {
      "item": "glimmering jade infused sandals",
      "type": "feet",
      "monsters": [
        "brazenly-colored kalida bird"
      ]
    },
    {
      "item": "length of twisted antlers",
      "type": "weapon",
      "monsters": [
        "leaping white heart"
      ]
    },
    {
      "item": "moldy earthen falchion",
      "type": "weapon",
      "monsters": [
        "malevolent ceiba tree"
      ]
    },
    {
      "item": "parrotfeather cloak",
      "type": "cloak",
      "monsters": [
        "brazenly-colored kalida bird"
      ]
    },
    {
      "item": "tribal cloth gloves",
      "type": "hands",
      "monsters": [
        "landstryder"
      ]
    },
    {
      "item": "vicious shield of exile",
      "type": "shield",
      "monsters": [
        "landstryder"
      ]
    }
  ],
  "Misery's Crossing": [
    {
      "item": "blade of misery",
      "type": "weapon",
      "monsters": [
        "starving daemon"
      ]
    },
    {
      "item": "blazing amulet of light",
      "type": "jewel",
      "monsters": [
        "spirit of a niordian missionary"
      ]
    },
    {
      "item": "chainmail legplates of condemened spirits",
      "type": "legs",
      "monsters": [
        "demonic warlord"
      ]
    },
    {
      "item": "corded spidersilk mask",
      "type": "head",
      "monsters": [
        "starving daemon"
      ]
    },
    {
      "item": "crimson tunic of misery",
      "type": "body",
      "monsters": [
        "starving daemon"
      ]
    },
    {
      "item": "crossbow of speed",
      "type": "weapon",
      "monsters": [
        "death's head giant moth"
      ]
    },
    {
      "item": "crystallized blade of the void",
      "type": "weapon",
      "monsters": [
        "Void Witch, Eleanor"
      ]
    },
    {
      "item": "decapitated daemon head",
      "type": "shield",
      "monsters": [
        "starving daemon"
      ]
    },
    {
      "item": "demon berzerker's battle axe",
      "type": "weapon",
      "monsters": [
        "demon berzerker"
      ]
    },
    {
      "item": "fang-studded demonic hauberk",
      "type": "body",
      "monsters": [
        "demon berzerker"
      ]
    },
    {
      "item": "fingerless lizardskin gloves",
      "type": "hands",
      "monsters": [
        "infernal beast"
      ]
    },
    {
      "item": "forsaken scale hauberk",
      "type": "body",
      "monsters": [
        "starving daemon"
      ]
    },
    {
      "item": "frozen staff of attrition",
      "type": "weapon",
      "monsters": [
        "giant deaths head moth"
      ]
    },
    {
      "item": "fungus covered tunic",
      "type": "body",
      "monsters": [
        "foul smelling fungrul"
      ]
    },
    {
      "item": "fury talon",
      "type": "weapon",
      "monsters": [
        "winged fury"
      ]
    },
    {
      "item": "grotesque horned helm",
      "type": "head",
      "monsters": [
        "demon berzerker"
      ]
    },
    {
      "item": "hands of madness",
      "type": "hands",
      "monsters": [
        "crazed hellion"
      ]
    },
    {
      "item": "helmet of demonic insight",
      "type": "head",
      "monsters": [
        "infernal beast"
      ]
    },
    {
      "item": "missionary's skullcap",
      "type": "head",
      "monsters": [
        "spirit of a niordian missionary"
      ]
    },
    {
      "item": "missionary's worn sandals",
      "type": "feet",
      "monsters": [
        "spirit of a niordian missionary"
      ]
    },
    {
      "item": "moth eaten gloves",
      "type": "hands",
      "monsters": [
        "death's head giant moth"
      ]
    },
    {
      "item": "psychotic vampire staff",
      "type": "weapon",
      "monsters": [
        "crazed hellion"
      ]
    },
    {
      "item": "shimmering velvet robes",
      "type": "body",
      "monsters": [
        "winged fury"
      ]
    },
    {
      "item": "silver pentagram amulet",
      "type": "jewel",
      "monsters": [
        "foul smelling fungrel",
        "giant deaths head moth"
      ]
    },
    {
      "item": "spectral spark",
      "type": "material",
      "monsters": [
        "spirit of a niordian missionary"
      ]
    },
    {
      "item": "thick scorpion leggings",
      "type": "legs",
      "monsters": [
        "crazed hellion"
      ]
    },
    {
      "item": "torn bloody cape",
      "type": "cloak",
      "monsters": [
        "winged fury"
      ]
    },
    {
      "item": "void-infused crystal ball",
      "type": "jewel",
      "monsters": [
        "Void Witch, Eleanor"
      ]
    },
    {
      "item": "wickedly-curved black dagger",
      "type": "weapon",
      "monsters": [
        "infernal beast"
      ]
    },
    {
      "item": "witch's void-dark staff",
      "type": "weapon",
      "monsters": [
        "Void Witch, Eleanor"
      ]
    },
    {
      "item": "wraithplate boots of cruelty",
      "type": "feet",
      "monsters": [
        "demonic warlord"
      ]
    }
  ],
  "Motapa Hills": [
    {
      "item": "black bandana",
      "type": "head",
      "monsters": [
        "green snake"
      ]
    },
    {
      "item": "black leather cap",
      "type": "head",
      "monsters": [
        "grey wolf"
      ]
    },
    {
      "item": "black spider-silk tunic",
      "type": "body",
      "monsters": [
        "small silver wolf"
      ]
    },
    {
      "item": "bristly spider leggings",
      "type": "legs",
      "monsters": [
        "small silver wolf"
      ]
    },
    {
      "item": "cloak of white feathers",
      "type": "cloak",
      "monsters": [
        "small silver wolf"
      ]
    },
    {
      "item": "cutlass of burning pitch",
      "type": "weapon",
      "monsters": [
        "hunting scout"
      ]
    },
    {
      "item": "dagger of the druid",
      "type": "weapon",
      "monsters": [
        "hunter's apprentice"
      ]
    },
    {
      "item": "hunter's bow",
      "type": "weapon",
      "monsters": [
        "master hunter"
      ]
    },
    {
      "item": "pair of raw leggings",
      "type": "legs",
      "monsters": [
        "game tracker"
      ]
    },
    {
      "item": "twisted sequoia branch",
      "type": "weapon",
      "monsters": [
        "green snake"
      ]
    }
  ],
  "Mount Decadare": [
    {
      "item": "blood infused hide boots",
      "type": "feet",
      "monsters": [
        "mutated raccoon"
      ]
    },
    {
      "item": "blood smeared robe",
      "type": "body",
      "monsters": [
        "blood cultist"
      ]
    },
    {
      "item": "blood-red axe of the champion",
      "type": "weapon",
      "monsters": [
        "blood cult champion"
      ]
    },
    {
      "item": "bloodsoaked brigandine legguards",
      "type": "legs",
      "monsters": [
        "blood cultist"
      ]
    },
    {
      "item": "bloodsteel chestplate",
      "type": "body",
      "monsters": [
        "blood golem"
      ]
    },
    {
      "item": "bloodsteel legplates",
      "type": "legs",
      "monsters": [
        "blood golem"
      ]
    },
    {
      "item": "cap of flayed skin",
      "type": "head",
      "monsters": [
        "blood golem"
      ]
    },
    {
      "item": "cape of the flying raccoon",
      "type": "cloak",
      "monsters": [
        "mutated raccoon"
      ]
    },
    {
      "item": "cloak of blood red leaves",
      "type": "cloak",
      "monsters": [
        "deformed ettin"
      ]
    },
    {
      "item": "cultist black silk pants",
      "type": "legs",
      "monsters": [
        "blood cultist"
      ]
    },
    {
      "item": "draconian reaver axe",
      "type": "weapon",
      "monsters": [
        "blood cultist"
      ]
    },
    {
      "item": "ebony throat-ripper bow",
      "type": "weapon",
      "monsters": [
        "blood cult warrior"
      ]
    },
    {
      "item": "ettin finger",
      "type": "weapon",
      "monsters": [
        "deformed ettin"
      ]
    },
    {
      "item": "executioner's hood",
      "type": "head",
      "monsters": [
        "priestess of pain"
      ]
    },
    {
      "item": "grieving studded legguards",
      "type": "legs",
      "monsters": [
        "priestess of pain"
      ]
    },
    {
      "item": "helmet of bark",
      "type": "head",
      "monsters": [
        "deformed ettin"
      ]
    },
    {
      "item": "huge club of gore",
      "type": "weapon",
      "monsters": [
        "blood golem"
      ]
    },
    {
      "item": "inky black boots",
      "type": "feet",
      "monsters": [
        "shadowy beast"
      ]
    },
    {
      "item": "massive gore splattered claymore",
      "type": "weapon",
      "monsters": [
        "blood cult champion"
      ]
    },
    {
      "item": "mutilating mallet",
      "type": "weapon",
      "monsters": [
        "gore abomination"
      ]
    },
    {
      "item": "necklace of basilisk claws",
      "type": "jewel",
      "monsters": [
        "deformed ogre mage"
      ]
    },
    {
      "item": "necklace of raccoon teeth",
      "type": "jewel",
      "monsters": [
        "mutated raccoon"
      ]
    },
    {
      "item": "partisan of pain",
      "type": "weapon",
      "monsters": [
        "blood cult warrior"
      ]
    },
    {
      "item": "pulsing red staff",
      "type": "weapon",
      "monsters": [
        "demented ogre mage"
      ]
    },
    {
      "item": "ring of blood",
      "type": "jewel",
      "monsters": [
        "gore abomination"
      ]
    },
    {
      "item": "rotting pants of the demented",
      "type": "legs",
      "monsters": [
        "demented ogre mage"
      ]
    },
    {
      "item": "rune-etched cultist staff",
      "type": "weapon",
      "monsters": [
        "blood cultist"
      ]
    },
    {
      "item": "shadowleather reinforced grips",
      "type": "hands",
      "monsters": [
        "shadowy beast"
      ]
    },
    {
      "item": "studded gauntlets of pain",
      "type": "hands",
      "monsters": [
        "priestess of pain"
      ]
    },
    {
      "item": "twisted bark spear",
      "type": "weapon",
      "monsters": [
        "deformed ettin"
      ]
    },
    {
      "item": "warped dreamwatcher staff",
      "type": "weapon",
      "monsters": [
        "priestess of pain"
      ]
    }
  ],
  "Nomadic Caravan": [
    {
      "item": "gauntlets of the far traveler",
      "type": "hands",
      "monsters": [
        "Saurilite ronin",
        "nomadic saurian enforcer"
      ]
    },
    {
      "item": "jewel-hilted bastard sword",
      "type": "weapon",
      "monsters": [
        "sunburnt scavenger"
      ]
    },
    {
      "item": "kraken-hide leggings",
      "type": "legs",
      "monsters": [
        "nomadic saurian enforcer"
      ]
    },
    {
      "item": "machinist hammer",
      "type": "weapon",
      "monsters": [
        "lizardman machinist"
      ]
    },
    {
      "item": "ronin's longknife",
      "type": "weapon",
      "monsters": [
        "Saurilite ronin"
      ]
    },
    {
      "item": "scythe of undying light",
      "type": "weapon",
      "monsters": [
        "sunburnt scavenger"
      ]
    },
    {
      "item": "shield-shatterer longbow",
      "type": "weapon",
      "monsters": [
        "lizardman brigand"
      ]
    },
    {
      "item": "shroud of the far traveler",
      "type": "cloak",
      "monsters": [
        "nomadic commoner"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "sunburnt scavenger"
      ]
    },
    {
      "item": "small wooden trinket",
      "type": "jewel",
      "monsters": [
        "nomadic commoner"
      ]
    },
    {
      "item": "sunsoaked breeches of swiftstrikes",
      "type": "legs",
      "monsters": [
        "lizardman machinist"
      ]
    }
  ],
  "Obsolete": [
    {
      "item": "blue silken pants of Vesta's blessing",
      "type": "legs",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "dagger of unending loyalty",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "diamond-infused restribution flail",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "eagle-crested chestplate",
      "type": "body",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "elven bow of vengeful solace",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "ent's bane",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "ent's reinforced gauntlets",
      "type": "hands",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "great dyrewolf bow of mangling",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "landlost hauberk",
      "type": "body",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "mottled tiahua disciple leggings",
      "type": "legs",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "pair of stygian treads",
      "type": "feet",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "scythe of last reapings",
      "type": "weapon",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "transparent ice golem head",
      "type": "head",
      "monsters": [
        "Obsolete"
      ]
    },
    {
      "item": "wavering gypsy mask",
      "type": "head",
      "monsters": [
        "Obsolete"
      ]
    }
  ],
  "Outfitter's": [
    {
      "item": "boots of tumbling",
      "type": "feet",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "bright yellow dress",
      "type": "body",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "climbing pick",
      "type": "wielded",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "cloak of black-winged hawk feathers",
      "type": "cloak",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "finely-woven pair of cotton pants",
      "type": "legs",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pair of red cloth gloves",
      "type": "hands",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pair of soft slippers",
      "type": "feet",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pea green tunic",
      "type": "cloak",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "silver fox fur cap",
      "type": "head",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "webbed fins",
      "type": "feet",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Pirate's Cove": [
    {
      "item": "bar of iron",
      "type": "material",
      "monsters": [
        "black market trader"
      ]
    },
    {
      "item": "barrel with suspenders",
      "type": "legs",
      "monsters": [
        "dirty deck swabber"
      ]
    },
    {
      "item": "battle hammer of the high seas",
      "type": "weapon",
      "monsters": [
        "elite brigand"
      ]
    },
    {
      "item": "blue and ivory set of Captain's greatboots",
      "type": "feet",
      "monsters": [
        "bandana capped dromond captain"
      ]
    },
    {
      "item": "boarding pike",
      "type": "weapon",
      "monsters": [
        "pirate quartermaster"
      ]
    },
    {
      "item": "brigand's chestplate",
      "type": "body",
      "monsters": [
        "pirate quartermaster"
      ]
    },
    {
      "item": "Captain's Hook",
      "type": "weapon",
      "monsters": [
        "Captain 'Mad Eyes' Rutland"
      ]
    },
    {
      "item": "crewman's iron cuffs",
      "type": "hands",
      "monsters": [
        "one-eyed dromond crewman"
      ]
    },
    {
      "item": "cutlass of the forgotten flame",
      "type": "weapon",
      "monsters": [
        "peg-legged pirate"
      ]
    },
    {
      "item": "darkened corsair's legguards",
      "type": "legs",
      "monsters": [
        "one-eyed dromond crewman"
      ]
    },
    {
      "item": "deck-swabber's studded boots",
      "type": "feet",
      "monsters": [
        "dirty deck swabber"
      ]
    },
    {
      "item": "deep blue frostbitten axe",
      "type": "weapon",
      "monsters": [
        "one-eyed dromond crewman"
      ]
    },
    {
      "item": "flame-kissed blade",
      "type": "weapon",
      "monsters": [
        "peg-legged pirate"
      ]
    },
    {
      "item": "fortified ice-walker footpads",
      "type": "feet",
      "monsters": [
        "swarthy-looking brigand"
      ]
    },
    {
      "item": "golden rock",
      "type": "material",
      "monsters": [
        "elite brigand guardsman"
      ]
    },
    {
      "item": "headband of wisdom",
      "type": "head",
      "monsters": [
        "blue-sashed pirate"
      ]
    },
    {
      "item": "jewel-studded longbow",
      "type": "weapon",
      "monsters": [
        "blue sashed pirate"
      ]
    },
    {
      "item": "leviathan chain mail cloak",
      "type": "cloak",
      "monsters": [
        "bandana capped dromond captain"
      ]
    },
    {
      "item": "mesh diver's gauntlets",
      "type": "hands",
      "monsters": [
        "swarthy-looking brigand"
      ]
    },
    {
      "item": "peg leg",
      "type": "weapon",
      "monsters": [
        "peg-legged pirate"
      ]
    },
    {
      "item": "pirate's eye patch",
      "type": "jewel",
      "monsters": [
        "dirty deck swabber",
        "red-sashed pirate"
      ]
    },
    {
      "item": "purple bastian shirt",
      "type": "body",
      "monsters": [
        "peg-legged pirate"
      ]
    },
    {
      "item": "rusty iron key",
      "type": "wielded",
      "monsters": [
        "one-eyed dromond crewman"
      ]
    },
    {
      "item": "small key on a chain",
      "type": "wielded",
      "monsters": [
        "first mate?"
      ]
    },
    {
      "item": "storm boots of the sea",
      "type": "feet",
      "monsters": [
        "dirty deck swabber"
      ]
    },
    {
      "item": "swashbucklers rudimentary buckler",
      "type": "shield",
      "monsters": [
        "red-sashed pirate"
      ]
    },
    {
      "item": "tarnished cutlass",
      "type": "weapon",
      "monsters": [
        "red-sashed pirate"
      ]
    },
    {
      "item": "three cornered pirate hat",
      "type": "head",
      "monsters": [
        "elite brigand guardsman"
      ]
    },
    {
      "item": "villous dagger of an assassin",
      "type": "weapon",
      "monsters": [
        "swarthy-looking brigand"
      ]
    },
    {
      "item": "wind-blasted smooth quartz kris",
      "type": "weapon",
      "monsters": [
        "dirty deck swabber"
      ]
    }
  ],
  "Plains of Hevak": [
    {
      "item": "bandit's bow",
      "type": "weapon",
      "monsters": [
        "troll bandit"
      ]
    },
    {
      "item": "bent fey mace",
      "type": "weapon",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "black fox pelt",
      "type": "head",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "burning sword",
      "type": "weapon",
      "monsters": [
        "screech owl"
      ]
    },
    {
      "item": "defender's boots",
      "type": "feet",
      "monsters": [
        "forest spider",
        "orc gypsy"
      ]
    },
    {
      "item": "frost mace",
      "type": "weapon",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "golden battleaxe",
      "type": "weapon",
      "monsters": [
        "large dog"
      ]
    },
    {
      "item": "gray rock",
      "type": "material",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "greatsword of fire",
      "type": "weapon",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "midnight blue cloak",
      "type": "cloak",
      "monsters": [
        "raging troll rebel"
      ]
    },
    {
      "item": "piece of bronze",
      "type": "material",
      "monsters": [
        "goblin weaponsmith"
      ]
    },
    {
      "item": "plain ivory dagger",
      "type": "weapon",
      "monsters": [
        "kobold rebel leader"
      ]
    },
    {
      "item": "runewood oaken staff",
      "type": "weapon",
      "monsters": [
        "exiled goblin lunatic"
      ]
    },
    {
      "item": "sharpened ceremonial axe",
      "type": "weapon",
      "monsters": [
        "kobold anarchist",
        "screech owl"
      ]
    },
    {
      "item": "small silver locket",
      "type": "jewel",
      "monsters": [
        "renegade ogre warrior"
      ]
    },
    {
      "item": "spider-filament cuisses",
      "type": "legs",
      "monsters": [
        "raging troll rebel"
      ]
    },
    {
      "item": "superior sword",
      "type": "weapon",
      "monsters": [
        "kobold anarchist"
      ]
    },
    {
      "item": "visored plate helm",
      "type": "head",
      "monsters": [
        "kobold anarchist"
      ]
    },
    {
      "item": "wooden shield",
      "type": "shield",
      "monsters": [
        "forest spider",
        "kobold rebel leader"
      ]
    }
  ],
  "Ravenwood Marsh": [
    {
      "item": "berzerker's axe",
      "type": "weapon",
      "monsters": [
        "parasitic guardian"
      ]
    },
    {
      "item": "black bladed dagger",
      "type": "weapon",
      "monsters": [
        "horned lizard"
      ]
    },
    {
      "item": "giant battleworn hammer",
      "type": "weapon",
      "monsters": [
        "giant acidic spore cloud"
      ]
    },
    {
      "item": "lizardman's sword",
      "type": "weapon",
      "monsters": [
        "biting fly"
      ]
    },
    {
      "item": "pikeman's spear",
      "type": "weapon",
      "monsters": [
        "huge swinging vine"
      ]
    },
    {
      "item": "spear of vines",
      "type": "weapon",
      "monsters": [
        "huge swinging vine"
      ]
    },
    {
      "item": "well oiled longbow",
      "type": "weapon",
      "monsters": [
        "horned lizard",
        "twisted floating log"
      ]
    }
  ],
  "Ruins of Gnovormir": [
    {
      "item": "accursed demon's toughskin boots",
      "type": "feet",
      "monsters": [
        "gnovormir lich-demon"
      ]
    },
    {
      "item": "archmage's staff of ice",
      "type": "weapon",
      "monsters": [
        "undead Gnovormir archmage"
      ]
    },
    {
      "item": "black velvet leggings",
      "type": "legs",
      "monsters": [
        "haunted Gnovormir shadow",
        "undead Gnovormir archmage"
      ]
    },
    {
      "item": "blade of darkest night",
      "type": "weapon",
      "monsters": [
        "Gnovormir dragur"
      ]
    },
    {
      "item": "blood drenched dagger",
      "type": "weapon",
      "monsters": [
        "vermillion-robed wraith"
      ]
    },
    {
      "item": "bloodied dirk of forbidden arts",
      "type": "weapon",
      "monsters": [
        "vermillion-robed wraith"
      ]
    },
    {
      "item": "blue icicle",
      "type": "material",
      "monsters": [
        "vermillion-robed wraith"
      ]
    },
    {
      "item": "chalice of depravity",
      "type": "weapon",
      "monsters": [
        "Gnovormir dragur"
      ]
    },
    {
      "item": "dragur's leggings of might",
      "type": "legs",
      "monsters": [
        "Gnovormir dragur"
      ]
    },
    {
      "item": "ebony robes of divinity",
      "type": "body",
      "monsters": [
        "undead Gnovormir archmage"
      ]
    },
    {
      "item": "enchanted femur",
      "type": "weapon",
      "monsters": [
        "rattled mage-skeleton"
      ]
    },
    {
      "item": "exalted wanderer's hood",
      "type": "head",
      "monsters": [
        "Gnovormir dragur"
      ]
    },
    {
      "item": "gnomish ringmail boots",
      "type": "feet",
      "monsters": [
        "haunted Gnovormir shadow"
      ]
    },
    {
      "item": "lich's blood-cursed spire",
      "type": "weapon",
      "monsters": [
        "gnovormir lich-demon"
      ]
    },
    {
      "item": "lich's eye",
      "type": "jewel",
      "monsters": [
        "Gnovormir dragur"
      ]
    },
    {
      "item": "rattlebone greaves",
      "type": "legs",
      "monsters": [
        "rattled mage-skeleton"
      ]
    },
    {
      "item": "shadow steps",
      "type": "feet",
      "monsters": [
        "haunted Gnovormir shadow"
      ]
    },
    {
      "item": "spectral hammer from beyond",
      "type": "weapon",
      "monsters": [
        "green-yellow glowing spectre"
      ]
    },
    {
      "item": "spectral pants of vengeance",
      "type": "legs",
      "monsters": [
        "green-yellow glowing spectre"
      ]
    },
    {
      "item": "twilight grips of casting",
      "type": "hands",
      "monsters": [
        "rattled mage-skeleton"
      ]
    },
    {
      "item": "wickedly curved scimitar",
      "type": "weapon",
      "monsters": [
        "haunted Gnovormir shadow"
      ]
    }
  ],
  "Sanctum of the Exile": [
    {
      "item": "crystalline shadowspine bow",
      "type": "weapon",
      "monsters": [
        "dark orc defiler"
      ]
    },
    {
      "item": "defiled studded greaves",
      "type": "legs",
      "monsters": [
        "dark orc defiler"
      ]
    },
    {
      "item": "earthen ringmail hauberk",
      "type": "body",
      "monsters": [
        "forgotten earth elemental"
      ]
    },
    {
      "item": "feathered stormcrow gloves",
      "type": "hands",
      "monsters": [
        "exiled troll wizard"
      ]
    },
    {
      "item": "gauntlets of the aberration",
      "type": "hands",
      "monsters": [
        "misshapen failed experiment"
      ]
    },
    {
      "item": "gleaming blade of valor",
      "type": "weapon",
      "monsters": [
        "mummified troll juggernaut"
      ]
    },
    {
      "item": "necromancer's gnarled wand",
      "type": "weapon",
      "monsters": [
        "banished ogre revenant"
      ]
    },
    {
      "item": "refined obsidian plated boots",
      "type": "feet",
      "monsters": [
        "mummified troll juggernaut"
      ]
    },
    {
      "item": "ring of malice",
      "type": "jewel",
      "monsters": [
        "devotee of misery"
      ]
    },
    {
      "item": "rune-etched greatsword",
      "type": "weapon",
      "monsters": [
        "exiled troll wizard"
      ]
    },
    {
      "item": "soulsworn acolyte's treads",
      "type": "feet",
      "monsters": [
        "devotee of misery"
      ]
    },
    {
      "item": "stone-studded gauntlets",
      "type": "hands",
      "monsters": [
        "forgotten earth elemental"
      ]
    },
    {
      "item": "stormtouched trollhide jerkin",
      "type": "body",
      "monsters": [
        "exiled troll wizard"
      ]
    },
    {
      "item": "studded boots of agony",
      "type": "feet",
      "monsters": [
        "misshapen failed experiment"
      ]
    },
    {
      "item": "tattered helmet of the profane",
      "type": "head",
      "monsters": [
        "mummified troll juggernaut"
      ]
    },
    {
      "item": "torn revenant's shawl",
      "type": "cloak",
      "monsters": [
        "banished ogre revenant"
      ]
    }
  ],
  "Saurian Wastes": [
    {
      "item": "chestguard of shifting sand",
      "type": "body",
      "monsters": [
        "sand ray"
      ]
    },
    {
      "item": "forked mantis glaive",
      "type": "weapon",
      "monsters": [
        "dune mantis"
      ]
    },
    {
      "item": "greathammer of petrification",
      "type": "weapon",
      "monsters": [
        "chasm basilisk"
      ]
    },
    {
      "item": "honed katana",
      "type": "weapon",
      "monsters": [
        "Saurilite samurai"
      ]
    },
    {
      "item": "mail leggings of the far traveler",
      "type": "legs",
      "monsters": [
        "desert madman"
      ]
    },
    {
      "item": "patchwork hide cloak of the wastes",
      "type": "cloak",
      "monsters": [
        "desert madman"
      ]
    },
    {
      "item": "scorpion carapace helm",
      "type": "head",
      "monsters": [
        "twin-tailed scorpion"
      ]
    },
    {
      "item": "scorpion slinger",
      "type": "weapon",
      "monsters": [
        "twin-tailed scorpion"
      ]
    },
    {
      "item": "sharpened tailspike",
      "type": "weapon",
      "monsters": [
        "sand ray"
      ]
    },
    {
      "item": "silver basilisk protectors",
      "type": "feet",
      "monsters": [
        "chasm basilisk"
      ]
    },
    {
      "item": "spiked club of bone",
      "type": "weapon",
      "monsters": [
        "desert madman"
      ]
    },
    {
      "item": "staff of shifting sands",
      "type": "weapon",
      "monsters": [
        "desert tarantula"
      ]
    },
    {
      "item": "winged mantis carapace battleboots",
      "type": "feet",
      "monsters": [
        "dune mantis"
      ]
    }
  ],
  "Sea of Grass": [
    {
      "item": "barbarian's cap",
      "type": "head",
      "monsters": [
        "black locust"
      ]
    },
    {
      "item": "black plate armor",
      "type": "body",
      "monsters": [
        "earth wisp"
      ]
    },
    {
      "item": "blackened struck branch",
      "type": "weapon",
      "monsters": [
        "giant ant-lion"
      ]
    },
    {
      "item": "blessed mace",
      "type": "weapon",
      "monsters": [
        "wealthy merchant"
      ]
    },
    {
      "item": "blood-stained dagger",
      "type": "weapon",
      "monsters": [
        "white deer"
      ]
    },
    {
      "item": "blue gemmed stiletto",
      "type": "weapon",
      "monsters": [
        "enraged water spirit"
      ]
    },
    {
      "item": "brand of sparks",
      "type": "weapon",
      "monsters": [
        "disorientated merchant"
      ]
    },
    {
      "item": "bubbling claymore",
      "type": "weapon",
      "monsters": [
        "enraged water spirit"
      ]
    },
    {
      "item": "double-bladed liquid spear",
      "type": "weapon",
      "monsters": [
        "enraged water spirit"
      ]
    },
    {
      "item": "earth-forged blade",
      "type": "weapon",
      "monsters": [
        "earth wisp"
      ]
    },
    {
      "item": "essence of life",
      "type": "jewel",
      "monsters": [
        "Spirit of Life"
      ]
    },
    {
      "item": "faded brown robes",
      "type": "body",
      "monsters": [
        "wealthy merchant"
      ]
    },
    {
      "item": "gushing foil",
      "type": "weapon",
      "monsters": [
        "traveling bard"
      ]
    },
    {
      "item": "heavy ebon hammer",
      "type": "weapon",
      "monsters": [
        "earth wisp"
      ]
    },
    {
      "item": "heavy war axe",
      "type": "weapon",
      "monsters": [
        "grey bull"
      ]
    },
    {
      "item": "helmet of enchanted earth",
      "type": "head",
      "monsters": [
        "earth wisp"
      ]
    },
    {
      "item": "jet black flail",
      "type": "weapon",
      "monsters": [
        "wealthy merchant"
      ]
    },
    {
      "item": "lesser staff of lightning",
      "type": "weapon",
      "monsters": [
        "grey bull",
        "speckled warthog",
        "traveling bard"
      ]
    },
    {
      "item": "polished steel band",
      "type": "jewel",
      "monsters": [
        "wealthy merchant"
      ]
    },
    {
      "item": "silver trinket",
      "type": "jewel",
      "monsters": [
        "wealthy merchant"
      ]
    },
    {
      "item": "skull hatchet",
      "type": "weapon",
      "monsters": [
        "giant ant-lion"
      ]
    },
    {
      "item": "speckled hogskin gloves",
      "type": "hands",
      "monsters": [
        "speckled warthog"
      ]
    },
    {
      "item": "superior two-handed sword",
      "type": "weapon",
      "monsters": [
        "traveling bard"
      ]
    },
    {
      "item": "swatch of cotton",
      "type": "material",
      "monsters": [
        "old man"
      ]
    }
  ],
  "Shores of the Thundermist River": [
    {
      "item": "arcing greataxe",
      "type": "weapon",
      "monsters": [
        "electrified hydra"
      ]
    },
    {
      "item": "claws of the animated bark",
      "type": "weapon",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "cloak of bark",
      "type": "cloak",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "club of knots",
      "type": "weapon",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "darktread heavy boots",
      "type": "feet",
      "monsters": [
        "rabid grizzly bear"
      ]
    },
    {
      "item": "dryad's focusing spear",
      "type": "weapon",
      "monsters": [
        "protective dryad"
      ]
    },
    {
      "item": "electrified hydra fang",
      "type": "weapon",
      "monsters": [
        "electrified hydra"
      ]
    },
    {
      "item": "enchanted silk fists",
      "type": "hands",
      "monsters": [
        "protective dryad"
      ]
    },
    {
      "item": "flaming hydra fang",
      "type": "weapon",
      "monsters": [
        "flaming hydra"
      ]
    },
    {
      "item": "forest faded leather gloves",
      "type": "hands",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "grizzly hide grips",
      "type": "hands",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "grizzly hide vest",
      "type": "body",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "hydra-skin gloves",
      "type": "hands",
      "monsters": [
        "shrieking hydra"
      ]
    },
    {
      "item": "icy hydra fang",
      "type": "weapon",
      "monsters": [
        "ice hydra"
      ]
    },
    {
      "item": "legplates of twisted vines",
      "type": "legs",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "mesh thundermist gloves",
      "type": "hands",
      "monsters": [
        "protective dryad"
      ]
    },
    {
      "item": "mighty barbarian's hand axe",
      "type": "weapon",
      "monsters": [
        "protective dryad"
      ]
    },
    {
      "item": "plated gauntlets of the ferocious",
      "type": "hands",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "ruby infused pair of black gauntlets",
      "type": "hands",
      "monsters": [
        "flaming hydra"
      ]
    },
    {
      "item": "scaled recruit footguards",
      "type": "feet",
      "monsters": [
        "two-headed hydra"
      ]
    },
    {
      "item": "scrap of rough leather",
      "type": "material",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "scrap of suede",
      "type": "material",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "sharp thorn",
      "type": "material",
      "monsters": [
        "protective dryad"
      ]
    },
    {
      "item": "shrieking hydra fang",
      "type": "weapon",
      "monsters": [
        "shrieking hydra"
      ]
    },
    {
      "item": "slippery kitchen cleaver",
      "type": "weapon",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "spurred wartreads",
      "type": "feet",
      "monsters": [
        "treant sapling"
      ]
    },
    {
      "item": "studded horned helmet",
      "type": "head",
      "monsters": [
        "water hydra"
      ]
    },
    {
      "item": "studded nomad's handwraps",
      "type": "hands",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "tooth of an undead black bear",
      "type": "jewel",
      "monsters": [
        "rabid grizzly bear"
      ]
    },
    {
      "item": "trailblazer's leather coif",
      "type": "head",
      "monsters": [
        "shrieking hydra"
      ]
    },
    {
      "item": "treant's arm",
      "type": "weapon",
      "monsters": [
        "lumbering treant"
      ]
    },
    {
      "item": "two-headed hydra fang flail",
      "type": "weapon",
      "monsters": [
        "two-headed hydra"
      ]
    },
    {
      "item": "warscout's gauntlets",
      "type": "hands",
      "monsters": [
        "grizzly bear"
      ]
    },
    {
      "item": "water hydra fang",
      "type": "weapon",
      "monsters": [
        "water hydra"
      ]
    }
  ],
  "Southern Dunes": [
    {
      "item": "ancient dragonbone sky-ravager",
      "type": "weapon",
      "monsters": [
        "Saurilite mounted archer"
      ]
    },
    {
      "item": "basilisk scale cloak",
      "type": "cloak",
      "monsters": [
        "dune basilisk"
      ]
    },
    {
      "item": "bone amulet",
      "type": "jewel",
      "monsters": [
        "Saurilite bone priest"
      ]
    },
    {
      "item": "desert-protectors mirage boots",
      "type": "feet",
      "monsters": [
        "Saurilite guardian"
      ]
    },
    {
      "item": "guardian's soaring spear",
      "type": "weapon",
      "monsters": [
        "Saurilite guardian"
      ]
    },
    {
      "item": "hauberk of the far traveler",
      "type": "body",
      "monsters": [
        "Saurilite mounted archer"
      ]
    },
    {
      "item": "master's katana of ice",
      "type": "weapon",
      "monsters": [
        "Saurilite master samurai"
      ]
    },
    {
      "item": "master's katana of sparks",
      "type": "weapon",
      "monsters": [
        "Saurilite master samurai"
      ]
    },
    {
      "item": "mended cloak of deflection",
      "type": "cloak",
      "monsters": [
        "Saurilite guardian"
      ]
    },
    {
      "item": "pair of haunted muffled steps",
      "type": "feet",
      "monsters": [
        "Saurilite ninja"
      ]
    },
    {
      "item": "petrified basilisk claw",
      "type": "weapon",
      "monsters": [
        "dune basilisk"
      ]
    },
    {
      "item": "shugendo-crested silken kimono",
      "type": "body",
      "monsters": [
        "Saurilite ninja"
      ]
    },
    {
      "item": "spire of tortured earth",
      "type": "weapon",
      "monsters": [
        "Saurilite bone priest"
      ]
    },
    {
      "item": "wildflame guardian's gloves",
      "type": "hands",
      "monsters": [
        "Saurilite guardian"
      ]
    }
  ],
  "Tenebrous Hollow": [
    {
      "item": "bent fey rapier",
      "type": "weapon",
      "monsters": [
        "water fairy"
      ]
    },
    {
      "item": "bloodied imperfect bastard sword",
      "type": "weapon",
      "monsters": [
        "elven fisherman"
      ]
    },
    {
      "item": "dirk of burning pitch",
      "type": "weapon",
      "monsters": [
        "elven tracker"
      ]
    },
    {
      "item": "gauntlets of vigilence",
      "type": "hands",
      "monsters": [
        "vigilant wood owl"
      ]
    },
    {
      "item": "golden ring",
      "type": "jewel",
      "monsters": [
        "exquisite golden butterfly"
      ]
    },
    {
      "item": "legionnaire's grasps",
      "type": "hands",
      "monsters": []
    },
    {
      "item": "red hot dagger",
      "type": "weapon",
      "monsters": [
        "toxic constrictor snake"
      ]
    },
    {
      "item": "skull hatchet",
      "type": "weapon",
      "monsters": [
        "black deer"
      ]
    },
    {
      "item": "sprite's finger",
      "type": "weapon",
      "monsters": [
        "valley sprite"
      ]
    },
    {
      "item": "tidal harpoon",
      "type": "weapon",
      "monsters": [
        "elven fisherman"
      ]
    },
    {
      "item": "tidal short bow",
      "type": "weapon",
      "monsters": [
        "green water nymph"
      ]
    },
    {
      "item": "vial of fireflies",
      "type": "material",
      "monsters": [
        "elven hunter",
        "elven tracker"
      ]
    },
    {
      "item": "wand of lesser ice",
      "type": "weapon",
      "monsters": [
        "lily of the valley"
      ]
    },
    {
      "item": "warped jo staff",
      "type": "weapon",
      "monsters": [
        "lily of the valley"
      ]
    }
  ],
  "Thorny Brush Hills": [
    {
      "item": "black bat wing cloak",
      "type": "cloak",
      "monsters": [
        "bat wraith"
      ]
    },
    {
      "item": "bloodhunter's cloak",
      "type": "cloak",
      "monsters": [
        "mudderthump"
      ]
    },
    {
      "item": "bloodsucking bat fang",
      "type": "weapon",
      "monsters": [
        "bat wraith"
      ]
    },
    {
      "item": "crystalline attuned treads",
      "type": "feet",
      "monsters": [
        "frisky centipede"
      ]
    },
    {
      "item": "exalted wanderer's gauntlets",
      "type": "hands",
      "monsters": [
        "mudderthump"
      ]
    },
    {
      "item": "heartless pair of dragonfire earrings",
      "type": "jewel",
      "monsters": [
        "frenzied falcon"
      ]
    },
    {
      "item": "pitch black breastplate",
      "type": "body",
      "monsters": [
        "black thorn leech"
      ]
    },
    {
      "item": "platelegs of the fallen",
      "type": "legs",
      "monsters": [
        "bat wraith"
      ]
    },
    {
      "item": "rootweave leggings",
      "type": "legs",
      "monsters": [
        "mealy-mouth croppie"
      ]
    },
    {
      "item": "talons of the veteran",
      "type": "weapon",
      "monsters": [
        "one-eyed eagle"
      ]
    },
    {
      "item": "thorn-studded cloak",
      "type": "cloak",
      "monsters": [
        "black thorn leech"
      ]
    },
    {
      "item": "thorny axe",
      "type": "weapon",
      "monsters": [
        "black thorn leech"
      ]
    },
    {
      "item": "thorny brush cloak",
      "type": "cloak",
      "monsters": [
        "bat wraith",
        "frenzied falcon",
        "frisky centipede",
        "great horny toad"
      ]
    },
    {
      "item": "white and blue glimmering pendant",
      "type": "jewel",
      "monsters": [
        "great horny toad"
      ]
    },
    {
      "item": "wicked eagle talon",
      "type": "weapon",
      "monsters": [
        "one-eyed eagle"
      ]
    }
  ],
  "Throrfiril": [
    {
      "item": "black and gold leather cap",
      "type": "head",
      "monsters": [
        "black griffon"
      ]
    },
    {
      "item": "blade of the moon",
      "type": "weapon",
      "monsters": [
        "elite griffon rider"
      ]
    },
    {
      "item": "blood-drinker's stiletto",
      "type": "weapon",
      "monsters": [
        "blood stirge"
      ]
    },
    {
      "item": "bloodsoaked ringmail gauntlets",
      "type": "hands",
      "monsters": [
        "blood stirge"
      ]
    },
    {
      "item": "bow of chiseled ice",
      "type": "weapon",
      "monsters": [
        "throrfiril archer"
      ]
    },
    {
      "item": "circlet of the far traveler",
      "type": "head",
      "monsters": [
        "throrfiril slave guard"
      ]
    },
    {
      "item": "cloak of blessed nights",
      "type": "cloak",
      "monsters": [
        "griffin rider"
      ]
    },
    {
      "item": "cloak of rippling water",
      "type": "cloak",
      "monsters": [
        "forest sylph"
      ]
    },
    {
      "item": "cloak of shimmering griffon feathers",
      "type": "cloak",
      "monsters": [
        "griffin rider"
      ]
    },
    {
      "item": "creeper's claws",
      "type": "weapon",
      "monsters": [
        "yellow creeper"
      ]
    },
    {
      "item": "dagger of rippling water",
      "type": "weapon",
      "monsters": [
        "forest sylph"
      ]
    },
    {
      "item": "dazzling yellow jacket",
      "type": "body",
      "monsters": [
        "yellow creeper"
      ]
    },
    {
      "item": "dragon sage's dueling cane",
      "type": "weapon",
      "monsters": [
        "throrfiril great sage"
      ]
    },
    {
      "item": "elven gorget",
      "type": "jewel",
      "monsters": [
        "throrfiril guard"
      ]
    },
    {
      "item": "footguards of fortune",
      "type": "feet",
      "monsters": [
        "silver hippogriff"
      ]
    },
    {
      "item": "forest guard's hauberk",
      "type": "body",
      "monsters": [
        "throrfiril guard"
      ]
    },
    {
      "item": "grips of the assassin",
      "type": "hands",
      "monsters": [
        "stealthy kenku"
      ]
    },
    {
      "item": "handguards of the elite",
      "type": "hands",
      "monsters": [
        "elite griffon rider"
      ]
    },
    {
      "item": "leggings of oppression",
      "type": "legs",
      "monsters": [
        "throrfiril slave guard"
      ]
    },
    {
      "item": "lightning-struck storm staff",
      "type": "weapon",
      "monsters": [
        "silver hippogriff"
      ]
    },
    {
      "item": "massive redwood club",
      "type": "weapon",
      "monsters": [
        "yellow creeper"
      ]
    },
    {
      "item": "oiled gloves of the long watch",
      "type": "hands",
      "monsters": [
        "throrfiril sentry"
      ]
    },
    {
      "item": "quilt of stolen memories",
      "type": "cloak",
      "monsters": [
        "black obliviax"
      ]
    },
    {
      "item": "sandals of insight",
      "type": "feet",
      "monsters": [
        "throrfiril great sage"
      ]
    },
    {
      "item": "shard of power",
      "type": "material",
      "monsters": [
        "throrfiril mage"
      ]
    },
    {
      "item": "shrouded leggings of black moss",
      "type": "legs",
      "monsters": [
        "black obliviax"
      ]
    },
    {
      "item": "slick black kenku needle",
      "type": "weapon",
      "monsters": [
        "stealthy kenku"
      ]
    },
    {
      "item": "spetum of lightning",
      "type": "weapon",
      "monsters": [
        "throrforil master captain"
      ]
    },
    {
      "item": "throrfiril footman's mace",
      "type": "weapon",
      "monsters": [
        "throrfiril sentry"
      ]
    },
    {
      "item": "violet mageblade leggings",
      "type": "legs",
      "monsters": [
        "throrfiril mage"
      ]
    },
    {
      "item": "warbringer captain's visage",
      "type": "head",
      "monsters": [
        "throrforil master captain"
      ]
    },
    {
      "item": "warrior-mage's spell-woven boots",
      "type": "feet",
      "monsters": [
        "throrfiril mage"
      ]
    },
    {
      "item": "yard of yew",
      "type": "material",
      "monsters": [
        "forest sylph"
      ]
    }
  ],
  "Throrfiril City of Trees": [
    {
      "item": "blackfire gloves of the void",
      "type": "hands",
      "monsters": [
        "hovering purple crystalline dragon"
      ]
    },
    {
      "item": "citrine-scaled leather greaves",
      "type": "legs",
      "monsters": [
        "flying green crystalline dragon",
        "soaring yellow crystalline dragon"
      ]
    },
    {
      "item": "crystalized dragon's tear",
      "type": "jewel",
      "monsters": [
        "flying red crystalline dragon"
      ]
    },
    {
      "item": "dagger of the Old One",
      "type": "weapon",
      "monsters": [
        "flying red crystalline dragon"
      ]
    },
    {
      "item": "flawless emerald kite shield",
      "type": "shield",
      "monsters": [
        "flying green crystalline dragon"
      ]
    },
    {
      "item": "golden dragon's head spine",
      "type": "weapon",
      "monsters": [
        "soaring gold crystalline dragon"
      ]
    },
    {
      "item": "kilt of sparkling emerald scales",
      "type": "legs",
      "monsters": [
        "flying green crystalline dragon"
      ]
    },
    {
      "item": "purple crystalline plate mail",
      "type": "body",
      "monsters": [
        "hovering purple crystalline dragon"
      ]
    },
    {
      "item": "royal scaled dragonbone greaves",
      "type": "legs",
      "monsters": [
        "soaring yellow crystalline dragon"
      ]
    },
    {
      "item": "ruby scaled dragonwing shield",
      "type": "shield",
      "monsters": [
        "flying red crystalline dragon"
      ]
    },
    {
      "item": "sapphire scaled boots",
      "type": "feet",
      "monsters": [
        "flying blue crystalline dragon"
      ]
    },
    {
      "item": "scintillating gold-scaled circlet",
      "type": "head",
      "monsters": [
        "soaring gold crystalline dragon"
      ]
    },
    {
      "item": "shattered blue dragon's wings",
      "type": "cloak",
      "monsters": [
        "flying blue crystalline dragon"
      ]
    },
    {
      "item": "studded boots of the lost",
      "type": "feet",
      "monsters": [
        "soaring yellow crystalline dragon"
      ]
    }
  ],
  "Throrfiril Royal Citadel": [
    {
      "item": "blazing red bastard sword",
      "type": "weapon",
      "monsters": [
        "elite sahnoet trooper"
      ]
    },
    {
      "item": "blue icicle",
      "type": "material",
      "monsters": [
        "cairngorm mage"
      ]
    },
    {
      "item": "dark sahnoet claymore",
      "type": "weapon",
      "monsters": [
        "elite sahnoet trooper"
      ]
    },
    {
      "item": "deft boots of the sly",
      "type": "feet",
      "monsters": [
        "steatite assassin"
      ]
    },
    {
      "item": "finely-crafted gisop quiver",
      "type": "jewel",
      "monsters": [
        "lithoid gisop archer"
      ]
    },
    {
      "item": "forlorn lyroe's cowl",
      "type": "head",
      "monsters": [
        "shale lyroe"
      ]
    },
    {
      "item": "gauntlets of true casting",
      "type": "hands",
      "monsters": [
        "cairngorm mage"
      ]
    },
    {
      "item": "opaque olivine spectacles",
      "type": "head",
      "monsters": [
        "chrysolite cannoneer"
      ]
    },
    {
      "item": "peridot-inlaid hand cannon",
      "type": "weapon",
      "monsters": [
        "chrysolite cannoneer"
      ]
    },
    {
      "item": "pulverizing bonecrusher",
      "type": "weapon",
      "monsters": [
        "ranclong bonecrusher"
      ]
    },
    {
      "item": "ranclong gauntlets",
      "type": "hands",
      "monsters": [
        "ranclong bonecrusher"
      ]
    },
    {
      "item": "scale master assassin's garb",
      "type": "body",
      "monsters": [
        "steatite assassin"
      ]
    },
    {
      "item": "shale maul of desolation",
      "type": "weapon",
      "monsters": [
        "shale lyroe"
      ]
    },
    {
      "item": "smoky quartz half-staff",
      "type": "weapon",
      "monsters": [
        "cairngorm mage"
      ]
    },
    {
      "item": "studded cloak of valor",
      "type": "cloak",
      "monsters": [
        "lithoid gisop archer"
      ]
    }
  ],
  "Tomb of the Dragon King": [
    {
      "item": "arc of flame",
      "type": "weapon",
      "monsters": [
        "flame-bone dragon"
      ]
    },
    {
      "item": "beating heart of the dragon",
      "type": "jewel",
      "monsters": [
        "undead dragon sentinel"
      ]
    },
    {
      "item": "cursed dragon scaled gloves",
      "type": "hands",
      "monsters": [
        "undead dragon sentinel"
      ]
    },
    {
      "item": "decorated ancient cuirass",
      "type": "body",
      "monsters": [
        "saurilite shogun"
      ]
    },
    {
      "item": "dirk of the Still Sands",
      "type": "weapon",
      "monsters": [
        "berzerk dragon skeleton"
      ]
    },
    {
      "item": "dragon-bone spear",
      "type": "weapon",
      "monsters": [
        "headless dragon lord"
      ]
    },
    {
      "item": "dragonbone shield",
      "type": "shield",
      "monsters": [
        "berzerk dragon skeleton"
      ]
    },
    {
      "item": "fiery ancient shield of chaos",
      "type": "shield",
      "monsters": [
        "awakened dragon spirit"
      ]
    },
    {
      "item": "floating eye of flame",
      "type": "jewel",
      "monsters": [
        "awakened dragon spirit"
      ]
    },
    {
      "item": "frigid dragonclaw ripper",
      "type": "weapon",
      "monsters": [
        "frost-bone dragon"
      ]
    },
    {
      "item": "frozen dragon's fang",
      "type": "weapon",
      "monsters": [
        "frost-bone dragon"
      ]
    },
    {
      "item": "infused leggings of the titans",
      "type": "legs",
      "monsters": [
        "headless dragon lord"
      ]
    },
    {
      "item": "primal bone prophet's garb",
      "type": "body",
      "monsters": [
        "berzerk dragon skeleton"
      ]
    },
    {
      "item": "shogun's naginata",
      "type": "weapon",
      "monsters": [
        "saurilite shogun"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "undead dragon sentinel"
      ]
    }
  ],
  "Utilla Town": [
    {
      "item": "adventurer's trusty pants",
      "type": "legs",
      "monsters": [
        "gnome citizen"
      ]
    },
    {
      "item": "brigand's heavy boots",
      "type": "feet",
      "monsters": [
        "brawny brigand"
      ]
    },
    {
      "item": "buccaneer's heavy gauntlets",
      "type": "hands",
      "monsters": [
        "pirate cannoneer"
      ]
    },
    {
      "item": "deep-forged partisan",
      "type": "weapon",
      "monsters": [
        "Utilla city guardsman"
      ]
    },
    {
      "item": "driftwood sandals",
      "type": "feet",
      "monsters": [
        "gnome citizen"
      ]
    },
    {
      "item": "floating singing crystal blade",
      "type": "weapon",
      "monsters": [
        "Utilla city guardsman"
      ]
    },
    {
      "item": "frozen heavy cutlass",
      "type": "weapon",
      "monsters": [
        "pirate tactician"
      ]
    },
    {
      "item": "gadgeteer's heavy overcoat",
      "type": "body",
      "monsters": [
        "town trader"
      ]
    },
    {
      "item": "gnomish gloves of truth",
      "type": "hands",
      "monsters": [
        "gnome citizen"
      ]
    },
    {
      "item": "hart hide hat",
      "type": "head",
      "monsters": [
        "pirate invader"
      ]
    },
    {
      "item": "hood of insight",
      "type": "head",
      "monsters": [
        "pirate tactician"
      ]
    },
    {
      "item": "invader's cutlass",
      "type": "weapon",
      "monsters": [
        "pirate invader"
      ]
    },
    {
      "item": "nobleman's fancy vest",
      "type": "body",
      "monsters": [
        "Utilla noble"
      ]
    },
    {
      "item": "reinforced tinkerer's cloak",
      "type": "cloak",
      "monsters": [
        "gnome citizen"
      ]
    },
    {
      "item": "scorched and dented helmet",
      "type": "head",
      "monsters": [
        "pirate cannoneer"
      ]
    },
    {
      "item": "seasworn spear",
      "type": "weapon",
      "monsters": [
        "town trader"
      ]
    },
    {
      "item": "spiked war axe",
      "type": "weapon",
      "monsters": [
        "brawny brigand"
      ]
    },
    {
      "item": "tactician's drape",
      "type": "cloak",
      "monsters": [
        "pirate tactician"
      ]
    },
    {
      "item": "Utilla guardsman's tall shield",
      "type": "shield",
      "monsters": [
        "Utilla city guardsman"
      ]
    },
    {
      "item": "yard of fine silk",
      "type": "material",
      "monsters": [
        "town trader"
      ]
    }
  ],
  "Verulian Falls": [
    {
      "item": "cape of fallen leaves",
      "type": "cloak",
      "monsters": [
        "giant tree basilisk"
      ]
    },
    {
      "item": "feral scaled helm",
      "type": "head",
      "monsters": [
        "giant tree basilisk"
      ]
    },
    {
      "item": "gauntlets of mossy bark",
      "type": "hands",
      "monsters": [
        "moss covered ent"
      ]
    },
    {
      "item": "giant albino scorpion claw",
      "type": "weapon",
      "monsters": [
        "albino, three-clawed scorpion"
      ]
    },
    {
      "item": "gloves of woven roots",
      "type": "hands",
      "monsters": [
        "protruding root tendril"
      ]
    },
    {
      "item": "gnarled gauntlets",
      "type": "hands",
      "monsters": [
        "protruding root tendril"
      ]
    },
    {
      "item": "grinning grizzly skull helmet",
      "type": "head",
      "monsters": [
        "grinning wooly grizzly"
      ]
    },
    {
      "item": "scorpion tail belt",
      "type": "jewel",
      "monsters": [
        "albino, three-clawed scorpion"
      ]
    },
    {
      "item": "slime-covered wrist mounted crossbow",
      "type": "weapon",
      "monsters": [
        "pygmy cave worm"
      ]
    },
    {
      "item": "tattered woolly cape",
      "type": "cloak",
      "monsters": [
        "grinning wooly grizzly"
      ]
    },
    {
      "item": "wormhide cloak",
      "type": "cloak",
      "monsters": [
        "pygmy cave worm"
      ]
    }
  ],
  "Verulian Forest": [
    {
      "item": "Allorien bow of flame",
      "type": "weapon",
      "monsters": [
        "huge cave worm"
      ]
    },
    {
      "item": "archaic banner slicer",
      "type": "weapon",
      "monsters": [
        "tormented tree spirit"
      ]
    },
    {
      "item": "bramble worm skull",
      "type": "head",
      "monsters": [
        "huge cave worm"
      ]
    },
    {
      "item": "druid's knotted club",
      "type": "weapon",
      "monsters": [
        "Verulian druid acolyte"
      ]
    },
    {
      "item": "enormous pulsating greatsword",
      "type": "weapon",
      "monsters": [
        "enormous wrinkled pulsating tendril"
      ]
    },
    {
      "item": "exalted wanderer's leggings",
      "type": "legs",
      "monsters": [
        "striped Verulian snake"
      ]
    },
    {
      "item": "grizzly hide pants",
      "type": "legs",
      "monsters": [
        "frenzied, diseased grizzly"
      ]
    },
    {
      "item": "heavy tusk-lined gauntlets",
      "type": "hands",
      "monsters": [
        "Verulian druid acolyte"
      ]
    },
    {
      "item": "hood of the snake",
      "type": "head",
      "monsters": [
        "striped Verulian snake"
      ]
    },
    {
      "item": "lacquered hardwood breastplate",
      "type": "body",
      "monsters": [
        "tormented tree spirit"
      ]
    },
    {
      "item": "moldy earthen sprig",
      "type": "weapon",
      "monsters": [
        "tormented tree spirit"
      ]
    },
    {
      "item": "nymph skin gloves",
      "type": "hands",
      "monsters": [
        "Verulian druid acolyte"
      ]
    },
    {
      "item": "pulsating sphere of energy",
      "type": "material",
      "monsters": [
        "enormous wrinkled pulsating tendril"
      ]
    },
    {
      "item": "shadowsteel cowl",
      "type": "head",
      "monsters": [
        "huge cave worm"
      ]
    },
    {
      "item": "sinew-leashed, spiked dog's collar",
      "type": "jewel",
      "monsters": [
        "frenzied, diseased grizzly"
      ]
    },
    {
      "item": "staff of dreams",
      "type": "weapon",
      "monsters": [
        "Verulian druid acolyte"
      ]
    },
    {
      "item": "thin bone dagger",
      "type": "weapon",
      "monsters": [
        "striped Verulian snake"
      ]
    },
    {
      "item": "vampiric expanded bat wing",
      "type": "shield",
      "monsters": [
        "huge vampire bat"
      ]
    },
    {
      "item": "vest of shifting shadows",
      "type": "body",
      "monsters": [
        "huge vampire bat"
      ]
    },
    {
      "item": "werejackal claw",
      "type": "jewel",
      "monsters": [
        "Verulian druid acolyte",
        "enormous wrinkled pulsating tendril",
        "frenzied, diseased grizzly",
        "huge cave worm",
        "huge vampire bat",
        "striped Verulian snake"
      ]
    }
  ],
  "Wailing Woods": [
    {
      "item": "banshee pendant",
      "type": "jewel",
      "monsters": [
        "wailing banshee"
      ]
    },
    {
      "item": "black ice shard",
      "type": "weapon",
      "monsters": [
        "black-clothed wraith"
      ]
    },
    {
      "item": "cloak of spirit essence",
      "type": "cloak",
      "monsters": [
        "wailing banshee"
      ]
    },
    {
      "item": "cursed wraith's platemail",
      "type": "body",
      "monsters": [
        "black-clothed wraith"
      ]
    },
    {
      "item": "dark sentinel's cowl",
      "type": "head",
      "monsters": [
        "faceless ghoul"
      ]
    },
    {
      "item": "ethereal dagger",
      "type": "weapon",
      "monsters": [
        "moaning ghost"
      ]
    },
    {
      "item": "ethereal longbow",
      "type": "weapon",
      "monsters": [
        "skulking phantasm"
      ]
    },
    {
      "item": "frost sabre",
      "type": "weapon",
      "monsters": [
        "dismembered spectre"
      ]
    },
    {
      "item": "gauntlets of titanium",
      "type": "hands",
      "monsters": [
        "paladin spirit"
      ]
    },
    {
      "item": "ghastly pilum",
      "type": "weapon",
      "monsters": [
        "dismembered spectre"
      ]
    },
    {
      "item": "green brand of wind",
      "type": "weapon",
      "monsters": [
        "ancient Kaidite phantom"
      ]
    },
    {
      "item": "locket of a dead lover",
      "type": "jewel",
      "monsters": [
        "moaning ghost"
      ]
    },
    {
      "item": "midnight deathmantle",
      "type": "body",
      "monsters": [
        "skulking phantasm"
      ]
    },
    {
      "item": "necklace made of snake cartiledge",
      "type": "jewel",
      "monsters": [
        "ghoulish apparition"
      ]
    },
    {
      "item": "perfectly woven robes",
      "type": "body",
      "monsters": [
        "black-clothed wraith"
      ]
    },
    {
      "item": "rock-striking hammer",
      "type": "weapon",
      "monsters": [
        "paladin spirit"
      ]
    },
    {
      "item": "runestaff of mysticism",
      "type": "weapon",
      "monsters": [
        "dismembered spectre"
      ]
    },
    {
      "item": "shattered gargoyle claw",
      "type": "weapon",
      "monsters": [
        "paladin spirit"
      ]
    },
    {
      "item": "stiletto of wind",
      "type": "weapon",
      "monsters": [
        "skulking phantasm"
      ]
    },
    {
      "item": "stonebreaker hammer",
      "type": "weapon",
      "monsters": [
        "ancient Kaidite phantom"
      ]
    },
    {
      "item": "tattered niordian hauberk",
      "type": "body",
      "monsters": [
        "paladin spirit"
      ]
    },
    {
      "item": "timeworn ringmail gauntlets",
      "type": "hands",
      "monsters": [
        "ghoulish apparition"
      ]
    },
    {
      "item": "warboots of wailing",
      "type": "feet",
      "monsters": [
        "paladin spirit"
      ]
    },
    {
      "item": "worn old wooden staff",
      "type": "weapon",
      "monsters": [
        "wailing banshee"
      ]
    }
  ],
  "Wretched Forest": [
    {
      "item": "battered knight's boots",
      "type": "feet",
      "monsters": [
        "guardian knight"
      ]
    },
    {
      "item": "blood red cloak",
      "type": "cloak",
      "monsters": [
        "black spider"
      ]
    },
    {
      "item": "bloody impaling harpoon",
      "type": "weapon",
      "monsters": [
        "damondred",
        "mudder"
      ]
    },
    {
      "item": "blue dagger",
      "type": "weapon",
      "monsters": [
        "mite"
      ]
    },
    {
      "item": "defiant warlock's staff",
      "type": "weapon",
      "monsters": [
        "mite"
      ]
    },
    {
      "item": "Dweller's Skullcrusher",
      "type": "weapon",
      "monsters": [
        "Chasm Dweller"
      ]
    },
    {
      "item": "guardian's halberd of ice",
      "type": "weapon",
      "monsters": [
        "guardian knight"
      ]
    },
    {
      "item": "heavy wretched cloak",
      "type": "cloak",
      "monsters": [
        "casirelle"
      ]
    },
    {
      "item": "hunter's bow",
      "type": "weapon",
      "monsters": [
        "black spider"
      ]
    },
    {
      "item": "interogator's nightstick",
      "type": "weapon",
      "monsters": [
        "ogran"
      ]
    },
    {
      "item": "ogran war axe",
      "type": "weapon",
      "monsters": [
        "ogran"
      ]
    },
    {
      "item": "ogre magi staff",
      "type": "weapon",
      "monsters": [
        "guardian knight"
      ]
    },
    {
      "item": "pocketknife of sparks",
      "type": "weapon",
      "monsters": [
        "ogran"
      ]
    },
    {
      "item": "pointed witches hat",
      "type": "head",
      "monsters": [
        "casirelle"
      ]
    },
    {
      "item": "polished steel quarter staff",
      "type": "weapon",
      "monsters": [
        "casirelle"
      ]
    },
    {
      "item": "slime covered staff",
      "type": "weapon",
      "monsters": [
        "wyddren"
      ]
    },
    {
      "item": "tower shield",
      "type": "shield",
      "monsters": [
        "mudder",
        "wyddren",
        "zerynd'l"
      ]
    },
    {
      "item": "two-handed bone mace",
      "type": "weapon",
      "monsters": [
        "black spider"
      ]
    },
    {
      "item": "wyddren hide pants",
      "type": "legs",
      "monsters": [
        "wyddren"
      ]
    }
  ],
  "Arctic Glaciers": [
    {
      "item": "arctic direwolf chestguard",
      "type": "body",
      "monsters": [
        "ice lord"
      ]
    },
    {
      "item": "arctic fur hood",
      "type": "head",
      "monsters": [
        "snow leopard",
        "snow wolf"
      ]
    },
    {
      "item": "battleworn handguards of frost",
      "type": "hands",
      "monsters": [
        "ice knight"
      ]
    },
    {
      "item": "bluesteel boots",
      "type": "feet",
      "monsters": [
        "snow giant"
      ]
    },
    {
      "item": "cerulean crystal hammer",
      "type": "weapon",
      "monsters": [
        "ice knight"
      ]
    },
    {
      "item": "cloak of cursed magic",
      "type": "cloak",
      "monsters": [
        "black, swirling vortex"
      ]
    },
    {
      "item": "crystal mace, crackling with energy",
      "type": "weapon",
      "monsters": [
        "black, swirling vortex"
      ]
    },
    {
      "item": "dagger of glacial ice",
      "type": "weapon",
      "monsters": [
        "ice lord"
      ]
    },
    {
      "item": "floating glass witch's pricker",
      "type": "weapon",
      "monsters": [
        "snow spirit"
      ]
    },
    {
      "item": "frigid ringmail boots",
      "type": "feet",
      "monsters": [
        "mistress of frost"
      ]
    },
    {
      "item": "frost-white leggings",
      "type": "legs",
      "monsters": [
        "snow spirit"
      ]
    },
    {
      "item": "frosted blue demon staff",
      "type": "weapon",
      "monsters": [
        "mistress of frost"
      ]
    },
    {
      "item": "frozen heart",
      "type": "jewel",
      "monsters": [
        "snow spirit"
      ]
    },
    {
      "item": "fur-lined thick yeti cloak",
      "type": "cloak",
      "monsters": [
        "large yeti"
      ]
    },
    {
      "item": "glacial armor",
      "type": "body",
      "monsters": [
        "Snow King"
      ]
    },
    {
      "item": "glacial leggings",
      "type": "legs",
      "monsters": [
        "ice Queen"
      ]
    },
    {
      "item": "gloves of azure satin",
      "type": "hands",
      "monsters": [
        "ice Lady"
      ]
    },
    {
      "item": "greatbow of oblivion",
      "type": "weapon",
      "monsters": [
        "black, swirling vortex"
      ]
    },
    {
      "item": "ice guardian's greaves",
      "type": "legs",
      "monsters": [
        "ice guardian"
      ]
    },
    {
      "item": "King's Crown",
      "type": "head",
      "monsters": [
        "Snow King"
      ]
    },
    {
      "item": "knife of fangs",
      "type": "weapon",
      "monsters": [
        "snow wolf"
      ]
    },
    {
      "item": "pair of gilded dueling gloves",
      "type": "hands",
      "monsters": [
        "ice warrior"
      ]
    },
    {
      "item": "perfectly woven boots",
      "type": "feet",
      "monsters": [
        "servant"
      ]
    },
    {
      "item": "Queen's Tiara",
      "type": "head",
      "monsters": [
        "Ice Queen"
      ]
    },
    {
      "item": "shroud of promise",
      "type": "cloak",
      "monsters": [
        "ice warrior"
      ]
    },
    {
      "item": "shroud of the froststorm",
      "type": "head",
      "monsters": [
        "ice Lady"
      ]
    },
    {
      "item": "spiral of black ice",
      "type": "weapon",
      "monsters": [
        "servant"
      ]
    },
    {
      "item": "studded gloaming boots",
      "type": "feet",
      "monsters": [
        "snow giant"
      ]
    }
  ],
  "Barrows of Zden": [
    {
      "item": "azure jeweled encrusted stilleto",
      "type": "weapon",
      "monsters": [
        "shambling abomination"
      ]
    },
    {
      "item": "black and gold spectral grips",
      "type": "hands",
      "monsters": [
        "bale spawn",
        "crypt ghoul"
      ]
    },
    {
      "item": "black slimy hatchet",
      "type": "weapon",
      "monsters": [
        "creeping darkness"
      ]
    },
    {
      "item": "blackened battle axe",
      "type": "weapon",
      "monsters": [
        "phantom knight"
      ]
    },
    {
      "item": "cold-touched band",
      "type": "jewel",
      "monsters": [
        "malice elemental"
      ]
    },
    {
      "item": "crimson mallet",
      "type": "weapon",
      "monsters": [
        "crimson mist"
      ]
    },
    {
      "item": "cursed wraith's platemail",
      "type": "body",
      "monsters": [
        "mist wraith"
      ]
    },
    {
      "item": "electrified sharp shank",
      "type": "weapon",
      "monsters": [
        "will o' wisp"
      ]
    },
    {
      "item": "frost sabre",
      "type": "weapon",
      "monsters": [
        "creeping darkness"
      ]
    },
    {
      "item": "gauntlets of undying",
      "type": "hands",
      "monsters": [
        "barrow wight"
      ]
    },
    {
      "item": "ghostly wraith's spiritstaff",
      "type": "weapon",
      "monsters": [
        "crimson mist",
        "malice elemental"
      ]
    },
    {
      "item": "gloves of the crypt",
      "type": "hands",
      "monsters": [
        "bale spawn"
      ]
    },
    {
      "item": "haunted black gauntlets",
      "type": "hands",
      "monsters": [
        "phantom knight"
      ]
    },
    {
      "item": "haunted, ethereal shield",
      "type": "shield",
      "monsters": [
        "barrow wight"
      ]
    },
    {
      "item": "ice shard",
      "type": "material",
      "monsters": [
        "mist wraith",
        "phantasmal warrior"
      ]
    },
    {
      "item": "nightmare claws",
      "type": "weapon",
      "monsters": [
        "malice elemental"
      ]
    },
    {
      "item": "pale blade",
      "type": "weapon",
      "monsters": [
        "pale spectre"
      ]
    },
    {
      "item": "riveted guardsman's cloak",
      "type": "cloak",
      "monsters": [
        "crypt ghoul"
      ]
    },
    {
      "item": "robes of darkness",
      "type": "body",
      "monsters": [
        "creeping darkness"
      ]
    },
    {
      "item": "streaked iron gauntlets",
      "type": "hands",
      "monsters": [
        "pale spectre"
      ]
    },
    {
      "item": "tattered leggings",
      "type": "legs",
      "monsters": [
        "shambling abomination"
      ]
    },
    {
      "item": "torc of gathered shadows",
      "type": "jewel",
      "monsters": [
        "gathered shadows"
      ]
    },
    {
      "item": "torturer's sabre",
      "type": "weapon",
      "monsters": [
        "gathered shadows",
        "pale spectre"
      ]
    },
    {
      "item": "undying scythe",
      "type": "weapon",
      "monsters": [
        "malice elemental"
      ]
    },
    {
      "item": "warlord's earthshaker",
      "type": "weapon",
      "monsters": [
        "pit horror"
      ]
    },
    {
      "item": "will o'wisp pendant",
      "type": "jewel",
      "monsters": [
        "will o' wisp"
      ]
    },
    {
      "item": "withered studded leather armor",
      "type": "body",
      "monsters": [
        "pit horror"
      ]
    },
    {
      "item": "worn old wooden staff",
      "type": "weapon",
      "monsters": [
        "mist wraith"
      ]
    }
  ],
  "Black Keep": [
    {
      "item": "baneful hood of burning whispers",
      "type": "head",
      "monsters": [
        "soulless assassin"
      ]
    },
    {
      "item": "black and gold flecked sabatons",
      "type": "feet",
      "monsters": [
        "skeleton squire"
      ]
    },
    {
      "item": "Dark Gauntlets",
      "type": "weapon",
      "monsters": [
        "skeleton captain"
      ]
    },
    {
      "item": "death knight's emerald staff",
      "type": "weapon",
      "monsters": [
        "mounted skeletal knight"
      ]
    },
    {
      "item": "icy hailstorm spire staff",
      "type": "weapon",
      "monsters": [
        "bone mage"
      ]
    },
    {
      "item": "jet black cloak",
      "type": "cloak",
      "monsters": [
        "mounted skeletal knight"
      ]
    },
    {
      "item": "moonlit pale blade of ivory",
      "type": "weapon",
      "monsters": [
        "soulless assassin"
      ]
    },
    {
      "item": "obsidian defender's aegis",
      "type": "shield",
      "monsters": [
        "armored skeleton warrior"
      ]
    },
    {
      "item": "raiment of unholy dreams",
      "type": "body",
      "monsters": [
        "mounted skeletal knight"
      ]
    },
    {
      "item": "scaled legs of shadow",
      "type": "legs",
      "monsters": [
        "soulless assassin"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "mounted skeletal knight"
      ]
    },
    {
      "item": "soul-forged chestplate of mourning",
      "type": "body",
      "monsters": [
        "skeleton captain"
      ]
    },
    {
      "item": "squire's mace of undeath",
      "type": "weapon",
      "monsters": [
        "skeleton squire"
      ]
    },
    {
      "item": "swatch of silk",
      "type": "material",
      "monsters": [
        "bone mage"
      ]
    },
    {
      "item": "unholy casque of the dead",
      "type": "head",
      "monsters": [
        "armored skeleton warrior"
      ]
    },
    {
      "item": "void-touched glass shard",
      "type": "weapon",
      "monsters": [
        "mounted skeletal knight"
      ]
    },
    {
      "item": "wild mage's leggings",
      "type": "legs",
      "monsters": [
        "bone mage"
      ]
    }
  ],
  "Bluffs of Zden": [
    {
      "item": "banshee pendant",
      "type": "jewel",
      "monsters": [
        "banshee"
      ]
    },
    {
      "item": "blood-stained dagger",
      "type": "weapon",
      "monsters": [
        "small shadow"
      ]
    },
    {
      "item": "dark hooded cloak",
      "type": "cloak",
      "monsters": [
        "banshee"
      ]
    },
    {
      "item": "fiery two-handed lava hammer",
      "type": "weapon",
      "monsters": [
        "ghoulish warrior"
      ]
    },
    {
      "item": "foxhide leggings",
      "type": "legs",
      "monsters": [
        "ghoulish warrior"
      ]
    },
    {
      "item": "frosted batwing embrace",
      "type": "body",
      "monsters": [
        "decaying nightmare"
      ]
    },
    {
      "item": "frosted hand axe",
      "type": "weapon",
      "monsters": [
        "decaying nightmare"
      ]
    },
    {
      "item": "ghastly studded skullcap",
      "type": "head",
      "monsters": [
        "decaying nightmare"
      ]
    },
    {
      "item": "green slick machete",
      "type": "weapon",
      "monsters": [
        "ghoulish warrior"
      ]
    },
    {
      "item": "phantasmic dated shield",
      "type": "shield",
      "monsters": [
        "ghoulish warrior"
      ]
    },
    {
      "item": "plate cowl of might",
      "type": "head",
      "monsters": [
        "small shadow"
      ]
    },
    {
      "item": "riveted guardsman's gauntlets",
      "type": "hands",
      "monsters": [
        "banshee"
      ]
    },
    {
      "item": "small piece of ember",
      "type": "material",
      "monsters": [
        "red spectre"
      ]
    },
    {
      "item": "two-handed bone mace",
      "type": "weapon",
      "monsters": [
        "small wraith"
      ]
    },
    {
      "item": "warboots of wailing",
      "type": "feet",
      "monsters": [
        "banshee"
      ]
    },
    {
      "item": "wickedly edged axe",
      "type": "weapon",
      "monsters": [
        "small wraith"
      ]
    },
    {
      "item": "wraith's footsteps",
      "type": "feet",
      "monsters": [
        "small wraith"
      ]
    },
    {
      "item": "wraithbone spear",
      "type": "weapon",
      "monsters": [
        "small wraith"
      ]
    }
  ],
  "Catacombs": [
    {
      "item": "adamantite dai-kyu bow",
      "type": "weapon",
      "monsters": [
        "Resistance Lieutenant"
      ]
    },
    {
      "item": "boots of last resort",
      "type": "feet",
      "monsters": [
        "Resistance Agent"
      ]
    },
    {
      "item": "captain's greaves of resilience",
      "type": "legs",
      "monsters": [
        "Resistance Captain"
      ]
    },
    {
      "item": "ebony stormcrow boots",
      "type": "feet",
      "monsters": [
        "guerilla"
      ]
    },
    {
      "item": "gladiator's studded hood",
      "type": "head",
      "monsters": [
        "Resistance Fighter"
      ]
    },
    {
      "item": "greathammer of revenge",
      "type": "weapon",
      "monsters": [
        "Resistance Captain"
      ]
    },
    {
      "item": "hammer of mayhem",
      "type": "weapon",
      "monsters": [
        "guerilla"
      ]
    },
    {
      "item": "imperial hammer of gathering storm",
      "type": "weapon",
      "monsters": [
        "Resistance Agent"
      ]
    },
    {
      "item": "sigiled cloak of the resistance",
      "type": "cloak",
      "monsters": [
        "Resistance Fighter"
      ]
    }
  ],
  "Cerulean Lakes": [
    {
      "item": "amber chestpiece",
      "type": "body",
      "monsters": [
        "stone guardian"
      ]
    },
    {
      "item": "arctic hollspark hammer",
      "type": "weapon",
      "monsters": [
        "translucent ice worm"
      ]
    },
    {
      "item": "blazing fists",
      "type": "weapon",
      "monsters": [
        "fire elemental"
      ]
    },
    {
      "item": "bramble root armor",
      "type": "body",
      "monsters": [
        "dryad"
      ]
    },
    {
      "item": "circlet of multi-colored autumn leaves",
      "type": "head",
      "monsters": [
        "dryad"
      ]
    },
    {
      "item": "cloudy thundering crystal slicer",
      "type": "weapon",
      "monsters": [
        "air elemental"
      ]
    },
    {
      "item": "crusader's gauntlets",
      "type": "hands",
      "monsters": [
        "stone spirit"
      ]
    },
    {
      "item": "darkened warpwood crossbow",
      "type": "weapon",
      "monsters": [
        "spirit of the trees"
      ]
    },
    {
      "item": "dazzling blue pendant",
      "type": "jewel",
      "monsters": [
        "water elemental"
      ]
    },
    {
      "item": "elemental's tail",
      "type": "weapon",
      "monsters": [
        "fire elemental"
      ]
    },
    {
      "item": "ember-enfused molten poker",
      "type": "weapon",
      "monsters": [
        "air elemental"
      ]
    },
    {
      "item": "enchanted silk fists",
      "type": "hands",
      "monsters": [
        "spirit of the trees"
      ]
    },
    {
      "item": "enhanted floating chunk of lava",
      "type": "shield",
      "monsters": [
        "protective fire spirit"
      ]
    },
    {
      "item": "frosted footguards of savagery",
      "type": "feet",
      "monsters": [
        "translucent ice worm"
      ]
    },
    {
      "item": "granite greaves",
      "type": "legs",
      "monsters": [
        "stone guardian"
      ]
    },
    {
      "item": "hazy cotton pants",
      "type": "legs",
      "monsters": [
        "earth elemental"
      ]
    },
    {
      "item": "ice gem",
      "type": "material",
      "monsters": [
        "ice elemental"
      ]
    },
    {
      "item": "icy halberd",
      "type": "weapon",
      "monsters": [
        "ice elemental"
      ]
    },
    {
      "item": "light vindictator boots",
      "type": "feet",
      "monsters": [
        "air elemental"
      ]
    },
    {
      "item": "lost leggings of the lakes",
      "type": "legs",
      "monsters": [
        "dryad"
      ]
    },
    {
      "item": "lost wayfarer's headwrap",
      "type": "head",
      "monsters": [
        "ice leopard"
      ]
    },
    {
      "item": "obsidian pentagram amulet",
      "type": "jewel",
      "monsters": [
        "protective fire spirit"
      ]
    },
    {
      "item": "possessed emberwood staff",
      "type": "weapon",
      "monsters": [
        "spirit of the trees"
      ]
    },
    {
      "item": "scorching amulet",
      "type": "jewel",
      "monsters": [
        "fire elemental"
      ]
    },
    {
      "item": "snow white fur",
      "type": "cloak",
      "monsters": [
        "ice leopard"
      ]
    },
    {
      "item": "spire of thunder",
      "type": "weapon",
      "monsters": [
        "air elemental"
      ]
    },
    {
      "item": "stone-studded cloak",
      "type": "cloak",
      "monsters": [
        "stone spirit"
      ]
    },
    {
      "item": "swirling frost covered leggings",
      "type": "legs",
      "monsters": [
        "ice elemental"
      ]
    },
    {
      "item": "tainted twig of twilight",
      "type": "weapon",
      "monsters": [
        "spirit of the trees"
      ]
    },
    {
      "item": "vest of obsidian",
      "type": "body",
      "monsters": [
        "earth elemental"
      ]
    },
    {
      "item": "white hide leggings",
      "type": "legs",
      "monsters": [
        "ice leopard"
      ]
    },
    {
      "item": "wormskin boots",
      "type": "feet",
      "monsters": [
        "translucent ice worm"
      ]
    }
  ],
  "City of Zhak-Tor": [
    {
      "item": "chitinous studded breastplate",
      "type": "body",
      "monsters": [
        "drider"
      ]
    },
    {
      "item": "cthonic barbute",
      "type": "head",
      "monsters": [
        "dark elf guard"
      ]
    },
    {
      "item": "dark adamantine plate armor",
      "type": "body",
      "monsters": [
        "darkelf defender"
      ]
    },
    {
      "item": "dark ranger's slick studded boots",
      "type": "feet",
      "monsters": [
        "dark elf ranger"
      ]
    },
    {
      "item": "deep stalker's hand crossbow",
      "type": "weapon",
      "monsters": [
        "dark elf ranger"
      ]
    },
    {
      "item": "leather robes of dark powers",
      "type": "body",
      "monsters": [
        "dark elf elementalist"
      ]
    },
    {
      "item": "mage-blade's buckler",
      "type": "shield",
      "monsters": [
        "dark elf elementalist"
      ]
    },
    {
      "item": "manual of tactics",
      "type": "jewel",
      "monsters": [
        "dark elf blademaster"
      ]
    },
    {
      "item": "rough boots of the blademaster",
      "type": "feet",
      "monsters": [
        "dark elf blademaster"
      ]
    },
    {
      "item": "serrated blade of night",
      "type": "weapon",
      "monsters": [
        "dark elf guard"
      ]
    },
    {
      "item": "studded greaves of night",
      "type": "legs",
      "monsters": [
        "dark elf defender"
      ]
    },
    {
      "item": "venomous barbed ranseur",
      "type": "weapon",
      "monsters": [
        "drider"
      ]
    }
  ],
  "City of Zhak-Tor: Temple": [
    {
      "item": "hourglass of imminent doom",
      "type": "jewel",
      "monsters": [
        "black widow spider"
      ]
    },
    {
      "item": "mace of midnight",
      "type": "weapon",
      "monsters": [
        "priestess of the night"
      ]
    },
    {
      "item": "matriarch's runic greatsword",
      "type": "weapon",
      "monsters": [
        "high priestess of the night"
      ]
    },
    {
      "item": "nightwalker's slippers",
      "type": "feet",
      "monsters": [
        "priestess of the night"
      ]
    },
    {
      "item": "pair of urticating gauntlets",
      "type": "hands",
      "monsters": [
        "huge tarantula"
      ]
    },
    {
      "item": "twinkling nightfall drape",
      "type": "cloak",
      "monsters": [
        "high priestess of the night"
      ]
    },
    {
      "item": "widowmaker's shortbow",
      "type": "weapon",
      "monsters": [
        "black widow spider"
      ]
    }
  ],
  "City of Zhak-Tor: Tower": [
    {
      "item": "glazed black laced runic armor",
      "type": "body",
      "monsters": [
        "dark elf bladefury"
      ]
    },
    {
      "item": "onyx-embedded greatsword",
      "type": "weapon",
      "monsters": [
        "dark elf bladefury"
      ]
    },
    {
      "item": "staff of fell arcana",
      "type": "weapon",
      "monsters": [
        "high wizard of night"
      ]
    },
    {
      "item": "wand of lightning",
      "type": "weapon",
      "monsters": [
        "high wizard of night"
      ]
    }
  ],
  "Cursed Woods": [
    {
      "item": "black metal marauder's axe",
      "type": "weapon",
      "monsters": [
        "skeletal hero"
      ]
    },
    {
      "item": "blood-red mallet",
      "type": "weapon",
      "monsters": [
        "lesser fiend"
      ]
    },
    {
      "item": "crimson daemon talons",
      "type": "hands",
      "monsters": [
        "lesser daemon"
      ]
    },
    {
      "item": "ghostly wolf paw",
      "type": "jewel",
      "monsters": [
        "wolf spirit"
      ]
    },
    {
      "item": "hairy werewolf paws",
      "type": "hands",
      "monsters": [
        "wolf spirit"
      ]
    },
    {
      "item": "hideous gargoyle face mask",
      "type": "head",
      "monsters": [
        "stone gargoyle"
      ]
    },
    {
      "item": "icy claymore",
      "type": "weapon",
      "monsters": [
        "deformed ghoul"
      ]
    },
    {
      "item": "jet black hood",
      "type": "head",
      "monsters": [
        "lesser wraith"
      ]
    },
    {
      "item": "molten plate boots",
      "type": "feet",
      "monsters": [
        "mounted demon knight"
      ]
    },
    {
      "item": "protector's full plate faceguard",
      "type": "head",
      "monsters": [
        "mounted demon knight"
      ]
    },
    {
      "item": "ruby encrusted stone staff",
      "type": "weapon",
      "monsters": [
        "lesser daemon"
      ]
    },
    {
      "item": "sacrificial dagger",
      "type": "weapon",
      "monsters": [
        "mounted demon knight"
      ]
    },
    {
      "item": "sandstone gargoyle helm",
      "type": "head",
      "monsters": [
        "stone gargoyle"
      ]
    },
    {
      "item": "short lance of tormented visions",
      "type": "weapon",
      "monsters": [
        "deformed ghoul"
      ]
    },
    {
      "item": "silver edged black tunic",
      "type": "body",
      "monsters": [
        "lesser wraith"
      ]
    },
    {
      "item": "skeletal legguards of heavy bone",
      "type": "legs",
      "monsters": [
        "skeletal hero"
      ]
    },
    {
      "item": "tattered pants of the doomed",
      "type": "legs",
      "monsters": [
        "deformed ghoul"
      ]
    },
    {
      "item": "wraith's haunting hands",
      "type": "weapon",
      "monsters": [
        "lesser wraith"
      ]
    }
  ],
  "Dark Forest": [
    {
      "item": "ash-covered plate leggings",
      "type": "legs",
      "monsters": [
        "forest giant"
      ]
    },
    {
      "item": "dagger of polarity",
      "type": "weapon",
      "monsters": [
        "ancient forest spirit"
      ]
    },
    {
      "item": "dark staff of tanglewood",
      "type": "weapon",
      "monsters": [
        "forest guardian"
      ]
    },
    {
      "item": "imbued granite gauntlets",
      "type": "hands",
      "monsters": [
        "ancient forest spirit"
      ]
    },
    {
      "item": "tooth of an undead black bear",
      "type": "jewel",
      "monsters": [
        "ancient forest spirit"
      ]
    },
    {
      "item": "yard of oak",
      "type": "material",
      "monsters": [
        "ancient forest spirit"
      ]
    }
  ],
  "Diseased Temple": [
    {
      "item": "befouled studded tunic",
      "type": "body",
      "monsters": [
        "troll gardener"
      ]
    },
    {
      "item": "broadsword of the mother tree",
      "type": "weapon",
      "monsters": [
        "pilgrim to Malkuth"
      ]
    },
    {
      "item": "crooked staff of decay",
      "type": "weapon",
      "monsters": [
        "priest of Malkuth"
      ]
    },
    {
      "item": "emerald ear stud",
      "type": "jewel",
      "monsters": [
        "acolyte to Malkuth"
      ]
    },
    {
      "item": "flail of obedience",
      "type": "weapon",
      "monsters": [
        "initiate to Malkuth"
      ]
    },
    {
      "item": "footwraps of decay",
      "type": "feet",
      "monsters": [
        "pilgrim to Malkuth"
      ]
    },
    {
      "item": "gardener's shears",
      "type": "weapon",
      "monsters": [
        "Malkuth temple gardener",
        "troll gardener"
      ]
    },
    {
      "item": "gardener's shinguards",
      "type": "legs",
      "monsters": [
        "troll gardener"
      ]
    },
    {
      "item": "gauntlets of pruning",
      "type": "hands",
      "monsters": [
        "troll gardener"
      ]
    },
    {
      "item": "initiate's worn leathers",
      "type": "body",
      "monsters": [
        "initiate to Malkuth"
      ]
    },
    {
      "item": "leather headband of discipleship",
      "type": "head",
      "monsters": [
        "priest of Malkuth"
      ]
    },
    {
      "item": "putrid green temple tunic",
      "type": "body",
      "monsters": [
        "acolyte to Malkuth",
        "priest of Malkuth"
      ]
    },
    {
      "item": "shiny eel skin armor",
      "type": "body",
      "monsters": [
        "initiate to Malkuth"
      ]
    },
    {
      "item": "studded greaves of absolution",
      "type": "legs",
      "monsters": [
        "initiate to Malkuth"
      ]
    },
    {
      "item": "sunstained leather hat",
      "type": "head",
      "monsters": [
        "Malkuth temple gardener"
      ]
    },
    {
      "item": "symbol of supplication",
      "type": "jewel",
      "monsters": [
        "supplicant to Malkuth"
      ]
    },
    {
      "item": "white-oak staff",
      "type": "weapon",
      "monsters": [
        "acolyte to Malkuth"
      ]
    }
  ],
  "Dunes of Kad'Iril": [
    {
      "item": "boots of the burning sun",
      "type": "feet",
      "monsters": [
        "nomad spirit"
      ]
    },
    {
      "item": "chimaeran archer's bow",
      "type": "weapon",
      "monsters": [
        "mounted nomad archer"
      ]
    },
    {
      "item": "cracked gauntlets of the sands",
      "type": "hands",
      "monsters": [
        "sand giant"
      ]
    },
    {
      "item": "dune stalker's faded cloak",
      "type": "cloak",
      "monsters": [
        "dune stalker"
      ]
    },
    {
      "item": "giant's sledge of destruction",
      "type": "weapon",
      "monsters": [
        "sand giant"
      ]
    },
    {
      "item": "gnarled redwood staff",
      "type": "weapon",
      "monsters": [
        "giant dune worm"
      ]
    },
    {
      "item": "greatsword of shifting sand",
      "type": "weapon",
      "monsters": [
        "nomad spirit"
      ]
    },
    {
      "item": "hunk of black rock",
      "type": "material",
      "monsters": [
        "nomad spirit"
      ]
    },
    {
      "item": "lonely leggings of the last guardian",
      "type": "legs",
      "monsters": [
        "desert nomad warrior"
      ]
    },
    {
      "item": "mallet of desert fury",
      "type": "weapon",
      "monsters": [
        "nomad spirit"
      ]
    },
    {
      "item": "nomad's hunting sling",
      "type": "weapon",
      "monsters": [
        "desert nomad warrior"
      ]
    },
    {
      "item": "nomad's scarf",
      "type": "head",
      "monsters": [
        "mounted nomad archer"
      ]
    },
    {
      "item": "ruby-infused bloodvenom nightmare dagger",
      "type": "weapon",
      "monsters": [
        "ghastly dune reaper"
      ]
    },
    {
      "item": "scorpion mandible helm",
      "type": "head",
      "monsters": [
        "giant scorpion"
      ]
    },
    {
      "item": "staff of undying light",
      "type": "weapon",
      "monsters": [
        "ghastly dune reaper"
      ]
    },
    {
      "item": "stiletto of the boundless",
      "type": "weapon",
      "monsters": [
        "mounted nomad archer"
      ]
    },
    {
      "item": "void-heart chest of the black harvest",
      "type": "body",
      "monsters": [
        "ghastly dune reaper"
      ]
    },
    {
      "item": "wickedly curved skin flayer",
      "type": "weapon",
      "monsters": [
        "sand pterodactyl"
      ]
    }
  ],
  "Eastern Desert": [
    {
      "item": "blade of the Sacred Art",
      "type": "weapon",
      "monsters": [
        "swirling helical sand giant"
      ]
    },
    {
      "item": "chainplate armor of dark strength",
      "type": "body",
      "monsters": [
        "diabolic infernal nomad"
      ]
    },
    {
      "item": "desert nomad's veil",
      "type": "head",
      "monsters": [
        "desert nomad"
      ]
    },
    {
      "item": "dragon-wing boots",
      "type": "feet",
      "monsters": [
        "brilliant bronze-scaled dragon"
      ]
    },
    {
      "item": "dual blades of the damned",
      "type": "weapon",
      "monsters": [
        "diabolic infernal nomad"
      ]
    },
    {
      "item": "hardened black basilisk boots",
      "type": "feet",
      "monsters": [
        "greater obsidian basilisk"
      ]
    },
    {
      "item": "helical staff of solid sand",
      "type": "weapon",
      "monsters": [
        "swirling helical sand giant"
      ]
    },
    {
      "item": "otherworldly sandstorm blade",
      "type": "weapon",
      "monsters": [
        "greater obsidian basilisk"
      ]
    },
    {
      "item": "reaper's amulet",
      "type": "jewel",
      "monsters": [
        "spectral reaper mage"
      ]
    },
    {
      "item": "resplendent bronze dragon plate",
      "type": "body",
      "monsters": [
        "brilliant bronze-scaled dragon"
      ]
    },
    {
      "item": "soul harvester's cloak",
      "type": "cloak",
      "monsters": [
        "spectral reaper mage"
      ]
    },
    {
      "item": "spectral bone-studded boots",
      "type": "feet",
      "monsters": [
        "spectral reaper mage"
      ]
    }
  ],
  "Endless Night": [
    {
      "item": "amethyst studded cowl",
      "type": "head",
      "monsters": [
        "purple spore"
      ]
    },
    {
      "item": "ancestral lavaforged hammer",
      "type": "weapon",
      "monsters": [
        "bugbear chieftain"
      ]
    },
    {
      "item": "batwing necklace",
      "type": "jewel",
      "monsters": [
        "cave bat"
      ]
    },
    {
      "item": "blood-dipped black leather harness",
      "type": "body",
      "monsters": [
        "bugbear"
      ]
    },
    {
      "item": "crimson demon lord grips",
      "type": "hands",
      "monsters": [
        "giant red lichen"
      ]
    },
    {
      "item": "dread necromancer's gloves",
      "type": "hands",
      "monsters": [
        "ebony water serpent"
      ]
    },
    {
      "item": "eelskin cloak of night",
      "type": "cloak",
      "monsters": [
        "gigantic eel"
      ]
    },
    {
      "item": "enchanted chitinous greaves",
      "type": "legs",
      "monsters": [
        "giant mushroom"
      ]
    },
    {
      "item": "finned earring",
      "type": "jewel",
      "monsters": [
        "blind fish"
      ]
    },
    {
      "item": "hungering darkweb leggings",
      "type": "legs",
      "monsters": [
        "giant cave spider"
      ]
    },
    {
      "item": "knightly garments of honor",
      "type": "body",
      "monsters": [
        "bugbear"
      ]
    },
    {
      "item": "leggings of the defiler",
      "type": "legs",
      "monsters": [
        "cave fisher"
      ]
    },
    {
      "item": "membranous illithid shroud",
      "type": "cloak",
      "monsters": [
        "illithid"
      ]
    },
    {
      "item": "midnight black ringmail hauberk",
      "type": "body",
      "monsters": [
        "cave fisher"
      ]
    },
    {
      "item": "mycelium-threaded leather hood",
      "type": "head",
      "monsters": [
        "fungus man"
      ]
    },
    {
      "item": "red lichen legwraps",
      "type": "legs",
      "monsters": [
        "giant red lichen"
      ]
    },
    {
      "item": "ringmail gauntlets of embers",
      "type": "hands",
      "monsters": [
        "giant cave salamander"
      ]
    },
    {
      "item": "robe of the mind flayer",
      "type": "body",
      "monsters": [
        "illithid"
      ]
    },
    {
      "item": "rod of blood magic",
      "type": "weapon",
      "monsters": [
        "huge albino leech"
      ]
    },
    {
      "item": "scale black scaled buckler",
      "type": "shield",
      "monsters": [
        "ebony water serpent"
      ]
    },
    {
      "item": "shocking blade of night",
      "type": "weapon",
      "monsters": [
        "gigantic eel"
      ]
    },
    {
      "item": "smoldering pyromancer's boots",
      "type": "feet",
      "monsters": [
        "giant cave salamander"
      ]
    },
    {
      "item": "spelunker's studded kneepads",
      "type": "feet",
      "monsters": [
        "cave ogre"
      ]
    },
    {
      "item": "spetum of the endless night",
      "type": "weapon",
      "monsters": [
        "bugbear"
      ]
    },
    {
      "item": "spiked crimson twilight boots",
      "type": "feet",
      "monsters": [
        "blind fish"
      ]
    },
    {
      "item": "spore-infested greatclub",
      "type": "weapon",
      "monsters": [
        "giant mushroom"
      ]
    },
    {
      "item": "staff of complete darkness",
      "type": "weapon",
      "monsters": [
        "cave bat"
      ]
    },
    {
      "item": "sword of the deepest depth",
      "type": "weapon",
      "monsters": [
        "blind fish"
      ]
    },
    {
      "item": "underdark hero's boots",
      "type": "feet",
      "monsters": [
        "cave ogre"
      ]
    },
    {
      "item": "vial of toxic vapor",
      "type": "jewel",
      "monsters": [
        "purple spore"
      ]
    },
    {
      "item": "weighted gauntlets of subdual",
      "type": "hands",
      "monsters": [
        "fungus man"
      ]
    }
  ],
  "Frozen Wasteland": [
    {
      "item": "antlered greathelm",
      "type": "head",
      "monsters": [
        "snow elk"
      ]
    },
    {
      "item": "bulwark of bones",
      "type": "shield",
      "monsters": [
        "large yeti"
      ]
    },
    {
      "item": "cerulean crystal blade",
      "type": "weapon",
      "monsters": [
        "snow giant"
      ]
    },
    {
      "item": "glove of bear's might",
      "type": "hands",
      "monsters": [
        "polar bear"
      ]
    },
    {
      "item": "ice-forged helmet",
      "type": "head",
      "monsters": [
        "snow giant"
      ]
    },
    {
      "item": "leggings of gnashing teeth",
      "type": "legs",
      "monsters": [
        "snow wolf"
      ]
    },
    {
      "item": "leopard's graceful greaves",
      "type": "legs",
      "monsters": [
        "snow leopard"
      ]
    },
    {
      "item": "robes of sun satin",
      "type": "body",
      "monsters": [
        "polar bear"
      ]
    },
    {
      "item": "silent slippers of stalking",
      "type": "feet",
      "monsters": [
        "snow leopard"
      ]
    },
    {
      "item": "staff of black ice",
      "type": "weapon",
      "monsters": [
        "snow elk"
      ]
    },
    {
      "item": "yeti hide jacket",
      "type": "body",
      "monsters": [
        "large yeti"
      ]
    }
  ],
  "Grasslands": [
    {
      "item": "bandit's bow",
      "type": "weapon",
      "monsters": [
        "bandit leader"
      ]
    },
    {
      "item": "black leather cap",
      "type": "head",
      "monsters": [
        "orc bandit"
      ]
    },
    {
      "item": "deer-skin gloves",
      "type": "hands",
      "monsters": [
        "orc bandit"
      ]
    },
    {
      "item": "flail of burning pitch",
      "type": "weapon",
      "monsters": [
        "orc bandit"
      ]
    },
    {
      "item": "giant mantis arm",
      "type": "weapon",
      "monsters": [
        "mantis"
      ]
    },
    {
      "item": "greatsword of fire",
      "type": "weapon",
      "monsters": [
        "bandit leader"
      ]
    },
    {
      "item": "hauberk of the mantis",
      "type": "body",
      "monsters": [
        "mantis"
      ]
    },
    {
      "item": "heavy blackjack",
      "type": "weapon",
      "monsters": [
        "bandit leader"
      ]
    },
    {
      "item": "orc hide boots",
      "type": "feet",
      "monsters": [
        "orc bandit"
      ]
    },
    {
      "item": "orcish two-handed sword",
      "type": "weapon",
      "monsters": [
        "bandit"
      ]
    },
    {
      "item": "sharpened ceremonial axe",
      "type": "weapon",
      "monsters": [
        "bandit"
      ]
    },
    {
      "item": "silver and blue cloak",
      "type": "cloak",
      "monsters": [
        "orc bandit"
      ]
    },
    {
      "item": "war hammer",
      "type": "weapon",
      "monsters": [
        "small boar"
      ]
    }
  ],
  "Great Desert": [
    {
      "item": "bedouin staff of dreams",
      "type": "weapon",
      "monsters": [
        "bedouin shaman"
      ]
    },
    {
      "item": "bleached bone claymore",
      "type": "weapon",
      "monsters": [
        "psuedo-gorgon"
      ]
    },
    {
      "item": "bleached sandspinner gloves",
      "type": "hands",
      "monsters": [
        "dust devil"
      ]
    },
    {
      "item": "bound greatcloak",
      "type": "cloak",
      "monsters": [
        "bedouin shaman"
      ]
    },
    {
      "item": "bulwark of the oasis",
      "type": "shield",
      "monsters": [
        "sand tiger"
      ]
    },
    {
      "item": "dragoon crossbow of retribution",
      "type": "weapon",
      "monsters": [
        "bedouin warrior"
      ]
    },
    {
      "item": "gorgon's eye",
      "type": "jewel",
      "monsters": [
        "pseudo-gorgon"
      ]
    },
    {
      "item": "greatstaff of damnation",
      "type": "weapon",
      "monsters": [
        "sand witch"
      ]
    },
    {
      "item": "greaves crafted from assorted bones",
      "type": "legs",
      "monsters": [
        "gila monster"
      ]
    },
    {
      "item": "helmet of the relentless",
      "type": "head",
      "monsters": [
        "mounted bedouin"
      ]
    },
    {
      "item": "ivory platemail grasps of the timeless",
      "type": "hands",
      "monsters": [
        "bedouin sharif"
      ]
    },
    {
      "item": "partisan of the shining sun",
      "type": "weapon",
      "monsters": [
        "bedouin warrior"
      ]
    },
    {
      "item": "razor edged barbed gauntlets",
      "type": "hands",
      "monsters": [
        "guardian reaper"
      ]
    },
    {
      "item": "razor-sharp sand reaver barb",
      "type": "weapon",
      "monsters": [
        "mounted bedouin"
      ]
    },
    {
      "item": "scorched tiger's claws",
      "type": "weapon",
      "monsters": [
        "sand tiger"
      ]
    },
    {
      "item": "serrated reaper's scythe",
      "type": "weapon",
      "monsters": [
        "guardian reaper"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "sand witch"
      ]
    },
    {
      "item": "timeless sword of sand",
      "type": "weapon",
      "monsters": [
        "sand tiger"
      ]
    }
  ],
  "Great Swamp": [
    {
      "item": "beetle carapace chestplate",
      "type": "body",
      "monsters": [
        "huge water beetle"
      ]
    },
    {
      "item": "blade of the swamp",
      "type": "weapon",
      "monsters": [
        "lizardman king"
      ]
    },
    {
      "item": "chameleon skin shroud",
      "type": "head",
      "monsters": [
        "striped chameleon"
      ]
    },
    {
      "item": "cloak of marshes",
      "type": "cloak",
      "monsters": [
        "fire salamander"
      ]
    },
    {
      "item": "cricket's song",
      "type": "weapon",
      "monsters": [
        "chirping black cricket"
      ]
    },
    {
      "item": "crocodile skin boots",
      "type": "feet",
      "monsters": [
        "weeping crocodile"
      ]
    },
    {
      "item": "faded anaconda gauntlets",
      "type": "hands",
      "monsters": [
        "lizardman king"
      ]
    },
    {
      "item": "fiery red leather helmet",
      "type": "head",
      "monsters": [
        "fire salamander"
      ]
    },
    {
      "item": "freshly molted skin",
      "type": "legs",
      "monsters": [
        "giant green newt"
      ]
    },
    {
      "item": "green leggings of presence",
      "type": "legs",
      "monsters": [
        "great vine snake"
      ]
    },
    {
      "item": "lava rock",
      "type": "material",
      "monsters": [
        "fire salamander"
      ]
    },
    {
      "item": "mangrove snakeskin gloves",
      "type": "hands",
      "monsters": [
        "lizardman king"
      ]
    },
    {
      "item": "necklace made of snake cartiledge",
      "type": "jewel",
      "monsters": [
        "green vine snake"
      ]
    },
    {
      "item": "poison-tipped impaler",
      "type": "weapon",
      "monsters": [
        "giant tree frog"
      ]
    },
    {
      "item": "reed blowgun",
      "type": "weapon",
      "monsters": [
        "huge water beetle"
      ]
    },
    {
      "item": "ruby infused pair of black gauntlets",
      "type": "hands",
      "monsters": [
        "striped chameleon"
      ]
    },
    {
      "item": "runestaff of mysticism",
      "type": "weapon",
      "monsters": [
        "weeping crocodile"
      ]
    },
    {
      "item": "scrap of rough leather",
      "type": "material",
      "monsters": [
        "giant green newt"
      ]
    },
    {
      "item": "shiny ebony warfists",
      "type": "hands",
      "monsters": [
        "large kelpie"
      ]
    },
    {
      "item": "sodden coat of plates",
      "type": "body",
      "monsters": [
        "giant tree frog"
      ]
    },
    {
      "item": "swampdweller's blade",
      "type": "weapon",
      "monsters": [
        "large kelpie"
      ]
    },
    {
      "item": "water crystal staff",
      "type": "weapon",
      "monsters": [
        "large kelpie"
      ]
    },
    {
      "item": "waterlogged sea cutlass",
      "type": "weapon",
      "monsters": [
        "huge water beetle"
      ]
    },
    {
      "item": "waterlogged sea rod",
      "type": "weapon",
      "monsters": [
        "giant green newt"
      ]
    },
    {
      "item": "windswept leggings",
      "type": "legs",
      "monsters": [
        "chirping black cricket"
      ]
    }
  ],
  "Greater Spider Caves": [
    {
      "item": "cloak of the sunseeker",
      "type": "cloak",
      "monsters": [
        "spotted jumping spider"
      ]
    },
    {
      "item": "cloth breastplate of shielding",
      "type": "body",
      "monsters": [
        "greater phase spider"
      ]
    },
    {
      "item": "crimson schism leggings",
      "type": "legs",
      "monsters": [
        "spiked blood spider"
      ]
    },
    {
      "item": "crystallized spidersilk drape",
      "type": "cloak",
      "monsters": [
        "greater phase spider"
      ]
    },
    {
      "item": "dripping spider fang",
      "type": "weapon",
      "monsters": [
        "four-fanged venomous den spider"
      ]
    },
    {
      "item": "gauntlets of petrified chitin",
      "type": "hands",
      "monsters": [
        "four-fanged venomous den spider"
      ]
    },
    {
      "item": "glistening spidersilk leggings",
      "type": "legs",
      "monsters": [
        "two-headed pulsating cave spider"
      ]
    },
    {
      "item": "jumping spider slippers",
      "type": "feet",
      "monsters": [
        "spotted jumping spider"
      ]
    },
    {
      "item": "lunarlight shroud",
      "type": "head",
      "monsters": [
        "sparkling crystalline spider"
      ]
    },
    {
      "item": "pulsating jade staff",
      "type": "weapon",
      "monsters": [
        "two-headed pulsating cave spider"
      ]
    },
    {
      "item": "rotting maggot infested arm",
      "type": "weapon",
      "monsters": [
        "horde of silver spider hatclings"
      ]
    },
    {
      "item": "sparkling crystalline greatsword",
      "type": "weapon",
      "monsters": [
        "sparkling crystalline spider"
      ]
    },
    {
      "item": "spider-crested chestpiece",
      "type": "body",
      "monsters": [
        "large white-haired spider"
      ]
    },
    {
      "item": "spiked assassin's pants",
      "type": "legs",
      "monsters": [
        "spotted jumping spider"
      ]
    },
    {
      "item": "visage of subtlety",
      "type": "head",
      "monsters": [
        "horde of silver spider hatclings"
      ]
    },
    {
      "item": "white spidersilk gloves",
      "type": "hands",
      "monsters": [
        "large white-haired spider"
      ]
    }
  ],
  "Greenmist Forest": [
    {
      "item": "ancient key",
      "type": "wielded",
      "monsters": [
        "forest hobgoblin"
      ]
    },
    {
      "item": "ash-covered plate leggings",
      "type": "legs",
      "monsters": [
        "forest guardian"
      ]
    },
    {
      "item": "blood red cloak",
      "type": "cloak",
      "monsters": [
        "shambling mound"
      ]
    },
    {
      "item": "circlet of the shambler",
      "type": "head",
      "monsters": [
        "shambling mound"
      ]
    },
    {
      "item": "cured leather armor",
      "type": "body",
      "monsters": [
        "traveler"
      ]
    },
    {
      "item": "fiery red ripper",
      "type": "weapon",
      "monsters": [
        "massive black spider"
      ]
    },
    {
      "item": "midnight blue cloak",
      "type": "cloak",
      "monsters": [
        "small dog"
      ]
    },
    {
      "item": "pointed witches hat",
      "type": "head",
      "monsters": [
        "shambling mound"
      ]
    },
    {
      "item": "riveted guardsman's hauberk",
      "type": "body",
      "monsters": [
        "forest guardian"
      ]
    },
    {
      "item": "robe of midnight black silk",
      "type": "body",
      "monsters": [
        "massive black spider"
      ]
    },
    {
      "item": "shimmering dark cloak",
      "type": "cloak",
      "monsters": [
        "shambling mound"
      ]
    },
    {
      "item": "shimmering elder's cane",
      "type": "weapon",
      "monsters": [
        "forest hobgoblin"
      ]
    },
    {
      "item": "snow elk hide cloak",
      "type": "cloak",
      "monsters": [
        "forest guardian"
      ]
    },
    {
      "item": "studded warder's gauntlets",
      "type": "hands",
      "monsters": [
        "forest hobgoblin"
      ]
    }
  ],
  "Greenmist Palisades": [
    {
      "item": "bloodied imperfect knife",
      "type": "weapon",
      "monsters": [
        "Tamian mageling"
      ]
    },
    {
      "item": "dagger of the druid",
      "type": "weapon",
      "monsters": [
        "ragged guard"
      ]
    },
    {
      "item": "deadman's cleaver",
      "type": "weapon",
      "monsters": [
        "twisted stump"
      ]
    },
    {
      "item": "pitch-black ranseur",
      "type": "weapon",
      "monsters": [
        "ragged guard"
      ]
    },
    {
      "item": "small silver earring",
      "type": "jewel",
      "monsters": []
    },
    {
      "item": "spidersilk hood",
      "type": "head",
      "monsters": [
        "Tamian mageling"
      ]
    },
    {
      "item": "Tamian black buckler",
      "type": "shield",
      "monsters": [
        "Guard Captain Ricker"
      ]
    },
    {
      "item": "turtle shell",
      "type": "material",
      "monsters": [
        "Tamian refugee"
      ]
    }
  ],
  "Grey Mountains": [
    {
      "item": "ancient dragonbone greatsword",
      "type": "weapon",
      "monsters": [
        "chained skeletal dragon"
      ]
    },
    {
      "item": "ancient gorestained leggings",
      "type": "legs",
      "monsters": [
        "snarling werebeast"
      ]
    },
    {
      "item": "bat hide mask",
      "type": "head",
      "monsters": [
        "startled bat"
      ]
    },
    {
      "item": "batskin headband",
      "type": "head",
      "monsters": [
        "forest bat"
      ]
    },
    {
      "item": "black circular shield",
      "type": "shield",
      "monsters": [
        "chained skeletal dragon"
      ]
    },
    {
      "item": "blade of granite",
      "type": "weapon",
      "monsters": [
        "rock spirit"
      ]
    },
    {
      "item": "blood dipped black leather harness",
      "type": "body",
      "monsters": [
        "black bear"
      ]
    },
    {
      "item": "bristly fur coat",
      "type": "body",
      "monsters": [
        "stone-fisted gorilla"
      ]
    },
    {
      "item": "chainbreaker's drape",
      "type": "cloak",
      "monsters": [
        "chained skeletal dragon"
      ]
    },
    {
      "item": "crimson twilight horned cowl",
      "type": "head",
      "monsters": [
        "demon dog"
      ]
    },
    {
      "item": "crimson twilight legguards",
      "type": "legs",
      "monsters": [
        "sleeper plant"
      ]
    },
    {
      "item": "dirty covered gardening sheers",
      "type": "weapon",
      "monsters": [
        "wild boar"
      ]
    },
    {
      "item": "drafty leaf-woven leggings",
      "type": "legs",
      "monsters": [
        "sleeper plant"
      ]
    },
    {
      "item": "ebony hide pants",
      "type": "legs",
      "monsters": [
        "giant ebony worm"
      ]
    },
    {
      "item": "feathered hood",
      "type": "head",
      "monsters": [
        "azure-eyed hawk"
      ]
    },
    {
      "item": "fierce striped tunic",
      "type": "body",
      "monsters": [
        "snarling raccoon"
      ]
    },
    {
      "item": "fist of solid stone",
      "type": "weapon",
      "monsters": [
        "stone man"
      ]
    },
    {
      "item": "fists of stone",
      "type": "weapon",
      "monsters": [
        "stone-fisted gorilla"
      ]
    },
    {
      "item": "footsteps of frost",
      "type": "feet",
      "monsters": [
        "frost white plant"
      ]
    },
    {
      "item": "gauntlets of instinct",
      "type": "hands",
      "monsters": [
        "black bear"
      ]
    },
    {
      "item": "gauntlets of the hawk",
      "type": "hands",
      "monsters": [
        "azure-eyed hawk"
      ]
    },
    {
      "item": "great bear's grips",
      "type": "hands",
      "monsters": [
        "great brown bear"
      ]
    },
    {
      "item": "greathammer of the citadel",
      "type": "weapon",
      "monsters": [
        "wild boar"
      ]
    },
    {
      "item": "greatlance of the ancient kingdom",
      "type": "weapon",
      "monsters": [
        "great brown bear"
      ]
    },
    {
      "item": "heavy stone sabatons",
      "type": "feet",
      "monsters": [
        "stone man"
      ]
    },
    {
      "item": "helmet of enchanted granite",
      "type": "head",
      "monsters": [
        "stone man"
      ]
    },
    {
      "item": "horseman's gloves of purgatory",
      "type": "hands",
      "monsters": [
        "hunter"
      ]
    },
    {
      "item": "leaping beast's greaves",
      "type": "legs",
      "monsters": [
        "snarling werebeast"
      ]
    },
    {
      "item": "leggings of the grey",
      "type": "legs",
      "monsters": [
        "slim"
      ]
    },
    {
      "item": "necklace of wolf fangs",
      "type": "jewel",
      "monsters": [
        "grey mountain wolf"
      ]
    },
    {
      "item": "pound of steel",
      "type": "material",
      "monsters": [
        "rock spirit"
      ]
    },
    {
      "item": "quill launcher",
      "type": "weapon",
      "monsters": [
        "angry porcupine"
      ]
    },
    {
      "item": "scaled armor of demonic fury",
      "type": "body",
      "monsters": [
        "demon dog"
      ]
    },
    {
      "item": "serpent's battlehammer",
      "type": "weapon",
      "monsters": [
        "spotted tree snake"
      ]
    },
    {
      "item": "sewn bat wing gloves",
      "type": "hands",
      "monsters": [
        "forest bat"
      ]
    },
    {
      "item": "shimmering grey jerkin",
      "type": "body",
      "monsters": [
        "slim"
      ]
    },
    {
      "item": "soot-encrusted hide shield",
      "type": "shield",
      "monsters": [
        "demon dog"
      ]
    },
    {
      "item": "sparking flower",
      "type": "jewel",
      "monsters": [
        "shock plant"
      ]
    },
    {
      "item": "studded gloaming armor",
      "type": "body",
      "monsters": [
        "slim"
      ]
    },
    {
      "item": "studded gloaming legguards",
      "type": "legs",
      "monsters": [
        "hunter"
      ]
    },
    {
      "item": "sword of flame",
      "type": "weapon",
      "monsters": [
        "demon dog"
      ]
    },
    {
      "item": "treads of stormfury",
      "type": "feet",
      "monsters": [
        "great brown bear"
      ]
    },
    {
      "item": "vine-wrapped claymore of shocking",
      "type": "weapon",
      "monsters": [
        "shock plant"
      ]
    },
    {
      "item": "white staff of winter",
      "type": "weapon",
      "monsters": [
        "frost white plant"
      ]
    }
  ],
  "Greyknife Peaks": [
    {
      "item": "ancient warlord's axe",
      "type": "weapon",
      "monsters": [
        "hill giant"
      ]
    },
    {
      "item": "boots of bark",
      "type": "feet",
      "monsters": [
        "two-headed ettin"
      ]
    },
    {
      "item": "colossal shield",
      "type": "shield",
      "monsters": [
        "small ogre"
      ]
    },
    {
      "item": "crimson serpentskin vest",
      "type": "body",
      "monsters": [
        "hill giant"
      ]
    },
    {
      "item": "giant's stone knife",
      "type": "weapon",
      "monsters": [
        "mountain giant"
      ]
    },
    {
      "item": "greyknife studded hauberk",
      "type": "body",
      "monsters": [
        "huge ogre"
      ]
    },
    {
      "item": "hungering conqueror's shield",
      "type": "shield",
      "monsters": [
        "rock giant"
      ]
    },
    {
      "item": "pair of bone spiked fists",
      "type": "hands",
      "monsters": [
        "rock giant"
      ]
    },
    {
      "item": "runebound cloak of health",
      "type": "cloak",
      "monsters": [
        "rock troll"
      ]
    },
    {
      "item": "rusty red battleplate",
      "type": "body",
      "monsters": [
        "small ogre"
      ]
    },
    {
      "item": "skull-shaped nose ring",
      "type": "jewel",
      "monsters": [
        "mountain giant"
      ]
    },
    {
      "item": "smiling gargoyle pendant",
      "type": "jewel",
      "monsters": [
        "huge ogre"
      ]
    },
    {
      "item": "staff of stone",
      "type": "weapon",
      "monsters": [
        "stone-throwing giant"
      ]
    },
    {
      "item": "studded gloaming cowl",
      "type": "head",
      "monsters": [
        "stone-throwing giant"
      ]
    },
    {
      "item": "warrior's ebon skirt of chainplate",
      "type": "legs",
      "monsters": [
        "rock troll"
      ]
    },
    {
      "item": "worn gianthide treads",
      "type": "feet",
      "monsters": [
        "griffin"
      ]
    }
  ],
  "Hive": [
    {
      "item": "amber-tipped staff",
      "type": "weapon",
      "monsters": [
        "velvet worm"
      ]
    },
    {
      "item": "beetle shell shield",
      "type": "shield",
      "monsters": [
        "massive mud beetle"
      ]
    },
    {
      "item": "black ice mallet",
      "type": "weapon",
      "monsters": [
        "guardian mist wasp"
      ]
    },
    {
      "item": "blackened struck switchblade",
      "type": "weapon",
      "monsters": [
        "hook worm"
      ]
    },
    {
      "item": "bladed carapace gauntlets",
      "type": "weapon",
      "monsters": [
        "hook worm"
      ]
    },
    {
      "item": "blue dagger",
      "type": "weapon",
      "monsters": [
        "dung beetle",
        "massive mud beetle"
      ]
    },
    {
      "item": "blue leather helmet",
      "type": "head",
      "monsters": [
        "guardian mist wasp"
      ]
    },
    {
      "item": "Death's Head Moth Wings",
      "type": "cloak",
      "monsters": [
        "Giant Death's Head Moth"
      ]
    },
    {
      "item": "firefly stinger",
      "type": "weapon",
      "monsters": [
        "guardian firefly"
      ]
    },
    {
      "item": "halberd of mist",
      "type": "weapon",
      "monsters": [
        "guardian mist wasp"
      ]
    },
    {
      "item": "half-eaten leather boots",
      "type": "feet",
      "monsters": [
        "hook worm"
      ]
    },
    {
      "item": "hardened insect husk",
      "type": "shield",
      "monsters": [
        "ravenous larva"
      ]
    },
    {
      "item": "honeycomb mail cloak",
      "type": "cloak",
      "monsters": [
        "guardian firefly"
      ]
    },
    {
      "item": "lightning bug stinger",
      "type": "weapon",
      "monsters": [
        "guardian lightning bug"
      ]
    },
    {
      "item": "mist wasp stinger",
      "type": "weapon",
      "monsters": [
        "guardian mist wasp"
      ]
    },
    {
      "item": "poniard of lesser ice",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "ruby jeweled lancet",
      "type": "weapon",
      "monsters": [
        "guardian firefly"
      ]
    },
    {
      "item": "silk velvet boots",
      "type": "feet",
      "monsters": [
        "guardian lightning bug"
      ]
    },
    {
      "item": "slime covered staff",
      "type": "weapon",
      "monsters": [
        "dung beetle",
        "hook worm",
        "massive mud beetle",
        "ravenous larva"
      ]
    },
    {
      "item": "slime-covered pants",
      "type": "legs",
      "monsters": [
        "massive mud beetle"
      ]
    },
    {
      "item": "velvet boots",
      "type": "feet",
      "monsters": [
        "velvet worm"
      ]
    },
    {
      "item": "yellow platemail",
      "type": "body",
      "monsters": [
        "guardian lightning bug"
      ]
    }
  ],
  "Lord Garon's Keep": [
    {
      "item": "blood-caked talon",
      "type": "weapon",
      "monsters": [
        "filthy guardsman"
      ]
    },
    {
      "item": "deeprock spear",
      "type": "weapon",
      "monsters": [
        "orc chief"
      ]
    },
    {
      "item": "ebony ringmail platelegs",
      "type": "legs",
      "monsters": [
        "common orc"
      ]
    },
    {
      "item": "fiery ruby",
      "type": "material",
      "monsters": [
        "hobgoblin"
      ]
    },
    {
      "item": "finely-wrought runic dagger",
      "type": "weapon",
      "monsters": [
        "dirty guard lieutenant"
      ]
    },
    {
      "item": "flaming skull badge",
      "type": "jewel",
      "monsters": [
        "orc chief"
      ]
    },
    {
      "item": "forgotten relic shield",
      "type": "shield",
      "monsters": [
        "hobgoblin"
      ]
    },
    {
      "item": "foxhollow leggings",
      "type": "legs",
      "monsters": [
        "orc warrior"
      ]
    },
    {
      "item": "leather greaves of the keep",
      "type": "legs",
      "monsters": [
        "filthy guardsman"
      ]
    },
    {
      "item": "lichen covered longstaff",
      "type": "weapon",
      "monsters": [
        "common orc"
      ]
    },
    {
      "item": "orcish longknife",
      "type": "weapon",
      "monsters": [
        "common orc"
      ]
    },
    {
      "item": "pilgrim's blood axe",
      "type": "weapon",
      "monsters": [
        "orc warrior"
      ]
    },
    {
      "item": "pitch black leather jacket",
      "type": "body",
      "monsters": [
        "common orc"
      ]
    },
    {
      "item": "ravenfeather drape of power",
      "type": "cloak",
      "monsters": [
        "filthy guardsman"
      ]
    },
    {
      "item": "reinforced sinful handguards",
      "type": "hands",
      "monsters": [
        "hobgoblin"
      ]
    },
    {
      "item": "spectral dire wolf's boots",
      "type": "feet",
      "monsters": [
        "hobgoblin"
      ]
    },
    {
      "item": "tax-collector's ringmail cloak",
      "type": "cloak",
      "monsters": [
        "dirty guard lieutenant"
      ]
    },
    {
      "item": "torn apart mage legguards",
      "type": "legs",
      "monsters": [
        "orc chief"
      ]
    },
    {
      "item": "torn, midnight black boots",
      "type": "feet",
      "monsters": [
        "dirty guard lieutenant"
      ]
    },
    {
      "item": "warmongering warped cowl",
      "type": "head",
      "monsters": [
        "filthy guardsman"
      ]
    }
  ],
  "Marshlands": [
    {
      "item": "beret of living shadows",
      "type": "head",
      "monsters": [
        "shadow"
      ]
    },
    {
      "item": "blightcloth hood",
      "type": "head",
      "monsters": [
        "festering blight"
      ]
    },
    {
      "item": "blood mage's stiletto",
      "type": "weapon",
      "monsters": [
        "giant marsh mosquito"
      ]
    },
    {
      "item": "blood-soaked spike gauntlets",
      "type": "hands",
      "monsters": [
        "giant marsh mosquito"
      ]
    },
    {
      "item": "crimson twilight brigandine",
      "type": "body",
      "monsters": [
        "shadow"
      ]
    },
    {
      "item": "cruel claws of thrashing",
      "type": "weapon",
      "monsters": [
        "freshwater shark"
      ]
    },
    {
      "item": "deep earth swampstalker legguards",
      "type": "legs",
      "monsters": [
        "marsh gar"
      ]
    },
    {
      "item": "electrified greatspear",
      "type": "weapon",
      "monsters": [
        "huge marsh eel"
      ]
    },
    {
      "item": "embroidered swamp hag's cape",
      "type": "cloak",
      "monsters": [
        "huge marsh eel"
      ]
    },
    {
      "item": "festering warboots",
      "type": "feet",
      "monsters": [
        "festering blight"
      ]
    },
    {
      "item": "flamberge of the restless dead",
      "type": "weapon",
      "monsters": [
        "tortured spirit"
      ]
    },
    {
      "item": "flask of volatile oil",
      "type": "material",
      "monsters": [
        "marsh gar"
      ]
    },
    {
      "item": "forgotten soldier's ringmail cloak",
      "type": "cloak",
      "monsters": [
        "giant sludge"
      ]
    },
    {
      "item": "forsaken mire legplates",
      "type": "legs",
      "monsters": [
        "lumbering borrow"
      ]
    },
    {
      "item": "greathammer of the marsh",
      "type": "weapon",
      "monsters": [
        "bog wraith"
      ]
    },
    {
      "item": "haunted marsh blade",
      "type": "weapon",
      "monsters": [
        "lumbering borrow"
      ]
    },
    {
      "item": "leather sharkhide gauntlets",
      "type": "hands",
      "monsters": [
        "freshwater shark"
      ]
    },
    {
      "item": "lost legionnaire's skullcap",
      "type": "head",
      "monsters": [
        "huge anaconda"
      ]
    },
    {
      "item": "mantle of the swamp wolf",
      "type": "body",
      "monsters": [
        "tortured spirit"
      ]
    },
    {
      "item": "marsh-dweller dartgun",
      "type": "weapon",
      "monsters": [
        "marsh gar"
      ]
    },
    {
      "item": "metalline circlet of might",
      "type": "head",
      "monsters": [
        "giant sludge"
      ]
    },
    {
      "item": "murky green gloves",
      "type": "hands",
      "monsters": [
        "marsh gar"
      ]
    },
    {
      "item": "pirahna tooth necklace",
      "type": "jewel",
      "monsters": [
        "pirahna"
      ]
    },
    {
      "item": "shadow-kissed widowmaker dagger",
      "type": "weapon",
      "monsters": [
        "shadow"
      ]
    },
    {
      "item": "sharktooth necklace",
      "type": "jewel",
      "monsters": [
        "freshwater shark"
      ]
    },
    {
      "item": "sorrowful bog blade",
      "type": "weapon",
      "monsters": [
        "giant sludge"
      ]
    },
    {
      "item": "spell-thief's cowl",
      "type": "head",
      "monsters": [
        "giant marsh blowfly"
      ]
    },
    {
      "item": "tarnished assassin's bauble",
      "type": "jewel",
      "monsters": [
        "huge anaconda"
      ]
    },
    {
      "item": "tattered infiltrator's drape",
      "type": "cloak",
      "monsters": [
        "bog wraith"
      ]
    },
    {
      "item": "twin-bladed serpent dagger",
      "type": "weapon",
      "monsters": [
        "huge anaconda"
      ]
    },
    {
      "item": "virulent necromancer's staff",
      "type": "weapon",
      "monsters": [
        "giant marsh blowfly"
      ]
    }
  ],
  "Mount Desperare": [
    {
      "item": "blade of the empty void",
      "type": "weapon",
      "monsters": [
        "shadowy void elemental"
      ]
    },
    {
      "item": "blue crystalline bow",
      "type": "weapon",
      "monsters": [
        "ethereal lightning elemental"
      ]
    },
    {
      "item": "champion's footguards of tidal force",
      "type": "feet",
      "monsters": [
        "emerald-clad master of water"
      ]
    },
    {
      "item": "cold-forged walkers",
      "type": "feet",
      "monsters": [
        "giant ice worm"
      ]
    },
    {
      "item": "disfigured robes of the fog",
      "type": "body",
      "monsters": [
        "vaporous shade from the void"
      ]
    },
    {
      "item": "frozen greatsword",
      "type": "weapon",
      "monsters": [
        "giant ice worm"
      ]
    },
    {
      "item": "frozen legguards of the immovable",
      "type": "legs",
      "monsters": [
        "enchanted snow creature"
      ]
    },
    {
      "item": "gauntlets of frozen fire",
      "type": "hands",
      "monsters": [
        "mighty ice behemoth"
      ]
    },
    {
      "item": "gloves of elemental tranquililty",
      "type": "hands",
      "monsters": [
        "ethereal lightning elemental"
      ]
    },
    {
      "item": "mantle of conquered trials",
      "type": "cloak",
      "monsters": [
        "grey robed master of earth"
      ]
    },
    {
      "item": "mist weave cloak",
      "type": "cloak",
      "monsters": [
        "vaporous shade from the void"
      ]
    },
    {
      "item": "onyx voidfire staff",
      "type": "weapon",
      "monsters": [
        "black robed mistress of the void"
      ]
    },
    {
      "item": "pair of lightning-weaver grips",
      "type": "hands",
      "monsters": [
        "hooded lightning elemental master"
      ]
    },
    {
      "item": "perilous storm-touched elementalist's sliver",
      "type": "weapon",
      "monsters": [
        "hooded lightning elemental master"
      ]
    },
    {
      "item": "snowdrift skirmisher helm",
      "type": "head",
      "monsters": [
        "enchanted snow creature"
      ]
    },
    {
      "item": "sparking elemental core",
      "type": "jewel",
      "monsters": [
        "ethereal lightning elemental"
      ]
    },
    {
      "item": "spike of stone",
      "type": "weapon",
      "monsters": [
        "grey robed master of earth"
      ]
    },
    {
      "item": "treads of blind nightmare",
      "type": "feet",
      "monsters": [
        "spirit of a frost-fingered fear"
      ]
    },
    {
      "item": "troll's frozen pokey stick",
      "type": "weapon",
      "monsters": [
        "ice troll"
      ]
    },
    {
      "item": "walkers of cold vengeance",
      "type": "feet",
      "monsters": [
        "ice troll"
      ]
    },
    {
      "item": "wristblade of ice",
      "type": "weapon",
      "monsters": []
    }
  ],
  "Northern Wharves": [
    {
      "item": "bar of iron",
      "type": "material",
      "monsters": [
        "iron ore dealer"
      ]
    },
    {
      "item": "mithril trinket",
      "type": "material",
      "monsters": [
        "mithril dealer"
      ]
    },
    {
      "item": "pair of plate greaves",
      "type": "legs",
      "monsters": [
        "Tamian peasant",
        "Tamian smith",
        "sentry"
      ]
    },
    {
      "item": "pile of cloth",
      "type": "material",
      "monsters": [
        "cloth dealer"
      ]
    },
    {
      "item": "silver nugget",
      "type": "material",
      "monsters": [
        "sentinel"
      ]
    }
  ],
  "Orc Caverns": [
    {
      "item": "bar of iron",
      "type": "material",
      "monsters": [
        "lumbering cave troll"
      ]
    },
    {
      "item": "bloodied skeletal leggings",
      "type": "legs",
      "monsters": [
        "bloodied orc prisoner"
      ]
    },
    {
      "item": "bloodied wolf-hide armor",
      "type": "body",
      "monsters": [
        "disgusting orc warlock"
      ]
    },
    {
      "item": "bloodmoon amulet",
      "type": "jewel",
      "monsters": [
        "bloodied orc prisoner",
        "disgusting orc warlock",
        "goblin thief",
        "orc guard"
      ]
    },
    {
      "item": "brutal bone battle axe",
      "type": "weapon",
      "monsters": [
        "lumbering cave troll"
      ]
    },
    {
      "item": "crocodile tear",
      "type": "material",
      "monsters": [
        "disgusting orc warlock"
      ]
    },
    {
      "item": "gargoyle skin gloves",
      "type": "hands",
      "monsters": [
        "lumbering cave troll"
      ]
    },
    {
      "item": "gloves of thievery",
      "type": "hands",
      "monsters": [
        "goblin thief"
      ]
    },
    {
      "item": "greatcloak of obsidian",
      "type": "cloak",
      "monsters": [
        "orc guard"
      ]
    },
    {
      "item": "leggings of the chieftain",
      "type": "legs",
      "monsters": [
        "orc chieftan"
      ]
    },
    {
      "item": "orcish rock slinger",
      "type": "weapon",
      "monsters": [
        "bloodied orc prisoner"
      ]
    },
    {
      "item": "set of iron lockpicks",
      "type": "wielded",
      "monsters": [
        "goblin thief"
      ]
    },
    {
      "item": "shadowy undead razor axe",
      "type": "weapon",
      "monsters": [
        "goblin thief"
      ]
    },
    {
      "item": "studded bloodstained talons",
      "type": "hands",
      "monsters": [
        "bloodied orc prisoner"
      ]
    },
    {
      "item": "studded guard captain's leggings",
      "type": "legs",
      "monsters": [
        "orc guard"
      ]
    },
    {
      "item": "twisted necklace of the chimera",
      "type": "jewel",
      "monsters": [
        "orc chieftan"
      ]
    },
    {
      "item": "wyvern-spine bow",
      "type": "weapon",
      "monsters": [
        "orc guard"
      ]
    }
  ],
  "Pine Forest/Tundra": [
    {
      "item": "barbaric great bow",
      "type": "weapon",
      "monsters": [
        "warden of the forest"
      ]
    },
    {
      "item": "bracers of yeti claws",
      "type": "jewel",
      "monsters": [
        "sasquatch"
      ]
    },
    {
      "item": "coarse fur pants",
      "type": "legs",
      "monsters": [
        "sasquatch"
      ]
    },
    {
      "item": "darkened ettin-skin cuirass",
      "type": "body",
      "monsters": [
        "forest giant"
      ]
    },
    {
      "item": "enchanted wooden spear",
      "type": "weapon",
      "monsters": [
        "greater ettin"
      ]
    },
    {
      "item": "heavy bone crushing maul",
      "type": "weapon",
      "monsters": [
        "sasquatch"
      ]
    },
    {
      "item": "riveted guardsman's coif",
      "type": "head",
      "monsters": [
        "warden of the forest"
      ]
    },
    {
      "item": "rune-etched black staff",
      "type": "weapon",
      "monsters": [
        "warden of the forest"
      ]
    },
    {
      "item": "snow elk hide",
      "type": "material",
      "monsters": [
        "warden of the forest"
      ]
    },
    {
      "item": "stagskin hard-leather boots",
      "type": "feet",
      "monsters": [
        "forest giant"
      ]
    },
    {
      "item": "sword of tormented visions",
      "type": "weapon",
      "monsters": [
        "massive muskox"
      ]
    },
    {
      "item": "undead ettin armor",
      "type": "body",
      "monsters": [
        "greater ettin"
      ]
    },
    {
      "item": "warden's boots",
      "type": "feet",
      "monsters": [
        "warden of the forest"
      ]
    },
    {
      "item": "warden's stout spear",
      "type": "weapon",
      "monsters": [
        "warden of the forest"
      ]
    }
  ],
  "Pyramid of the Sun": [
    {
      "item": "adamantine-lined greatcloak",
      "type": "cloak",
      "monsters": [
        "high priest of Ghict"
      ]
    },
    {
      "item": "ancient overseer's scepter",
      "type": "weapon",
      "monsters": [
        "one armed mummy torso"
      ]
    },
    {
      "item": "ancient pavise of the sun",
      "type": "shield",
      "monsters": [
        "greater mummy"
      ]
    },
    {
      "item": "archaic bolt thrower",
      "type": "weapon",
      "monsters": [
        "greater mummy"
      ]
    },
    {
      "item": "bejeweled breastplate",
      "type": "body",
      "monsters": [
        "ravenous, jeweled scarab"
      ]
    },
    {
      "item": "boots of skittering sand",
      "type": "feet",
      "monsters": [
        "swarm of possessed sand beetles"
      ]
    },
    {
      "item": "deathwalker boots",
      "type": "feet",
      "monsters": [
        "disturbed, headless mummy corpse"
      ]
    },
    {
      "item": "gem-studded war gauntlets",
      "type": "hands",
      "monsters": [
        "disturbed, headless mummy corpse"
      ]
    },
    {
      "item": "gloves of lesser royalty",
      "type": "hands",
      "monsters": [
        "lesser mummy"
      ]
    },
    {
      "item": "hierophant's legwraps",
      "type": "legs",
      "monsters": [
        "high priest of Ghict"
      ]
    },
    {
      "item": "high priest's sky-touched spear",
      "type": "weapon",
      "monsters": [
        "high priest of Ghict"
      ]
    },
    {
      "item": "jewel-encrusted dagger",
      "type": "weapon",
      "monsters": [
        "ravenous, jeweled scarab"
      ]
    },
    {
      "item": "khopesh of the desert sky",
      "type": "weapon",
      "monsters": [
        "lesser mummy"
      ]
    },
    {
      "item": "legplates of ancient dread",
      "type": "legs",
      "monsters": [
        "animated, one-armed mummy torso"
      ]
    },
    {
      "item": "luminous scarab shell gauntlets",
      "type": "hands",
      "monsters": [
        "swarm of possesed sand beetles"
      ]
    },
    {
      "item": "nosferatu's pendant",
      "type": "jewel",
      "monsters": [
        "golden sphinx"
      ]
    },
    {
      "item": "petrified mummy hand",
      "type": "weapon",
      "monsters": [
        "disturbed, headless mummy corpse"
      ]
    },
    {
      "item": "pound of steel",
      "type": "material",
      "monsters": [
        "animated, one-armed mummy torso"
      ]
    },
    {
      "item": "sabre of the Still Sands",
      "type": "weapon",
      "monsters": [
        "greater mummy"
      ]
    },
    {
      "item": "staff of riddles",
      "type": "weapon",
      "monsters": [
        "golden sphinx"
      ]
    },
    {
      "item": "twisted gold torc",
      "type": "jewel",
      "monsters": [
        "golden sphinx"
      ]
    }
  ],
  "Rowangroves": [
    {
      "item": "blade of lesser torment",
      "type": "weapon",
      "monsters": [
        "dancing ruby light"
      ]
    },
    {
      "item": "blue gemmed morning star",
      "type": "weapon",
      "monsters": [
        "cascade nymph"
      ]
    },
    {
      "item": "burning sword",
      "type": "weapon",
      "monsters": [
        "dancing ruby light",
        "pixie mage"
      ]
    },
    {
      "item": "ice crystal",
      "type": "material",
      "monsters": [
        "pixie mage"
      ]
    },
    {
      "item": "leather jerkin",
      "type": "body",
      "monsters": [
        "stick man"
      ]
    },
    {
      "item": "pair of raw leggings",
      "type": "legs",
      "monsters": [
        "dancing ruby light"
      ]
    },
    {
      "item": "scarlet mesh boots",
      "type": "feet",
      "monsters": [
        "petal sprite"
      ]
    },
    {
      "item": "scarlet mesh gauntlets",
      "type": "hands",
      "monsters": [
        "stick man"
      ]
    },
    {
      "item": "scarlet mesh kilt",
      "type": "legs",
      "monsters": [
        "spriggan warrior"
      ]
    },
    {
      "item": "sigil laced leather hauberk",
      "type": "body",
      "monsters": [
        "pixie guard"
      ]
    },
    {
      "item": "small silver locket",
      "type": "jewel",
      "monsters": [
        "dancing azure light"
      ]
    },
    {
      "item": "spriggan axe",
      "type": "weapon",
      "monsters": [
        "spriggan guard"
      ]
    },
    {
      "item": "staff of frost",
      "type": "weapon",
      "monsters": [
        "pixie mage"
      ]
    },
    {
      "item": "superior hand crossbow",
      "type": "weapon",
      "monsters": [
        "cascade nymph"
      ]
    },
    {
      "item": "tidal short bow",
      "type": "weapon",
      "monsters": [
        "pixie guard"
      ]
    },
    {
      "item": "trident of the grove",
      "type": "weapon",
      "monsters": [
        "cascade nymph"
      ]
    },
    {
      "item": "visored plate helm",
      "type": "head",
      "monsters": [
        "whipping willow"
      ]
    },
    {
      "item": "willow staff",
      "type": "weapon",
      "monsters": [
        "whipping willow"
      ]
    },
    {
      "item": "wooden shield",
      "type": "shield",
      "monsters": [
        "dancing azure light"
      ]
    }
  ],
  "Serpent's Pass": [
    {
      "item": "blade engraved with spiders",
      "type": "weapon",
      "monsters": [
        "giant silver spider"
      ]
    },
    {
      "item": "blade of swirling chaos",
      "type": "weapon",
      "monsters": [
        "windfang"
      ]
    },
    {
      "item": "cobra fang earring",
      "type": "jewel",
      "monsters": [
        "giant king cobra"
      ]
    },
    {
      "item": "emerald longsword",
      "type": "weapon",
      "monsters": [
        "green wyvern"
      ]
    },
    {
      "item": "fang of the wind",
      "type": "weapon",
      "monsters": [
        "windfang"
      ]
    },
    {
      "item": "fang-studded gauntlets",
      "type": "hands",
      "monsters": [
        "windfang"
      ]
    },
    {
      "item": "halberd of flickering flame",
      "type": "weapon",
      "monsters": [
        "red wyvern"
      ]
    },
    {
      "item": "hammer of the hydra",
      "type": "weapon",
      "monsters": [
        "hydra"
      ]
    },
    {
      "item": "hogbone club",
      "type": "weapon",
      "monsters": [
        "giant grey warthog"
      ]
    },
    {
      "item": "hood of silversilk",
      "type": "head",
      "monsters": [
        "giant silver spider"
      ]
    },
    {
      "item": "hood of spidersilk",
      "type": "head",
      "monsters": [
        "giant silver spider"
      ]
    },
    {
      "item": "jade infused studded cap",
      "type": "head",
      "monsters": [
        "green wyvern"
      ]
    },
    {
      "item": "lion-hide leggings",
      "type": "legs",
      "monsters": [
        "great white lion"
      ]
    },
    {
      "item": "massive lion's mane",
      "type": "cloak",
      "monsters": [
        "great white lion"
      ]
    },
    {
      "item": "roaring chestguard of freedom",
      "type": "body",
      "monsters": [
        "giant grizzly bear"
      ]
    },
    {
      "item": "roc feather belt",
      "type": "jewel",
      "monsters": [
        "greater roc"
      ]
    },
    {
      "item": "rune-etched viper fang crossbow",
      "type": "weapon",
      "monsters": [
        "deadly viper"
      ]
    },
    {
      "item": "scorched fire-twined treads",
      "type": "feet",
      "monsters": [
        "fire windfang"
      ]
    },
    {
      "item": "serpent fang dartgun",
      "type": "weapon",
      "monsters": [
        "giant king cobra"
      ]
    },
    {
      "item": "singing feet of the lion",
      "type": "feet",
      "monsters": [
        "great white lion"
      ]
    },
    {
      "item": "snake scale buckler",
      "type": "shield",
      "monsters": [
        "rock viper"
      ]
    },
    {
      "item": "twisted volcanic staff",
      "type": "weapon",
      "monsters": [
        "young wyvern"
      ]
    }
  ],
  "Serpentine Mountains": [
    {
      "item": "accursed bow of the infernal legion",
      "type": "weapon",
      "monsters": [
        "crystallizing rock giant"
      ]
    },
    {
      "item": "enormous enchanted icicle",
      "type": "weapon",
      "monsters": [
        "icicle-wielding snow giant"
      ]
    },
    {
      "item": "fearless mountaineer's helm",
      "type": "head",
      "monsters": [
        "bloodied two-headed ettin"
      ]
    },
    {
      "item": "gem-studded gianthide kilt",
      "type": "legs",
      "monsters": [
        "crystallizing rock giant"
      ]
    },
    {
      "item": "hardened trollhide coat of plates",
      "type": "body",
      "monsters": [
        "lumbering mountain giant"
      ]
    },
    {
      "item": "hood of fallen snow",
      "type": "head",
      "monsters": [
        "icicle-wielding snow giant"
      ]
    },
    {
      "item": "leather raiment of solid darkness",
      "type": "body",
      "monsters": [
        "greater wyvern, engulfed in darkness"
      ]
    },
    {
      "item": "maelstrom cudgel",
      "type": "weapon",
      "monsters": [
        "stumbling mountian ogre"
      ]
    },
    {
      "item": "serpentine shortspear",
      "type": "weapon",
      "monsters": [
        "delirious firbolg"
      ]
    },
    {
      "item": "staff of utter darkness",
      "type": "weapon",
      "monsters": [
        "wyvern of greater darkness"
      ]
    },
    {
      "item": "towering bulwark of the crag",
      "type": "shield",
      "monsters": [
        "lumbering mountain giant"
      ]
    },
    {
      "item": "treads of the fallen warrior",
      "type": "feet",
      "monsters": [
        "stumbling mountian ogre"
      ]
    },
    {
      "item": "wayward wanderer's pants",
      "type": "legs",
      "monsters": [
        "delirious firbolg"
      ]
    },
    {
      "item": "worldwalker's cloak",
      "type": "cloak",
      "monsters": [
        "bloodied two-headed ettin"
      ]
    }
  ],
  "Snarewoods": [
    {
      "item": "arcane spidersilk boots",
      "type": "feet",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "chitin-scaled recurve bow",
      "type": "weapon",
      "monsters": [
        "Broodmother, Ciceret"
      ]
    },
    {
      "item": "chitin-studded jacket",
      "type": "body",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "corroded hammer",
      "type": "weapon",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "crawler boots",
      "type": "feet",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "Dur'mulian scarab",
      "type": "jewel",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "fine black silk cape",
      "type": "cloak",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "gloves of distortion",
      "type": "hands",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "gloves of silkwood",
      "type": "hands",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "ichor-stained mesh boots",
      "type": "feet",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "jagged blade of chitin",
      "type": "weapon",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "pendant of ancient amber",
      "type": "jewel",
      "monsters": [
        "Broodmother, Ciceret"
      ]
    },
    {
      "item": "petrified spiderweave gauntlets",
      "type": "hands",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "raging lanate hammer",
      "type": "weapon",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "severed broodmother chelicera",
      "type": "weapon",
      "monsters": [
        "Broodmother, Ciceret"
      ]
    },
    {
      "item": "severed broodmother leg",
      "type": "weapon",
      "monsters": [
        "Broodmother, Ciceret"
      ]
    },
    {
      "item": "sharpened spider-leg spear",
      "type": "weapon",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "silk footguards of strength",
      "type": "feet",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "snow worm larva",
      "type": "material",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "sparkling spider-shaped broach",
      "type": "jewel",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "spider shield",
      "type": "shield",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "steady spiderwave leather boots",
      "type": "feet",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "thick spider-hair pants",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "thin chitin buckler",
      "type": "shield",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "torn studded riding leggings",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "travel-worn cloak",
      "type": "cloak",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "warped hissing blade",
      "type": "weapon",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "widow's pike",
      "type": "weapon",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "worn studded scout's hood",
      "type": "head",
      "monsters": [
        "great hissing spider"
      ]
    }
  ],
  "Spider Caves": [
    {
      "item": "amulet of sapphire",
      "type": "jewel",
      "monsters": [
        "cave spider"
      ]
    },
    {
      "item": "arcane embroidered footsteps",
      "type": "feet",
      "monsters": [
        "grey wolf spider"
      ]
    },
    {
      "item": "bar of bronze",
      "type": "material",
      "monsters": [
        "rock spider"
      ]
    },
    {
      "item": "black bandana",
      "type": "head",
      "monsters": [
        "large rat"
      ]
    },
    {
      "item": "black fox pelt",
      "type": "head",
      "monsters": [
        "large rat"
      ]
    },
    {
      "item": "black spider-silk tunic",
      "type": "body",
      "monsters": [
        "tiny spider"
      ]
    },
    {
      "item": "blade of water",
      "type": "weapon",
      "monsters": [
        "water spider"
      ]
    },
    {
      "item": "bristly spider leggings",
      "type": "legs",
      "monsters": [
        "brown spider",
        "cave spider",
        "small arachnid"
      ]
    },
    {
      "item": "cloak of white feathers",
      "type": "cloak",
      "monsters": [
        "large rat"
      ]
    },
    {
      "item": "creeping crawlers",
      "type": "feet",
      "monsters": [
        "giant spider"
      ]
    },
    {
      "item": "dark headband",
      "type": "head",
      "monsters": [
        "brown spider"
      ]
    },
    {
      "item": "fitted silk slippers",
      "type": "feet",
      "monsters": [
        "small arachnid"
      ]
    },
    {
      "item": "glass filled rolling pin",
      "type": "weapon",
      "monsters": [
        "large glowing spider"
      ]
    },
    {
      "item": "hairy spider hide armor",
      "type": "body",
      "monsters": [
        "giant spider",
        "grey wolf spider",
        "large glowing spider",
        "silver spider"
      ]
    },
    {
      "item": "helmet of tough carapace",
      "type": "head",
      "monsters": [
        "cave spider"
      ]
    },
    {
      "item": "pair of raw leggings",
      "type": "legs",
      "monsters": [
        "scared explorer"
      ]
    },
    {
      "item": "phantom silk treads",
      "type": "feet",
      "monsters": [
        "rock spider"
      ]
    },
    {
      "item": "purple spidersilk cloak",
      "type": "cloak",
      "monsters": [
        "brown spider",
        "tiny spider"
      ]
    },
    {
      "item": "scarlet mesh boots",
      "type": "feet",
      "monsters": [
        "brown spider"
      ]
    },
    {
      "item": "scarlet mesh skullcap",
      "type": "head",
      "monsters": [
        "large rat"
      ]
    },
    {
      "item": "silk cape of power",
      "type": "cloak",
      "monsters": [
        "giant spider"
      ]
    },
    {
      "item": "silk gloves of protection",
      "type": "hands",
      "monsters": [
        "giant spider",
        "rock spider"
      ]
    },
    {
      "item": "spider carapace helmet",
      "type": "head",
      "monsters": [
        "grey wolf spider",
        "large glowing spider",
        "rock spider",
        "silver spider",
        "water spider"
      ]
    },
    {
      "item": "spider dagger",
      "type": "weapon",
      "monsters": [
        "giant spider"
      ]
    },
    {
      "item": "spider-etched flail",
      "type": "weapon",
      "monsters": [
        "large glowing spider"
      ]
    },
    {
      "item": "spider-filament cuisses",
      "type": "legs",
      "monsters": [
        "small arachnid"
      ]
    },
    {
      "item": "spider-thread bow",
      "type": "weapon",
      "monsters": [
        "large glowing spider"
      ]
    },
    {
      "item": "spidersilk skirt",
      "type": "legs",
      "monsters": [
        "brown spider"
      ]
    },
    {
      "item": "spire of nature",
      "type": "weapon",
      "monsters": [
        "grey wolf spider"
      ]
    },
    {
      "item": "studded cap of eight eyes",
      "type": "head",
      "monsters": [
        "rock spider"
      ]
    },
    {
      "item": "studded chitinous legguards",
      "type": "legs",
      "monsters": [
        "silver spider"
      ]
    },
    {
      "item": "Tamian longbow",
      "type": "weapon",
      "monsters": [
        "scared explorer"
      ]
    },
    {
      "item": "wand of woven branches",
      "type": "weapon",
      "monsters": [
        "large rat"
      ]
    }
  ],
  "Stables of Yazik": [
    {
      "item": "blade of shadows",
      "type": "weapon",
      "monsters": [
        "shadow stallion"
      ]
    },
    {
      "item": "gryphon rider's stormhammer",
      "type": "weapon",
      "monsters": [
        "unicorn rider"
      ]
    },
    {
      "item": "guardsman's axe",
      "type": "weapon",
      "monsters": [
        "stable guard"
      ]
    },
    {
      "item": "horseman plated mail armor",
      "type": "body",
      "monsters": [
        "unicorn rider"
      ]
    },
    {
      "item": "horseman's spurs of wrath",
      "type": "feet",
      "monsters": [
        "unicorn rider"
      ]
    },
    {
      "item": "iridescent gauntlets of the glen",
      "type": "hands",
      "monsters": [
        "tamed unicorn"
      ]
    },
    {
      "item": "moonrider's boots",
      "type": "feet",
      "monsters": [
        "unicorn mounted archer"
      ]
    },
    {
      "item": "multi-stringed compound bow",
      "type": "weapon",
      "monsters": [
        "muscular stable guard"
      ]
    },
    {
      "item": "pale twisted moon spear",
      "type": "weapon",
      "monsters": [
        "unicorn charioteer"
      ]
    },
    {
      "item": "plumed greathelm",
      "type": "head",
      "monsters": [
        "unicorn charioteer"
      ]
    },
    {
      "item": "red plate spurs of fire",
      "type": "feet",
      "monsters": [
        "shadow stallion"
      ]
    },
    {
      "item": "scimitar of depravity",
      "type": "weapon",
      "monsters": [
        "unicorn charioteer"
      ]
    },
    {
      "item": "shadow heavy hide legguards",
      "type": "legs",
      "monsters": [
        "muscular stable guard"
      ]
    },
    {
      "item": "shadow-padded helmet",
      "type": "head",
      "monsters": [
        "shadow stallion"
      ]
    },
    {
      "item": "shimmering moonsteel cloak",
      "type": "cloak",
      "monsters": [
        "unicorn mounted archer"
      ]
    },
    {
      "item": "studded gloaming cloak",
      "type": "cloak",
      "monsters": [
        "unicorn charioteer"
      ]
    },
    {
      "item": "wicked leather heels",
      "type": "feet",
      "monsters": [
        "unicorn mounted archer"
      ]
    }
  ],
  "Tamia Local": [
    {
      "item": "black bladed dagger",
      "type": "weapon",
      "monsters": [
        "poor peasant"
      ]
    },
    {
      "item": "black plate armor",
      "type": "body",
      "monsters": [
        "grim citizen"
      ]
    },
    {
      "item": "broken wheelbarrow drum",
      "type": "shield",
      "monsters": [
        "farmer"
      ]
    },
    {
      "item": "burnished ironwood staff",
      "type": "weapon",
      "monsters": [
        "grim citizen"
      ]
    },
    {
      "item": "butcher's axe",
      "type": "weapon",
      "monsters": [
        "poor peasant"
      ]
    },
    {
      "item": "charred staff",
      "type": "weapon",
      "monsters": [
        "wandering merchant"
      ]
    },
    {
      "item": "cured leather armor",
      "type": "body",
      "monsters": [
        "grim citizen"
      ]
    },
    {
      "item": "dagger of the druid",
      "type": "weapon",
      "monsters": [
        "traveler"
      ]
    },
    {
      "item": "flanged mace",
      "type": "weapon",
      "monsters": [
        "small dog",
        "traveler"
      ]
    },
    {
      "item": "giant battleworn hammer",
      "type": "weapon",
      "monsters": [
        "small dog",
        "wandering merchant"
      ]
    },
    {
      "item": "large bloody club",
      "type": "weapon",
      "monsters": [
        "grim citizen",
        "wandering merchant"
      ]
    },
    {
      "item": "olive-streaked boots",
      "type": "feet",
      "monsters": [
        "wandering merchant"
      ]
    },
    {
      "item": "pikeman's spear",
      "type": "weapon",
      "monsters": [
        "traveler"
      ]
    },
    {
      "item": "raccoon skin cap",
      "type": "head",
      "monsters": [
        "farmer"
      ]
    },
    {
      "item": "scarlet mesh cloak",
      "type": "cloak",
      "monsters": [
        "grim citizen"
      ]
    },
    {
      "item": "short sword",
      "type": "weapon",
      "monsters": [
        "farmer",
        "wandering merchant"
      ]
    },
    {
      "item": "tribal cloth moccasins",
      "type": "feet",
      "monsters": [
        "traveler"
      ]
    },
    {
      "item": "two-handed sword",
      "type": "weapon",
      "monsters": [
        "farmer"
      ]
    },
    {
      "item": "well oiled longbow",
      "type": "weapon",
      "monsters": [
        "farmer",
        "traveler",
        "wandering merchant"
      ]
    },
    {
      "item": "wooden club",
      "type": "weapon",
      "monsters": [
        "grim citizen"
      ]
    }
  ],
  "Tamia Local - Forest": [
    {
      "item": "black leather pants",
      "type": "legs",
      "monsters": [
        "razor leaf"
      ]
    },
    {
      "item": "bloodied imperfect morning star",
      "type": "weapon",
      "monsters": [
        "tattered deserter"
      ]
    },
    {
      "item": "broadsword",
      "type": "weapon",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "defender's boots",
      "type": "feet",
      "monsters": [
        "Tamian refugee",
        "gaunt forager"
      ]
    },
    {
      "item": "faded brown robes",
      "type": "body",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "fine two-handed axe",
      "type": "weapon",
      "monsters": [
        "razor leaf"
      ]
    },
    {
      "item": "ironbark crusher",
      "type": "weapon",
      "monsters": [
        "twig effigy"
      ]
    },
    {
      "item": "large bloody club",
      "type": "weapon",
      "monsters": [
        "gaunt forager"
      ]
    },
    {
      "item": "liquid dagger",
      "type": "weapon",
      "monsters": [
        "Tamian refugee",
        "tattered deserter"
      ]
    },
    {
      "item": "long skullhead staff",
      "type": "weapon",
      "monsters": [
        "tattered deserter"
      ]
    },
    {
      "item": "old dwarven two-handed mace",
      "type": "weapon",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "pair of cloth boots",
      "type": "feet",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "pair of rustbound gauntlets",
      "type": "hands",
      "monsters": [
        "twig effigy"
      ]
    },
    {
      "item": "scimitar",
      "type": "weapon",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "spear of vines",
      "type": "weapon",
      "monsters": [
        "strangle vine"
      ]
    },
    {
      "item": "spidersilk hood",
      "type": "head",
      "monsters": [
        "tattered deserter"
      ]
    },
    {
      "item": "staff of the treant",
      "type": "weapon",
      "monsters": [
        "twisted stump"
      ]
    },
    {
      "item": "steelbound gauntlets",
      "type": "hands",
      "monsters": [
        "bramble caltrop"
      ]
    },
    {
      "item": "strong pair of leather boots",
      "type": "feet",
      "monsters": [
        "gaunt forager"
      ]
    },
    {
      "item": "superior two-handed axe",
      "type": "weapon",
      "monsters": [
        "Tamian refugee"
      ]
    },
    {
      "item": "wooden bow",
      "type": "weapon",
      "monsters": [
        "hunting briars"
      ]
    },
    {
      "item": "worn leather chaps",
      "type": "legs",
      "monsters": [
        "tattered deserter"
      ]
    }
  ],
  "Tamian Foothills": [
    {
      "item": "barbarian's cap",
      "type": "head",
      "monsters": [
        "diseased rat"
      ]
    },
    {
      "item": "bardic leather pants",
      "type": "legs",
      "monsters": [
        "angry wolverine"
      ]
    },
    {
      "item": "black bandana",
      "type": "head",
      "monsters": [
        "diseased rat"
      ]
    },
    {
      "item": "military chestpiece",
      "type": "body",
      "monsters": [
        "Tamian Trapper"
      ]
    },
    {
      "item": "pair of raw leggings",
      "type": "legs",
      "monsters": [
        "diseased rat"
      ]
    },
    {
      "item": "plain ivory dagger",
      "type": "weapon",
      "monsters": [
        "red fox"
      ]
    },
    {
      "item": "scrap of hide",
      "type": "material",
      "monsters": [
        "Tamian Trapper"
      ]
    },
    {
      "item": "strong leather chest piece",
      "type": "body",
      "monsters": [
        "brown sparrow"
      ]
    },
    {
      "item": "strong pair of leather boots",
      "type": "feet",
      "monsters": [
        "Tamian Trapper"
      ]
    },
    {
      "item": "wickedly sharpened branch",
      "type": "weapon",
      "monsters": [
        "angry wolverine"
      ]
    }
  ],
  "Temple of the Divine Horn": [
    {
      "item": "black cloak of discord",
      "type": "cloak",
      "monsters": [
        "unicorn priest"
      ]
    },
    {
      "item": "blood-stained priest's tunic",
      "type": "body",
      "monsters": [
        "unicorn priest"
      ]
    },
    {
      "item": "blue diamond",
      "type": "material",
      "monsters": [
        "unicorn priest"
      ]
    },
    {
      "item": "cloak of concentrated fog",
      "type": "cloak",
      "monsters": [
        "elder unicorn priest"
      ]
    },
    {
      "item": "crimson twilight drape",
      "type": "cloak",
      "monsters": [
        "unicorn priest"
      ]
    },
    {
      "item": "elemental crescent-moon axe",
      "type": "weapon",
      "monsters": [
        "unicorn worshipper"
      ]
    },
    {
      "item": "enchanted black and purple sacred gloves",
      "type": "hands",
      "monsters": [
        "unicorn worshipper"
      ]
    },
    {
      "item": "hovering dagger of the righteous",
      "type": "weapon",
      "monsters": [
        "elder unicorn priest"
      ]
    },
    {
      "item": "knightly chain kilt",
      "type": "legs",
      "monsters": [
        "restless unicorn spirit"
      ]
    },
    {
      "item": "longbow of holy retribution",
      "type": "weapon",
      "monsters": [
        "unicorn high-priest"
      ]
    },
    {
      "item": "magic-warped cowl",
      "type": "head",
      "monsters": [
        "elder unicorn priest"
      ]
    },
    {
      "item": "moonlit diamond-encrusted razor",
      "type": "weapon",
      "monsters": [
        "protective unicorn soul"
      ]
    },
    {
      "item": "oath-keeper's leggings",
      "type": "legs",
      "monsters": [
        "unicorn protector"
      ]
    },
    {
      "item": "protector's bardiche",
      "type": "weapon",
      "monsters": [
        "unicorn protector"
      ]
    },
    {
      "item": "protector's hood",
      "type": "head",
      "monsters": [
        "protective unicorn soul"
      ]
    },
    {
      "item": "sacred gloves of the divine",
      "type": "hands",
      "monsters": [
        "unicorn high-priest"
      ]
    },
    {
      "item": "sealed tome of forbidden arts",
      "type": "weapon",
      "monsters": [
        "unicorn worshipper"
      ]
    },
    {
      "item": "shadow infused leggings of twilight",
      "type": "legs",
      "monsters": [
        "unicorn high-priest"
      ]
    },
    {
      "item": "shaft of black ice",
      "type": "weapon",
      "monsters": [
        "unicorn priest"
      ]
    },
    {
      "item": "spire of dark omens",
      "type": "weapon",
      "monsters": [
        "elder unicorn priest"
      ]
    },
    {
      "item": "unicorn spirit blade",
      "type": "weapon",
      "monsters": [
        "restless unicorn spirit"
      ]
    },
    {
      "item": "wavering gypsy cloak",
      "type": "cloak",
      "monsters": [
        "unicorn worshipper"
      ]
    }
  ],
  "Underdark": [
    {
      "item": "ancient magi's leggings",
      "type": "legs",
      "monsters": [
        "dark elf archmage"
      ]
    },
    {
      "item": "arcane-flayer boots",
      "type": "feet",
      "monsters": [
        "dark-elf wizard"
      ]
    },
    {
      "item": "black robe of runes",
      "type": "body",
      "monsters": [
        "dark elf priestess"
      ]
    },
    {
      "item": "blue icicle",
      "type": "material",
      "monsters": [
        "dark elf wizard"
      ]
    },
    {
      "item": "cloak of rippling water",
      "type": "cloak",
      "monsters": [
        "shimmering volkh"
      ]
    },
    {
      "item": "crimson twilight spiked gloves",
      "type": "hands",
      "monsters": [
        "dark dwarf"
      ]
    },
    {
      "item": "crystalized void staff",
      "type": "weapon",
      "monsters": [
        "dark elf priestess"
      ]
    },
    {
      "item": "cuirass of binding might",
      "type": "body",
      "monsters": [
        "dark elf priestess"
      ]
    },
    {
      "item": "Dwarven war-hammer of reckoning",
      "type": "weapon",
      "monsters": [
        "dark dwarf"
      ]
    },
    {
      "item": "emerald studded great hammer",
      "type": "weapon",
      "monsters": [
        "shadowy void elemental"
      ]
    },
    {
      "item": "flesh-piercer of blackfire",
      "type": "weapon",
      "monsters": [
        "shimmering volkh"
      ]
    },
    {
      "item": "grips of blasphemy",
      "type": "hands",
      "monsters": [
        "shimmering volkh"
      ]
    },
    {
      "item": "katana of the boundless",
      "type": "weapon",
      "monsters": [
        "shimmering volkh"
      ]
    },
    {
      "item": "legionnaire's scythe of chaos",
      "type": "weapon",
      "monsters": [
        "glowering dracae"
      ]
    },
    {
      "item": "opalescent gauntlets of blood",
      "type": "weapon",
      "monsters": [
        "dark dwarf"
      ]
    },
    {
      "item": "softly glowing cape",
      "type": "cloak",
      "monsters": [
        "glowing white kelpie"
      ]
    },
    {
      "item": "spear of the shapeshifter",
      "type": "weapon",
      "monsters": [
        "glowing white kelpie"
      ]
    },
    {
      "item": "spear wrapped in eternal darkness",
      "type": "weapon",
      "monsters": [
        "glowering dracae"
      ]
    },
    {
      "item": "sword of flame",
      "type": "weapon",
      "monsters": [
        "dark elf warrior"
      ]
    }
  ],
  "Underground Temple": [
    {
      "item": "angelic cuirass",
      "type": "body",
      "monsters": [
        "angelic harbinger"
      ]
    },
    {
      "item": "anointed cross-blade gauntlets",
      "type": "weapon",
      "monsters": [
        "niordian avenger"
      ]
    },
    {
      "item": "fire dragon tongue",
      "type": "material",
      "monsters": [
        "moira mage"
      ]
    },
    {
      "item": "footpads of divine protection",
      "type": "feet",
      "monsters": [
        "Nioridian disciple"
      ]
    },
    {
      "item": "heavy chain cloak of justice",
      "type": "cloak",
      "monsters": [
        "wayward paladin"
      ]
    },
    {
      "item": "helm of the omnipotent",
      "type": "head",
      "monsters": [
        "omnipotent cleric"
      ]
    },
    {
      "item": "jeweled greatsword",
      "type": "weapon",
      "monsters": [
        "Niordian avenger"
      ]
    },
    {
      "item": "justiciar's deathgrips of ragesteel",
      "type": "hands",
      "monsters": [
        "Niordian avenger"
      ]
    },
    {
      "item": "pitch black boots of frost and fire",
      "type": "feet",
      "monsters": [
        "moira mage"
      ]
    },
    {
      "item": "robe of blind absolution",
      "type": "body",
      "monsters": [
        "omnipotent cleric"
      ]
    },
    {
      "item": "skycaller legguards",
      "type": "legs",
      "monsters": [
        "angelic harbinger"
      ]
    },
    {
      "item": "visage of holy sorrow",
      "type": "head",
      "monsters": [
        "wayward paladin"
      ]
    },
    {
      "item": "writhing spear of flickering flames",
      "type": "weapon",
      "monsters": [
        "moira mage"
      ]
    }
  ],
  "Unicorn Glen": [
    {
      "item": "blazing amulet of light",
      "type": "jewel",
      "monsters": [
        "bucking unicorn bronco"
      ]
    },
    {
      "item": "breastplate of fortune",
      "type": "body",
      "monsters": [
        "winged unicorn"
      ]
    },
    {
      "item": "centaur's studded gauntlets",
      "type": "hands",
      "monsters": [
        "white centaur"
      ]
    },
    {
      "item": "crackling staff of the unicorn",
      "type": "weapon",
      "monsters": [
        "wild unicorn stallion"
      ]
    },
    {
      "item": "crossbow of pure energy",
      "type": "weapon",
      "monsters": [
        "white centaur archer"
      ]
    },
    {
      "item": "elegant headchopper cleaver",
      "type": "weapon",
      "monsters": [
        "white centaur"
      ]
    },
    {
      "item": "frozen pair of moonlit silken handwraps",
      "type": "hands",
      "monsters": [
        "unicorn mounted archer"
      ]
    },
    {
      "item": "frozen stalagmite scepter",
      "type": "weapon",
      "monsters": [
        "wild unicorn stallion"
      ]
    },
    {
      "item": "gloves of shifting mists",
      "type": "hands",
      "monsters": [
        "majestic mist mustang"
      ]
    },
    {
      "item": "gnarly, twisted tree branch",
      "type": "weapon",
      "monsters": [
        "wild unicorn mare"
      ]
    },
    {
      "item": "heavy spidermesh boots",
      "type": "feet",
      "monsters": [
        "wandering holy man"
      ]
    },
    {
      "item": "iron treads of faith",
      "type": "feet",
      "monsters": [
        "wandering holy man"
      ]
    },
    {
      "item": "lance of justice",
      "type": "weapon",
      "monsters": [
        "winged unicorn"
      ]
    },
    {
      "item": "scaled tunic of glory",
      "type": "body",
      "monsters": [
        "white centaur"
      ]
    },
    {
      "item": "shimmering pearlescent claws",
      "type": "weapon",
      "monsters": [
        "wild unicorn stallion"
      ]
    },
    {
      "item": "silver and blue tabard",
      "type": "body",
      "monsters": [
        "white centaur archer"
      ]
    },
    {
      "item": "souless unicorn pendant",
      "type": "jewel",
      "monsters": [
        "wild unicorn yearling"
      ]
    },
    {
      "item": "supple unicorn jacket",
      "type": "body",
      "monsters": [
        "wild unicorn yearling"
      ]
    },
    {
      "item": "unicorn hair-weave belt",
      "type": "jewel",
      "monsters": [
        "tamed unicorn"
      ]
    },
    {
      "item": "wooden staff covered with black runes",
      "type": "weapon",
      "monsters": [
        "wandering holy man"
      ]
    }
  ],
  "Valley of the Giants": [
    {
      "item": "assassin's reinforced boots",
      "type": "feet",
      "monsters": [
        "firbolg"
      ]
    },
    {
      "item": "black and red mages pants",
      "type": "legs",
      "monsters": [
        "giant centipede"
      ]
    },
    {
      "item": "bladed necklace of a gloomlord",
      "type": "jewel",
      "monsters": [
        "lava elemental"
      ]
    },
    {
      "item": "bundle of oak",
      "type": "material",
      "monsters": [
        "verbeeg"
      ]
    },
    {
      "item": "cloak of the astromancer",
      "type": "cloak",
      "monsters": [
        "steam elemental"
      ]
    },
    {
      "item": "cracked wyvern bone helmet",
      "type": "head",
      "monsters": [
        "greater wyvern"
      ]
    },
    {
      "item": "crawler's grips",
      "type": "hands",
      "monsters": [
        "giant centipede"
      ]
    },
    {
      "item": "crossbow of the eagle",
      "type": "weapon",
      "monsters": [
        "giant golden eagle"
      ]
    },
    {
      "item": "cruelly spiked mace",
      "type": "weapon",
      "monsters": [
        "fire giant whelp"
      ]
    },
    {
      "item": "cyclops eye",
      "type": "jewel",
      "monsters": [
        "cyclops"
      ]
    },
    {
      "item": "defender chest of the prophet",
      "type": "body",
      "monsters": [
        "cyclops"
      ]
    },
    {
      "item": "displaced jade helm",
      "type": "head",
      "monsters": [
        "stone giant"
      ]
    },
    {
      "item": "diviner's leather boots",
      "type": "feet",
      "monsters": [
        "verbeeg"
      ]
    },
    {
      "item": "feathered leather cuirass",
      "type": "body",
      "monsters": [
        "giant falcon"
      ]
    },
    {
      "item": "finely wrought plate armor",
      "type": "body",
      "monsters": [
        "cliff giant"
      ]
    },
    {
      "item": "firbolg's heavy hammer",
      "type": "weapon",
      "monsters": [
        "firbolg"
      ]
    },
    {
      "item": "flame-wrapped obsidian bastard sword",
      "type": "weapon",
      "monsters": [
        "Fire Giant King"
      ]
    },
    {
      "item": "footwraps of the swamp",
      "type": "feet",
      "monsters": [
        "swamp giant"
      ]
    },
    {
      "item": "gauntlets of the great falcon",
      "type": "hands",
      "monsters": [
        "giant falcon"
      ]
    },
    {
      "item": "glaive of the forgotten flame",
      "type": "weapon",
      "monsters": [
        "giant falcon"
      ]
    },
    {
      "item": "greatsword of the skylord",
      "type": "weapon",
      "monsters": [
        "greater wyvern"
      ]
    },
    {
      "item": "handwraps of embers",
      "type": "hands",
      "monsters": [
        "fire giant whelp"
      ]
    },
    {
      "item": "islander's cloak",
      "type": "cloak",
      "monsters": [
        "firbolg"
      ]
    },
    {
      "item": "knife of condensed clouds",
      "type": "weapon",
      "monsters": [
        "cloud giant"
      ]
    },
    {
      "item": "leather headpiece of silent fire",
      "type": "head",
      "monsters": [
        "magma man"
      ]
    },
    {
      "item": "molten greatsword",
      "type": "weapon",
      "monsters": [
        "magma man"
      ]
    },
    {
      "item": "obsidian tower shield",
      "type": "shield",
      "monsters": [
        "Fire Giant King"
      ]
    },
    {
      "item": "purifier's wavering cloak",
      "type": "cloak",
      "monsters": [
        "steam elemental"
      ]
    },
    {
      "item": "quality obsidian-headed sledge",
      "type": "weapon",
      "monsters": [
        "cliff giant"
      ]
    },
    {
      "item": "ringmail heretic's coif",
      "type": "head",
      "monsters": [
        "storm giant"
      ]
    },
    {
      "item": "rune engraved hood",
      "type": "head",
      "monsters": [
        "storm giant"
      ]
    },
    {
      "item": "snakeskin-hilted long machete",
      "type": "weapon",
      "monsters": [
        "verbeeg"
      ]
    },
    {
      "item": "stratus boots",
      "type": "feet",
      "monsters": [
        "cloud giant"
      ]
    },
    {
      "item": "studded gloaming gloves",
      "type": "hands",
      "monsters": [
        "cyclops"
      ]
    },
    {
      "item": "sword of the swamp",
      "type": "weapon",
      "monsters": [
        "swamp giant"
      ]
    },
    {
      "item": "translucent bracelet containing magma",
      "type": "jewel",
      "monsters": [
        "Fire Giant King"
      ]
    },
    {
      "item": "translucent staff of storms",
      "type": "weapon",
      "monsters": [
        "storm giant"
      ]
    },
    {
      "item": "veteran's sigil-laced boots",
      "type": "feet",
      "monsters": [
        "firbolg"
      ]
    },
    {
      "item": "voulge of the valley",
      "type": "weapon",
      "monsters": [
        "cyclops"
      ]
    },
    {
      "item": "wind-blasted smooth quartz machete",
      "type": "weapon",
      "monsters": [
        "giant falcon"
      ]
    }
  ],
  "Valley of Zden": [
    {
      "item": "archivist's staff",
      "type": "weapon",
      "monsters": [
        "bandit marauder"
      ]
    },
    {
      "item": "azure jeweled encrusted stilleto",
      "type": "weapon",
      "monsters": [
        "bandit captain"
      ]
    },
    {
      "item": "bandit captain's gloves",
      "type": "hands",
      "monsters": [
        "bandit captain"
      ]
    },
    {
      "item": "bandit's gloves",
      "type": "hands",
      "monsters": [
        "bandit lieutenant"
      ]
    },
    {
      "item": "charged spiked blackjack",
      "type": "weapon",
      "monsters": [
        "bandit marauder"
      ]
    },
    {
      "item": "cobalt short sword",
      "type": "weapon",
      "monsters": [
        "Nethandra"
      ]
    },
    {
      "item": "fading leather pants",
      "type": "legs",
      "monsters": [
        "bandit archer"
      ]
    },
    {
      "item": "feather tufted staff",
      "type": "weapon",
      "monsters": [
        "bandit mage"
      ]
    },
    {
      "item": "gem-studded leggings",
      "type": "legs",
      "monsters": [
        "Nethandra"
      ]
    },
    {
      "item": "greatsword of the valley",
      "type": "weapon",
      "monsters": [
        "bandit raider"
      ]
    },
    {
      "item": "green and brown tunic",
      "type": "body",
      "monsters": [
        "bandit archer"
      ]
    },
    {
      "item": "heavy ebon hammer",
      "type": "weapon",
      "monsters": [
        "bandit marauder"
      ]
    },
    {
      "item": "jet black sabre",
      "type": "weapon",
      "monsters": [
        "bandit lieutenant"
      ]
    },
    {
      "item": "mastiff's collar",
      "type": "jewel",
      "monsters": [
        "black mastiff"
      ]
    },
    {
      "item": "mud encrusted dagger",
      "type": "weapon",
      "monsters": [
        "bandit mage"
      ]
    },
    {
      "item": "ogre magi staff",
      "type": "weapon",
      "monsters": [
        "bandit mage"
      ]
    },
    {
      "item": "poniard of lesser ice closely",
      "type": "weapon",
      "monsters": [
        "???"
      ]
    },
    {
      "item": "rhinocerous horn",
      "type": "material",
      "monsters": [
        "bandit captain"
      ]
    },
    {
      "item": "ruby pendant",
      "type": "jewel",
      "monsters": [
        "bandit marauder"
      ]
    },
    {
      "item": "sin cutlass",
      "type": "weapon",
      "monsters": [
        "bandit lieutenant",
        "bandit marauder"
      ]
    },
    {
      "item": "strong leather helm",
      "type": "head",
      "monsters": [
        "bandit captain"
      ]
    },
    {
      "item": "superior hunting bow",
      "type": "weapon",
      "monsters": [
        "bandit archer"
      ]
    },
    {
      "item": "superior recurved bow",
      "type": "weapon",
      "monsters": [
        "bandit captain"
      ]
    },
    {
      "item": "wooden shaft of wind",
      "type": "weapon",
      "monsters": [
        "black mastiff"
      ]
    }
  ],
  "Village of Reilyn": [
    {
      "item": "dark headband",
      "type": "head",
      "monsters": [
        "frightened woman"
      ]
    },
    {
      "item": "fenced emberstone claw",
      "type": "weapon",
      "monsters": [
        "Tamian pickpocket"
      ]
    },
    {
      "item": "fire snake scale",
      "type": "material",
      "monsters": [
        "Tamian mage"
      ]
    },
    {
      "item": "fragmented icy bayonet",
      "type": "weapon",
      "monsters": [
        "Tamian pickpocket"
      ]
    },
    {
      "item": "golden ring",
      "type": "jewel",
      "monsters": [
        "Reilyn peddler"
      ]
    },
    {
      "item": "legionnaire's grasps",
      "type": "hands",
      "monsters": [
        "drunken villager"
      ]
    },
    {
      "item": "pair of tempered boots",
      "type": "feet",
      "monsters": [
        "Tamian pickpocket"
      ]
    },
    {
      "item": "red hot dagger",
      "type": "weapon",
      "monsters": [
        "Tamian pickpocket"
      ]
    },
    {
      "item": "runewood oaken staff",
      "type": "weapon",
      "monsters": [
        "Tamian mage",
        "Tamian pickpocket",
        "tired farmer"
      ]
    },
    {
      "item": "shocking greatsword",
      "type": "weapon",
      "monsters": [
        "scared villager"
      ]
    },
    {
      "item": "silver and blue cloak",
      "type": "cloak",
      "monsters": [
        "Tamian mage",
        "Vestan cleric"
      ]
    },
    {
      "item": "silver and blue gloves",
      "type": "hands",
      "monsters": [
        "Reilyn peddler",
        "drunken villager"
      ]
    },
    {
      "item": "squire's steel chestpiece",
      "type": "body",
      "monsters": [
        "Niordian defender"
      ]
    },
    {
      "item": "stiletto of lesser flame",
      "type": "weapon",
      "monsters": [
        "Tamian mage"
      ]
    },
    {
      "item": "superior sword",
      "type": "weapon",
      "monsters": [
        "watchman"
      ]
    },
    {
      "item": "visored plate helm",
      "type": "head",
      "monsters": [
        "Reilyn peddler",
        "scared villager"
      ]
    },
    {
      "item": "warped jo staff",
      "type": "weapon",
      "monsters": [
        "Vestan cleric"
      ]
    },
    {
      "item": "woven bamboo sandals",
      "type": "feet",
      "monsters": [
        "Reilyn peddler"
      ]
    }
  ],
  "Wastes of Olmran": [
    {
      "item": "chunk of iron",
      "type": "material",
      "monsters": [
        "plains nomad"
      ]
    },
    {
      "item": "honed pair of snow walkers",
      "type": "feet",
      "monsters": [
        "orcish scavenger"
      ]
    },
    {
      "item": "inscribed leather tunic",
      "type": "body",
      "monsters": [
        "lesser worg"
      ]
    },
    {
      "item": "mercenary's bone-cracker",
      "type": "weapon",
      "monsters": [
        "wolf-rider"
      ]
    },
    {
      "item": "pair of hide cloth pants",
      "type": "feet",
      "monsters": [
        "orcish scavenger",
        "plains nomad"
      ]
    },
    {
      "item": "riveted guardsman's leggings",
      "type": "legs",
      "monsters": [
        "orcish scavenger"
      ]
    },
    {
      "item": "skull of an ogre",
      "type": "weapon",
      "monsters": [
        "greater worg"
      ]
    },
    {
      "item": "snow cat fur coat",
      "type": "body",
      "monsters": [
        "plains nomad",
        "wolf-rider"
      ]
    },
    {
      "item": "studded vest of the wastes",
      "type": "body",
      "monsters": [
        "greater worg"
      ]
    },
    {
      "item": "trailblazer's leather coif",
      "type": "head",
      "monsters": [
        "tundra-cat"
      ]
    },
    {
      "item": "tundra cat fang",
      "type": "weapon",
      "monsters": [
        "tundra-cat"
      ]
    },
    {
      "item": "war-torn drape",
      "type": "cloak",
      "monsters": [
        "wolf-rider"
      ]
    },
    {
      "item": "wolf's paw",
      "type": "jewel",
      "monsters": [
        "lesser worg"
      ]
    },
    {
      "item": "wolfhide leggings",
      "type": "legs",
      "monsters": [
        "lesser worg"
      ]
    },
    {
      "item": "wyvern scales",
      "type": "material",
      "monsters": [
        "orcish scavenger"
      ]
    }
  ],
  "Western Tamia": [
    {
      "item": "black leather gloves",
      "type": "hands",
      "monsters": [
        "guard recruit"
      ]
    },
    {
      "item": "deer-skin boots",
      "type": "feet",
      "monsters": [
        "Tamian merchant"
      ]
    },
    {
      "item": "pair of embossed leather gloves",
      "type": "hands",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pair of knee-high leather boots",
      "type": "feet",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "pair of rugged leather leggings",
      "type": "legs",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sleek leather helmet",
      "type": "head",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "small leather shield",
      "type": "shield",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "sturdy leather armor",
      "type": "body",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "well oiled longbow",
      "type": "weapon",
      "monsters": [
        "Shop"
      ]
    },
    {
      "item": "well-oiled leather cloak",
      "type": "cloak",
      "monsters": [
        "Shop"
      ]
    }
  ],
  "Abandoned Karimere Castle": [
    {
      "item": "befouled greatsword",
      "type": "weapon",
      "monsters": [
        "sin eater"
      ]
    },
    {
      "item": "conjurer's gnarled staff",
      "type": "weapon",
      "monsters": [
        "spectral demonologist"
      ]
    },
    {
      "item": "dagger of diplomacy",
      "type": "weapon",
      "monsters": [
        "karimere assassin"
      ]
    },
    {
      "item": "dark highlander's targe",
      "type": "shield",
      "monsters": [
        "karimere dark paladin"
      ]
    },
    {
      "item": "gauntlets of the fallen legion",
      "type": "hands",
      "monsters": [
        "unbound xionakan pit fiend"
      ]
    },
    {
      "item": "leather circlet of command",
      "type": "head",
      "monsters": [
        "spectral demonologist"
      ]
    },
    {
      "item": "pitiless assassin's leggings",
      "type": "legs",
      "monsters": [
        "karimere assassin"
      ]
    },
    {
      "item": "screaming heretic's unholy gauntlets",
      "type": "hands",
      "monsters": [
        "sin eater"
      ]
    },
    {
      "item": "spellbinder's crown",
      "type": "head",
      "monsters": [
        "karimere battle magi"
      ]
    },
    {
      "item": "splinted cloak of perdition",
      "type": "cloak",
      "monsters": [
        "karimere dark paladin"
      ]
    },
    {
      "item": "studded karimere riding greaves",
      "type": "legs",
      "monsters": [
        "red-robed monk"
      ]
    },
    {
      "item": "sullied crimson gauntlets",
      "type": "hands",
      "monsters": [
        "sin eater"
      ]
    },
    {
      "item": "wand of the war mage",
      "type": "weapon",
      "monsters": [
        "karimere battle magi"
      ]
    },
    {
      "item": "whispering ringmail coif",
      "type": "head",
      "monsters": [
        "unbound xionakan pit fiend"
      ]
    },
    {
      "item": "wraps of the master",
      "type": "hands",
      "monsters": [
        "red-robed monk"
      ]
    }
  ],
  "Acheronian Keep": [
    {
      "item": "Acheronian sigil",
      "type": "jewel",
      "monsters": [
        "black robed warlock guard"
      ]
    },
    {
      "item": "Alchemist's glass eye",
      "type": "jewel",
      "monsters": [
        "Mad Alchemist, Alberich"
      ]
    },
    {
      "item": "black blade of forbidden arts",
      "type": "weapon",
      "monsters": [
        "featureless jail keeper"
      ]
    },
    {
      "item": "black veil",
      "type": "head",
      "monsters": [
        "black masked torturer"
      ]
    },
    {
      "item": "blood drenched dagger",
      "type": "weapon",
      "monsters": [
        "black masked torturer"
      ]
    },
    {
      "item": "bolt of lightning",
      "type": "material",
      "monsters": [
        "black robed warlock guard"
      ]
    },
    {
      "item": "cap of clear sight",
      "type": "head",
      "monsters": [
        "Mad Alchemist, Alberich"
      ]
    },
    {
      "item": "ethereal liquid longstaff",
      "type": "weapon",
      "monsters": [
        "Mad Alchemist, Alberich"
      ]
    },
    {
      "item": "ghastly golden hands",
      "type": "hands",
      "monsters": [
        "black robed jail guard"
      ]
    },
    {
      "item": "ghastly staff of nightfall",
      "type": "weapon",
      "monsters": [
        "black robed warlock guard"
      ]
    },
    {
      "item": "ghost-forged sabatons of hatred",
      "type": "feet",
      "monsters": [
        "featureless jail keeper"
      ]
    },
    {
      "item": "halberd of midnight",
      "type": "weapon",
      "monsters": [
        "black robed jail guard"
      ]
    },
    {
      "item": "kris of depravity",
      "type": "weapon",
      "monsters": [
        "master of pain"
      ]
    },
    {
      "item": "misty reinforced treads",
      "type": "feet",
      "monsters": [
        "featureless jail keeper"
      ]
    },
    {
      "item": "onyx headed greathammer",
      "type": "weapon",
      "monsters": [
        "black robed jail guard"
      ]
    },
    {
      "item": "phantom quilted boots of the oracle",
      "type": "feet",
      "monsters": [
        "master of pain"
      ]
    },
    {
      "item": "pitchblack pair of nightrider gloves",
      "type": "hands",
      "monsters": [
        "featureless jail keeper"
      ]
    },
    {
      "item": "sceptre of the unholy",
      "type": "weapon",
      "monsters": [
        "featureless jail keeper"
      ]
    },
    {
      "item": "singed leather headband",
      "type": "head",
      "monsters": [
        "master of pain"
      ]
    },
    {
      "item": "soul-cursed greatstaff",
      "type": "weapon",
      "monsters": [
        "master of pain"
      ]
    },
    {
      "item": "studded black pants of pain",
      "type": "legs",
      "monsters": [
        "master of pain"
      ]
    },
    {
      "item": "studded drape of suffering",
      "type": "cloak",
      "monsters": [
        "black robed jail guard"
      ]
    },
    {
      "item": "torturer's bladed gauntlets",
      "type": "weapon",
      "monsters": [
        "black masked torturer"
      ]
    },
    {
      "item": "torturer's fingers",
      "type": "hands",
      "monsters": [
        "black masked torturer"
      ]
    },
    {
      "item": "visage of demise",
      "type": "head",
      "monsters": [
        "black robed jail guard"
      ]
    }
  ],
  "Allorien": [
    {
      "item": "ancient elven lucerne hammer",
      "type": "weapon",
      "monsters": [
        "allorien royal knight"
      ]
    },
    {
      "item": "assassin's contract",
      "type": "jewel",
      "monsters": [
        "cold-blooded murderer"
      ]
    },
    {
      "item": "audacious swashbuckler leggings",
      "type": "legs",
      "monsters": [
        "dark hooded mercenary"
      ]
    },
    {
      "item": "beastmaster's studded cowl",
      "type": "head",
      "monsters": [
        "allorien lion"
      ]
    },
    {
      "item": "cloak of arcane puissance",
      "type": "cloak",
      "monsters": [
        "allorien wizard"
      ]
    },
    {
      "item": "dark pair of wetwork gloves",
      "type": "hands",
      "monsters": [
        "cold-blooded murderer"
      ]
    },
    {
      "item": "dusty gargoyle treads",
      "type": "feet",
      "monsters": [
        "sapphire allorien gargoyle"
      ]
    },
    {
      "item": "elegant allorien curved blade",
      "type": "weapon",
      "monsters": [
        "allorien elite sentinel"
      ]
    },
    {
      "item": "engraved guardian's pike",
      "type": "weapon",
      "monsters": [
        "allorien elite guard"
      ]
    },
    {
      "item": "forest sentinel brigandine",
      "type": "body",
      "monsters": [
        "mouted allorien sharpshooter"
      ]
    },
    {
      "item": "gilded elven platemail",
      "type": "body",
      "monsters": [
        "allorien elite guard"
      ]
    },
    {
      "item": "houndmaster's spaulders cloak",
      "type": "cloak",
      "monsters": [
        "pack of allorien castle hounds"
      ]
    },
    {
      "item": "knight captain's battlestaff",
      "type": "weapon",
      "monsters": [
        "allorien guardian"
      ]
    },
    {
      "item": "lionheart blade",
      "type": "weapon",
      "monsters": [
        "allorien lion"
      ]
    },
    {
      "item": "mark of vigilance",
      "type": "jewel",
      "monsters": [
        "allorien guardian"
      ]
    },
    {
      "item": "mastercrafted sapphire hand crossbow",
      "type": "weapon",
      "monsters": [
        "sapphire allorien gargoyle"
      ]
    },
    {
      "item": "mirror-polished articulated cuisses",
      "type": "legs",
      "monsters": [
        "allorien royal knight"
      ]
    },
    {
      "item": "moonlight-stitched shadowsilk robes",
      "type": "body",
      "monsters": [
        "allorien philosopher"
      ]
    },
    {
      "item": "philosopher's stone",
      "type": "jewel",
      "monsters": [
        "allorien philosopher"
      ]
    },
    {
      "item": "ranger knight's recurve bow",
      "type": "weapon",
      "monsters": [
        "mouted allorien sharpshooter"
      ]
    },
    {
      "item": "razor-sharp duelist's rapier",
      "type": "weapon",
      "monsters": [
        "dark hooded mercenary rogue"
      ]
    },
    {
      "item": "sapphire shield of tears",
      "type": "shield",
      "monsters": [
        "sapphire Allorien phantom knight"
      ]
    },
    {
      "item": "scepter of the still sands",
      "type": "weapon",
      "monsters": [
        "one-eyed vagabond"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "pack of allorien castle hounds"
      ]
    },
    {
      "item": "spectral warhammer",
      "type": "weapon",
      "monsters": [
        "sapphire allorien phantom knight"
      ]
    },
    {
      "item": "staff of the arch-magi",
      "type": "weapon",
      "monsters": [
        "allorien wizard"
      ]
    },
    {
      "item": "storm-threaded breeches",
      "type": "legs",
      "monsters": [
        "pack of allorien castle hounds"
      ]
    },
    {
      "item": "swatch of silk",
      "type": "material",
      "monsters": [
        "allorien philosopher"
      ]
    },
    {
      "item": "sword of the old one",
      "type": "weapon",
      "monsters": [
        "sapphire allorien gargoyle"
      ]
    },
    {
      "item": "vagabond's eyepatch",
      "type": "head",
      "monsters": [
        "one-eyed vagabond"
      ]
    },
    {
      "item": "vagabond's sharpened stick",
      "type": "weapon",
      "monsters": [
        "one-eyed vagabond"
      ]
    },
    {
      "item": "winged helm of nobility",
      "type": "head",
      "monsters": [
        "allorien elite sentinel"
      ]
    }
  ],
  "Ancient Crystalline Mines of Fala": [
    {
      "item": "emerald-studded skullcap",
      "type": "head",
      "monsters": [
        "enraged slave spirit"
      ]
    },
    {
      "item": "formed crystal wolf paw",
      "type": "weapon",
      "monsters": [
        "shimmering amethyst direwolf"
      ]
    },
    {
      "item": "garb of tormented elements",
      "type": "body",
      "monsters": [
        "ancient elemental nightmare"
      ]
    },
    {
      "item": "gem-encrusted gloves of acuity",
      "type": "hands",
      "monsters": [
        "crystal titan"
      ]
    },
    {
      "item": "humming elemental sling",
      "type": "weapon",
      "monsters": [
        "ancient elemental nightmare"
      ]
    },
    {
      "item": "lupine amethyst warboots",
      "type": "feet",
      "monsters": [
        "shimmering amethyst direwolf"
      ]
    },
    {
      "item": "massive corundum maul",
      "type": "weapon",
      "monsters": [
        "crystal titan"
      ]
    },
    {
      "item": "pair of jagged crystal knives",
      "type": "weapon",
      "monsters": [
        "enraged slave spirit"
      ]
    },
    {
      "item": "ring of shadows",
      "type": "jewel",
      "monsters": [
        "shadow crystal hydra"
      ]
    },
    {
      "item": "shadowhide ringmail greaves",
      "type": "legs",
      "monsters": [
        "shadow crystal hydra"
      ]
    },
    {
      "item": "shroud of the direwolf",
      "type": "cloak",
      "monsters": [
        "shimmering amethyst direwolf"
      ]
    },
    {
      "item": "smoking sword of shadows",
      "type": "weapon",
      "monsters": [
        "shadow crystal hydra"
      ]
    }
  ],
  "Azure Rainforest": [
    {
      "item": "azure staff",
      "type": "weapon",
      "monsters": [
        "large snapping turtle"
      ]
    },
    {
      "item": "barbarian's cap",
      "type": "head",
      "monsters": [
        "boar"
      ]
    },
    {
      "item": "faded brown robes",
      "type": "body",
      "monsters": [
        "gorilla",
        "hippopotamus"
      ]
    },
    {
      "item": "military chestpiece",
      "type": "body",
      "monsters": [
        "gorilla"
      ]
    },
    {
      "item": "pair of rustbound gauntlets",
      "type": "hands",
      "monsters": [
        "large snapping turtle"
      ]
    },
    {
      "item": "red hot dagger",
      "type": "weapon",
      "monsters": [
        "rhinoceros"
      ]
    },
    {
      "item": "rough salamander skin gloves",
      "type": "hands",
      "monsters": [
        "hippopotamus"
      ]
    },
    {
      "item": "silver nugget",
      "type": "material",
      "monsters": [
        "large snapping turtle"
      ]
    },
    {
      "item": "spidersilk hood",
      "type": "head",
      "monsters": [
        "large black spider"
      ]
    },
    {
      "item": "switchblade of lesser torment",
      "type": "weapon",
      "monsters": [
        "rhinoceros"
      ]
    },
    {
      "item": "tidal short bow",
      "type": "weapon",
      "monsters": [
        "large snapping turtle"
      ]
    },
    {
      "item": "wooden shield",
      "type": "shield",
      "monsters": [
        "gorilla",
        "rhinoceros"
      ]
    }
  ],
  "Bladegrass": [
    {
      "item": "deadman's cleaver",
      "type": "weapon",
      "monsters": [
        "large, grey tortoise"
      ]
    },
    {
      "item": "feathered longbow",
      "type": "weapon",
      "monsters": [
        "large, grey tortoise"
      ]
    },
    {
      "item": "fine two-handed axe",
      "type": "weapon",
      "monsters": [
        "armadillo"
      ]
    },
    {
      "item": "sparking dagger",
      "type": "weapon",
      "monsters": [
        "yellow bee"
      ]
    },
    {
      "item": "turtle shell",
      "type": "material",
      "monsters": [
        "large, grey tortoise"
      ]
    },
    {
      "item": "visored plate helm",
      "type": "head",
      "monsters": [
        "gopher",
        "yellow bee"
      ]
    },
    {
      "item": "yellowjacket stinger claw",
      "type": "weapon",
      "monsters": []
    }
  ],
  "Carendel": [
    {
      "item": "azure jewel encrusted gavel",
      "type": "weapon",
      "monsters": [
        "jungle explorer"
      ]
    },
    {
      "item": "pile of leather",
      "type": "material",
      "monsters": [
        "leather dealer"
      ]
    },
    {
      "item": "sturdy iron helm",
      "type": "head",
      "monsters": [
        "master craftsman"
      ]
    },
    {
      "item": "superior hand crossbow",
      "type": "weapon",
      "monsters": [
        "master craftsman"
      ]
    },
    {
      "item": "swatch of rough wool",
      "type": "material",
      "monsters": [
        "cloth dealer"
      ]
    },
    {
      "item": "yard of maple",
      "type": "material",
      "monsters": [
        "master craftsman"
      ]
    }
  ],
  "Carendel Nobles Graveyard": [
    {
      "item": "bent fey shard",
      "type": "weapon",
      "monsters": [
        "grieving imp widow"
      ]
    },
    {
      "item": "burning sword",
      "type": "weapon",
      "monsters": [
        "grieving imp widow"
      ]
    },
    {
      "item": "dagger of the druid",
      "type": "weapon",
      "monsters": [
        "caretaker's wife",
        "grieving zombie widower"
      ]
    },
    {
      "item": "fragmented icy scimitar",
      "type": "weapon",
      "monsters": [
        "wriggling maggot"
      ]
    },
    {
      "item": "golden battleaxe",
      "type": "weapon",
      "monsters": [
        "grieving imp widow"
      ]
    },
    {
      "item": "legionnaire's grasps",
      "type": "hands",
      "monsters": [
        "grieving zombie widower"
      ]
    },
    {
      "item": "mud-caked knuckles",
      "type": "weapon",
      "monsters": [
        "graverobber"
      ]
    },
    {
      "item": "pair of blue silk boots",
      "type": "feet",
      "monsters": [
        "dark tamian priest"
      ]
    },
    {
      "item": "pitch-black ranseur",
      "type": "weapon",
      "monsters": [
        "caretaker's wife"
      ]
    },
    {
      "item": "runewood oaken staff",
      "type": "weapon",
      "monsters": [
        "caretaker's wife"
      ]
    },
    {
      "item": "small silver locket",
      "type": "jewel",
      "monsters": [
        "grieving zombie widower"
      ]
    },
    {
      "item": "squire's chestpiece",
      "type": "body",
      "monsters": [
        "grieving zombie widower"
      ]
    },
    {
      "item": "strong leather chest piece",
      "type": "body",
      "monsters": [
        "dark tamian priest"
      ]
    },
    {
      "item": "superior short bow",
      "type": "weapon",
      "monsters": [
        "deranged caretaker"
      ]
    },
    {
      "item": "worn leather chaps",
      "type": "legs",
      "monsters": [
        "murdering gravedigger"
      ]
    }
  ],
  "Carendel Potter's Field": [
    {
      "item": "apothecary spellstaff",
      "type": "weapon",
      "monsters": [
        "creeping hand"
      ]
    },
    {
      "item": "azure ringmail leggings",
      "type": "legs",
      "monsters": [
        "murdering gravedigger"
      ]
    },
    {
      "item": "black bladed dagger",
      "type": "weapon",
      "monsters": [
        "creeping hand"
      ]
    },
    {
      "item": "black leather cap",
      "type": "head",
      "monsters": [
        "skunk"
      ]
    },
    {
      "item": "gravedigger shovel",
      "type": "weapon",
      "monsters": [
        "murdering gravedigger"
      ]
    },
    {
      "item": "jagged scimitar",
      "type": "weapon",
      "monsters": [
        "cantankerous pall bearer"
      ]
    },
    {
      "item": "pair of cloth boots",
      "type": "feet",
      "monsters": [
        "drunken, lazy gravedigger"
      ]
    },
    {
      "item": "pair of cloth gloves",
      "type": "hands",
      "monsters": [
        "cantankerous pall bearer"
      ]
    },
    {
      "item": "pair of plate greaves",
      "type": "legs",
      "monsters": [
        "cantankerous pall bearer",
        "drunken, lazy gravedigger"
      ]
    },
    {
      "item": "pikeman's spear",
      "type": "weapon",
      "monsters": [
        "creeping hand"
      ]
    },
    {
      "item": "silver and blue cloak",
      "type": "cloak",
      "monsters": [
        "murdering gravedigger"
      ]
    },
    {
      "item": "spidersilk skirt",
      "type": "legs",
      "monsters": [
        "skunk"
      ]
    },
    {
      "item": "war hammer",
      "type": "weapon",
      "monsters": [
        "murdering gravedigger"
      ]
    },
    {
      "item": "wooden club",
      "type": "weapon",
      "monsters": [
        "creeping hand"
      ]
    },
    {
      "item": "worn leather chaps",
      "type": "legs",
      "monsters": [
        "drunken, lazy gravedigger",
        "skunk"
      ]
    }
  ],
  "Cavern of Shadows": [
    {
      "item": "aural gauntlets",
      "type": "hands",
      "monsters": [
        "lesser balrog"
      ]
    },
    {
      "item": "claymore of the colossus",
      "type": "weapon",
      "monsters": [
        "mangy minotaur brute"
      ]
    },
    {
      "item": "cloth boots of thunder",
      "type": "feet",
      "monsters": [
        "greater balrog"
      ]
    },
    {
      "item": "deformed pitchblack scimitar",
      "type": "weapon",
      "monsters": [
        "fuming manticore"
      ]
    },
    {
      "item": "drakurat titan maul",
      "type": "weapon",
      "monsters": [
        "hunchback minotaur warrior"
      ]
    },
    {
      "item": "flanged Dwarven war-cudgel",
      "type": "weapon",
      "monsters": [
        "mangy minotaur brute"
      ]
    },
    {
      "item": "great minotaur cleaver",
      "type": "weapon",
      "monsters": [
        "mottled minotaur warlord"
      ]
    },
    {
      "item": "jade eagletalon cloak",
      "type": "cloak",
      "monsters": [
        "fuming manticore"
      ]
    },
    {
      "item": "manticore's leather greaves",
      "type": "legs",
      "monsters": [
        "fuming manticore"
      ]
    },
    {
      "item": "murky grey fur",
      "type": "cloak",
      "monsters": [
        "lesser balrog"
      ]
    },
    {
      "item": "plated minotaur helm",
      "type": "head",
      "monsters": [
        "hunchback minotaur warrior"
      ]
    },
    {
      "item": "proud greaves of protection",
      "type": "legs",
      "monsters": [
        "mottled minotaur warlord"
      ]
    },
    {
      "item": "ringmail gauntlets of dawn",
      "type": "hands",
      "monsters": [
        "lesser balrog"
      ]
    },
    {
      "item": "rough minotaur robes",
      "type": "body",
      "monsters": [
        "crazed minotaur nomad"
      ]
    },
    {
      "item": "sparkling gem",
      "type": "material",
      "monsters": [
        "mangy minotaur brute"
      ]
    },
    {
      "item": "staff of desert wind",
      "type": "weapon",
      "monsters": [
        "crazed minotaur nomad"
      ]
    },
    {
      "item": "staff of the shade",
      "type": "weapon",
      "monsters": [
        "lesser balrog"
      ]
    },
    {
      "item": "studded minotaur shroud",
      "type": "cloak",
      "monsters": [
        "crazed minotaur nomad"
      ]
    },
    {
      "item": "tears of the minotaur",
      "type": "jewel",
      "monsters": [
        "hunchback minotaur warrior"
      ]
    },
    {
      "item": "troll-demon's manslayer",
      "type": "weapon",
      "monsters": [
        "greater balrog"
      ]
    },
    {
      "item": "twisted arcane treads",
      "type": "feet",
      "monsters": [
        "greater balrog"
      ]
    },
    {
      "item": "warlord's leather greaves",
      "type": "feet",
      "monsters": [
        "mottled minotaur warlord"
      ]
    }
  ],
  "Chasmanic Swamp": [
    {
      "item": "blade of solid water",
      "type": "weapon",
      "monsters": [
        "serpentine marsh dart'r"
      ]
    },
    {
      "item": "blood red boots of the vulture",
      "type": "feet",
      "monsters": [
        "vampir'icm'oss"
      ]
    },
    {
      "item": "cloak of fallen stars",
      "type": "cloak",
      "monsters": [
        "swamp creeping wyn'dlass"
      ]
    },
    {
      "item": "corrosive sword of the swamp",
      "type": "weapon",
      "monsters": [
        "corrosive lash'wort vine"
      ]
    },
    {
      "item": "crestfallen barbute",
      "type": "head",
      "monsters": [
        "vampir'icm'oss"
      ]
    },
    {
      "item": "deformed elemental horror's sceptre",
      "type": "weapon",
      "monsters": [
        "outcast gr'ung"
      ]
    },
    {
      "item": "dreadclaw of the swamp",
      "type": "weapon",
      "monsters": [
        "outcast gr'ung"
      ]
    },
    {
      "item": "flask of volatile oil",
      "type": "material",
      "monsters": [
        "primeval thick scaled werecroc"
      ]
    },
    {
      "item": "footsteps of malady",
      "type": "feet",
      "monsters": [
        "outcast gr'ung"
      ]
    },
    {
      "item": "incorruptible studded cuirass",
      "type": "body",
      "monsters": [
        "al'quild'ir"
      ]
    },
    {
      "item": "legguards of eternal night",
      "type": "legs",
      "monsters": [
        "outcast gr'ung"
      ]
    },
    {
      "item": "legplates of the shifter",
      "type": "legs",
      "monsters": [
        "primeval thick scaled werecroc"
      ]
    },
    {
      "item": "magic-warped cowl",
      "type": "head",
      "monsters": [
        "twi'lite star"
      ]
    },
    {
      "item": "mud-stained wayfarer's boots",
      "type": "feet",
      "monsters": [
        "serpentine marsh dart'r"
      ]
    },
    {
      "item": "pair of scarskin gloves",
      "type": "hands",
      "monsters": [
        "ravenous giant mag'leech"
      ]
    },
    {
      "item": "primeval werecroc hide armor",
      "type": "body",
      "monsters": [
        "primeval thick scaled werecroc"
      ]
    },
    {
      "item": "shaft of dying light",
      "type": "weapon",
      "monsters": [
        "twi'lite star"
      ]
    },
    {
      "item": "shield of meshed vines",
      "type": "shield",
      "monsters": [
        "swamp creeping wyn'dlass"
      ]
    },
    {
      "item": "toad skin cloak",
      "type": "cloak",
      "monsters": [
        "bullywug"
      ]
    },
    {
      "item": "twisted vine medallion",
      "type": "jewel",
      "monsters": [
        "corrosive lash'wort vine"
      ]
    },
    {
      "item": "venom-dipped bullywug spear",
      "type": "weapon",
      "monsters": [
        "bullywug"
      ]
    },
    {
      "item": "warcaster's leggings",
      "type": "legs",
      "monsters": [
        "outcast gr'ung"
      ]
    },
    {
      "item": "wretched blood-infused mutilator",
      "type": "weapon",
      "monsters": [
        "ravenous giant mag'leech"
      ]
    },
    {
      "item": "yarubian disciple leggings",
      "type": "legs",
      "monsters": [
        "al'quild'ir"
      ]
    }
  ],
  "Chiligulla Mountains": [
    {
      "item": "amulet of warding",
      "type": "jewel",
      "monsters": [
        "village female",
        "village male"
      ]
    },
    {
      "item": "ancestral greatsword",
      "type": "weapon",
      "monsters": [
        "village male"
      ]
    },
    {
      "item": "brand of black ice",
      "type": "weapon",
      "monsters": [
        "mountain ewe"
      ]
    },
    {
      "item": "cobra head rod",
      "type": "weapon",
      "monsters": [
        "mountain cobra"
      ]
    },
    {
      "item": "cobrafang crossbow",
      "type": "weapon",
      "monsters": [
        "large rock cobra"
      ]
    },
    {
      "item": "dusty chestplate of scrap metal",
      "type": "body",
      "monsters": [
        "village male"
      ]
    },
    {
      "item": "dusty snakeskin boots",
      "type": "feet",
      "monsters": [
        "large rock cobra"
      ]
    },
    {
      "item": "ethereal phoenix boots",
      "type": "feet",
      "monsters": [
        "village hunter"
      ]
    },
    {
      "item": "gian ram horn",
      "type": "weapon",
      "monsters": [
        "giant Chiligullian ram"
      ]
    },
    {
      "item": "hauberk of dawn",
      "type": "body",
      "monsters": [
        "village male"
      ]
    },
    {
      "item": "heavy wool mountain cap",
      "type": "head",
      "monsters": [
        "mountain ewe"
      ]
    },
    {
      "item": "helmet of lost legends",
      "type": "head",
      "monsters": [
        "village hunter"
      ]
    },
    {
      "item": "huntmaster's sling",
      "type": "weapon",
      "monsters": [
        "Chiligullian huntmaster"
      ]
    },
    {
      "item": "leggings of the starbloom",
      "type": "legs",
      "monsters": [
        "village female"
      ]
    },
    {
      "item": "massive gore splattered claymore",
      "type": "weapon",
      "monsters": [
        "Chiligullian huntmaster"
      ]
    },
    {
      "item": "pair of curved eagle claws",
      "type": "hands",
      "monsters": [
        "village hunter"
      ]
    },
    {
      "item": "pair of silentleaf razored leggings",
      "type": "legs",
      "monsters": [
        "village hunter"
      ]
    },
    {
      "item": "pound of steel",
      "type": "material",
      "monsters": [
        "village male"
      ]
    },
    {
      "item": "shepherd's insignia",
      "type": "jewel",
      "monsters": [
        "mountain ewe"
      ]
    },
    {
      "item": "sinister venom-laced spiked boots",
      "type": "feet",
      "monsters": [
        "mountain cobra"
      ]
    },
    {
      "item": "skeletal dragon bone",
      "type": "material",
      "monsters": [
        "Chiligullian huntmaster"
      ]
    },
    {
      "item": "small, Fury-elf hat",
      "type": "head",
      "monsters": [
        "giant Chiligullian ram"
      ]
    },
    {
      "item": "stalker's leather buckler",
      "type": "shield",
      "monsters": [
        "Chiligullian huntmaster"
      ]
    },
    {
      "item": "tunic of solitude",
      "type": "body",
      "monsters": [
        "giant Chiligullian ram"
      ]
    },
    {
      "item": "twisted yew branch",
      "type": "weapon",
      "monsters": [
        "village female"
      ]
    },
    {
      "item": "vinewrapped bow of Vu'Du",
      "type": "weapon",
      "monsters": [
        "mountain snake"
      ]
    }
  ],
  "Chui Rainforest": [
    {
      "item": "barbed dart",
      "type": "weapon",
      "monsters": [
        "howler monkey"
      ]
    },
    {
      "item": "cape of black feathers",
      "type": "cloak",
      "monsters": [
        "black macaw"
      ]
    },
    {
      "item": "chameleon skin shroud",
      "type": "head",
      "monsters": [
        "wood sprite"
      ]
    },
    {
      "item": "dark dagger",
      "type": "weapon",
      "monsters": [
        "pygmy medicine man"
      ]
    },
    {
      "item": "delicate lace gloves",
      "type": "hands",
      "monsters": [
        "black macaw"
      ]
    },
    {
      "item": "dirk of the clouds",
      "type": "weapon",
      "monsters": [
        "cloud leopard"
      ]
    },
    {
      "item": "eel-skin vest",
      "type": "body",
      "monsters": [
        "translucent water nymph"
      ]
    },
    {
      "item": "finely-crafted golden elven spear",
      "type": "weapon",
      "monsters": [
        "mist druid"
      ]
    },
    {
      "item": "fists of the lake",
      "type": "weapon",
      "monsters": [
        "translucent water nymph"
      ]
    },
    {
      "item": "flaming beak",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "freshly molted skin",
      "type": "legs",
      "monsters": [
        "albino anaconda"
      ]
    },
    {
      "item": "headgear of the leopards",
      "type": "head",
      "monsters": [
        "cloud leopard"
      ]
    },
    {
      "item": "headhunter's swift spear",
      "type": "weapon",
      "monsters": [
        "pygmi headhunter"
      ]
    },
    {
      "item": "heavy woven canopy cloak",
      "type": "cloak",
      "monsters": [
        "pygmi headhunter"
      ]
    },
    {
      "item": "hooked flameblade",
      "type": "weapon",
      "monsters": [
        "blue-nosed skink"
      ]
    },
    {
      "item": "ivory leather gloves",
      "type": "hands",
      "monsters": [
        "albino anaconda"
      ]
    },
    {
      "item": "mist willow leaf",
      "type": "material",
      "monsters": [
        "mist willow"
      ]
    },
    {
      "item": "morning star of flame",
      "type": "weapon",
      "monsters": [
        "flaming hornbill"
      ]
    },
    {
      "item": "necklance of crystallized dew",
      "type": "jewel",
      "monsters": [
        "dancing water sprite"
      ]
    },
    {
      "item": "pair of banished striders",
      "type": "feet",
      "monsters": [
        "blue-nosed skink"
      ]
    },
    {
      "item": "pants of speed",
      "type": "legs",
      "monsters": [
        "cloud leopard"
      ]
    },
    {
      "item": "resillient hood",
      "type": "head",
      "monsters": [
        "giant condor"
      ]
    },
    {
      "item": "spear of the mists",
      "type": "weapon",
      "monsters": [
        "mist druid"
      ]
    },
    {
      "item": "speckled hide",
      "type": "body",
      "monsters": [
        "silver-backed howled monkey"
      ]
    },
    {
      "item": "tunic of emerald leaves",
      "type": "body",
      "monsters": [
        "black wood nymph"
      ]
    },
    {
      "item": "whispering staff of the waterfall",
      "type": "weapon",
      "monsters": [
        "elusive nymph of the waterfall"
      ]
    },
    {
      "item": "willowbark shield",
      "type": "shield",
      "monsters": [
        "mist willow"
      ]
    },
    {
      "item": "wolfhide leggings",
      "type": "legs",
      "monsters": [
        "pygmi headhunter"
      ]
    }
  ],
  "Chui Savanna": [
    {
      "item": "apex hunter's greathammer",
      "type": "weapon",
      "monsters": [
        "baby tyranosarus"
      ]
    },
    {
      "item": "breeze leggings",
      "type": "legs",
      "monsters": [
        "gnoll poacher"
      ]
    },
    {
      "item": "buckler of the golden baboon",
      "type": "shield",
      "monsters": [
        "golden baboon"
      ]
    },
    {
      "item": "cheetah hide",
      "type": "cloak",
      "monsters": [
        "sleek cheetah"
      ]
    },
    {
      "item": "club of ivory",
      "type": "weapon",
      "monsters": [
        "Karimere white rhino"
      ]
    },
    {
      "item": "crushing stampede",
      "type": "weapon",
      "monsters": [
        "Karimere zebra"
      ]
    },
    {
      "item": "dragonhorn double-crossbow",
      "type": "weapon",
      "monsters": [
        "gnoll poacher"
      ]
    },
    {
      "item": "engraved hide robes",
      "type": "body",
      "monsters": [
        "Chui giraffe"
      ]
    },
    {
      "item": "golden glaive",
      "type": "weapon",
      "monsters": [
        "golden baboon"
      ]
    },
    {
      "item": "golden lion-fanged axe",
      "type": "weapon",
      "monsters": [
        "hunting lioness"
      ]
    },
    {
      "item": "great helm of the mantis",
      "type": "head",
      "monsters": [
        "great mantis"
      ]
    },
    {
      "item": "greatsword of blazing speed",
      "type": "weapon",
      "monsters": [
        "sleek cheetah"
      ]
    },
    {
      "item": "handful of scales",
      "type": "material",
      "monsters": [
        "hunting lioness"
      ]
    },
    {
      "item": "leggings of the great monkey",
      "type": "legs",
      "monsters": [
        "golden baboon"
      ]
    },
    {
      "item": "mantis carapace leggings",
      "type": "legs",
      "monsters": [
        "great mantis"
      ]
    },
    {
      "item": "mantis wing boots",
      "type": "feet",
      "monsters": [
        "giant mantis"
      ]
    },
    {
      "item": "ostrich feather handwraps",
      "type": "hands",
      "monsters": [
        "foul-tempered ostrich"
      ]
    },
    {
      "item": "ostrich feather slippers of arcane prowess",
      "type": "feet",
      "monsters": [
        "foul-tempered ostrich"
      ]
    },
    {
      "item": "razored hunting spear",
      "type": "weapon",
      "monsters": [
        "hunting lioness"
      ]
    },
    {
      "item": "reinforced leather gloves",
      "type": "hands",
      "monsters": [
        "gnoll poacher"
      ]
    },
    {
      "item": "rhino hide gloves",
      "type": "hands",
      "monsters": [
        "Karimere white rhino"
      ]
    },
    {
      "item": "scrap of suede",
      "type": "material",
      "monsters": [
        "hunting lioness"
      ]
    },
    {
      "item": "seeker's horned helmet",
      "type": "head",
      "monsters": [
        "gnoll poacher"
      ]
    },
    {
      "item": "shard of a meteor",
      "type": "weapon",
      "monsters": [
        "young triceratops"
      ]
    },
    {
      "item": "spotted hide pants",
      "type": "legs",
      "monsters": [
        "Chui giraffe"
      ]
    },
    {
      "item": "striped hide cape",
      "type": "cloak",
      "monsters": [
        "Karimere zebra"
      ]
    },
    {
      "item": "striped leggings of strength",
      "type": "legs",
      "monsters": [
        "Karimere zebra"
      ]
    },
    {
      "item": "triceratops skull helmet",
      "type": "head",
      "monsters": [
        "young triceratops"
      ]
    },
    {
      "item": "tyranotreads of violence",
      "type": "feet",
      "monsters": [
        "baby tyranosarus"
      ]
    },
    {
      "item": "vestan mesh coif",
      "type": "head",
      "monsters": [
        "golden baboon"
      ]
    }
  ],
  "Crescent Moon Gorge": [
    {
      "item": "bar of iron",
      "type": "material",
      "monsters": [
        "barbarian blacksmith"
      ]
    },
    {
      "item": "barbarian's plated hauberk",
      "type": "body",
      "monsters": [
        "barbarian leader"
      ]
    },
    {
      "item": "bludgeon of the forgotten flame",
      "type": "weapon",
      "monsters": [
        "barbarian leader"
      ]
    },
    {
      "item": "brawler's harness",
      "type": "head",
      "monsters": [
        "barbarian brawler"
      ]
    },
    {
      "item": "brawler's spiked knuckles",
      "type": "weapon",
      "monsters": [
        "barbarian brawler"
      ]
    },
    {
      "item": "carved mammoth-horn bow",
      "type": "weapon",
      "monsters": [
        "barbarian shaman"
      ]
    },
    {
      "item": "carved Va'Salka wood dart gun",
      "type": "weapon",
      "monsters": [
        "ragged chameleon exile"
      ]
    },
    {
      "item": "champion's great axe",
      "type": "weapon",
      "monsters": [
        "barbarian champion"
      ]
    },
    {
      "item": "crocodile tear",
      "type": "material",
      "monsters": [
        "barbarian shaman"
      ]
    },
    {
      "item": "darkforged blade",
      "type": "weapon",
      "monsters": [
        "barbarian blacksmith"
      ]
    },
    {
      "item": "earthforged legplates",
      "type": "legs",
      "monsters": [
        "rock wyrm"
      ]
    },
    {
      "item": "fistwraps of the fight",
      "type": "hands",
      "monsters": [
        "barbarian brawler"
      ]
    },
    {
      "item": "frozen stalagmite brand",
      "type": "weapon",
      "monsters": [
        "ragged chameleon exile"
      ]
    },
    {
      "item": "gladiator's cruel dominance drape",
      "type": "cloak",
      "monsters": [
        "barbarian gladiator"
      ]
    },
    {
      "item": "gryphon-crested black grasps",
      "type": "hands",
      "monsters": [
        "barbarian champion"
      ]
    },
    {
      "item": "horseman plated helm",
      "type": "head",
      "monsters": [
        "barbarian leader"
      ]
    },
    {
      "item": "leather sandals of the gorge",
      "type": "feet",
      "monsters": [
        "barbarian warrior"
      ]
    },
    {
      "item": "ringmail cloak of dawn",
      "type": "cloak",
      "monsters": [
        "ragged chameleon exile"
      ]
    },
    {
      "item": "ringmail greaves of dawn",
      "type": "legs",
      "monsters": [
        "barbarian blacksmith"
      ]
    },
    {
      "item": "rock wyrm talon",
      "type": "weapon",
      "monsters": [
        "rock wyrm"
      ]
    },
    {
      "item": "rough sun-dried leather armor",
      "type": "body",
      "monsters": [
        "ragged chameleon exile"
      ]
    },
    {
      "item": "silver legguards of storms",
      "type": "legs",
      "monsters": [
        "barbarian warrior"
      ]
    },
    {
      "item": "silver star crest",
      "type": "jewel",
      "monsters": [
        "barbarian brawler",
        "barbarian shaman"
      ]
    },
    {
      "item": "slick black leather armor",
      "type": "body",
      "monsters": [
        "barbarian gladiator"
      ]
    },
    {
      "item": "string of prayer beads",
      "type": "jewel",
      "monsters": [
        "barbarian shaman"
      ]
    },
    {
      "item": "tribal cloth gloves",
      "type": "hands",
      "monsters": [
        "ragged chameleon exile"
      ]
    },
    {
      "item": "wyrm hide helmet",
      "type": "head",
      "monsters": [
        "rock wyrm"
      ]
    }
  ],
  "Crystal Towers of Fala": [
    {
      "item": "battlehammer of devastation",
      "type": "weapon",
      "monsters": [
        "darkened geodic antipaladin"
      ]
    },
    {
      "item": "blue icicle",
      "type": "material",
      "monsters": [
        "blue calcite chimera"
      ]
    },
    {
      "item": "calcite greatsword",
      "type": "weapon",
      "monsters": [
        "blue calcite chimera"
      ]
    },
    {
      "item": "crystal cloak",
      "type": "cloak",
      "monsters": [
        "crystal quartz hound"
      ]
    },
    {
      "item": "crystal-forged faceguard",
      "type": "head",
      "monsters": [
        "darkened geodic antipaladin"
      ]
    },
    {
      "item": "crystal-tipped crossbow",
      "type": "weapon",
      "monsters": [
        "small hematite dragon"
      ]
    },
    {
      "item": "crystalbinder's arcane boots",
      "type": "feet",
      "monsters": [
        "mounted crystalline slave driver"
      ]
    },
    {
      "item": "jade mallet",
      "type": "weapon",
      "monsters": [
        "prowling jade tiger"
      ]
    },
    {
      "item": "legguards of hidden knives",
      "type": "legs",
      "monsters": [
        "prowling jade tiger"
      ]
    },
    {
      "item": "pink crystal rod",
      "type": "weapon",
      "monsters": [
        "rose quartz panther"
      ]
    },
    {
      "item": "protector's wrap of auras",
      "type": "cloak",
      "monsters": [
        "small hematite dragon"
      ]
    },
    {
      "item": "quartz spiked paw",
      "type": "weapon",
      "monsters": [
        "rose quartz panther"
      ]
    },
    {
      "item": "shimmering fragment of calcite",
      "type": "material",
      "monsters": [
        "blue calcite chimera"
      ]
    },
    {
      "item": "solid calcite band",
      "type": "jewel",
      "monsters": [
        "blue calcite chimera"
      ]
    },
    {
      "item": "solid quartz tower shield",
      "type": "shield",
      "monsters": [
        "rose quartz panther"
      ]
    },
    {
      "item": "starsteel chestpiece of glowing opal",
      "type": "body",
      "monsters": [
        "mounted crystalline slave driver"
      ]
    },
    {
      "item": "thunder-forged scaled walkers",
      "type": "feet",
      "monsters": [
        "mounted crystalline slave driver"
      ]
    },
    {
      "item": "vile feral-spirit grand staff",
      "type": "weapon",
      "monsters": [
        "crystal quartz hound"
      ]
    }
  ],
  "Cverick's Tower": [
    {
      "item": "ancient helmet of war",
      "type": "head",
      "monsters": [
        "undead bael honor guard"
      ]
    },
    {
      "item": "black bat hide armor",
      "type": "body",
      "monsters": [
        "neophyte lich"
      ]
    },
    {
      "item": "claws of the crypt",
      "type": "weapon",
      "monsters": [
        "translucent ghost hound"
      ]
    },
    {
      "item": "cloak of spirit essence",
      "type": "cloak",
      "monsters": [
        "translucent ghost hound"
      ]
    },
    {
      "item": "deathsilk legguards",
      "type": "legs",
      "monsters": [
        "crimson and black striped naga"
      ]
    },
    {
      "item": "dull blue hammer",
      "type": "weapon",
      "monsters": [
        "bael spirit"
      ]
    },
    {
      "item": "eagleclaw gauntlets",
      "type": "hands",
      "monsters": [
        "neophyte lich"
      ]
    },
    {
      "item": "ember-fused molten crusher",
      "type": "weapon",
      "monsters": [
        "undead bael honor guard"
      ]
    },
    {
      "item": "ghost hound tooth",
      "type": "weapon",
      "monsters": [
        "translucent ghost hound"
      ]
    },
    {
      "item": "greathammer of damnation",
      "type": "weapon",
      "monsters": [
        "undead bael honor guard"
      ]
    },
    {
      "item": "ice-etched mallet",
      "type": "weapon",
      "monsters": [
        "Cverick the Lich"
      ]
    },
    {
      "item": "iron maiden shield",
      "type": "shield",
      "monsters": [
        "crimson and black striped naga"
      ]
    },
    {
      "item": "iron-bound tome",
      "type": "shield",
      "monsters": [
        "dracolich lord"
      ]
    },
    {
      "item": "knight's hammer",
      "type": "weapon",
      "monsters": [
        "dracolich lord"
      ]
    },
    {
      "item": "medallion of night",
      "type": "jewel",
      "monsters": [
        "bael vampire"
      ]
    },
    {
      "item": "necromantic bone boots",
      "type": "feet",
      "monsters": [
        "bael vampire"
      ]
    },
    {
      "item": "pair of old dirty magic gloves",
      "type": "hands",
      "monsters": [
        "crimson and black striped naga"
      ]
    },
    {
      "item": "phantom silk tread",
      "type": "feet",
      "monsters": [
        "bael vampire"
      ]
    },
    {
      "item": "pulsing rock",
      "type": "material",
      "monsters": [
        "bael spirit"
      ]
    },
    {
      "item": "reinforced stalker's leggings",
      "type": "legs",
      "monsters": [
        "undead bael honor guard"
      ]
    },
    {
      "item": "shimmering necklace of the undying",
      "type": "jewel",
      "monsters": [
        "Cverick the Lich"
      ]
    },
    {
      "item": "shroud of ice",
      "type": "body",
      "monsters": [
        "dracolich lord"
      ]
    },
    {
      "item": "staff of the fallen lord",
      "type": "weapon",
      "monsters": [
        "Cverick the Lich"
      ]
    },
    {
      "item": "swordbreaker boots",
      "type": "feet",
      "monsters": [
        "undead bael honor guard"
      ]
    },
    {
      "item": "vile greatstaff",
      "type": "weapon",
      "monsters": [
        "neophyte lich"
      ]
    },
    {
      "item": "wailing spirit's protector boots",
      "type": "feet",
      "monsters": [
        "bael spirit"
      ]
    }
  ],
  "Dark Heart of Karimere": [
    {
      "item": "abyssal claws of insanity",
      "type": "weapon",
      "monsters": [
        "three-headed maw beast"
      ]
    },
    {
      "item": "anointed warhammer",
      "type": "weapon",
      "monsters": [
        "tentacled soul flayer"
      ]
    },
    {
      "item": "dark crystal-studded gautlets",
      "type": "hands",
      "monsters": [
        "three-headed maw beast"
      ]
    },
    {
      "item": "eldritch inquisitor's leathers",
      "type": "body",
      "monsters": [
        "screeching eldritch horror"
      ]
    },
    {
      "item": "flaming trident of the beast",
      "type": "weapon",
      "monsters": [
        "three-headed maw beast"
      ]
    },
    {
      "item": "forgotten crusader's gauntlets",
      "type": "hands",
      "monsters": [
        "hulking flesh abomination"
      ]
    },
    {
      "item": "hallowed vestan platemail",
      "type": "body",
      "monsters": [
        "sanity warped magus"
      ]
    },
    {
      "item": "hulking plated greaves",
      "type": "legs",
      "monsters": [
        "hulking flesh abomination"
      ]
    },
    {
      "item": "nightmarish legwraps",
      "type": "legs",
      "monsters": [
        "sanity warped magus"
      ]
    },
    {
      "item": "ornate pantofles of reverence",
      "type": "feet",
      "monsters": [
        "screeching eldritch horror"
      ]
    },
    {
      "item": "soul-thief's shadowtreads",
      "type": "feet",
      "monsters": [
        "three-headed maw beast"
      ]
    },
    {
      "item": "soultorn studded legguards",
      "type": "legs",
      "monsters": [
        "tentacled soul flayer"
      ]
    },
    {
      "item": "spire of forbidden knowledge",
      "type": "weapon",
      "monsters": [
        "prophet of madness"
      ]
    },
    {
      "item": "tainted mystic's leggings",
      "type": "legs",
      "monsters": [
        "prophet of madness"
      ]
    }
  ],
  "Evermist Knolls": [
    {
      "item": "dragon-skin boots",
      "type": "feet",
      "monsters": [
        "frost dragon",
        "rock dragon"
      ]
    },
    {
      "item": "enchanted dragon bone",
      "type": "weapon",
      "monsters": [
        "frost dragon"
      ]
    },
    {
      "item": "gleaming red armor",
      "type": "body",
      "monsters": [
        "fire giant"
      ]
    },
    {
      "item": "gloves of wavering mist",
      "type": "hands",
      "monsters": [
        "mist giant"
      ]
    },
    {
      "item": "greaves of crystallized fog",
      "type": "legs",
      "monsters": [
        "fog giant"
      ]
    },
    {
      "item": "helm of light's sanctum",
      "type": "head",
      "monsters": [
        "fire giant"
      ]
    },
    {
      "item": "lesser dragonhide helm",
      "type": "head",
      "monsters": [
        "frost dragon"
      ]
    },
    {
      "item": "rustbound hood",
      "type": "head",
      "monsters": [
        "rock dragon"
      ]
    },
    {
      "item": "studded evermist armor",
      "type": "body",
      "monsters": [
        "fog giant"
      ]
    },
    {
      "item": "studded kilt of the mists",
      "type": "legs",
      "monsters": [
        "mist giant"
      ]
    },
    {
      "item": "titan's crossbow",
      "type": "weapon",
      "monsters": [
        "arcane giant",
        "fog giant",
        "mist giant"
      ]
    },
    {
      "item": "well-crafted guillotine axe",
      "type": "weapon",
      "monsters": [
        "arcane giant"
      ]
    }
  ],
  "Forests of Shalifi's Demise": [
    {
      "item": "fancy blue tights",
      "type": "legs",
      "monsters": [
        "forest elf"
      ]
    },
    {
      "item": "fragmented icy club",
      "type": "weapon",
      "monsters": [
        "forest bandit"
      ]
    },
    {
      "item": "frog tongue",
      "type": "material",
      "monsters": [
        "bullfrog"
      ]
    },
    {
      "item": "gloves of the deep forest",
      "type": "hands",
      "monsters": []
    },
    {
      "item": "golden ring",
      "type": "jewel",
      "monsters": [
        "woodcutter"
      ]
    },
    {
      "item": "hunter's bow",
      "type": "weapon",
      "monsters": [
        "forest elf"
      ]
    },
    {
      "item": "raccoon skin cap",
      "type": "head",
      "monsters": [
        "forest bandit"
      ]
    },
    {
      "item": "spear of vines",
      "type": "weapon",
      "monsters": [
        "bullfrog"
      ]
    },
    {
      "item": "staff of the treant",
      "type": "weapon",
      "monsters": [
        "bullfrog"
      ]
    },
    {
      "item": "strong pair of leather boots",
      "type": "feet",
      "monsters": [
        "tree lizard"
      ]
    },
    {
      "item": "superior sword",
      "type": "weapon",
      "monsters": [
        "forest bandit"
      ]
    },
    {
      "item": "tidal harpoon",
      "type": "weapon",
      "monsters": [
        "highwayman"
      ]
    },
    {
      "item": "visored plate helm",
      "type": "head",
      "monsters": [
        "woodcutter"
      ]
    }
  ],
  "Forests of Shalifi's Demise - Shaft": [
    {
      "item": "archivist's staff",
      "type": "weapon",
      "monsters": [
        "forest elf elder"
      ]
    },
    {
      "item": "gushing mace",
      "type": "weapon",
      "monsters": [
        "forest elf elder"
      ]
    },
    {
      "item": "hunter's bow",
      "type": "weapon",
      "monsters": [
        "forest elf ranger"
      ]
    },
    {
      "item": "olive-streaked boots",
      "type": "feet",
      "monsters": [
        "forest elf elder",
        "forest elf ranger"
      ]
    },
    {
      "item": "rough gloves of the deep forest",
      "type": "hands",
      "monsters": [
        "forest elf elder"
      ]
    },
    {
      "item": "Shalifi's camouflage cape",
      "type": "cloak",
      "monsters": [
        "Shalifi"
      ]
    },
    {
      "item": "superior hand crossbow",
      "type": "weapon",
      "monsters": [
        "forest elf ranger"
      ]
    },
    {
      "item": "wand of lesser flame",
      "type": "weapon",
      "monsters": [
        "forest elf refugee"
      ]
    }
  ],
  "Gateway to Madness": [
    {
      "item": "amulet of haunted dreams",
      "type": "jewel",
      "monsters": [
        "dream hag sorceress"
      ]
    },
    {
      "item": "boots of the lost magi",
      "type": "feet",
      "monsters": [
        "stark-raving cultist"
      ]
    },
    {
      "item": "bow of infinite darkness",
      "type": "weapon",
      "monsters": [
        "stricken allorien ranger"
      ]
    },
    {
      "item": "cowl of illusory grandeur",
      "type": "head",
      "monsters": [
        "void-touched craebaen warlock"
      ]
    },
    {
      "item": "orb of servitude",
      "type": "jewel",
      "monsters": [
        "demented eternal jailer"
      ]
    },
    {
      "item": "pair of doomed fatewalkers",
      "type": "feet",
      "monsters": [
        "void-touched Craebaen warlock"
      ]
    },
    {
      "item": "shadowfire bardiche",
      "type": "weapon",
      "monsters": [
        "corrupted guardian spirit"
      ]
    },
    {
      "item": "studded ethereal vestments",
      "type": "body",
      "monsters": [
        "dream hag sorceress"
      ]
    },
    {
      "item": "studded gauntlets of subjugation",
      "type": "hands",
      "monsters": [
        "stark-raving cultist"
      ]
    },
    {
      "item": "stygian guise",
      "type": "head",
      "monsters": [
        "corrupted guardian spirit"
      ]
    },
    {
      "item": "void-twisted ringmail cloak",
      "type": "cloak",
      "monsters": [
        "stricken allorien ranger"
      ]
    },
    {
      "item": "warlord's gauntlets",
      "type": "hands",
      "monsters": [
        "possessed yarubian warlord"
      ]
    },
    {
      "item": "warmace of waking nightmares",
      "type": "weapon",
      "monsters": [
        "possessed yarubian warlord"
      ]
    },
    {
      "item": "warped black iron key",
      "type": "wielded",
      "monsters": [
        "demented eternal jailer"
      ]
    }
  ],
  "Grazzt's Refuge": [
    {
      "item": "band of yellow gold",
      "type": "jewel",
      "monsters": [
        "camouflaged bandit chameleon"
      ]
    },
    {
      "item": "black bandana",
      "type": "head",
      "monsters": [
        "ogre bandit"
      ]
    },
    {
      "item": "black leather gloves",
      "type": "hands",
      "monsters": [
        "filthy troll beggar",
        "kobold thief"
      ]
    },
    {
      "item": "black plate armor",
      "type": "body",
      "monsters": [
        "blurry bandit chamelon",
        "razor-back chameleon"
      ]
    },
    {
      "item": "blood-stained dagger",
      "type": "weapon",
      "monsters": [
        "razor-back chameleon"
      ]
    },
    {
      "item": "chameleon skin cloak",
      "type": "cloak",
      "monsters": [
        "green rogue chameleon"
      ]
    },
    {
      "item": "charred staff",
      "type": "weapon",
      "monsters": [
        "grubby street rat"
      ]
    },
    {
      "item": "defender's boots",
      "type": "feet",
      "monsters": [
        "camouflaged bandit chameleon"
      ]
    },
    {
      "item": "flaming pike",
      "type": "weapon",
      "monsters": [
        "blurry bandit chamelon"
      ]
    },
    {
      "item": "frost mace",
      "type": "weapon",
      "monsters": [
        "filthy troll beggar"
      ]
    },
    {
      "item": "green and brown tunic",
      "type": "body",
      "monsters": [
        "kobold thief"
      ]
    },
    {
      "item": "heavy scimitar",
      "type": "weapon",
      "monsters": [
        "green rogue chameleon"
      ]
    },
    {
      "item": "interogator's scalpel",
      "type": "weapon",
      "monsters": [
        "razor-back chameleon"
      ]
    },
    {
      "item": "jaw of an ogre",
      "type": "head",
      "monsters": [
        "hulking ogre ruffian"
      ]
    },
    {
      "item": "oversized claymore",
      "type": "weapon",
      "monsters": [
        "hulking ogre ruffian",
        "kobold thief"
      ]
    },
    {
      "item": "pale assassin's cloak",
      "type": "cloak",
      "monsters": [
        "pale assassin chamelon"
      ]
    },
    {
      "item": "piece of bronze",
      "type": "material",
      "monsters": [
        "kobold pickpocket"
      ]
    },
    {
      "item": "ruby capped iron staff",
      "type": "weapon",
      "monsters": [
        "fire mage chameleon"
      ]
    }
  ],
  "Island of Mingo": [
    {
      "item": "barb of shipwrecked souls",
      "type": "weapon",
      "monsters": [
        "giant iguana"
      ]
    },
    {
      "item": "blue beak",
      "type": "material",
      "monsters": [
        "blue-footed booby"
      ]
    },
    {
      "item": "blue storm bow",
      "type": "weapon",
      "monsters": [
        "snapping turtle",
        "wild pig"
      ]
    },
    {
      "item": "brown flecked cap",
      "type": "head",
      "monsters": [
        "great tortoise"
      ]
    },
    {
      "item": "cape of falcon feathers",
      "type": "cloak",
      "monsters": [
        "divine gyrfalcon"
      ]
    },
    {
      "item": "cloak of second sight",
      "type": "cloak",
      "monsters": [
        "blue-footed booby"
      ]
    },
    {
      "item": "explorer's cap",
      "type": "head",
      "monsters": [
        "crab"
      ]
    },
    {
      "item": "eye of the viper",
      "type": "jewel",
      "monsters": [
        "giant viper"
      ]
    },
    {
      "item": "frozen hauberk of the mountain",
      "type": "body",
      "monsters": [
        "mangy arctic fox"
      ]
    },
    {
      "item": "giant whale-bone axe",
      "type": "weapon",
      "monsters": [
        "tortoise"
      ]
    },
    {
      "item": "gloves of the boar",
      "type": "hands",
      "monsters": [
        "wild pig"
      ]
    },
    {
      "item": "glowing amber amulet",
      "type": "jewel",
      "monsters": [
        "lobstrosity"
      ]
    },
    {
      "item": "gold-buckled, black leather belt",
      "type": "jewel",
      "monsters": [
        "giant iguana"
      ]
    },
    {
      "item": "greatbow of petrified wood",
      "type": "weapon",
      "monsters": [
        "crab"
      ]
    },
    {
      "item": "green shelled boots",
      "type": "feet",
      "monsters": [
        "giant tortoise"
      ]
    },
    {
      "item": "hood of the wind",
      "type": "head",
      "monsters": [
        "wild mountain goat"
      ]
    },
    {
      "item": "iguana skin gloves",
      "type": "hands",
      "monsters": [
        "iguana"
      ]
    },
    {
      "item": "islander's cloak",
      "type": "cloak",
      "monsters": [
        "stalking jaguar"
      ]
    },
    {
      "item": "leather gloves of vigor",
      "type": "hands",
      "monsters": [
        "capybara"
      ]
    },
    {
      "item": "leggings of the lizard",
      "type": "legs",
      "monsters": [
        "iguana"
      ]
    },
    {
      "item": "legplates of Mingo",
      "type": "legs",
      "monsters": [
        "capybara"
      ]
    },
    {
      "item": "light plate boots of the gull",
      "type": "feet",
      "monsters": [
        "seagull"
      ]
    },
    {
      "item": "lost explorer's studded boots",
      "type": "feet",
      "monsters": [
        "capybara"
      ]
    },
    {
      "item": "mask of the deep",
      "type": "head",
      "monsters": [
        "lobstrosity"
      ]
    },
    {
      "item": "mesh gauntlets of the sea",
      "type": "hands",
      "monsters": [
        "seagull"
      ]
    },
    {
      "item": "moldy earthen stiletto",
      "type": "weapon",
      "monsters": [
        "iguana"
      ]
    },
    {
      "item": "perfectly woven pants",
      "type": "legs",
      "monsters": [
        "iguana"
      ]
    },
    {
      "item": "plated lobster armor",
      "type": "body",
      "monsters": [
        "lobstrosity"
      ]
    },
    {
      "item": "seafarer's sandals",
      "type": "feet",
      "monsters": [
        "seagull"
      ]
    },
    {
      "item": "shaggy yak jacket",
      "type": "body",
      "monsters": [
        "enraged mountain yak"
      ]
    },
    {
      "item": "shell studded chestpiece",
      "type": "body",
      "monsters": [
        "snapping turtle"
      ]
    },
    {
      "item": "shelled hauberk of scuttling",
      "type": "body",
      "monsters": [
        "crab"
      ]
    },
    {
      "item": "square of rough leather",
      "type": "material",
      "monsters": [
        "wild pig"
      ]
    },
    {
      "item": "staff of high tide",
      "type": "weapon",
      "monsters": [
        "tortoise"
      ]
    },
    {
      "item": "stalker's spear",
      "type": "weapon",
      "monsters": [
        "stalking jaguar"
      ]
    },
    {
      "item": "studded shaggy yak cloak",
      "type": "cloak",
      "monsters": [
        "enraged mountain yak"
      ]
    },
    {
      "item": "tortoise shell shield",
      "type": "shield",
      "monsters": [
        "great tortoise"
      ]
    },
    {
      "item": "vapor-mist hammer",
      "type": "weapon",
      "monsters": [
        "blue-footed booby"
      ]
    },
    {
      "item": "waveworn trident",
      "type": "weapon",
      "monsters": [
        "seagull"
      ]
    },
    {
      "item": "white hare's foot",
      "type": "jewel",
      "monsters": [
        "deranged snow hare"
      ]
    },
    {
      "item": "white rabbit fur pants",
      "type": "legs",
      "monsters": [
        "deranged snow hare"
      ]
    },
    {
      "item": "white wolf fang",
      "type": "weapon",
      "monsters": [
        "white dire wolf"
      ]
    }
  ],
  "Island of MIngo": [
    {
      "item": "great horn hammer",
      "type": "weapon",
      "monsters": [
        "wild mountain goat"
      ]
    }
  ],
  "Karimere Crypt": [
    {
      "item": "ancient karimere battle armor",
      "type": "body",
      "monsters": [
        "tortured soul"
      ]
    },
    {
      "item": "avenger blade",
      "type": "weapon",
      "monsters": [
        "spirit of vengeance"
      ]
    },
    {
      "item": "cloak of wayward souls",
      "type": "cloak",
      "monsters": [
        "haunting wisp"
      ]
    },
    {
      "item": "ethereal greathelm",
      "type": "head",
      "monsters": [
        "pair of floating spectral blades"
      ]
    },
    {
      "item": "fingerless invoker's gloves",
      "type": "hands",
      "monsters": [
        "spirit of vengeance"
      ]
    },
    {
      "item": "forgotten lord's insignia",
      "type": "jewel",
      "monsters": [
        "lost karimere knight"
      ]
    },
    {
      "item": "leather armor of infiltration",
      "type": "body",
      "monsters": [
        "servant's wandering spirit"
      ]
    },
    {
      "item": "mistwalker's studded boots",
      "type": "feet",
      "monsters": [
        "haunting wisp"
      ]
    },
    {
      "item": "rose-crested aegis",
      "type": "shield",
      "monsters": [
        "shackled corpse"
      ]
    },
    {
      "item": "runebow of twilight",
      "type": "weapon",
      "monsters": [
        "tortured soul"
      ]
    },
    {
      "item": "saintly knight sabatons",
      "type": "feet",
      "monsters": [
        "lost Karimere knight"
      ]
    },
    {
      "item": "shimmering light mail cloak",
      "type": "cloak",
      "monsters": [
        "servant's wandering spirit"
      ]
    },
    {
      "item": "spectral spellblade",
      "type": "weapon",
      "monsters": [
        "pair of floating spectral blades"
      ]
    },
    {
      "item": "spellbinder's walking stick",
      "type": "weapon",
      "monsters": [
        "shackled corpse"
      ]
    }
  ],
  "Karimere Highlands": [
    {
      "item": "blackthicket war boots",
      "type": "feet",
      "monsters": [
        "loxo"
      ]
    },
    {
      "item": "claw of a giant vulture",
      "type": "jewel",
      "monsters": [
        "hulking vulture",
        "hump-backed jackal",
        "loxo",
        "silent hyena"
      ]
    },
    {
      "item": "coral grey hooded cloak",
      "type": "cloak",
      "monsters": [
        "high plains drifter"
      ]
    },
    {
      "item": "desolate bone greaves",
      "type": "legs",
      "monsters": [
        "hungry vulture"
      ]
    },
    {
      "item": "dirt covered gardening knife",
      "type": "weapon",
      "monsters": [
        "shedu"
      ]
    },
    {
      "item": "drop of pure spring water",
      "type": "material",
      "monsters": [
        "high plains drifter"
      ]
    },
    {
      "item": "dwarven morning star",
      "type": "weapon",
      "monsters": [
        "Shedu"
      ]
    },
    {
      "item": "elongated black proboscis",
      "type": "weapon",
      "monsters": [
        "small black mosquito"
      ]
    },
    {
      "item": "griffin skin leggings",
      "type": "legs",
      "monsters": [
        "young griffin"
      ]
    },
    {
      "item": "griffin-bone hammer",
      "type": "weapon",
      "monsters": [
        "young griffin"
      ]
    },
    {
      "item": "hauberk of the high plains",
      "type": "body",
      "monsters": [
        "high plains drifter"
      ]
    },
    {
      "item": "kangaroo rat's grips",
      "type": "hands",
      "monsters": [
        "kangaroo rat"
      ]
    },
    {
      "item": "liar's hands",
      "type": "hands",
      "monsters": [
        "loxo"
      ]
    },
    {
      "item": "longknife of the hunt",
      "type": "weapon",
      "monsters": [
        "hump-backed jackal"
      ]
    },
    {
      "item": "proud jerkin of the forest",
      "type": "body",
      "monsters": [
        "giant hare"
      ]
    },
    {
      "item": "rune inscribed headband",
      "type": "head",
      "monsters": [
        "Shedu",
        "high plains drifter",
        "small black mosquito"
      ]
    },
    {
      "item": "staff of teleportation",
      "type": "weapon",
      "monsters": [
        "blink dog"
      ]
    },
    {
      "item": "studded highland striders",
      "type": "feet",
      "monsters": [
        "hump-backed jackal"
      ]
    },
    {
      "item": "tattered drape of the scavenger",
      "type": "cloak",
      "monsters": [
        "silent hyena"
      ]
    },
    {
      "item": "treads of blind nightmare",
      "type": "feet",
      "monsters": [
        "small black mosquito"
      ]
    },
    {
      "item": "tyrannical cowl of dusk",
      "type": "head",
      "monsters": [
        "silent hyena"
      ]
    },
    {
      "item": "vulture spine spear",
      "type": "weapon",
      "monsters": [
        "hungry vulture"
      ]
    },
    {
      "item": "wavering pendant",
      "type": "jewel",
      "monsters": [
        "blink dog"
      ]
    },
    {
      "item": "whispering cloud slippers",
      "type": "feet",
      "monsters": [
        "giant hare"
      ]
    },
    {
      "item": "wrappings of wynd'lass",
      "type": "legs",
      "monsters": [
        "high plains drifter"
      ]
    }
  ],
  "Karimere Timber Forest": [
    {
      "item": "black slimy switchblade",
      "type": "weapon",
      "monsters": [
        "karimere logger"
      ]
    },
    {
      "item": "darkened ettin-skin cuirass",
      "type": "body",
      "monsters": [
        "Karimere hunter"
      ]
    },
    {
      "item": "devastating emerald blade",
      "type": "weapon",
      "monsters": [
        "emerald forest wyvern"
      ]
    },
    {
      "item": "faceguard of the wolf",
      "type": "head",
      "monsters": [
        "menacing wolf"
      ]
    },
    {
      "item": "helm of the hunter",
      "type": "head",
      "monsters": []
    },
    {
      "item": "logger's hatchet",
      "type": "weapon",
      "monsters": [
        "Karimere logger"
      ]
    },
    {
      "item": "night jackal's fang",
      "type": "jewel",
      "monsters": [
        "Karimere warrior"
      ]
    },
    {
      "item": "pitch black leather jacket",
      "type": "body",
      "monsters": [
        "Karimere guard"
      ]
    },
    {
      "item": "pure earth-encased armor",
      "type": "body",
      "monsters": [
        "karimere warrior"
      ]
    },
    {
      "item": "ring of strength",
      "type": "jewel",
      "monsters": [
        "menacing wolf"
      ]
    },
    {
      "item": "small water beetle",
      "type": "material",
      "monsters": [
        "Karimere logger"
      ]
    },
    {
      "item": "smoky grey cat pendant",
      "type": "jewel",
      "monsters": [
        "Karimere guard"
      ]
    },
    {
      "item": "studded lumberjack's leggings",
      "type": "legs",
      "monsters": [
        "karimere logger"
      ]
    },
    {
      "item": "worn studded scout's overcoat",
      "type": "body",
      "monsters": [
        "Karimere hunter"
      ]
    },
    {
      "item": "wyvern scales",
      "type": "material",
      "monsters": [
        "emerald forest wyvern"
      ]
    },
    {
      "item": "yard of oak",
      "type": "material",
      "monsters": [
        "Karimere logger"
      ]
    }
  ],
  "Mausoleum": [
    {
      "item": "bael blade",
      "type": "weapon",
      "monsters": [
        "bael elf assassin"
      ]
    },
    {
      "item": "cursed sabatons",
      "type": "feet",
      "monsters": [
        "knight of the black rose"
      ]
    },
    {
      "item": "dracolich great hammer",
      "type": "weapon",
      "monsters": [
        "major dracolich"
      ]
    },
    {
      "item": "dragonbone legguards",
      "type": "legs",
      "monsters": [
        "minor dracolich"
      ]
    },
    {
      "item": "grim pair of leggings",
      "type": "legs",
      "monsters": [
        "major dracolich"
      ]
    },
    {
      "item": "icy death knight's grasp",
      "type": "hands",
      "monsters": [
        "lord death knight"
      ]
    },
    {
      "item": "ivory and gold breastplate",
      "type": "body",
      "monsters": [
        "minor death knight"
      ]
    },
    {
      "item": "loop of bone",
      "type": "jewel",
      "monsters": [
        "demonic necromancer"
      ]
    },
    {
      "item": "molten plate boots",
      "type": "feet",
      "monsters": [
        "lord death knight"
      ]
    },
    {
      "item": "raiment of wizardry",
      "type": "body",
      "monsters": [
        "neuromancer"
      ]
    },
    {
      "item": "shard of the mother tree",
      "type": "weapon",
      "monsters": [
        "demonic necromancer"
      ]
    },
    {
      "item": "skeletal warden's gauntlets",
      "type": "hands",
      "monsters": [
        "lord death knight"
      ]
    },
    {
      "item": "smoldering cloth gauntlets",
      "type": "hands",
      "monsters": [
        "bael elf assassin"
      ]
    },
    {
      "item": "staff of a bone-magi",
      "type": "weapon",
      "monsters": [
        "neuromancer"
      ]
    },
    {
      "item": "staff of brimstone",
      "type": "weapon",
      "monsters": [
        "minor dracolich"
      ]
    },
    {
      "item": "studded cloak of twilight",
      "type": "cloak",
      "monsters": [
        "minor death knight"
      ]
    },
    {
      "item": "taskmaster's barbed epee",
      "type": "weapon",
      "monsters": [
        "lord death knight"
      ]
    },
    {
      "item": "tooth of an undead black bear",
      "type": "jewel",
      "monsters": [
        "demonic necromancer"
      ]
    },
    {
      "item": "torturer's pricker",
      "type": "weapon",
      "monsters": [
        "lord death knight"
      ]
    },
    {
      "item": "violet badge",
      "type": "jewel",
      "monsters": [
        "bael elf assassin"
      ]
    },
    {
      "item": "whorled longbow",
      "type": "weapon",
      "monsters": [
        "psychotic vampire"
      ]
    }
  ],
  "Medoran Forest": [
    {
      "item": "black spiked leather gloves",
      "type": "hands",
      "monsters": [
        "huge translucent forest wasp",
        "massive black-furred bear",
        "shadowy blue mist-raven"
      ]
    },
    {
      "item": "black-furred bear cape",
      "type": "cloak",
      "monsters": [
        "massive black-furred bear"
      ]
    },
    {
      "item": "bloody scalping axe",
      "type": "weapon",
      "monsters": [
        "mean little gremlin"
      ]
    },
    {
      "item": "chest of fog",
      "type": "body",
      "monsters": [
        "shadowy blue mist-raven"
      ]
    },
    {
      "item": "cockatrice feathered headdress",
      "type": "head",
      "monsters": [
        "slithering evil-eyed cockatrice"
      ]
    },
    {
      "item": "crude wooden bulwark",
      "type": "shield",
      "monsters": [
        "mean little gremlin"
      ]
    },
    {
      "item": "deepwood gauntlets",
      "type": "hands",
      "monsters": [
        "verdant-mottled adult ettin"
      ]
    },
    {
      "item": "emblazoned leather chestpiece",
      "type": "body",
      "monsters": [
        "hulking wart-covered forest troll"
      ]
    },
    {
      "item": "embroidered boots of protection",
      "type": "feet",
      "monsters": [
        "huge translucent forest wasp"
      ]
    },
    {
      "item": "fletcher's band",
      "type": "jewel",
      "monsters": [
        "camouflaged elven ranger"
      ]
    },
    {
      "item": "militia warmace",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "ornate fan of eagle feathers",
      "type": "shield",
      "monsters": [
        "broad-winged golden falcon"
      ]
    },
    {
      "item": "shortstaff of tormented visions",
      "type": "weapon",
      "monsters": [
        "verdant-mottled adult ettin"
      ]
    },
    {
      "item": "silent treads",
      "type": "feet",
      "monsters": [
        "camouflaged elven ranger"
      ]
    },
    {
      "item": "silver wire",
      "type": "material",
      "monsters": [
        "mean little gremlin"
      ]
    },
    {
      "item": "silvery hood of the talon",
      "type": "head",
      "monsters": [
        "broad-winged golden falcon"
      ]
    },
    {
      "item": "studded cowl of leaves",
      "type": "head",
      "monsters": [
        "camouflaged elven ranger"
      ]
    },
    {
      "item": "superior composite bow",
      "type": "weapon",
      "monsters": [
        "broad-winged golden falcon"
      ]
    },
    {
      "item": "undead ettin armor",
      "type": "body",
      "monsters": [
        "verdant-mottled adult ettin"
      ]
    },
    {
      "item": "vestment of remorse",
      "type": "body",
      "monsters": [
        "mean little gremlin"
      ]
    },
    {
      "item": "warped scythe",
      "type": "weapon",
      "monsters": [
        "hulking wart-covered forest troll"
      ]
    }
  ],
  "Miller's Pointe": [
    {
      "item": "earthen sagewood staff",
      "type": "weapon",
      "monsters": [
        "sea hermit"
      ]
    },
    {
      "item": "sandstone gargoyle helm",
      "type": "head",
      "monsters": [
        "sea hermit"
      ]
    },
    {
      "item": "sin cutlass",
      "type": "weapon",
      "monsters": [
        "castaway"
      ]
    },
    {
      "item": "slag hammer",
      "type": "weapon",
      "monsters": [
        "sand crab"
      ]
    },
    {
      "item": "squirrel-pelt leggings",
      "type": "legs",
      "monsters": [
        "spyder-fiend"
      ]
    },
    {
      "item": "studded ebony and silver gloves",
      "type": "hands",
      "monsters": [
        "spyder-fiend"
      ]
    },
    {
      "item": "superior hunting bow",
      "type": "weapon",
      "monsters": [
        "beachcomber"
      ]
    },
    {
      "item": "teardrop earring",
      "type": "jewel",
      "monsters": [
        "sea hermit"
      ]
    },
    {
      "item": "two-handed war mattock",
      "type": "weapon",
      "monsters": [
        "castaway"
      ]
    }
  ],
  "Mountain Caves": [
    {
      "item": "ancient warden staff",
      "type": "weapon",
      "monsters": [
        "red-scaled lizardman"
      ]
    },
    {
      "item": "azure jeweled encrusted edge",
      "type": "weapon",
      "monsters": [
        "giant troll"
      ]
    },
    {
      "item": "azure ringmail boots",
      "type": "feet",
      "monsters": [
        "demented dwarf"
      ]
    },
    {
      "item": "black slimy pole",
      "type": "weapon",
      "monsters": [
        "dark dwarven stonemason"
      ]
    },
    {
      "item": "blackened struck bastard sword",
      "type": "weapon",
      "monsters": [
        "demented dwarf"
      ]
    },
    {
      "item": "brightly glowing gold band",
      "type": "jewel",
      "monsters": [
        "dark dwarven stonemason"
      ]
    },
    {
      "item": "casque of mountains",
      "type": "head",
      "monsters": [
        "cave troll"
      ]
    },
    {
      "item": "cracked stone armor",
      "type": "body",
      "monsters": [
        "dark dwarven stonemason"
      ]
    },
    {
      "item": "dark blurry cloak",
      "type": "cloak",
      "monsters": [
        "mangy ogre"
      ]
    },
    {
      "item": "dwarven-runed spear",
      "type": "weapon",
      "monsters": [
        "dark dwarven miner"
      ]
    },
    {
      "item": "electrified heavy hammer",
      "type": "weapon",
      "monsters": [
        "giant cave gecko"
      ]
    },
    {
      "item": "fiery fang",
      "type": "weapon",
      "monsters": [
        "striped fire cat"
      ]
    },
    {
      "item": "fiery red backsword",
      "type": "weapon",
      "monsters": [
        "cave troll"
      ]
    },
    {
      "item": "fire ruby spiked brawler gauntlets",
      "type": "weapon",
      "monsters": [
        "red-scaled lizardman"
      ]
    },
    {
      "item": "freshly molted skin",
      "type": "legs",
      "monsters": [
        "giant cave lurker"
      ]
    },
    {
      "item": "frost sabre",
      "type": "weapon",
      "monsters": [
        "blue-scaled lizardman"
      ]
    },
    {
      "item": "frosted troll leg demolisher",
      "type": "weapon",
      "monsters": [
        "dark dwarven sentry"
      ]
    },
    {
      "item": "furious obsidian gloves",
      "type": "hands",
      "monsters": [
        "dark dwarven stonemason"
      ]
    },
    {
      "item": "giant troll's mace",
      "type": "weapon",
      "monsters": [
        "giant troll"
      ]
    },
    {
      "item": "gushing shard",
      "type": "weapon",
      "monsters": [
        "dark goblin"
      ]
    },
    {
      "item": "hairy werewolf face mask",
      "type": "head",
      "monsters": [
        "giant troll"
      ]
    },
    {
      "item": "hefty battleworn mace",
      "type": "weapon",
      "monsters": [
        "dark goblin"
      ]
    },
    {
      "item": "legplates of dark iron",
      "type": "legs",
      "monsters": [
        "dark iron golem"
      ]
    },
    {
      "item": "lurker's blood leggings",
      "type": "legs",
      "monsters": [
        "giant cave lurker"
      ]
    },
    {
      "item": "lurker's leg",
      "type": "weapon",
      "monsters": [
        "giant cave lurker"
      ]
    },
    {
      "item": "master craftsman's hammer of crushing",
      "type": "weapon",
      "monsters": [
        "dark dwarven stonemason"
      ]
    },
    {
      "item": "midnight black boots",
      "type": "feet",
      "monsters": [
        "dark goblin"
      ]
    },
    {
      "item": "ogre magi staff",
      "type": "weapon",
      "monsters": [
        "dark goblin"
      ]
    },
    {
      "item": "ogre's heavy chainmail leggings",
      "type": "legs",
      "monsters": [
        "mangy ogre"
      ]
    },
    {
      "item": "pair of arcane warboots",
      "type": "feet",
      "monsters": [
        "dark dwarven mageguard"
      ]
    },
    {
      "item": "pair of trollkickers",
      "type": "feet",
      "monsters": [
        "dark dwarven miner"
      ]
    },
    {
      "item": "pants of speed",
      "type": "legs",
      "monsters": [
        "giant cave gecko"
      ]
    },
    {
      "item": "poison-tipped impaler",
      "type": "weapon",
      "monsters": [
        "slimy cave serpent"
      ]
    },
    {
      "item": "poisoned trueshot bow",
      "type": "weapon",
      "monsters": [
        "giant cave lurker"
      ]
    },
    {
      "item": "ringmail spelunker's drape",
      "type": "cloak",
      "monsters": [
        "giant troll"
      ]
    },
    {
      "item": "rock-striking hammer",
      "type": "weapon",
      "monsters": [
        "large two-headed troll"
      ]
    },
    {
      "item": "ruby jeweled blackjack",
      "type": "weapon",
      "monsters": [
        "mangy ogre"
      ]
    },
    {
      "item": "ruby jeweled katana",
      "type": "weapon",
      "monsters": [
        "slimy cave serpent"
      ]
    },
    {
      "item": "rune-etched black staff",
      "type": "weapon",
      "monsters": [
        "dark dwarven mageguard"
      ]
    },
    {
      "item": "rune-etched moon staff",
      "type": "weapon",
      "monsters": [
        "dark dwarven mageguard"
      ]
    },
    {
      "item": "runestaff of mysticism",
      "type": "weapon",
      "monsters": [
        "dark dwarven miner"
      ]
    },
    {
      "item": "rusty red battleplate",
      "type": "body",
      "monsters": [
        "red-scaled lizardman"
      ]
    },
    {
      "item": "scaled recruit footguards",
      "type": "feet",
      "monsters": [
        "red-scaled lizardman"
      ]
    },
    {
      "item": "sharpened fungus spike",
      "type": "weapon",
      "monsters": [
        "cave troll"
      ]
    },
    {
      "item": "shimmering crystal",
      "type": "material",
      "monsters": [
        "dark dwarven mageguard"
      ]
    },
    {
      "item": "shiny ebony warfists",
      "type": "hands",
      "monsters": [
        "blue-scaled lizardman"
      ]
    },
    {
      "item": "silver edged black tunic",
      "type": "body",
      "monsters": [
        "dark dwarven mageguard"
      ]
    },
    {
      "item": "slime covered leggings",
      "type": "legs",
      "monsters": [
        "slimy cave serpent"
      ]
    },
    {
      "item": "staff of corrupted will",
      "type": "weapon",
      "monsters": [
        "mangy ogre"
      ]
    },
    {
      "item": "strong leather helm",
      "type": "head",
      "monsters": [
        "cave troll"
      ]
    },
    {
      "item": "tundra-hide boots",
      "type": "feet",
      "monsters": [
        "large two-headed troll"
      ]
    },
    {
      "item": "warscout's gauntlets",
      "type": "hands",
      "monsters": [
        "dark dwarven sentry"
      ]
    },
    {
      "item": "worn studded scout's cloak",
      "type": "cloak",
      "monsters": [
        "dark dwarven sentry"
      ]
    }
  ],
  "Myrobi Hills": [
    {
      "item": "black fox pelt",
      "type": "head",
      "monsters": [
        "black fox"
      ]
    },
    {
      "item": "boots of landfall",
      "type": "feet",
      "monsters": [
        "hill viper"
      ]
    },
    {
      "item": "cloak of inner peace",
      "type": "cloak",
      "monsters": [
        "Myrobi hunter"
      ]
    },
    {
      "item": "crocalisk helm",
      "type": "head",
      "monsters": [
        "bushwacker"
      ]
    },
    {
      "item": "dark staff of tanglewood",
      "type": "weapon",
      "monsters": [
        "Myrobi mage"
      ]
    },
    {
      "item": "dart'r blowgun",
      "type": "weapon",
      "monsters": [
        "Myrobi hunter"
      ]
    },
    {
      "item": "electrified sharp cleaver",
      "type": "weapon",
      "monsters": [
        "Myrobi mage"
      ]
    },
    {
      "item": "foxhide leggings",
      "type": "legs",
      "monsters": [
        "black fox"
      ]
    },
    {
      "item": "gr'ung skin",
      "type": "body",
      "monsters": [
        "bushwacker"
      ]
    },
    {
      "item": "hissing blade",
      "type": "weapon",
      "monsters": [
        "two-headed rattler"
      ]
    },
    {
      "item": "hog hammer",
      "type": "weapon",
      "monsters": [
        "hill hog"
      ]
    },
    {
      "item": "inscribed leather tunic",
      "type": "body",
      "monsters": [
        "myrobi mage"
      ]
    },
    {
      "item": "mantis-wing armor",
      "type": "body",
      "monsters": [
        "Myrobi mage"
      ]
    },
    {
      "item": "necklace made of snake cartiledge",
      "type": "jewel",
      "monsters": [
        "hill viper"
      ]
    },
    {
      "item": "pelt of a crimson fox",
      "type": "cloak",
      "monsters": [
        "Myrobi warlord",
        "bushwacker"
      ]
    },
    {
      "item": "red and gold jingasa helm",
      "type": "head",
      "monsters": [
        "Myrobi warlord"
      ]
    },
    {
      "item": "rhinocerous horn",
      "type": "material",
      "monsters": [
        "Myrobi hunter"
      ]
    },
    {
      "item": "stolen tome of earthen magic",
      "type": "shield",
      "monsters": [
        "myrobi mage"
      ]
    },
    {
      "item": "verdant hunting dagger",
      "type": "weapon",
      "monsters": [
        "Myrobi hunter"
      ]
    },
    {
      "item": "warlord's brigandine",
      "type": "body",
      "monsters": [
        "Myrobi warlord"
      ]
    },
    {
      "item": "waterlogged sea knife",
      "type": "weapon",
      "monsters": [
        "hill viper"
      ]
    },
    {
      "item": "worn old wooden staff",
      "type": "weapon",
      "monsters": [
        "Myrobi mage"
      ]
    },
    {
      "item": "worn studded scout's gloves",
      "type": "hands",
      "monsters": [
        "bushwacker"
      ]
    }
  ],
  "Ninja Caves": [
    {
      "item": "adroit studded headband",
      "type": "head",
      "monsters": [
        "tiger-emblemed ninja"
      ]
    },
    {
      "item": "ancient tidebreaker glaive",
      "type": "weapon",
      "monsters": [
        "purple-garbed ninja"
      ]
    },
    {
      "item": "blazing bo staff",
      "type": "weapon",
      "monsters": [
        "crimson-garbed ninja"
      ]
    },
    {
      "item": "dagger laced with venom",
      "type": "weapon",
      "monsters": [
        "dark emerald ninja"
      ]
    },
    {
      "item": "dwarven bonebreaker warhammer",
      "type": "weapon",
      "monsters": [
        "dragon-emblembed ninja"
      ]
    },
    {
      "item": "emerald cloak of echoes",
      "type": "cloak",
      "monsters": [
        "dark emerald ninja"
      ]
    },
    {
      "item": "empyrial crown",
      "type": "head",
      "monsters": [
        "ghostly white ninja"
      ]
    },
    {
      "item": "ermine leather gloves",
      "type": "hands",
      "monsters": [
        "ghostly white ninja"
      ]
    },
    {
      "item": "feet of whispers",
      "type": "feet",
      "monsters": [
        "crimson-garbed ninja"
      ]
    },
    {
      "item": "frozen stalagmite dirk",
      "type": "weapon",
      "monsters": [
        "blue-robed student ninja"
      ]
    },
    {
      "item": "gloves of the claw",
      "type": "hands",
      "monsters": [
        "tiger-emblemed ninja"
      ]
    },
    {
      "item": "helmet of second sight",
      "type": "head",
      "monsters": [
        "purple-garbed ninja"
      ]
    },
    {
      "item": "knuckles of silent assault",
      "type": "weapon",
      "monsters": [
        "dark emerald ninja"
      ]
    },
    {
      "item": "mithril tiger ring",
      "type": "jewel",
      "monsters": [
        "tiger-emblemed ninja"
      ]
    },
    {
      "item": "ornate brigandine leggings",
      "type": "legs",
      "monsters": [
        "dragon-emblelmed ninja"
      ]
    },
    {
      "item": "silver handguards of the storm",
      "type": "hands",
      "monsters": [
        "dragon-emblembed ninja"
      ]
    },
    {
      "item": "silvery blue leggings",
      "type": "legs",
      "monsters": [
        "blue-robed student ninja"
      ]
    },
    {
      "item": "studded black assassin's cowl",
      "type": "head",
      "monsters": [
        "dark emerald ninja"
      ]
    },
    {
      "item": "wave talisman",
      "type": "material",
      "monsters": [
        "blue-robed student ninja"
      ]
    },
    {
      "item": "whispering ninja garb",
      "type": "body",
      "monsters": [
        "dark emerald ninja"
      ]
    },
    {
      "item": "Zephyr's velvet gloves",
      "type": "hands",
      "monsters": [
        "ghostly white ninja"
      ]
    }
  ],
  "Nogrim, The Deep City": [
    {
      "item": "amethyst dagger",
      "type": "weapon",
      "monsters": [
        "apprentice stonemover"
      ]
    },
    {
      "item": "breastplate of the elite guard",
      "type": "body",
      "monsters": [
        "Nogrim elite guard"
      ]
    },
    {
      "item": "darksteel great hammer",
      "type": "weapon",
      "monsters": [
        "dark dwarven berzerker"
      ]
    },
    {
      "item": "dour ringmail legguards",
      "type": "legs",
      "monsters": [
        "dark dwarven soldier"
      ]
    },
    {
      "item": "dwarven ringmail hauberk",
      "type": "body",
      "monsters": [
        "dark dwarven berzerker"
      ]
    },
    {
      "item": "massive mining pick",
      "type": "weapon",
      "monsters": [
        "angry miner"
      ]
    },
    {
      "item": "obsidian short bow",
      "type": "weapon",
      "monsters": [
        "apprentice stonemover"
      ]
    },
    {
      "item": "shield of Nogrim",
      "type": "shield",
      "monsters": [
        "dark dwarven soldier"
      ]
    },
    {
      "item": "sooty leather hauberk",
      "type": "body",
      "monsters": [
        "angry miner"
      ]
    },
    {
      "item": "sparking short sword",
      "type": "weapon",
      "monsters": [
        "dark dwarven spellblade"
      ]
    },
    {
      "item": "spire of stone crushing",
      "type": "weapon",
      "monsters": [
        "master stonemover"
      ]
    },
    {
      "item": "stonemover's muddy cloak",
      "type": "cloak",
      "monsters": [
        "master stonemover"
      ]
    },
    {
      "item": "wave sword",
      "type": "weapon",
      "monsters": [
        "dark dwarven spellblade"
      ]
    }
  ],
  "Poisoned Temple": [
    {
      "item": "crooked staff of decay",
      "type": "weapon",
      "monsters": [
        "Hodite priest"
      ]
    },
    {
      "item": "divine gauntlets of Hod",
      "type": "hands",
      "monsters": [
        "acolyte to Hod"
      ]
    },
    {
      "item": "emerald ear stud",
      "type": "jewel",
      "monsters": [
        "acolyte to Hod"
      ]
    },
    {
      "item": "flail of obedience",
      "type": "weapon",
      "monsters": [
        "Acolyte to Hod",
        "Hodite initiate",
        "pilgrim to Hod",
        "supplicant to Hod"
      ]
    },
    {
      "item": "footwraps of decay",
      "type": "feet",
      "monsters": [
        "pilgrim to Hod"
      ]
    },
    {
      "item": "gardener's shears",
      "type": "weapon",
      "monsters": [
        "gnoll gardener"
      ]
    },
    {
      "item": "gardener's shinguards",
      "type": "legs",
      "monsters": [
        "Hodite temple gardener",
        "gnoll gardener"
      ]
    },
    {
      "item": "hodite prayer staff",
      "type": "weapon",
      "monsters": [
        "acolyte to Hod"
      ]
    },
    {
      "item": "humble headwrap",
      "type": "head",
      "monsters": [
        "pilgrim to Hod"
      ]
    },
    {
      "item": "hydra essence infused katana",
      "type": "weapon",
      "monsters": [
        "supplicant to Hod"
      ]
    },
    {
      "item": "hydra essence infused shiv",
      "type": "weapon",
      "monsters": [
        "pilgrim to Hod"
      ]
    },
    {
      "item": "initiate's worn leathers",
      "type": "body",
      "monsters": [
        "Hodite initiate"
      ]
    },
    {
      "item": "leather headband of discipleship",
      "type": "head",
      "monsters": [
        "Hodite priest"
      ]
    },
    {
      "item": "muddy leather shirt",
      "type": "body",
      "monsters": [
        "Hodite temple gardener"
      ]
    },
    {
      "item": "putrid green temple tunic",
      "type": "body",
      "monsters": [
        "Hodite priest",
        "pilgrim to Hod",
        "supplicant to Hod"
      ]
    },
    {
      "item": "shiny eel skin armor",
      "type": "body",
      "monsters": [
        "Hodite initiate"
      ]
    },
    {
      "item": "studded greaves of devotion",
      "type": "legs",
      "monsters": [
        "Hodite initiate"
      ]
    },
    {
      "item": "symbol of supplication",
      "type": "jewel",
      "monsters": [
        "supplicant to Hod"
      ]
    },
    {
      "item": "tainted studded leather armor",
      "type": "body",
      "monsters": [
        "gnoll gardener"
      ]
    }
  ],
  "Remorse Mountains": [
    {
      "item": "azure ringmail hauberk",
      "type": "body",
      "monsters": [
        "mountain goblin"
      ]
    },
    {
      "item": "blade of woven branches",
      "type": "weapon",
      "monsters": [
        "renegade dwarf"
      ]
    },
    {
      "item": "blood red cloak",
      "type": "cloak",
      "monsters": []
    },
    {
      "item": "bloody impaling harpoon",
      "type": "weapon",
      "monsters": [
        "Aarkcroa huntress"
      ]
    },
    {
      "item": "blue dagger",
      "type": "weapon",
      "monsters": [
        "mountain troll"
      ]
    },
    {
      "item": "dwarven forged legplates",
      "type": "legs",
      "monsters": [
        "renegade dwarf"
      ]
    },
    {
      "item": "frost-touched mountain claws",
      "type": "weapon",
      "monsters": [
        "Aarkcroa shaman"
      ]
    },
    {
      "item": "frozen flamberge",
      "type": "weapon",
      "monsters": [
        "black jaguar"
      ]
    },
    {
      "item": "hammer of remorse",
      "type": "weapon",
      "monsters": [
        "lesser ogre",
        "mountain troll"
      ]
    },
    {
      "item": "ivory horned crested helmet",
      "type": "head",
      "monsters": [
        "huge snow worm"
      ]
    },
    {
      "item": "large bloody club",
      "type": "weapon",
      "monsters": [
        "mountain goblin"
      ]
    },
    {
      "item": "lightning rod",
      "type": "material",
      "monsters": [
        "Aarkcroa huntress",
        "mountain goblin"
      ]
    },
    {
      "item": "metacorn horn",
      "type": "weapon",
      "monsters": [
        "metacorn"
      ]
    },
    {
      "item": "metacorn horn bow",
      "type": "weapon",
      "monsters": [
        "Aarkcroa huntress"
      ]
    },
    {
      "item": "mud encrusted rod",
      "type": "weapon",
      "monsters": [
        "mountain troll"
      ]
    },
    {
      "item": "slime covered staff",
      "type": "weapon",
      "monsters": [
        "black jaguar",
        "renegade dwarf"
      ]
    },
    {
      "item": "tower shield",
      "type": "shield",
      "monsters": [
        "lesser ogre"
      ]
    },
    {
      "item": "wormling vest",
      "type": "body",
      "monsters": [
        "huge snow worm"
      ]
    }
  ],
  "Shady Brush Hills": [
    {
      "item": "azure leggings of lastwind",
      "type": "legs",
      "monsters": [
        "exiled azure wanderer"
      ]
    },
    {
      "item": "blood red plate leggings",
      "type": "legs",
      "monsters": [
        "bloody dung beetle"
      ]
    },
    {
      "item": "blue icicle",
      "type": "material",
      "monsters": [
        "vampire banshee"
      ]
    },
    {
      "item": "crimson rift-seeker boots",
      "type": "feet",
      "monsters": [
        "vampiric banshee"
      ]
    },
    {
      "item": "cursed demonbane arcus",
      "type": "weapon",
      "monsters": [
        "exiled azure wanderer"
      ]
    },
    {
      "item": "defiled shroud",
      "type": "head",
      "monsters": [
        "ghastly nightstalker"
      ]
    },
    {
      "item": "dreadsiren greaves",
      "type": "legs",
      "monsters": [
        "alluring necrotic temptress"
      ]
    },
    {
      "item": "footsteps of burning visions",
      "type": "feet",
      "monsters": [
        "fiery shadow beast"
      ]
    },
    {
      "item": "full moon staff",
      "type": "weapon",
      "monsters": [
        "otherworldy umbra"
      ]
    },
    {
      "item": "gloves of black flame",
      "type": "hands",
      "monsters": [
        "fiery shadow beast"
      ]
    },
    {
      "item": "gore-soaked head ripper",
      "type": "weapon",
      "monsters": [
        "ghastly nightstalker"
      ]
    },
    {
      "item": "jagged thunderblade",
      "type": "weapon",
      "monsters": [
        "animated alabaster"
      ]
    },
    {
      "item": "pants of faded hells",
      "type": "legs",
      "monsters": [
        "roaming phantasm"
      ]
    },
    {
      "item": "ring of nightmares",
      "type": "jewel",
      "monsters": [
        "animated alabaster"
      ]
    },
    {
      "item": "robe of the faceless",
      "type": "body",
      "monsters": [
        "alluring necrotic temptress"
      ]
    },
    {
      "item": "scorching black-metal striders",
      "type": "feet",
      "monsters": [
        "fiery shadow beast"
      ]
    },
    {
      "item": "shadowshiver gutripper dirk",
      "type": "weapon",
      "monsters": [
        "roaming phantasm"
      ]
    },
    {
      "item": "sickly green greatswod",
      "type": "weapon",
      "monsters": [
        "mephitic ghostwolf"
      ]
    },
    {
      "item": "slender translucent blade",
      "type": "weapon",
      "monsters": [
        "salacious nymph"
      ]
    },
    {
      "item": "storm singer's scaled bracers",
      "type": "hands",
      "monsters": [
        "otherworldy umbra"
      ]
    },
    {
      "item": "storm singer's scaled hood",
      "type": "head",
      "monsters": [
        "salacious nymph"
      ]
    },
    {
      "item": "transparent lacey wings",
      "type": "cloak",
      "monsters": [
        "salacious nymph"
      ]
    },
    {
      "item": "vampire's bloodied robe",
      "type": "body",
      "monsters": [
        "vampiric banshee"
      ]
    },
    {
      "item": "vile mallet",
      "type": "weapon",
      "monsters": [
        "bloody dung beetle"
      ]
    },
    {
      "item": "void-touched glass sabre",
      "type": "weapon",
      "monsters": [
        "exiled azure wanderer"
      ]
    }
  ],
  "Shrouded Castle of Craebaen": [
    {
      "item": "chestplate of arcane protection",
      "type": "body",
      "monsters": [
        "Craebaen royal lieutenant"
      ]
    },
    {
      "item": "cyan-tinted, magical vestments",
      "type": "body",
      "monsters": [
        "wizened Craebaen scholar"
      ]
    },
    {
      "item": "deep silver rock hammer",
      "type": "weapon",
      "monsters": [
        "fleeing prisoner"
      ]
    },
    {
      "item": "defender's studded legguards",
      "type": "legs",
      "monsters": [
        "Craebaen prison guard"
      ]
    },
    {
      "item": "elite greatsword of shocking",
      "type": "weapon",
      "monsters": [
        "elite guard of Craebaen"
      ]
    },
    {
      "item": "gloves of the ancient protectors",
      "type": "hands",
      "monsters": [
        "elite guard of Craebaen"
      ]
    },
    {
      "item": "gloves of the untouched",
      "type": "hands",
      "monsters": [
        "wandering castle virgin"
      ]
    },
    {
      "item": "shortspear of undying light",
      "type": "weapon",
      "monsters": [
        "wizened Craebaen scholar"
      ]
    },
    {
      "item": "staff of the scholar",
      "type": "weapon",
      "monsters": [
        "wizened Craebaen scholar"
      ]
    },
    {
      "item": "stalwart bardiche",
      "type": "weapon",
      "monsters": [
        "Craebaen royal lieutenant"
      ]
    },
    {
      "item": "twisted dirk of fog",
      "type": "weapon",
      "monsters": [
        "royal ambassador to Craebaen"
      ]
    },
    {
      "item": "unblemished cowl",
      "type": "head",
      "monsters": [
        "wandering castle virgin"
      ]
    },
    {
      "item": "warlord's padded sprinters",
      "type": "feet",
      "monsters": [
        "fleeing prisoner"
      ]
    }
  ],
  "Shrouded Castle of Craebean": [
    {
      "item": "ancestral lord's claymore",
      "type": "weapon",
      "monsters": [
        "royal Lord of Craebaen"
      ]
    },
    {
      "item": "bulwark of judgement",
      "type": "shield",
      "monsters": [
        "Craebaen royal knight"
      ]
    },
    {
      "item": "burnished gauntlets of silver mesh",
      "type": "hands",
      "monsters": [
        "elite Craebaen general"
      ]
    },
    {
      "item": "cloak of binding glory",
      "type": "cloak",
      "monsters": [
        "elite Craebaen general"
      ]
    },
    {
      "item": "Craebaen signet ring",
      "type": "jewel",
      "monsters": [
        "Craebaen royal knight"
      ]
    },
    {
      "item": "drape of truth",
      "type": "cloak",
      "monsters": [
        "royal Lord of Craebaen"
      ]
    },
    {
      "item": "emerald serpentstalker's headpiece",
      "type": "head",
      "monsters": [
        "hissing chameleon guard"
      ]
    },
    {
      "item": "glistening ivory and gold quickblade",
      "type": "weapon",
      "monsters": [
        "hissing chameleon guard"
      ]
    },
    {
      "item": "lore-keeper's boots of mystery",
      "type": "feet",
      "monsters": [
        "royal ambassador to Craebaen"
      ]
    },
    {
      "item": "midnight black overcoat",
      "type": "cloak",
      "monsters": [
        "Craebaen prison guard"
      ]
    },
    {
      "item": "mystic staff of the abyss",
      "type": "weapon",
      "monsters": [
        "Craebaen eldritch"
      ]
    },
    {
      "item": "nebulous chronoscryer chest",
      "type": "body",
      "monsters": [
        "Craebaen eldritch"
      ]
    },
    {
      "item": "pair of shadow destroyer handguards",
      "type": "hands",
      "monsters": [
        "elite Craebaen general"
      ]
    },
    {
      "item": "wavering spear of the Craebean",
      "type": "weapon",
      "monsters": [
        "Craebaen royal knight"
      ]
    }
  ],
  "Shrouded City of Craebaen": [
    {
      "item": "azure boots of misty rain",
      "type": "feet",
      "monsters": [
        "elite craebaen gyp'ran"
      ]
    },
    {
      "item": "craebaen plate armor",
      "type": "body",
      "monsters": [
        "craebaen citizen"
      ]
    },
    {
      "item": "craebaen walking cane",
      "type": "weapon",
      "monsters": [
        "craebaen citizen"
      ]
    },
    {
      "item": "emerald shalic feathered headdress",
      "type": "head",
      "monsters": [
        "emerald feathered-tailed shalic hawk"
      ]
    },
    {
      "item": "floating glass witch's orb",
      "type": "weapon",
      "monsters": [
        "elite craebean gyp'ran"
      ]
    },
    {
      "item": "gauntlets of infestation",
      "type": "weapon",
      "monsters": [
        "swarm of mosquitoes"
      ]
    },
    {
      "item": "gloves of the long rest",
      "type": "hands",
      "monsters": [
        "craebaen phase assassin"
      ]
    },
    {
      "item": "hovering candle of the righteous",
      "type": "weapon",
      "monsters": [
        "crimson eyed craebaen warlock"
      ]
    },
    {
      "item": "leggings of the swarm",
      "type": "legs",
      "monsters": [
        "swarm of mosquitoes"
      ]
    },
    {
      "item": "manticore-spine bow",
      "type": "weapon",
      "monsters": [
        "craebaen citizen"
      ]
    },
    {
      "item": "necklace of bloodstone",
      "type": "jewel",
      "monsters": [
        "swarm of mosquitoes"
      ]
    },
    {
      "item": "pair of lightning-weaver grips",
      "type": "hands",
      "monsters": [
        "crimson eyed craebaen warlock"
      ]
    },
    {
      "item": "pitch-black shortsword",
      "type": "weapon",
      "monsters": [
        "craebaen phase assassin"
      ]
    },
    {
      "item": "sapphire-clawed gyp'ran gloves",
      "type": "hands",
      "monsters": [
        "elite craebaen gyp'ran"
      ]
    },
    {
      "item": "studded gauntlets of intonation",
      "type": "hands",
      "monsters": [
        "swarm of mosquitoes"
      ]
    },
    {
      "item": "twilight-infused sunderer",
      "type": "weapon",
      "monsters": [
        "emerald feathered-tailed shalic hawk"
      ]
    },
    {
      "item": "vest of night's embrace",
      "type": "body",
      "monsters": [
        "craebaen phase assassin"
      ]
    },
    {
      "item": "warlock's spiritstaff",
      "type": "weapon",
      "monsters": [
        "crimson eyed craebaen warlock"
      ]
    },
    {
      "item": "wistful blade",
      "type": "weapon",
      "monsters": [
        "crimson eyed craebaen warlock"
      ]
    },
    {
      "item": "yard of fine silk",
      "type": "material",
      "monsters": [
        "craebaen citizen"
      ]
    }
  ],
  "Shrouded Forest of Craebaen": [
    {
      "item": "blade of the forest hunter",
      "type": "weapon",
      "monsters": [
        "silver-green jungle cat"
      ]
    },
    {
      "item": "book of the boundless",
      "type": "weapon",
      "monsters": [
        "smoldering black hearthound"
      ]
    },
    {
      "item": "flame-wrapped two-handed blade",
      "type": "weapon",
      "monsters": [
        "grizzled craebaen forest tracker"
      ]
    },
    {
      "item": "legwraps of wailing hounds",
      "type": "legs",
      "monsters": [
        "elite craebaen huntmaster"
      ]
    },
    {
      "item": "mask of blind honor",
      "type": "head",
      "monsters": [
        "grizzled craebaen forest tracker"
      ]
    },
    {
      "item": "mystic warden's blue-guard boots",
      "type": "feet",
      "monsters": [
        "forsaken undead-warrior monk"
      ]
    },
    {
      "item": "pair of cinderweb legguards",
      "type": "legs",
      "monsters": [
        "smoldering black hearthound"
      ]
    },
    {
      "item": "serrated gloves of the hunt",
      "type": "weapon",
      "monsters": [
        "elite craebaen huntmaster"
      ]
    },
    {
      "item": "shrouded spear",
      "type": "weapon",
      "monsters": [
        "elite craebaen huntmaster"
      ]
    },
    {
      "item": "spiked fire infused casque",
      "type": "head",
      "monsters": [
        "smoldering black hearthound"
      ]
    },
    {
      "item": "spiked fist of pure force",
      "type": "weapon",
      "monsters": [
        "forsaken undead warrior-monk"
      ]
    },
    {
      "item": "storm singer's scaled boots",
      "type": "feet",
      "monsters": [
        "elite craebaen huntmaster"
      ]
    },
    {
      "item": "studded cap of the wayward bard",
      "type": "head",
      "monsters": [
        "forsaken undead warrior-monk"
      ]
    },
    {
      "item": "tracker's treads",
      "type": "feet",
      "monsters": [
        "grizzled craebaen forest tracker"
      ]
    }
  ],
  "Straits of Mingo": [
    {
      "item": "bloody talon",
      "type": "weapon",
      "monsters": [
        "psychotic seagull"
      ]
    },
    {
      "item": "camouflaged scale leggings",
      "type": "legs",
      "monsters": [
        "reef stonefish"
      ]
    },
    {
      "item": "cloudy thundering crystal rod",
      "type": "weapon",
      "monsters": [
        "wizard outcast"
      ]
    },
    {
      "item": "cutthroat's chestguard",
      "type": "body",
      "monsters": [
        "wizard outcast"
      ]
    },
    {
      "item": "discarded kaidite gauntlets",
      "type": "hands",
      "monsters": [
        "reef stonefish"
      ]
    },
    {
      "item": "enchanted silk fists",
      "type": "hands",
      "monsters": [
        "wizard outcast"
      ]
    },
    {
      "item": "hawkfeather tunic",
      "type": "body",
      "monsters": [
        "bedraggled castaway"
      ]
    },
    {
      "item": "headdress of the albatross",
      "type": "head",
      "monsters": [
        "diving albatross"
      ]
    },
    {
      "item": "heavy rusted mace",
      "type": "weapon",
      "monsters": [
        "wizard outcast"
      ]
    },
    {
      "item": "mesh mariner's boots",
      "type": "feet",
      "monsters": [
        "Red Legion deserter"
      ]
    },
    {
      "item": "razor-sharp lobster claws",
      "type": "weapon",
      "monsters": [
        "giant razor-claw lobster"
      ]
    },
    {
      "item": "razored lobster claw",
      "type": "weapon",
      "monsters": [
        "giant razor-claw lobster"
      ]
    },
    {
      "item": "seafarer's sandals",
      "type": "feet",
      "monsters": [
        "bedraggled castaway"
      ]
    },
    {
      "item": "shiny blue plate armor",
      "type": "body",
      "monsters": [
        "Red Legion deserter"
      ]
    },
    {
      "item": "soft down-feathered headband",
      "type": "head",
      "monsters": [
        "diving albatross"
      ]
    },
    {
      "item": "staff of petrified wood",
      "type": "weapon",
      "monsters": [
        "wizard outcast"
      ]
    },
    {
      "item": "strong pair of leather gloves",
      "type": "hands",
      "monsters": [
        "kaidite refugee"
      ]
    },
    {
      "item": "strong pair of leather pants",
      "type": "legs",
      "monsters": [
        "Kaidite refugee"
      ]
    },
    {
      "item": "twisted knot of driftwood",
      "type": "jewel",
      "monsters": [
        "psychotic seagull"
      ]
    },
    {
      "item": "worn oar",
      "type": "weapon",
      "monsters": [
        "Red Legion deserter"
      ]
    }
  ],
  "Teeth of Heaven": [
    {
      "item": "axe of deep night",
      "type": "weapon",
      "monsters": [
        "greater giant"
      ]
    },
    {
      "item": "blood-stained cypress shield",
      "type": "shield",
      "monsters": [
        "greater troll"
      ]
    },
    {
      "item": "cracked dragon plate armor",
      "type": "body",
      "monsters": [
        "greater troll"
      ]
    },
    {
      "item": "darkened roc-skin boots",
      "type": "feet",
      "monsters": [
        "earth giant"
      ]
    },
    {
      "item": "fierce studded gauntlets",
      "type": "hands",
      "monsters": [
        "snarling werecat"
      ]
    },
    {
      "item": "greatsword of the mountain",
      "type": "weapon",
      "monsters": [
        "earth giant"
      ]
    },
    {
      "item": "long tiger tooth",
      "type": "weapon",
      "monsters": [
        "black-striped tiger"
      ]
    },
    {
      "item": "necklace of dragon fangs",
      "type": "jewel",
      "monsters": [
        "frost giant"
      ]
    },
    {
      "item": "pair of roughweather boots",
      "type": "feet",
      "monsters": [
        "black-striped tiger"
      ]
    },
    {
      "item": "pants of the wyvern",
      "type": "legs",
      "monsters": [
        "rock wyvern"
      ]
    },
    {
      "item": "ravaged clerical robe",
      "type": "body",
      "monsters": [
        "black-striped tiger"
      ]
    },
    {
      "item": "ringmail boots of dawn",
      "type": "feet",
      "monsters": [
        "greater giant"
      ]
    },
    {
      "item": "rock wyvern scaled armor",
      "type": "body",
      "monsters": [
        "rock wyvern"
      ]
    },
    {
      "item": "shimmering moondust boots",
      "type": "feet",
      "monsters": [
        "snarling werecat"
      ]
    },
    {
      "item": "shiny black padded armor",
      "type": "body",
      "monsters": [
        "greater giant"
      ]
    },
    {
      "item": "snarling spear",
      "type": "weapon",
      "monsters": [
        "snarling werecat"
      ]
    },
    {
      "item": "stinger-armed longbow",
      "type": "weapon",
      "monsters": [
        "snarling werecat"
      ]
    },
    {
      "item": "tribal cloth cloak",
      "type": "cloak",
      "monsters": [
        "earth giant",
        "frost giant",
        "greater troll"
      ]
    },
    {
      "item": "two-handed sunderer of frost",
      "type": "weapon",
      "monsters": [
        "frost giant"
      ]
    }
  ],
  "Terandhel": [
    {
      "item": "blood-infused hands of frost",
      "type": "hands",
      "monsters": [
        "vicious looter"
      ]
    },
    {
      "item": "captain's barbute",
      "type": "head",
      "monsters": [
        "mercenary captain"
      ]
    },
    {
      "item": "chimaeran longsword",
      "type": "weapon",
      "monsters": [
        "goblin sapper"
      ]
    },
    {
      "item": "dark crimson surcoat",
      "type": "body",
      "monsters": [
        "skilled mercenary"
      ]
    },
    {
      "item": "elven cloak",
      "type": "cloak",
      "monsters": [
        "orc raider"
      ]
    },
    {
      "item": "embroidered red velvet vest",
      "type": "body",
      "monsters": [
        "mercenary captain"
      ]
    },
    {
      "item": "hazy cotton pants",
      "type": "legs",
      "monsters": [
        "goblin sapper"
      ]
    },
    {
      "item": "knight guard's chainplate gauntlets",
      "type": "hands",
      "monsters": [
        "skilled mercenary"
      ]
    },
    {
      "item": "leather pads of silence",
      "type": "feet",
      "monsters": [
        "skilled mercenary"
      ]
    },
    {
      "item": "locket of a dead lover",
      "type": "jewel",
      "monsters": [
        "gnoll archer"
      ]
    },
    {
      "item": "marksman's great bow",
      "type": "weapon",
      "monsters": [
        "gnoll archer"
      ]
    },
    {
      "item": "mercenary's greatsword",
      "type": "weapon",
      "monsters": [
        "weathered mecenary"
      ]
    },
    {
      "item": "pair of thunderous war plate boots",
      "type": "feet",
      "monsters": [
        "orc raider"
      ]
    },
    {
      "item": "peacekeeper grips",
      "type": "hands",
      "monsters": [
        "gnoll archer"
      ]
    },
    {
      "item": "ringmail helm of dawn",
      "type": "head",
      "monsters": [
        "orc raider"
      ]
    },
    {
      "item": "sellsword's skullcap",
      "type": "head",
      "monsters": [
        "weathered mecenary"
      ]
    },
    {
      "item": "set of iron lockpicks",
      "type": "wielded",
      "monsters": [
        "vicious looter"
      ]
    },
    {
      "item": "spiked climbing boots",
      "type": "feet",
      "monsters": [
        "mercenary captain"
      ]
    },
    {
      "item": "stolen medics instruction book",
      "type": "shield",
      "monsters": [
        "vicious looter"
      ]
    },
    {
      "item": "twinkling scimitar",
      "type": "weapon",
      "monsters": [
        "vicious looter"
      ]
    },
    {
      "item": "worn studded scout's boots",
      "type": "feet",
      "monsters": [
        "gnoll archer"
      ]
    }
  ],
  "Thorn Forest": [
    {
      "item": "ancient oak-protector's barkskin boots",
      "type": "feet",
      "monsters": [
        "mithril plated le'Daver"
      ]
    },
    {
      "item": "deeproot cypress footguards",
      "type": "feet",
      "monsters": [
        "thorned va'salka tree"
      ]
    },
    {
      "item": "dual blades of twisted vines",
      "type": "weapon",
      "monsters": [
        "Zra'Ral vine"
      ]
    },
    {
      "item": "Dur'mulian armor",
      "type": "body",
      "monsters": [
        "razor backed E'Demar"
      ]
    },
    {
      "item": "emerald feathered headdress",
      "type": "head",
      "monsters": [
        "emerald winged Ka'Darma"
      ]
    },
    {
      "item": "gorestrung raptor-talon ripper",
      "type": "weapon",
      "monsters": [
        "emerald winged Ka'Darma"
      ]
    },
    {
      "item": "halberd of horns",
      "type": "weapon",
      "monsters": [
        "mithril horn billed Da'Tang"
      ]
    },
    {
      "item": "plated le'Daver hide cloak",
      "type": "cloak",
      "monsters": [
        "mithril plated le'Daver"
      ]
    },
    {
      "item": "razored hood of despair",
      "type": "head",
      "monsters": [
        "razor backed E'Demar"
      ]
    },
    {
      "item": "ring of thorns",
      "type": "jewel",
      "monsters": [
        "Zra'Ral vine"
      ]
    },
    {
      "item": "spindly brown twig",
      "type": "weapon",
      "monsters": [
        "thorned va'salka tree"
      ]
    },
    {
      "item": "storm singer's coat of plates",
      "type": "body",
      "monsters": [
        "mithril horn billed Da'Tang"
      ]
    },
    {
      "item": "thorned spear",
      "type": "weapon",
      "monsters": [
        "mithril plated le'Daver"
      ]
    },
    {
      "item": "treant heart",
      "type": "jewel",
      "monsters": [
        "vengeful barbed treant"
      ]
    }
  ],
  "Twisted Jungle": [
    {
      "item": "chestplate of the hunter",
      "type": "body",
      "monsters": [
        "great albino jaguar"
      ]
    },
    {
      "item": "choker of the swarm",
      "type": "jewel",
      "monsters": [
        "swarm of fiery azteca ants"
      ]
    },
    {
      "item": "enchanted Yarubian sacrificial dagger",
      "type": "weapon",
      "monsters": [
        "Yarubian shaman"
      ]
    },
    {
      "item": "flaming insect glaive",
      "type": "weapon",
      "monsters": [
        "swarm of fiery azteca ants"
      ]
    },
    {
      "item": "glowing diamond",
      "type": "material",
      "monsters": [
        "Yarubian shaman"
      ]
    },
    {
      "item": "great ape hammer",
      "type": "weapon",
      "monsters": [
        "black jungle gorilla"
      ]
    },
    {
      "item": "longbow of lingering death",
      "type": "weapon",
      "monsters": [
        "poison arrow frog"
      ]
    },
    {
      "item": "ocelot hide chestpiece",
      "type": "body",
      "monsters": [
        "black spotted ocelot"
      ]
    },
    {
      "item": "picarie beak blade",
      "type": "weapon",
      "monsters": [
        "jungle picarie"
      ]
    },
    {
      "item": "razordart blowgun",
      "type": "weapon",
      "monsters": [
        "black spotted ocelot"
      ]
    },
    {
      "item": "sceptre of the thunderbird",
      "type": "weapon",
      "monsters": [
        "Yarubian thunderbird"
      ]
    },
    {
      "item": "singing sceptre",
      "type": "weapon",
      "monsters": [
        "silver cicada"
      ]
    },
    {
      "item": "slender feathered blowgun",
      "type": "weapon",
      "monsters": [
        "Yarubian bird of paradise"
      ]
    },
    {
      "item": "spider-bite spear",
      "type": "weapon",
      "monsters": [
        "Yarubian monkey-eating spider"
      ]
    },
    {
      "item": "storm singer's scaled cloak",
      "type": "cloak",
      "monsters": [
        "jungle picarie"
      ]
    },
    {
      "item": "storm singer's scaled leggings",
      "type": "legs",
      "monsters": [
        "silver cicada"
      ]
    },
    {
      "item": "twisted black gauntlets",
      "type": "hands",
      "monsters": [
        "Yarubian thunderbird"
      ]
    },
    {
      "item": "twisted bone hammer",
      "type": "weapon",
      "monsters": [
        "long limbed oran utan"
      ]
    },
    {
      "item": "unrelenting grips",
      "type": "hands",
      "monsters": [
        "giant emerald anaconda"
      ]
    },
    {
      "item": "vine wrapped targe",
      "type": "shield",
      "monsters": [
        "long limbed oran utan"
      ]
    },
    {
      "item": "yarubian soothsayer staff",
      "type": "weapon",
      "monsters": [
        "Yarubian tribesman"
      ]
    }
  ],
  "Venomvein Timberland": [
    {
      "item": "arcane spidersilk boots",
      "type": "feet",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "chitin-scaled recurve bow",
      "type": "weapon",
      "monsters": [
        "Broodmother, Aanaret"
      ]
    },
    {
      "item": "chitin-studded jacket",
      "type": "body",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "corroded hammer",
      "type": "weapon",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "crawler boots",
      "type": "feet",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "Dur'mulian scarab",
      "type": "jewel",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "fine black silk cape",
      "type": "cloak",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "gloves of distortion",
      "type": "hands",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "gloves of silkwood",
      "type": "hands",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "ichor-stained mesh boots",
      "type": "feet",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "jagged blade of chitin",
      "type": "weapon",
      "monsters": [
        "large male wolf spider"
      ]
    },
    {
      "item": "pendant of ancient amber",
      "type": "jewel",
      "monsters": [
        "Broodmother, Aanaret"
      ]
    },
    {
      "item": "petrified spiderweave gauntlets",
      "type": "hands",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "raging lanate hammer",
      "type": "weapon",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "severed broodmother chelicera",
      "type": "weapon",
      "monsters": [
        "Broodmother, Aanaret"
      ]
    },
    {
      "item": "severed broodmother leg",
      "type": "weapon",
      "monsters": [
        "Broodmother, Aanaret"
      ]
    },
    {
      "item": "sharpened spider-leg spear",
      "type": "weapon",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "silk footguards of strength",
      "type": "feet",
      "monsters": [
        "man-sized jumping spider"
      ]
    },
    {
      "item": "snow worm larva",
      "type": "material",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "sparkling spider-shaped broach",
      "type": "jewel",
      "monsters": [
        "enourmous female wolf spider"
      ]
    },
    {
      "item": "spider shield",
      "type": "shield",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "steady spiderwave leather boots",
      "type": "feet",
      "monsters": [
        "gargantuan tarantula"
      ]
    },
    {
      "item": "thick spider-hair pants",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "thin chitin buckler",
      "type": "shield",
      "monsters": [
        "chitin-shelled scarab"
      ]
    },
    {
      "item": "torn studded riding leggings",
      "type": "legs",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "travel-worn cloak",
      "type": "cloak",
      "monsters": [
        "elderly web weaver"
      ]
    },
    {
      "item": "warped hissing blade",
      "type": "weapon",
      "monsters": [
        "great hissing spider"
      ]
    },
    {
      "item": "widow's pike",
      "type": "weapon",
      "monsters": [
        "fully-grown black widow"
      ]
    },
    {
      "item": "worn studded scout's hood",
      "type": "head",
      "monsters": [
        "great hissing spider"
      ]
    }
  ],
  "Wildwood": [
    {
      "item": "azure ringmail coif",
      "type": "head",
      "monsters": [
        "giant screech owl"
      ]
    },
    {
      "item": "azure ringmail leggings",
      "type": "legs",
      "monsters": [
        "giant moose"
      ]
    },
    {
      "item": "blade of the deep wood",
      "type": "weapon",
      "monsters": [
        "sequoia"
      ]
    },
    {
      "item": "cudgel of sparks",
      "type": "weapon",
      "monsters": [
        "lesser tree spirit"
      ]
    },
    {
      "item": "deer-skin gloves",
      "type": "hands",
      "monsters": [
        "bristlecone pine",
        "giant mink",
        "giant moose"
      ]
    },
    {
      "item": "defiant warlock's staff",
      "type": "weapon",
      "monsters": [
        "bristlecone",
        "lesser tree spirit"
      ]
    },
    {
      "item": "heavy blackjack",
      "type": "weapon",
      "monsters": [
        "giant screech owl"
      ]
    },
    {
      "item": "heavy war axe",
      "type": "weapon",
      "monsters": [
        "sequoia"
      ]
    },
    {
      "item": "lesser staff of lightning",
      "type": "weapon",
      "monsters": [
        "giant moose",
        "pack of wolves"
      ]
    },
    {
      "item": "moose horn helmet",
      "type": "head",
      "monsters": [
        "giant moose"
      ]
    },
    {
      "item": "mud encrusted shortsword",
      "type": "weapon",
      "monsters": [
        "bristlecone pine"
      ]
    },
    {
      "item": "sharpened ceremonial axe",
      "type": "weapon",
      "monsters": [
        "giant mink",
        "great screech owl"
      ]
    },
    {
      "item": "superior hammer",
      "type": "weapon",
      "monsters": [
        "bristlecone pine",
        "giant moose"
      ]
    },
    {
      "item": "two-handed bone mace",
      "type": "weapon",
      "monsters": [
        "pack of wolves"
      ]
    },
    {
      "item": "wild leather boots",
      "type": "feet",
      "monsters": [
        "bristlecone pine",
        "giant screech owl"
      ]
    }
  ],
  "Field of Sorrow": [
    {
      "item": "blackhearted slaver treads",
      "type": "feet",
      "monsters": [
        "slave lord"
      ]
    },
    {
      "item": "brilliant ruby ring",
      "type": "jewel",
      "monsters": [
        "slave lord"
      ]
    },
    {
      "item": "burnished scaled legwraps",
      "type": "legs",
      "monsters": [
        "poor farmer"
      ]
    },
    {
      "item": "chestplate of sorrow",
      "type": "body",
      "monsters": [
        "Kaidite farmer"
      ]
    },
    {
      "item": "child's blanket",
      "type": "cloak",
      "monsters": [
        "sickly child"
      ]
    },
    {
      "item": "cloak of silver coins",
      "type": "cloak",
      "monsters": [
        "enraged farmer"
      ]
    },
    {
      "item": "darksteel gauntlets",
      "type": "hands",
      "monsters": [
        "black marketeer"
      ]
    },
    {
      "item": "earthshatter spear",
      "type": "weapon",
      "monsters": [
        "enraged farmhand"
      ]
    },
    {
      "item": "harvester's pitchfork",
      "type": "weapon",
      "monsters": [
        "harvester"
      ]
    },
    {
      "item": "helmet etched with a teardrop",
      "type": "head",
      "monsters": [
        "tax collector"
      ]
    },
    {
      "item": "iron shod smuggler's staff",
      "type": "weapon",
      "monsters": [
        "black marketter"
      ]
    },
    {
      "item": "massive sledgehammer",
      "type": "weapon",
      "monsters": [
        "slave laborer"
      ]
    },
    {
      "item": "mud-caked coyote hide boots",
      "type": "feet",
      "monsters": [
        "poor farmer"
      ]
    },
    {
      "item": "pilum of fangs",
      "type": "weapon",
      "monsters": [
        "yellow-backed coyote"
      ]
    },
    {
      "item": "repurposed pot lid",
      "type": "shield",
      "monsters": [
        "slave laborer"
      ]
    },
    {
      "item": "scythe of unending misery",
      "type": "weapon",
      "monsters": [
        "Kaidite farmer"
      ]
    },
    {
      "item": "smuggler's shortbow",
      "type": "weapon",
      "monsters": [
        "one-eyed smuggler"
      ]
    },
    {
      "item": "soft rat fur slippers",
      "type": "feet",
      "monsters": [
        "blood rat"
      ]
    },
    {
      "item": "vermillion rat fur",
      "type": null,
      "monsters": [
        "blood rat"
      ]
    },
    {
      "item": "well-worn hunting bow",
      "type": "weapon",
      "monsters": [
        "enraged farmhand"
      ]
    },
    {
      "item": "wicked barbed club",
      "type": "weapon",
      "monsters": [
        "slaver"
      ]
    },
    {
      "item": "wombat fur robe",
      "type": "body",
      "monsters": [
        "wombat"
      ]
    },
    {
      "item": "yard of rosewood",
      "type": "material",
      "monsters": [
        "harvester"
      ]
    }
  ],
  "Field of Sorrow - Graveyard": [
    {
      "item": "banished wraith's boots of anguish",
      "type": "feet",
      "monsters": [
        "shadow wraith"
      ]
    },
    {
      "item": "claymore of night",
      "type": "weapon",
      "monsters": [
        "night hag"
      ]
    },
    {
      "item": "cursed rod of sorrow",
      "type": "weapon",
      "monsters": [
        "night hag"
      ]
    },
    {
      "item": "ghostwalker breeches",
      "type": "legs",
      "monsters": [
        "shadow wraith"
      ]
    },
    {
      "item": "legplates of crystalized tears",
      "type": "legs",
      "monsters": [
        "wraith lord"
      ]
    },
    {
      "item": "spectral wraith talons",
      "type": "weapon",
      "monsters": [
        "wraith lord"
      ]
    }
  ],
  "Fire Valley - North": [
    {
      "item": "coarse gloves of chaos",
      "type": "hands",
      "monsters": [
        "hill centaur"
      ]
    },
    {
      "item": "great gray wolf pelt",
      "type": "cloak",
      "monsters": [
        "grey guardian wolf"
      ]
    },
    {
      "item": "heavy centaur shield",
      "type": "shield",
      "monsters": [
        "hill centaur"
      ]
    },
    {
      "item": "hound's hellfire longbow",
      "type": "weapon",
      "monsters": [
        "greater hell hound"
      ]
    },
    {
      "item": "robe of silvery threads",
      "type": "body",
      "monsters": [
        "quickling lord"
      ]
    },
    {
      "item": "scorched chestplate of hellstone",
      "type": "body",
      "monsters": [
        "greater hell hound"
      ]
    },
    {
      "item": "shattered bloody staff",
      "type": "weapon",
      "monsters": [
        "bloodbear"
      ]
    },
    {
      "item": "silver visage of ferocity",
      "type": "head",
      "monsters": [
        "silver guardian wolf"
      ]
    },
    {
      "item": "silver wolf handguards",
      "type": "hands",
      "monsters": [
        "silver guardian wolf"
      ]
    },
    {
      "item": "sparkling returning dagger",
      "type": "weapon",
      "monsters": [
        "quickling lord"
      ]
    }
  ],
  "Fire Valley - South": [
    {
      "item": "ancient sand dragon hide",
      "type": "body",
      "monsters": [
        "ancient sand dragon"
      ]
    },
    {
      "item": "antique warmace",
      "type": "weapon",
      "monsters": [
        "ancient sand dragon"
      ]
    },
    {
      "item": "cloak of the mistfallen",
      "type": "cloak",
      "monsters": [
        "greater steam elemental"
      ]
    },
    {
      "item": "engraved scarlet kris",
      "type": "weapon",
      "monsters": [
        "greater fire salamander"
      ]
    },
    {
      "item": "fiery scaled tunic",
      "type": "body",
      "monsters": [
        "fire walker"
      ]
    },
    {
      "item": "flame-etched blacksteel treads",
      "type": "feet",
      "monsters": [
        "fire walker"
      ]
    },
    {
      "item": "flame-red salamander skin cap",
      "type": "head",
      "monsters": [
        "lesser fire salamander"
      ]
    },
    {
      "item": "flame-red salamander skin jerkin",
      "type": "body",
      "monsters": [
        "greater fire salamander"
      ]
    },
    {
      "item": "large rock wyrm fang",
      "type": "weapon",
      "monsters": [
        "mature rock wyrm"
      ]
    },
    {
      "item": "small rock wyrm fang",
      "type": "weapon",
      "monsters": [
        "hatchling rock wyrm"
      ]
    },
    {
      "item": "solid stone sabatons",
      "type": "feet",
      "monsters": [
        "aged rocky wyrm"
      ]
    },
    {
      "item": "wavering gray gemstone bracelet",
      "type": "jewel",
      "monsters": [
        "greater steam elemental"
      ]
    },
    {
      "item": "wyrm-hide boots of destruction",
      "type": "feet",
      "monsters": [
        "aged rocky wyrm"
      ]
    }
  ],
  "Fire Valley - Water": [
    {
      "item": "crawdad scaled leggings",
      "type": "legs",
      "monsters": [
        "blood crawdad"
      ]
    },
    {
      "item": "hammerhead's head",
      "type": "weapon",
      "monsters": [
        "hammerhead"
      ]
    }
  ],
  "Forked Tongue": [
    {
      "item": "albino rattler fang",
      "type": "weapon",
      "monsters": [
        "albino rattler"
      ]
    },
    {
      "item": "cloak of stitched toad tongues",
      "type": "cloak",
      "monsters": [
        "speckled toad"
      ]
    },
    {
      "item": "crimson spidersilk tunic",
      "type": "body",
      "monsters": [
        "crimson tree spider"
      ]
    },
    {
      "item": "lizardskin buckler",
      "type": "shield",
      "monsters": [
        "spotted lizard"
      ]
    },
    {
      "item": "mantle of the serpent",
      "type": "cloak",
      "monsters": [
        "albino rattler"
      ]
    },
    {
      "item": "poison spitter",
      "type": "weapon",
      "monsters": [
        "spitting tree frog"
      ]
    },
    {
      "item": "ruddy chitin breastplate",
      "type": "body",
      "monsters": [
        "crimson tree spider"
      ]
    },
    {
      "item": "scepter of the adder",
      "type": "weapon",
      "monsters": [
        "death adder"
      ]
    },
    {
      "item": "supple snakeskin leggings",
      "type": "legs",
      "monsters": [
        "death adder"
      ]
    },
    {
      "item": "violet spidersilk gloves",
      "type": "hands",
      "monsters": [
        "violet spider"
      ]
    }
  ],
  "Golem Lake": [
    {
      "item": "bar of pure alloy",
      "type": "material",
      "monsters": [
        "dirty dwarven miner"
      ]
    },
    {
      "item": "chitinous war shield",
      "type": "shield",
      "monsters": [
        "giant venomous water spider"
      ]
    },
    {
      "item": "dented miner's helmet",
      "type": "head",
      "monsters": [
        "smelly dwarven miner"
      ]
    },
    {
      "item": "dwarven brawler's wraps",
      "type": "hands",
      "monsters": [
        "dirty dwarven miner"
      ]
    },
    {
      "item": "fang of wetweb's doom",
      "type": "weapon",
      "monsters": [
        "giant venomous water spider"
      ]
    },
    {
      "item": "fingerless lake hydra gloves",
      "type": "hands",
      "monsters": [
        "five-headed lake hydra"
      ]
    },
    {
      "item": "fishbone earring",
      "type": "jewel",
      "monsters": [
        "puff fish"
      ]
    },
    {
      "item": "flawless mining boots",
      "type": "feet",
      "monsters": [
        "dirty dwarven miner"
      ]
    },
    {
      "item": "gem-dusted pantaloons",
      "type": "legs",
      "monsters": [
        "smelly dwarven miner"
      ]
    },
    {
      "item": "gibbous blade of churning",
      "type": "weapon",
      "monsters": [
        "frenzied swarm of piranha's"
      ]
    },
    {
      "item": "light dwarven work gloves",
      "type": "hands",
      "monsters": [
        "soot-covered miner"
      ]
    },
    {
      "item": "loathsome antediluvian spear",
      "type": "weapon",
      "monsters": [
        "thrashing speartooth shark"
      ]
    },
    {
      "item": "oiled sharkskin cloak",
      "type": "cloak",
      "monsters": [
        "thrashing speartooth shark"
      ]
    },
    {
      "item": "overlord's razor of correction",
      "type": "weapon",
      "monsters": [
        "mining crew overlord"
      ]
    },
    {
      "item": "razortooth gauntlets",
      "type": "hands",
      "monsters": [
        "frenzied swarm of piranha's"
      ]
    },
    {
      "item": "staff of the hydra",
      "type": "weapon",
      "monsters": [
        "five-headed lake hydra"
      ]
    },
    {
      "item": "stone-scaled cloak",
      "type": "cloak",
      "monsters": [
        "mining crew overlord"
      ]
    },
    {
      "item": "tinderspark club",
      "type": "weapon",
      "monsters": [
        "soot-covered miner"
      ]
    }
  ],
  "Green Valley": [
    {
      "item": "badger hide jerkin",
      "type": "body",
      "monsters": [
        "spotted badger"
      ]
    },
    {
      "item": "badgerskin dungarees",
      "type": "legs",
      "monsters": [
        "spotted badger"
      ]
    },
    {
      "item": "green handled punch dagger",
      "type": "weapon",
      "monsters": [
        "green valley assassin"
      ]
    },
    {
      "item": "green valley blade",
      "type": "weapon",
      "monsters": [
        "green valley ranger"
      ]
    },
    {
      "item": "green valley bulwark",
      "type": "shield",
      "monsters": [
        "green valley guard"
      ]
    },
    {
      "item": "grips of forest green",
      "type": "hands",
      "monsters": [
        "green valley scout"
      ]
    },
    {
      "item": "livewood marksman's bow",
      "type": "weapon",
      "monsters": [
        "green valley ranger"
      ]
    },
    {
      "item": "many pocketed leggings",
      "type": "legs",
      "monsters": [
        "green valley assassin"
      ]
    },
    {
      "item": "scout's curved blade",
      "type": "weapon",
      "monsters": [
        "green valley scout"
      ]
    },
    {
      "item": "splinted cloak of the valley",
      "type": "cloak",
      "monsters": [
        "green valley guard"
      ]
    },
    {
      "item": "translucent rock",
      "type": "material",
      "monsters": [
        "green valley ranger"
      ]
    }
  ],
  "Kaid Merchant Quarters": [
    {
      "item": "breeches of dark hells",
      "type": "legs",
      "monsters": [
        "shadow thief"
      ]
    },
    {
      "item": "carved obsidian longstaff",
      "type": "weapon",
      "monsters": [
        "neophyte necromancer"
      ]
    },
    {
      "item": "chestguard of diversion",
      "type": "body",
      "monsters": [
        "weapons smuggler"
      ]
    },
    {
      "item": "compact blackjack",
      "type": "weapon",
      "monsters": [
        "green-robed merchant"
      ]
    },
    {
      "item": "cowl of night",
      "type": "head",
      "monsters": [
        "shadow spy"
      ]
    },
    {
      "item": "crimson cloak of the sands",
      "type": "cloak",
      "monsters": [
        "red-robed merchant"
      ]
    },
    {
      "item": "crimson-dyed robe",
      "type": "body",
      "monsters": [
        "crimson-robed infidel"
      ]
    },
    {
      "item": "dented worker's helmet",
      "type": "head",
      "monsters": [
        "disgruntled warehouse worker"
      ]
    },
    {
      "item": "disturbed shadow coif",
      "type": "head",
      "monsters": [
        "shadow swindler"
      ]
    },
    {
      "item": "fire dragon tongue",
      "type": "material",
      "monsters": [
        "dark magician"
      ]
    },
    {
      "item": "heavy handyman's mallet",
      "type": "weapon",
      "monsters": [
        "burly handyman"
      ]
    },
    {
      "item": "inquisitor's staff of torture",
      "type": "weapon",
      "monsters": [
        "inquisitor"
      ]
    },
    {
      "item": "inquisitor's wand of torture",
      "type": "weapon",
      "monsters": [
        "inquisitor"
      ]
    },
    {
      "item": "itchy camel hair pants",
      "type": "legs",
      "monsters": [
        "camel dealer"
      ]
    },
    {
      "item": "ivory-handled mace",
      "type": "weapon",
      "monsters": [
        "weapons smuggler"
      ]
    },
    {
      "item": "linked cape of protection",
      "type": "cloak",
      "monsters": [
        "mind flayer"
      ]
    },
    {
      "item": "massive cast-iron frying pan",
      "type": "weapon",
      "monsters": [
        "cook"
      ]
    },
    {
      "item": "merchant's brown robe",
      "type": "body",
      "monsters": [
        "brown-robed merchant"
      ]
    },
    {
      "item": "pair of soft black gloves",
      "type": "hands",
      "monsters": [
        "crimson-robed infidel"
      ]
    },
    {
      "item": "peddler's worn gloves",
      "type": "hands",
      "monsters": [
        "herb peddler"
      ]
    },
    {
      "item": "punishing knuckles",
      "type": "weapon",
      "monsters": [
        "warehouse junkie"
      ]
    },
    {
      "item": "resplendent turban of kaidite silk",
      "type": "head",
      "monsters": [
        "turban merchant"
      ]
    },
    {
      "item": "scuffed copper coin on a chain",
      "type": "jewel",
      "monsters": [
        "street urchin"
      ]
    },
    {
      "item": "shadow stiletto",
      "type": "weapon",
      "monsters": [
        "shadow spy"
      ]
    },
    {
      "item": "shield of shadows",
      "type": "shield",
      "monsters": [
        "shadow thief"
      ]
    },
    {
      "item": "silent gray leggings of the sneak",
      "type": "legs",
      "monsters": [
        "cutpurse"
      ]
    },
    {
      "item": "treads of treachery",
      "type": "feet",
      "monsters": [
        "shadow swindler"
      ]
    }
  ],
  "Kaid Merchant Quarters - Mansion Cellar": [
    {
      "item": "broken wine bottle",
      "type": "weapon",
      "monsters": [
        "evil wine steward"
      ]
    },
    {
      "item": "deep purple cloak of darkest night",
      "type": "cloak",
      "monsters": [
        "neophyte necromancer"
      ]
    },
    {
      "item": "helm of demonic trials",
      "type": "head",
      "monsters": [
        "dark magician"
      ]
    },
    {
      "item": "pair of discarded Red Legion boots",
      "type": "feet",
      "monsters": [
        "shambler"
      ]
    },
    {
      "item": "ruby-capped ivory staff",
      "type": "weapon",
      "monsters": [
        "dark magician"
      ]
    },
    {
      "item": "shadowed helmet of the immortals",
      "type": "head",
      "monsters": [
        "evil wine steward"
      ]
    }
  ],
  "Kaid Merchant Quarters - Mansion Staircase": [
    {
      "item": "blood red two-handed sword",
      "type": "weapon",
      "monsters": [
        "vampire thrall"
      ]
    },
    {
      "item": "boots of dusk",
      "type": "feet",
      "monsters": [
        "lord vampire"
      ]
    },
    {
      "item": "linked cape of protection",
      "type": "cloak",
      "monsters": [
        "mind flayer"
      ]
    },
    {
      "item": "lord vampire's dread gambison",
      "type": "body",
      "monsters": [
        "lord vampire"
      ]
    },
    {
      "item": "thrall's grips of violence",
      "type": "hands",
      "monsters": [
        "vampire thrall"
      ]
    },
    {
      "item": "treads of thoughtfulness",
      "type": "feet",
      "monsters": [
        "mind flayer"
      ]
    }
  ],
  "Kaid Military Quarters": [
    {
      "item": "barkeep's peace maker",
      "type": "weapon",
      "monsters": [
        "Red Legion barkeep"
      ]
    },
    {
      "item": "beer-stained drunkard's cloak",
      "type": "cloak",
      "monsters": [
        "Red Legion barkeep"
      ]
    },
    {
      "item": "champion's battle axe",
      "type": "weapon",
      "monsters": [
        "Red Legion champion"
      ]
    },
    {
      "item": "champion's buckler",
      "type": "shield",
      "monsters": [
        "Red Legion champion"
      ]
    },
    {
      "item": "crimson greatstaff of the legion",
      "type": "weapon",
      "monsters": [
        "Red Legion chaplain"
      ]
    },
    {
      "item": "crimson rod of the legion",
      "type": "weapon",
      "monsters": [
        "Red Legion chaplain"
      ]
    },
    {
      "item": "crimson-wrapped bec de corbin",
      "type": "weapon",
      "monsters": [
        "Red Legion sentry"
      ]
    },
    {
      "item": "engraved marksman's wristguards",
      "type": "hands",
      "monsters": [
        "Red Legion archer"
      ]
    },
    {
      "item": "Kaidite flux",
      "type": "material",
      "monsters": [
        "Red Legion armorer"
      ]
    },
    {
      "item": "knuckles of brawling",
      "type": "weapon",
      "monsters": [
        "burly mercenary"
      ]
    },
    {
      "item": "mercenary's boots of the forlorn",
      "type": "feet",
      "monsters": [
        "burly mercenary"
      ]
    },
    {
      "item": "mercenary's helmet of discipline",
      "type": "head",
      "monsters": [
        "burly mercenary"
      ]
    },
    {
      "item": "Red Legion buckler",
      "type": "shield",
      "monsters": [
        "Red Legion regular"
      ]
    },
    {
      "item": "Red Legion cloak",
      "type": "cloak",
      "monsters": [
        "Red Legion sentry"
      ]
    },
    {
      "item": "Red Legion recurved bow of torment",
      "type": "weapon",
      "monsters": [
        "Red Legion archer"
      ]
    },
    {
      "item": "slippers of serenity",
      "type": "feet",
      "monsters": [
        "Red Legion chaplain"
      ]
    },
    {
      "item": "spear of utmost command",
      "type": "weapon",
      "monsters": [
        "Red Legion commander"
      ]
    },
    {
      "item": "standard issue warmace",
      "type": "weapon",
      "monsters": [
        "Red Legion regular"
      ]
    },
    {
      "item": "thundering cloak of victory",
      "type": "cloak",
      "monsters": [
        "Red Legion champion"
      ]
    },
    {
      "item": "thundering legplates of victory",
      "type": "legs",
      "monsters": [
        "Red Legion champion"
      ]
    },
    {
      "item": "unyielding dusty warshield",
      "type": "shield",
      "monsters": [
        "Red Legion commander"
      ]
    },
    {
      "item": "warmace of utmost command",
      "type": "weapon",
      "monsters": [
        "Red Legion commander"
      ]
    }
  ],
  "Kaid Religious Quarters": [
    {
      "item": "bleached white bone staff",
      "type": "weapon",
      "monsters": [
        "priest of Ahrimal"
      ]
    },
    {
      "item": "gleaming Kaidite thread",
      "type": "material",
      "monsters": [
        "white-robed priestess"
      ]
    },
    {
      "item": "Helkan studded boots",
      "type": "feet",
      "monsters": [
        "warrior of Helk"
      ]
    },
    {
      "item": "Helkan war sword",
      "type": "weapon",
      "monsters": [
        "warrior of Helk"
      ]
    },
    {
      "item": "merchant's greedy clutches",
      "type": "hands",
      "monsters": [
        "disgruntled merchant"
      ]
    },
    {
      "item": "sapphire blade of retribution",
      "type": "weapon",
      "monsters": [
        "Helkan priest"
      ]
    },
    {
      "item": "set of Helkan robes",
      "type": "body",
      "monsters": [
        "Helkan priest"
      ]
    },
    {
      "item": "shard of potential",
      "type": "material",
      "monsters": [
        "priest of Ahrimal"
      ]
    },
    {
      "item": "slightly worn brigandine",
      "type": "body",
      "monsters": [
        "disgruntled merchant"
      ]
    },
    {
      "item": "slippers of the pious",
      "type": "feet",
      "monsters": [
        "priest of Ahrimal"
      ]
    }
  ],
  "Kaid Slum Quarters": [
    {
      "item": "banded light buckler",
      "type": "shield",
      "monsters": [
        "rogue"
      ]
    },
    {
      "item": "black stitched skullcap",
      "type": "head",
      "monsters": [
        "gang of thugs"
      ]
    },
    {
      "item": "blunt skullcrusher",
      "type": "weapon",
      "monsters": [
        "ruffian"
      ]
    },
    {
      "item": "burglar's mask",
      "type": "head",
      "monsters": [
        "Kaidite burglar"
      ]
    },
    {
      "item": "crossbow of deceit",
      "type": "weapon",
      "monsters": [
        "Kaidite burglar"
      ]
    },
    {
      "item": "dagger of darkflame",
      "type": "weapon",
      "monsters": [
        "hooded figure"
      ]
    },
    {
      "item": "dusty walking boots",
      "type": "feet",
      "monsters": [
        "vagrant"
      ]
    },
    {
      "item": "gnawed bone",
      "type": "weapon",
      "monsters": [
        "stray dog"
      ]
    },
    {
      "item": "hooded cloak of midnight",
      "type": "cloak",
      "monsters": [
        "hooded figure"
      ]
    },
    {
      "item": "ivory handled bowie knife",
      "type": "weapon",
      "monsters": [
        "peddler"
      ]
    },
    {
      "item": "legguards of dark deeds",
      "type": "legs",
      "monsters": [
        "pickpocket"
      ]
    },
    {
      "item": "mangled collar",
      "type": "jewel",
      "monsters": [
        "stray dog"
      ]
    },
    {
      "item": "peddler's walking stick",
      "type": "weapon",
      "monsters": [
        "peddler"
      ]
    },
    {
      "item": "slippers of dextrous movements",
      "type": "feet",
      "monsters": [
        "pickpocket"
      ]
    },
    {
      "item": "small jar of Kaidite oil",
      "type": "material",
      "monsters": [
        "shady fence"
      ]
    },
    {
      "item": "spool of tough sinew",
      "type": "material",
      "monsters": [
        "grisly old man"
      ]
    },
    {
      "item": "studded hauberk of mischief",
      "type": "body",
      "monsters": [
        "ruffian"
      ]
    },
    {
      "item": "twin daggers of venom",
      "type": "weapon",
      "monsters": [
        "gang of thugs"
      ]
    },
    {
      "item": "winter's glare",
      "type": "material",
      "monsters": [
        "Al'Tizor zealot"
      ]
    },
    {
      "item": "worn cap of the wanderer",
      "type": "head",
      "monsters": [
        "vagrant"
      ]
    },
    {
      "item": "wrist-mounted barb slinger",
      "type": "weapon",
      "monsters": [
        "rogue"
      ]
    }
  ],
  "Kaid Slum Quarters - Hideout": [
    {
      "item": "Al'Tizor assassin robe",
      "type": "body",
      "monsters": [
        "Al'Tizor assassin"
      ]
    },
    {
      "item": "Al'Tizor spear of earthfury",
      "type": "weapon",
      "monsters": [
        "Al'Tizor cultist"
      ]
    },
    {
      "item": "battlestaff of Al'Tizor",
      "type": "weapon",
      "monsters": [
        "Al'Tizor zealot"
      ]
    },
    {
      "item": "blood-caked battleaxe",
      "type": "weapon",
      "monsters": [
        "axe murderer"
      ]
    },
    {
      "item": "blood-soaked heavy breeches",
      "type": "legs",
      "monsters": [
        "axe murderer"
      ]
    },
    {
      "item": "cultist's handwraps",
      "type": "hands",
      "monsters": [
        "extortionist"
      ]
    },
    {
      "item": "cultists drape of ambition",
      "type": "cloak",
      "monsters": [
        "Al'Tizor cultist"
      ]
    },
    {
      "item": "enforcer's bladed spear",
      "type": "weapon",
      "monsters": [
        "Al'Tizor enforcer"
      ]
    },
    {
      "item": "enforcer's grips of malice",
      "type": "hands",
      "monsters": [
        "Al'Tizor enforcer"
      ]
    },
    {
      "item": "frozen crystal dagger",
      "type": "weapon",
      "monsters": [
        "deranged warlock"
      ]
    },
    {
      "item": "gloves of treachery",
      "type": "hands",
      "monsters": [
        "Kaidite looter"
      ]
    },
    {
      "item": "handguards of the zealot",
      "type": "hands",
      "monsters": [
        "Al'Tizor zealot"
      ]
    },
    {
      "item": "heavy cloak of the slums",
      "type": "cloak",
      "monsters": [
        "Kaidite looter"
      ]
    },
    {
      "item": "leggings of quick retreat",
      "type": "legs",
      "monsters": [
        "purse thief"
      ]
    },
    {
      "item": "poison-tipped concealed crossbow",
      "type": "weapon",
      "monsters": [
        "extortionist"
      ]
    },
    {
      "item": "shadowy legs of al'tizor",
      "type": "legs",
      "monsters": [
        "Al'Tizor assassin"
      ]
    },
    {
      "item": "thief's cover",
      "type": "head",
      "monsters": [
        "purse thief"
      ]
    },
    {
      "item": "warlock's necklace of ice",
      "type": "jewel",
      "monsters": [
        "deranged warlock"
      ]
    }
  ],
  "Kaid Wilderness": [
    {
      "item": "barkbreaker punisher",
      "type": "weapon",
      "monsters": [
        "tree troll"
      ]
    },
    {
      "item": "blackfire bow of torment",
      "type": "weapon",
      "monsters": [
        "greater fire mephit"
      ]
    },
    {
      "item": "bracelet of mandibles",
      "type": "jewel",
      "monsters": [
        "greater fire ant"
      ]
    },
    {
      "item": "claw of a thousand stings",
      "type": "weapon",
      "monsters": [
        "greater fire ant"
      ]
    },
    {
      "item": "desert dog claw necklace",
      "type": "jewel",
      "monsters": [
        "desert dog"
      ]
    },
    {
      "item": "drop of pure spring water",
      "type": "material",
      "monsters": [
        "kaidite prospector"
      ]
    },
    {
      "item": "flamberge of flames",
      "type": "weapon",
      "monsters": [
        "greater fire ant"
      ]
    },
    {
      "item": "gauntlets of ancient oak",
      "type": "hands",
      "monsters": [
        "tree troll"
      ]
    },
    {
      "item": "gnarly oak branch",
      "type": "weapon",
      "monsters": [
        "tree ogre"
      ]
    },
    {
      "item": "greatbow of the wolf",
      "type": "weapon",
      "monsters": [
        "spotted wolf"
      ]
    },
    {
      "item": "greatcloak of the claw",
      "type": "cloak",
      "monsters": [
        "spotted wolf"
      ]
    },
    {
      "item": "hardened mephit hide leggings",
      "type": "legs",
      "monsters": [
        "greater fire mephit"
      ]
    },
    {
      "item": "hood of smoldering sorrow",
      "type": "head",
      "monsters": [
        "desert dog"
      ]
    },
    {
      "item": "ogres mighty gauntlets",
      "type": "hands",
      "monsters": [
        "tree ogre"
      ]
    },
    {
      "item": "spear of the beest hunter",
      "type": "weapon",
      "monsters": [
        "rabid wildebeest"
      ]
    },
    {
      "item": "staff of the seeker",
      "type": "weapon",
      "monsters": [
        "Kaidite prospector"
      ]
    }
  ],
  "Long John's Hideout": [
    {
      "item": "ale-soaked studded cuirass",
      "type": "body",
      "monsters": [
        "drunk pirate"
      ]
    },
    {
      "item": "boots of the lost coast",
      "type": "feet",
      "monsters": [
        "Long John raider"
      ]
    },
    {
      "item": "brigand's bardiche",
      "type": "weapon",
      "monsters": [
        "brigand"
      ]
    },
    {
      "item": "crimson cape of long john",
      "type": "cloak",
      "monsters": [
        "Salty Dog captain"
      ]
    },
    {
      "item": "frilled blue cumberbund",
      "type": "body",
      "monsters": [
        "frilly pirate"
      ]
    },
    {
      "item": "gold plated cloak of plunder",
      "type": "cloak",
      "monsters": [
        "drunk pirate"
      ]
    },
    {
      "item": "grips of dark secrets",
      "type": "hands",
      "monsters": [
        "cutthroat"
      ]
    },
    {
      "item": "plague mallet",
      "type": "weapon",
      "monsters": [
        "sewer rat"
      ]
    },
    {
      "item": "raider's crossbow",
      "type": "weapon",
      "monsters": [
        "Long John raider"
      ]
    },
    {
      "item": "rusty bucket",
      "type": "head",
      "monsters": [
        "fat pirate"
      ]
    },
    {
      "item": "sea-green stompers",
      "type": "feet",
      "monsters": [
        "bald pirate"
      ]
    },
    {
      "item": "well-carved beechwood oar",
      "type": "weapon",
      "monsters": [
        "Salty Dog captain"
      ]
    }
  ],
  "Nahaz Bay": [
    {
      "item": "abandoned boots of the last war",
      "type": "feet",
      "monsters": [
        "speckled sandpiper"
      ]
    },
    {
      "item": "cap of studded monkey hide",
      "type": "head",
      "monsters": [
        "bamboo forest monkey"
      ]
    },
    {
      "item": "charged crystal ball",
      "type": "material",
      "monsters": [
        "elder of the nameless tribe"
      ]
    },
    {
      "item": "cloak of mirages",
      "type": "cloak",
      "monsters": [
        "stranded soothsayer"
      ]
    },
    {
      "item": "concealable bludgeon",
      "type": "weapon",
      "monsters": [
        "mermaid temptress"
      ]
    },
    {
      "item": "crackling spine spear",
      "type": "weapon",
      "monsters": [
        "electrified eel"
      ]
    },
    {
      "item": "crescent blades of torrential fury",
      "type": "weapon",
      "monsters": [
        "merman berzerker"
      ]
    },
    {
      "item": "diver's coral blade",
      "type": "weapon",
      "monsters": [
        "enraged bull shark"
      ]
    },
    {
      "item": "electrified eelskin hauberk",
      "type": "body",
      "monsters": [
        "electrified eel"
      ]
    },
    {
      "item": "forest monkey's brain",
      "type": "jewel",
      "monsters": [
        "bamboo forest monkey"
      ]
    },
    {
      "item": "legguards of sailors lost",
      "type": "legs",
      "monsters": [
        "mermaid siren"
      ]
    },
    {
      "item": "longstaff of ancient memories",
      "type": "weapon",
      "monsters": [
        "elder of the nameless tribe"
      ]
    },
    {
      "item": "mask of a forgotten god",
      "type": "head",
      "monsters": [
        "elder of the nameless tribe"
      ]
    },
    {
      "item": "mermaid's tear",
      "type": "material",
      "monsters": [
        "mermaid siren"
      ]
    },
    {
      "item": "ringlets of undersea rage",
      "type": "body",
      "monsters": [
        "merman berzerker"
      ]
    },
    {
      "item": "sandpiper's blade",
      "type": "weapon",
      "monsters": [
        "speckled sandpiper"
      ]
    },
    {
      "item": "shimmering mermaid scale cloak",
      "type": "cloak",
      "monsters": [
        "merman warrior"
      ]
    },
    {
      "item": "siren's horn",
      "type": "jewel",
      "monsters": [
        "mermaid siren"
      ]
    },
    {
      "item": "soothsayer's quicksilver staff",
      "type": "weapon",
      "monsters": [
        "stranded soothsayer"
      ]
    },
    {
      "item": "spiked totem of an unspeakable god",
      "type": "weapon",
      "monsters": [
        "nameless tribesman"
      ]
    },
    {
      "item": "square of embossed leather",
      "type": "material",
      "monsters": [
        "nameless tribesman"
      ]
    },
    {
      "item": "thick sharkhide boots",
      "type": "feet",
      "monsters": [
        "enraged bull shark"
      ]
    },
    {
      "item": "tribesman's boots of anonymity",
      "type": "feet",
      "monsters": [
        "nameless tribesman"
      ]
    },
    {
      "item": "trident of the nameless waters",
      "type": "weapon",
      "monsters": [
        "merman warrior"
      ]
    },
    {
      "item": "veil of temptation",
      "type": "head",
      "monsters": [
        "mermaid temptress"
      ]
    }
  ],
  "Namm River": [
    {
      "item": "hammerhead's head",
      "type": "weapon",
      "monsters": [
        "hammerhead"
      ]
    },
    {
      "item": "heavy sharkhide cape",
      "type": "cloak",
      "monsters": [
        "hammerhead"
      ]
    },
    {
      "item": "linked chitin cape of blood",
      "type": "cloak",
      "monsters": [
        "blood crawdad"
      ]
    },
    {
      "item": "long fish spine",
      "type": "weapon",
      "monsters": [
        "puff fish"
      ]
    },
    {
      "item": "staff of flowing rivers",
      "type": "weapon",
      "monsters": [
        "razor fish"
      ]
    }
  ],
  "Nosho Rainforest": [
    {
      "item": "black drape of rage",
      "type": "cloak",
      "monsters": [
        "mammoth gorilla"
      ]
    },
    {
      "item": "black studded pants of rage",
      "type": "legs",
      "monsters": [
        "mammoth gorilla"
      ]
    },
    {
      "item": "bow of falling raindrops",
      "type": "weapon",
      "monsters": [
        "rainforest nymph"
      ]
    },
    {
      "item": "cobra skin boots of silent suffering",
      "type": "feet",
      "monsters": [
        "queen cobra"
      ]
    },
    {
      "item": "collar of the cobra queen",
      "type": "head",
      "monsters": [
        "queen cobra"
      ]
    },
    {
      "item": "headgear of discipline",
      "type": "head",
      "monsters": [
        "Tiahua disciple"
      ]
    },
    {
      "item": "helmet of mystic power",
      "type": "head",
      "monsters": [
        "Tiahua disciple"
      ]
    },
    {
      "item": "helmet of petrified leaves",
      "type": "head",
      "monsters": [
        "rainforest nymph"
      ]
    },
    {
      "item": "leggings of dire consequences",
      "type": "legs",
      "monsters": [
        "dire panther"
      ]
    },
    {
      "item": "mammoth gorillas fists of anger",
      "type": "hands",
      "monsters": [
        "mammoth gorilla"
      ]
    },
    {
      "item": "massive bone sabre",
      "type": "weapon",
      "monsters": [
        "sabre toothed black panther"
      ]
    },
    {
      "item": "nature's heart",
      "type": "material",
      "monsters": [
        "rainforest nymph"
      ]
    },
    {
      "item": "panther hide buckler",
      "type": "shield",
      "monsters": [
        "dire panther"
      ]
    },
    {
      "item": "patched lemur fur cape",
      "type": "cloak",
      "monsters": [
        "howling lemur"
      ]
    },
    {
      "item": "robe of venom",
      "type": "body",
      "monsters": [
        "queen cobra"
      ]
    },
    {
      "item": "shirt of possum hide",
      "type": "body",
      "monsters": [
        "flying phalanger"
      ]
    },
    {
      "item": "shivering spine hammer",
      "type": "weapon",
      "monsters": [
        "Tiahua disciple"
      ]
    },
    {
      "item": "slippers of silent flight",
      "type": "feet",
      "monsters": [
        "flying phalanger"
      ]
    },
    {
      "item": "smelly lemur hair pants",
      "type": "legs",
      "monsters": [
        "howling lemur"
      ]
    },
    {
      "item": "striped legguards of a thousand stings",
      "type": "legs",
      "monsters": [
        "killer bee"
      ]
    },
    {
      "item": "sturdy gauntlets of the hive",
      "type": "hands",
      "monsters": [
        "killer bee"
      ]
    },
    {
      "item": "woven possum hair gloves",
      "type": "hands",
      "monsters": [
        "flying phalanger"
      ]
    }
  ],
  "Pacific Lowlands": [
    {
      "item": "battlestaff of the beast",
      "type": "weapon",
      "monsters": [
        "lythari"
      ]
    },
    {
      "item": "blood gibberling hide",
      "type": "cloak",
      "monsters": [
        "blood gibberling"
      ]
    },
    {
      "item": "deformed gibberling jerkin",
      "type": "body",
      "monsters": [
        "blood gibberling"
      ]
    },
    {
      "item": "fanged gloves of the lythari",
      "type": "hands",
      "monsters": [
        "lythari"
      ]
    },
    {
      "item": "fist of rot",
      "type": "weapon",
      "monsters": [
        "maggot golem"
      ]
    },
    {
      "item": "Kercpa elder hide",
      "type": "body",
      "monsters": [
        "kercpa elder"
      ]
    },
    {
      "item": "Kercpa leather headpiece",
      "type": "head",
      "monsters": [
        "kercpa"
      ]
    },
    {
      "item": "Kercpa war staff",
      "type": "weapon",
      "monsters": [
        "kercpa elder"
      ]
    },
    {
      "item": "maggot infested boots",
      "type": "feet",
      "monsters": [
        "maggot golem"
      ]
    },
    {
      "item": "shield of the small warrior",
      "type": "shield",
      "monsters": [
        "kercpa"
      ]
    },
    {
      "item": "slimy sewerm leggings",
      "type": "legs",
      "monsters": [
        "sewerm"
      ]
    }
  ],
  "Peaks of Ahrimal": [
    {
      "item": "aegis of Ahrimal",
      "type": "shield",
      "monsters": [
        "Ahrimal fanatic"
      ]
    },
    {
      "item": "basilisk bone shinplates",
      "type": "legs",
      "monsters": [
        "sliver-backed basilisk"
      ]
    },
    {
      "item": "basilisk scaled helmet",
      "type": "head",
      "monsters": [
        "sliver-backed basilisk"
      ]
    },
    {
      "item": "glinting helmet of zeal",
      "type": "head",
      "monsters": [
        "Ahrimal zealot"
      ]
    },
    {
      "item": "razored leather helmet",
      "type": "head",
      "monsters": [
        "razor-backed windfang"
      ]
    },
    {
      "item": "scaled windfang gloves",
      "type": "hands",
      "monsters": [
        "razor-backed windfang"
      ]
    },
    {
      "item": "scimitar of holy purging",
      "type": "weapon",
      "monsters": [
        "Ahrimal fanatic"
      ]
    },
    {
      "item": "small vial of magma",
      "type": "material",
      "monsters": [
        "Ahrimal zealot"
      ]
    },
    {
      "item": "staff of Ahrimal's tears",
      "type": "weapon",
      "monsters": [
        "Ahrimal zealot"
      ]
    },
    {
      "item": "supple boots of the peaks",
      "type": "feet",
      "monsters": [
        "windfang hatchling"
      ]
    },
    {
      "item": "windfang spine crossbow",
      "type": "weapon",
      "monsters": [
        "windfang hatchling"
      ]
    }
  ],
  "Plains of Helk": [
    {
      "item": "blue diamond",
      "type": "material",
      "monsters": [
        "pale rider",
        "plainswalker"
      ]
    },
    {
      "item": "boots of the silent rider",
      "type": "feet",
      "monsters": [
        "pale rider"
      ]
    },
    {
      "item": "dented shovel",
      "type": "weapon",
      "monsters": [
        "unhappy farmer"
      ]
    },
    {
      "item": "muddy chainmail shirt",
      "type": "body",
      "monsters": [
        "burly farmhand"
      ]
    },
    {
      "item": "pale moon cloak",
      "type": "cloak",
      "monsters": [
        "pale rider"
      ]
    },
    {
      "item": "plainswalker's handguards",
      "type": "hands",
      "monsters": [
        "plainswalker"
      ]
    },
    {
      "item": "rancher's heavy leather cloak",
      "type": "cloak",
      "monsters": [
        "rancher"
      ]
    },
    {
      "item": "ripped hand-sewn overalls",
      "type": "legs",
      "monsters": [
        "burly farmhand"
      ]
    },
    {
      "item": "sandals of soft whispers",
      "type": "feet",
      "monsters": [
        "plainswalker"
      ]
    },
    {
      "item": "sharpened bull's horn",
      "type": "weapon",
      "monsters": [
        "rabid bull"
      ]
    },
    {
      "item": "undercoat of metal scales",
      "type": "body",
      "monsters": [
        "rancher's wife"
      ]
    },
    {
      "item": "vivid yellow cloak",
      "type": "cloak",
      "monsters": [
        "rancher's wife"
      ]
    }
  ],
  "River Valley": [
    {
      "item": "chiropteran blood sabatons",
      "type": "feet",
      "monsters": [
        "speckled bainligor"
      ]
    },
    {
      "item": "deformed thick hide cloak",
      "type": "cloak",
      "monsters": [
        "troll mutate"
      ]
    },
    {
      "item": "deserter's leggings of shame",
      "type": "legs",
      "monsters": [
        "vale fort deserter"
      ]
    },
    {
      "item": "greatsword of howling wind",
      "type": "weapon",
      "monsters": [
        "wind duke"
      ]
    },
    {
      "item": "hell-forged blade of echoes",
      "type": "weapon",
      "monsters": [
        "lesser yugoloth"
      ]
    },
    {
      "item": "howling helmet",
      "type": "head",
      "monsters": [
        "wind duke"
      ]
    },
    {
      "item": "linked gauntlets of howling winds",
      "type": "hands",
      "monsters": [
        "greater yugoloth"
      ]
    },
    {
      "item": "serrated blood pike",
      "type": "weapon",
      "monsters": [
        "speckled bainligor"
      ]
    },
    {
      "item": "spike of sharpened troll femur",
      "type": "weapon",
      "monsters": [
        "troll mutate"
      ]
    },
    {
      "item": "staff of charred bone",
      "type": "weapon",
      "monsters": [
        "lesser yugoloth"
      ]
    },
    {
      "item": "storm's eye",
      "type": "material",
      "monsters": [
        "wind duke"
      ]
    },
    {
      "item": "travel-worn treads",
      "type": "feet",
      "monsters": [
        "vale fort deserter"
      ]
    },
    {
      "item": "yugoloth hide gloves",
      "type": "hands",
      "monsters": [
        "greater yugoloth"
      ]
    }
  ],
  "Riverswift Downs": [
    {
      "item": "ancient minotaur's battleplate",
      "type": "body",
      "monsters": [
        "minotaur warrior"
      ]
    },
    {
      "item": "bone-studded cape of conquest",
      "type": "cloak",
      "monsters": [
        "bronze minotaur"
      ]
    },
    {
      "item": "knotted darkwood staff",
      "type": "weapon",
      "monsters": [
        "minotaur priest"
      ]
    },
    {
      "item": "minotaur grasps of destruction",
      "type": "hands",
      "monsters": [
        "minotaur elder"
      ]
    },
    {
      "item": "minotaur skullcleaver",
      "type": "weapon",
      "monsters": [
        "minotaur fiend"
      ]
    },
    {
      "item": "minotaur's scaled hauberk",
      "type": "body",
      "monsters": [
        "minotaur fiend"
      ]
    },
    {
      "item": "minotaur's war pants",
      "type": "legs",
      "monsters": [
        "minotaur warrior"
      ]
    },
    {
      "item": "overlord's crimson cape",
      "type": "cloak",
      "monsters": [
        "minotaur overlord"
      ]
    },
    {
      "item": "pants of matted hair",
      "type": "legs",
      "monsters": [
        "minotaur priest"
      ]
    },
    {
      "item": "riveted bronze minotaur war helm",
      "type": "head",
      "monsters": [
        "bronze minotaur"
      ]
    },
    {
      "item": "shard of energy",
      "type": "material",
      "monsters": [
        "minotaur priest"
      ]
    },
    {
      "item": "shield of subjugation",
      "type": "shield",
      "monsters": [
        "minotaur overlord"
      ]
    },
    {
      "item": "studded goathide gauntlets",
      "type": "hands",
      "monsters": [
        "minotaur elder"
      ]
    }
  ],
  "Tokat Bamboo Forest": [
    {
      "item": "A smoldering piece of brimstone",
      "type": "material",
      "monsters": [
        "demented Tokat witch-doctor"
      ]
    },
    {
      "item": "black ritual boots",
      "type": "feet",
      "monsters": [
        "demented Tokat witch-doctor"
      ]
    },
    {
      "item": "black ritual pants",
      "type": "legs",
      "monsters": [
        "demented Tokat witch-doctor"
      ]
    },
    {
      "item": "bushman's feathered dart gun",
      "type": "weapon",
      "monsters": [
        "Tokat bushman"
      ]
    },
    {
      "item": "bushman's rough gloves",
      "type": "hands",
      "monsters": [
        "Tokat bushman"
      ]
    },
    {
      "item": "camouflaged boots of the hunt",
      "type": "feet",
      "monsters": [
        "Tokat spearman"
      ]
    },
    {
      "item": "chestplate of Tokat",
      "type": "body",
      "monsters": [
        "Tokat warrior"
      ]
    },
    {
      "item": "enchanted bamboo spear",
      "type": "weapon",
      "monsters": [
        "Tokat spearman"
      ]
    },
    {
      "item": "hood of stitched anaconda skin",
      "type": "head",
      "monsters": [
        "speckled anaconda"
      ]
    },
    {
      "item": "power imbued tribal cloak",
      "type": "cloak",
      "monsters": [
        "Tokat tribeswoman"
      ]
    },
    {
      "item": "power imbued tribal robe",
      "type": "body",
      "monsters": [
        "possessed Tokat tribeswoman"
      ]
    },
    {
      "item": "riveted anaconda skin pants",
      "type": "legs",
      "monsters": [
        "speckled anaconda"
      ]
    },
    {
      "item": "sabre toothed panther's skull",
      "type": "head",
      "monsters": [
        "sabre toothed black panther"
      ]
    },
    {
      "item": "small voodoo doll",
      "type": "jewel",
      "monsters": [
        "demented Tokat witch-doctor"
      ]
    },
    {
      "item": "spiritsworn dagger",
      "type": "weapon",
      "monsters": [
        "possessed Tokat tribeswoman"
      ]
    },
    {
      "item": "spiritsworn hammer",
      "type": "weapon",
      "monsters": [
        "possessed Tokat tribeswoman"
      ]
    },
    {
      "item": "tokat warrior's headdress",
      "type": "head",
      "monsters": [
        "Tokat warrior"
      ]
    },
    {
      "item": "witch-doctor's skull capped voodoo stick",
      "type": "weapon",
      "monsters": [
        "demented Tokat witch-doctor"
      ]
    }
  ],
  "Town of Green Hills": [
    {
      "item": "antique peridot ring",
      "type": "jewel",
      "monsters": [
        "aged woman"
      ]
    },
    {
      "item": "black crossbow, Silencer",
      "type": "weapon",
      "monsters": [
        "green hills assassin"
      ]
    },
    {
      "item": "boots of watchful duty",
      "type": "feet",
      "monsters": [
        "green hills sentry"
      ]
    },
    {
      "item": "brigandine of the old warrior",
      "type": "body",
      "monsters": [
        "elderly man"
      ]
    },
    {
      "item": "captain's emerald breastplate of the victor",
      "type": "body",
      "monsters": [
        "green hills captain"
      ]
    },
    {
      "item": "chaplain's blade of holy thunder",
      "type": "weapon",
      "monsters": [
        "green hills chaplain"
      ]
    },
    {
      "item": "chaplain's tunic of divine ilusion",
      "type": "body",
      "monsters": [
        "green hills chaplain"
      ]
    },
    {
      "item": "cloak of victory",
      "type": "cloak",
      "monsters": [
        "green hills champion"
      ]
    },
    {
      "item": "defender of innocence",
      "type": "weapon",
      "monsters": [
        "green hills general"
      ]
    },
    {
      "item": "enforcer's slick black baton",
      "type": "weapon",
      "monsters": [
        "green hills enforcer"
      ]
    },
    {
      "item": "etched longbow of the hills",
      "type": "weapon",
      "monsters": [
        "green hills captain"
      ]
    },
    {
      "item": "four-star general's heavy battleplate",
      "type": "hands",
      "monsters": [
        "green hills general"
      ]
    },
    {
      "item": "four-star general's uniform",
      "type": "body",
      "monsters": [
        "green hills general"
      ]
    },
    {
      "item": "frozen core",
      "type": "material",
      "monsters": [
        "Green Hills Inquisitor"
      ]
    },
    {
      "item": "green hills camouflage cloak",
      "type": "cloak",
      "monsters": [
        "green hills assassin"
      ]
    },
    {
      "item": "green hills champion's scaled emerald leggings",
      "type": "legs",
      "monsters": [
        "green hills champion"
      ]
    },
    {
      "item": "Green Hills inquisitor's cowl",
      "type": "head",
      "monsters": [
        "green hills inquisitor"
      ]
    },
    {
      "item": "green hills sentry's crossbow",
      "type": "weapon",
      "monsters": [
        "green hills sentry"
      ]
    },
    {
      "item": "heavy gardener's cape",
      "type": "cloak",
      "monsters": [
        "green hills gardener"
      ]
    },
    {
      "item": "helmet of the enforcer",
      "type": "head",
      "monsters": [
        "green hills enforcer"
      ]
    },
    {
      "item": "inquisitor's necklace",
      "type": "jewel",
      "monsters": [
        "green hills inquisitor"
      ]
    },
    {
      "item": "rune-engraved walking cane",
      "type": "weapon",
      "monsters": [
        "aged woman"
      ]
    },
    {
      "item": "serpent-headed emerald cane",
      "type": "weapon",
      "monsters": [
        "elderly man"
      ]
    },
    {
      "item": "shield of sunflowers",
      "type": "shield",
      "monsters": [
        "green hills gardener"
      ]
    },
    {
      "item": "silent gloves of the assassin",
      "type": "hands",
      "monsters": [
        "green hills assassin"
      ]
    },
    {
      "item": "sling of sorrow",
      "type": "weapon",
      "monsters": [
        "crippled child"
      ]
    },
    {
      "item": "splintering crutch",
      "type": "weapon",
      "monsters": [
        "crippled child"
      ]
    },
    {
      "item": "studded green hauberk",
      "type": "body",
      "monsters": [
        "green hills captain"
      ]
    }
  ],
  "Elven Nation Border": [
    {
      "item": "backstrapped buckler",
      "type": "shield",
      "monsters": [
        "Elven Nation border guard"
      ]
    },
    {
      "item": "boots of pristine white velvet",
      "type": "feet",
      "monsters": [
        "Sylvantri noble"
      ]
    },
    {
      "item": "boots of the high forest",
      "type": "feet",
      "monsters": [
        "Elven Nation border warrior"
      ]
    },
    {
      "item": "camouflage cloak of protection",
      "type": "cloak",
      "monsters": [
        "Sylvantri sniper"
      ]
    },
    {
      "item": "cloak of the Sylvantri",
      "type": "cloak",
      "monsters": [
        "Elven Nation border archer"
      ]
    },
    {
      "item": "darkened sylvantri bow",
      "type": "weapon",
      "monsters": [
        "Sylvantri sniper"
      ]
    },
    {
      "item": "eagle-crested dagger",
      "type": "weapon",
      "monsters": [
        "Sylvantri noble"
      ]
    },
    {
      "item": "Elven blade of passing",
      "type": "weapon",
      "monsters": [
        "Elven Nation border warrior"
      ]
    },
    {
      "item": "elven gloves of flight",
      "type": "hands",
      "monsters": [
        "Elven Nation border sentry"
      ]
    },
    {
      "item": "elven torc of Sylvantri",
      "type": "jewel",
      "monsters": [
        "Sylvantri commando"
      ]
    },
    {
      "item": "emerald shoes of tranquility",
      "type": "feet",
      "monsters": [
        "Sylvantri peacekeeper"
      ]
    },
    {
      "item": "etched stormwood carapace",
      "type": "body",
      "monsters": [
        "Elven Nation border guard"
      ]
    },
    {
      "item": "exquisite elven greathammer",
      "type": "weapon",
      "monsters": [
        "Sylvantri warlord"
      ]
    },
    {
      "item": "eyepatch of the fae",
      "type": "head",
      "monsters": [
        "Elven Nation border archer"
      ]
    },
    {
      "item": "greatstaff of tranquility",
      "type": "weapon",
      "monsters": [
        "Sylvantri peacekeeper"
      ]
    },
    {
      "item": "green curly-tipped elf cap",
      "type": "head",
      "monsters": [
        "Sylvantri healer"
      ]
    },
    {
      "item": "grips of the earthmother",
      "type": "hands",
      "monsters": [
        "Sylvantri healer"
      ]
    },
    {
      "item": "moonlit elven warhammer",
      "type": "weapon",
      "monsters": [
        "Sylvantri commando"
      ]
    },
    {
      "item": "peacekeeper's hand crossbow",
      "type": "weapon",
      "monsters": [
        "Sylvantri peacekeeper"
      ]
    },
    {
      "item": "plated grips of war",
      "type": "hands",
      "monsters": [
        "Sylvantri warlord"
      ]
    },
    {
      "item": "prismatic gloves of mending",
      "type": "hands",
      "monsters": [
        "Sylvantri healer"
      ]
    },
    {
      "item": "rumpled Sylvantri cape",
      "type": "cloak",
      "monsters": [
        "Sylvantri peacekeeper"
      ]
    },
    {
      "item": "seamless drape of watchfulness",
      "type": "cloak",
      "monsters": [
        "Sylvantri warlord"
      ]
    },
    {
      "item": "splinted sentry's cloak",
      "type": "cloak",
      "monsters": [
        "Elven Nation border sentry"
      ]
    },
    {
      "item": "yard of translucent wispweave",
      "type": "material",
      "monsters": [
        "Sylvantri healer"
      ]
    }
  ],
  "Emperor's Palace": [
    {
      "item": "avatar's greaves of honor",
      "type": "legs",
      "monsters": [
        "emperor's avatar"
      ]
    },
    {
      "item": "bodyguard's hauberk of duty",
      "type": "body",
      "monsters": [
        "emperor's bodyguard"
      ]
    },
    {
      "item": "diadem of flame",
      "type": "head",
      "monsters": [
        "emperor's magician"
      ]
    },
    {
      "item": "gold-plated platinum defender",
      "type": "shield",
      "monsters": [
        "emperor's bodyguard"
      ]
    },
    {
      "item": "guise of the emperor",
      "type": "head",
      "monsters": [
        "emperor's avatar"
      ]
    },
    {
      "item": "imperial helmet of command",
      "type": "head",
      "monsters": [
        "emperor's consul"
      ]
    },
    {
      "item": "jerkin of royal standards",
      "type": "body",
      "monsters": [
        "emperor's avatar"
      ]
    },
    {
      "item": "leggings of tidal power",
      "type": "legs",
      "monsters": [
        "emperor's magician"
      ]
    },
    {
      "item": "point of order",
      "type": "hands",
      "monsters": [
        "emperor's consul"
      ]
    },
    {
      "item": "royal treads",
      "type": "feet",
      "monsters": [
        "emperor's bodyguard"
      ]
    },
    {
      "item": "staff of the ancient empire",
      "type": "weapon",
      "monsters": [
        "emperor's magician"
      ]
    },
    {
      "item": "truncheon of doom",
      "type": "weapon",
      "monsters": [
        "emperor's consul"
      ]
    }
  ],
  "Oyster Bay - Land": [
    {
      "item": "boots of bounding chaos",
      "type": "feet",
      "monsters": [
        "rabid lemur"
      ]
    },
    {
      "item": "breastplate of unending battle",
      "type": "body",
      "monsters": [
        "guardian of the nameless"
      ]
    },
    {
      "item": "chameleon choker",
      "type": "jewel",
      "monsters": [
        "chameleon croaker"
      ]
    },
    {
      "item": "cloak of overlapping scales",
      "type": "cloak",
      "monsters": [
        "chameleon croaker"
      ]
    },
    {
      "item": "crossbow of the nameless",
      "type": "weapon",
      "monsters": [
        "nameless hunter"
      ]
    },
    {
      "item": "dual-bladed warspear of nameless malice",
      "type": "weapon",
      "monsters": [
        "guardian of the nameless"
      ]
    },
    {
      "item": "greaves of the silent hunt",
      "type": "legs",
      "monsters": [
        "nameless hunter"
      ]
    },
    {
      "item": "immemorial greaves of the nameless",
      "type": "legs",
      "monsters": [
        "guardian of the nameless"
      ]
    },
    {
      "item": "mottled cap of madness",
      "type": "head",
      "monsters": [
        "lesser razor-backed frog"
      ]
    },
    {
      "item": "nameless tribal cloak",
      "type": "cloak",
      "monsters": [
        "nameless hunter"
      ]
    },
    {
      "item": "sandy robe of seclusion",
      "type": "body",
      "monsters": [
        "greater razor-backed frog"
      ]
    },
    {
      "item": "slippers of pulsing power",
      "type": "feet",
      "monsters": [
        "lesser razor-backed frog"
      ]
    },
    {
      "item": "squamous tribal razor",
      "type": "weapon",
      "monsters": [
        "greater razor-backed frog"
      ]
    },
    {
      "item": "staff of the visionary",
      "type": "weapon",
      "monsters": [
        "chameleon croaker"
      ]
    },
    {
      "item": "venom-razored chestplate",
      "type": "body",
      "monsters": [
        "lesser razor-backed frog"
      ]
    }
  ],
  "Oyster Bay - Water": [
    {
      "item": "buckler of shimmering scales",
      "type": "shield",
      "monsters": [
        "decrepit undead merman"
      ]
    },
    {
      "item": "claw of living shadow",
      "type": "weapon",
      "monsters": [
        "slithering shadow"
      ]
    },
    {
      "item": "fade lord's cloak",
      "type": "cloak",
      "monsters": [
        "qalupalik dream destroyer"
      ]
    },
    {
      "item": "greaves of infinite darkness",
      "type": "legs",
      "monsters": [
        "qalupalik soul thief"
      ]
    },
    {
      "item": "greaves of snatched spirit",
      "type": "legs",
      "monsters": [
        "qalupalik soul thief"
      ]
    },
    {
      "item": "heavy cape of daunting dreams",
      "type": "cloak",
      "monsters": [
        "finned nightmare"
      ]
    },
    {
      "item": "kernel of desire",
      "type": "jewel",
      "monsters": [
        "mermaid siren's lost soul"
      ]
    },
    {
      "item": "leggings of fleeting thought",
      "type": "legs",
      "monsters": [
        "qalupalik dream destroyer"
      ]
    },
    {
      "item": "scaled chestplate of the undying",
      "type": "body",
      "monsters": [
        "decrepit undead merman"
      ]
    },
    {
      "item": "shadow's relentless grasp",
      "type": "hands",
      "monsters": [
        "slithering shadow"
      ]
    },
    {
      "item": "silver and black leggings",
      "type": "legs",
      "monsters": [
        "qalupalik soul thief"
      ]
    },
    {
      "item": "slithering cap of shadows",
      "type": "head",
      "monsters": [
        "slithering shadow"
      ]
    },
    {
      "item": "soulsilencing dartgun",
      "type": "weapon",
      "monsters": [
        "mermaid siren's lost soul"
      ]
    },
    {
      "item": "soulsilencing greatsword",
      "type": "weapon",
      "monsters": [
        "mermaid siren's lost soul"
      ]
    },
    {
      "item": "weathered fins of gliding",
      "type": "feet",
      "monsters": [
        "decrepit undead merman"
      ]
    },
    {
      "item": "whisper of a lost soul",
      "type": "jewel",
      "monsters": [
        "mermaid siren's lost soul"
      ]
    },
    {
      "item": "writhing nightmare's grasps",
      "type": "hands",
      "monsters": [
        "finned nightmare"
      ]
    }
  ],
  "Plane of Suffering": [
    {
      "item": "amorphous visage of terrifying malice",
      "type": "head",
      "monsters": [
        "looming soul of a kaidite martyr"
      ]
    },
    {
      "item": "black hood of lost souls",
      "type": "head",
      "monsters": [
        "ancient damned warlock"
      ]
    },
    {
      "item": "blood soaked blade",
      "type": "weapon",
      "monsters": [
        "berzerking merchant's ghost"
      ]
    },
    {
      "item": "blood soaked ledger quill",
      "type": "weapon",
      "monsters": [
        "berzerking merchant's ghost"
      ]
    },
    {
      "item": "boots of a severed soul",
      "type": "feet",
      "monsters": [
        "Neutrishian praetor"
      ]
    },
    {
      "item": "crest of the lost",
      "type": "head",
      "monsters": [
        "tortured claimed soul"
      ]
    },
    {
      "item": "crimson-stained tenebrian boots",
      "type": "feet",
      "monsters": [
        "blood-thirsty ra'kurian soul"
      ]
    },
    {
      "item": "demonic flame gauntlets",
      "type": "hands",
      "monsters": [
        "gigantic sulking demon"
      ]
    },
    {
      "item": "dimensional black cloak",
      "type": "cloak",
      "monsters": [
        "Neutrishian praetor"
      ]
    },
    {
      "item": "enchanted fury cap",
      "type": "head",
      "monsters": [
        "pale traveler's ghost"
      ]
    },
    {
      "item": "fists of the demented",
      "type": "weapon",
      "monsters": [
        "stumbling demented zombie"
      ]
    },
    {
      "item": "flawless gauntlets of the eclipse",
      "type": "hands",
      "monsters": [
        "tortured claimed soul"
      ]
    },
    {
      "item": "flesh-ripping demon bow",
      "type": "weapon",
      "monsters": [
        "betrayed Arnakian soul"
      ]
    },
    {
      "item": "floating blood-shot eye",
      "type": "jewel",
      "monsters": [
        "ancient damned witch"
      ]
    },
    {
      "item": "gloves of ceaseless rage",
      "type": "hands",
      "monsters": [
        "berzerking merchant's ghost"
      ]
    },
    {
      "item": "golden plane jumper boots",
      "type": "feet",
      "monsters": [
        "burning niordian soul"
      ]
    },
    {
      "item": "hauberk of bursting flames",
      "type": "body",
      "monsters": [
        "burning Niordian soul"
      ]
    },
    {
      "item": "helmet of boundless courage",
      "type": "head",
      "monsters": [
        "Neutrishian guardsman"
      ]
    },
    {
      "item": "imbued ancient warlock's boots",
      "type": "feet",
      "monsters": [
        "ancient damned warlock"
      ]
    },
    {
      "item": "infernal demon fang",
      "type": "weapon",
      "monsters": [
        "gigantic sulking demon"
      ]
    },
    {
      "item": "leggings of ceaseless thirst",
      "type": "legs",
      "monsters": [
        "frothing small dog's ghost"
      ]
    },
    {
      "item": "legguards of the landlost",
      "type": "legs",
      "monsters": [
        "ravaging farmer's ghost"
      ]
    },
    {
      "item": "mace of unending loyalty",
      "type": "weapon",
      "monsters": [
        "frothing small dog's ghost"
      ]
    },
    {
      "item": "Neutrishian standard buckler",
      "type": "shield",
      "monsters": [
        "Neutrishian praetor"
      ]
    },
    {
      "item": "obsidian-hilted godfred",
      "type": "weapon",
      "monsters": [
        "Neutrishian praetor"
      ]
    },
    {
      "item": "onyx fist of suffering",
      "type": "weapon",
      "monsters": [
        "luminous onyx soulreaver"
      ]
    },
    {
      "item": "onyx robe of the elements",
      "type": "body",
      "monsters": [
        "luminous onyx soulreaver"
      ]
    },
    {
      "item": "pale ghost boots",
      "type": "feet",
      "monsters": [
        "scorned peasant's ghost"
      ]
    },
    {
      "item": "pitchfork of endless sorrow",
      "type": "weapon",
      "monsters": [
        "Neutrishian praetor"
      ]
    },
    {
      "item": "ravaged runic platemail",
      "type": "body",
      "monsters": [
        "ravaging farmer's ghost"
      ]
    },
    {
      "item": "rusted boots of rot",
      "type": "feet",
      "monsters": [
        "stumbling demented zombie"
      ]
    },
    {
      "item": "shield of lost causes",
      "type": "shield",
      "monsters": [
        "Neutrishian guardsman"
      ]
    },
    {
      "item": "shirt of shimmering spirits",
      "type": "body",
      "monsters": [
        "scorned peasant's ghost"
      ]
    },
    {
      "item": "shuriken of suffering",
      "type": "weapon",
      "monsters": [
        "looming soul of a kaidite martyr"
      ]
    },
    {
      "item": "swirling planes necklace",
      "type": "jewel",
      "monsters": [
        "luminous onyx soulreaver"
      ]
    },
    {
      "item": "torn and tattered pantaloons",
      "type": "legs",
      "monsters": [
        "tortured claimed soul"
      ]
    },
    {
      "item": "torn leggings of anguish",
      "type": "legs",
      "monsters": [
        "tortured claimed soul"
      ]
    },
    {
      "item": "tribal breastplate of blood",
      "type": "body",
      "monsters": [
        "blood-thirsty ra'kurian soul"
      ]
    },
    {
      "item": "unholy halberd",
      "type": "weapon",
      "monsters": [
        "Neutrishian templar"
      ]
    },
    {
      "item": "whispering gloves of lost souls",
      "type": "hands",
      "monsters": [
        "looming soul of a kaidite martyr"
      ]
    },
    {
      "item": "witch's obsidian blade",
      "type": "weapon",
      "monsters": [
        "ancient damned witch"
      ]
    }
  ],
  "Temple of Ahrimal": [
    {
      "item": "Ahrimal's shielding scale",
      "type": "shield",
      "monsters": [
        "high priest of Ahrimal"
      ]
    },
    {
      "item": "Ahrimalian plate armor",
      "type": "body",
      "monsters": [
        "Ahrimal elite temple guard"
      ]
    },
    {
      "item": "archbishop's temple slippers",
      "type": "feet",
      "monsters": [
        "scaled archbishop of Ahrimal"
      ]
    },
    {
      "item": "bar of refined mithril",
      "type": "material",
      "monsters": [
        "Ahrimal elite temple guard"
      ]
    },
    {
      "item": "black and grey grasps of faded fire",
      "type": "hands",
      "monsters": [
        "initiate priest of Ahrimal"
      ]
    },
    {
      "item": "blade of fangs",
      "type": "weapon",
      "monsters": [
        "Ahrimal temple guard captain"
      ]
    },
    {
      "item": "boots of boundless fortitude",
      "type": "feet",
      "monsters": [
        "Ahrimal temple guard"
      ]
    },
    {
      "item": "codpiece of the massive viper",
      "type": "legs",
      "monsters": [
        "massive Ahrimalian viper"
      ]
    },
    {
      "item": "elite gloves of faithfulness",
      "type": "hands",
      "monsters": [
        "Ahrimal elite temple guard"
      ]
    },
    {
      "item": "fine scaled robe",
      "type": "body",
      "monsters": [
        "scaled archbishop of Ahrimal"
      ]
    },
    {
      "item": "forgotten soul's grasp",
      "type": "hands",
      "monsters": [
        "Ahrimal elite temple guard"
      ]
    },
    {
      "item": "helmet of unquenchable evil",
      "type": "head",
      "monsters": [
        "Ahrimal soul reaper"
      ]
    },
    {
      "item": "huge ivory fang",
      "type": "weapon",
      "monsters": [
        "massive Ahrimalian viper"
      ]
    },
    {
      "item": "jeweled greatsword of the phoenix",
      "type": "weapon",
      "monsters": [
        "initiate priest of Ahrimal"
      ]
    },
    {
      "item": "rod of endless repentance",
      "type": "weapon",
      "monsters": [
        "high priest of Ahrimal"
      ]
    },
    {
      "item": "scaled boots of the temple",
      "type": "feet",
      "monsters": [
        "Ahrimal temple guard"
      ]
    },
    {
      "item": "snake-god's blades of order",
      "type": "weapon",
      "monsters": [
        "Ahrimal temple guard captain"
      ]
    },
    {
      "item": "studded viperskin leggings",
      "type": "legs",
      "monsters": [
        "massive Ahrimalian viper"
      ]
    }
  ],
  "Temple of Ahrimal - Pit": [
    {
      "item": "flagellator's hairshirt",
      "type": "body",
      "monsters": [
        "undead Ahrimalian priest"
      ]
    },
    {
      "item": "gloves of slithering terror",
      "type": "hands",
      "monsters": [
        "temple guardian serpent"
      ]
    },
    {
      "item": "grasps of an uncoiled serpent",
      "type": "hands",
      "monsters": [
        "huge temple guardian snake"
      ]
    },
    {
      "item": "lance of a serpent god",
      "type": "weapon",
      "monsters": [
        "temple guardian serpent"
      ]
    },
    {
      "item": "reaper scale leggings",
      "type": "legs",
      "monsters": [
        "Ahrimal soul reaper"
      ]
    },
    {
      "item": "scaled armor of speed",
      "type": "body",
      "monsters": [
        "huge temple guardian snake"
      ]
    },
    {
      "item": "soulsworn helmet",
      "type": "head",
      "monsters": [
        "Ahrimal soul reaper"
      ]
    },
    {
      "item": "staff of Ahrimal's penance",
      "type": "weapon",
      "monsters": [
        "undead Ahrimalian priest"
      ]
    },
    {
      "item": "studded greaves of the faithless",
      "type": "legs",
      "monsters": [
        "Ahrimal soul reaper"
      ]
    }
  ],
  "Terngild, Lost City of Gold - Tower": [
    {
      "item": "dragonstone woven chains of binding",
      "type": "cloak",
      "monsters": [
        "silver-backed Terngild dragon"
      ]
    },
    {
      "item": "pile of pristine wyvern scales",
      "type": "material",
      "monsters": [
        "Terngild dragon master"
      ]
    },
    {
      "item": "plumed dragon skull helm",
      "type": "head",
      "monsters": [
        "grand dragon of Terngild"
      ]
    }
  ],
  "Terngild, Lost City of Gold Tower": [
    {
      "item": "gilded spear of razing",
      "type": "weapon",
      "monsters": [
        "Terngild construct magi"
      ]
    },
    {
      "item": "golden slippers of might",
      "type": "feet",
      "monsters": [
        "Terngild golden guardian dragon"
      ]
    },
    {
      "item": "grand robe of Terngild",
      "type": "body",
      "monsters": [
        "aged Terngild dragon"
      ]
    },
    {
      "item": "greathammer of Terngild might",
      "type": "weapon",
      "monsters": [
        "grand dragon of Terngild"
      ]
    },
    {
      "item": "greaves of captured light",
      "type": "feet",
      "monsters": [
        "prismatic dragon"
      ]
    },
    {
      "item": "guardian dragon hide",
      "type": "cloak",
      "monsters": [
        "Terngild golden guardian dragon"
      ]
    },
    {
      "item": "headband of prismatic energy",
      "type": "head",
      "monsters": [
        "prismatic dragon"
      ]
    },
    {
      "item": "magi's vestments of miracles",
      "type": "body",
      "monsters": [
        "Terngild construct magi"
      ]
    },
    {
      "item": "master's grips of destiny",
      "type": "hands",
      "monsters": [
        "Terngild dragon master"
      ]
    },
    {
      "item": "plated phaerimm greaves",
      "type": "legs",
      "monsters": [
        "aged Terngild dragon"
      ]
    },
    {
      "item": "prismatic dragon hide",
      "type": "cloak",
      "monsters": [
        "prismatic dragon"
      ]
    },
    {
      "item": "sparkling golden Dragon Master pendant",
      "type": "jewel",
      "monsters": [
        "Terngild dragon master"
      ]
    },
    {
      "item": "Terngild dragon claw",
      "type": "weapon",
      "monsters": [
        "silver-backed Terngild dragon"
      ]
    },
    {
      "item": "Terngild dragon talon",
      "type": "weapon",
      "monsters": [
        "aged Terngild dragon"
      ]
    },
    {
      "item": "Terngild dragon-tooth necklace",
      "type": "jewel",
      "monsters": [
        "Terngild golden guardian dragon"
      ]
    }
  ],
  "Azulago Village": [
    {
      "item": "Azulago ceremonial shield",
      "type": "shield",
      "monsters": [
        "azulago guard"
      ]
    },
    {
      "item": "Azulago greatclub",
      "type": "weapon",
      "monsters": [
        "azulago guard"
      ]
    },
    {
      "item": "blood-stained feathered harness",
      "type": "body",
      "monsters": [
        "azulago shaman"
      ]
    },
    {
      "item": "bone studded bleached leathers",
      "type": "body",
      "monsters": [
        "azulago raider"
      ]
    },
    {
      "item": "cruelly barbed tribal spear",
      "type": "weapon",
      "monsters": [
        "azulago marauder"
      ]
    },
    {
      "item": "ensorcelled bone rod",
      "type": "weapon",
      "monsters": [
        "azulago shaman"
      ]
    },
    {
      "item": "hammer of the tribal fury",
      "type": "weapon",
      "monsters": [
        "azulago warlord"
      ]
    },
    {
      "item": "hedge-wizard's cane",
      "type": "weapon",
      "monsters": [
        "azulago witchdoctor"
      ]
    },
    {
      "item": "imposing sabatons of bone",
      "type": "feet",
      "monsters": [
        "azulago warlord"
      ]
    },
    {
      "item": "jaguar hide gladiator's gauntlets",
      "type": "hands",
      "monsters": [
        "azulago assassin"
      ]
    },
    {
      "item": "ornamented tribal gauntlets",
      "type": "hands",
      "monsters": [
        "azulago marauder"
      ]
    },
    {
      "item": "poison tipped ebony dagger",
      "type": "weapon",
      "monsters": [
        "azulago assassin"
      ]
    },
    {
      "item": "raider's notched bone blade",
      "type": "weapon",
      "monsters": [
        "azulago raider"
      ]
    },
    {
      "item": "witch doctor's skirt of storms",
      "type": "legs",
      "monsters": [
        "azulago witchdoctor"
      ]
    }
  ],
  "Clockwork": [
    {
      "item": "armguard of gears and pistons",
      "type": "hands",
      "monsters": [
        "clockwork swordsman"
      ]
    },
    {
      "item": "clockwork gloves of silence",
      "type": "hands",
      "monsters": [
        "clockwork assassin"
      ]
    },
    {
      "item": "clockwork hood of terror",
      "type": "head",
      "monsters": [
        "clockwork horror"
      ]
    },
    {
      "item": "clockwork legplates of tinkering",
      "type": "legs",
      "monsters": [
        "clockwork assassin"
      ]
    },
    {
      "item": "clockwork woven leggings",
      "type": "legs",
      "monsters": [
        "clockwork cleric"
      ]
    },
    {
      "item": "pendulum of horror",
      "type": "weapon",
      "monsters": [
        "clockwork horror"
      ]
    },
    {
      "item": "pernach of turning gears",
      "type": "weapon",
      "monsters": [
        "clockwork cleric"
      ]
    },
    {
      "item": "ticking clockwork blade",
      "type": "weapon",
      "monsters": [
        "clockwork swordsman"
      ]
    }
  ],
  "Dire Mountains": [
    {
      "item": "albino wyrmskull helm",
      "type": "head",
      "monsters": [
        "albino wyrm"
      ]
    },
    {
      "item": "amulet of the elements",
      "type": "jewel",
      "monsters": [
        "construct of crystalized fog"
      ]
    },
    {
      "item": "breastplate of the highlands",
      "type": "body",
      "monsters": [
        "crag giant"
      ]
    },
    {
      "item": "claw of a shadow's approach",
      "type": "weapon",
      "monsters": [
        "dire wyvern"
      ]
    },
    {
      "item": "cloak of concentrated fog",
      "type": "cloak",
      "monsters": [
        "fog warden"
      ]
    },
    {
      "item": "cloak of the predator",
      "type": "cloak",
      "monsters": [
        "dire wyvern"
      ]
    },
    {
      "item": "crag giant's weathered cloak",
      "type": "cloak",
      "monsters": [
        "crag giant"
      ]
    },
    {
      "item": "dragon-hilted blade of the mountain",
      "type": "weapon",
      "monsters": [
        "albino wyrm"
      ]
    },
    {
      "item": "glistening wyvern-hide sabatons",
      "type": "feet",
      "monsters": [
        "albino wyrm hatchling"
      ]
    },
    {
      "item": "handful of glimmering wyvern scales",
      "type": "material",
      "monsters": [
        "dire wyvern"
      ]
    },
    {
      "item": "leggings of the fog",
      "type": "legs",
      "monsters": [
        "fog warden"
      ]
    },
    {
      "item": "miasmatic rod of effluvium",
      "type": "weapon",
      "monsters": [
        "construct of crystalized fog"
      ]
    },
    {
      "item": "wrapped tailspike dagger",
      "type": "weapon",
      "monsters": []
    }
  ],
  "Dunes of Al'Kafi": [
    {
      "item": "Al'Kafi blood sword",
      "type": "weapon",
      "monsters": [
        "Al'Kafi marauder"
      ]
    },
    {
      "item": "al'kafi's last kiss",
      "type": "weapon",
      "monsters": [
        "yellow-backed scorpion"
      ]
    },
    {
      "item": "cleats of the desert sun",
      "type": "feet",
      "monsters": [
        "dune wyrm"
      ]
    },
    {
      "item": "crimson chitin spear",
      "type": "weapon",
      "monsters": [
        "crimson-backed scorpion"
      ]
    },
    {
      "item": "dervish blade",
      "type": "weapon",
      "monsters": [
        "Al'Kafi raider"
      ]
    },
    {
      "item": "dune wyrm claw",
      "type": "weapon",
      "monsters": [
        "dune wyrm"
      ]
    },
    {
      "item": "gauntlets of infinite sands",
      "type": "hands",
      "monsters": [
        "dune wyrm"
      ]
    },
    {
      "item": "hand carved green jade comb",
      "type": "head",
      "monsters": [
        "Al'Kafi raider"
      ]
    },
    {
      "item": "leggings of al'kafi",
      "type": "legs",
      "monsters": [
        "Al'Kafi warlord"
      ]
    },
    {
      "item": "marauder's buckler",
      "type": "shield",
      "monsters": [
        "Al'Kafi marauder"
      ]
    },
    {
      "item": "pair of jeweled scorpion daggers",
      "type": "weapon",
      "monsters": [
        "speckled scorpion"
      ]
    },
    {
      "item": "plate armor of the desert moon",
      "type": "body",
      "monsters": [
        "dune wyrm hatchling"
      ]
    },
    {
      "item": "ruinous jade mace",
      "type": "weapon",
      "monsters": [
        "crimson-backed scorpion"
      ]
    },
    {
      "item": "scaled dune wyrm mantle",
      "type": "cloak",
      "monsters": [
        "Al'Kafi warlord"
      ]
    },
    {
      "item": "sewn chitin legguards",
      "type": "legs",
      "monsters": [
        "yellow-backed scorpion"
      ]
    },
    {
      "item": "sunkissed supple scale robes",
      "type": "body",
      "monsters": [
        "dune wyrm hatchling"
      ]
    },
    {
      "item": "swarm of shifting bootriders",
      "type": "feet",
      "monsters": [
        "speckled scorpion"
      ]
    }
  ],
  "Fury Mountain": [
    {
      "item": "Al'Zur highman chaps",
      "type": "legs",
      "monsters": [
        "Al'zur highman"
      ]
    },
    {
      "item": "crag horror's necklace of torment",
      "type": "jewel",
      "monsters": [
        "greater crag horror"
      ]
    },
    {
      "item": "crag horror's treads of terror",
      "type": "feet",
      "monsters": [
        "lesser crag horror"
      ]
    },
    {
      "item": "fury ice drake hide",
      "type": "body",
      "monsters": [
        "fury ice drake"
      ]
    },
    {
      "item": "fury rock drake leggings",
      "type": "legs",
      "monsters": [
        "fury drake"
      ]
    },
    {
      "item": "fury troll club of cold",
      "type": "weapon",
      "monsters": [
        "fury troll"
      ]
    },
    {
      "item": "granite spirit stave",
      "type": "weapon",
      "monsters": [
        "Al'zur shaman"
      ]
    },
    {
      "item": "hauberk of high spirits",
      "type": "body",
      "monsters": [
        "Al'zur shaman"
      ]
    },
    {
      "item": "horror-fused ranseur",
      "type": "weapon",
      "monsters": [
        "greater crag horror"
      ]
    },
    {
      "item": "ice bat necklace",
      "type": "jewel",
      "monsters": [
        "ice bat"
      ]
    },
    {
      "item": "ice jaguar leggings",
      "type": "legs",
      "monsters": [
        "spotted ice jaguar"
      ]
    },
    {
      "item": "ice-rimed drakespine longbow",
      "type": "weapon",
      "monsters": [
        "fury ice drake"
      ]
    },
    {
      "item": "insulated jaguar robes",
      "type": "body",
      "monsters": [
        "spotted ice jaguar"
      ]
    },
    {
      "item": "irregular slag of bedrock",
      "type": "shield",
      "monsters": [
        "dire troll"
      ]
    },
    {
      "item": "rod of boundless potential",
      "type": "weapon",
      "monsters": [
        "lesser crag horror"
      ]
    },
    {
      "item": "slingshot of the high road",
      "type": "weapon",
      "monsters": [
        "Al'zur highman"
      ]
    },
    {
      "item": "thick trollhide helmet",
      "type": "head",
      "monsters": [
        "fury troll"
      ]
    },
    {
      "item": "troll scalp",
      "type": "head",
      "monsters": [
        "fury troll"
      ]
    },
    {
      "item": "twin fangs of the ice drake",
      "type": "weapon",
      "monsters": [
        "fury ice drake"
      ]
    },
    {
      "item": "wings of cold terror",
      "type": "cloak",
      "monsters": [
        "fury ice bat"
      ]
    }
  ],
  "Kaid Arena": [
    {
      "item": "acorn locket with a faded portrait",
      "type": "jewel",
      "monsters": [
        "kercpa gladiator"
      ]
    },
    {
      "item": "al'tizor rune leggings",
      "type": "legs",
      "monsters": [
        "al'tizor shaman"
      ]
    },
    {
      "item": "blade of sparkling sapphire",
      "type": "weapon",
      "monsters": [
        "sapphire golem gladiator"
      ]
    },
    {
      "item": "bloodforged gauntlets of misery",
      "type": "hands",
      "monsters": [
        "vale gladiator"
      ]
    },
    {
      "item": "bloodsoaked xiphos of carnage",
      "type": "weapon",
      "monsters": [
        "sapphire golem gladiator"
      ]
    },
    {
      "item": "bone cannibal gloves",
      "type": "hands",
      "monsters": [
        "cannibal spirit gladiator"
      ]
    },
    {
      "item": "feathered gladiator's grips",
      "type": "hands",
      "monsters": [
        "tokat gladiator"
      ]
    },
    {
      "item": "gauntlets of endless combat",
      "type": "hands",
      "monsters": [
        "kercpa gladiator"
      ]
    },
    {
      "item": "greathammer of endless fury",
      "type": "weapon",
      "monsters": [
        "fury troll gladiator"
      ]
    },
    {
      "item": "guard captain's shield",
      "type": "shield",
      "monsters": [
        "royal guard captain"
      ]
    },
    {
      "item": "human-hide boots of sorrow",
      "type": "feet",
      "monsters": [
        "cannibal spirit gladiator"
      ]
    },
    {
      "item": "linked cloak of gemstones",
      "type": "cloak",
      "monsters": [
        "sapphire golem gladiator"
      ]
    },
    {
      "item": "lizardman gladiator leggings",
      "type": "legs",
      "monsters": [
        "lizardman gladiator"
      ]
    },
    {
      "item": "skullshatter crossbow",
      "type": "weapon",
      "monsters": [
        "vale gladiator"
      ]
    },
    {
      "item": "smouldering granite staff",
      "type": "weapon",
      "monsters": [
        "tokat gladiator"
      ]
    },
    {
      "item": "troll-visaged shield of victory",
      "type": "shield",
      "monsters": [
        "fury troll gladiator"
      ]
    },
    {
      "item": "vest of empowered runes",
      "type": "body",
      "monsters": [
        "al'tizor shaman"
      ]
    }
  ],
  "Kaid Government Quarters": [
    {
      "item": "concealed defender",
      "type": "body",
      "monsters": [
        "vale fort consul"
      ]
    },
    {
      "item": "concealed shuriken thrower",
      "type": "weapon",
      "monsters": [
        "freehold senator"
      ]
    },
    {
      "item": "glorious orange cape",
      "type": "cloak",
      "monsters": [
        "kaidite senator"
      ]
    },
    {
      "item": "green and purple pantaloons",
      "type": "legs",
      "monsters": [
        "vale fort consort"
      ]
    },
    {
      "item": "heavy gauntlets of the guard",
      "type": "hands",
      "monsters": [
        "royal guard"
      ]
    },
    {
      "item": "people's boots",
      "type": "feet",
      "monsters": [
        "senate guardsman"
      ]
    },
    {
      "item": "pike of the royal guard",
      "type": "weapon",
      "monsters": [
        "royal guard"
      ]
    },
    {
      "item": "royal guard's red busby",
      "type": "head",
      "monsters": [
        "royal guard"
      ]
    },
    {
      "item": "senator's baton of office",
      "type": "weapon",
      "monsters": [
        "kaidite senator"
      ]
    },
    {
      "item": "senator's fine traveling boots",
      "type": "feet",
      "monsters": [
        "freehold senator"
      ]
    },
    {
      "item": "shimmering alloy breastplate",
      "type": "body",
      "monsters": [
        "senate guardsman"
      ]
    }
  ],
  "Kaid Military Quarters - Graveyard": [
    {
      "item": "broken spear of betrayal",
      "type": "weapon",
      "monsters": [
        "kaidite zombie general"
      ]
    },
    {
      "item": "cap of endless battle",
      "type": "head",
      "monsters": [
        "sergeant-at-arms ghost"
      ]
    },
    {
      "item": "clad staff of office",
      "type": "weapon",
      "monsters": [
        "pale kaidite chaplain"
      ]
    },
    {
      "item": "drape of the glorious age",
      "type": "cloak",
      "monsters": [
        "kaidite zombie general"
      ]
    },
    {
      "item": "rusted crossbow of lost battles",
      "type": "weapon",
      "monsters": [
        "undead kaidite soldier"
      ]
    },
    {
      "item": "spectral grips of glory",
      "type": "hands",
      "monsters": [
        "sergeant-at-arms ghost"
      ]
    },
    {
      "item": "tattered Kaidite armor of battle",
      "type": "body",
      "monsters": [
        "undead kaidite soldier"
      ]
    },
    {
      "item": "tattered Kaidite greaves of battle",
      "type": "legs",
      "monsters": [
        "undead kaidite soldier"
      ]
    },
    {
      "item": "unblinking eye",
      "type": "jewel",
      "monsters": [
        "undead kaidite soldier"
      ]
    },
    {
      "item": "veil of faith betrayed",
      "type": "head",
      "monsters": [
        "pale kaidite chaplain"
      ]
    }
  ],
  "Kercpa Lair": [
    {
      "item": "acorn shell shield",
      "type": "shield",
      "monsters": [
        "kercpa guard"
      ]
    },
    {
      "item": "captain's cloak of victory",
      "type": "cloak",
      "monsters": [
        "kercpa captain"
      ]
    },
    {
      "item": "captain's war lance",
      "type": "weapon",
      "monsters": [
        "kercpa captain"
      ]
    },
    {
      "item": "dagger of distress",
      "type": "weapon",
      "monsters": [
        "mature kercpa"
      ]
    },
    {
      "item": "featherlight plated greaves",
      "type": "feet",
      "monsters": [
        "kercpa sentry"
      ]
    },
    {
      "item": "forest green kercpa robe",
      "type": "body",
      "monsters": [
        "mature kercpa"
      ]
    },
    {
      "item": "gauntlets of diminutive valor",
      "type": "hands",
      "monsters": [
        "kercpa champion"
      ]
    },
    {
      "item": "gold-trimmed green gloves",
      "type": "hands",
      "monsters": [
        "kercpa shaman"
      ]
    },
    {
      "item": "griffin feathered leather jerkin",
      "type": "body",
      "monsters": [
        "kercpa champion"
      ]
    },
    {
      "item": "guardsman's flowing pants",
      "type": "legs",
      "monsters": [
        "kercpa guard"
      ]
    },
    {
      "item": "kercpa armor of speed",
      "type": "body",
      "monsters": [
        "kercpa sentry"
      ]
    },
    {
      "item": "kercpa assassin's crossbow",
      "type": "weapon",
      "monsters": [
        "kercpa assassin"
      ]
    },
    {
      "item": "legguards of bloodthirst",
      "type": "legs",
      "monsters": [
        "kercpa assassin"
      ]
    },
    {
      "item": "longbow of Kercpa craftsmanship",
      "type": "weapon",
      "monsters": [
        "kercpa archer"
      ]
    },
    {
      "item": "studded footguards of memories",
      "type": "feet",
      "monsters": [
        "mature kercpa"
      ]
    },
    {
      "item": "vest of inner strength",
      "type": "body",
      "monsters": [
        "kercpa captain"
      ]
    },
    {
      "item": "visor of Kercpa accuracy",
      "type": "head",
      "monsters": [
        "kercpa archer"
      ]
    }
  ],
  "Ruins of Helk": [
    {
      "item": "archpriest's indelicate touch",
      "type": "hands",
      "monsters": [
        "archpriest of Helk"
      ]
    },
    {
      "item": "boots of demonic essence",
      "type": "feet",
      "monsters": [
        "deformed demon warrior"
      ]
    },
    {
      "item": "dagger of discipline",
      "type": "weapon",
      "monsters": [
        "archpriest of Helk"
      ]
    },
    {
      "item": "dartgun of the scavenger",
      "type": "weapon",
      "monsters": [
        "ruins scavenger"
      ]
    },
    {
      "item": "horned helmet of war",
      "type": "head",
      "monsters": [
        "Helkan minotaur"
      ]
    },
    {
      "item": "mighty helkan runic cape",
      "type": "cloak",
      "monsters": [
        "spell-woven warrior"
      ]
    },
    {
      "item": "minotaur thruster",
      "type": "weapon",
      "monsters": [
        "Helkan minotaur"
      ]
    },
    {
      "item": "robe of deranged thought",
      "type": "body",
      "monsters": [
        "ravaged, psychotic priest"
      ]
    },
    {
      "item": "scuffed skulker's cuisses",
      "type": "legs",
      "monsters": [
        "ruins scavenger"
      ]
    },
    {
      "item": "scythe of shimmers",
      "type": "weapon",
      "monsters": [
        "spell-infused bodyguard"
      ]
    },
    {
      "item": "spell-infused plate visage",
      "type": "head",
      "monsters": [
        "spell-infused bodyguard"
      ]
    },
    {
      "item": "spell-woven plate boots",
      "type": "feet",
      "monsters": [
        "spell-woven warrior"
      ]
    },
    {
      "item": "split leather armor of inferno",
      "type": "body",
      "monsters": [
        "deformed demon warrior"
      ]
    },
    {
      "item": "sword of sunflare",
      "type": "weapon",
      "monsters": [
        "spell-infused bodyguard"
      ]
    },
    {
      "item": "titan's warfists",
      "type": "hands",
      "monsters": [
        "Helkan minotaur"
      ]
    },
    {
      "item": "treasure hunter's clutches",
      "type": "hands",
      "monsters": [
        "ruins scavenger"
      ]
    },
    {
      "item": "twisted staff of demented dreams",
      "type": "weapon",
      "monsters": [
        "ravaged, psychotic priest"
      ]
    }
  ],
  "Sun Gulf": [
    {
      "item": "al'kazim desert striders",
      "type": "feet",
      "monsters": [
        "Al'Kazim raider"
      ]
    },
    {
      "item": "al'kazim handwraps of shamanic fury",
      "type": "hands",
      "monsters": [
        "Al'Kazim shaman"
      ]
    },
    {
      "item": "al'kazim tower shield",
      "type": "shield",
      "monsters": [
        "al'kazim warlord"
      ]
    },
    {
      "item": "Al'Kazim waraxe",
      "type": "weapon",
      "monsters": [
        "Al'Kazim raider"
      ]
    },
    {
      "item": "ancient boots of snapping",
      "type": "feet",
      "monsters": [
        "ancient gulf crocodile"
      ]
    },
    {
      "item": "ancient greaves of snapping",
      "type": "legs",
      "monsters": [
        "ancient gulf crocodile"
      ]
    },
    {
      "item": "ancient wyrmbone staff",
      "type": "weapon",
      "monsters": [
        "ancient sand wyrm"
      ]
    },
    {
      "item": "boiling blades of elemental fury",
      "type": "weapon",
      "monsters": [
        "boiling water elemental"
      ]
    },
    {
      "item": "boots of the bloodthirsty",
      "type": "feet",
      "monsters": [
        "al'kazim marauder"
      ]
    },
    {
      "item": "crossbow of forlorn souls",
      "type": "weapon",
      "monsters": [
        "desert reaper"
      ]
    },
    {
      "item": "diamond studded dome",
      "type": "head",
      "monsters": [
        "diamond-shelled snapping turtle"
      ]
    },
    {
      "item": "diamond-shell shield",
      "type": "shield",
      "monsters": [
        "diamond-shelled snapping turtle"
      ]
    },
    {
      "item": "gauntlets of petrified sand",
      "type": "hands",
      "monsters": [
        "ancient sand wyrm"
      ]
    },
    {
      "item": "hauberk of petrified sand",
      "type": "body",
      "monsters": []
    },
    {
      "item": "knobbed gauntlets of gnashing",
      "type": "hands",
      "monsters": [
        "ancient gulf crocodile"
      ]
    },
    {
      "item": "liquid heart",
      "type": "material",
      "monsters": [
        "boiling water elemental"
      ]
    },
    {
      "item": "sand reaper talon scythe",
      "type": "weapon",
      "monsters": [
        "sand reaper"
      ]
    },
    {
      "item": "sandstone staff of souls",
      "type": "weapon",
      "monsters": [
        "Al'Kazim shaman"
      ]
    },
    {
      "item": "sun gulf lance",
      "type": "weapon",
      "monsters": [
        "sun gulf stingray"
      ]
    },
    {
      "item": "sunken boots of the drowned",
      "type": "feet",
      "monsters": [
        "sun gulf stingray"
      ]
    },
    {
      "item": "sunscorched heavy gloves",
      "type": "hands",
      "monsters": [
        "sand reaper"
      ]
    },
    {
      "item": "tattered leggings of sorrow",
      "type": "legs",
      "monsters": [
        "desert reaper"
      ]
    },
    {
      "item": "turban of al'kazim",
      "type": "head",
      "monsters": [
        "al'kazim marauder"
      ]
    },
    {
      "item": "veil of flowing water",
      "type": "head",
      "monsters": [
        "boiling water elemental"
      ]
    }
  ],
  "Terngild, Lost City of Gold": [
    {
      "item": "authentic blade of the phoenix",
      "type": "weapon",
      "monsters": [
        "undead Terngild merchant"
      ]
    },
    {
      "item": "glutton's open mouthed visage",
      "type": "head",
      "monsters": [
        "treasure hunter"
      ]
    },
    {
      "item": "gold-rimmed hauberk of the seeker",
      "type": "body",
      "monsters": [
        "treasure hunter"
      ]
    }
  ],
  "Terngild, Lost City of Gold - Outer": [
    {
      "item": "arrow pierced cape of pride",
      "type": "cloak",
      "monsters": [
        "undead Terngild sentry"
      ]
    },
    {
      "item": "blasphemer's writhing tongue",
      "type": "jewel",
      "monsters": [
        "demon spirit"
      ]
    },
    {
      "item": "claymore of undying eyes",
      "type": "weapon",
      "monsters": [
        "undead Terngild sentry"
      ]
    },
    {
      "item": "feet of creeping sloth",
      "type": "feet",
      "monsters": [
        "diseased scavenger"
      ]
    },
    {
      "item": "festering gauntlets",
      "type": "hands",
      "monsters": [
        "diseased scavenger"
      ]
    },
    {
      "item": "impenetrable greaves of jealous fate",
      "type": "legs",
      "monsters": [
        "Terngild spirit"
      ]
    },
    {
      "item": "leggings of broken dreams",
      "type": "legs",
      "monsters": [
        "Terngild ghost"
      ]
    },
    {
      "item": "mace of moaning spirits",
      "type": "weapon",
      "monsters": [
        "Terngild spirit"
      ]
    },
    {
      "item": "rotting gnarled great club",
      "type": "weapon",
      "monsters": [
        "Terngild zombie"
      ]
    },
    {
      "item": "spectral chains of envy",
      "type": "body",
      "monsters": [
        "Terngild ghost"
      ]
    },
    {
      "item": "tattered Terngild brigandine",
      "type": "body",
      "monsters": [
        "Terngild spirit"
      ]
    },
    {
      "item": "touch of avarice",
      "type": "hands",
      "monsters": [
        "undead Terngild merchant"
      ]
    }
  ],
  "Terngild, Lost City of Gold - Tunnel": [
    {
      "item": "bleached draconian leathers",
      "type": "body",
      "monsters": [
        "Terngild guardian drake"
      ]
    },
    {
      "item": "crimson sage hood",
      "type": "head",
      "monsters": [
        "Terngild sage"
      ]
    },
    {
      "item": "deeprock mining pick",
      "type": "weapon",
      "monsters": [
        "skilled dwarven miner"
      ]
    },
    {
      "item": "drake talon studded cape",
      "type": "cloak",
      "monsters": [
        "Terngild guardian drake"
      ]
    },
    {
      "item": "drakespine blades",
      "type": "weapon",
      "monsters": [
        "Terngild guardian drake"
      ]
    },
    {
      "item": "gold-hilted Terngild sword",
      "type": "weapon",
      "monsters": [
        "Terngild veteran"
      ]
    },
    {
      "item": "scout's heavy drape",
      "type": "cloak",
      "monsters": [
        "Terngild scout"
      ]
    },
    {
      "item": "sentry's heavy cloak",
      "type": "cloak",
      "monsters": [
        "dwarven sentry"
      ]
    },
    {
      "item": "small lump of mithril",
      "type": "material",
      "monsters": [
        "skilled dwarven miner"
      ]
    },
    {
      "item": "studded deepmine cloak",
      "type": "cloak",
      "monsters": [
        "Terngild scout"
      ]
    },
    {
      "item": "Terngild hair trigger crossbow",
      "type": "weapon",
      "monsters": [
        "dwarven sentry"
      ]
    },
    {
      "item": "terngild mist gloves",
      "type": "hands",
      "monsters": [
        "Terngild sage"
      ]
    },
    {
      "item": "Terngild's miner helmet",
      "type": "head",
      "monsters": [
        "skilled dwarven miner"
      ]
    },
    {
      "item": "veteran's banded gauntlets",
      "type": "hands",
      "monsters": [
        "Terngild veteran"
      ]
    }
  ],
  "Terngild, Lost City of Gold - Undercity": [
    {
      "item": "backstabber's practiced shiv",
      "type": "weapon",
      "monsters": [
        "Kaidite backstabber"
      ]
    },
    {
      "item": "blood encrusted cape",
      "type": "cloak",
      "monsters": [
        "Kaidite devil dog"
      ]
    },
    {
      "item": "boots of expert stalking",
      "type": "feet",
      "monsters": [
        "Kaidite mercenary archer"
      ]
    },
    {
      "item": "devil dog claw",
      "type": "weapon",
      "monsters": [
        "Kaidite devil dog"
      ]
    },
    {
      "item": "fighter's lightning baton",
      "type": "weapon",
      "monsters": [
        "Terngild fighter-mage"
      ]
    },
    {
      "item": "fire and ice woven tunic of the fighter-mage",
      "type": "body",
      "monsters": [
        "Terngild fighter-mage"
      ]
    },
    {
      "item": "flame-forged heavy gauntlets",
      "type": "hands",
      "monsters": [
        "Kaidite master maceman"
      ]
    },
    {
      "item": "glittering lightning hood",
      "type": "head",
      "monsters": [
        "Kaidite lightning sentinel"
      ]
    },
    {
      "item": "greatcloak of rage",
      "type": "cloak",
      "monsters": [
        "Terngild anti-paladin"
      ]
    },
    {
      "item": "helm of twilight's shadow",
      "type": "head",
      "monsters": [
        "Kaidite backstabber"
      ]
    },
    {
      "item": "helmed of harnessed energy",
      "type": "head",
      "monsters": [
        "lightning golem"
      ]
    },
    {
      "item": "intricately carved mace",
      "type": "weapon",
      "monsters": [
        "Kaidite master maceman"
      ]
    },
    {
      "item": "Kaidite battleshield",
      "type": "shield",
      "monsters": [
        "veteran Kaidite fighter"
      ]
    },
    {
      "item": "leggings of grounding",
      "type": "legs",
      "monsters": [
        "lightning golem"
      ]
    },
    {
      "item": "legguards of swift flight",
      "type": "legs",
      "monsters": [
        "Terngild refugee"
      ]
    },
    {
      "item": "mace of the thunderhead",
      "type": "weapon",
      "monsters": [
        "Kaidite lightning sentinel"
      ]
    },
    {
      "item": "staff of regret",
      "type": "weapon",
      "monsters": [
        "Terngild refuge"
      ]
    },
    {
      "item": "thundering fist",
      "type": "weapon",
      "monsters": [
        "lightning golem"
      ]
    },
    {
      "item": "unholy armor of black gold",
      "type": "body",
      "monsters": [
        "Terngild anti-paladin"
      ]
    },
    {
      "item": "veteran's helm of truesight",
      "type": "head",
      "monsters": [
        "Kaidite mercenary archer"
      ]
    },
    {
      "item": "weathered greaves of foreign wars",
      "type": "legs",
      "monsters": [
        "veteran Kaidite fighter"
      ]
    }
  ],
  "Terngild, Lost City of Gold Outer": [
    {
      "item": "hellfire forged spirit",
      "type": "weapon",
      "monsters": [
        "demon spirit"
      ]
    }
  ],
  "Thousand Falls": [
    {
      "item": "battlehammer of rushing tides",
      "type": "weapon",
      "monsters": [
        "black caiman"
      ]
    },
    {
      "item": "diadem of the falls",
      "type": "head",
      "monsters": [
        "crimson pixie"
      ]
    },
    {
      "item": "dream-stalker boots",
      "type": "feet",
      "monsters": [
        "dream stalker"
      ]
    },
    {
      "item": "fairy's bell of the morning",
      "type": "jewel",
      "monsters": [
        "crimson pixie"
      ]
    },
    {
      "item": "fraal gloves",
      "type": "hands",
      "monsters": [
        "fraal"
      ]
    },
    {
      "item": "grips of stygian ightmares",
      "type": "hands",
      "monsters": [
        "dream stalker"
      ]
    },
    {
      "item": "headgear of the falls",
      "type": "head",
      "monsters": [
        "spotted tree lizard"
      ]
    },
    {
      "item": "headguard of insight",
      "type": "head",
      "monsters": [
        "fraal"
      ]
    },
    {
      "item": "helmet of flowing waters",
      "type": "head",
      "monsters": [
        "arapaima"
      ]
    },
    {
      "item": "howling longbow",
      "type": "weapon",
      "monsters": [
        "howling marsupial"
      ]
    },
    {
      "item": "razor-sharp greatsword of the falls",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "sabatons of woeful sound",
      "type": "feet",
      "monsters": [
        "howling marsupial"
      ]
    },
    {
      "item": "scaled cloak of frenzy",
      "type": "cloak",
      "monsters": [
        "giant frenzied river otter"
      ]
    },
    {
      "item": "spotted leggings of the Thousand Falls",
      "type": "legs",
      "monsters": [
        "spotted tree lizard"
      ]
    },
    {
      "item": "waterproof brown fur boots",
      "type": "feet",
      "monsters": [
        "giant frenzied river otter"
      ]
    },
    {
      "item": "watertight black waders",
      "type": "legs",
      "monsters": [
        "black caiman"
      ]
    }
  ],
  "Timetold Range": [
    {
      "item": "apprentice's dusty cloak",
      "type": "cloak",
      "monsters": [
        "timetold wizard apprentice"
      ]
    },
    {
      "item": "beginner's book of spells",
      "type": "jewel",
      "monsters": [
        "timetold wizard apprentice"
      ]
    },
    {
      "item": "blade of slashing wind",
      "type": "weapon",
      "monsters": [
        "conjured wind elemental"
      ]
    },
    {
      "item": "boots of tough wyrmhide",
      "type": "feet",
      "monsters": []
    },
    {
      "item": "bracelet of swirling gusts",
      "type": "jewel",
      "monsters": []
    },
    {
      "item": "breastplate of living rock",
      "type": "body",
      "monsters": []
    },
    {
      "item": "deformed studded hauberk",
      "type": "body",
      "monsters": [
        "one-eyed hunchback"
      ]
    },
    {
      "item": "drape of the talon",
      "type": "cloak",
      "monsters": []
    },
    {
      "item": "earthbinder greathammer",
      "type": "weapon",
      "monsters": []
    },
    {
      "item": "etched warhammer of rushing wind",
      "type": "weapon",
      "monsters": [
        "silver-backed gorilla"
      ]
    },
    {
      "item": "flickering greatsword",
      "type": "weapon",
      "monsters": [
        "razor-backed griffin"
      ]
    },
    {
      "item": "gloves of deft destruction",
      "type": "hands",
      "monsters": [
        "rampaging chimera"
      ]
    },
    {
      "item": "grandmaster's timepiece",
      "type": "jewel",
      "monsters": [
        "Timetold grandmaster wizard"
      ]
    },
    {
      "item": "greaves of furious blows",
      "type": "legs",
      "monsters": [
        "razor-backed griffin"
      ]
    },
    {
      "item": "half-cracked dragonstone egg",
      "type": "shield",
      "monsters": [
        "timetold wizard apprentice"
      ]
    },
    {
      "item": "hunchback's small club",
      "type": "weapon",
      "monsters": [
        "one-eyed hunchback"
      ]
    },
    {
      "item": "hunchback's tattered boots",
      "type": "feet",
      "monsters": [
        "hunchback child",
        "one-eyed hunchback"
      ]
    },
    {
      "item": "puma's sharpened canine",
      "type": "weapon",
      "monsters": [
        "spotted puma"
      ]
    },
    {
      "item": "rampaging chimera claw",
      "type": "weapon",
      "monsters": [
        "rampaging chimera"
      ]
    },
    {
      "item": "razored griffinskin cloak",
      "type": "cloak",
      "monsters": [
        "razor-backed griffin"
      ]
    },
    {
      "item": "rugged boots of the range",
      "type": "feet",
      "monsters": [
        "range wyrm hatchling"
      ]
    },
    {
      "item": "sinewy wings of flight",
      "type": "cloak",
      "monsters": [
        "range wyrm"
      ]
    },
    {
      "item": "stylish spotted fur cape",
      "type": "cloak",
      "monsters": [
        "razor-backed griffin",
        "spotted puma"
      ]
    },
    {
      "item": "timelost staff of endless skies",
      "type": "weapon",
      "monsters": [
        "Timetold grandmaster wizard"
      ]
    },
    {
      "item": "timetold wizard's silk gloves",
      "type": "hands",
      "monsters": [
        "timetold wizard"
      ]
    },
    {
      "item": "twisted legguards of rage",
      "type": "legs",
      "monsters": [
        "hunchback child"
      ]
    },
    {
      "item": "warped rod of time",
      "type": "weapon",
      "monsters": [
        "timetold wizard"
      ]
    },
    {
      "item": "wingclip shortbow",
      "type": "weapon",
      "monsters": [
        "range wyrm"
      ]
    }
  ],
  "Vale Fort": [
    {
      "item": "badge of courage",
      "type": "jewel",
      "monsters": [
        "vale general"
      ]
    },
    {
      "item": "brawler's savage wristwraps",
      "type": "hands",
      "monsters": [
        "vale ruffian"
      ]
    },
    {
      "item": "chaplain's lucky charm",
      "type": "jewel",
      "monsters": [
        "vale chaplain"
      ]
    },
    {
      "item": "cloak of dire consequences",
      "type": "cloak",
      "monsters": [
        "Vale sergeant"
      ]
    },
    {
      "item": "convincer",
      "type": "weapon",
      "monsters": [
        "vale ruffian"
      ]
    },
    {
      "item": "golden pantaloons of repentance",
      "type": "legs",
      "monsters": [
        "vale chaplain"
      ]
    },
    {
      "item": "helmet of the long fight",
      "type": "head",
      "monsters": [
        "vale skirmisher"
      ]
    },
    {
      "item": "legguards of the vale",
      "type": "legs",
      "monsters": [
        "vale general"
      ]
    },
    {
      "item": "seer's eye of haste",
      "type": "jewel",
      "monsters": [
        "vale soothsayer"
      ]
    },
    {
      "item": "skirmisher's light bow",
      "type": "weapon",
      "monsters": [
        "vale skirmisher"
      ]
    },
    {
      "item": "splendid cape of the vale",
      "type": "cloak",
      "monsters": [
        "vale soothsayer"
      ]
    },
    {
      "item": "stalwart longsword",
      "type": "weapon",
      "monsters": [
        "vale guardian"
      ]
    },
    {
      "item": "Vale officer's poleaxe",
      "type": "weapon",
      "monsters": [
        "Vale sergeant"
      ]
    },
    {
      "item": "vale protector",
      "type": "shield",
      "monsters": [
        "vale guardian"
      ]
    }
  ],
  "Xian Forest": [
    {
      "item": "ancient gnarled fist of the forest",
      "type": "weapon",
      "monsters": [
        "ancient tree spirit"
      ]
    },
    {
      "item": "branch of a forest god",
      "type": "weapon",
      "monsters": [
        "gnarled ent"
      ]
    },
    {
      "item": "bulwark of ancient bark",
      "type": "shield",
      "monsters": [
        "ancient tree spirit"
      ]
    },
    {
      "item": "coarse black hair mitts",
      "type": "hands",
      "monsters": [
        "gorilla"
      ]
    },
    {
      "item": "crooked grovewarden's shillelagh",
      "type": "weapon",
      "monsters": [
        "disciple of xian"
      ]
    },
    {
      "item": "dolman of the holy tree",
      "type": "cloak",
      "monsters": [
        "disciple of xian"
      ]
    },
    {
      "item": "gnarled ironbark greaves",
      "type": "feet",
      "monsters": [
        "gnarled ent"
      ]
    },
    {
      "item": "gorilla's totem lance",
      "type": "weapon",
      "monsters": [
        "spotted gorilla"
      ]
    },
    {
      "item": "guardian's warped blowgun",
      "type": "weapon",
      "monsters": [
        "xian forest guardian"
      ]
    },
    {
      "item": "helmet of seeking",
      "type": "head",
      "monsters": [
        "spectral lizardman"
      ]
    },
    {
      "item": "sapphire-hilted Xian blade",
      "type": "weapon",
      "monsters": [
        "spectral lizardman"
      ]
    },
    {
      "item": "Xian antlered helm",
      "type": "head",
      "monsters": [
        "xian forest guardian"
      ]
    },
    {
      "item": "yard of ironwood",
      "type": "material",
      "monsters": [
        "ancient tree spirit"
      ]
    }
  ],
  "Al'Nomi Graveyard": [
    {
      "item": "Al'Nomi tower shield",
      "type": "shield",
      "monsters": [
        "reanimated Al'Nomi warrior"
      ]
    },
    {
      "item": "ancient wartorn greathammer",
      "type": "weapon",
      "monsters": [
        "armored zombie soldier"
      ]
    },
    {
      "item": "battlehammer of frozen sand",
      "type": "weapon",
      "monsters": [
        "reanimated Al'Nomi warrior"
      ]
    },
    {
      "item": "bone white kissing blade",
      "type": "weapon",
      "monsters": [
        "headless skeleton"
      ]
    },
    {
      "item": "cape of smoldering sorrow",
      "type": "cloak",
      "monsters": [
        "Al'Nomi spirit"
      ]
    },
    {
      "item": "cleaver of the lost",
      "type": "weapon",
      "monsters": [
        "bloated corpse"
      ]
    },
    {
      "item": "corroded greathelm",
      "type": "head",
      "monsters": [
        "armored zombie soldier"
      ]
    },
    {
      "item": "dirk of wandering spirits",
      "type": "weapon",
      "monsters": [
        "spirit of a nomad"
      ]
    },
    {
      "item": "frostfire dagger",
      "type": "weapon",
      "monsters": [
        "desert phantom"
      ]
    },
    {
      "item": "nomad spirit's walking stick",
      "type": "weapon",
      "monsters": [
        "spirit of a nomad"
      ]
    },
    {
      "item": "phantom wrap",
      "type": "cloak",
      "monsters": [
        "desert phantom"
      ]
    },
    {
      "item": "spectral chainlink cloak",
      "type": "cloak",
      "monsters": [
        "spirit of a nomad"
      ]
    },
    {
      "item": "spiritsworn decapitator",
      "type": "weapon",
      "monsters": [
        "headless skeleton"
      ]
    },
    {
      "item": "treads of torment",
      "type": "feet",
      "monsters": [
        "bloated corpse"
      ]
    },
    {
      "item": "wicked wool gloves",
      "type": "hands",
      "monsters": [
        "Al'Nomi spirit"
      ]
    }
  ],
  "Buccaneer's Den": [
    {
      "item": "blades of the brawler",
      "type": "weapon",
      "monsters": [
        "Ole Blackie's first mate"
      ]
    },
    {
      "item": "buccaneer's boarding pike",
      "type": "weapon",
      "monsters": [
        "black-robed picaroon"
      ]
    },
    {
      "item": "captain's crossbow",
      "type": "weapon",
      "monsters": [
        "Black Bart captain"
      ]
    },
    {
      "item": "captain's darkplate gloves",
      "type": "hands",
      "monsters": [
        "Black Bart captain"
      ]
    },
    {
      "item": "corsair's bandanna",
      "type": "head",
      "monsters": [
        "black-robed corsair"
      ]
    },
    {
      "item": "dark-knight's war-forged leggings",
      "type": "legs",
      "monsters": [
        "dark knight of the seas"
      ]
    },
    {
      "item": "first mate's shard of glass",
      "type": "weapon",
      "monsters": [
        "Lucky Louie's first mate"
      ]
    },
    {
      "item": "ghostly swashbuckler's leather leggings",
      "type": "legs",
      "monsters": [
        "Ole Blackie's deckhand"
      ]
    },
    {
      "item": "greasy purple pantaloons",
      "type": "legs",
      "monsters": [
        "Lucky Louie pirate"
      ]
    },
    {
      "item": "greathammer of blackwater",
      "type": "weapon",
      "monsters": [
        "dark knight of the seas"
      ]
    },
    {
      "item": "heavy deck mop",
      "type": "weapon",
      "monsters": [
        "Ole Blackie's deckhand"
      ]
    },
    {
      "item": "hidden crossbow of persuasion",
      "type": "weapon",
      "monsters": [
        "Lucky Louie pirate"
      ]
    },
    {
      "item": "Long John's greatsword",
      "type": "weapon",
      "monsters": [
        "Long John's first mate"
      ]
    },
    {
      "item": "Ole Blackie's blackjack",
      "type": "weapon",
      "monsters": [
        "Ole Blackie's crewman"
      ]
    },
    {
      "item": "picaroon's crimson cloak",
      "type": "cloak",
      "monsters": [
        "black-robed picaroon"
      ]
    },
    {
      "item": "pirate sailor's cowl of menace",
      "type": "head",
      "monsters": [
        "Ole Blackie's first mate"
      ]
    },
    {
      "item": "pirate's black leather boots",
      "type": "feet",
      "monsters": [
        "Black Bart pirate"
      ]
    },
    {
      "item": "scaled skirt of hopelessness",
      "type": "legs",
      "monsters": [
        "buxom wench"
      ]
    },
    {
      "item": "seagull feather headpiece",
      "type": "head",
      "monsters": [
        "rabid seagull"
      ]
    },
    {
      "item": "staff of the hurricane",
      "type": "weapon",
      "monsters": [
        "Black Bart pirate"
      ]
    },
    {
      "item": "studded handguards of ambition",
      "type": "hands",
      "monsters": [
        "Lucky Louie's first mate"
      ]
    },
    {
      "item": "swashbuckler's buckler",
      "type": "shield",
      "monsters": [
        "Long John's crewman"
      ]
    },
    {
      "item": "swashbuckler's slicer",
      "type": "weapon",
      "monsters": [
        "swashbuckler"
      ]
    },
    {
      "item": "weathered driftwood staff",
      "type": "weapon",
      "monsters": [
        "rabid seagull"
      ]
    },
    {
      "item": "wench's emerald earrings",
      "type": "jewel",
      "monsters": [
        "buxom wench"
      ]
    }
  ],
  "Buccaneer's Den Cemetary": [
    {
      "item": "Al'Nomi bonecrusher maul",
      "type": "weapon",
      "monsters": [
        "ghost of Al'Nomi"
      ]
    },
    {
      "item": "blade of the damned",
      "type": "weapon",
      "monsters": [
        "bale spirit"
      ]
    },
    {
      "item": "bow of restless souls",
      "type": "weapon",
      "monsters": [
        "merchant ghost"
      ]
    },
    {
      "item": "ethereal spirit hood",
      "type": "head",
      "monsters": [
        "bale spirit"
      ]
    },
    {
      "item": "ghostly Blackbeard's crossbow",
      "type": "weapon",
      "monsters": [
        "ghost of Blackbeard"
      ]
    },
    {
      "item": "ghostly swashbuckler's runners",
      "type": "feet",
      "monsters": [
        "swashbuckling ghost"
      ]
    },
    {
      "item": "haunted lost soul gloves",
      "type": "hands",
      "monsters": [
        "ghost of a lost soul"
      ]
    },
    {
      "item": "haunted silver legplates",
      "type": "legs",
      "monsters": [
        "crypt wraith"
      ]
    },
    {
      "item": "lichlord's frosted robes",
      "type": "body",
      "monsters": [
        "crypt lichlord"
      ]
    },
    {
      "item": "Lucky Louie leather harness",
      "type": "body",
      "monsters": [
        "spirit of Lucky Louie"
      ]
    },
    {
      "item": "obsidian shade mask",
      "type": "head",
      "monsters": [
        "pale shade"
      ]
    },
    {
      "item": "pale dirk of whispers",
      "type": "weapon",
      "monsters": [
        "pale shade"
      ]
    },
    {
      "item": "silent slinger",
      "type": "weapon",
      "monsters": [
        "spirit of Lucky Louie"
      ]
    },
    {
      "item": "soul-infused brigandine",
      "type": "body",
      "monsters": [
        "ghost of a lost soul"
      ]
    },
    {
      "item": "sturdy double-bladed polearm",
      "type": "weapon",
      "monsters": [
        "cemetary guard"
      ]
    },
    {
      "item": "widow's walking stick",
      "type": "weapon",
      "monsters": [
        "grieving pirate widow"
      ]
    },
    {
      "item": "wraith's touch",
      "type": "weapon",
      "monsters": [
        "crypt wraith"
      ]
    }
  ],
  "Fire Valley - Circle": [
    {
      "item": "fiery hide greatcloak",
      "type": "cloak",
      "monsters": [
        "fire hydra"
      ]
    },
    {
      "item": "flaming battleaxe of the behemoth",
      "type": "weapon",
      "monsters": [
        "one-armed fire giant"
      ]
    },
    {
      "item": "flaming spire of the underworld",
      "type": "weapon",
      "monsters": [
        "fire banshee"
      ]
    },
    {
      "item": "heavy rocksmasher",
      "type": "weapon",
      "monsters": [
        "lost miner"
      ]
    },
    {
      "item": "hydra scaled cloak",
      "type": "cloak",
      "monsters": [
        "fire hydra"
      ]
    },
    {
      "item": "legplates of solid granite",
      "type": "legs",
      "monsters": [
        "rockeater"
      ]
    },
    {
      "item": "stonethrowing sword",
      "type": "weapon",
      "monsters": [
        "cave dweller"
      ]
    },
    {
      "item": "wavering gray gemstone earring",
      "type": "jewel",
      "monsters": [
        "lesser steam elemental"
      ]
    }
  ],
  "Freehold": [
    {
      "item": "blowgun of the deviant",
      "type": "weapon",
      "monsters": [
        "Freehold cutpurse"
      ]
    },
    {
      "item": "captain's kraken trident",
      "type": "weapon",
      "monsters": [
        "Freehold captain"
      ]
    },
    {
      "item": "cutpurse's leather leggings",
      "type": "legs",
      "monsters": [
        "Freehold cutpurse"
      ]
    },
    {
      "item": "fisherman's locket",
      "type": "jewel",
      "monsters": [
        "angry fisherman"
      ]
    },
    {
      "item": "Freehold breastplate",
      "type": "body",
      "monsters": [
        "Freehold guard"
      ]
    },
    {
      "item": "Freehold longsword",
      "type": "weapon",
      "monsters": [
        "Freehold swordsman"
      ]
    },
    {
      "item": "Freehold shortsword",
      "type": "weapon",
      "monsters": [
        "Freehold swordsman"
      ]
    },
    {
      "item": "greathammer of the guard",
      "type": "weapon",
      "monsters": [
        "Freehold guard"
      ]
    },
    {
      "item": "greatsword of freedom",
      "type": "weapon",
      "monsters": [
        "wharf guard"
      ]
    },
    {
      "item": "legguards of lost kings",
      "type": "legs",
      "monsters": [
        "local trader"
      ]
    },
    {
      "item": "longspear of the sea",
      "type": "weapon",
      "monsters": [
        "angry fisherman"
      ]
    },
    {
      "item": "seafarer's studded jerkin",
      "type": "body",
      "monsters": [
        "Freehold sailor"
      ]
    },
    {
      "item": "trader's hidden dagger",
      "type": "weapon",
      "monsters": [
        "local trader"
      ]
    },
    {
      "item": "weathered sailor's battlehammer",
      "type": "weapon",
      "monsters": [
        "Freehold sailor"
      ]
    },
    {
      "item": "wharf guard's cloak",
      "type": "cloak",
      "monsters": [
        "wharf guard"
      ]
    }
  ],
  "Freehold Cemetery": [
    {
      "item": "baneful chestpiece of whispers",
      "type": "body",
      "monsters": [
        "ghost of Lichbane"
      ]
    },
    {
      "item": "blade of the damned",
      "type": "weapon",
      "monsters": [
        "bale spirit"
      ]
    },
    {
      "item": "bonechill bardiche",
      "type": "weapon",
      "monsters": [
        "pale spirit"
      ]
    },
    {
      "item": "bow of restless souls",
      "type": "weapon",
      "monsters": [
        "merchant ghost"
      ]
    },
    {
      "item": "cemetary guardsman's chestpiece",
      "type": "body",
      "monsters": [
        "cemetary guard"
      ]
    },
    {
      "item": "cold-forged boots of the lost",
      "type": "feet",
      "monsters": [
        "lost child"
      ]
    },
    {
      "item": "dagger of black ice",
      "type": "weapon",
      "monsters": [
        "ghost of Lichbane"
      ]
    },
    {
      "item": "ethereal spirit hood",
      "type": "head",
      "monsters": [
        "bale spirit"
      ]
    },
    {
      "item": "hammer of pale ice",
      "type": "weapon",
      "monsters": [
        "pale spirit"
      ]
    },
    {
      "item": "hand of the unseen",
      "type": "weapon",
      "monsters": [
        "bale spirit"
      ]
    },
    {
      "item": "lichlord's frosted robes",
      "type": "body",
      "monsters": [
        "crypt lichlord"
      ]
    },
    {
      "item": "lost spirit's claymore",
      "type": "weapon",
      "monsters": [
        "spirit of a child"
      ]
    },
    {
      "item": "merchant's cloth boots",
      "type": "feet",
      "monsters": [
        "merchant ghost"
      ]
    },
    {
      "item": "sapphire lich staff",
      "type": "weapon",
      "monsters": [
        "crypt lichlord"
      ]
    },
    {
      "item": "spectral sword of the lost",
      "type": "weapon",
      "monsters": [
        "lost child"
      ]
    },
    {
      "item": "spirit's teardrop staff",
      "type": "weapon",
      "monsters": [
        "wailing ghost"
      ]
    }
  ],
  "Freehold Coast": [
    {
      "item": "baby cannibal's skin cloak",
      "type": "cloak",
      "monsters": [
        "child cannibal"
      ]
    },
    {
      "item": "bloodied brigand's greatsword",
      "type": "weapon",
      "monsters": [
        "bloodthirsty brigand"
      ]
    },
    {
      "item": "bodyguard's leather legwraps",
      "type": "legs",
      "monsters": [
        "merchant bodyguard"
      ]
    },
    {
      "item": "bolt of lightning",
      "type": "material",
      "monsters": [
        "satyr"
      ]
    },
    {
      "item": "boots of military order",
      "type": "feet",
      "monsters": [
        "Red Legion pikeman"
      ]
    },
    {
      "item": "bow of bloodshed",
      "type": "weapon",
      "monsters": [
        "bloodthirsty brigand"
      ]
    },
    {
      "item": "cannibal spirit's ripped leggings",
      "type": "legs",
      "monsters": [
        "cannibal spirit"
      ]
    },
    {
      "item": "cannibal warlord's barbaric warfists",
      "type": "hands",
      "monsters": [
        "cannibal warlord"
      ]
    },
    {
      "item": "cannibal's tooth",
      "type": "weapon",
      "monsters": [
        "cannibal"
      ]
    },
    {
      "item": "crackling lightning hammer",
      "type": "weapon",
      "monsters": [
        "satyr"
      ]
    },
    {
      "item": "Freehold merchant's quilted sandals",
      "type": "feet",
      "monsters": [
        "Freehold merchant"
      ]
    },
    {
      "item": "Freehold trader's hood",
      "type": "head",
      "monsters": [
        "Freehold trader"
      ]
    },
    {
      "item": "gloves of subtle brutality",
      "type": "hands",
      "monsters": [
        "cannibal warlord"
      ]
    },
    {
      "item": "gnawed off spear of bone",
      "type": "weapon",
      "monsters": [
        "baby cannibal"
      ]
    },
    {
      "item": "jagged scalper",
      "type": "weapon",
      "monsters": [
        "child cannibal"
      ]
    },
    {
      "item": "lightning-infused glaive of madness",
      "type": "weapon",
      "monsters": [
        "cannibal warlord"
      ]
    },
    {
      "item": "overpriced greatsword",
      "type": "weapon",
      "monsters": [
        "Freehold merchant"
      ]
    },
    {
      "item": "Red Legion katana",
      "type": "weapon",
      "monsters": [
        "Red Legion pikeman"
      ]
    },
    {
      "item": "rippling wave longsword",
      "type": "weapon",
      "monsters": [
        "merchant bodyguard"
      ]
    },
    {
      "item": "satyr's shadowleather jerkin",
      "type": "body",
      "monsters": [
        "satyr"
      ]
    },
    {
      "item": "trader's walking stick",
      "type": "weapon",
      "monsters": [
        "Freehold trader"
      ]
    },
    {
      "item": "voodoo skullhead staff",
      "type": "weapon",
      "monsters": [
        "witch-doctor"
      ]
    }
  ],
  "Freehold Sea": [
    {
      "item": "hunter's heart",
      "type": "jewel",
      "monsters": [
        "whiptail stingray"
      ]
    },
    {
      "item": "lionfish sting",
      "type": "weapon",
      "monsters": [
        "lionfish"
      ]
    },
    {
      "item": "sword of the fish",
      "type": "weapon",
      "monsters": [
        "swordfish"
      ]
    },
    {
      "item": "unlucky pirate's hook",
      "type": "weapon",
      "monsters": [
        "tiger shark"
      ]
    },
    {
      "item": "yellow barracuda speedo",
      "type": "legs",
      "monsters": [
        "barracuda"
      ]
    }
  ],
  "Imperial City of Kaid": [
    {
      "item": "cloak of rainbows",
      "type": "cloak",
      "monsters": [
        "Kaidite clothier"
      ]
    },
    {
      "item": "concealed bejeweled dagger",
      "type": "weapon",
      "monsters": [
        "Kaidite nobleman"
      ]
    },
    {
      "item": "crimson swordsman's breastplate",
      "type": "body",
      "monsters": [
        "swordsman of the Red Legion"
      ]
    },
    {
      "item": "dusty traveller's boots",
      "type": "feet",
      "monsters": [
        "desert nomad"
      ]
    },
    {
      "item": "flamboyantly feathered longstaff",
      "type": "weapon",
      "monsters": [
        "merchant from the bazaar"
      ]
    },
    {
      "item": "glittering golden moneyclip",
      "type": "jewel",
      "monsters": [
        "merchant from the bazaar"
      ]
    },
    {
      "item": "Kaidite longbow",
      "type": "weapon",
      "monsters": [
        "Kaidite peddler"
      ]
    },
    {
      "item": "Legion warhammer",
      "type": "weapon",
      "monsters": [
        "Red Legion recruit"
      ]
    },
    {
      "item": "legionnaire's cape",
      "type": "cloak",
      "monsters": [
        "Red Legion recruit"
      ]
    },
    {
      "item": "military robes of whispers",
      "type": "body",
      "monsters": [
        "off duty sentry"
      ]
    },
    {
      "item": "pink silk slippers",
      "type": "feet",
      "monsters": [
        "Kaidite lady"
      ]
    },
    {
      "item": "red-stained blade of the legion",
      "type": "weapon",
      "monsters": [
        "swordsman of the Red Legion"
      ]
    },
    {
      "item": "resplendent nobleman's sword",
      "type": "weapon",
      "monsters": [
        "Kaidite nobleman"
      ]
    },
    {
      "item": "slightly rusted gauntlets",
      "type": "hands",
      "monsters": [
        "off duty sentry"
      ]
    },
    {
      "item": "spy's wristmounted crossbow",
      "type": "weapon",
      "monsters": [
        "Tamian spy"
      ]
    },
    {
      "item": "treads of thoughtfulness",
      "type": "feet",
      "monsters": [
        "mind flayer"
      ]
    }
  ],
  "Kaid Local": [
    {
      "item": "assassin's curved blade",
      "type": "weapon",
      "monsters": [
        "nomad assassin"
      ]
    },
    {
      "item": "bulwark of the warlord",
      "type": "shield",
      "monsters": [
        "nomad warlord"
      ]
    },
    {
      "item": "casque of the warrior",
      "type": "head",
      "monsters": [
        "nomad warrior"
      ]
    },
    {
      "item": "earthbound blade",
      "type": "weapon",
      "monsters": [
        "Kaidite hunter"
      ]
    },
    {
      "item": "golden rock",
      "type": "material",
      "monsters": [
        "weathered traveler"
      ]
    },
    {
      "item": "kaidite hunter's leatherbound gloves",
      "type": "hands",
      "monsters": [
        "Kaidite hunter"
      ]
    },
    {
      "item": "longbow of precision",
      "type": "weapon",
      "monsters": [
        "Kaidite hunter"
      ]
    },
    {
      "item": "nomad cook's frying pan",
      "type": "weapon",
      "monsters": [
        "nomad cook"
      ]
    },
    {
      "item": "painful reminder",
      "type": "weapon",
      "monsters": [
        "traveling dentist"
      ]
    },
    {
      "item": "spear of the sandwalker",
      "type": "weapon",
      "monsters": [
        "weathered traveler"
      ]
    },
    {
      "item": "traveler's gnarled longbow",
      "type": "weapon",
      "monsters": [
        "weathered traveler"
      ]
    },
    {
      "item": "traveling dentist's gold tooth",
      "type": "jewel",
      "monsters": [
        "traveling dentist"
      ]
    },
    {
      "item": "weathered walking stick",
      "type": "weapon",
      "monsters": [
        "weathered traveler"
      ]
    }
  ],
  "Kaid Merchant Quarters - Mansion": [
    {
      "item": "fine jewel-hilted dirk",
      "type": "weapon",
      "monsters": [
        "buxom maid"
      ]
    },
    {
      "item": "heavy brass candlestick",
      "type": "weapon",
      "monsters": [
        "butler"
      ]
    },
    {
      "item": "thick scrubbing gloves",
      "type": "hands",
      "monsters": [
        "scullion"
      ]
    },
    {
      "item": "tight leather corset",
      "type": "body",
      "monsters": [
        "serving wench"
      ]
    }
  ],
  "Kaid Merchant Quarters - Park": [
    {
      "item": "ebony slicer",
      "type": "weapon",
      "monsters": [
        "scoundrel"
      ]
    },
    {
      "item": "lacy pink gloves",
      "type": "hands",
      "monsters": [
        "harlot"
      ]
    },
    {
      "item": "scuffed shinguards",
      "type": "legs",
      "monsters": [
        "Kaidite gang kid"
      ]
    }
  ],
  "Village of Al'Nomi": [
    {
      "item": "Al'Nomi bone compound bow",
      "type": "weapon",
      "monsters": [
        "Al'Nomi archer"
      ]
    },
    {
      "item": "Al'Nomi hound's severed tooth",
      "type": "jewel",
      "monsters": [
        "Al'Nomi hound"
      ]
    },
    {
      "item": "Al'Nomi mages emberwood staff",
      "type": "weapon",
      "monsters": [
        "Al'Nomi mage"
      ]
    },
    {
      "item": "Al'Nomi warrior's dune staff",
      "type": "weapon",
      "monsters": [
        "Al'Nomi warrior"
      ]
    },
    {
      "item": "blade of sandspire",
      "type": "weapon",
      "monsters": [
        "Al'Nomi mage"
      ]
    },
    {
      "item": "champion's heavy hide coif",
      "type": "head",
      "monsters": [
        "Al'Nomi warrior"
      ]
    },
    {
      "item": "cleric's holy sceptre",
      "type": "weapon",
      "monsters": [
        "Al'Nomi cleric"
      ]
    },
    {
      "item": "enforcer's skullcracker",
      "type": "weapon",
      "monsters": [
        "Al'Nomi guard"
      ]
    },
    {
      "item": "guard's chainplate spurs",
      "type": "feet",
      "monsters": [
        "Al'Nomi guard"
      ]
    },
    {
      "item": "halberd of the sands",
      "type": "weapon",
      "monsters": [
        "Al'Nomi watchman"
      ]
    },
    {
      "item": "notched greatsword",
      "type": "weapon",
      "monsters": [
        "Al'Nomi villager"
      ]
    },
    {
      "item": "ruby-infused boots of faith",
      "type": "feet",
      "monsters": [
        "Al'Nomi cleric"
      ]
    },
    {
      "item": "shepherd's trusted sling",
      "type": "weapon",
      "monsters": [
        "Al'Nomi sheep herder"
      ]
    },
    {
      "item": "spear of shifting sands",
      "type": "weapon",
      "monsters": [
        "Al'Nomi nomad"
      ]
    },
    {
      "item": "watchman's eye",
      "type": "jewel",
      "monsters": [
        "Al'Nomi watchman"
      ]
    }
  ],
  "Training Academy": [
    {
      "item": "claw of the initiate",
      "type": "weapon",
      "monsters": []
    }
  ],
  "Drakurat's Spine": [
    {
      "item": "handful of scales",
      "type": "material",
      "monsters": [
        "mounted dragon rider sentinel"
      ]
    },
    {
      "item": "pile of scales",
      "type": "material",
      "monsters": [
        "mounted dragon rider sentinel"
      ]
    }
  ],
  "Nomadic Caravans": [
    {
      "item": "swatch of gossamer cloth",
      "type": "material",
      "monsters": [
        "sunburnt scavenger"
      ]
    }
  ],
  "Arctic Glacier": [
    {
      "item": "yeti's paw",
      "type": "material",
      "monsters": [
        "large yeti"
      ]
    }
  ],
  "Valley of Giants": [
    {
      "item": "glowing lump of coal",
      "type": "material",
      "monsters": [
        "magma man"
      ]
    }
  ],
  "Serpents Pass": [
    {
      "item": "crystal hydra eye",
      "type": "material",
      "monsters": [
        "hydra"
      ]
    }
  ],
  "Serpentine Mountain": [
    {
      "item": "bundle of yew",
      "type": "material",
      "monsters": [
        "lumbering mountain giant"
      ]
    }
  ],
  "Frozen Wastelands": [
    {
      "item": "square of suede",
      "type": "material",
      "monsters": [
        "snow elk"
      ]
    }
  ],
  "Reilyn": [
    {
      "item": "bar of bronze",
      "type": "material",
      "monsters": [
        "Reilyn peddler"
      ]
    }
  ],
  "Tamia Town Center": [
    {
      "item": "handful of scrap leather",
      "type": "material",
      "monsters": [
        "leather dealer"
      ]
    },
    {
      "item": "pile of cloth",
      "type": "material",
      "monsters": [
        "cloth dealer"
      ]
    }
  ],
  "Nogrim, the Deep City": [
    {
      "item": "bar of bronze",
      "type": "material",
      "monsters": [
        "angry miner"
      ]
    },
    {
      "item": "chunk of iron",
      "type": "material",
      "monsters": [
        "angry miner"
      ]
    }
  ],
  "Fire Valley": [
    {
      "item": "charged cystal",
      "type": "material",
      "monsters": [
        "quickling lord"
      ]
    },
    {
      "item": "shard of power",
      "type": "material",
      "monsters": []
    }
  ],
  "Kaid Red & Purple": [
    {
      "item": "fire root",
      "type": "material",
      "monsters": [
        "All 70+ Mobs"
      ]
    },
    {
      "item": "pulsing orb",
      "type": "material",
      "monsters": [
        "All 70+ Mobs"
      ]
    }
  ],
  "N/A": [
    {
      "item": "fragment of utter darkness",
      "type": "material",
      "monsters": [
        "N/A"
      ]
    },
    {
      "item": "prismatic sphere of pure energy",
      "type": "material",
      "monsters": [
        "N/A"
      ]
    },
    {
      "item": "sphere of chaotic force",
      "type": "material",
      "monsters": [
        "N/A"
      ]
    }
  ],
  "Fire Valley - Crevice": [
    {
      "item": "lump of raw alloy",
      "type": "material",
      "monsters": [
        "lost miner"
      ]
    }
  ]
};
