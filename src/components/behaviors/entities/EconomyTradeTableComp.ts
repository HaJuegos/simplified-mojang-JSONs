import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface EconomyTradeTableData extends BPComponent {
    convertTradesEconomy?: boolean;
    curedDiscount?: [number, number];
    displayName?: string;
    heroDemandDiscount?: number;
    maxCuredDiscount?: [number, number];
    maxNearbyCuredDiscount?: number;
    nearbyCuredDiscount?: number;
    newScreen?: boolean;
    persistTrades?: boolean;
    showTradeScreen?: boolean;
    table?: string;
    useLegacyPriceFormula?: boolean;
}

export class SetEconomyTradeTable extends BehaviorEntityComponentBuilder<EconomyTradeTableData> {
    /**
     * 
     * @param {EconomyTradeTableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: EconomyTradeTableData) {
        super("minecraft:economy_trade_table", params);
    }
}