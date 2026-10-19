import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type Vector3 = [number, number, number];

interface LeashableData extends BPComponent {
    offset: Vector3;
}

export class SetLeashable extends BehaviorBlockComponentBuilder<LeashableData, "minecraft:leashable"> {
    /**
     * 
     * @param {LeashableData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: LeashableData) {
        super("minecraft:leashable", params);
    }
}