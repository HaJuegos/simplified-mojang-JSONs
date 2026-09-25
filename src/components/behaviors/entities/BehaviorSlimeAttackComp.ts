import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSlimeAttackData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    growTiredCooldownTime?: number;
    setPersistent?: boolean;
    xMaxRotation?: number;
    yMaxRotation?: number;
}

export class SetBehaviorSlimeAttack extends BehaviorEntityComponentBuilder<BehaviorSlimeAttackData> {
    /**
     * 
     * @param {BehaviorSlimeAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSlimeAttackData) {
        super("minecraft:behavior.slime_attack", params);
    }
}