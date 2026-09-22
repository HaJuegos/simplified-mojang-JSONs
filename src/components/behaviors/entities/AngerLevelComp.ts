import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";
import { MoLang } from "../../../utils/MoLang";

/**
 * Lista de componentes fijos del componente.
 * @interface AngelevelData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AngelevelData extends BPComponent {
    /**
     * El nivel de ira que disminuira con el tiempo. Este reduce el nivel de ira hacia todas las molestias.
     * @type {number}
     */
    angerDecrementInterval: number;

    /**
     * El aumento de ira que se aplica al umbral de ira cuando la entidad se enoja.
     * @type {number}
     */
    angryBoost: number;

    /**
     * Umbral que define cuando se considera que la entidad esta enojada por una molestia.
     * @type {number}
     */
    angryThreshold: number;

    /**
     * Nivel predeterminado de molestia para cualquier molestia en particular. Aqui se especifica cuanto se eleva el nivel de enojo ante cada provocacion.
     * @type {number}
     */
    defaultAnnoyingness: number;

    /**
     * El nivel predeterminado de molestia que causan los proyectiles. Se especifica cuanto se eleva el nivel de enojo con cada provocacion.
     * @type {number}
     */
    defaultProjectileAnnoyingness: number;

    /**
     * El nivel maximo de ira que se puede alcanzar. Se aplica a cualquier molestia.
     * @type {number}
     */
    maxAnger: number;

    /**
     * Filtro de interferencias o de entidades que hara enojar la entidad.
     * @type {EntityFilter}
     */
    nuisanceFilter: EntityFilter;

    /**
     * Lista de sonidos con condiciones que se ejecutan por nivel de enojo.
     * @type {?IncreaseEntitySounds[]}
     */
    onIncreaseSounds?: IncreaseEntitySounds[];

    /**
     * Define si la entidad debe dejar de tener como target a un enemigo si este cae por debajo del umbral de enojo.
     * @type {boolean}
     */
    removeTargetsBelowAngryThreshold: boolean;
}

/**
 * Parametros fijos para cuando se asigna una lista de sonidos.
 * @interface IncreaseEntitySounds
 * @author HaJuegos - 22-09-2026
 */
interface IncreaseEntitySounds {
    /**
     * ID del sonido ambiental en concreto.
     * @type {string}
     */
    soundID: string;

    /**
     * Condicion {@link MoLang} en concreto para ejecutar el sonido.
     * @type {MoLangValue}
     */
    condition: MoLangValue;
}

export class SetAngelevel extends BehaviorEntityComponentBuilder<AngelevelData> {
    /**
     * Componente que permite que la entidad lleve registro de enojo hacia una serie de molestias.
     * @param {AngelevelData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AngelevelData) {
        const isEvnsArray = Array.isArray(params.onIncreaseSounds);

        super("minecraft:anger_level", {
            angerDecrementInterval: params.angerDecrementInterval ?? 1,
            angryBoost: params.angryBoost ?? 20,
            angryThreshold: params.angryThreshold ?? 80,
            defaultAnnoyingness: params.defaultAnnoyingness ?? 0,
            defaultProjectileAnnoyingness: params.defaultProjectileAnnoyingness ?? 0,
            maxAnger: params.maxAnger ?? 100,
            nuisanceFilter: params.nuisanceFilter,
            onIncreaseSounds: isEvnsArray ? undefined : params.onIncreaseSounds,
            removeTargetsBelowAngryThreshold: params.removeTargetsBelowAngryThreshold ?? true,
        });
    }
}