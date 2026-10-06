import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorOpenDoorData extends BPComponent {
    priority: number;
    closeDoorAfter?: boolean;
}

export class SetBehaviorOpenDoor extends BehaviorEntityComponentBuilder<BehaviorOpenDoorData, "minecraft:behavior.open_door"> {
    /**
     * 
     * @param {BehaviorOpenDoorData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOpenDoorData) {
        super("minecraft:behavior.open_door", params);
    }
}