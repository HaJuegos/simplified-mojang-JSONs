import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FrictionModifierData extends BPComponent {
    value?: number;
}

export class SetFrictionModifier extends BehaviorEntityComponentBuilder<FrictionModifierData, "minecraft:friction_modifier"> {
    /**
     * 
     * @param {FrictionModifierData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FrictionModifierData) {
        super("minecraft:friction_modifier", params);
    }
}