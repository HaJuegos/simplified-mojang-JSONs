import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DisplayNameData extends BPComponent {

}

export class SetDisplayName extends BehaviorBlockComponentBuilder<DisplayNameData, "minecraft:display_name"> {
    /**
     * 
     * @param {string} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: string) {
        super("minecraft:display_name", params);
    }
}