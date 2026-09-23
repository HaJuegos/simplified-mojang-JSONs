import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFiltersTarget } from "../../../types/EntityFilters";

type SoundIntervalTypes = number | { min: number; max: number; };

interface BehaviorAdmireItemData extends BPComponent {
    priority: number;
    admireItemSound: string;
    onAdmireItemStart?: string | EntityFiltersTarget;
    onAdmireItemStop?: string | EntityFiltersTarget;
    soundInterval?: SoundIntervalTypes;
}

export class SetBehaviorAdmireItem extends BehaviorEntityComponentBuilder<BehaviorAdmireItemData> {
    public constructor (params: BehaviorAdmireItemData) {
        super("minecraft:behavior.admire_item", params);
    }
}