import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorVexRandomMoveData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
}

export class SetBehaviorVexRandomMove extends BehaviorEntityComponentBuilder<BehaviorVexRandomMoveData, "minecraft:behavior.vex_random_move"> {
    /**
     * 
     * @param {BehaviorVexRandomMoveData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorVexRandomMoveData) {
        super("minecraft:behavior.vex_random_move", params);
    }
}