import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorFollowCaravanData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    entityCount?: number;
}

export class SetBehaviorFollowCaravan extends BehaviorEntityComponentBuilder<BehaviorFollowCaravanData> {
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