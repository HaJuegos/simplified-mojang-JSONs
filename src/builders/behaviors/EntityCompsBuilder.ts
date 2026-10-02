import { BPComponent, BuiltComponent } from "../../types/behaviors/EntitiesComps";
import { SnakeCase } from "../../utils/SnakeCase";

/**
 * Clase plantilla builder para la creacion de un componente de entidades en un behavior.
 * @class BehaviorEntityComponentBuilder
 * @template {BPComponent} Component 
 * @author HaJuegos - 20-09-2026
 * @abstract
 * @export
 */
export abstract class BehaviorEntityComponentBuilder<Component extends BPComponent, ID extends string = string> {
    /**
     * ID del componente a construir.
     * @type {string}
     * @author HaJuegos - 20-09-2026
     * @protected
     * @readonly
     */
    protected readonly idComponent: ID;

    /**
     * Datos del componente en concreto a construir.
     * @type {Component}
     * @author HaJuegos- 21-09-2026
     * @protected
     */
    protected data?: Component;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @param {ID} idComponent ID del componente en concreto a crear.
     * @param {Component} data Datos del componente en concreto a crear. 
     * @author HaJuegos - 20-09-2026
     * @constructor
     * @public
     */
    public constructor (idComponent: ID, data?: Component) {
        this.idComponent = idComponent;
        this.data = data;
    }

    /**
     * Metodo principal de tipo get que obtiene el ID del componente en cuestion.
     * @returns {ID} ID del componente.
     * @author HaJuegos - 30-09-2026
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo principal que obtiene todos los datos y parametros de los componentes en concreto.
     * @returns {Component | undefined} Componente en concreto.
     * @author HaJuegos - 20-09-2026
     * @protected
     * @abstract
     */
    protected getComponentData(): Component | undefined {
        return this.data;
    }

    /**
     * Metodo principal que construye el componente a JSON.
     * @returns {BuiltComponent} El componente en concreto buildeado.
     * @author HaJuegos - 20-09-2026
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComponent]: (SnakeCase.deepSnakeCase(this.getComponentData()) ?? {}) as Record<string, unknown>
        };
    }
}