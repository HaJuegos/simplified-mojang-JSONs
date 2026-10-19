import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type Vector3 = [number, number, number];

type SelectionBoxData = boolean | {
    origin: Vector3;
    size: Vector3;
};

export class SetSelectionBox extends BehaviorBlockComponentBuilder<SelectionBoxData, "minecraft:selection_box"> {
    /**
     * 
     * @param {SelectionBoxData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SelectionBoxData) {
        super("minecraft:selection_box", params);
    }
}