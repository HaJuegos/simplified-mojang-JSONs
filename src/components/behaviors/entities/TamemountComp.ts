import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface TamemountData extends BPComponent {
    attemptTemperMod?: number;
    autoRejectItems?: AutoRejectTypes[];
    feedText?: string;
    feedItems?: FeedItemsTypes[];
    maxTemper?: number;
    minTemper?: number;
    rideText?: string;
    tameEvent?: EntityFilterTrigger;
}

interface AutoRejectTypes {
    item: string | TargetItemsTypes;
}

interface FeedItemsTypes {
    item: string | TargetItemsTypes;
    temperMod: number;
}

export class SetTamemount extends BehaviorEntityComponentBuilder<TamemountData, "minecraft:tamemount"> {
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