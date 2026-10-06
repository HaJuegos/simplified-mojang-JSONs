import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorShareItemsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    goalRadius?: number;
    maxDist?: number;
}

export class SetBehaviorShareItems extends BehaviorEntityComponentBuilder<BehaviorShareItemsData, "minecraft:behavior.share_items"> {
    /**
     * 
     * @param {BehaviorShareItemsData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorShareItemsData) {
        super("minecraft:behavior.share_items", params);
    }
}