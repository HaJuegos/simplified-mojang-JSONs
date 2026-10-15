import { BPComponent, BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase plantilla builder para la creacion de un componente de items en un behavior.
 * @class BehaviorItemsComponentsBuilder
 * @template {BPComponent} Component Componente en cuestion a considerar.
 * @template {string} ID ID del componente en cuestion.
 * @author HaJuegos - 13-10-2026
 * @abstract
 * @export
 */
export abstract class BehaviorItemsComponentsBuilder<
    Component extends BPComponent,
    ID extends string = string
> {
    /**
     * ID del componente a construir. 
     * @type {ID}
     * @protected
     * @readonly
     */
    protected readonly idComponent: ID;

    /**
     * Datos del componente en concreto a construir.
     * @type {?Component}
     * @protected
     */
    protected data?: Component;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @param {ID} idComp ID del componente en concreto a crear.
     * @param {?Component} [data] (Opcional) Datos del componente en concreto a crear.
     * @author HaJuegos - 13-10-2026 
     * @constructor
     * @public
     */
    public constructor (idComp: ID, data?: Component) {
        this.idComponent = idComp;
        this.data = data;
    }

    /**
     * Metodo principal de tipo GET que obtiene el ID del componente en cuestion.
     * @type {ID}
     * @author HaJuegos - 14-10-2026
     * @readonly
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo principal que obtiene todos los datos y parametros del componente en concreto.
     * @returns {(Component | undefined)}
     * @author HaJuegos - 14-10-2026 
     * @protected
     */
    protected getCompData(): Component | undefined {
        return this.data;
    }

    /**
     * Metodo principal que construye el componente a JSON.
     * @returns {BuiltComponent} El componente en concreto buildeado.
     * @author HaJuegos - 14-10-2026 
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComponent]: (SnakeCase.deepSnakeCase(this.getCompData()) ?? {}) as Record<string, unknown>
        };
    };
}