import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorOwnerHurtTargetData extends BPComponent {
    priority: number;
    entityTypes?: number;
}

export class SetBehaviorOwnerHurtTarget extends BehaviorEntityComponentBuilder<BehaviorOwnerHurtTargetData> {
    /**
     * 
     * @param {BehaviorOwnerHurtTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOwnerHurtTargetData) {
        super("minecraft:behavior.owner_hurt_target", params);
    }
}