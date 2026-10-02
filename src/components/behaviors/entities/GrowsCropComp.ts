import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface GrowsCropData extends BPComponent {
    chance?: number;
    charges?: number;
}

export class SetGrowsCrop extends BehaviorEntityComponentBuilder<GrowsCropData, "minecraft:grows_crop"> {
    /**
     * 
     * @param {GrowsCropData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GrowsCropData) {
        super("minecraft:grows_crop", params);
    }
}