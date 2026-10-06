import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSquidIdleData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidIdle extends BehaviorEntityComponentBuilder<BehaviorSquidIdleData, "minecraft:behavior.squid_idle"> {
    /**
     * 
     * @param {BehaviorSquidIdleData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSquidIdleData) {
        super("minecraft:behavior.squid_idle", params);
    }
}