import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface WalkAnimationSpeedData extends BPComponent {
    value?: number;
}

export class SetWalkAnimationSpeed extends BehaviorEntityComponentBuilder<WalkAnimationSpeedData, "minecraft:walk_animation_speed"> {
    /**
     * 
     * @param {WalkAnimationSpeedData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: WalkAnimationSpeedData) {
        super("minecraft:walk_animation_speed", params);
    }
}