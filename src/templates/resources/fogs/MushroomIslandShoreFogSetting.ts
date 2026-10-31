import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const MushroomIslandShoreFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.MostRecent,
    idFog: "minecraft:fog_mushroom_island_shore",
    distance: {
        water: {
            fogStart: 0.0,
            fogEnd: 60.0,
            fogColor: "#818193",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#818193",
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
                scattering: [0.01, 0.01, 0.01],
                absorption: [0.042, 0.137, 0.012]
            }
        },
        henyeyGreensteinG: {
            air: { henyeyGreensteinG: 0.3 }
        }
    }
});
