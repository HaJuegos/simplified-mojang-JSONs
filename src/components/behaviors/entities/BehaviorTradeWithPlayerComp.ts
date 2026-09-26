import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorTradeWithPlayerData extends BPComponent {
    priority: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorTradeWithPlayer extends BehaviorEntityComponentBuilder<BehaviorTradeWithPlayerData> {
    /**
     * 
     * @param {BehaviorTradeWithPlayerData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTradeWithPlayerData) {
        super("minecraft:behavior.trade_with_player", params);
    }
}