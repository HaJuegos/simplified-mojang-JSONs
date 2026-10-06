import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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

export class SetBehaviorOfferFlower extends BehaviorEntityComponentBuilder<BehaviorOfferFlowerData, "minecraft:behavior.offer_flower"> {
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