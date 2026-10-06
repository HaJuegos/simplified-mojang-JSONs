import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveIndoorsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    timeoutCooldown?: number;
}

export class SetBehaviorMoveIndoors extends BehaviorEntityComponentBuilder<BehaviorMoveIndoorsData, "minecraft:behavior.move_indoors"> {
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