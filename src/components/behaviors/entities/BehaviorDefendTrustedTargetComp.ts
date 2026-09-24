import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorDefendTrustedTargetData extends BPComponent {
    priority: number;
    aggroSound?: string;
    attackInterval?: number;
    mustSee?: boolean;
    mustSeeForgetDuration?: number;
    onDefendStart?: "string" | EntityFiltersTarget;
    withinRadius?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    soundChance?: number;
}

export class SetBehaviorDefendTrustedTarget extends BehaviorEntityComponentBuilder<BehaviorDefendTrustedTargetData> {
    /**
     * 
     * @param {BehaviorDefendTrustedTargetData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDefendTrustedTargetData) {
        super("minecraft:behavior.defend_trusted_target", params);
    }
}