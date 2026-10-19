import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { CategoryItemsList, GroupItemsList } from "../items/ItemsTemplate";
import { MoLangValue } from "../../MoLang";
import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPBlockComponent } from "./BlockCompTemplate";
import { FinalBlockBulderTemplate } from "../../../builders/behaviors/blocks/BlockTemplateBuilder";

export {
    StatesListTypes,
    MenuCategoryParams,
    TraitsListTypes,
    PermutationsGroupsParams,
    PermOverride,

    BPBlockDefinition,
    BPBlockOverride,
    BPBlockOverrideInstance,
};

/**
 * Tipado general para la definicion general de la plantilla base de un bloque.
 * @interface BPBlockDefinition
 * @author HaJuegos - 18-10-2026
 */
interface BPBlockDefinition<
    Perms extends readonly PermutationsGroupsParams[] = readonly PermutationsGroupsParams[]
> {
    /**
     * ID del bloque a crear en cuestion.
     * @type {string}
     */
    idBlock: string;

    /**
     * (Opcional) Parametros para indicar en que sitio del inventario pertenece el bloque.
     * @type {?MenuCategoryParams}
     */
    menuCategory?: MenuCategoryParams;

    /**
     * (Opcional) Parametros para indicar los estados que tendra el bloque.
     * @type {?StatesListTypes}
     */
    setStatesBlock?: StatesListTypes;

    /**
     * (Opcional) Parametros para indicar los estados o rasgos vanillas que tomara este bloque.
     * @type {?TraitsListTypes}
     */
    setTraitsBlock?: TraitsListTypes;

    /**
     * (Opcional) Lista de grupos de componentes dinamicos que se activara por una condicion MoLang del bloque.
     * @type {?readonly PermutationsGroupsParams[]}
     */
    permutations?: Perms;

    /**
     * (Opcional) Lista de componentes fijos del bloque.
     * @type {readonly BPBlockComponent[]}
     */
    components: readonly BPBlockComponent[];
}

/**
 * Tipado general para las instancias post-edicion a la plantilla base con sus respectivos parametros y tipos de datos
 * @interface BPBlockOverrideInstance
 * @template {BPBlockDefinition} BaseDef Definicion base de la plantilla inicial.
 * @template {readonly BPBlockComponent[]} Comps Lista de componentes definidos en la plantilla inicial.
 * @author HaJuegos - 18-10-2026
 */
interface BPBlockOverrideInstance<
    BaseDef extends BPBlockDefinition,
    Comps extends readonly BPBlockComponent[]
> {
    /**
     * (Opcional) Funcion auxiliar que permite la edicion post-edicion de la plantilla base fija.
     * @param {?BPBlockOverride<BaseDef, Comps>} [over] (Opcional) Datos modificados a la plantilla base.
     * @returns {FinalBlockBulderTemplate} Devuelve la clase final lista para la exportacion final en formato JSON.
     * @author HaJuegos - 18-10-2026
     */
    (over?: BPBlockOverride<BaseDef, Comps>): FinalBlockBulderTemplate;
}

/**
 * Tipado general que bloquea y obtiene los tipados generales de componentes fijos de la plantilla base.
 * @template Base Definicion base a considerar.
 * @template Allowed Datos permitidos que no estan bloqueados.
 * @author HaJuegos - 18-10-2026
 */
type OverrideKeys<Base, Allowed> = {
    [K in keyof Base]?: K extends keyof Allowed ? Allowed[K] : never;
};

/**
 * Tipado general para obtener los datos fijados de las permutaciones de la plantilla base y bloquear cualquier salida de la plantilla base a modificar. 
 * @template P Permutaciones a considerar.
 * @author HaJuegos - 19-10-2026
 */
type PermOverride<P> = {
    condition?: string;
    components?: P extends { components: readonly (infer C extends BPBlockComponent)[]; }
    ? { [K in C['idComp'] & string]?: Extract<C, { idComp: K; }> }
    : never;
};

/**
 * Tipado obligatorio para permitir las ediciones de las permutaciones definidas de la plantilla base.
 * @template Perms Permutaciones definidas en la plantilla base.
 * @author HaJuegos - 19-10-2026
 */
type ChangePermutations<Perms> = Perms extends readonly unknown[] ? { [I in keyof Perms]?: PermOverride<Perms[I]> | undefined } : never;

/**
 * Tipado general para la estructura fija despues de definir la plantilla base para permitir la post-edicion.
 * @template {BPBlockDefinition} BaseDef Definiciones puestas en la plantilla base.
 * @template {readonly BPBlockComponent[]} Comps Lista de componentes asignados en la plantilla base.
 * @author HaJuegos - 18-10-2026
 */
type BPBlockOverride<
    BaseDef extends BPBlockDefinition = BPBlockDefinition,
    Comps extends readonly BPBlockComponent[] = BaseDef['components'] extends readonly BPBlockComponent[] ? BaseDef['components'] : readonly BPBlockComponent[]
> = {
    /**
     * Si se establece, la plantilla base se limpiara completamente dejando un arhivo vacio listo para edicion.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Definiciones adiccionales que se agregan a la plantilla base fija.
     * @type {?{menuCategory?: MenuCategoryParams; statesBlock?: StatesListTypes; traitsBlock?: TraitsListTypes; permutations?: readonly PermutationsGroupsParams[]; components: readonly BPBlockComponent[]; }}
     */
    add?: {
        /**
         * (Opcional) Parametros para indicar en que sitio del inventario pertenece el bloque.
         * @type {?MenuCategoryParams}
         */
        menuCategory?: MenuCategoryParams;

        /**
         * (Opcional) Parametros para indicar los estados que tendra el bloque.
         * @type {?StatesListTypes}
         */
        statesBlock?: StatesListTypes;

        /**
         * (Opcional) Parametros para indicar los estados o rasgos vanillas que tomara este bloque.
         * @type {?TraitsListTypes}
         */
        traitsBlock?: TraitsListTypes;

        /**
         * (Opcional) Lista de grupos de componentes dinamicos que se activara por una condicion MoLang del bloque.
         * @type {?readonly PermutationsGroupsParams[]}
         */
        permutations?: readonly PermutationsGroupsParams[];

        /**
         * (Opcional) Lista de componentes fijos del bloque.
         * @type {readonly BPBlockComponent[]}
         * */
        components: readonly BPBlockComponent[];
    };
} | {
    /**
     * (Opcional) Si se establece, la plantilla base se limpiara completamente dejando un arhivo vacio listo para edicion.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Datos a modificar de los parametros de donde se va a guardar el item en el menu de inventario.
     * @type {?Partial<MenuCategoryParams>}
     */
    changeMenuCategory?: Partial<MenuCategoryParams>;

    /**
     * (Opcional) Datos a modificar sobre los estados del bloque definidos en la plantilla base.
     * @type {?OverrideKeys<NonNullable<BaseDef['setStatesBlock']>, StatesListTypes>}
     */
    changeStateBlocks?: OverrideKeys<NonNullable<BaseDef['setStatesBlock']>, StatesListTypes>;

    /**
     * (Opcional) Datos a modificar sobre los rasgos o estados vanillas del bloque definidos en la plantilla base.
     * @type {?OverrideKeys<NonNullable<BaseDef['setTraitsBlock']>, TraitsListTypes>}
     */
    changeTraitsBlocks?: OverrideKeys<NonNullable<BaseDef['setTraitsBlock']>, TraitsListTypes>;

    /**
     * (Opcional) Datos a modificar sobre los grupos de componentes del bloque definidos en la plantilla base.
     * @type {?BaseDef['permutations'] extends readonly (infer P extends PermutationsGroupsParams)[] ? readonly (Omit<DeepPartial<P>, 'condition'> & {condition: string;})[]: never}
     */
    changePermutations?: ChangePermutations<NonNullable<BaseDef['permutations']>>;

    /**
     * (Opcional) Datos a modificar sobre los componentes fijos definidos en la plantilla base del bloque.
     * @type {?Comps extends readonly [] ? Record<string, BPBlockComponent> : {[K in Comps[number]['idComp'] & string]?: Extract<Comps[number], { idComp: K; }>;}}
     */
    changeComponents?: Comps extends readonly [] ? Record<string, BPBlockComponent> : {
        [K in Comps[number]['idComp'] & string]?: Extract<Comps[number], { idComp: K; }>;
    };

    /**
     * (Opcional) Definiciones adiccionales que se agregan a la plantilla base fija.
     * @type {?{statesBlock?: StatesListTypes; traitsBlock?: TraitsListTypes; permutations?: readonly PermutationsGroupsParams[]; components: readonly BPBlockComponent[];}}
     */
    add?: {
        /**
         * (Opcional) Parametros para indicar los estados que tendra el bloque.
         * @type {?StatesListTypes}
         */
        statesBlock?: StatesListTypes;

        /**
         * (Opcional) Parametros para indicar los estados o rasgos vanillas que tomara este bloque.
         * @type {?TraitsListTypes}
         */
        traitsBlock?: TraitsListTypes;

        /**
         * (Opcional) Lista de grupos de componentes dinamicos que se activara por una condicion MoLang del bloque.
         * @type {?readonly PermutationsGroupsParams[]}
         */
        permutations?: readonly PermutationsGroupsParams[];

        /**
         * (Opcional) Lista de componentes fijos del bloque.
         * @type {readonly BPBlockComponent[]}
         * */
        components: readonly BPBlockComponent[];
    };
};

/**
 * Tipados permitidos para la creacion de un nuevo state en un bloque.
 * @author HaJuegos - 18-10-2026
 */
type StateRecordValues = readonly string[] | readonly boolean[] | readonly number[] | {
    readonly values: {
        readonly min: number;
        readonly max: number;
    };
};

/**
 * Tipado general para la creacion de nuevos estados en un bloque.
 * @interface StatesListTypes
 * @author HaJuegos - 18-10-2026
 */
interface StatesListTypes {
    [key: string]: StateRecordValues;
}

/**
 * Tipado general para la asignacion de la ubicacion del bloque en la interfaz del inventario.
 * @interface MenuCategoryParams
 * @author HaJuegos - 18-10-2026
 */
interface MenuCategoryParams {
    /**
     * (Opcional) Categoria de items donde ira el bloque.
     * @type {?CategoryItemsList}
     */
    category?: CategoryItemsList;

    /**
     * (Opcional) Grupo en donde pertenecera el bloque.
     * @type {?GroupItemsList}
     */
    group?: GroupItemsList;
}

/**
 * Tipado fijo de los rasgos vanillas permitidos para poner en un bloque.
 * @interface TraitsRegistry
 * @author HaJuegos - 18-10-2026
 */
interface TraitsRegistry {
    readonly "minecraft:connection"?: ConnectionTraitParams;
    readonly "minecraft:multi_block"?: MultiBlockTraitParams;
    readonly "minecraft:placement_direction"?: PlacementDirectionTraitParams;
    readonly "minecraft:placement_position"?: PlacementPositionTraitParams;
}

type CardinalConnectionTypes = "minecraft:cardinal_connections";

interface ConnectionTraitParams {
    readonly enabledStates: readonly CardinalConnectionTypes[];
}

type MultiBlockPartTypes = "minecraft:multi_block_part";
type DirectionMultiBlockTypes = "down" | "up" | "north" | "south" | "west" | "east";
type MaxPartsNums = 2 | 3 | 4;

interface MultiBlockTraitParams {
    readonly enabledStates: MultiBlockPartTypes[];
    readonly direction?: DirectionMultiBlockTypes;
    readonly parts?: MaxPartsNums;
}

type EnabledStatesPlacementDireTypes = "minecraft:cardinal_direction" | "minecraft:facing_direction" | "minecraft:corner_and_cardinal_direction" | "minecraft:sixteen_way_rotation";
type RotationsNumbersTypes = 0 | 90 | 180 | 270 | 360;
type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

interface PlacementDirectionTraitParams {
    readonly enabledStates: EnabledStatesPlacementDireTypes[];
    readonly blocksToCornerWith?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    readonly yRotationOffset?: RotationsNumbersTypes;
}

type EnabledStatesPlacementsPosTypes = "minecraft:block_face" | "minecraft:vertical_half";

interface PlacementPositionTraitParams {
    readonly enabledStates: EnabledStatesPlacementsPosTypes[];
};

type TraitsListTypes = {
    [K in keyof TraitsRegistry]?: TraitsRegistry[K]
};

/**
 * Tipado general para la asignacion de grupos de componentes dinamicos del bloque.
 * @interface PermutationsGroupsParams
 * @author HaJuegos - 18-10-2026
 */
interface PermutationsGroupsParams {
    /**
     * Condicion MoLang para poder activar el grupo de componentes del bloque.
     * @type {(string | MoLangValue)}
     */
    condition: string | MoLangValue;

    /**
     * Lista de componentes a asignar cuando se active este grupo.
     * @type {BehaviorBlockComponentBuilder<any>[]}
     */
    components: BehaviorBlockComponentBuilder<any>[];
}