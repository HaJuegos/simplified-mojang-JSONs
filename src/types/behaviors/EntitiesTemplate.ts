import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../builders/behaviors/EntityCompsBuilder";
import { BPAnimationScriptEntities, BPEntityEvents, BPEntityOptionalParams, BPPropertiesEntities, FormatVersionEntities } from "./EntitiesEnums";

export {
    BPEntitiesTemplateDef,
    BPEntitiesTemplateOverride,
    BPEntityComponent,
    BPEntityComponentsMap,
    BPEntityEventsMap,
    BPEntityGroupCompsList,
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

/**
 * Tipado general para los eventos por defecto de las entidades.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityDefaultEventNames = "minecraft:entity_spawned" | "minecraft:entity_transformed" | "minecraft:entity_born" | "minecraft:on_prime";

/**
 * Tipado general para establecer el mapeo de eventos de una entidad.
 * @author HaJuegos - 30-09-2026
 */
type BPEntityEventsMap = { [K in BPEntityDefaultEventNames]?: BPEntityEvents } & Record<string, BPEntityEvents>;

/**
 * Tipado general para la asignacion general para las rutas de los eventos de una entidad.
 * @template Ev Requiere de una plantilla generica de eventos.
 * @author HaJuegos - 30-09-2026
 */
type EventsPatch<Ev> = { [K in keyof Ev | BPEntityDefaultEventNames]?: BPEntityEvents | null };

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
 * Plantilla fija para la creacion de una entidad vanilla o custom en cuestion con sus respectivos parametros.
 * @interface BPEntitiesTemplateDef
 * @template {readonly BPEntityComponent[]} C Requiere una plantilla base de un mapeo de componentes.
 * @template {BPEntityGroupCompsList} GC Requiere una plantilla base de listas de grupos de componentes.
 * @template {BPEntityEventsMap} Ev Requiere una plantilla base de un mapeo de eventos de la entidad.
 * @author HaJuegos - 30-09-2026
 */
interface BPEntitiesTemplateDef<C extends readonly BPEntityComponent[], GC extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap> {
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
    componentsGroups: GC;

    /**
     * (Opcional) Mapeo general de los componentes fijos de la entidad en cuestion. Por defecto, no tendra ninguno.
     * @type {C}
     */
    components: C;

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
interface BPEntitiesTemplateOverride<C extends readonly BPEntityComponent[], GC extends BPEntityGroupCompsList, Ev extends BPEntityEventsMap> {
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
    events?: EventsPatch<Ev>;

    /**
     * (Opcional) Parametro adiccional que añade nuevos valores a la plantilla base en vez de sobresescribirla.
     * @type {?{ componentsGroups?: Record<string, BPEntityComponent[]>; components?: BPEntityComponent[]; events?: BPEntityEventsMap; }}
     */
    add?: {
        /**
         * (Opcional) Lista de grupos de componentes dinamicos a añadir a la plantilla base.
         * @type {?Record<string, BPEntityComponent[]>}
         */
        componentsGroups?: Record<string, BPEntityComponent[]>;

        /**
         * (Opcional) Lista de componentes fijos a añadir a la plantilla base.
         * @type {?BPEntityComponent[]}
         */
        components?: BPEntityComponent[];

        /**
         * (Opcional) Lista de eventos a añadir a la plantilla base.
         * @type {?BPEntityEventsMap}
         */
        events?: BPEntityEventsMap;
    };
}