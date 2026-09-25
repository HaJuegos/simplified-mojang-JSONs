import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorSendEventData extends BPComponent {
    priority: number;
    castDuration?: number;
    lookAtTarget?: boolean;
    eventChoices?: SendEventTypes[];
}

interface SendEventTypes {
    weight: number;
    startSoundEvent: string;
    castDuration: number;
    cooldownTime: number;
    filters: EntityFilter | EntityFilter[];
    maxActivationRange: number;
    minActivationRange: number;
    particleColor: string;
    sequence: SendEventSequenceType[];
}

interface SendEventSequenceType {
    baseDelay: number;
    event: string;
    soundEvent: string;
}

export class SetBehaviorSendEvent extends BehaviorEntityComponentBuilder<BehaviorSendEventData> {
    /**
     * 
     * @param {BehaviorSendEventData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSendEventData) {
        super("minecraft:behavior.send_event", params);
    }
}