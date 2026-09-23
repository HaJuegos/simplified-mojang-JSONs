import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Parametros del metodo principal.
 * @interface AbsorptionComponentData
 * @extends {BPComponent}
 * @author HaJuegos - 21-09-2026
 */
interface AbsorptionComponentData extends BPComponent {
    /**
     * Vida fija a asignar a la entidad. Por defecto sera el valor 1.
     * @type {number}
     */
    value: number;

    /**
     * Vida maxima a asignar a la entidad. Por defecto sera el valor 1.
     * @type {number}
     */
    max: number;

    /**
     * (Opcional) Vida minima a asignar a la entidad.
     * @type {?number}
     */
    min?: number;
}

/**
 * Componente que asigna y establece absorcion a una entidad en concreto.
 * @class SetAbsorption
 * @extends {BehaviorEntityComponentBuilder<AbsorptionComponentData>}
 * @author HaJuegos - 22-09-2026
 * @export
 */
export class SetAbsorption extends BehaviorEntityComponentBuilder<AbsorptionComponentData> {
    /**
     * Componente que asigna y establece absorcion a una entidad en concreto.
     * @param {AbsorptionComponentData} params Parametros del componente.
     * @author HaJuegos - 20-09-2026 
     * @constructor
     * @public
     */
    public constructor (params: AbsorptionComponentData) {
        super("minecraft:absorption", {
            value: params.value ?? 1,
            max: params.max ?? 1,
            min: params.min
        });
    }
}