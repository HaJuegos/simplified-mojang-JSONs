import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorVexCopyOwnerTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
}

export class SetBehaviorVexCopyOwnerTarget extends BehaviorEntityComponentBuilder<BehaviorVexCopyOwnerTargetData, "minecraft:behavior.vex_copy_owner_target"> {
    /**
     * 
     * @param {BehaviorVexCopyOwnerTargetData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorVexCopyOwnerTargetData) {
        super("minecraft:behavior.vex_copy_owner_target", params);
    }
}