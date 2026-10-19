import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LightEmissionData extends BPComponent {

}

export class SetLightEmission extends BehaviorBlockComponentBuilder<LightEmissionData, "minecraft:light_emission"> {
    /**
     * 
     * @param {number} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: number) {
        super("minecraft:light_emission", params);
    }
}