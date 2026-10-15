import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type RaritysTypes = "common" | "uncommon" | "rare" | "epic";

type RarityData = RaritysTypes | {
    value: RaritysTypes;
};

export class SetRarity extends BehaviorItemsComponentsBuilder<RarityData, "minecraft:rarity"> {
    /**
     * 
     * @param {RarityData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RarityData) {
        super("minecraft:rarity", params);
    }
}