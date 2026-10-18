import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PermuteTypeData extends BPComponent {
    weight: number;
    entityType: string;
    guaranteedCount: number;
}

export class SetPermuteType extends BehaviorSpawnRuleComponentBuilder<PermuteTypeData | PermuteTypeData[], "minecraft:permute_type"> {
    /**
     * 
     * @param {PermuteTypeData | PermuteTypeData[]} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: PermuteTypeData | PermuteTypeData[]) {
        super("minecraft:permute_type", params);
    }
}