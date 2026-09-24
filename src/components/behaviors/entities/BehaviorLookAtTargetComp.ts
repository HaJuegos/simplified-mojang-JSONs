import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorLookAtTargetData extends BPComponent {
    priority: number;
    lookDistance?: number;
    probability?: number;
    lookTime?: {
        min: number;
        max: number;
    };
    angleOfViewVertical?: number;
    angleOfViewHorizontal?: number;
}

export class SetBehaviorLookAtTarget extends BehaviorEntityComponentBuilder<BehaviorLookAtTargetData> {
    /**
     * 
     * @param {BehaviorLookAtTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLookAtTargetData) {
        super("minecraft:behavior.look_at_target", params);
    }
}