import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CooldownData extends BPComponent {
    category: string;
    duration: number;
    type?: "use" | "attack";
}

export class SetCooldown extends BehaviorItemsComponentsBuilder<CooldownData, "minecraft:cooldown"> {
    /**
     * 
     * @param {CooldownData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: CooldownData) {
        super("minecraft:cooldown", params);
    }
}