import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DyeableData extends BPComponent {
    defaultColor: string;
}

export class SetDyeable extends BehaviorItemsComponentsBuilder<DyeableData, "minecraft:dyeable"> {
    /**
     * 
     * @param {DyeableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: DyeableData) {
        super("minecraft:dyeable", params);
    }
}