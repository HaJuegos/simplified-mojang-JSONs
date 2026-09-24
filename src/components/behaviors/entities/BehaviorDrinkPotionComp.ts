import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorDrinkPotionData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    speedModifier?: number;
    potions?: PotionsIDsTypes[];
}

interface PotionsIDsTypes {
    id: number;
    filters: EntityFilter | EntityFilter[];
    chance: number;
}

export class SetBehaviorDrinkPotion extends BehaviorEntityComponentBuilder<BehaviorDrinkPotionData> {
    /**
     * 
     * @param {BehaviorDrinkPotionData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDrinkPotionData) {
        super("minecraft:behavior.drink_potion", params);
    }
}