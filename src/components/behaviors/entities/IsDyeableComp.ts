import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsDyeableData extends BPComponent {
    interactText?: string;
}

export class SetIsDyeable extends BehaviorEntityComponentBuilder<IsDyeableData, "minecraft:is_dyeable"> {
    /**
     * 
     * @param {IsDyeableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: IsDyeableData) {
        super("minecraft:is_dyeable", params);
    }
}