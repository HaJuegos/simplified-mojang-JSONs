import { FinalBiomeBuilderTemplate } from "../../../builders/behaviors/biomes/BiomeTemplateBuilder";
import { BPBiomeComponent } from "./BiomeCompsTemplate";

export {
    BPBiomeDefinition,
    BPBiomeOverride,
    BPBiomeTemplateInstance,
};

/**
 * Tipado general para la definicion base de la plantilla de un archivo biome y su creacion.
 * @interface BPBiomeDefinition
 * @author HaJuegos - 15-10-2026
 */
interface BPBiomeDefinition {
    /**
     * ID del bioma en concreto a crear.
     * @type {string}
     */
    idBiome: string;

    /**
     * Componentes en concreto del bioma a crear.
     * @type {readonly BPBiomeComponent[]}
     */
    components: readonly BPBiomeComponent[];
}

/**
 * Tipado auxiliar que transfiere las instancias de la definicion override para la post-edicion con sus correctos tipados.
 * @interface BPBiomeTemplateInstance
 * @template {readonly BPBiomeComponent[]} Comps Componentes asignados del archivo biome en concreto. 
 * @author HaJuegos - 15-10-2026
 */
interface BPBiomeTemplateInstance<
    Comps extends readonly BPBiomeComponent[] = readonly BPBiomeComponent[]
> {
    /**
     * Funcion auxiliar que asigna los valores y cambios post-edicion despues de crear la plantilla base.
     * @param {?BPBiomeOverride<Comps>} [over] (Opcional) Cambios post-edicion a la plantilla base.
     * @returns {FinalBiomeBuilderTemplate} Devuelve la estructa final lista para la exportacion en formato JSON.
     * @author HaJuegos - 15-10-2026
     */
    (over?: BPBiomeOverride<Comps>): FinalBiomeBuilderTemplate;
}

/**
 * Tipado general para los parametros post-edicion y sus cambios permitidos a la plantilla base.
 * @template {readonly BPBiomeComponent[]} Comps
 * @author HaJuegos - 15-10-2026
 */
type BPBiomeOverride<
    Comps extends readonly BPBiomeComponent[] = readonly BPBiomeComponent[]
> = {
    /**
     * Si se asigna en true, se limpia toda la plantilla base dejando un archivo vacio listo para su post-edicion.
     * @type {true}
     */
    clearAllData: true;

    /**
     * No se puede editar componentes, si ya no hay al usar clearAllData.
     * @type {?never}
     */
    components?: never;

    /**
     * (Opcional) Componentes a añadir a la base plantilla en la post-edicion.
     * @type {?{components?: readonly BPBiomeComponent[];}}
     */
    add?: {
        components?: readonly BPBiomeComponent[];
    };
} | {
    /**
 * Si se asigna en true, se limpia toda la plantilla base dejando un archivo vacio listo para su post-edicion.
 * @type {true}
 */
    clearAllData?: false | undefined;

    /**
     * Componentes a editar en concreto de la plantilla fija ya asignados.
     * @type {?Comps extends readonly [] ? Record<string, BPBiomeComponent> : { [K in Comps[number]['idComp']]?: BPBiomeComponent; }}
     */
    components?: Comps extends readonly [] ? Record<string, BPBiomeComponent> : { [K in Comps[number]['idComp'] & string]?: Comps[number] extends infer C ? C extends { idComp: K; } ? C : never : never; };

    /**
     * (Opcional) Componentes a añadir a la base plantilla en la post-edicion.
     * @type {?{components?: readonly BPBiomeComponent[];}}
     */
    add?: {
        components?: readonly BPBiomeComponent[];
    };
};