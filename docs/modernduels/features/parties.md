---
title: 👥 Parties & Team Duels
sidebar_position: 3
---

# 👥 Parties & Team Duels

ModernDuels includes a party management system allowing groups of players to team up, queue together, and challenge other groups to multi-player duels (2v2, 3v3, etc.).

---

## ⚙️ Party Commands

Players can create and manage their party using `/party` (aliases: `/p`, `/team`):

* `/party create` - Start a new party. The creator becomes the leader.
* `/party invite <player>` - Invite another player to join your party (invites expire in 60s).
* `/party accept <leader>` - Accept an active party invitation.
* `/party leave` - Leave your current party. If the leader leaves, the party is disbanded.
* `/party kick <player>` - Kick a member from the party (Leader only).
* `/party disband` - Disband the party and reset all members (Leader only).
* `/party list` - Display a list of current party members.

---

## ⚔️ Team Duel Mechanics

When two party leaders challenge each other or accept a duel:
1. **Roster Inclusion**: All members in both parties are pulled into the duel match.
2. **Team Assignments**: Members of Party 1 are placed on Team 1; members of Party 2 are placed on Team 2.
3. **Friendly Fire Prevention**: Teammates cannot damage each other during active combat. Friendly projectile hits and sword swipes are automatically blocked.
4. **Round Elimination**: A round ends when all members of one team are eliminated. The surviving team receives the round point.
5. **Team Victory**: The team that reaches the required target wins (e.g. 2 round wins in a Best of 3 format) wins the overall match.
6. **Lobby Return**: All party members are teleported back to the lobby together on match end.
