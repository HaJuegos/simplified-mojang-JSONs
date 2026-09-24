import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorMeleeBoxAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackOnce?: boolean;
    attackTypes?: string;
    canSpreadOnFire?: boolean;
    cooldownTime?: number;
    horizontalReach?: number;
    innerBoundaryTimeIncrease?: number;
    maxDist?: number;
    maxPathTime?: number;
    meleeFov?: number;
    minPathTime?: number;
    onAttack?: string | EntityFilter | EntityFilter[];
    onKill?: string | EntityFilter | EntityFilter[];
    outerBoundaryTimeIncrease?: number;
    pathFailTimeIncrease?: number;
    pathInnerBoundary?: number;
    pathOuterBoundary?: number;
    randomStopInterval?: number;
    reachMultiplier?: number;
    requireCompletePath?: boolean;
    setPersistent?: boolean;
    targetDist?: number;
    trackTarget?: boolean;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
}

export class SetBehaviorMeleeBoxAttack extends BehaviorEntityComponentBuilder<BehaviorMeleeBoxAttackData> {
    /**
     * 
     * @param {BehaviorMeleeBoxAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMeleeBoxAttackData) {
        super("minecraft:behavior.melee_box_attack", params);
    }
}