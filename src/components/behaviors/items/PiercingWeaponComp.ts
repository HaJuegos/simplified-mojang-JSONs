import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PiercingWeaponData extends BPComponent {
    hitboxMargin: number;
    creativeReach: {
        min: number;
        max: number;
    };
    reach: {
        min: number;
        max: number;
    };
}

export class SetPiercingWeapon extends BehaviorItemsComponentsBuilder<PiercingWeaponData, "minecraft:piercing_weapon"> {
    /**
     * 
     * @param {PiercingWeaponData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: PiercingWeaponData) {
        super("minecraft:piercing_weapon", params);
    }
}