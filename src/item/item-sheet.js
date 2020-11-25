export class ItemSheetWNG extends ItemSheet {
  constructor(item, options) {
    super(item, options);
    this.mce = null;
  }

  static get defaultOptions() {
    const options = super.defaultOptions;
    return options;
  }

  /**
   * Use a type-specific template for each different item type
   */
  get template() {
    let type = this.item.type;
    //TODO: do this
    return `systems/wng/templates/items/item-${type}-sheet.html`;
  }
}