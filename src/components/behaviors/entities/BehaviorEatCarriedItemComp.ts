import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorEatCarriedItemData extends BPComponent {
    priority: number;
    delayBeforeEating?: number;
}

export class SetBehaviorEatCarriedItem extends BehaviorEntityComponentBuilder<BehaviorEatCarriedItemData, "minecraft:behavior.eat_carried_item"> {
    /**
     * 
     * @param {BehaviorEatCarriedItemData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorEatCarriedItemData) {
        super("minecraft:behavior.eat_carried_item", params);
    }
}