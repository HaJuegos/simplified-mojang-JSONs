import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ChestObstructionData extends BPComponent {
    obstructionRule?: "always" | "never" | "shape";
}

export class SetChestObstruction extends BehaviorBlockComponentBuilder<ChestObstructionData, "minecraft:chest_obstruction"> {
    /**
     * 
     * @param {ChestObstructionData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: ChestObstructionData) {
        super("minecraft:chest_obstruction", params);
    }
}