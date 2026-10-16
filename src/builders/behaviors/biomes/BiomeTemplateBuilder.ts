import { BehaviorBiomeBuilder } from "../../../builders/behaviors/biomes/BiomeBuilder";
import { BPBiomeComponent } from "../../../types/behaviors/biomes/BiomeCompsTemplate";
import { BPBiomeDefinition, BPBiomeOverride, BPBiomeTemplateInstance } from "../../../types/behaviors/biomes/BiomeTemplate";
import { BehaviorBiomeComponentBulder } from "./BiomeCompBuilder";

/**
 * Clase principal que construye el archivo final del biome en su estructura fija con los datos asignados en concreto.
 * @class FinalBiomeBuilderTemplate
 * @extends {BehaviorBiomeBuilder}
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class FinalBiomeBuilderTemplate extends BehaviorBiomeBuilder {
    /**
     * Parametros principales y eventos para la creacion de un archivo biome con una estructura fija final.
     * @param {BPBiomeDefinition} def Datos principales para la creacion de una plantilla base.
     * @param {BPBiomeOverride<any>} over (Opcional) Datos post-edicion para la modificacion de la plantilla base creada.
     * @author HaJuegos - 15-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPBiomeDefinition, over: BPBiomeOverride<any>) {
        super(def.idBiome);

        const compsMap = new Map<string, BPBiomeComponent>;

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

                    if (value instanceof BehaviorBiomeComponentBulder) {
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
            this.setComponentsBiome(finalComps);
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
 * Funcion principal de fabrica para exponer la estructura fija final para la creacion de un archivo biome con todas las estructuras necesarias para la creacion base y post-edicion.
 * @param {(BPBiomeDefinition & { components?: Comps; })} def Definicion base a crear para la plantilla.
 * @template {readonly BPBiomeComponent[]} Comps Componentes del archivo biomes asignados en concreto. 
 * @returns {BPBiomeTemplateInstance<Comps>} Devuelve una funcion para la post-edicion despues de la creacion de la plantilla base para la libre edicion del mismo.
 * @author HaJuegos - 15-10-2026
 * @export
 */
export function createBPBiomeTemplate<
    const Comps extends readonly BPBiomeComponent[] = []
>(def: BPBiomeDefinition & { components?: Comps; }): BPBiomeTemplateInstance<Comps> {
    return (over = {}) => {
        return new FinalBiomeBuilderTemplate(def, over as unknown as BPBiomeOverride<any>);
    };
}