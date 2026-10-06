import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSquidMoveAwayFromGroundData extends BPComponent {
    priority: number;
}

export class SetBehaviorSquidMoveAwayFromGround extends BehaviorEntityComponentBuilder<BehaviorSquidMoveAwayFromGroundData, "minecraft:behavior.squid_move_away_from_ground"> {
    /**
     * 
     * @param {BehaviorSquidMoveAwayFromGroundData} params Parametros del componente.
     * @author HaJuegos - CURRENT_DAY-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSquidMoveAwayFromGroundData) {
        super("minecraft:behavior.squid_move_away_from_ground", params);
    }
}