import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface EntityPlacerData extends BPComponent {
    entity: string | MinecraftBlockTypes;
    dispenseOn?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    useOn?: (string | MinecraftBlockTypes | BlockDataTypes)[];
}

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

export class SetEntityPlacer extends BehaviorItemsComponentsBuilder<EntityPlacerData, "minecraft:entity_placer"> {
    /**
     * 
     * @param {EntityPlacerData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: EntityPlacerData) {
        super("minecraft:entity_placer", params);
    }
}