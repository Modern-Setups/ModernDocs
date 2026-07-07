---
title: 🔌 Integrations & Hooks
sidebar_position: 1
---

# 🔌 Integrations & Hooks

ModernDuels includes hooks for popular Bukkit/Paper plugins to expand functionality, manage economy bets, block cheat activity, and expose placeholders.

---

## 💰 Vault Economy (Betting)

If **Vault** is enabled, players can wager money on duel challenges.

### Rules of Betting:
1. **Wager Creation**: Challenges can specify a bet amount (e.g. `/duel <player> [kit] [rounds] [bet]`).
2. **Verification**: The plugin checks both players' account balances on duel acceptance and deducts the bet amount.
3. **Reward Pot**: The winner receives the combined pot, minus a server tax percentage.
4. **Draw/Refund**: If the match ends in a draw or the server crashes, the bets are refunded to both players automatically.
5. **Disk Ledger**: Active bets are logged to a local disk ledger (`bets.yml`) on match start. If the server crashes or restarts mid-match, the ledger ensures bets are refunded when the plugin starts up.

```yaml
economy:
  betting:
    min-bet: 0.0
    max-bet: 10000.0
    tax-percentage: 5.0            # 5% server tax deducted from winner reward
```

---

## 🛡️ Vulcan Anti-Cheat

ModernDuels hooks into the **Vulcan Anti-Cheat API** to monitor players for cheating during matches.

* **Alert Monitoring**: Cheating alerts triggered by players in a duel are tracked.
* **Auto-Forfeit**: Staff can configure thresholds. If a player exceeds the cheat violation threshold during a match, they are automatically disqualified, forfeiting the match to their opponent.

---

## 🥊 Combat Tag Integrations

To prevent players from entering duels during active wilderness combat or using duels to escape danger, ModernDuels hooks into:
* **CombatLogX**
* **PvPManager**
* **DeluxeCombat**
* **CombatTagPlus**

### Features:
* **Challenge Blocking**: Players cannot send challenges, accept challenges, or join matchmaking queues while they are tagged as "in-combat" by these plugins.
* **Combat Bypass**: While inside an active duel match, combat loggers are prevented from tagging players, avoiding false penalties or combat tag notifications while in the arena.

---

## 📊 PlaceholderAPI Placeholders

You can display player duels data in scoreboards, tab lists, chat formatting, or holograms using the following PlaceholderAPI keys:

| Placeholder | Description |
| :--- | :--- |
| `%modernduels_wins%` | Total wins |
| `%modernduels_losses%` | Total losses |
| `%modernduels_elo%` | Current ELO rating |
| `%modernduels_kdr%` | Kills/Deaths ratio |
| `%modernduels_kills%` | Total kills inside duels |
| `%modernduels_deaths%` | Total deaths inside duels |
| `%modernduels_games_played%` | Total matches completed |
| `%modernduels_winrate%` | Win rate percentage (formatted, e.g. `50.0%`) |
