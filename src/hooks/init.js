import {ActorWNG} from "../actor/actor-wng";

export default function initializeWNG() {
    ActorWNG.createDialog = async function createDialog(data = {}, options = {}) {
        // Collect data
        console.error("ITS ME")
        const types = game.system.entityTypes[this.entity];
        const folders = game.folders.filter(f => (f.data.type === this.entity) && f.displayed);
        const label = game.i18n.localize(this.config.label);
        const title = game.i18n.format("ENTITY.Create", {entity: label});

        // Render the entity creation form
        const html = await renderTemplate(`systems/wng/assets/templates/entity-create-override.html`, {
            name: data.name || game.i18n.format("ENTITY.New", {entity: label}),
            folder: data.folder,
            folders: folders,
            hasFolders: folders.length > 1,
            type: data.type || types[0],
            species: data.species || {'human':'Human', 'astartes': "astartes"},
            types: types.reduce((obj, t) => {
                const label = CONFIG[this.entity]?.typeLabels?.[t] ?? t;
                obj[t] = game.i18n.has(label) ? game.i18n.localize(label) : t;
                return obj;
            }, {}),
            hasTypes: types.length > 1
        });

        // Render the confirmation dialog window
        return Dialog.prompt({
            title: title,
            content: html,
            label: title,
            callback: html => {
                const form = html[0].querySelector("form");
                const fd = new FormDataExtended(form);
                data = mergeObject(data, fd.toObject());
                if (types.length === 1) data.type = types[0];
                return this.create(data, {renderSheet: true});
            },
            options: options
        });
    }

    //Handlebars Helpers

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
    // Pre-load templates
    loadTemplates([
        "systems/wng/assets/templates/actors/actor-sheet.html",
        "systems/wng/assets/templates/actors/actor-sheet-header.html",
        "systems/wng/assets/templates/actors/actor-sheet-skills.html",
        "systems/wng/assets/templates/actors/actor-sheet-character-stats.html",
        "systems/wng/assets/templates/actors/actor-sheet-progression.html",
        "systems/wng/assets/templates/actors/actor-sheet-actions.html",
        "systems/wng/assets/templates/actors/actor-sheet-wargear.html",
        "systems/wng/assets/templates/entity-create-override.html",
        "systems/wng/assets/templates/components/stat-table-single-value.html",
        "systems/wng/assets/templates/components/scrollable-effects-list.html",
        "systems/wng/assets/templates/actors/reloads-explosives.html",
    ]);
};