import * as vanilla from "@minecraft/vanilla-data";

import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface AgeableData extends BPComponent {
    interactFilters: EntityFilter;

    duration: number;

    onGrowUp: EntityFilter;
    onPuseGrow: EntityFilter;
    onResetGrow: EntityFilter;

    dropItems: vanilla.MinecraftItemTypes[] | string[];
    feedItems: vanilla.MinecraftItemTypes[] | string[];
    pauseGrowItems: vanilla.MinecraftItemTypes[] | string[];
    resetGlowItems: vanilla.MinecraftItemTypes[] | string[];
}

export class SetAgeable extends BehaviorEntityComponentBuilder<AgeableData> {
    public constructor () {
        super("minecraft:ageable");
    }

    protected override getComponentData(): AgeableData {
        return {

        };
    }
}