import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ReplaceableData extends BPComponent {

}

export class SetReplaceable extends BehaviorBlockComponentBuilder<ReplaceableData, "minecraft:replaceable"> {
    /**
     * 
     * @param {ReplaceableData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:replaceable");
    }
}