import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface DiggerData extends BPComponent {
    useEfficiency?: boolean;
    destroySpeeds: DestroySpeedsListTypes[];
}

interface DestroySpeedsListTypes {
    block: string | MinecraftBlockTypes | {
        tags: string | MoLangValue;
    };
    speed: number;
}

export class SetDigger extends BehaviorItemsComponentsBuilder<DiggerData, "minecraft:digger"> {
    /**
     * 
     * @param {DiggerData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DiggerData) {
        super("minecraft:digger", params);
    }
}