import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorRamAttackData extends BPComponent {
    priority: number;
    babyKnockbackModifier?: number;
    cooldownRange?: {
        min: number;
        max: number;
    };
    knockbackForce?: number;
    knockbackHeight?: number;
    minRamDistance?: number;
    onStart?: string | EntityFilter | EntityFilter[];
    preRamSound?: string;
    ramDistance?: number;
    ramImpactSound?: string;
    ramSpeed?: number;
    runSpeed?: number;
    trigger?: string | EntityFilter | EntityFilter[];
}

export class SetBehaviorRamAttack extends BehaviorEntityComponentBuilder<BehaviorRamAttackData> {
    /**
     * 
     * @param {BehaviorRamAttackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRamAttackData) {
        super("minecraft:behavior.ram_attack", params);
    }
}