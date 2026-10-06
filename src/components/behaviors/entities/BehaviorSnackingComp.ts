import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorSnackingData extends BPComponent {
    priority: number;
    items?: (string | TargetItemsTypes) | (string | TargetItemsTypes)[];
    snackingCooldown?: number;
    snackingCooldownMin?: number;
    snackingStopChance?: number;
}

export class SetBehaviorSnacking extends BehaviorEntityComponentBuilder<BehaviorSnackingData, "minecraft:behavior.snacking"> {
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