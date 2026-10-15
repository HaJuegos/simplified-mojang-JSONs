import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IconTextures {
    default: string;
    dyed?: string;
    iconTrim?: string;
    bundleOpenBack?: string;
    bundleOpenFront?: string;
    [key: string]: string | undefined;
}

type IconData = string | {
    textures: IconTextures;
};

export class SetIcon extends BehaviorItemsComponentsBuilder<IconData, "minecraft:icon"> {
    /**
     * 
     * @param {IconData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: IconData) {
        super("minecraft:icon", params);
    }
}