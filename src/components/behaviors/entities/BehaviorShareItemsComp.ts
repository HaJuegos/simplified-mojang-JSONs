import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorShareItemsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    goalRadius?: number;
    maxDist?: number;
}

export class SetBehaviorShareItems extends BehaviorEntityComponentBuilder<BehaviorShareItemsData> {
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