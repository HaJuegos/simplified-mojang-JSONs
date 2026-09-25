import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSilverfishMergeWithStoneData extends BPComponent {
    priority: number;
}

export class SetBehaviorSilverfishMergeWithStone extends BehaviorEntityComponentBuilder<BehaviorSilverfishMergeWithStoneData> {
    /**
     * 
     * @param {BehaviorSilverfishMergeWithStoneData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSilverfishMergeWithStoneData) {
        super("minecraft:behavior.silverfish_merge_with_stone", params);
    }
}