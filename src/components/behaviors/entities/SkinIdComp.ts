import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface SkinIdData extends BPComponent {
    value?: number;
}

export class SetSkinId extends BehaviorEntityComponentBuilder<SkinIdData, "minecraft:skin_id"> {
    /**
     * 
     * @param {SkinIdData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SkinIdData) {
        super("minecraft:skin_id", params);
    }
}