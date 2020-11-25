import {ActorSheetWNG} from "./actor-sheet";

export class ActorSheetWNGCharacter extends ActorSheetWNG {

    static get defaultOptions() {
        const options = super.defaultOptions;

        mergeObject(options,
            {
                classes: options.classes.concat(["sheet", "wng", "actor", "character-sheet"]),
                width: 960,
                height: 900,
            });
        return options;
    }

    /**
     * Get the correct HTML template path to use fornot rendering this particular sheet
     * @type {String}
     */
    get template() {
        //TODO: limited
        if (!game.user.isGM && this.actor.limited) return "systems/wng/assets/templates/actors/actor-limited.html";
        return "systems/wng/assets/templates/actors/actor-sheet.html";
    }

    /**
     * @param html
     */
    activateListeners(html) {
        super.activateListeners(html);

        $(".sheet.wng.actor.character-sheet .tabs li").each((i, o) =>
        {
            if(!$(o).hasClass('is-active')){
                $("section#"+$(o).attr("id")).hide();
            }
            $(o).click(this.swapTabs)
        });
    }

    /**
     * @param {Event} event
     */
    swapTabs(event){
        if ($(event.currentTarget).hasClass("is-active")){
            return;
        }

        let oldTab = $(".sheet.wng.actor.character-sheet .tabs li.is-active");
        $("section#"+oldTab.attr("id")).hide();
        $("section#"+$(event.currentTarget).attr("id")).show();
        console.log("section#"+$(event.currentTarget).attr("id"));
        oldTab.removeClass("is-active")
        $(event.currentTarget).addClass("is-active");
    }
}