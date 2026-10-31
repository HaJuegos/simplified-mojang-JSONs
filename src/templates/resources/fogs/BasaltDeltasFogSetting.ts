import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BasaltDeltasFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.V1_16_100,
    idFog: "minecraft:fog_basalt_deltas",
    distance: {
        air: {
            fogStart: 10.0,
            fogEnd: 96.0,
            fogColor: "#685f70",
            renderDistanceType: "fixed"
        },
        water: {
            fogStart: 0.0,
            fogEnd: 15.0,
            fogColor: "#423e42",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#423e42",
                    renderDistanceType: "fixed"
                },
                minPercent: 0.25,
                midSeconds: 5,
                midPercent: 0.6,
                maxSeconds: 30
            }
        },
        weather: {
            fogStart: 10.0,
            fogEnd: 96.0,
            fogColor: "#685f70",
            renderDistanceType: "fixed"
        }
    },
    volumetric: {}
});
