import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

type SoundIntervalOption = [number, number] | { range_min: number; range_max: number; };

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AngryData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AngryData extends BPComponent {
    /**
     * Referencia del sonido o ID del sonido.
     * @type {string}
     */
    angrySoundId: string;

    /**
     * Si es true. otras entidades iguales dentro del rango tambien se enojaran.
     * @type {boolean}
     */
    broadcastAnger: boolean;

    /**
     * Si es true. otras entidades iguales dentro del rango tambien se enojaran cada vez que este mob ataque.
     * @type {boolean}
     */
    broadcastAngerOnAttack: boolean;

    /**
     * Si es true. otras entidades iguales dentro del rango tambien se enojaran cada vez que este mob sea atacado.
     * @type {boolean}
     */
    broadcastAngerOnBeingAttacked: boolean;

    /**
     * (Opcional) Si es true. otras entidades iguales dentro del rango tambien se enojaran cuando muera.
     * @type {boolean}
     */
    broadcastAngerWhenDying?: boolean;

    /**
     * (Opcional) Filtros condicionales para poder trasmitir su enojo a las entidades iguales.
     * @type {EntityFilter}
     */
    broadcastFilters?: EntityFilter;

    /**
     * Rango en bloques para trasmitir su enojo a otras entidades iguales.
     * @type {number}
     */
    broadcastRange: number;

    /**
     * Lista de familias a las cuales les va a afectar el enojo de esta entidad.
     * @type {string[]}
     */
    broadcastTargets: string[];

    /**
     * (Opcional) Filtros condicionales y eventos a disparar cuando el temporizador termina y el mob entra en modo calma.
     * @type {EntityFilterTrigger}
     */
    calmEvent?: EntityFilterTrigger;

    /**
     * Duracion en segundos del timer de enojo de la entidad.
     * @type {number}
     */
    duration: number;

    /**
     * Variacion en segundos que suma a la duracion [-delta, delta]. Osea, un timer basado en deltaTime.
     * @type {number}
     */
    durationDelta: number;

    /**
     * (Opcional) Los respectivos filtros condicionales para que la entidad se pueda enojar.
     * @type {EntityFilter}
     */
    filters?: EntityFilter;

    /**
     * (Opcional) El tiempo en segundos que se debe esperar al azar antes de reproducir el sonido nuevamente. Con un rango minimo y maximo.
     * @type {SoundIntervalOption}
     */
    soundInterval?: SoundIntervalOption;
}

export class SetAngry extends BehaviorEntityComponentBuilder<Record<string, unknown>> {
    /**
     * Componente que define el estado de "enojado" de la entidad mediante un temporizador con sus respetivos parametros.
     * @param {AngryData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AngryData) {
        let parsedSoundInterval: unknown = undefined;

        if (params.soundInterval) {
            if (Array.isArray(params.soundInterval)) {
                parsedSoundInterval = params.soundInterval;
            } else if ("range_min" in params.soundInterval && "range_max" in params.soundInterval) {
                parsedSoundInterval = {
                    range_min: params.soundInterval.range_min,
                    range_max: params.soundInterval.range_max
                };
            }
        }

        super("minecraft:angry", {
            angrySound: params.angrySoundId ?? '',
            broadcastAnger: params.broadcastAnger ?? false,
            broadcastAngerOnAttack: params.broadcastAngerOnAttack ?? false,
            broadcastAngerOnBeingAttacked: params.broadcastAngerOnBeingAttacked ?? false,
            broadcastAngerWhenDying: params.broadcastAngerWhenDying,
            broadcastFilters: params.broadcastFilters,
            broadcastRange: params.broadcastRange ?? 20,
            broadcastTargets: params.broadcastTargets ?? [],
            calmEvent: params.calmEvent,
            duration: params.duration ?? 25,
            durationDelta: params.durationDelta ?? 0,
            filters: params.filters,
            soundInterval: parsedSoundInterval
        });
    }
}