import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorGoAndGiveItemsToNoteblockData extends BPComponent {
    priority: number;
    listenTime?: number;
    onItemThrow?: string | EntityFilter | EntityFilter[];
    reachBlockDistance?: number;
    runSpeed?: number;
    throwForce?: number;
    throwSound?: string;
    verticalThrowMul?: number;
}

export class SetBehaviorGoAndGiveItemsToNoteblock extends BehaviorEntityComponentBuilder<BehaviorGoAndGiveItemsToNoteblockData> {
    /**
     * 
     * @param {BehaviorGoAndGiveItemsToNoteblockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorGoAndGiveItemsToNoteblockData) {
        super("minecraft:behavior.go_and_give_items_to_noteblock", params);
    }
}