import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorJumpAroundTargetData extends BPComponent {
    priority: number;
    checkCollision?: boolean;
    entityBoundingBoxScale?: number;
    jumpAngles?: number[];
    jumpCooldownDuration?: number;
    jumpCooldownWhenHurtDuration?: number;
    landingDistanceFromTarget?: {
        min: number,
        max: number;
    };
    landingPositionSpreadDegrees?: number;
    lastHurtDuration?: number;
    lineOfSightObstructionHeightIgnore?: number;
    maxJumpVelocity?: number;
    prepareJumpDuration?: number;
    requiredVerticalSpace?: number;
    snapToSurfaceBlockRange?: number;
    validDistanceToTarget?: {
        min: number,
        max: number;
    };
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorJumpAroundTarget extends BehaviorEntityComponentBuilder<BehaviorJumpAroundTargetData> {
    /**
     * 
     * @param {BehaviorJumpAroundTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorJumpAroundTargetData) {
        super("minecraft:behavior.jump_around_target", params);
    }
}