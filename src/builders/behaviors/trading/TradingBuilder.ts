import { TiersParams } from "../../../types/behaviors/trading/TradingTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal que construye un nuevo trading con una estructura fija.
 * @class BehaviorTradingBuilder
 * @author HaJuegos - 19-10-2026
 * @export
 */
export class BehaviorTradingBuilder {
    /**
     * (Opcional) Lista de tiers para los tradeos a dar en cuestion.
     * @type {(any | undefined)}
     * @private
     */
    private tiersList: TiersParams[] | undefined;

    /**
     * Eventos y parametros iniciales de la clase cuando es llamada o inicializada.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @protected
     */
    protected constructor () { }

    /**
     * Metodo auxiliar que asigna los tiers del trading a crear en cuestion.
     * @param {TiersParams[]} params Lista de tiers a crear en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 20-10-2026
     * @protected
     */
    protected setTiers(params: TiersParams[]): this {
        this.tiersList = params;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del trading.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el biome listo en sus versiones respectivas. 
     * @author HaJuegos - 19-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const finalObj = Object.freeze(
            SnakeCase.deepSnakeCase({ tiers: this.tiersList }) as Record<string, unknown>
        );

        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}