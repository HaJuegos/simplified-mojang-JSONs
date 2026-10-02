import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface TeleportData extends BPComponent {
    darkTeleportChance?: number;
    lightTeleportChance?: number;
    maxRandomTeleportTime?: number;
    minRandomTeleportTime?: number;
    randomTeleportCube?: [number, number, number];
    randomTeleports?: boolean;
    targetDistance?: number;
    targetTeleportChance?: number;
}

export class SetTeleport extends BehaviorEntityComponentBuilder<TeleportData, "minecraft:teleport"> {
    /**
     * 
     * @param {TeleportData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TeleportData) {
        super("minecraft:teleport", params);
    }
}