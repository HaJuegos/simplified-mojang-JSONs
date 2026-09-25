import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveIndoorsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    timeoutCooldown?: number;
}

export class SetBehaviorMoveIndoors extends BehaviorEntityComponentBuilder<BehaviorMoveIndoorsData> {
    /**
     * 
     * @param {BehaviorMoveIndoorsData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveIndoorsData) {
        super("minecraft:behavior.move_indoors", params);
    }
}