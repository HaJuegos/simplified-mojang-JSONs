import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface OffsetParams {
    steps: number;
    range: {
        min: number;
        max: number;
    };
}

interface RandomOffsetData extends BPComponent {
    x: OffsetParams;
    y: OffsetParams;
    z: OffsetParams;
}

export class SetRandomOffset extends BehaviorBlockComponentBuilder<RandomOffsetData, "minecraft:random_offset"> {
    /**
     * 
     * @param {RandomOffsetData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RandomOffsetData) {
        super("minecraft:random_offset", params);
    }
}