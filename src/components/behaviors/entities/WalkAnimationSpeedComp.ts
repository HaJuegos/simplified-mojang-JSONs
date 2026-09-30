import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface WalkAnimationSpeedData extends BPComponent {
    value?: number;
}

export class SetWalkAnimationSpeed extends BehaviorEntityComponentBuilder<WalkAnimationSpeedData> {
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