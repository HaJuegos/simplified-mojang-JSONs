import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorStayNearNoteblockData extends BPComponent {
    priority: number;
    listenTime?: number;
    speed?: number;
    startDistance?: number;
    stopDistance?: number;
}

export class SetBehaviorStayNearNoteblock extends BehaviorEntityComponentBuilder<BehaviorStayNearNoteblockData, "minecraft:behavior.stay_near_noteblock"> {
    /**
     * 
     * @param {BehaviorStayNearNoteblockData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStayNearNoteblockData) {
        super("minecraft:behavior.stay_near_noteblock", params);
    }
}