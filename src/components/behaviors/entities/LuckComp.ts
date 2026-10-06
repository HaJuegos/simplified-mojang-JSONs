import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LuckData extends BPComponent {
    min?: number;
    max?: number;
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
}

export class SetLuck extends BehaviorEntityComponentBuilder<LuckData, "minecraft:luck"> {
    /**
     * 
     * @param {LuckData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: LuckData) {
        super("minecraft:luck", params);
    }
}