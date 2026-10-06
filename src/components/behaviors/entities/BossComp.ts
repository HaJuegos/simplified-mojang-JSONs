import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BossData extends BPComponent {
    hudRange?: number;
    name?: string;
    shouldDarkenSky?: boolean;
}

export class SetBoss extends BehaviorEntityComponentBuilder<BossData, "minecraft:boss"> {
    /**
     * 
     * @param {BossData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BossData) {
        super("minecraft:boss", params);
    }
}