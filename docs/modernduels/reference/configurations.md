---
title: ⚙️ Configuration Files
sidebar_position: 2
---

# ⚙️ Configuration Reference

ModernDuels utilizes two configuration files to manage global rules and scoreboard/tab formatting: `config.yml` and `scoreboard.yml`.

---

## 📄 config.yml

The main configuration file controls game settings, lobby locations, ranked rules, and database specifications.

```yaml
# Global message prefix (MiniMessage formatting)
prefix: "<gradient:#ff6b6b:#ffa07a><bold>ModernDuels</bold></gradient> <dark_gray>» <reset>"

# Lobby spawn settings
lobby:
  world: "world"
  spawn:
    x: 0.5
    y: 64.0
    z: 0.5
    yaw: 0.0
    pitch: 0.0
  heal-on-teleport: true
  feed-on-teleport: true
  extinguish-fire-on-teleport: true
  clear-potion-effects-on-teleport: true
  protection:
    enabled: true
    block-modify: true
    damage: true
    hunger: true
    item-drop: true
    item-pickup: true
    interact: true
    entity-damage: true

# Duel gameplay rules
duels:
  countdown-seconds: 5               # Pre-match countdown
  freeze-during-countdown: true      # Freeze player movement
  max-duration: 300                  # Max duration in seconds (0 = infinite)
  end-cleanup-delay-seconds: 3       # Delay before teleporting to lobby
  allow-item-drops: false            # Prevent drop spamming
  allow-block-breaking: true         # Can be disabled globally
  allow-block-placing: true          # Can be disabled globally
  request-expiry-seconds: 30         # Duel request timeout
  max-simultaneous: 5                # Simultaneous match cap
  pearl-cooldown:
    enabled: true
    duration-seconds: 15             # Ender pearl cooldown
  allowed-commands-in-match:         # Allowed commands in match (all others blocked)
    - "/duel"
    - "/duels"
    - "/leave"
    - "/spectate"
    - "/spec"

# Custom Kit Settings
kits:
  # Note: The plugin automatically creates 5 default preset kits in 'plugins/ModernDuels/presets/' on startup:
  # (nodebuff.json, op.json, uhc.json, classic.json, sumo.json).
  # Server owners can disable any default kit by renaming the file (e.g. 'nodebuff.json' -> 'nodebuff.json.disabled').
  # To re-enable, rename the file back to end in '.json'.
  default-max-kits: 5
  allow-sharing: true
  share-code-expiry-seconds: 600
  max-enchant-level: -1

# Leaderboards Cycle Options
leaderboard:
  enabled: true
  cycle-interval-seconds: 10         # Cycle rate between stats (wins, ELO, etc.)
  stats: ["elo", "wins", "games", "kills", "deaths"]
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
