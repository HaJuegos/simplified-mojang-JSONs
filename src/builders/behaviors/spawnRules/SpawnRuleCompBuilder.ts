import { BPComponent, BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase abstracta de estructura fija para la creacion de un componente de spawn rule en concreto.
 * @class BehaviorSpawnRuleComponentBuilder
 * @template {BPComponent} Component Datos del componente a crear en cuestion.
 * @template {string} ID ID del componente en cuestion a crear.
 * @author HaJuegos - 17-10-2026 
 * @abstract
 * @export
 */
export abstract class BehaviorSpawnRuleComponentBuilder<
    Component extends BPComponent,
    ID extends string = string
> {
    /**
     * ID del componente a crear.
     * @type {ID}
     * @protected
     * @readonly
     */
    protected readonly idComponent: ID;

    /**
     * (Opcional) Datos del componente a crear.
     * @type {?Component}
     * @protected
     */
    protected data?: Component;

    /**
     * Parametros iniciales y eventos de la clase cuando es llamada o inicializada. Para la creacion de un nuevo componente de un spawn rule.
     * @param {ID} idComp ID del componente a crear.
     * @param {?Component} [data] (Opcional) Datos del componente a crear. Por defecto no es necesario definir unos.
     * @constructor
     * @public
     */
    public constructor (idComp: ID, data?: Component) {
        this.idComponent = idComp;
        this.data = data;
    };

    /**
     * Metodo principal de tipo GET para obtener el ID fijo del componente en cuestion creado.
     * @type {ID}
     * @author HaJuegos - 17-10-2026
     * @readonly
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo principal auxiliar que obtiene todos los datos asignados al componente.
     * @returns {(Component | undefined)} Devuelve los datos asignados al componente, si hay.
     * @author HaJuegos - 17-10-2026
     * @protected
     */
    protected getCompData(): Component | undefined {
        return this.data;
    }

    /**
     * Metodo principal que construye el componente con una estructura fija y adaptado al JSON final.
     * @returns {BuiltComponent} Devuele el JSON final listo para su exportacion al final final.
     * @author HaJuegos - 17-10-2026
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComp]: (SnakeCase.deepSnakeCase(this.getCompData()) ?? {}) as Record<string, unknown>
        };
    }
}