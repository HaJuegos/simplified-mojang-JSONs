import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorFollowMobData extends BPComponent {
    priority: number;
    filters?: EntityFilter | EntityFilter[];
    preferredActorType?: string | MinecraftEntityTypes;
    speedMultiplier?: number;
    searchRange?: number;
    stopDistance?: number;
    useHomePositionRestriction?: boolean;
}

export class SetBehaviorFollowMob extends BehaviorEntityComponentBuilder<BehaviorFollowMobData> {
    /**
     * 
     * @param {BehaviorFollowMobData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowMobData) {
        super("minecraft:behavior.follow_mob", params);
    }
}