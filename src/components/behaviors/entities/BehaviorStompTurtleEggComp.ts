import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorStompTurtleEggData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    interval?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
}

export class SetBehaviorStompTurtleEgg extends BehaviorEntityComponentBuilder<BehaviorStompTurtleEggData, "minecraft:behavior.stomp_turtle_egg"> {
    /**
     * 
     * @param {BehaviorStompTurtleEggData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStompTurtleEggData) {
        super("minecraft:behavior.stomp_turtle_egg", params);
    }
}