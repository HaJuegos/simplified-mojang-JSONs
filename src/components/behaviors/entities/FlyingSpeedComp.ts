import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FlyingSpeedData extends BPComponent {
    value?: number;
}

export class SetFlyingSpeed extends BehaviorEntityComponentBuilder<FlyingSpeedData, "minecraft:flying_speed"> {
    /**
     * 
     * @param {FlyingSpeedData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FlyingSpeedData) {
        super("minecraft:flying_speed", params);
    }
}