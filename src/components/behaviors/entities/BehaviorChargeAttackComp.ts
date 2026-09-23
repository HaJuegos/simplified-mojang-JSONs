import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorChargeAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    maxDistance?: number;
    minDistance?: number;
    successRate?: number;
}

export class SetBehaviorChargeAttack extends BehaviorEntityComponentBuilder<BehaviorChargeAttackData> {
    /**
     * 
     * @param {BehaviorChargeAttackData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorChargeAttackData) {
        super("minecraft:behavior.charge_attack", params);
    }
}