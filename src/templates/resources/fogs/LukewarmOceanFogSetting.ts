import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const LukewarmOceanFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.MostRecent,
    idFog: "minecraft:fog_lukewarm_ocean",
    distance: {
        water: {
            fogStart: 0.0,
            fogEnd: 60.0,
            fogColor: "#0a74c4",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#0a74c4",
                    renderDistanceType: "fixed"
                },
                minPercent: 0.25,
                midSeconds: 5,
                midPercent: 0.6,
                maxSeconds: 30
            }
        }
    },
    volumetric: {
        density: {
            air: {
                maxDensity: 0.05,
                zeroDensityHeight: 320.0,
                maxDensityHeight: 320.0
            }
        },
        mediaCoefficients: {
            air: {
                scattering: [0.04, 0.04, 0.04],
                absorption: [0.0, 0.0, 0.0]
            }
        },
        henyeyGreensteinG: {
            air: { henyeyGreensteinG: 0.6 }
        }
    }
});
