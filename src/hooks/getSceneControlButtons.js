/**
 * Add Status right click option for combat tracker combatants
 */
import {WNG_Utility} from "../utility-wng";

Hooks.on("getSceneControlButtons", (buttons) => {
    let group = buttons.find(b => b.name === "lighting")
    group.tools.push({
      button: true,
      icon : "fas fa-circle",
      name: "morrslieb",
      title: canvas.scene.getFlag("wng", "morrslieb") ? "Morrslieb - Currently On " : "Morrslieb - Currently Off",
      onClick : WNG_Utility.toggleMorrslieb
    })
  })