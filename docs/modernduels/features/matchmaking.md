---
title: ⚖️ Matchmaking & ELO
sidebar_position: 2
---

# ⚖️ Matchmaking & ELO Queues

ModernDuels includes a matchmaking system that supports unranked challenges, ranked matches with ELO ratings, and custom-designed kits.

---

## 🏎️ Matchmaking Modes

1. **Ranked Queue (`/duel queue`)**:
   * Players compete using preset standard kit configurations.
   * Modifies player **ELO** scores based on results.
   * Search ranges expand over time if a match isn't found immediately.
2. **Unranked Queue**:
   * Casual matchmaking for practice matches using standard kits. No ELO stakes.
3. **Custom Kit Matches**:
   * Send a challenge to a specific player via `/duel <player>` and choose a custom kit layout you designed in the editor.

---

## 📈 Ranked ELO Logic

The plugin utilizes a mathematical **ELO formula** to compute ranking adjustments on match completion:
* **Starting ELO**: Configurable (Default: `1000` points).
* **K-Factor**: The maximum possible change in points per match (Default: `32`).
* **Volatile Multiplier**: Larger ELO gaps yield bigger gains/losses for upsets.

### Ranked Config in `config.yml`:

```yaml
ranked:
  enabled: true
  # "GLOBAL" (one ELO score for all kits) or "PER_KIT" (separate ELO per kit)
  mode: "GLOBAL"
  starting-elo: 1000
  k-factor: 32
  queue:
    initial-elo-range: 100         # Initial search threshold (+/- ELO)
    elo-range-expansion: 50        # ELO expansion added per tick
    max-elo-range: 500             # Cap on how far search threshold can expand
    tick-interval: 5               # Search queue poll rate (seconds)
```

---

## 🛑 Match Queue Locks & Priority

* **Inventory Locking**: When a player joins a matchmaking queue, their inventory is cleared and replaced with a single **Barrier** item in slot 8. Right-clicking this barrier allows the player to cancel search and leave the queue.
* **Simultaneous Limit Queue**: If the server reaches the maximum allowed concurrent matches, new matches enter a priority waiting queue.
* **Priority Nodes**: VIP players can bypass or get higher priority in the waiting queue using permission nodes:
  * `modernduels.bypass.limit`: Bypass the queue limit entirely.
  * `modernduels.priority.<level>`: Assigns a numeric priority weight (higher numbers get moved to the front of the queue first).
