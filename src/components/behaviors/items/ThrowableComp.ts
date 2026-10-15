import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ThrowableData extends BPComponent {
    doSwingAnimation: boolean;
    minDrawDuration: number;
    maxDrawDuration: number;
    launchPowerScale: number;
    maxLaunchPower: number;
    scalePowerByDrawDuration: boolean;
}

export class SetThrowable extends BehaviorItemsComponentsBuilder<ThrowableData, "minecraft:throwable"> {
    /**
     * 
     * @param {ThrowableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ThrowableData) {
        super("minecraft:throwable", params);
    }
}