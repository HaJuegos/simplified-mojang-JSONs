import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsDyeableData extends BPComponent {
    interactText?: string;
}

export class SetIsDyeable extends BehaviorEntityComponentBuilder<IsDyeableData> {
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