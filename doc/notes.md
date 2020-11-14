#### Template Notes

 - HTML templates must be registered with Foundry via the `loadTemplates()` function for later use. These templates are registered as Handlebars "partial" templates https://handlebarsjs.com/guide/partials.html.
 
 - CSS classes used to reference templated HTML tags are registered in the `classes` section of the Entity's `options` object. e.g:
 ```javascript
    const options = super.defaultOptions;
    mergeObject(options,
        {
          classes: options.classes.concat(["sheet", "wng", "actor", "character-sheet"]),
          width: 610,
          height: 740,
        });
    return options;
  }
```

while the `get template()` function is in charge of pointing Foundry to the right HTML template file, the `classes` key forces that template to spawn with a container with a valid CSS selector of `.sheet.wng.actor.character-sheet`.

 - Template paths for the webserver have paths relative to the root of the FoundryVTT data folder (!!). E.g. `systems/wng/assets/templates/actors/actor-main.html` is a valid path in the code that maps to `/home/ian/.local/FoundryVTT/Data/systems/wng/assets/templates/actors/actor-main.html`. Wild!
 
#### Hooks Notes

 - Registering a sheet in the `wng` "namespace" like so:
 ```javascript
    Actors.registerSheet("wng", ActorSheetWNGCharacter,
    {
        types: ["character"],
        makeDefault: true
    });
```
The types array here is case-sensitive, and must match types found in the `template.json` file. Actor sheets must be able to be found in the `Actor.types` array.