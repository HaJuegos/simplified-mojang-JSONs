import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

type AttackCooldownTimeTypes = number | [number, number];

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AttackCooldownData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AttackCooldownData extends BPComponent {
    /**
     * Evento que se ejecutara cuando finalice el cooldown.
     * @type {string}
     */
    attackCooldownCompleteEvent: string;

    /**
     * Tiempo en segundos del cooldown. Se puede especificar un minimo y un maximo.
     * @type {AttackCooldownTimeTypes}
     */
    attackCooldownTime: AttackCooldownTimeTypes;
}

export class SetAttackCooldown extends BehaviorEntityComponentBuilder<AttackCooldownData> {
    /**
     * Componente que agrega cooldown a una entidad con la intension de prevenir que la entidad trackee a nuevos targets.
     * @param {AttackCooldownData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AttackCooldownData) {
        super("minecraft:attack_cooldown", params);
    }
}