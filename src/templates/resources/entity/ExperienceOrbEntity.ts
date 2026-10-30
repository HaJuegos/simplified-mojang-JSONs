import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ExperienceOrbEntity = createRPEntityClient({
    idEntity: "minecraft:xp_orb",
    params: {
        materials: { default: "experience_orb" },
        textures: { default: "textures/entity/experience_orb" },
        geometry: { default: "geometry.experience_orb" },
        animations: { face_player: "animation.actor.billboard" },
        scripts: {
            scale: "0.3",
            preAnimation: [
                `variable.u = Math.mod(${MoLang.textureFrameIndex()}, 4) * 16.0 / 64.0;`,
                `${MoLang.variable("v")} = ${MoLang.round(`${MoLang.textureFrameIndex()} / 4`)} * 16.0 / 64.0;`
            ],
            animate: ["face_player"]
        },
        renderControllers: ["controller.render.experience_orb"]
    }
});
