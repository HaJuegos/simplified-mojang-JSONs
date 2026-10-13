import { MinecraftItemTypes } from "@minecraft/vanilla-data";

export {
    TypeRecipesVanillaEnums,
    RecipeBrewingTypes,
    RecipeFurnaceTypes,
    RecipeShaped,
    RecipeShapeless,
    RecipeSmithing,
    FurnaceBlockEnum,
    TagsRecipesGlobalEnums,
    BPRecipeDefinition,
    BPRecipeOverrideDefinition,
    RecipeTypesLoadMaps,
};

/**
 * Lista de recetas disponibles que se pueden crear.
 * @enum {string}
 * @author HaJuegos - 11-10-2026
 */
enum TypeRecipesVanillaEnums {
    RecipeBrewingContainer = "minecraft:recipe_brewing_container",
    RecipeBrewingMix = "minecraft:recipe_brewing_mix",
    RecipeFurnace = "minecraft:recipe_furnace",
    RecipeShaped = "minecraft:recipe_shaped",
    RecipeShapeless = "minecraft:recipe_shapeless",
    RecipeSmithingTransform = "minecraft:recipe_smithing_transform"
}

/**
 * Tipados generales de todos los tags disponibles en el caso de cocinarse algo.
 * @author HaJuegos - 11-10-2026
 */
type FurnaceBlockEnum = "furnace" | "blast_furnace" | "campfire" | "soul_campfire" | "smoker";

/**
 * Tipados generales de todos los tags adiccionales que se pueden usar.
 * @author HaJuegos - 11-10-2026
 */
type TagsRecipesGlobalEnums = "crafting_table" | "stonecutter";

/**
 * Tipado general para validar letra a letra si sigue una correcta estructura.
 * @template {string} S Letra a validar en cuestion.
 * @author HaJuegos - 11-10-2026
 */
type CharAt<S extends string> = S extends `${infer Char}${infer Rest}` ? Char | CharAt<Rest> : never;

/**
 * Tipado general que obtiene y valida las letras asignadas en un patron de recetas con forma.
 * @template {readonly string[]} T La lista de palabras creadas. 
 * @author HaJuegos - 11-10-2026
 */
type GetPatternKeys<T extends readonly string[]> = T[number] extends infer Row extends string ? Exclude<CharAt<Row>, " "> : never;

/**
 * Tipado general para el maximo de filas que puede tener una receta con forma.
 * @author HaJuegos - 11-10-2026
 */
type RecipeShapedRow = `${string}` | `${string}${string}` | `${string}${string}${string}`;

/**
 * Tipado general final para la asignacion de la forma validando si todo esta correcto con una receta con forma.
 * @author HaJuegos - 11-10-2026
 */
type RecipeShapedPattern = [RecipeShapedRow] | [RecipeShapedRow, RecipeShapedRow] | [RecipeShapedRow, RecipeShapedRow, RecipeShapedRow];

/**
 * Lista de tipado de todas las recetas finales vanillas disponibles.
 * @author HaJuegos - 12-10-2026
 */
type RecipeTypesLoadMaps = {
    [TypeRecipesVanillaEnums.RecipeBrewingContainer]: {
        brewingContainer: RecipeBrewingTypes;
    };

    [TypeRecipesVanillaEnums.RecipeBrewingMix]: {
        brewingMix: RecipeBrewingTypes;
    };

    [TypeRecipesVanillaEnums.RecipeFurnace]: {
        furnace: RecipeFurnaceTypes;
    };

    [TypeRecipesVanillaEnums.RecipeShaped]: {
        shaped: RecipeShaped;
    };

    [TypeRecipesVanillaEnums.RecipeShapeless]: {
        shapeless: RecipeShapeless;
    };

    [TypeRecipesVanillaEnums.RecipeSmithingTransform]: {
        smithing: RecipeSmithing;
    };
};

/**
 * Tipado general final para la definicion de plantillas base para la creacion de una receta en concreto.
 * @template {TypeRecipesVanillaEnums} T Datos en concreto de los tipados disponibles para las recetas.
 * @author HaJuegos - 12-10-2026
 */
type BPRecipeDefinition<
    T extends TypeRecipesVanillaEnums = TypeRecipesVanillaEnums
> = {
    idRecipe: string;
    typeRecipe: T;
} & RecipeTypesLoadMaps[T];

/**
 * Tipado general base para la modificacion y validacion post-edicion de una plantilla base.
 * @template {TypeRecipesVanillaEnums} T Datos en concreto de los tipados disponibles para las recetas.
 * @author HaJuegos - 12-10-2026
 */
type BPRecipeOverrideDefinition<
    T extends TypeRecipesVanillaEnums = TypeRecipesVanillaEnums
> = {
    /**
     * (Opcional) Si se define, todos los datos de la plantilla base seran limpiados y te deja un archivo base de la plantilla completamente vacio.
     * @type {?boolean}
     */
    clearAllData?: boolean;
} & (
        {
            clearAllData?: false | undefined;
        } & Partial<RecipeTypesLoadMaps[T]> |
        {
            clearAllData: true;
        }
    ) & {
        /**
         * (Opcional) Datos adiccionales que se integran a la plantilla base post-edicion.
         * @type {?Partial<RecipeTypesLoadMaps[T]>}
         */
        add?: Partial<RecipeTypesLoadMaps[T]>;
    };

/**
 * Lista de parametros base cuando se quiere asignar un desbloqueo de la receta con items.
 * @interface ItemDataUnlockTypes
 * @author HaJuegos - 11-10-2026
 */
interface ItemDataUnlockTypes {
    /**
     * ID del item en cuestion a obtener para desbloquear la receta.
     * @type {(string | MinecraftItemTypes)}
     */
    item: string | MinecraftItemTypes;

    /**
     * (Opcional) Data ID en cuestion del item para desbloquear la receta.
     * @type {?number}
     */
    data?: number;
}

/**
 * Lista de parametros base cuando se quiere asignar un item que tienes que dar o da en la receta con items.
 * @interface BaseItemGiveTypes
 * @author HaJuegos - 11-10-2026
 */
interface BaseItemGiveTypes {
    /**
     * ID del item en cuestion a dar o recibir.
     * @type {(string | MinecraftItemTypes)}
     */
    item: string | MinecraftItemTypes;

    /**
     * (Opcional) Data ID del item en cuestion a dar o recibir.
     * @type {?number}
     */
    data?: number;

    /**
     * (Opcional) La cantidad de items a dar en cuestion. Si lo usas para recibir en una receta con forma, no funcionara.
     * @type {?number}
     */
    count?: number;
}

/**
 * Lista de parametros base cuando se quiere asignar una lista de items con un tag respectivo que da o recibe en la receta con items.
 * @interface TagGiveTypes
 * @author HaJuegos - 11-10-2026
 */
interface TagGiveTypes {
    /**
     * ID del tag en cuestion a considerar.
     * @type {string}
     */
    tag: string;
}

/**
 * Tipado simatico que agrupa ambos casos en los items a dar o recibir en la receta de items.
 * @author HaJuegos - 11-10-2026
 */
type ItemDataGivesTypes = BaseItemGiveTypes | TagGiveTypes;

/**
 * Lista de parametros base para la creacion de una receta a base de un estandarte de pociones.
 * @interface RecipeBrewingTypes
 * @author HaJuegos - 11-10-2026
 */
interface RecipeBrewingTypes {
    /**
     * ID del Item o pocion a convertir a nueva pocion.
     * @type {(string | MinecraftItemTypes)}
     */
    input: string | MinecraftItemTypes;

    /**
     * ID del Item requerido para empezar la receta a la nueva pocion o item.
     * @type {(string | MinecraftItemTypes)}
     */
    reagent: string | MinecraftItemTypes;

    /**
     * ID del Item a dar para recibir convertido en nueva pocion o item.
     * @type {(string | MinecraftItemTypes)}
     */
    output: string | MinecraftItemTypes;

    /**
     * (Opcional) Lista de items requeridos para desbloquear la receta.
     * @type {?ItemDataUnlockTypes[]}
     */
    unlock?: ItemDataUnlockTypes[];
}

/**
 * Lista de parametros base para la creacion de una receta de un item cocinado.
 * @interface RecipeFurnaceTypes
 * @author HaJuegos - 11-10-2026
 */
interface RecipeFurnaceTypes {
    /**
     * Lista de bloques que permiten cocinar el item en concreto. Si se usa "all", funcionara en todos los bloques que puedan cocinar items.
     * @type {(["all"] | FurnaceBlockEnum[])}
     */
    targetBlocks: ["all"] | FurnaceBlockEnum[];

    /**
     * ID del item a cocinar en cuestion.
     * @type {(string | MinecraftItemTypes)}
     */
    input: string | MinecraftItemTypes;

    /**
     * ID del item cocinado en cuestion. 
     * @type {(string | MinecraftItemTypes)}
     */
    output: string | MinecraftItemTypes;

    /**
     * (Opcional) Lista de items requeridos para desbloquear la receta.
     * @type {?ItemDataUnlockTypes[]}
     */
    unlock?: ItemDataUnlockTypes[];
}

/**
 * Lista de parametros base para la creacion de una receta con forma, de un item en concreto.
 * @interface RecipeShaped
 * @template {readonly string[]} TPattern Validacion en concreto de la receta.
 * @author HaJuegos - 11-10-2026
 */
interface RecipeShaped<TPattern extends readonly string[] = RecipeShapedPattern> {
    /**
     * (Opcional) Personalmente no se que quiere decir esto; Pero, digamos que tienes varias recetas de un mismo item con diferentes valores asignados como tags o ids fijos. Entonces, este parametro lo que hace es ordenarlos de primero a ultimo en caso de que esto sea realmente necesario.
     * @type {?number}
     */
    priority?: number;

    /**
     * (Opcional) Si se establece en true, el juego automaticamente asimila la simetria de la receta que intentas hacer. Digamos que te ahorra un poco el trabajo si pones mal un item.
     * @type {?boolean}
     */
    assumeSymmetry?: boolean;

    /**
     * Lista de bloques donde esta receta funcionara.
     * @type {(["all"] | TagsRecipesGlobalEnums[])}
     */
    tags: ["all"] | TagsRecipesGlobalEnums[];

    /**
     * (Opcional) ID o nombre del grupo de items donde va ordenado esta receta internamente en el juego.
     * @type {?string}
     */
    group?: string;

    /**
     * Forma a crear en la mesa para obtener el item.
     * @type {TPattern}
     */
    pattern: TPattern;

    /**
     * Datos de los items y su patron correspondiente de la forma.
     * @type {(Record<GetPatternKeys<TPattern>, ItemDataGivesTypes | string>)}
     */
    key: Record<GetPatternKeys<TPattern>, ItemDataGivesTypes | string>;

    /**
     * ID del item a dar en concreto una vez la forma este correctamente.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    result: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * (Opcional) Lista de items requeridos para desbloquear la receta.
     * @type {?ItemDataUnlockTypes[]}
     */
    unlock?: ItemDataUnlockTypes[];
}

/**
 * Lista de parametros base para la creacion de una receta sin forma, de un item en concreto.
 * @interface RecipeShapeless
 * @author HaJuegos - 11-10-2026
 */
interface RecipeShapeless {
    /**
     * (Opcional) Personalmente no se que quiere decir esto; Pero, digamos que tienes varias recetas de un mismo item con diferentes valores asignados como tags o ids fijos. Entonces, este parametro lo que hace es ordenarlos de primero a ultimo en caso de que esto sea realmente necesario.
     * @type {?number}
     */
    priority?: number;

    /**
     * (Opcional) ID o nombre del grupo de items donde va ordenado esta receta internamente en el juego.
     * @type {?string}
     */
    group?: string;

    /**
     * Lista de bloques donde esta receta funcionara.
     * @type {(["all"] | TagsRecipesGlobalEnums[])}
     */
    tags: ["all"] | TagsRecipesGlobalEnums[];

    /**
     * Lista de items necesarios para la receta y creacion del item en cuestion. En este caso, si admite stacks de items.
     * @type {(string | ItemDataGivesTypes | MinecraftItemTypes)[]}
     */
    ingredients: (string | ItemDataGivesTypes | MinecraftItemTypes)[];

    /**
     * ID del item a dar en concreto una vez la forma este correctamente.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    result: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * (Opcional) Lista de items requeridos para desbloquear la receta.
     * @type {?ItemDataUnlockTypes[]}
     */
    unlock?: ItemDataUnlockTypes[];
}

/**
 * Lista de parametros base para la creacion de una receta con la mesa de smithing table, de un item en concreto.
 * @interface RecipeSmithing
 * @author HaJuegos - 11-10-2026
 */
interface RecipeSmithing {
    /**
     * ID o item de la plantilla requerida para crear el item.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    template: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * ID o item de la base requerida para crear el item.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    base: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * ID o item de la adiccion requerida para crear el item.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    addition: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * ID o item a entregar cuando el item esta listo de la receta.
     * @type {(ItemDataGivesTypes | string | MinecraftItemTypes)}
     */
    result: ItemDataGivesTypes | string | MinecraftItemTypes;

    /**
     * (Opcional) Lista de items requeridos para desbloquear la receta.
     * @type {?ItemDataUnlockTypes[]}
     */
    unlock?: ItemDataUnlockTypes[];
}