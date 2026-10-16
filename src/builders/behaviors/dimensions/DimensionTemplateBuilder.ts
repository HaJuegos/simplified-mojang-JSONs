import { BPDimensionComponent } from "../../../types/behaviors/dimensions/DimensionCompTemplate";
import { BPDimensionDefinition, BPDimensionOverride, BPDimensionTemplateInstance } from "../../../types/behaviors/dimensions/DimensionTemplate";
import { BehaviorDimensionBuilder } from "./DimensionBuilder";
import { BehaviorDimensionComponentBuilder } from "./DimensionCompBuilder";

/**
 * Clase principal para la creacion final de una dimension nueva a base de una estructura fija para una plantilla base y la edicion post-edicion.
 * @class FinalDimensionTemplateBuilder
 * @extends {BehaviorDimensionBuilder}
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class FinalDimensionTemplateBuilder extends BehaviorDimensionBuilder {
    /**
     * Parametros iniciales y eventos de la clase cuando es inicializada o llamada. Con el fin de establecer los datos fijos de la plantilla base y los datos adiccionales post-edicion para la exportacion final.
     * @param {BPDimensionDefinition} def Datos fijos finales para la plantilla base. 
     * @param {BPDimensionOverride<any>} over Datos adiccionales fijos para la edicion post-edicion de la plantilla base.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (def: BPDimensionDefinition, over: BPDimensionOverride<any>) {
        super(def.idDimension);

        const compsMap = new Map<string, BPDimensionComponent>;

        if (!over.clearAllData) {
            if (def.components) {
                for (const comp of def.components) {
                    compsMap.set(comp.idComp, comp);
                }
            }

            if (over.components) {
                for (const [id, value] of Object.entries(over.components as Record<string, unknown>)) {
                    if (value == undefined) {
                        continue;
                    }

                    if (value instanceof BehaviorDimensionComponentBuilder) {
                        compsMap.set(value.idComp, value);
                    }
                }
            }
        }

        if (over.add?.components) {
            for (const comp of over.add.components) {
                compsMap.set(comp.idComp, comp);
            }
        }

        const finalComps = Array.from(compsMap.values());

        if (finalComps.length > 0) {
            this.setComponents(finalComps);
        }
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 30-09-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la estructuracion final de una dimension en concreto. Definiendo primero la plantilla base y luego, devolviendo una funcion para sus adicciones post-edicion.
 * @param {(BPDimensionDefinition & { components?: Comps; })} def Definiciones fijas principales para la plantilla base.
 * @template {readonly BPDimensionComponent[]} Comps Componentes asignados a la dimension en concreto. 
 * @returns {BPDimensionTemplateInstance<Comps>} Devuelve una funcion para la adiccion de datos y sobreescritura de la plantilla base post-edicion.
 * @author HaJuegos - 15-10-2026
 * @export
 */
export function createBPDimension<
    const Comps extends readonly BPDimensionComponent[] = []
>(def: BPDimensionDefinition & { components?: Comps; }): BPDimensionTemplateInstance<Comps> {
    return (over = {}) => {
        return new FinalDimensionTemplateBuilder(def, over as unknown as BPDimensionOverride<any>);
    };
}