import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ColdBeachFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.V1_16_100,
    idFog: "minecraft:fog_cold_beach",
    distance: {
        water: {
            fogStart: 0.0,
            fogEnd: 60.0,
            fogColor: "#1463a5",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#1463a5",
                    renderDistanceType: "fixed"
                },
                minPercent: 0.25,
                midSeconds: 5,
                midPercent: 0.6,
                maxSeconds: 30
            }
        }
    },
    volumetric: {}
});
