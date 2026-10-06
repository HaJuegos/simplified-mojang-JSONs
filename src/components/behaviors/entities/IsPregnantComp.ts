import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsPregnantData extends BPComponent {

}

export class SetIsPregnant extends BehaviorEntityComponentBuilder<IsPregnantData, "minecraft:is_pregnant"> {
    /**
     * 
     * @param {IsPregnantData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_pregnant");
    }
}