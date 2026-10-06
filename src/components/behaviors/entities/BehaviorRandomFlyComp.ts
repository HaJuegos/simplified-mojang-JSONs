import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomFlyData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canLandOnTrees?: boolean;
    xzDist?: number;
    yDist?: number;
}

export class SetBehaviorRandomFly extends BehaviorEntityComponentBuilder<BehaviorRandomFlyData, "minecraft:behavior.random_fly"> {
    /**
     * 
     * @param {BehaviorRandomFlyData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomFlyData) {
        super("minecraft:behavior.random_fly", params);
    }
}