import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorDefendVillageTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters[];
    attackOwner?: boolean;
    attackChance?: number;
    mustReach?: boolean;
    mustSee?: boolean;
    mustSeeForgetDuration?: number;
    persistTime?: number;
    withinRadius?: number;
}

export class SetBehaviorDefendVillageTarget extends BehaviorEntityComponentBuilder<BehaviorDefendVillageTargetData> {
    /**
     * 
     * @param {BehaviorDefendVillageTargetData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDefendVillageTargetData) {
        super("minecraft:behavior.defend_village_target", params);
    }
}