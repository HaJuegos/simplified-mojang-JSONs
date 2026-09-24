import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorGuardianAttackData extends BPComponent {
    priority: number;
    elderExtraMagicDamage?: number;
    hardModeExtraMagicDamage?: number;
    magicDamage?: number;
    minDistance?: number;
    soundDelayTime?: number;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
}

export class SetBehaviorGuardianAttack extends BehaviorEntityComponentBuilder<BehaviorGuardianAttackData> {
    /**
     * 
     * @param {BehaviorGuardianAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorGuardianAttackData) {
        super("minecraft:behavior.guardian_attack", params);
    }
}