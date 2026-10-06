import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSniffData extends BPComponent {
    priority: number;
    cooldownRange?: {
        min: number;
        max: number;
    };
    duration?: number;
    sniffingRadius?: number;
    suspicionRadiusHorizontal?: number;
    suspicionRadiusVertical?: number;
}

export class SetBehaviorSniff extends BehaviorEntityComponentBuilder<BehaviorSniffData, "minecraft:behavior.sniff"> {
    /**
     * 
     * @param {BehaviorSniffData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSniffData) {
        super("minecraft:behavior.sniff", params);
    }
}