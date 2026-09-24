import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorFloatTemptData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canGetScared?: boolean;
    canTemptWhileRidden?: boolean;
    canTemptVertically?: boolean;
    items?: string[] | MinecraftItemTypes[];
    soundInterval?: [number, number];
    stopDistance?: number;
    temptSound?: string;
    withinRadius?: number;
    onStart?: string | EntityFilter | EntityFilter[];
    onEnd?: string | EntityFilter | EntityFilter[];
}

export class SetBehaviorFloatTempt extends BehaviorEntityComponentBuilder<BehaviorFloatTemptData> {
    /**
     * 
     * @param {BehaviorFloatTemptData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFloatTemptData) {
        super("minecraft:behavior.float_tempt", params);
    }
}