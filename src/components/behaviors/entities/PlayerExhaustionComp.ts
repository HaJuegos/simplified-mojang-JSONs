import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PlayerExhaustionData extends BPComponent {
    value?: number;
    max?: number;
}

export class SetPlayerExhaustion extends BehaviorEntityComponentBuilder<PlayerExhaustionData> {
    /**
     * 
     * @param {PlayerExhaustionData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PlayerExhaustionData) {
        super("minecraft:player.exhaustion", params);
    }
}