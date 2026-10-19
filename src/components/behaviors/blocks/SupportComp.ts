import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SupportData extends BPComponent {
    shape: "fence" | "stair";
}

export class SetSupport extends BehaviorBlockComponentBuilder<SupportData, "minecraft:support"> {
    /**
     * 
     * @param {SupportData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SupportData) {
        super("minecraft:support", params);
    }
}