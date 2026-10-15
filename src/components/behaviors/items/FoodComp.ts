import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FoodData extends BPComponent {
    canAlwaysEat: boolean;
    nutrition: number;
    saturationModifier: number;
    usingConvertsTo?: string | MinecraftItemTypes;
}

export class SetFood extends BehaviorItemsComponentsBuilder<FoodData, "minecraft:food"> {
    /**
     * 
     * @param {FoodData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: FoodData) {
        super("minecraft:food", params);
    }
}