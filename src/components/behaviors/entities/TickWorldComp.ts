import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface TickWorldData extends BPComponent {
    distanceToPlayers?: number;
    neverDespawn?: boolean;
    radius?: number;
}

export class SetTickWorld extends BehaviorEntityComponentBuilder<TickWorldData, "minecraft:tick_world"> {
    /**
     * 
     * @param {TickWorldData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TickWorldData) {
        super("minecraft:tick_world", params);
    }
}