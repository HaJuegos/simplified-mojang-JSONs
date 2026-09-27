import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface CelebrateHuntData extends BPComponent {
    broadcast?: boolean;
    celebrationTargets?: EntityFilter | EntityFilter[];
    celebrateSound?: string;
    duration?: number;
    radius?: number;
    soundInterval?: {
        rangeMin: number;
        rangeMax: number;
    } | [number, number] | number;
}

export class SetCelebrateHunt extends BehaviorEntityComponentBuilder<CelebrateHuntData> {
    /**
     * 
     * @param {CelebrateHuntData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: CelebrateHuntData) {
        super("minecraft:celebrate_hunt", params);
    }
}