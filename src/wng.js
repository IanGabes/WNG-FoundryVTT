import {ActorWNG} from './actor/actor-wng';
import {ItemWNG} from './item/item-wng';

import {WNG} from './config-wng';
import {ActorSheetWNGCharacter} from "./actor/sheet/character-sheet";
import initializeWNG from "./hooks/init";

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

//https://stackoverflow.com/a/31632215
Handlebars.registerHelper({
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
        return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
});

Hooks.on("popout:renderSheet", (sheet) => {
    sheet.element.css({ width: "610px", height: "740px", padding: "0px"})
})

Hooks.once('init', async function() {

    initializeWNG();

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

    // Define custom Entity classes. This will override the default Actor and
    // Item classes to instead use our extended versions.
    CONFIG.Actor.entityClass = ActorWNG;
    CONFIG.Item.entityClass = ItemWNG;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("wng", ActorSheetWNGCharacter,
    {
        types: ["character"],
        species: ['human', 'astartes'],
        makeDefault: true
    });

    //Items.unregisterSheet("core", ItemSheet);
    //Items.registerSheet("boilerplate", BoilerplateItemSheet, { makeDefault: true });
});