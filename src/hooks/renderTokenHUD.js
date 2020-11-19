// Adds tooltips to conditions in the condition menu
import {WNG_Utility} from "../utility-wng";

Hooks.on("renderTokenHUD", async (obj, html) => {
  for (let condition of html.find("img.effect-control"))
  {
    condition.title = WNG_Utility.parseConditions([condition.src])[0]
  }
})