import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";

interface TamemountData extends BPComponent {
    attemptTemperMod?: number;
    autoRejectItems?: AutoRejectTypes[];
    feedText?: string;
    feedItems?: FeedItemsTypes[];
    maxTemper?: number;
    minTemper?: number;
    rideText?: string;
    tameEvent?: EntityFilter;
}

interface AutoRejectTypes {
    item: string | TargetItemsTypes;
}

interface FeedItemsTypes {
    item: string | TargetItemsTypes;
    temperMod: number;
}

export class SetTamemount extends BehaviorEntityComponentBuilder<TamemountData> {
    /**
     * 
     * @param {TamemountData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TamemountData) {
        super("minecraft:tamemount", params);
    }
}