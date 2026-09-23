import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorBegData extends BPComponent {
    priority: number;
    items?: string[] | MinecraftItemTypes[];
    lookDistance?: number;
    lookTime?: {
        min: number;
        max: number;
    };
}

export class SetBehaviorBeg extends BehaviorEntityComponentBuilder<BehaviorBegData> {
    /**
     * 
     * @param {BehaviorBegData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorBegData) {
        super("minecraft:behavior.beg", params);
    }
}