import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorAquaticChargeAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    attackReach?: number;
    chargeCooldownTime?: {
        min: number;
        max: number;
    };
    chargeOvershootDistance?: number;
    chargeSpeed?: number;
    knockbackForce?: number;
    maxChargeDistance?: number;
}

export class SetBehaviorAquaticChargeAttack extends BehaviorEntityComponentBuilder<BehaviorAquaticChargeAttackData> {
    public constructor (params: BehaviorAquaticChargeAttackData) {
        super("minecraft:behavior.aquatic_charge_attack", params);
    }
}