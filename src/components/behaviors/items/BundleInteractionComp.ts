import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BundleInteractionData extends BPComponent {
    numViewableSlots: number;
}

export class SetBundleInteraction extends BehaviorItemsComponentsBuilder<BundleInteractionData, "minecraft:bundle_interaction"> {
    /**
     * 
     * @param {BundleInteractionData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: BundleInteractionData) {
        super("minecraft:bundle_interaction", params);
    }
}