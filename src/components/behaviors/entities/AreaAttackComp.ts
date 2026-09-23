import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityDamageType, EntityFilter } from "../../../types/EntityFilters";

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AreaAttackData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AreaAttackData extends BPComponent {
    /**
     * (Opcional) Filtros condicionales para validar el daño a las entidades.
     * @type {EntityFilter}
     */
    filters?: EntityFilter;

    /**
     * Cuanto daño por tick se aplica a las entidades que entran en el rango de daño.
     * @type {number}
     */
    damagePerTick: number;

    /**
     * A que distancia debe estar una entidad para que se le aplique el daño. Osea el rango el bloques.
     * @type {number}
     */
    damageRange: number;

    /**
     * Los tipos de daño que puede recibir la entidad.
     * @type {EntityDamageType}
     */
    cause: EntityDamageType;

    /**
     * (Opcional) Cooldown en segundos que indica con que frecuencia la entidad puede atacar a un target.
     * @type {number}
     */
    damageCooldown?: number;

    /**
     * (Opcional) RawMessage que se utilizada como mensaje de muerte cuando el ataque mate a una entidad. Si esta vacia, se utilizara el mensaje predeterminado.
     * @type {string}
     */
    deathMessageOverride?: string;

    /**
     * (Opcional) Indica si la entidad debe reproducir un sonido de ataque custom al atacar.
     * @type {boolean}
     */
    playAttackSound?: boolean;

    /**
     * (Opcional) Si la entidad debe usarse a si misma como fuente de daño fuente al target.
     * @type {boolean}
     */
    useSelfAsDamageSource?: boolean;
}

export class SetAreaAttack extends BehaviorEntityComponentBuilder<AreaAttackData> {
    /**
     * Componente que inflije daño a las entidades que se acercan a su radio de accion.
     * @param {AreaAttackData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AreaAttackData) {
        super("minecraft:area_attack", params);
    }
}