import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorMoveAroundTargetData extends BPComponent {
    priority: number;
    destinationPosSearchSpreadDegrees?: number;
    destinationPositionRange?: {
        min: number;
        max: number;
    };
    destinationPosSpreadDegrees?: number;
    heightDifferenceLimit?: number;
    horizontalSearchDistance?: number;
    movementSpeed?: number;
    verticalSearchDistance?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorMoveAroundTarget extends BehaviorEntityComponentBuilder<BehaviorMoveAroundTargetData> {
    /**
     * 
     * @param {BehaviorMoveAroundTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveAroundTargetData) {
        super("minecraft:behavior.move_around_target", params);
    }
}