import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveToPoiData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    poiType?: "bed" | "jobsite" | "meeting_area";
}

export class SetBehaviorMoveToPoi extends BehaviorEntityComponentBuilder<BehaviorMoveToPoiData, "minecraft:behavior.move_to_poi"> {
    /**
     * 
     * @param {BehaviorMoveToPoiData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToPoiData) {
        super("minecraft:behavior.move_to_poi", params);
    }
}