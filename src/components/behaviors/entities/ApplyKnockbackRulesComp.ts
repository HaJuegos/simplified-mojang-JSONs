import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface ApplyKnockbackRulesData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface ApplyKnockbackRulesData extends BPComponent {
    /**
     * Mapa de presets para diversas condiciones de entidades.
     * @type {PresetKnockbackRules[]}
     */
    presets: PresetKnockbackRules[];
}

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface PresetKnockbackRules
 * @author HaJuegos - 22-09-2026
 */
interface PresetKnockbackRules {
    /**
     * (Opcional) Filtros condicionales a cumplir.
     * @type {EntityFilter}
     */
    filter?: EntityFilter;

    /**
     * Define cuanto se empuja hacia atras el target.
     * @type {number}
     */
    horizontalPower: number;

    /**
     * Define cuanto se empuja hacia arriba el target.
     * @type {number}
     */
    verticalPower: number;

    /**
     * Define la velocidad vertical maxima hacia arriba del target despues de que se haya evaluado las reglas de empuje.
     * @type {number}
     */
    verticalVelocityCap: number;

    /**
     * Define si el objectivo debe estar completamente sumergido en agua para que se apliquen las reglas de empuje.
     * @type {boolean}
     */
    checkIfTargetIsImmersedInWater: boolean;

    /**
     * (Opcional) Maneja el empuje adiccional proveniente de encantamientos, correr a toda velocidad y nadar.
     * @type {('multiply' | 'multiply_reduced' | 'reapply_default')}
     */
    extraKnockbackApproach?: 'multiply' | 'multiply_reduced' | 'reapply_default';

    /**
     * (Opcional) Ofrece un control mas intuitivo sobre como se aplica el empuje.
     * @type {('hit_direction' | 'relative_horizontal')}
     */
    knockbackMode?: 'hit_direction' | 'relative_horizontal';

    /**
     * (Opcional) Permite escalar la magnitud del retroceso en funcion de la inversa al cuadrado del daño.
     * @type {boolean}
     */
    scaleWithDamage?: boolean;

    /**
     * (Opcional) Escala la velocidad previa del target al recibir el impacto.
     * @type {number}
     */
    slowdownScale?: number;
}

export class SetApplyKnockbackRules extends BehaviorEntityComponentBuilder<ApplyKnockbackRulesData> {
    /**
     * Componente que determina como una entidad aplica empuje a un target.
     * @param {ApplyKnockbackRulesData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ApplyKnockbackRulesData) {
        super("minecraft:apply_knockback_rules", params);
    }
}