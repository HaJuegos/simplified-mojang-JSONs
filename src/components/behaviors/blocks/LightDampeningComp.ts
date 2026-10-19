import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LightDampeningData extends BPComponent {

}

export class SetLightDampening extends BehaviorBlockComponentBuilder<LightDampeningData, "minecraft:light_dampening"> {
    /**
     * 
     * @param {number} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: number) {
        super("minecraft:light_dampening", params);
    }
}