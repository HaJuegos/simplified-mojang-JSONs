import { BPComponent } from "../../types/behaviors/EntitiesComps";

/**
 * Clase plantilla builder para la creacion de un componente de entidades en un behavior.
 * @class BehaviorEntityComponentBuilder
 * @template {BPComponent} Component 
 * @author HaJuegos - 20-09-2026
 * @abstract
 * @export
 */
export abstract class BehaviorEntityComponentBuilder<Component extends BPComponent> {
    /**
     * ID del componente en cuestion.
     * @type {string}
     * @author HaJuegos - 20-09-2026
     * @protected
     * @readonly
     */
    protected readonly idComponent: string;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @param {string} idComponent ID del componente en cuestion.
     * @author HaJuegos - 20-09-2026
     * @constructor
     * @public
     */
    public constructor (idComponent: string) {
        this.idComponent = idComponent;
    }

    /**
     * Metodo principal que obtiene todos los datos y parametros de los componentes en concreto.
     * @returns {Component} Componente en concreto.
     * @author HaJuegos - 20-09-2026
     * @protected
     * @abstract
     */
    protected abstract getComponentData(): Component;

    /**
     * Metodo principal que construye el componente a JSON.
     * @returns {Record<string, Component>} El componente en concreto buildeado.
     * @author HaJuegos - 20-09-2026
     * @public
     */
    public build(): Record<string, Component> {
        return {
            [this.idComponent]: this.getComponentData()
        };
    }
}