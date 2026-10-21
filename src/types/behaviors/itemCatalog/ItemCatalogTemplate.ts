import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { FinalItemCatalogTemplateBuilder } from "../../../builders/behaviors/itemCatalog/ItemCatalogTemplateBuilder";

export {
    CategoryParams,

    BPItemCatalogDefinition,
    BPItemCatalogOverride,
    BPItemCatalogTemplateInstance,
};

/**
 * Tipado general de la lista de categorias permitidas en un grupo de item catalog.
 * @author HaJuegos - 21-10-2026
 */
type CategoryNamesTypes = "construction" | "equipment" | "items" | "nature";

/**
 * Tipado general para la creacion de un nuevo item catalog en su plantilla base.
 * @interface BPItemCatalogDefinition
 * @author HaJuegos - 21-10-2026
 */
interface BPItemCatalogDefinition {
    /**
     * Lista de categorias a añadir en este item catalog de la plantilla base.
     * @type {readonly CategoryParams[]}
     * @readonly
     */
    readonly categories: readonly CategoryParams[];
}

/**
 * Tipado auxiliar para la instancia de de la clase y sus tipados post-edicion.
 * @interface BPItemCatalogTemplateInstance
 * @template {BPItemCatalogDefinition} Def Plantilla base a considerar sus parametros. 
 * @author HaJuegos - 21-10-2026
 */
interface BPItemCatalogTemplateInstance<
    Def extends BPItemCatalogDefinition = BPItemCatalogDefinition
> {
    /**
     * Funcion auxiliar que permite las ediciones post-edicion de la plantilla fija definida.
     * @param {?BPItemCatalogOverride<Def>} [over] (Opcional) Los datos asignados a la post-edicion.
     * @returns {FinalItemCatalogTemplateBuilder} Devuele al clase final lista para la exportacion final estructurado en un JSON formado.
     * @author HaJuegos - 21-10-2026
     */
    (over?: BPItemCatalogOverride<Def>): FinalItemCatalogTemplateBuilder;
}

/**
 * Tipado auxiliar que abre literales sueltos a su primitivo base pero conversa uniones de literales y strings ya abiertos.
 * @template T Tipado literales sueltos a considerar.
 * @template U Uniones literales abiertos a considerar.
 * @author HaJuegos - 21-10-2026
 */
type Widen<T, U = T> =
    string extends T ? T :
    T extends string ? ([U] extends [T] ? string : T) :
    T extends number ? ([U] extends [T] ? number : T) :
    T extends boolean ? boolean :
    T;

/**
 * Tipado auxiliar que forma las hojas editables y arrays pero no elimina ni agrega claves para poder cambiarlo entre las categorias validas.
 * @template T Todos los campos requeridos de la plantilla base.
 * @author HaJuegos - 21-10-2026
 */
type Editable<T> =
    T extends Function ? T :
    T extends readonly (infer U)[] ? readonly Editable<U>[] :
    T extends object ? { [K in keyof T]: K extends "categoryName" ? CategoryNamesTypes : Editable<T[K]> } :
    Widen<T>;

/**
 * Tipado auxiliar que tupla los ovverides del mismo largo maximo de la base para los arrays, si existen para tener la forma completa.
 * @template {readonly unknown[]} T Base de los arrays a considerar.
 * @author HaJuegos - 21-10-2026
 */
type Overrides<T extends readonly unknown[]> = {
    readonly [K in keyof T]?: Editable<T[K]>;
};

/**
 * Tipado general con los parametros principales para las ediciones post-edicion de la plantilla base.
 * @template {BPItemCatalogDefinition} Def Definiciones de la plantilla base a considerar.
 * @author HaJuegos - 21-10-2026
 */
type BPItemCatalogOverride<
    Def extends BPItemCatalogDefinition = BPItemCatalogDefinition
> = {
    /**
     * Si se define, limpia por completo la plantilla base para dejar un archivo completamente en blanco a disposicion de ediciones.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Datos adiccionales a añadir en la plantilla base sin modificar nada.
     * @type {?{ readonly categories?: readonly CategoryParams[];}}
     */
    add?: {
        readonly categories?: readonly CategoryParams[];
    };
} | {
    /**
     * (Opcional) Si se define, limpia por completo la plantilla base para dejar un archivo completamente en blanco a disposicion de ediciones.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Categorias implementadas en la plantilla base a modificar.
     * @type {?Overrides<Def["categories"]>}
     */
    modifiedCategories?: Overrides<Def["categories"]>;

    /**
     * (Opcional) Datos adiccionales a añadir en la plantilla base sin modificar nada.
     * @type {?{ readonly categories?: readonly CategoryParams[];}}
     */
    add?: {
        readonly categories?: readonly CategoryParams[];
    };
};

/**
 * Parametros principales para la creacion de una nueva categoria en un item catalog.
 * @interface CategoryParams
 * @author HaJuegos - 21-10-2026
 */
interface CategoryParams {
    /**
     * Categoria donde se establece este item catalog.
     * @type {CategoryNamesTypes}
     */
    categoryName: CategoryNamesTypes;

    /**
     * Lista de categorias en concreto a definir en este item catalog.
     * @type {GroupItemsParams[]}
     */
    groups: GroupItemsParams[];
}

/**
 * Parametros principales para la creacion de un grupo en una nueva categoria de un item catalog.
 * @interface GroupItemsParams
 * @author HaJuegos - 21-10-2026
 */
interface GroupItemsParams {
    /**
     * Datos principales para identificar este grupo en concreto a crear.
     * @type {IDGroupDataParams}
     */
    groupIdentifier: IDGroupDataParams;

    /**
     * Lista de items en concreto que perteneceran a este nuevo grupo a crear.
     * @type {(string | MinecraftItemTypes)[]}
     */
    items: (string | MinecraftItemTypes)[];
}

/**
 * Parametros principales para asignar las identificaciones de un nuevo grupo de una categoria item catalog.
 * @interface IDGroupDataParams
 * @author HaJuegos - 21-10-2026
 */
interface IDGroupDataParams {
    /**
     * ID o RawMessage o nombre con el cual se identificara este nuevo grupo.
     * @type {string}
     */
    name: string;

    /**
     * Item que sera la cara principal del grupo a crear.
     * @type {(string | MinecraftItemTypes)}
     */
    icon: string | MinecraftItemTypes;
}