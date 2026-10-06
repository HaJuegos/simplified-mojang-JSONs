import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorMeleeAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackOnce?: boolean;
    attackTypes?: string;
    canSpreadOnFire?: boolean;
    cooldownTime?: number;
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

export class SetBehaviorMeleeAttack extends BehaviorEntityComponentBuilder<BehaviorMeleeAttackData, "minecraft:behavior.melee_attack"> {
    /**
     * 
     * @param {BehaviorMeleeAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMeleeAttackData) {
        super("minecraft:behavior.melee_attack", params);
    }
}