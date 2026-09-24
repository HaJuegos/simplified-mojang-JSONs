import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorOcelotSitOnBlockData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorOcelotSitOnBlock extends BehaviorEntityComponentBuilder<BehaviorOcelotSitOnBlockData> {
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