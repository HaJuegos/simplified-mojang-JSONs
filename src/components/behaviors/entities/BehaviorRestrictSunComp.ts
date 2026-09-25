import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRestrictSunData extends BPComponent {
    priority: number;
}

export class SetBehaviorRestrictSun extends BehaviorEntityComponentBuilder<BehaviorRestrictSunData> {
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