import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ExplodeData extends BPComponent {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    damageScaling?: number;
    destroyAffectedByGriefing?: boolean;
    fireAffectedByGriefing?: boolean;
    fuseLength?: [number, number] | number | {
        rangeMin?: number;
        rangeMax?: number;
    };
    fuseLit?: boolean;
    knockbackScaling?: number;
    maxResistance?: number;
    negatesFallDamage?: boolean;
    particleEffect?: "explosion" | "wind_burst" | "breeze_wind_burst";
    power?: number;
    soundEffect?: string;
    togglesBlocks?: boolean;
}

export class SetExplode extends BehaviorEntityComponentBuilder<ExplodeData, "minecraft:explode"> {
    /**
     * 
     * @param {ExplodeData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ExplodeData) {
        super("minecraft:explode", params);
    }
}