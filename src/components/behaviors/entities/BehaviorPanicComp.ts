import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityDamageType } from "../../../types/EntityFilters";

interface BehaviorPanicData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    damageSources?: EntityDamageType[];
    force?: boolean;
    ignoreMobDamage?: boolean;
    preferWater?: boolean;
    panicSound?: string;
    soundInterval?: {
        rangeMax: number;
        rangeMin: number;
    };
}

export class SetBehaviorPanic extends BehaviorEntityComponentBuilder<BehaviorPanicData> {
    /**
     * 
     * @param {BehaviorPanicData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPanicData) {
        super("minecraft:behavior.panic", params);
    }
}