---
title: 📜 Commands & Permissions
sidebar_position: 1
---

# 📜 Commands & Permissions Reference

This reference outlines all registration details, syntax guidelines, and permissions for ModernDuels commands.

---

## 🎮 Player Commands

### Kit Editor Commands
* **Command**: `/kit`
* **Aliases**: `/kits`, `/kiteditor`
* **Subcommands**:
  * `/kit` - Opens the main custom kits list menu.
  * `/kit share <kitName>` - Generates a share code for a custom kit layout.
  * `/kit import <code>` - Imports a kit layout using a share code.

### Duel & Queue Commands
* **Command**: `/duel`
* **Aliases**: `/d`, `/fight`, `/versus`
* **Usage**:
  * `/duel <player> [kit] [rounds] [bet]` - Challenge a player to a duel.
  * `/duel accept <player>` - Accept a pending challenge.
  * `/duel deny <player>` - Deny a pending challenge.
  * `/duel spectate <player>` - Spectate a player's active duel match.
  * `/duel leave` - Forfeit your active duel or stop spectating.
  * `/duel stats [player]` - View player duel stats in a graphical display GUI.
  * `/duel recap <matchId>` - Review a post-match recap screen.
  * `/duel queue` - Opens the public matchmaking queues menu.
  * `/duel settings` - Configure personal settings (scoreboard, player visibility).

### Party Commands
* **Command**: `/party`
* **Aliases**: `/p`, `/team`
* **Usage**:
  * `/party create` - Start a new party.
  * `/party invite <player>` - Invite a player to join your party.
  * `/party accept <leader>` - Accept an active party invite.
  * `/party leave` - Leave your current party.
  * `/party kick <player>` - Kick a member (Leader only).
  * `/party disband` - Disband the party (Leader only).
  * `/party list` - View party members.

### Miscellaneous Commands
* **Command**: `/report <player>`
  * **Description**: File a report against a player for cheating or behavior issues during a duel.
* **Command**: `/leave`
  * **Description**: Shortcut to forfeit a match or exit spectator mode.

---

## 🛡️ Administrative Commands

### Arena Setup Commands
* **Command**: `/arena`
* **Permission**: `modernduels.admin`
* **Usage**:
  * `/arena create <name> <templateName>` - Registers a new arena linked to a schematic template.
  * `/arena setup <name>` - Load and teleport to a temporary setup world instance.
  * `/arena setspawn1 <name>` - Set Player 1 spawn location at your standing spot (relative calculation).
  * `/arena setspawn2 <name>` - Set Player 2 spawn location.
  * `/arena done` - Save spawn locations, clean up setup world, and return to lobby.
  * `/arena list` - List registered arenas and templates.
  * `/arena delete <name>` - Delete an arena definition from `arenas.yml`.
  * `/arena manage` - Open the visual Arena Management GUI.

### Hologram Commands
* **Command**: `/hologram`
* **Aliases**: `/holo`, `/holograms`
* **Permission**: `modernduels.admin`
* **Usage**:
  * `/hologram create <name> <stat>` - Spawns a leaderboard hologram showing stats (e.g. `elo`, `wins`).
  * `/hologram delete <name>` - Removes a spawned hologram.
  * `/hologram list` - Lists active hologram names and locations.

### Staff Commands
* **Command**: `/duel reload`
  * **Permission**: `modernduels.admin.reload`
  * **Description**: Hot-reloads all configurations (`config.yml` and `scoreboard.yml`) and tasks.
* **Command**: `/duel mod`
  * **Permission**: `modernduels.staff`
  * **Description**: Toggles Moderation Mod Mode (Vanish, flight, staff hotbar items).
* **Command**: `/staffchat [message]`
  * **Aliases**: `/sc`, `/s`
  * **Permission**: `modernduels.staff`
  * **Description**: Toggle staff chat channel or send a staff message.

---

## 🔑 Permissions Index

| Permission | Default | Description |
| :--- | :--- | :--- |
| `modernduels.admin` | `op` | Grants access to `/arena`, `/hologram`, reload, and bypass lobby protections. |
| `modernduels.admin.reload` | `op` | Grants access to `/duel reload`. |
| `modernduels.staff` | `op` | Grants access to Staff Mod Mode (`/duel mod`) and Staff Chat. |
| `modernduels.bypass.limit` | `op` | Bypasses the max concurrent matches restriction. |
| `modernduels.priority.<level>` | `false` | Assigns queue priority weight (replace `<level>` with a number). |
| `modernduels.kit.create` | `true` | Allows creating custom kits. |
| `modernduels.kit.share` | `true` | Allows exporting and importing share codes. |
| `modernduels.duel` | `true` | Allows challenging players and accepting duels. |
| `modernduels.spectate` | `true` | Allows spectating active games. |
