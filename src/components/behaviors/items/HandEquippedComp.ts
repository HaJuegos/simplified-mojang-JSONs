import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type HandEquippedData = boolean | {
    value: boolean;
};

export class SetHandEquipped extends BehaviorItemsComponentsBuilder<HandEquippedData, "minecraft:hand_equipped"> {
    /**
     * 
     * @param {HandEquippedData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: HandEquippedData) {
        super("minecraft:hand_equipped", params);
    }
}