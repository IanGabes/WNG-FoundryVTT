
export class ActorWNG extends Actor {
  prepareData()
  {
    super.prepareData();

    console.log("PREPARE DATA");
    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;
  }

  prepareBaseData() {
    super.prepareBaseData();
    console.log("PREPARE BASE DATA");
  }

  static async create(data, options={}) {
    const entityName = this.entity;
    const cls = CONFIG[entityName].entityClass;
    const user = game.user;
    options = mergeObject({temporary: false, renderSheet: false}, options);

    // Dispatch pre-creation hooks for each pending data
    data = data instanceof Array ? data : [data];
    if (!(options.temporary || options.noHook)) {
      for (let d of data) {
        const allowed = Hooks.call(`preCreate${entityName}`, d, options, user._id);
        if (allowed === false) {
          console.debug(`${vtt} | ${entityName} creation prevented by preCreate hook`);
          return null;
        }
      }
    }
    // Trigger the Socket workflow
    const response = await SocketInterface.dispatch("modifyDocument", {
      type: entityName,
      action: "create",
      data: data,
      options: options
    });

    // Call the response handler and return the created Entities
    const entities = cls._handleCreate(response);
    try {
      entities[0].data.data.details.species.value = data[0]["species"];
    } catch (e ){
      console.error(e);
    }
    return data.length === 1 ? entities[0] : entities;
  }
}

