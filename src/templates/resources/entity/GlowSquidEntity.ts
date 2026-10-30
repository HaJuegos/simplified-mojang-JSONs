import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const GlowSquidEntity = createRPEntityClient({
    idEntity: "minecraft:glow_squid",
    params: {
        materials: { default: "glow_squid" },
        textures: {
            default: "textures/entity/glow_squid/glow_squid",
            baby: "textures/entity/glow_squid/glow_squid_baby"
        },
        geometry: {
            default: "geometry.squid",
            baby: "geometry.squid.baby"
        },
        animations: {
            move: "animation.squid.move",
            squid_rotate: "animation.squid.rotate"
        },
        scripts: {
            animate: ["move", "squid_rotate"],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.glow_squid.v2"],
        spawnEgg: { texture: "spawn_egg_glow_squid" }
    }
});
