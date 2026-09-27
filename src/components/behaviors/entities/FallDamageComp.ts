import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FallDamageData extends BPComponent {
    value?: number;
}

export class SetFallDamage extends BehaviorEntityComponentBuilder<FallDamageData> {
    /**
     * 
     * @param {FallDamageData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FallDamageData) {
        super("minecraft:fall_damage", params);
    }
}