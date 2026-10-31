import { MaterialBaseParams } from "../../../../types/resources/materials/entity/MaterialEntityTemplates";
import { SnakeCase } from "../../../../utils/SnakeCase";

/**
 * Clase principal con una estructura fija para la creacion de un nuevo material o modificacion del mismo.
 * @class ResourceMaterialEntityBuilder
 * @author HaJuegos - 31-10-2026
 * @export
 */
export class ResourceMaterialEntityBuilder {
    /**
     * Lista de materiales a editar.
     * @type {?MaterialBaseParams[]}
     * @private
     */
    private materialsData?: MaterialBaseParams[];

    protected constructor () { }

    /**
     * Metodo principal auxiliar para asignar los datos de los materiales a crear.
     * @param {MaterialBaseParams[]} params Lista de materiales a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 31-10-2026
     * @protected
     */
    protected setMaterials(params: MaterialBaseParams[]): this {
        this.materialsData = params;

        return this;
    }

    /**
    * Metodo principal que construye la estructura del entity.material adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
    * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
    * @returns {string | Record<string, unknown>} Devuelve el attachable listo en sus versiones respectivas. 
    * @author HaJuegos - 31-10-2026  
    * @protected
    */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const materials: Record<string, unknown> = {};

        for (const { idMaterial, idMaterialReference, variants, ...rest } of this.materialsData ?? []) {
            const finalId = idMaterialReference ? `${idMaterial}:${idMaterialReference}` : idMaterial;

            materials[finalId] = {
                ...rest,
                ...(variants && {
                    variants: variants.map(variant => SnakeCase.shallowSnakeCase(variant))
                })
            };
        }

        const finalObj = Object.freeze({ materials });
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}