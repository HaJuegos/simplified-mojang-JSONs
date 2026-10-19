import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RedstoneConductivityData extends BPComponent {
    allowsWireToStepDown?: boolean;
    redstoneConductor?: boolean;
}

export class SetRedstoneConductivity extends BehaviorBlockComponentBuilder<RedstoneConductivityData, "minecraft:redstone_conductivity"> {
    /**
     * 
     * @param {RedstoneConductivityData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RedstoneConductivityData) {
        super("minecraft:redstone_conductivity", params);
    }
}