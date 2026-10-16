import { FinalDimensionTemplateBuilder } from "../../../builders/behaviors/dimensions/DimensionTemplateBuilder";
import { BPDimensionComponent } from "./DimensionCompTemplate";

export {
    BPDimensionDefinition,
    BPDimensionOverride,
    BPDimensionTemplateInstance,
};

/**
 * Tipado general con los parametros para crear una dimension con una estructura fija.
 * @interface BPDimensionDefinition
 * @author HaJuegos - 15-10-2026
 */
interface BPDimensionDefinition {
    /**
     * ID de la dimension a crear.
     * @type {string}
     */
    idDimension: string;

    /**
     * Lista de componentes fijos a establecer a la dimension.
     * @type {readonly BPDimensionComponent[]}
     */
    components: readonly BPDimensionComponent[];
}

/**
 * Tipado auxiliar de instancia para mostrar los tipos de datos y documentacion de los tipados post-edicion.
 * @interface BPDimensionTemplateInstance
 * @template {readonly BPDimensionComponent[]} Comps Componentes asignados a la plantilla fija en cuestion. 
 * @author HaJuegos - 15-10-2026
 */
interface BPDimensionTemplateInstance<
    Comps extends readonly BPDimensionComponent[] = readonly BPDimensionComponent[]
> {
    /**
     * Funcion adiccional que establece los valores y componentes adiccionales post-edicion a la plantilla base.
     * @param {?BPDimensionOverride<Comps>} [over] (Opcional) Datos adiccionales a añadir a la plantilla base.
     * @returns {FinalDimensionTemplateBuilder} Devuelve ya la clase preparada con la estructura fija para la exporacion final a JSON.
     * @author HaJuegos - 15-10-2026
     */
    (over?: BPDimensionOverride<Comps>): FinalDimensionTemplateBuilder;
}

/**
 * Tipado general para establecer los datos y parametros fijos post-edicion y permitir la edicion de la plantilla base.
 * @template {readonly BPDimensionComponent[]} Comps Los componentes fijos establecidos en la plantilla base. 
 * @author HaJuegos - 15-10-2026
 */
type BPDimensionOverride<
    Comps extends readonly BPDimensionComponent[] = readonly BPDimensionComponent[]
> = {
    /**
     * Si se establece en true, ahora los componentes y datos fijos establecidos en la plantilla base, seran eliminados. Dejando una plantilla en blanco.
     * @type {true}
     */
    clearAllData: true;

    /**
     * No tiene sentido cambiar componentes fijos, si ya no hay. Establece clearAllData, para poderlos editar.
     * @type {?never}
     */
    components?: never;

    /**
     * (Opcional) Parametro que establece nuevos valores o componentes a la plantilla base.
     * @type {?{components?: readonly BPDimensionComponent[];}}
     */
    add?: {
        components?: readonly BPDimensionComponent[];
    };
} | {
    /**
     * (Opcional) Si se establece en true, ahora los componentes y datos fijos establecidos en la plantilla base, seran eliminados. Dejando una plantilla en blanco.
     * @type {true}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Edicion de los componentes fijados en la plantilla base, mostrado por su ID fijo.
     * @type {?(Comps extends readonly [] ? Record<string, BPDimensionComponent> : { [K in Comps[number]['idComp'] & string]?: Comps[number] extends infer C ? C extends { idComp: K; } ? C : never : never; })}
     */
    components?: Comps extends readonly [] ? Record<string, BPDimensionComponent> : { [K in Comps[number]['idComp'] & string]?: Comps[number] extends infer C ? C extends { idComp: K; } ? C : never : never; };

    /**
     * (Opcional) Parametro que establece nuevos valores o componentes a la plantilla base.
     * @type {?{components?: readonly BPDimensionComponent[];}}
     */
    add?: {
        components?: readonly BPDimensionComponent[];
    };
};