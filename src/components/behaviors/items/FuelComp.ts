import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FuelData extends BPComponent {
    duration: number;
}

export class SetFuel extends BehaviorItemsComponentsBuilder<FuelData, "minecraft:fuel"> {
    /**
     * 
     * @param {FuelData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: FuelData) {
        super("minecraft:fuel", params);
    }
}