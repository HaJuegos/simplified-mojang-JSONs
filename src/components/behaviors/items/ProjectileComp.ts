import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ProjectileData extends BPComponent {
    minimumCriticalPower: number;
    projectileEntity: string | MinecraftEntityTypes;
}

export class SetProjectile extends BehaviorItemsComponentsBuilder<ProjectileData, "minecraft:projectile"> {
    /**
     * 
     * @param {ProjectileData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ProjectileData) {
        super("minecraft:projectile", params);
    }
}