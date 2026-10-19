import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type MovementTypes = "immovable" | "popped" | "push" | "push_pull";

interface MovableData extends BPComponent {
    movementType: MovementTypes;
    sticky?: string;
}

export class SetMovable extends BehaviorBlockComponentBuilder<MovableData, "minecraft:movable"> {
    /**
     * 
     * @param {MovableData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MovableData) {
        super("minecraft:movable", params);
    }
}