import { BPComponent, BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal abstracta que sigue una estructura fija para la creacion de un componente de un bloque en cuestion.
 * @class BehaviorBlockComponentBuilder
 * @template {BPComponent} Comp Datos del componente en cuestion.
 * @template {string} ID ID del componente a crear en cuestion.
 * @author HaJuegos - 18-10-2026
 * @abstract
 * @export
 */
export abstract class BehaviorBlockComponentBuilder<
    Comp extends BPComponent,
    ID extends string = string
> {
    /**
     * ID del componente a crear.
     * @type {ID}
     * @readonly
     * @private
     */
    private readonly idComponent: ID;

    /**
     * (Opcional) Datos del componente en cuestion a crear.
     * @type {?Comp}
     * @private
     */
    private data?: Comp;

    /**
     * Parametros iniciales de la clase cuando es llamada o inicializada. Para la creacion de un nuevo componente los datos iniciales.
     * @param {ID} idComp ID del componente a crear.
     * @param {?Comp} [data] (Opcional) Datos del componente a crear.
     * @author HaJuegos - 18-10-2026 
     * @constructor
     */
    constructor (idComp: ID, data?: Comp) {
        this.idComponent = idComp;
        this.data = data;
    }

    /**
     * Metodo principal de tipo GET para obtener el ID fijo del componente en cuestion.
     * @type {ID}
     * @author HaJuegos - 18-10-2026
     * @readonly
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo auxiliar que obtiene todos los datos asignados al componente en cuestion.
     * @returns {(Comp | undefined)} Devuelve la lista de datos definidos al componente, si hay.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected getCompData(): Comp | undefined {
        return this.data;
    }

    /**
     * Metodo principal que construye el componente a una estructura fija para la adaptacion del JSON final.
     * @returns {BuiltComponent} Devuelve el componente preparado en un formato listo.
     * @author HaJuegos - 18-10-2026 
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComponent]: (SnakeCase.deepSnakeCase(this.getCompData()) ?? {}) as Record<string, unknown>
        };
    }
}