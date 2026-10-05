import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntitySlotsArmor } from "../../../types/EntityFilters";

interface BurnsInDaylightData extends BPComponent {
    protectionSlot: EntitySlotsArmor;
}

export class SetBurnsInDaylight extends BehaviorEntityComponentBuilder<BurnsInDaylightData, "minecraft:burns_in_daylight"> {
    /**
     * 
     * @param {BurnsInDaylightData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: BurnsInDaylightData) {
        super("minecraft:burns_in_daylight", params);
    }
}