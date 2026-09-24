import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityDamageType, EntityFilter } from "../../../types/EntityFilters";

interface BehaviorPlayDeadData extends BPComponent {
    priority: number;
    applyRegeneration?: boolean;
    duration?: number;
    filters?: EntityFilter | EntityFilter[];
    forceBelowHealth?: number;
    randomStartChance?: number;
    randomDamageRange?: {
        min: number;
        max: number;
    };
    damageSources?: EntityDamageType[];
}

export class SetBehaviorPlayDead extends BehaviorEntityComponentBuilder<BehaviorPlayDeadData> {
    /**
     * 
     * @param {BehaviorPlayDeadData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPlayDeadData) {
        super("minecraft:behavior.play_dead", params);
    }
}