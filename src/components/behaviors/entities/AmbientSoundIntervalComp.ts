import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";
import { MoLang } from "../../../utils/MoLang";

/**
 * Parametros fijos del componente en concreto.
 * @interface AmbientSoundIntervalData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AmbientSoundIntervalData extends BPComponent {
    /**
     * Lista de IDs condicionales y ID de los sonidos ambientales de la entidad.
     * @type {(string | EventsNameAmbientSound[])}
     */
    soundEvents: string | EventsNameAmbientSound[];

    /**
     * Tiempo minimo en segundos que se agregara al azar al tiempo de retardo del sonido. Por defecto sera el valor 8.
     * @type {number}
     */
    minRandomCooldownSound: number;

    /**
     * Tiempo maximo en segundos que se agregara al azar al tiempo de retardo del sonido. Por defecto sera el valor 16.
     * @type {number}
     */
    maxRandomCooldownSound: number;
}

/**
 * Parametros de la lista de sonidos ambientales.
 * @interface EventsNameAmbientSound
 * @author HaJuegos - 22-09-2026
 */
interface EventsNameAmbientSound {
    /**
     * ID del sonido ambiental de la entidad.
     * @type {(string | EventsNameAmbientSound[])}
     */
    soundID: string;

    /**
     * (Opcional) Condicion {@link MoLang} a cumplirse antes de ejecutar el sonido.
     * @type {MoLangValue}
     */
    condition: MoLangValue;
}

export class SetAmbientSoundInterval extends BehaviorEntityComponentBuilder<Record<string, unknown>> {
    /**
     * Componente que establece el retraso de la entidad entre cada reproduccion de su sonido ambiental.
     * @param {AmbientSoundIntervalData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AmbientSoundIntervalData) {
        const isEventsArray = Array.isArray(params.soundEvents);

        super("minecraft:ambient_sound_interval", {
            eventName: isEventsArray ? undefined : params.soundEvents,
            eventNames: isEventsArray ? (params.soundEvents as EventsNameAmbientSound[]).map(event => ({
                eventName: event.soundID,
                condition: event.condition
            })) : undefined,
            value: params.minRandomCooldownSound ?? 8,
            range: params.maxRandomCooldownSound ?? 16
        });
    }
}