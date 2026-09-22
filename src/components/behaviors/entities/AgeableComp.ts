import * as vanilla from "@minecraft/vanilla-data";

import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Lista de parametros del componente en cuestion.
 * @interface AgeableData
 * @extends {BPComponent}
 * @author HaJuegos - 21-09-2026
 */
interface AgeableData extends BPComponent {
    /**
     * Duracion maxima para que la entidad cresca de forma natural. Por defecto sera el valor 1200.
     * @type {number}
     */
    duration: number;

    /**
     * (Opcional) Filtros que se deben cumplir para poder interactuar con esta entidad.
     * @type {?EntityFilter}
     */
    interactFilters?: EntityFilter;

    /**
     * (Opcional) Eventos que se disparan cuando la entidad crece. Con filtros.
     * @type {?EntityFilterTrigger}
     */
    onGrowUp?: EntityFilterTrigger;

    /**
     * (Opcional) Eventos que se disparan cuando se detiene el crecimiento de la entidad. Con filtros.
     * @type {?EntityFilterTrigger}
     */
    onPauseGrow?: EntityFilterTrigger;

    /**
     * (Opcional) Eventos que se disparan cuando se reanuda el crecimiento de la entidad. Con filtros.
     * @type {?EntityFilterTrigger}
     */
    onResetGrow?: EntityFilterTrigger;

    /**
     * (Opcional) Item o lista de items para que la entidad aumente su velocidad de crecimiento.
     * @type {?(vanilla.MinecraftItemTypes[] | string[])}
     */
    feedItemsToGrow?: vanilla.MinecraftItemTypes[] | string[];

    /**
     * (Opcional) Item o lista de items a dropear cuando la entidad crece.
     * @type {?(vanilla.MinecraftItemTypes[] | string[])}
     */
    dropItemsOnGrow?: vanilla.MinecraftItemTypes[] | string[];

    /**
     * (Opcional) Item o lista de items para que la entidad detenga el crecimiento.
     * @type {?(vanilla.MinecraftItemTypes[] | string[])}
     */
    pauseGrowItems?: vanilla.MinecraftItemTypes[] | string[];

    /**
     * (Opcional) Item o lista de items para detener el crecimiento de la entidad.
     * @type {?(vanilla.MinecraftItemTypes[] | string[])}
     */
    resetGlowItems?: vanilla.MinecraftItemTypes[] | string[];
}

export class SetAgeable extends BehaviorEntityComponentBuilder<AgeableData> {
    /**
     * Componente que añade un timer a la entidad para que esta misma pueda crecer.
     * @param {AgeableData} params Parametros del componente.
     * @author HaJuegos - 21-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AgeableData) {
        super("minecraft:ageable", {
            duration: params.duration ?? 1200,
            interactFilters: params.interactFilters,
            growUp: params.onGrowUp,
            pauseGrowth: params.onPauseGrow,
            resetGrowth: params.onResetGrow,
            dropItems: params.dropItemsOnGrow,
            feedItems: params.feedItemsToGrow,
            pauseGrowthItems: params.pauseGrowItems,
            resetGrowthItems: params.resetGlowItems
        });
    }
}