import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorGoAndGiveItemsToOwnerData extends BPComponent {
    priority: number;
    onItemThrow?: string | EntityFilter | EntityFilter[];
    reachMobDistance?: number;
    runSpeed?: number;
    throwForce?: number;
    throwSound?: string;
    verticalThrowMul?: number;
}

export class SetBehaviorGoAndGiveItemsToOwner extends BehaviorEntityComponentBuilder<BehaviorGoAndGiveItemsToOwnerData> {
    /**
     * 
     * @param {BehaviorGoAndGiveItemsToOwnerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorGoAndGiveItemsToOwnerData) {
        super("minecraft:behavior.go_and_give_items_to_owner", params);
    }
}