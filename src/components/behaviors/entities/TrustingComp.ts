import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface TrustingData extends BPComponent {
    probability?: number;
    trustEvent?: EntityFilter;
    trustItems?: (string | MinecraftEntityTypes)[];
}

export class SetTrusting extends BehaviorEntityComponentBuilder<TrustingData> {
    /**
     * 
     * @param {TrustingData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TrustingData) {
        super("minecraft:trusting", params);
    }
}