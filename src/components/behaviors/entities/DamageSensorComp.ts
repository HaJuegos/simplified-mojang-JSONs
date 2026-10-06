import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityDamageType, EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface DamageSensorData extends BPComponent {
    triggers: TriggerDamageTypes[];
}

interface TriggerDamageTypes {
    onDamage?: string | EntityFilterTrigger | EntityFilterTrigger[];
    cause?: EntityDamageType;
    dealsDamage?: 'no' | 'no_but_entity_effects_apply' | 'no_but_side_effects_apply' | 'yes' | boolean;
    damageModifier?: number;
    damageMultiplier?: number;
    onDamageSoundEvent?: string;
}

export class SetDamageSensor extends BehaviorEntityComponentBuilder<DamageSensorData, "minecraft:damage_sensor"> {
    /**
     * 
     * @param {DamageSensorData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: DamageSensorData) {
        super("minecraft:damage_sensor", params);
    }
}