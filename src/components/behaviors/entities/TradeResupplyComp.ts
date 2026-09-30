import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface TradeResupplyData extends BPComponent {

}

export class SetTradeResupply extends BehaviorEntityComponentBuilder<TradeResupplyData> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:trade_resupply");
    }
}