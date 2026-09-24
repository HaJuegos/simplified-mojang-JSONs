import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorOfferFlowerData extends BPComponent {
    priority: number;
    chanceToStart?: number;
    filters?: EntityFilter | EntityFilter[];
    maxHeadRotationY?: number;
    maxOfferFlowerDuration?: number;
    maxRotationX?: number;
    searchArea?: [number, number, number];
}

export class SetBehaviorOfferFlower extends BehaviorEntityComponentBuilder<BehaviorOfferFlowerData> {
    /**
     * 
     * @param {BehaviorOfferFlowerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOfferFlowerData) {
        super("minecraft:behavior.offer_flower", params);
    }
}