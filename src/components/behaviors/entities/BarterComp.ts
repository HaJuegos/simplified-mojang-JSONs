import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BarterData extends BPComponent {
    barterTable?: string;
    cooldownAfterBeingAttacked?: number;
}

export class SetBarter extends BehaviorEntityComponentBuilder<BarterData, "minecraft:barter"> {
    public constructor (params: BarterData) {
        super("minecraft:barter", params);
    }
}