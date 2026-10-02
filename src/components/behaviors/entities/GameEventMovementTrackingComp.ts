import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface GameEventMovementTrackingData extends BPComponent {
    emitFlap?: boolean;
    emitMove?: boolean;
    emitSwim?: boolean;
}

export class SetGameEventMovementTracking extends BehaviorEntityComponentBuilder<GameEventMovementTrackingData, "minecraft:game_event_movement_tracking"> {
    /**
     * 
     * @param {GameEventMovementTrackingData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GameEventMovementTrackingData) {
        super("minecraft:game_event_movement_tracking", params);
    }
}