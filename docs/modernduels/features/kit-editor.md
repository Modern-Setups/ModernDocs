---
title: 🗡️ Kit Editor & Customs
sidebar_position: 1
---

# 🗡️ Custom Kit Editor

ModernDuels includes a custom, interactive Chest GUI Kit Editor modeled directly after **PvP Legacy**. Players can design, configure, name, share, and delete their own custom kit layouts.

---

## 🎒 Editor Interface & Layout

Right-clicking the **Kit Editor (Book)** item in the lobby or running `/kit` opens the Kit List menu. From here, players can click to edit or create a custom kit slot.

Inside the editor GUI:
1. **Grid Inventory Preview**: Displays a 1-to-1 layout of the player's inventory, hotbar, offhand slot, and armor slots.
2. **Item Categories Picker**: Click any slot in the preview to select items from categories:
   * ⚔️ Swords & Axes
   * 🏹 Bows, Crossbows, and Projectiles
   * 🛡️ Armor pieces (Helmets, Chestplates, Leggings, Boots)
   * 🧱 Building Blocks & Obstacles
   * 🧪 Potions (Splash, Lingering, and Drinking)
   * 🍎 Consumables (Golden Apples, Food, Stews)
3. **Item Customizer**: Shift-clicking or right-clicking items inside the editor opens property configurators:
   * **Enchantment Editor**: Add or remove enchantments on the item and set custom levels up to the server configured limit.
   * **Potion Editor**: Set potion type, duration, and strength amplifiers.

---

## 📑 Sharing Kits

Players can share their designs with other players via share codes:
* **Exporting**: Click the "Share Kit" option or run `/kit share <kitName>`. This generates an alphanumeric, temporary share code (e.g. `MD-A7B8C9`).
* **Importing**: Run `/kit import <code_here>` to redeem the share code directly into one of their available kit slots.

---

## 🔒 Custom Kit Limits

Set permissions in your permission manager (like LuckPerms) to restrict the number of custom kits a player can create:

| Permission | Description |
| :--- | :--- |
| `modernduels.kit.create` | Grants ability to create custom kits. |
| `modernduels.kit.share` | Grants ability to share or import codes. |
| `modernduels.kit.limit.5` | Limits player to 5 custom kit slots (Default). |
| `modernduels.kit.limit.10` | Limits player to 10 custom kit slots. |
| `modernduels.kit.limit.25` | Limits player to 25 custom kit slots. |
| `modernduels.kit.limit.unlimited` | Grants unlimited custom kit slots. |

---

## 🛠️ Editor Settings

Admins can modify editor limits under the `kits:` section of `config.yml`:

```yaml
kits:
  default-max-kits: 5              # Default limit if no permission node is set
  allow-sharing: true              # Toggle code sharing (/kit share)
  share-code-expiry-seconds: 600   # Expiry time for generated share codes
  max-enchant-level: -1            # Maximum enchantment level (-1 for vanilla maximums)
```

---

## 🛡️ Default Preset Kits

ModernDuels extracts 5 pre-configured default preset kits inside the `plugins/ModernDuels/presets/` folder on startup:
* `nodebuff.json` (NoDebuff PvP kit)
* `op.json` (OP PvP kit)
* `uhc.json` (UHC PvP kit)
* `classic.json` (Classic PvP kit)
* `sumo.json` (Sumo PvP kit)

### ⚙️ Disabling and Enabling Presets
Server administrators can control which preset kits are active by managing files inside the `presets/` folder:
* **To disable a default preset**: Rename the file by appending `.disabled` to the file extension (e.g. `nodebuff.json` -> `nodebuff.json.disabled`). The plugin will not load the kit on restart or reload, and will not recreate the default file either.
* **To re-enable a preset**: Rename the file back to end in `.json` (e.g. `nodebuff.json.disabled` -> `nodebuff.json`).
* **Custom presets**: Server owners can drop any custom-made kit JSON in this folder to make it a globally available preset kit.
