import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface JumpDynamicData extends BPComponent {
    regularSkipData?: SkipDataTypes;
    fastSkipData?: SkipDataTypes;
}

interface SkipDataTypes {
    animationDuration: number,
    distanceScale: number,
    height: number,
    jumpDelay: number;
}

export class SetJumpDynamic extends BehaviorEntityComponentBuilder<JumpDynamicData> {
    /**
     * 
     * @param {JumpDynamicData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: JumpDynamicData) {
        super("minecraft:jump.dynamic", params);
    }
}