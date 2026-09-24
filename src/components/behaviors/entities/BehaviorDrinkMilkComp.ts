import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorDrinkMilkData extends BPComponent {
    priority: number;
    cooldownSeconds?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorDrinkMilk extends BehaviorEntityComponentBuilder<BehaviorDrinkMilkData> {
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