import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters, EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorDropItemForData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    cooldown?: number;
    dropItemChance?: number;
    goalRadius?: number;
    lootTable?: string;
    maxHeadLookAtHeight?: number;
    minimumTeleportDistance?: number;
    offeringDistance?: number;
    onDropAttempt?: string | EntityFilterTrigger | EntityFilterTrigger[];
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
    secondsBeforePickup?: number;
    targetRange?: [number, number];
    teleportOffset?: [number, number];
    timeOfDayRange?: {
        min: number,
        max: number;
    };
}

export class SetBehaviorDropItemFor extends BehaviorEntityComponentBuilder<BehaviorDropItemForData> {
    /**
     * 
     * @param {BehaviorDropItemForData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDropItemForData) {
        super("minecraft:behavior.drop_item_for", params);
    }
}