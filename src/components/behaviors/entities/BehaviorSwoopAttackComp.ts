import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSwoopAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    damageReach?: number;
    delayRange?: {
        min: number;
        max: number;
    };
}

export class SetBehaviorSwoopAttack extends BehaviorEntityComponentBuilder<BehaviorSwoopAttackData> {
    /**
     * 
     * @param {BehaviorSwoopAttackData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwoopAttackData) {
        super("minecraft:behavior.swoop_attack", params);
    }
}