import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PlayerSaturationData extends BPComponent {
    value?: number;
    max?: number;
}

export class SetPlayerSaturation extends BehaviorEntityComponentBuilder<PlayerSaturationData, "minecraft:player.saturation"> {
    /**
     * 
     * @param {PlayerSaturationData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PlayerSaturationData) {
        super("minecraft:player.saturation", params);
    }
}