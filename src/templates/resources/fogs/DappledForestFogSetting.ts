import { createRPFog } from "../../../builders/resources/fogs/FogTemplateBuilder";
import { FormatVersionListFog } from "../../../types/resources/fogs/FogTemplate";

/**
 * Plantilla vanilla del fog para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const DappledForestFogSetting = createRPFog({
    formatVersion: FormatVersionListFog.MostRecent,
    idFog: "minecraft:fog_dappled_forest",
    distance: {
        water: {
            fogStart: 0.0,
            fogEnd: 60.0,
            fogColor: "#1E97F2",
            renderDistanceType: "fixed",
            transitionFog: {
                initFog: {
                    fogStart: 0.0,
                    fogEnd: 0.01,
                    fogColor: "#1E97F2",
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
