import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface KineticWeaponData extends BPComponent {
    delay: number;
    reach: {
        min: number;
        max: number;
    };
    creativeReach: {
        min: number;
        max: number;
    };
    hitboxMargin: number;
    damageMultiplier: number;
    damageConditions: {
        maxDuration: number;
        minRelativeSpeed: number;
    };
    knockbackConditions: {
        maxDuration: number;
        minSpeed: number;
    };
    dismountConditions: {
        maxDuration: number;
        minSpeed: number;
    };
    damageModifier: number;
}

export class SetKineticWeapon extends BehaviorItemsComponentsBuilder<KineticWeaponData, "minecraft:kinetic_weapon"> {
    /**
     * 
     * @param {KineticWeaponData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: KineticWeaponData) {
        super("minecraft:kinetic_weapon", params);
    }
}