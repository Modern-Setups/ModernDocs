---
title: ⚙️ Configuration Files
sidebar_position: 2
---

# ⚙️ Configuration Reference

ModernDuels utilizes two configuration files to manage global rules and scoreboard/tab formatting: `config.yml` and `scoreboard.yml`.

---

## 📄 config.yml

The main configuration file controls game settings, lobby locations, ranked rules, and database specifications. Below is the annotated default configuration structure:

```yaml
# Global message prefix (MiniMessage formatting)
prefix: "<gradient:#ff6b6b:#ffa07a><bold>ModernDuels</bold></gradient> <dark_gray>» <reset>"

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 1. LOBBY & TELEPORTATION SETTINGS                                        │
# └───────────────────────────────────────────────────────────────────────────┘
lobby:
  # World name where players spawn after matches
  world: "world"
  spawn:
    x: 0.5
    y: 64.0
    z: 0.5
    yaw: 0.0
    pitch: 0.0
  # Automatically heal player to full health when returning to lobby
  heal-on-teleport: true
  # Automatically feed player to 20 hunger & saturation when returning to lobby
  feed-on-teleport: true
  # Extinguish active fire ticks on return to lobby
  extinguish-fire-on-teleport: true
  # Remove all active potion effects on return to lobby
  clear-potion-effects-on-teleport: true
  # Lobby protection settings (prevents griefing and player disruption in lobby world)
  protection:
    # Set to false to disable all built-in lobby protections
    enabled: true
    # Prevent breaking and placing blocks
    block-modify: true
    # Prevent taking damage (e.g. from falling or void)
    damage: true
    # Prevent hunger decay
    hunger: true
    # Prevent players from dropping items
    item-drop: true
    # Prevent players from picking up items
    item-pickup: true
    # Prevent opening containers (chests, hoppers, etc.) and physical plates in the lobby
    interact: true
    # Prevent damaging other players/entities in the lobby
    entity-damage: true

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 2. DUEL MATCHMAKING & GAMEPLAY RULES                                      │
# └───────────────────────────────────────────────────────────────────────────┘
duels:
  # Countdown before match starts (seconds)
  countdown-seconds: 5
  # Freeze player movement during countdown
  freeze-during-countdown: true
  # Maximum match duration (seconds, 0 = unlimited)
  max-duration: 300
  # Delay before sending players back to lobby on game end (seconds)
  end-cleanup-delay-seconds: 3
  # Allow item dropping during matches
  allow-item-drops: false
  # Allow block breaking during matches (overridden per-arena)
  allow-block-breaking: true
  # Allow block placing during matches (overridden per-arena)
  allow-block-placing: true
  # Duel challenge request expiration (seconds)
  request-expiry-seconds: 30
  # Maximum concurrent duel matches allowed on the server
  max-simultaneous: 5
  # Snapshot TTL retention in memory (minutes)
  snapshot-ttl-minutes: 10
  # Ender Pearl cooldown in fights
  pearl-cooldown:
    enabled: true
    duration-seconds: 15
  # Commands allowed for players in an active duel (admins bypass, all others blocked)
  allowed-commands-in-match:
    - "/duel"
    - "/duels"
    - "/leave"
    - "/spectate"
    - "/spec"

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 3. KIT EDITOR & PERMISSIONS                                              │
# └───────────────────────────────────────────────────────────────────────────┘
kits:
  # Note: The plugin automatically creates 5 default preset kits in 'plugins/ModernDuels/presets/' on startup:
  # (nodebuff.json, op.json, uhc.json, classic.json, sumo.json).
  # Server owners can disable any default kit by renaming the file (e.g. 'nodebuff.json' -> 'nodebuff.json.disabled').
  # To re-enable, rename the file back to end in '.json'.
  default-max-kits: 5
  allow-sharing: true
  share-code-expiry-seconds: 600
  max-enchant-level: -1

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 4. DYNAMIC ARENAS                                                         │
# └───────────────────────────────────────────────────────────────────────────┘
arenas:
  # Folder where arena schematic/world templates are saved
  templates-directory: "arena-templates"
  # Prefix for cloned temporary arena worlds
  world-prefix: "duels-arena-"
  # Void world settings
  void-world:
    # Name of the void container world used for duels
    name: "Duels Void"
    # Mode: "SHARED" = single void world for all instances
    #        "PER_TEMPLATE" = separate void world per schematic
    mode: "SHARED"

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 5. RANKED ELO & MATCHMAKING QUEUE                                        │
# └───────────────────────────────────────────────────────────────────────────┘
ranked:
  enabled: true
  # ELO tracking mode: "GLOBAL" (one ELO for all kits) or "PER_KIT" (separate ELO per kit)
  mode: "GLOBAL"
  # Starting ELO for new players
  starting-elo: 1000
  # ELO calculation volatility multiplier
  k-factor: 32
  # Matchmaking Queue Expansion Settings
  queue:
    # Initial ELO search window (+/- ELO)
    initial-elo-range: 100
    # Range expansion per tick
    elo-range-expansion: 50
    # Maximum ELO difference before matching any available player
    max-elo-range: 500
    # Search tick interval (seconds)
    tick-interval: 5

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 6. ECONOMY BETTING & REWARDS (Requires Vault)                             │
# └───────────────────────────────────────────────────────────────────────────┘
economy:
  betting:
    # Minimum bet amount per player
    min-bet: 0.0
    # Maximum bet amount per player
    max-bet: 10000.0
    # Server tax percentage deducted from the total winner pot (e.g. 5.0 = 5%)
    tax-percentage: 5.0

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 7. DATABASE PERSISTENCE (MySQL / Flat-File)                               │
# └───────────────────────────────────────────────────────────────────────────┘
database:
  # Storage engine: "FILE" (flat-file JSON) or "MYSQL" (external database)
  type: "FILE"
  mysql:
    host: "localhost"
    port: 3306
    database: "modernduels"
    username: "root"
    password: ""
    ssl: true
    pool:
      maximum-pool-size: 10
      minimum-idle: 2
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 8. SPECIALIZED GAMEPLAY & HEALING                                         │
# └───────────────────────────────────────────────────────────────────────────┘
soup-healing:
  enabled: true
  heal-amount: 7.0
  hunger-amount: 7
  saturation-amount: 7.0
  only-in-match: true
  items:
    - MUSHROOM_STEW
    - BEETROOT_SOUP
    - RABBIT_STEW
    - SUSPICIOUS_STEW

cpvp-optimizations:
  enabled: true
  isolate-explosion-damage: true

# ┌───────────────────────────────────────────────────────────────────────────┐
# │ 9. LEADERBOARDS & HOLOGRAMS                                               │
# └───────────────────────────────────────────────────────────────────────────┘
leaderboard:
  # Toggle the leaderboard holograms on or off
  enabled: true
  # How long (in seconds) the leaderboard displays a single statistic before cycling
  cycle-interval-seconds: 10
  # The statistics to cycle through (supported keys: elo, wins, games, kills, deaths, winrate)
  stats: ["elo", "wins", "games", "kills", "deaths", "winrate"]
  # Formatting parameters
  title-format: "<gradient:#ffa07a:#ff6b6b><bold>🏆 LEADERBOARD: %stat% 🏆</bold></gradient>"
  row-format: "<yellow>#%rank% <white>%player% <gray>» <gold>%value%"
  bottom-format: "<gray>─────────────────────────\n<yellow>Your Rank: <gold>#%rank% <gray>(%value% %stat%)"
```

---

## 📊 scoreboard.yml

ModernDuels includes a built-in scoreboard sidebar and TAB header/footer system. It changes dynamically depending on whether a player is in the lobby, fighting, or spectating.

Here is the default structure of the `scoreboard.yml` file:

```yaml
# ╔═══════════════════════════════════════════════════════════════════════════╗
# ║                         Scoreboards & TAB Config                          ║
# ╚═══════════════════════════════════════════════════════════════════════════╝

# Scoreboard Sidebar Display Settings
sidebar:
  enabled: true
  update-interval-ticks: 20          # Refreshes values every second

  # 🏡 Displayed when a player is in the lobby spawn world
  lobby:
    title: "<gradient:#ff6b6b:#ffa07a><bold>ModernDuels</bold></gradient>"
    lines:
      - "<gray>Your Profile:</gray>"
      - " 👤 Player: <white>%player_name%</white>"
      - " 🏆 ELO: <yellow>%modernduels_elo%</yellow>"
      - " ⚔️ Record: <green>%modernduels_wins%W</green> <gray>/</gray> <red>%modernduels_losses%L</red>"
      - " 📊 Win Rate: <gold>%modernduels_winrate%</gold>"
      - ""
      - "<gray>Server Stats:</gray>"
      - " 🎮 Playing: <white>%modernduels_playing%</white>"
      - " 👥 In Lobby: <white>%modernduels_lobby%</white>"
      - "─────────────────────────"
      - "<gradient:#ff6b6b:#ffa07a>play.modernsetups.net</gradient>"

  # ⚔️ Displayed during active duel matches
  match:
    title: "<red><bold>⚔️ MATCH ⚔️</bold></red>"
    lines:
      - "<gray>Duel Status:</gray>"
      - " 🗡️ Kit: <gold>%modernduels_kit%</gold>"
      - " 🏁 Round: <white>%modernduels_round%/%modernduels_max_rounds%</white>"
      - " ⏱️ Time: <white>%modernduels_match_time%s</white>"
      - ""
      - "<gray>Match Statistics:</gray>"
      - " ❤️ Health: <red>%modernduels_health%❤</red>"
      - " 🎯 Hits Landed: <white>%modernduels_hits%</white>"
      - " 👥 Competitors: <gold>%modernduels_opponent%</gold>"
      - "─────────────────────────"
      - "<gradient:#ff6b6b:#ffa07a>play.modernsetups.net</gradient>"

  # 👁️ Displayed when spectating a match
  spectator:
    title: "<gold><bold>👁️ SPECTATING 👁️</bold></gold>"
    lines:
      - "<gray>Match Info:</gray>"
      - " 🗡️ Kit: <gold>%modernduels_kit%</gold>"
      - " 🏁 Round: <white>%modernduels_round%/%modernduels_max_rounds%</white>"
      - " ⏱️ Time: <white>%modernduels_match_time%s</white>"
      - ""
      - "<gray>Fighters:</gray>"
      - " 🔴 %modernduels_p1%: <red>%modernduels_p1_health%❤</red>"
      - " 🔵 %modernduels_p2%: <red>%modernduels_p2_health%❤</red>"
      - "─────────────────────────"
      - "<gradient:#ff6b6b:#ffa07a>play.modernsetups.net</gradient>"

# TAB Header/Footer Layout Settings
tablist:
  enabled: true
  header: "\n<gradient:#ff6b6b:#ffa07a><bold>ModernDuels Network</bold></gradient>\n<gray>Welcome to the PvP arena!</gray>\n"
  footer: "\n<gray>Online Players: <white>%server_online%</white></gray>\n<gradient:#ffa07a:#ff6b6b>play.modernsetups.net</gradient>\n"
```
