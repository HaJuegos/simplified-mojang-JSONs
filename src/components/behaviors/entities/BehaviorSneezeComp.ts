import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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

export class SetBehaviorSneeze extends BehaviorEntityComponentBuilder<BehaviorSneezeData, "minecraft:behavior.sneeze"> {
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