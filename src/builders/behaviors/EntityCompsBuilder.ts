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
     * ID del componente a construir.
     * @type {string}
     * @author HaJuegos - 20-09-2026
     * @protected
     * @readonly
     */
    protected readonly idComponent: string;

    /**
     * Datos del componente en concreto a construir.
     * @type {Component}
     * @author HaJuegos- 21-09-2026
     * @protected
     */
    protected data: Component;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @param {string} idComponent ID del componente en concreto a crear.
     * @param {string} data Datos del componente en concreto a crear. 
     * @author HaJuegos - 20-09-2026
     * @constructor
     * @public
     */
    public constructor (idComponent: string, data: Component) {
        this.idComponent = idComponent;
        this.data = data;
    }

    /**
     * Metodo principal que obtiene todos los datos y parametros de los componentes en concreto.
     * @returns {Component} Componente en concreto.
     * @author HaJuegos - 20-09-2026
     * @protected
     * @abstract
     */
    protected getComponentData(): Component {
        return this.data;
    }

    /**
     * Metodo principal que construye el componente a JSON.
     * @returns {Record<string, Record<string, unknown>>} El componente en concreto buildeado.
     * @author HaJuegos - 20-09-2026
     * @public
     */
    public build(): Record<string, Record<string, unknown>> {
        return {
            [this.idComponent]: this.deepSnakeCase(this.getComponentData()) as Record<string, unknown>
        };
    }

    /**
     * Metodo auxiliar privado que convierte los tipados a "snake_case". Para compatibilidad correcta de los componentes vanilla.
     * @param {string} str Tipo de string a convertir.
     * @returns {string} Devuelve el string convertido a "snake_case".
     * @author HaJuegos - 21-09-2026
     * @private
     */
    private toSnakeCase(str: string): string {
        return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }

    /**
     * Metodo auxiliar privado que convierte un objecto y sus strings a formato "snake_case" en formato string para compatibilidad con los componentes vanilla.
     * @param {unknown} obj Los objectos y strings en cuestion a convertir.
     * @returns {unknown} Devuelve el JSON formateado con el objecto convertido.
     * @author HaJuegos - 21-09-2026
     * @private
     */
    private deepSnakeCase(obj: unknown): unknown {
        if (Array.isArray(obj)) {
            return obj.map(item => this.deepSnakeCase(item));
        }

        if (obj != null && typeof obj == "object") {
            const result: Record<string, unknown> = {};

            for (const [key, value] of Object.entries(obj)) {
                result[this.toSnakeCase(key)] = this.deepSnakeCase(value);
            }

            return result;
        }

        return obj;
    }
}