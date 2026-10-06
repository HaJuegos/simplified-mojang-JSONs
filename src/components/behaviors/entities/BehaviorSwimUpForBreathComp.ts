import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSwimUpForBreathData extends BPComponent {
    priority: number;
    materialType?: "water" | "lava" | "any";
    searchHeight?: number;
    searchRadius?: number;
    speedMod?: number;
}

export class SetBehaviorSwimUpForBreath extends BehaviorEntityComponentBuilder<BehaviorSwimUpForBreathData, "minecraft:behavior.swim_up_for_breath"> {
    /**
     * 
     * @param {BehaviorSwimUpForBreathData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwimUpForBreathData) {
        super("minecraft:behavior.swim_up_for_breath", params);
    }
}