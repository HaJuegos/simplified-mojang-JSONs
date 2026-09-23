import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes } from "../../../types/EntityFilters";

type AttackDamageOption = number | [number, number];

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AttackData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AttackData extends BPComponent {
    /**
     * Rango de daño aleatorio que inflige el ataque cuerpo a cuerpo. Un valor negativo sanara a la entidad. Minimo y maximo.
     * @type {AttackDamageOption}
     */
    damage: AttackDamageOption;

    /**
     * (Opcional) Nivel de amplificacion de la pocion que se aplicara al target.
     * @type {?number}
     */
    effectAmplifier?: number;

    /**
     * (Opcional) Duracion en segundos de la duracion de la pocion que se aplicara al target.
     * @type {?(number | 'infinite')}
     */
    effectDuration?: number | 'infinite';

    /**
     * (Opcional) Identificador de la pocion a añadir al target.
     * @type {?EntityEffectTypes}
     */
    effectName?: EntityEffectTypes;
}

export class SetAttack extends BehaviorEntityComponentBuilder<AttackData> {
    /**
     * Componente que define el ataque cuerpo a cuerpo de una entidad y cualquier efecto adiccional que se le aplique.
     * @param {AttackData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AttackData) {
        super("minecraft:attack", params);
    }
}