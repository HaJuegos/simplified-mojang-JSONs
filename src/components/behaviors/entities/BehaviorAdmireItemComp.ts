import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFiltersTarget } from "../../../types/EntityFilters";

type SoundIntervalTypes = number | { min: number; max: number; };

interface BehaviorAdmireItemData extends BPComponent {
    priority: number;
    admireItemSound: string;
    onAdmireItemStart?: string | EntityFiltersTarget;
    onAdmireItemStop?: string | EntityFiltersTarget;
    soundInterval?: SoundIntervalTypes;
}

export class SetBehaviorAdmireItem extends BehaviorEntityComponentBuilder<BehaviorAdmireItemData, "minecraft:behavior.admire_item"> {
    public constructor (params: BehaviorAdmireItemData) {
        super("minecraft:behavior.admire_item", params);
    }
}