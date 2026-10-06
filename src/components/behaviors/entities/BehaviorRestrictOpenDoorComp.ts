import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRestrictOpenDoorData extends BPComponent {
    priority: number;
}

export class SetBehaviorRestrictOpenDoor extends BehaviorEntityComponentBuilder<BehaviorRestrictOpenDoorData, "minecraft:behavior.restrict_open_door"> {
    /**
     * 
     * @param {BehaviorRestrictOpenDoorData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRestrictOpenDoorData) {
        super("minecraft:behavior.restrict_open_door", params);
    }
}