import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type Vector3 = [number, number, number];

interface TransformationData extends BPComponent {
    rotation?: Vector3;
    rotationPivot?: Vector3;
    scale?: Vector3;
    scalePivot?: Vector3;
    translation?: Vector3;
}

export class SetTransformation extends BehaviorBlockComponentBuilder<TransformationData, "minecraft:transformation"> {
    /**
     * 
     * @param {TransformationData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: TransformationData) {
        super("minecraft:transformation", params);
    }
}