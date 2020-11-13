import {ActorWNG} from './actor/actor-wng';

import {WNG} from './config-wng';

Hooks.once('init', async function() {
    console.log(WNG);
    // Place our classes in their own namespace for later reference.
    game.boilerplate = {
      ActorWNG,
      BoilerplateItem
    };
  
    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
      formula: "1d20",
      decimals: 2
    };
  
    // Define custom Entity classes. This will override the default Actor and
    // Item classes to instead use our extended versions.
    CONFIG.Actor.entityClass = ActorWNG;
    CONFIG.Item.entityClass = ItemWNG;
  
    // Register sheet application classes. This will stop using the core sheets and
    // instead use our customized versions.
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("boilerplate", BoilerplateActorSheet, { makeDefault: true });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("boilerplate", BoilerplateItemSheet, { makeDefault: true });
  
    // If you need to add Handlebars helpers, here are a few useful examples:
    Handlebars.registerHelper('concat', function() {
      var outStr = '';
      for (var arg in arguments) {
        if (typeof arguments[arg] != 'object') {
          outStr += arguments[arg];
        }
      }
      return outStr;
    });
  
    Handlebars.registerHelper('toLowerCase', function(str) {
      return str.toLowerCase();
    });
  });