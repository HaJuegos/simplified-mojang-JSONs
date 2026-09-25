import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorSnackingData extends BPComponent {
    priority: number;
    items?: (string | TargetItemsTypes) | (string | TargetItemsTypes)[];
    snackingCooldown?: number;
    snackingCooldownMin?: number;
    snackingStopChance?: number;
}

export class SetBehaviorSnacking extends BehaviorEntityComponentBuilder<BehaviorSnackingData> {
    /**
     * 
     * @param {BehaviorSnackingData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSnackingData) {
        super("minecraft:behavior.snacking", params);
    }
}