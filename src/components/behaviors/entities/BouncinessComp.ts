import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BouncinessData extends BPComponent {
    value: number;
}

export class SetBounciness extends BehaviorEntityComponentBuilder<BouncinessData, "minecraft:bounciness"> {
    /**
     * 
     * @param {BouncinessData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BouncinessData) {
        super("minecraft:bounciness", params);
    }
}