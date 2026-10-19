import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DestructibleByMiningData extends BPComponent {

}

export class SetDestructibleByMining extends BehaviorBlockComponentBuilder<DestructibleByMiningData, "minecraft:destructible_by_mining"> {
    /**
     * 
     * @param {boolean} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: boolean) {
        super("minecraft:destructible_by_mining", params);
    }
}