import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMingleData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownTime?: number;
    duration?: number;
    mingleDistance?: number;
    minglePartnerType?: (string | MinecraftEntityTypes) | (string | MinecraftEntityTypes)[];
}

export class SetBehaviorMingle extends BehaviorEntityComponentBuilder<BehaviorMingleData, "minecraft:behavior.mingle"> {
    /**
     * 
     * @param {BehaviorMingleData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: BehaviorMingleData) {
        super("minecraft:behavior.mingle", params);
    }
}