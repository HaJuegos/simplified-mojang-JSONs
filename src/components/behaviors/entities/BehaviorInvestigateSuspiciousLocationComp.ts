import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorInvestigateSuspiciousLocationData extends BPComponent {
    goalRadius?: number;
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorInvestigateSuspiciousLocation extends BehaviorEntityComponentBuilder<BehaviorInvestigateSuspiciousLocationData> {
    /**
     * 
     * @param {BehaviorInvestigateSuspiciousLocationData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorInvestigateSuspiciousLocationData) {
        super("minecraft:behavior.investigate_suspicious_location", params);
    }
}