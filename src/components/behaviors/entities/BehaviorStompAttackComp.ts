import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorStompAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackOnce?: boolean;
    attackTypes?: string | MinecraftEntityTypes;
    canSpreadOnFire?: boolean;
    cooldownTime?: number;
    innerBoundaryTimeIncrease?: number;
    maxPathTime?: number;
    meleeFov?: number;
    minPathTime?: number;
    noDamageRangeMultiplier?: number;
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
    stompRangeMultiplier?: number;
    targetDist?: number;
    trackTarget?: boolean;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
}

export class SetBehaviorStompAttack extends BehaviorEntityComponentBuilder<BehaviorStompAttackData, "minecraft:behavior.stomp_attack"> {
    /**
     * 
     * @param {BehaviorStompAttackData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStompAttackData) {
        super("minecraft:behavior.stomp_attack", params);
    }
}