import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPAnimationScriptEntities, BPEntityEvents, BPEntityOptionalParams, BPPropertiesEntities, FormatVersionEntities } from "./EntitiesEnums";

export {
    BPEntitiesTemplateDef,
    BPEntitiesTemplateOverride,
    BPEntityComponent,
    BPEntityComponentsMap,
    BPEntityEventsMap,
    BPEntityGroupCompsList,
    LooseEvents,
    LoseDefinition,
    LoseOver,
    BPEntityDefaultEventsNames,
    GroupNames,
};

/**
 * Tipado generico para identificar un componente de una entidad.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityComponent = BehaviorEntityComponentBuilder<any, string>;

/**
 * Tipado generico para identificar un mapeo de componentes de entidades.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityComponentsMap = Record<string, BPEntityComponent>;

/**
 * Tipado generico que identificar la lista de componentes de entidades.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityGroupCompsList = Record<string, readonly BPEntityComponent[]>;

const BPEntityDefaultEventsNames = ["minecraft:entity_spawned", "minecraft:entity_transformed", "minecraft:entity_born", "minecraft:on_prime"] as const;

/**
 * Tipado general para los eventos por defecto de las entidades.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityDefaultEventNames = typeof BPEntityDefaultEventsNames[number];

/**
 * Tipado general para identificar los nombres de los grupos de componentes de una entidad.
 * @template GC Grupo general en cuestion.
 * @author HaJuegos - 01-10-2026
 */
type GroupNames<GC> = Extract<keyof GC, string>;

/**
 * Tipado general para establecer el mapeo de eventos de una entidad.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityEventsMap<G extends string = string> = {
    [K in BPEntityDefaultEventNames]?: BPEntityEvents<G>
} & Record<string, BPEntityEvents<G>>;

/**
 * Tipado general para la asignacion general para las rutas de los eventos de una entidad.
 * @template Ev Requiere de una plantilla generica de eventos.
 * @author HaJuegos - 30-09-2026
 */
type EventsPatch<Ev, G extends string = string> = {
    [K in keyof Ev | BPEntityDefaultEventNames]?: BPEntityEvents<G> | null
};

/**
 * Tipado del mapeo general de eventos para procesarlos y validarlos en tiempo real.
 * @author HaJuegos - 01-10-2026
 */
type LooseEvents = Record<string, BPEntityEvents>;

/**
 * Tipado general para identificar las rutas genericas de un componente por su ID.
 * @template T Template general del grupo general.
 * @author HaJuegos - 30-09-2026 
 */
type Patch<T> = {
    [K in keyof T]?: T[K] | null
};

/**
 * Tipado general para el mapeo de listas de grupos de componentes generales.
 * @template {readonly BPEntityComponent[]} L Plantilla readonly definidas en la entidad.
 * @author HaJuegos - 30-09-2026
 */
type ByID<L extends readonly BPEntityComponent[]> = {
    [T in L[number]as T["idComp"]]: T
};

/**
 * Tipado general para validar duplicados a base de una primera asignacion dentro de una entidad.
 * @template {readonly BPEntityComponent[]} C Componente generico de la entidad a validar.
 * @template {string} Seen Plantilla de asignacion de ID de componentes ya vistos.
 * @author HaJuegos - 31-09-2026 
 */
type FirstDuplicate<C extends readonly BPEntityComponent[], Seen extends string = never> =
    C extends readonly [infer H extends BPEntityComponent, ...infer R extends readonly BPEntityComponent[]]
    ? H["idComp"] extends Seen ? H['idComp'] : FirstDuplicate<R, Seen | H['idComp']>
    : never;

/**
 * Tipado general para validar duplicados a base de la primera asignacion de un componente dentro de una entidad.
 * @template {readonly BPEntityComponent[]} C Componente generico de la entidad a validar.
 * @template {string} Seen Componentes revisados para la validacion de duplicados.
 * @author HaJuegos - 31-09-2026
 */
type NoDupes<C extends readonly BPEntityComponent[], Seen extends string = never> =
    [FirstDuplicate<C, Seen>] extends [never]
    ? unknown
    : { __componenteDuplicado: FirstDuplicate<C, Seen>; };

/**
 * Tipado general para la validacion de duplicados en grupos de componentes de una entidad.
 * @template {BPEntityGroupCompsList} CG Grupo de componentes a validar.
 * @author HaJuegos - 31-09-2026 
 */
type GroupsDupes<CG extends BPEntityGroupCompsList> = { [K in keyof CG]: NoDupes<CG[K]> };

/**
 * Intefaz adiccional para la representacion amplia de la definicion de una entidad usada internamente. No conversa los tipos literales, solo es la validacion de la API antes de convertirla.
 * @interface LoseDefinition
 * @author HaJuegos - 01-10-2026
 */
interface LoseDefinition {
    id: string | MinecraftEntityTypes;
    formatVersion?: FormatVersionEntities | string;
    description?: BPEntityOptionalParams;
    animations?: Record<string, BPAnimationScriptEntities>;
    properties?: Record<string, BPPropertiesEntities>;
    componentsGroups: Record<string, readonly BPEntityComponent[]>;
    components: readonly BPEntityComponent[];
    events: LooseEvents;
}

/**
 * Interfaz adiccional para la representacion amplia de los cambios post edition de la entidad usada internamente. No conversa los tipos literales, solo es la validacion de la API antes de convertirla. Aplicando parches de forma dinamica.
 * @interface LoseOver
 * @author HaJuegos - 01-10-2026
 */
interface LoseOver {
    description?: Partial<BPEntityOptionalParams>;
    animations?: Record<string, BPAnimationScriptEntities>;
    properties?: Record<string, BPPropertiesEntities>;
    componentsGroups?: Record<string, Record<string, unknown> | null | undefined>;
    components?: Record<string, unknown>;
    events?: Record<string, unknown>;
    add?: {
        componentsGroups?: Record<string, readonly BPEntityComponent[]>;
        components?: readonly BPEntityComponent[];
        events?: LooseEvents;
    };
}

/**
 * Plantilla fija para la creacion de una entidad vanilla o custom en cuestion con sus respectivos parametros.
 * @interface BPEntitiesTemplateDef
 * @template {readonly BPEntityComponent[]} C Requiere una plantilla base de un mapeo de componentes.
 * @template {BPEntityGroupCompsList} GC Requiere una plantilla base de listas de grupos de componentes.
 * @template {BPEntityEventsMap} Ev Requiere una plantilla base de un mapeo de eventos de la entidad.
 * @author HaJuegos - 30-09-2026
 */
interface BPEntitiesTemplateDef<C extends readonly BPEntityComponent[], GC extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap<GroupNames<GC>>> {
    /**
     * ID de la entidad en cuestion. Debe ser siempre un identificador y despues el nombre. Por ej: 'ha:test'.
     * @type {(string | MinecraftEntityTypes)}
     */
    id: string | MinecraftEntityTypes;

    /**
     * (Opcional) La version de formato a usar para la creacion de la entidad. Por defecto, siempre sera el mas reciente.
     * @type {?(FormatVersionEntities | string)}
     */
    formatVersion?: FormatVersionEntities | string;

    /**
     * (Opcional) Los parametros iniciales para registra dicha entidad al juego. Por defecto, no tendra alguno definido mas haya de isSummon y isSpawneable.
     * @type {?BPEntityOptionalParams}
     */
    description?: BPEntityOptionalParams;

    /**
     * (Opcional) Animaciones y scripts iniciales de la entidad a ejecutar. Por defecto, no tendra ninguno definido.
     * @type {?Record<string, BPAnimationScriptEntities>}
     */
    animations?: Record<string, BPAnimationScriptEntities>;

    /**
     * (Opcional) Propiedades dinamicas de la entidad en cuestion. Por defecto, no tendra ninguno.
     * @type {?Record<string, BPPropertiesEntities>}
     */
    properties?: Record<string, BPPropertiesEntities>;

    /**
     * (Opcional) Lista de grupos de componentes dinamicos de la entidad en cuestion. Por defecto, no tendra ninguno.
     * @type {GC}
     */
    componentsGroups: GC & GroupsDupes<GC>;

    /**
     * (Opcional) Mapeo general de los componentes fijos de la entidad en cuestion. Por defecto, no tendra ninguno.
     * @type {C}
     */
    components: C & NoDupes<C>;

    /**
     * (Opcional) Mapeo general de los eventos de la entidad en cuestion. Por defecto, no tendra ninguno.
     * @type {Ev}
     */
    events: Ev;
}

/**
 * Plantilla fija que sobreescribre los valores definidos en la plantilla base de una entidad vanilla o custom, con sus respectivos parametros.
 * @interface BPEntitiesTemplateOverride
 * @template {readonly BPEntityComponent[]} C Requiere una plantilla base de un mapeo de componentes.
 * @template {BPEntityGroupCompsList} GC Requiere una plantilla base de listas de grupos de componentes.
 * @template {BPEntityEventsMap} Ev Requiere una plantilla base de un mapeo de eventos de la entidad.
 * @author HaJuegos - 30-09-2026
 */
interface BPEntitiesTemplateOverride<C extends readonly BPEntityComponent[], GC extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap<GroupNames<GC>>, AC extends readonly BPEntityComponent[] = [], AG extends BPEntityGroupCompsList = {}> {
    /**
     * (Opcional) Mapeo de parametros adiccionales iniciales, que van a sobreescribir los valores definidos de la plantilla base.
     * @type {?Partial<BPEntityOptionalParams>}
     */
    description?: Partial<BPEntityOptionalParams>;

    /**
     * (Opcional) Mapeo de animaciones adiccionales iniciales, que van a sobreescribir los valores definidos en la plantilla base.
     * @type {?Record<string, BPAnimationScriptEntities>}
     */
    animations?: Record<string, BPAnimationScriptEntities>;

    /**
     * (Opcional) Mapeo de propiedades dinamicas iniciales, que van a sobreescribir los valores definidos en la plantilla base.
     * @type {?Record<string, BPPropertiesEntities>}
     */
    properties?: Record<string, BPPropertiesEntities>;

    /**
     * (Opcional) Mapeo de los grupos de componentes dinamicos iniciales, que van a sobreescribir los valores definidos en la plantilla base.
     * @type {?({ [K in keyof GC]?: Patch<ByID<GC[K]>> | null })}
     */
    componentsGroups?: { [K in keyof GC]?: Patch<ByID<GC[K]>> | null };

    /**
     * (Opcional) Mapeo de los componentes fijos iniciales, que van a sobreescribir los valores definidos en la plantilla base.
     * @type {?Patch<ByID<C>>}
     */
    components?: Patch<ByID<C>>;

    /**
     * (Opcional) Mapeo de los eventos iniciales, que van a sobreescribir los valores definidos en la plantilla base.
     * @type {?EventsPatch<Ev>}
     */
    events?: EventsPatch<Ev, NoInfer<GroupNames<GC> | GroupNames<AG>>>;

    /**
     * (Opcional) Parametro adiccional que añade nuevos valores a la plantilla base en vez de sobresescribirla.
     * @type {?{ componentsGroups?: Record<string, BPEntityComponent[]>; components?: BPEntityComponent[]; events?: BPEntityEventsMap; }}
     */
    add?: {
        /**
         * (Opcional) Lista de grupos de componentes dinamicos a añadir a la plantilla base.
         * @type {?Record<string, BPEntityComponent[]>}
         */
        componentsGroups?: AG & GroupsDupes<AG>;

        /**
         * (Opcional) Lista de componentes fijos a añadir a la plantilla base.
         * @type {?BPEntityComponent[]}
         */
        components?: AC & NoDupes<AC, Extract<keyof ByID<C>, string>>;

        /**
         * (Opcional) Lista de eventos a añadir a la plantilla base.
         * @type {?BPEntityEventsMap}
         */
        events?: BPEntityEventsMap<NoInfer<GroupNames<GC> | GroupNames<AG>>>;
    };
}