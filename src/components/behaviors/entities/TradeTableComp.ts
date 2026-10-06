import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface TradeTableData extends BPComponent {
    convertTradesEconomy?: boolean;
    displayName?: string;
    newScreen?: boolean;
    persistTrades?: boolean;
    table?: string;
}

export class SetTradeTable extends BehaviorEntityComponentBuilder<TradeTableData, "minecraft:trade_table"> {
    /**
     * 
     * @param {TradeTableData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TradeTableData) {
        super("minecraft:trade_table", params);
    }
}