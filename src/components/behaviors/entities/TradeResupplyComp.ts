import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface TradeResupplyData extends BPComponent {

}

export class SetTradeResupply extends BehaviorEntityComponentBuilder<TradeResupplyData, "minecraft:trade_resupply"> {
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