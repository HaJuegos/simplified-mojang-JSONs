import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface EntityFallOnData extends BPComponent {
    minFallDistance: number;
}

export class SetEntityFallOn extends BehaviorBlockComponentBuilder<EntityFallOnData, "minecraft:entity_fall_on"> {
    /**
     * 
     * @param {EntityFallOnData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: EntityFallOnData) {
        super("minecraft:entity_fall_on", params);
    }
}