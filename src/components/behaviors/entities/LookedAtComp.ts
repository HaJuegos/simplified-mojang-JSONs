import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface LookedAtData extends BPComponent {
    fieldOfView?: number;
    filters?: EntityFilter | EntityFilter[];
    findPlayersOnly?: boolean;
    lineOfSightObstructionType?: "outline" | "collision" | "collision_for_camera";
    lookAtLocations?: LookAtLocsTypes[];
    lookedAtCooldown?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
    lookedAtEvent?: EntityFilterTrigger;
    notLookedAtEvent?: EntityFilterTrigger;
    scaleFovByDistance?: boolean;
    searchRadius?: number;
    minLookedAtDuration?: number;
    setTarget?: "never" | "once_and_stop_scanning" | "once_and_keep_scanning";
}

interface LookAtLocsTypes {
    location: 'body' | 'feet' | 'head';
    verticalOffset: number;
}

export class SetLookedAt extends BehaviorEntityComponentBuilder<LookedAtData, "minecraft:looked_at"> {
    /**
     * 
     * @param {LookedAtData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: LookedAtData) {
        super("minecraft:looked_at", params);
    }
}