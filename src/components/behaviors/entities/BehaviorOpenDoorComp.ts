import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorOpenDoorData extends BPComponent {
    priority: unknown;
    closeDoorAfter?: boolean;
}

export class SetBehaviorOpenDoor extends BehaviorEntityComponentBuilder<BehaviorOpenDoorData> {
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