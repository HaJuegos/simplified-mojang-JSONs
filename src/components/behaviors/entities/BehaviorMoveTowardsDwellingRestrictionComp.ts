import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveTowardsDwellingRestrictionData extends BPComponent {
    priority: number;

    speedMultiplier?: number;
}

export class SetBehaviorMoveTowardsDwellingRestriction extends BehaviorEntityComponentBuilder<BehaviorMoveTowardsDwellingRestrictionData> {
    /**
     * 
     * @param {BehaviorMoveTowardsDwellingRestrictionData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveTowardsDwellingRestrictionData) {
        super("minecraft:behavior.move_towards_dwelling_restriction", params);
    }
}