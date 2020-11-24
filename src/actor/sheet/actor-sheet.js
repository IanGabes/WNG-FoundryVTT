/**
 * Provides the data and general interaction with Actor Sheets - Abstract class.
 *
 * ActorSheetWNG provides the general interaction and data organization shared among all
 * actor sheets, as this is an abstract class, inherited by either Character, NPC, or Creature
 * specific actor sheet classes. When rendering an actor sheet, getData() is called, which is
 * a large and key function that prepares the actor data for display, processing the raw data
 * and items and compiling them into data to display on the sheet. Additionally, this class
 * contains all the main events that respond to sheet interaction in activateListeners().
 *
 * @see   ActorWNG - Data and main computation model (this.actor)
 * @see   ActorSheetWNGCharacter - Character sheet class
 * @see   ActorSheetWNGNPC - NPC sheet class
 * @see   ActorSheetWNGCreature - Creature sheet class
 */
export class ActorSheetWNG extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["wng", "character"],
      width: 576,
      height: 600,
      tabs: [{navSelector: ".tabs", contentSelector: ".content", initial: "main"}]
    });
  }

  /**
   * Return the type of the current Actor.
   * @return {String} Actor type - character, npc, or creature
   */
  get actorType() {
    return this.actor.data.type;
  }
}