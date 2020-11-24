/**
 * Init function loads tables, registers settings, and loads templates
 */
import {WNG_Tables} from "../tables-wng";

export default function initializeWNG() {
    // Create scatter table
    WNG_Tables.scatter = {
        name: "Scatter",
        die: "1d10",
        rows: [
            {
                name: "Top Left",
                range: [1, 1]
            },
            {
                name: "Top Middle",
                range: [2, 2]
            },
            {
                name: "Top Right",
                range: [3, 3]
            },
            {
                name: "Center Left",
                range: [4, 4]
            },
            {
                name: "Center Right",
                range: [5, 5]
            },
            {
                name: "Bottom Left",
                range: [6, 6]
            },
            {
                name: "Bottom Middle",
                range: [7, 7]
            },
            {
                name: "Bottom Right",
                range: [8, 8]
            },
            {
                name: "At your feet",
                range: [9, 9]
            },
            {
                name: "At the target's feet",
                range: [10, 10]
            },
        ]
    }

    // Create Winds table
    WNG_Tables.winds = {
        name: "The Swirling Winds",
        die: "1d10",
        rows: [
            {
                modifier: "-30",
                range: [1, 1]
            },
            {
                modifier: "-10",
                range: [2, 3]
            },
            {
                modifier: "0",
                range: [4, 7]
            },
            {
                modifier: "+10",
                range: [8, 9]
            },
            {
                modifier: "+30",
                range: [10, 10]
            }
        ]
    }

    // Pre-load templates
    loadTemplates([
        "systems/wng/assets/templates/actors/actor-sheet.html",
        "systems/wng/assets/templates/actors/actor-sheet-header.html"
        // //"systems/wng/assets/templates/actors/actor-attributes.html",
        // //"systems/wng/assets/templates/actors/actor-abilities.html",
        // "systems/wng/assets/templates/actors/actor-main.html",
        // "systems/wng/assets/templates/actors/actor-combat.html",
        // "systems/wng/assets/templates/actors/actor-biography.html",
        // "systems/wng/assets/templates/actors/actor-inventory.html",
        // "systems/wng/assets/templates/actors/actor-skills.html",
        // "systems/wng/assets/templates/actors/actor-magic.html",
        // "systems/wng/assets/templates/actors/actor-religion.html",
        // "systems/wng/assets/templates/actors/actor-talents.html",
        // //"systems/wng/assets/templates/actors/actor-classes.html",
        // "systems/wng/assets/templates/actors/actor-notes.html",
        // "systems/wng/assets/templates/actors/npc-main.html",
        // //"systems/wng/assets/templates/actors/npc-notes.html",
        // "systems/wng/assets/templates/actors/creature-main.html",
        // "systems/wng/assets/templates/actors/creature-notes.html",
        // "systems/wng/assets/templates/actors/creature-main.html",
        // "systems/wng/assets/templates/chat/dialog-constant.html",
        // "systems/wng/assets/templates/chat/test-card.html",
        // "systems/wng/assets/templates/items/item-header.html",
        // "systems/wng/assets/templates/items/item-description.html",
    ]);

    // Load name construction from files
    //TODO: What are these?
    //NameGenWfrp._loadNames();
    //CONFIG.Morrslieb = new PIXI.filters.AdjustmentFilter({green: 0.7137, red: 0.302, blue: 0.2275})

};