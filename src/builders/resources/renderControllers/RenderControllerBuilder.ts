import { FormatVersionRenderList, RenderControllerBaseParams } from "../../../types/resources/renderControllers/RenderControllerTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal para estructurar un nuevo archivo de render controller con sus respectivos datos en concreto.
 * @class ResourceRenderControllerBuilder
 * @author HaJuegos - 31-10-2026
 * @export
 */
export class ResourceRenderControllerBuilder {
    /**
     * Version del format version en concreto que tomara el render controller. Por defecto es la version "1.10.0".
     * @type {FormatVersionRenderList}
     * @private
     */
    private renderVersion: FormatVersionRenderList = FormatVersionRenderList.MostRecent;

    /**
     * Lista de render controllers y sus respectivos datos en concreto.
     * @type {?RenderControllerBaseParams[]}
     * @private
     */
    private renderData?: RenderControllerBaseParams[];

    protected constructor () { }

    /**
     * Metodo principal auxiliar para definir la version del format version del render controller.
     * @param {FormatVersionRenderList} newVer La nueva version en concreto a asignar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 31-10-2026
     * @protected
     */
    protected setVersionRender(newVer: FormatVersionRenderList): this {
        this.renderVersion = newVer;

        return this;
    }

    /**
     * Metodo principal auxiliar para definir la lista de render controllers que tendra este archivo en concreto.
     * @param {RenderControllerBaseParams[]} params Lista de render controllers definidos.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 31-10-2026
     * @protected
     */
    protected setDataRender(params: RenderControllerBaseParams[]): this {
        this.renderData = params;

        return this;
    }

    /**
    * Metodo principal que construye la estructura del render_controller.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
    * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
    * @returns {string | Record<string, unknown>} Devuelve el attachable listo en sus versiones respectivas. 
    * @author HaJuegos - 31-10-2026  
    * @protected
    */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const renderControllersMap: Record<string, Record<string, unknown>> = {};

        for (const render of this.renderData ?? []) {
            const { idRender, ...params } = render;

            renderControllersMap[`controller.render.${idRender}`] = SnakeCase.deepSnakeCase(params) as Record<string, unknown>;
        }

        const preRender = {
            format_version: this.renderVersion,
            render_controllers: renderControllersMap
        };

        const finalObj = Object.freeze(preRender);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}