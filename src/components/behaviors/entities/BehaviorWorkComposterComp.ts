import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorWorkComposterData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    activeTime?: number;
    blockInteractionMax?: number;
    canEmptyComposter?: boolean;
    canFillComposter?: boolean;
    canWorkInRain?: boolean;
    goalCooldown?: number;
    itemsPerUseMax?: number;
    minItemCount?: number;
    onArrival?: string | EntityFilterTrigger | EntityFilterTrigger[];
    soundDelayMax?: number;
    soundDelayMin?: number;
    useBlockMax?: number;
    useBlockMin?: number;
    workInRainTolerance?: number;
}

export class SetBehaviorWorkComposter extends BehaviorEntityComponentBuilder<BehaviorWorkComposterData> {
    /**
     * 
     * @param {BehaviorWorkComposterData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorWorkComposterData) {
        super("minecraft:behavior.work_composter", params);
    }
}