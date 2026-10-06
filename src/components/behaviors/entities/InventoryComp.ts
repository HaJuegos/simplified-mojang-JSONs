import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface InventoryData extends BPComponent {
    additionalSlotsPerStrength?: number;
    canBeSiphonedFrom?: boolean;
    containerType?: "horse" | "minecart_chest" | "chest_boat" | "minecart_hopper" | "inventory" | "container" | "hopper";
    inventorySize?: number;
    private?: boolean;
    restrictToOwner?: boolean;
}

export class SetInventory extends BehaviorEntityComponentBuilder<InventoryData, "minecraft:inventory"> {
    /**
     * 
     * @param {InventoryData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: InventoryData) {
        super("minecraft:inventory", params);
    }
}