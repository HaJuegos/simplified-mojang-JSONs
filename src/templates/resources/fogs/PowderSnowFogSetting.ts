import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PowderSnowFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.V1_16_100,
    idFog: "minecraft:fog_powder_snow",
    distance: {
        powderSnow: {
            fogStart: 0.0,
            fogEnd: 2.0,
            fogColor: "#9FBBC8",
            renderDistanceType: "fixed"
        }
    },
    volumetric: {}
});
