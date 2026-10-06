import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FallDamageData extends BPComponent {
    value?: number;
}

export class SetFallDamage extends BehaviorEntityComponentBuilder<FallDamageData, "minecraft:fall_damage"> {
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