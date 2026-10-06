import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorLeapAtTargetData extends BPComponent {
    priority: number;
    mustBeOnGround?: boolean;
    setPersistent?: boolean;
    yd?: number;
}

export class SetBehaviorLeapAtTarget extends BehaviorEntityComponentBuilder<BehaviorLeapAtTargetData, "minecraft:behavior.leap_at_target"> {
    /**
     * 
     * @param {BehaviorLeapAtTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLeapAtTargetData) {
        super("minecraft:behavior.leap_at_target", params);
    }
}