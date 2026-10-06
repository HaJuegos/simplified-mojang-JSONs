import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorTradeInterestData extends BPComponent {
    priority: number;
    carriedItemSwitchTime?: number;
    cooldown?: number;
    interestTime?: number;
    removeItemTime?: number;
    withinRadius?: number;
}

export class SetBehaviorTradeInterest extends BehaviorEntityComponentBuilder<BehaviorTradeInterestData, "minecraft:behavior.trade_interest"> {
    /**
     * 
     * @param {BehaviorTradeInterestData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: BehaviorTradeInterestData) {
        super("minecraft:behavior.trade_interest", params);
    }
}