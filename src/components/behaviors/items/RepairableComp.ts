import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface RepairableData extends BPComponent {
    repairItems: ItemRepairData[];
}

interface ItemRepairData {
    repairAmount: string | MoLangValue;
    items: (string | MinecraftItemTypes | ItemsListData)[];
}

interface ItemsListData {
    tags: string | MoLangValue;
}

export class SetRepairable extends BehaviorItemsComponentsBuilder<RepairableData, "minecraft:repairable"> {
    /**
     * 
     * @param {RepairableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RepairableData) {
        super("minecraft:repairable", params);
    }
}