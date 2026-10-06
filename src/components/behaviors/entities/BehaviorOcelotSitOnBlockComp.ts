import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorOcelotSitOnBlockData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorOcelotSitOnBlock extends BehaviorEntityComponentBuilder<BehaviorOcelotSitOnBlockData, "minecraft:behavior.ocelot_sit_on_block"> {
    /**
     * 
     * @param {BehaviorOcelotSitOnBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOcelotSitOnBlockData) {
        super("minecraft:behavior.ocelot_sit_on_block", params);
    }
}