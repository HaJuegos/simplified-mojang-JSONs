import { BPComponent, BuiltComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal abstracta que sigue una estrutura fija para la creacion de un componente basado en el archivo de biomes.
 * @class BehaviorBiomeComponentBulder
 * @template {BPComponent} Component Datos del componente en concreto a crear.
 * @template {string} ID ID del componente en concreto a crear.
 * @author HaJuegos - 15-10-2026
 * @abstract
 * @export
 */
export abstract class BehaviorBiomeComponentBulder<
    Component extends BPComponent,
    ID extends string = string
> {
    /**
     * ID del componente en concreto a crear.
     * @type {ID}
     * @protected
     * @readonly
     */
    protected readonly idComponent: ID;

    /**
     * Datos del componente en concreto a crear.
     * @type {?Component}
     * @protected
     */
    protected data?: Component;

    /**
     * Parametros iniciales y eventos cuando la clase es llamada o inicializada. Para la creacion de un componente a base de biomes.
     * @param {ID} idComp ID del componente en cuestion a crear.
     * @param {?Component} [data] (Opcional) Datos del componente en concreto a crear.
     * @author HaJuegos - 15-10-2026 
     * @constructor
     * @public
     */
    public constructor (idComp: ID, data?: Component) {
        this.idComponent = idComp;
        this.data = data;
    }

    /**
     * Metodo auxiliar de tipo GET para obtener el ID fijo del componente en concreto a crear.
     * @type {ID}
     * @author HaJuegos - 15-10-2026
     * @readonly
     * @public
     */
    public get idComp(): ID {
        return this.idComponent;
    }

    /**
     * Metodo auxiliar que obtiene los datos definidos del componente en concreto a crear.
     * @returns {(Component | undefined)} Devuelve los datos del componente en cuestion.
     * @author HaJuegos - 15-10-2026
     * @protected
     */
    protected getCompData(): Component | undefined {
        return this.data;
    }

    /**
     * Metodo principal auxiliar que construye el componente final a crear en concreto.
     * @returns {BuiltComponent} Devuelve el componente preparado y listo con su estructura ya preparada.
     * @author HaJuegos - 15-10-2026 
     * @public
     */
    public build(): BuiltComponent {
        return {
            [this.idComp]: (SnakeCase.deepSnakeCase(this.getCompData()) ?? {}) as Record<string, unknown>
        };
    }
}