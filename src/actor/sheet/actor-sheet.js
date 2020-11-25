export class ActorSheetWNG extends ActorSheet {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["wng", "character"],
      width: 576,
      height: 600
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