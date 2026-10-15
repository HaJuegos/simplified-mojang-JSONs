import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type LiquidClippedData = boolean | {
    value: boolean;
};

export class SetLiquidClipped extends BehaviorItemsComponentsBuilder<LiquidClippedData, "minecraft:liquid_clipped"> {
    /**
     * 
     * @param {LiquidClippedData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: LiquidClippedData) {
        super("minecraft:liquid_clipped", params);
    }
}