import { BPComponent, BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal abstracta para la creacion de un componente de dimensiones a asignar.
 * @class BehaviorDimensionComponentBuilder
 * @template {BPComponent} Component Datos del componente en cuestion.
 * @template {string} ID ID del componente en cuestion.
 * @author HaJuegos - 15-10-2026
 * @abstract
 * @export
 */
export abstract class BehaviorDimensionComponentBuilder<
    Component extends BPComponent,
    ID extends string = string
> {
    /**
     * ID del componente en cuestion a crear.
     * @type {ID}
     * @protected
     * @readonly
     */
    protected readonly idComponent: ID;

    /**
     * Datos del componente en cuestion a crear.
     * @type {?Component}
     * @protected
     */
    protected data?: Component;

    /**
     * Parametros iniciales y eventos de la clase cuando es llamada o inicializada. Para crear el componente en cuestion.
     * @param {ID} idComp ID del componente a crear.
     * @param {?Component} [data] (Opcional) Datos del componente en cuestion.
     * @author HaJuegos - 15-10-2026 
     * @constructor
     * @public
     */
    public constructor (idComp: ID, data?: Component) {
        this.idComponent = idComp;
        this.data = data;
    }

    /**
     * Metodo principal auxiliar de tipo GET para obtener el ID del componente fijo creado.
     * @type {ID}
     * @author HaJuegos - 15-10-2026
     * @readonly
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo auxiliar que obtiene los datos del componente creado en cuestion.
     * @returns {(Component | undefined)} Devuelve los datos de los componentes asignados, en caso de haber.
     * @author HaJuegos - 15-10-2026 
     * @protected
     */
    protected getCompData(): Component | undefined {
        return this.data;
    }

    /**
     * Metodo principal auxiliar que construye el componente creado finalmente a la estructura JSON requerida.
     * @returns {BuiltComponent} Devuelve el objecto fijo en una estructura fija valida.
     * @author HaJuegos - 15-10-2026
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComp]: (SnakeCase.deepSnakeCase(this.getCompData()) ?? {}) as Record<string, unknown>
        };
    }
}