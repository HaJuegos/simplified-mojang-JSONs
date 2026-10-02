import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface NpcData extends BPComponent {
    npcData: NpcTypes;
}

interface NpcTypes {
    pickerOffsets?: OffSetTypes;
    portraitOffsets?: OffSetTypes;
    skinList: SkinListTypes[];
}

interface OffSetTypes {
    scale: [number, number];
    translate: [number, number];
}

interface SkinListTypes {
    markVariant?: number;
    variant?: number;
}

export class SetNpc extends BehaviorEntityComponentBuilder<NpcData, "minecraft:npc"> {
    /**
     * 
     * @param {NpcData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NpcData) {
        super("minecraft:npc", params);
    }
}