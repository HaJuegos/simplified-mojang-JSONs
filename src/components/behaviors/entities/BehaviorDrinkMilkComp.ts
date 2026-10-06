import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorDrinkMilkData extends BPComponent {
    priority: number;
    cooldownSeconds?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorDrinkMilk extends BehaviorEntityComponentBuilder<BehaviorDrinkMilkData, "minecraft:behavior.drink_milk"> {
    /**
     * 
     * @param {BehaviorDrinkMilkData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDrinkMilkData) {
        super("minecraft:behavior.drink_milk", params);
    }
}