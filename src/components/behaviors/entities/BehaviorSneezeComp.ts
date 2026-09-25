import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorSneezeData extends BPComponent {
    priority: number;
    cooldownTime?: number;
    dropItemChance?: number;
    entityTypes?: EntityAttackableTargetFilters[];
    lootTable?: string;
    prepareSound?: string;
    prepareTime?: number;
    probability?: number;
    sound?: string;
    withinRadius?: number;
}

export class SetBehaviorSneeze extends BehaviorEntityComponentBuilder<BehaviorSneezeData> {
    /**
     * 
     * @param {BehaviorSneezeData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSneezeData) {
        super("minecraft:behavior.sneeze", params);
    }
}