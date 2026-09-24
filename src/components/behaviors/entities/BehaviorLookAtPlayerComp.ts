import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorLookAtPlayerData extends BPComponent {
    priority: number;
    angleOfViewVertical?: number;
    angleOfViewHorizontal?: number;
    lookDistance?: number;
    probability?: number;
    lookTime?: {
        min: number;
        max: number;
    };
    targetDistance?: number;
}

export class SetBehaviorLookAtPlayer extends BehaviorEntityComponentBuilder<BehaviorLookAtPlayerData> {
    /**
     * 
     * @param {BehaviorLookAtPlayerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLookAtPlayerData) {
        super("minecraft:behavior.look_at_player", params);
    }
}