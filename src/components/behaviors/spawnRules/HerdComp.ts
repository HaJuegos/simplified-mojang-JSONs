import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HerdData extends BPComponent {
    minSize?: number;
    maxSize?: number;
    event?: string;
    eventSkipCount?: number;
    initialEvent?: string;
    initialEventCount?: number;
}

export class SetHerd extends BehaviorSpawnRuleComponentBuilder<HerdData | HerdData[], "minecraft:herd"> {
    /**
     * 
     * @param {HerdData | HerdData[]} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: HerdData | HerdData[]) {
        super("minecraft:herd", params);
    }
}