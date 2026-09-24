import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRestrictOpenDoorData extends BPComponent {
    priority: unknown;
}

export class SetBehaviorRestrictOpenDoor extends BehaviorEntityComponentBuilder<BehaviorRestrictOpenDoorData> {
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