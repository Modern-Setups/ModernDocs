---
slug: /
title: 🚀 Introduction & Overview
sidebar_position: 1
---

# 🚀 ModernDuels Overview

**ModernDuels** is a high-fidelity standalone Paper/Purpur (1.21.x) Minecraft plugin that replicates **PvP Legacy's** custom kit editor, competitive duels, and isolated arena worlds. Built with high performance and smooth experiences in mind, it is optimized for modern Minecraft PvP servers.

---

## ✨ Core Features

* **Legacy-Style Kit Editor**: An interactive, multi-grid chest GUI allowing players to preview their entire kit layout (inventory, hotbar, armor, and offhand) and customize it item-by-item down to enchants and custom potion effects.
* **Dynamic Arena Rollbacks**: Arenas are isolated instances. Cloned copies of schematic templates are loaded and pasted on the fly using FastAsyncWorldEdit (FAWE) and automatically destroyed on match completion.
* **Ranked & Matchmaking Systems**: Ranked ELO matchmaking queues with expanding search windows, unranked public queues, and custom kit queues.
* **Per-Player Settings**: Persistent menus for toggling sidebar scoreboards, TAB layouts, player visibility in the lobby, and duel request allowances.
* **Deep Integrations**: Native support for Vault Economy, Vulcan Anti-Cheat, PlaceholderAPI, and popular combat loggers.
* **Staff Command Suite**: Comprehensive admin control panels (`/arena manage`) and Vanish Mod Mode (`/duel mod`).

---

## 🛠️ Technology Stack

ModernDuels is engineered on modern APIs:
* **Minecraft Version Support**: Paper or Purpur 1.21.x (Java 21).
* **World Processing**: FastAsyncWorldEdit (FAWE) for lightning-fast block operations.
* **Formatting Engine**: MiniMessage for modern, hex-gradient rich chat and GUI styling.
* **Database Backend**: Multi-storage structure supporting flat-file JSON storage or external MySQL/MariaDB database server with HikariCP connection pooling.
* **Economy Support**: Vault API for wages and betting pots.
* **Anti-Cheat Support**: Vulcan API integration for automatic alerts and forfeits.
