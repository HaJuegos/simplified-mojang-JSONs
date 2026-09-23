import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDoorInteractData extends BPComponent {
    priority: number;
}

export class SetBehaviorDoorInteract extends BehaviorEntityComponentBuilder<BehaviorDoorInteractData> {
    /**
     * 
     * @param {BehaviorDoorInteractData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDoorInteractData) {
        super("minecraft:behavior.door_interact", params);
    }
}