import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorFireAtTargetData extends BPComponent {
    priority: number;
    attackCooldown?: number;
    attackRange?: {
        min: number,
        max: number;
    };
    ownerAnchor?: number;
    ownerOffset?: [number, number];
    targetAnchor?: number;
    targetOffset?: [number, number];
    postShootDelay?: number;
    preShootDelay?: number;
    projectileDef?: string | MinecraftEntityTypes;
    rangedFov?: number;
    maxHeadRotationX?: number;
    maxHeadRotationY?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorFireAtTarget extends BehaviorEntityComponentBuilder<BehaviorFireAtTargetData> {
    /**
     * 
     * @param {BehaviorFireAtTargetData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFireAtTargetData) {
        super("minecraft:behavior.fire_at_target", params);
    }
}