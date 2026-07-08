---
title: 🏆 Leaderboards & Holograms
sidebar_position: 4
---

# 🏆 Leaderboards & Holograms

ModernDuels includes a native, high-performance holographic leaderboard system that cycles through player statistics. It is rendered using packet-based **TextDisplay** entities (introduced in Minecraft 1.19.4+), which means it requires **no external hologram plugins** (like DecentHolograms or HolographicDisplays) and has zero impact on server ticks.

---

## ✨ Features
* **Zero Dependencies**: Powered by native Mojang TextDisplay entities.
* **Auto-Cycling**: Automatically cycles through configured statistics on a custom schedule.
* **Personalized View**: The hologram is localized per-player. When a player stands in front of the leaderboard, the bottom section dynamically displays their own personal rank, score, and percentile for the active statistic.
* **Modern Formatting**: Fully supports **MiniMessage** markup, including linear RGB hex gradients, bold/italics, and custom styling.

---

## 🛠️ Step-by-Step Leaderboard Setup

Follow these steps to spawn and configure the leaderboard hologram on your server:

### Step 1: Position Yourself
Teleport to the exact location (in your lobby world) where you want the leaderboard hologram to float. Make sure you face the direction you want the hologram to align with.

### Step 2: Set the Location
Run the setup command to spawn the hologram at your current eye level and orientation:
```bash
/arena leaderboard set
```
*(Requires the `modernduels.admin` permission node).*
You will receive a confirmation message: `Leaderboard hologram location updated to your current position!`. The hologram will immediately spawn and start cycling.

### Step 3: Configure Settings in `config.yml`
Open `plugins/ModernDuels/config.yml` and locate the `leaderboard:` section at the bottom:

```yaml
leaderboard:
  # Toggle the leaderboard holograms on or off
  enabled: true
  
  # How long (in seconds) the leaderboard displays a single statistic before cycling
  cycle-interval-seconds: 10
  
  # The statistics to cycle through (supported keys: elo, wins, games, kills, deaths)
  stats: 
    - "elo"
    - "wins"
    - "games"
    - "kills"
    - "deaths"
    - "winrate"
```

### Step 4: Reload Configurations
To apply any edits you make to `config.yml` (such as modifying the cycling statistics or the formatting), run:
```bash
/duel reload
```
This will reload the configuration values and automatically recreate the holograms for all online players.

---

## 🎨 Design & Customization

The hologram layout can be fully customized using MiniMessage formatting in the `config.yml` file.

### Formatting Section
```yaml
leaderboard:
  # Title shown at the top of the hologram. Use %stat% as a placeholder for the active statistic.
  title-format: "<gradient:#ffa07a:#ff6b6b><bold>🏆 LEADERBOARD: %stat% 🏆</bold></gradient>"
  
  # Format for each of the top 10 players.
  row-format: "<yellow>#%rank% <white>%player% <gray>» <gold>%value%"
  
  # Format for the footer section summarizing the viewing player's individual stats.
  bottom-format: "<gray>─────────────────────────\n<yellow>Your Rank: <gold>#%rank% <gray>(%value% %stat%)"
```

### Supported Placeholders
* **`%stat%`**: The name of the active statistic being cycled (e.g. `ELO RATING`, `WINS`, etc.).
* **`%rank%`**: The player's leaderboard rank (e.g., `1`, `2` ... `10` or the viewer's current rank).
* **`%player%`**: The player's Minecraft username.
* **`%value%`**: The statistic's value (e.g. `1240` ELO points, or `94.5%` win rate).

---

## 📊 Tracked Statistic Metrics

The leaderboard cycles through these metrics, querying them either from the local JSON files or the MySQL database:

| Metric Key | Display Title | Description |
| :--- | :--- | :--- |
| `elo` | `ELO RATING` | Active ranked ELO rating (Global or kit-averaged). |
| `wins` | `WINS` | Total duels won (Ranked and unranked). |
| `losses` | `LOSSES` | Total duels lost. |
| `games` | `GAMES PLAYED` | Total matches completed. |
| `winrate` | `WIN RATE` | Wins divided by games played. |
| `kills` | `KILLS` | Total kills inside duel matches. |
| `deaths` | `DEATHS` | Total deaths inside duel matches. |
