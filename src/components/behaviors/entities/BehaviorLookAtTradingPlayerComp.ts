import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorLookAtTradingPlayerData extends BPComponent {
    priority: number;
    lookDistance?: number;
    probability?: number;
    lookTime?: {
        min: number;
        max: number;
    };
    angleOfViewVertical?: number;
    angleOfViewHorizontal?: number;
}

export class SetBehaviorLookAtTradingPlayer extends BehaviorEntityComponentBuilder<BehaviorLookAtTradingPlayerData> {
    /**
     * 
     * @param {BehaviorLookAtTradingPlayerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLookAtTradingPlayerData) {
        super("minecraft:behavior.look_at_trading_player", params);
    }
}