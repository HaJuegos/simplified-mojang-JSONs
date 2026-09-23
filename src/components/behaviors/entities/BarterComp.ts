import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BarterData extends BPComponent {
    barterTable?: string;
    cooldownAfterBeingAttacked?: number;
}

export class SetBarter extends BehaviorEntityComponentBuilder<BarterData> {
    public constructor (params: BarterData) {
        super("minecraft:barter", params);
    }
}