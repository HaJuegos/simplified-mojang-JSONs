import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorFollowCaravanData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    entityCount?: number;
}

export class SetBehaviorFollowCaravan extends BehaviorEntityComponentBuilder<BehaviorFollowCaravanData, "minecraft:behavior.follow_caravan"> {
    /**
     * 
     * @param {BehaviorFollowCaravanData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowCaravanData) {
        super("minecraft:behavior.follow_caravan", params);
    }
}