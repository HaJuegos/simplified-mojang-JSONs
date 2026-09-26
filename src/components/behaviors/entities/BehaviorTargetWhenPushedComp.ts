import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorTargetWhenPushedData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    percentChance?: number;
}

export class SetBehaviorTargetWhenPushed extends BehaviorEntityComponentBuilder<BehaviorTargetWhenPushedData> {
    /**
     * 
     * @param {BehaviorTargetWhenPushedData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTargetWhenPushedData) {
        super("minecraft:behavior.target_when_pushed", params);
    }
}