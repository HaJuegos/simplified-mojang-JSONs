import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSwimIdleData extends BPComponent {
    priority: number;
    idleTime?: number;
    successRate?: number;
}

export class SetBehaviorSwimIdle extends BehaviorEntityComponentBuilder<BehaviorSwimIdleData, "minecraft:behavior.swim_idle"> {
    /**
     * 
     * @param {BehaviorSwimIdleData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwimIdleData) {
        super("minecraft:behavior.swim_idle", params);
    }
}