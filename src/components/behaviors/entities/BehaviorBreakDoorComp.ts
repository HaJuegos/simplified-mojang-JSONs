import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorBreakDoorData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorBreakDoor extends BehaviorEntityComponentBuilder<BehaviorBreakDoorData> {
    /**
     * 
     * @param {BehaviorBreakDoorData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorBreakDoorData) {
        super("minecraft:behavior.break_door", params);
    }
}