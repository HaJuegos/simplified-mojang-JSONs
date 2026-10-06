import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

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