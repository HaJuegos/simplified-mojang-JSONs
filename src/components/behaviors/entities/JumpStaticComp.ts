import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface JumpStaticData extends BPComponent {
    jumpPower?: number;
}

export class SetJumpStatic extends BehaviorEntityComponentBuilder<JumpStaticData, "minecraft:jump.static"> {
    /**
     * 
     * @param {JumpStaticData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: JumpStaticData) {
        super("minecraft:jump.static", params);
    }
}