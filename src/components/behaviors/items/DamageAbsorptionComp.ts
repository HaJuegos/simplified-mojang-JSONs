import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

/**
 * Lista de daños disponibles vanilla para absorber el item.
 * @author HaJuegos - 14-10-2026
 */
type AbsorbableCausesVanillaTypes = "anvil" | "block_explosion" | "campfire" | "charging" | "contact" | "drowning" | "entity_attack" | "entity_explosion" | "fall" | "falling_block" | "fire" | "fire_tick" | "fireworks" | "fly_into_wall" | "freezing" | "lava" | "lightning" | "mace_smash" | "magic" | "magma" | "none" | "override" | "piston" | "projectile" | "ram_attack" | "self_destruct" | "sonic_boom" | "soul_campfire" | "stalactite" | "stalagmite" | "starve" | "suffocation" | "temperature" | "thorns" | "void" | "wither";

interface DamageAbsorptionData extends BPComponent {
    absorbableCauses: ["all"] | AbsorbableCausesVanillaTypes[];
}

export class SetDamageAbsorption extends BehaviorItemsComponentsBuilder<DamageAbsorptionData, "minecraft:damage_absorption"> {
    /**
     * 
     * @param {DamageAbsorptionData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DamageAbsorptionData) {
        super("minecraft:damage_absorption", params);
    }
}