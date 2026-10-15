import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FireResistantData extends BPComponent {
    value: boolean;
}

export class SetFireResistant extends BehaviorItemsComponentsBuilder<FireResistantData, "minecraft:fire_resistant"> {
    /**
     * 
     * @param {FireResistantData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: FireResistantData) {
        super("minecraft:fire_resistant", params);
    }
}