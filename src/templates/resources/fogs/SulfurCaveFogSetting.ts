import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SulfurCaveFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.MostRecent,
    idFog: "minecraft:fog_sulfur_caves",
    distance: {
        air: {
            fogStart: 0.92,
            fogEnd: 1.0,
            fogColor: "#8cb831",
            renderDistanceType: "render"
        },
        weather: {
            fogStart: 0.23,
            fogEnd: 0.7,
            fogColor: "#8cb831",
            renderDistanceType: "render"
        },
        water: {
            fogStart: 0.0,
            fogEnd: 60.0,
            fogColor: "#17543c",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#17543c",
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
                maxDensity: 0.07,
                zeroDensityHeight: 320.0,
                maxDensityHeight: 320.0
            }
        },
        mediaCoefficients: {
            air: {
                scattering: [0.5, 0.5, 0.5],
                absorption: [0.25, 0.125, 0.125]
            }
        },
        henyeyGreensteinG: {
            air: { henyeyGreensteinG: 0.3 }
        }
    }
});
