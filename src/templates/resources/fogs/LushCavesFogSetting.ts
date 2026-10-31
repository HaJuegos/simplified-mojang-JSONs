import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const LushCavesFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.MostRecent,
    idFog: "minecraft:fog_lush_caves",
    distance: {
        air: {
            fogStart: 0.92,
            fogEnd: 1.0,
            fogColor: "#ABD2FF",
            renderDistanceType: "render"
        },
        water: {
            fogStart: 0,
            fogEnd: 60.0,
            fogColor: "#44AFF5",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#44AFF5",
                    renderDistanceType: "fixed"
                },
                minPercent: 0.25,
                midSeconds: 5,
                midPercent: 0.6,
                maxSeconds: 30
            }
        },
        weather: {
            fogStart: 0.23,
            fogEnd: 0.7,
            fogColor: "#666666",
            renderDistanceType: "render"
        },
        lava: {
            fogStart: 0.0,
            fogEnd: 0.64,
            fogColor: "#991A00",
            renderDistanceType: "fixed"
        },
        lavaResistance: {
            fogStart: 2.0,
            fogEnd: 4.0,
            fogColor: "#991A00",
            renderDistanceType: "fixed"
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
                scattering: [0.06, 0.06, 0.06],
                absorption: [0.0, 0.0, 0.0]
            }
        },
        henyeyGreensteinG: {
            air: { henyeyGreensteinG: 0.4 }
        }
    }
});
