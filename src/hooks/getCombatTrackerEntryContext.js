/**
 * Add Status right click option for combat tracker combatants
 */
import {WNG_Utility} from "../utility-wng";

Hooks.on("getCombatTrackerEntryContext", (html, options) => {
    options.push(
    {
      name: "Status",
      condition: true,
      icon: '<i class="far fa-question-circle"></i>',
      callback: target => {
        WNG_Utility.displayStatus(target.attr("data-token-id"));
        $(`#sidebar-tabs`).find(`.item[data-tab="chat"]`).click();
      }
    })
  })