import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorDelayedAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackDuration?: number;
    attackOnce?: boolean;
    attackTypes?: string;
    canSpreadOnFire?: boolean;
    hitDelayPct?: number;
    innerBoundaryTimeIncrease?: number;
    maxDist?: number;
    maxPathTime?: number;
    meleeFov?: number;
    minPathTime?: number;
    onAttack?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onKill?: string | EntityFilterTrigger | EntityFilterTrigger[];
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
    soundEvent?: string;
}

export class SetBehaviorDelayedAttack extends BehaviorEntityComponentBuilder<BehaviorDelayedAttackData> {
    /**
     * 
     * @param {BehaviorDelayedAttackData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDelayedAttackData) {
        super("minecraft:behavior.delayed_attack", params);
    }
}