import { FinalSpawnRuleTemplateBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponent } from "./SpawnRuleCompTemplate";

export {
    PopulationControlsVanilla,
    BPSpawnRuleDefinition,
    BPSpawnRuleOverride,
    BPSpawnRuleTemplateInstance,
};

/**
 * Lista de categorias de la mob cap disponible en el juego.
 * @author HaJuegos - 17-10-2026 
 */
type PopulationControlsVanilla = "ambient" | "animal" | "water_animal" | "monster" | "cat" | "pillager";

/**
 * Tipado general para la definicion base de un nuevo spawn rule.
 * @interface BPSpawnRuleDefinition
 * @author HaJuegos - 17-10-2026 
 */
interface BPSpawnRuleDefinition {
    /**
     * ID del spawn rule a crear en cuestion.
     * @type {string}
     */
    idSpawnRule: string;

    /**
     * Categoria de la mob cap que tomara el spawn rule en cuestion.
     * @type {PopulationControlsVanilla}
     */
    categoryControl: PopulationControlsVanilla;

    /**
     * Lista de condiciones a seguir para que el spawn rule se ejecute.
     * @type {readonly BPSpawnRuleComponent[]}
     */
    conditions: readonly BPSpawnRuleComponent[];
}

/**
 * Tipado auxiliar general para las nuevas instancias de la edicion post-edicion.
 * @interface BPSpawnRuleTemplateInstance
 * @template {readonly BPSpawnRuleComponent[]} Comps Componentes añadido a la definicion base en cuestion.
 * @author HaJuegos - 17-10-2026  
 */
interface BPSpawnRuleTemplateInstance<
    Comps extends readonly BPSpawnRuleComponent[] = readonly BPSpawnRuleComponent[]
> {
    /**
     * Funcion adiccional para las modificaciones y adicciones post-edicion a la base principal.
     * @param {?BPSpawnRuleOverride<Comps>} [over] (Opcional) Parametros de la modificacion post-edicion.
     * @returns {FinalSpawnRuleTemplateBuilder} Devuelve finalmente la estructura final lista para su exportacion final al formato JSON.
     * @author HaJuegos - 17-10-2026
     */
    (over?: BPSpawnRuleOverride<Comps>): FinalSpawnRuleTemplateBuilder;
}

/**
 * Tipado general para las modificaciones y/o añadidos post-edicion a la base principal.
 * @template {readonly BPSpawnRuleComponent[]} Comps Lista de componentes definidos en la plantilla base principal. 
 * @author HaJuegos - 17-10-2026
 */
type BPSpawnRuleOverride<
    Comps extends readonly BPSpawnRuleComponent[] = readonly BPSpawnRuleComponent[]
> = {
    /**
     * Si se define, se limpia la plantilla dejando completamente vacio el archivo base.
     * @type {true}
     */
    clearAllData: true;

    /**
     * No se puede definir componentes a editar porque pues, no hay. Pon false o no definas un valor en clearAllData primero.
     * @type {?never}
     */
    conditions?: never;

    /**
     * (Opcional) Lista de condiciones adiccionales a añadir a la plantilla base.
     * @type {?{conditions?: readonly BPSpawnRuleComponent[];}}
     */
    add?: {
        conditions?: readonly BPSpawnRuleComponent[];
    };
} | {
    /**
     * (Opcional) Si es true, se limpia la plantilla dejando completamente vacio el archivo base.
     * @type {true}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Lista de conditions a modificar de la plantilla base disponibles.
     * @type {?(Comps extends readonly [] ? Record<string, BPSpawnRuleComponent> : { [K in Comps[number]['idComp'] & string]?: Comps[number] extends infer C ? C extends { idComp: K; } ? C : never : never; })}
     */
    conditions?: Comps extends readonly [] ? Record<string, BPSpawnRuleComponent> : { [K in Comps[number]['idComp'] & string]?: Comps[number] extends infer C ? C extends { idComp: K; } ? C : never : never; };

    /**
     * (Opcional) Lista de condiciones adiccionales a añadir a la plantilla base.
     * @type {?{conditions?: readonly BPSpawnRuleComponent[];}}
     */
    add?: {
        conditions?: readonly BPSpawnRuleComponent[];
    };
};