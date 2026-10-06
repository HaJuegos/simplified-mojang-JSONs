import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRestrictSunData extends BPComponent {
    priority: number;
}

export class SetBehaviorRestrictSun extends BehaviorEntityComponentBuilder<BehaviorRestrictSunData, "minecraft:behavior.restrict_sun"> {
    /**
     * 
     * @param {BehaviorRestrictSunData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRestrictSunData) {
        super("minecraft:behavior.restrict_sun", params);
    }
}