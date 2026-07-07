---
title: 💾 Installation & Storage
sidebar_position: 1
---

# 💾 Installation & Storage Setup

Get ModernDuels running on your server in minutes. Follow this guide to install the plugin and choose your preferred database backend.

---

## 🚀 Basic Installation

1. Download the `ModernDuels.jar` file.
2. Place the jar file inside your server's `plugins/` directory.
3. Start (or restart) the Minecraft server.
4. ModernDuels will generate its default files and folder structures inside `plugins/ModernDuels/`.
5. Verify the installation by running `/duel reload`. If the prefix and help message appear, you are ready!

---

## 🗄️ Database Storage Configuration

By default, ModernDuels saves all custom kits and player statistics locally in JSON flat-files under `plugins/ModernDuels/data/`. For networks or multi-server setups, you can connect the plugin to a MySQL or MariaDB database.

### Setting up MySQL

1. Open `plugins/ModernDuels/config.yml`.
2. Locate the `database:` section.
3. Change `type: "FILE"` to `type: "MYSQL"`.
4. Fill in your connection details under the `mysql:` config section:

```yaml
database:
  type: "MYSQL"
  mysql:
    host: "localhost"
    port: 3306
    database: "modernduels"
    username: "root"
    password: "YOUR_SECURE_PASSWORD"
    ssl: true
    pool:
      maximum-pool-size: 10
      minimum-idle: 2
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
```

5. Restart the server. ModernDuels will automatically establish the HikariCP connection pool and initialize the database tables:
   * `modern_duels_kits`: Stores custom player kit layouts.
   * `modern_duels_stats`: Stores wins, losses, ELO, kills, and deaths.

---

## 🌎 Lobby Configuration

Set up your lobby world and coordinates where players return after completing or spectating matches.

Open `config.yml` and define your lobby world spawn coordinates:

```yaml
lobby:
  world: "lobby"
  spawn:
    x: 100.5
    y: 64.0
    z: -50.5
    yaw: 90.0
    pitch: 0.0
  heal-on-teleport: true
  feed-on-teleport: true
  extinguish-fire-on-teleport: true
  clear-potion-effects-on-teleport: true
```

When players exit a match, their inventories will be restored to their pre-match state, all active potion effects will be cleared, and their health and food bars will be maxed.
