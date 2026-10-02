import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface HorseJumpStrengthData extends BPComponent {
    value?: number | {
        rangeMin: number;
        rangeMax: number;
    };
}

export class SetHorseJumpStrength extends BehaviorEntityComponentBuilder<HorseJumpStrengthData, "minecraft:horse.jump_strength"> {
    /**
     * 
     * @param {HorseJumpStrengthData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: HorseJumpStrengthData) {
        super("minecraft:horse.jump_strength", params);
    }
}