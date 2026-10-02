import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface ReflectProjectilesData extends BPComponent {
    azimuthAngle?: number | MoLangValue;
    elevationAngle?: number | MoLangValue;
    reflectedProjectiles?: (string | MinecraftEntityTypes)[];
    reflectionScale?: number | MoLangValue;
    reflectionSound?: string;
}

export class SetReflectProjectiles extends BehaviorEntityComponentBuilder<ReflectProjectilesData, "minecraft:reflect_projectiles"> {
    /**
     * 
     * @param {ReflectProjectilesData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ReflectProjectilesData) {
        super("minecraft:reflect_projectiles", params);
    }
}