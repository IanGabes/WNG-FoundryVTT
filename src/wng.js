import {ActorWNG} from './actor/actor-wng';
import {ItemWNG} from './item/item-wng';

import {WNG} from './config-wng';
import {ActorSheetWNGCharacter} from "./actor/sheet/character-sheet";
import initializeWNG from "./hooks/init";

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

Hooks.on("popout:renderSheet", (sheet) => {
    sheet.element.css({ width: "610px", height: "740px", padding: "0px"})
})

Hooks.once('init', async function() {

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
      formula: "1d20",
      decimals: 2
    };

    game.WNG = {
        entities: {
            ActorWNG,
            ItemWNG
        }
    }

    initializeWNG();

    // Define custom Entity classes. This will override the default Actor and
    // Item classes to instead use our extended versions.
    CONFIG.Actor.entityClass = ActorWNG;
    CONFIG.Item.entityClass = ItemWNG;
    //CONFIG.debug.hooks = true

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("wng", ActorSheetWNGCharacter,
    {
        types: ["character"],
        makeDefault: true
    });

    //Items.unregisterSheet("core", ItemSheet);
    //Items.registerSheet("boilerplate", BoilerplateItemSheet, { makeDefault: true });
  });