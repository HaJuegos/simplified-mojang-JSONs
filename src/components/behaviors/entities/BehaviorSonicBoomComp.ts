import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSonicBoomData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackCooldown?: number;
    attackDamage?: number;
    attackRangeHorizontal?: number;
    attackRangeVertical?: number;
    attackSound?: string;
    chargeSound?: string;
    duration?: number;
    durationUntilAttackSound?: number;
    knockbackHeightCap?: number;
    knockbackHorizontalStrength?: number;
    knockbackVerticalStrength?: number;
}

export class SetBehaviorSonicBoom extends BehaviorEntityComponentBuilder<BehaviorSonicBoomData> {
    /**
     * 
     * @param {BehaviorSonicBoomData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSonicBoomData) {
        super("minecraft:behavior.sonic_boom", params);
    }
}