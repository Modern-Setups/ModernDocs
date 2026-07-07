---
title: 🏟️ Arena Setup Guide
sidebar_position: 2
---

# 🏟️ Arena Setup Guide

ModernDuels utilizes a dynamic arena system. It allocates non-overlapping coordinate offsets inside a single persistent void world to host active matches concurrently. This setup prevents matches from interfering with one another and deletes the blocks on completion to ensure a clean state.

---

## 🛠️ Step-by-Step Arena Setup

Follow these steps to register and set up a new arena:

### Step 1: Add a Schematic Template
1. Create or download an arena build schematic.
2. Put the `.schem` or `.schematic` file in your server's templates folder (default: `plugins/ModernDuels/arena-templates/`).
   * *Example*: `plugins/ModernDuels/arena-templates/desert_canyon.schem`

### Step 2: Register the Arena
Run the create command to link a unique arena name to your schematic:
```bash
/arena create DesertDuel desert_canyon
```

### Step 3: Enter Setup Mode
Run the setup command to load a temporary instance of the arena:
```bash
/arena setup DesertDuel
```
*You will be teleported to a temporarily loaded setup clone of the arena.*

### Step 4: Configure Spawn Locations
Stand at the exact location where Player 1 should spawn and run:
```bash
/arena setspawn1 DesertDuel
```

Next, stand at the location where Player 2 should spawn and run:
```bash
/arena setspawn2 DesertDuel
```
*Note: These spawn points are calculated relative to the schematic origin, which means they will scale properly to any offset paste coordinate.*

### Step 5: Save and Exit Setup
Complete the setup by running:
```bash
/arena done
```
*The plugin will save coordinates to `arenas.yml`, teleport you back to the lobby, and safely unload the setup instance.*

---

## ⚙️ Arena Management & Options

Administrators can toggle arena parameters inside `arenas.yml` or via `/arena manage`:

```yaml
arenas:
  DesertDuel:
    template: "desert_canyon"
    allow-block-breaking: false   # Disable block breaking (e.g. for Node/Standard PvP)
    allow-block-placing: false    # Disable block placing
    enabled: true                 # Toggle arena availability
    spawn1:
      x: 10.5
      y: 65.0
      z: 0.5
      yaw: -90.0
      pitch: 0.0
    spawn2:
      x: -10.5
      y: 65.0
      z: 0.5
      yaw: 90.0
      pitch: 0.0
```

### Void World Modes

In `config.yml`, you can customize how the plugin hosts these worlds:
* **SHARED (Default)**: A single void world (`Duels Void`) is used. Arenas are pasted at offsets like `X=0`, `X=300`, `X=600`, etc.
* **PER_TEMPLATE**: Creates separate void worlds for different templates (e.g., `Duels Void - desert_canyon`). Useful if you need separate biomes or custom environmental rules per arena type.
