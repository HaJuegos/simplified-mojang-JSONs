import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BlockEntityData extends BPComponent {
    dynamicProperties?: boolean;
}

export class SetBlockEntity extends BehaviorBlockComponentBuilder<BlockEntityData, "minecraft:block_entity"> {
    /**
     * 
     * @param {BlockEntityData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: BlockEntityData) {
        super("minecraft:block_entity", params);
    }
}