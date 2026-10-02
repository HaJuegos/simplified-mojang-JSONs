import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PlayerLevelData extends BPComponent {
    value?: number;
    max?: number;
}

export class SetPlayerLevel extends BehaviorEntityComponentBuilder<PlayerLevelData, "minecraft:player.level"> {
    /**
     * 
     * @param {PlayerLevelData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PlayerLevelData) {
        super("minecraft:player.level", params);
    }
}