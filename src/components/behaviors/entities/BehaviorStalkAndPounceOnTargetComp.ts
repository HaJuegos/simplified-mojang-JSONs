import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorStalkAndPounceOnTargetData extends BPComponent {
    priority: number;
    interestTime?: number;
    leapDistance?: number;
    leapHeight?: number;
    maxStalkDist?: number;
    pounceMaxDist?: number;
    setPersistent?: boolean;
    stalkSpeed?: number;
    strikeDist?: number;
    stuckTime?: number;
    leapDist?: number;
    stuckBlocks?: EntityFilter | EntityFilter[];
}

export class SetBehaviorStalkAndPounceOnTarget extends BehaviorEntityComponentBuilder<BehaviorStalkAndPounceOnTargetData> {
    /**
     * 
     * @param {BehaviorStalkAndPounceOnTargetData} params Parametros del componente.
     * @author HaJuegos - 25-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStalkAndPounceOnTargetData) {
        super("minecraft:behavior.stalk_and_pounce_on_target", params);
    }
}