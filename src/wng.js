import {ActorWNG} from './actor/actor-wng';
import {ItemWNG} from './item/item-wng';

import {WNG} from './config-wng';
import {ActorSheetWNGCharacter} from "./actor/sheet/character-sheet";
import initializeWNG from "./hooks/init";


// Treat the custom default token as a true default token
// If you change the actor image from the default token, it will automatically set the same image to be the token image
Hooks.on("preUpdateActor", (data, updatedData) =>{
    if (data.data.token.img == "systems/wng/tokens/unknown.png" && updatedData.img)
    {
        updatedData["token.img"] = updatedData.img;
        data.data.token.img = updatedData.img;
    }
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

    // Register sheet application classes. This will stop using the core sheets and
    // instead use our customized versions.
    Actors.unregisterSheet("core", ActorSheet);
    // Register Character Sheet
    Actors.registerSheet("wng", ActorSheetWNGCharacter,
    {
        types: ["character"],
        makeDefault: true
    });


    //Items.unregisterSheet("core", ItemSheet);
    // Items.registerSheet("boilerplate", BoilerplateItemSheet, { makeDefault: true });
  });