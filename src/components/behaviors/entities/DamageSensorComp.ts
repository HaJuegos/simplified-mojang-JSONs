import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityDamageType, EntityFilter } from "../../../types/EntityFilters";

interface DamageSensorData extends BPComponent {
    triggers: TriggerDamageTypes[];
}

interface TriggerDamageTypes {
    onDamage?: string | EntityFilter | EntityFilter[];
    cause: EntityDamageType;
    dealsDamage: 'no' | 'no_but_entity_effects_apply' | 'no_but_side_effects_apply' | 'yes' | boolean;
    damageModifier?: number;
    damageMultiplier?: number;
    onDamageSoundEvent?: string;
}

export class SetDamageSensor extends BehaviorEntityComponentBuilder<DamageSensorData> {
    /**
     * 
     * @param {DamageSensorData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DamageSensorData) {
        super("minecraft:damage_sensor", params);
    }
}