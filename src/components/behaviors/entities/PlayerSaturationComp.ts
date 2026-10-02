import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

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