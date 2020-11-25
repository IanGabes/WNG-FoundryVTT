export class ItemWNG extends Item
{
  // Upon creation, assign a blank image if item is new (not duplicated) instead of mystery-man default
  static async create(data, options)
  {
    if (!data.img)
      data.img = "systems/wng/icons/blank.png";
    super.create(data, options);
  }
}