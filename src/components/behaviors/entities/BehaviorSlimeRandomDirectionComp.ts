import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSlimeRandomDirectionData extends BPComponent {
    priority: number;
    addRandomTimeRange?: number;
    minChangeDirectionTime?: number;
    turnRange?: number;
}

export class SetBehaviorSlimeRandomDirection extends BehaviorEntityComponentBuilder<BehaviorSlimeRandomDirectionData> {
    /**
     * 
     * @param {BehaviorSlimeRandomDirectionData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSlimeRandomDirectionData) {
        super("minecraft:behavior.slime_random_direction", params);
    }
}