import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ParrotEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:parrot",
    params: {
        materials: { default: "parrot" },
        textures: {
            blue: "textures/entity/parrot/parrot_blue",
            green: "textures/entity/parrot/parrot_green",
            red_blue: "textures/entity/parrot/parrot_red_blue",
            yellow_blue: "textures/entity/parrot/parrot_yellow_blue",
            grey: "textures/entity/parrot/parrot_grey"
        },
        geometry: { default: "geometry.parrot" },
        scripts: {
            preAnimation: [
                `${MoLang.variable("state")} = ${MoLang.isDancing()} ? 3 : (${MoLang.isSitting()} ? 2 : (!${MoLang.isOnGround()} && !${MoLang.isJumping()} && !${MoLang.isRiding()} ? 0 : 1));`,
                `variable.dance.x = Math.cos(${MoLang.lifeTime()} * 57.3 * 20.0);`,
                `variable.dance.y = -Math.sin(${MoLang.lifeTime()} * 57.3 * 20.0);`,
                `${MoLang.variable("wing_flap")} = ((${MoLang.sin(`${MoLang.wingFlapPosition()} * 57.3`)} + 1) * ${MoLang.wingFlapSpeed()});`
            ],
            animate: ["controller_setup", "controller_move"]
        },
        animations: {
            moving: "animation.parrot.moving",
            base: "animation.parrot.base",
            dance: "animation.parrot.dance",
            sitting: "animation.parrot.sitting",
            flying: "animation.parrot.flying",
            standing: "animation.parrot.standing",
            look_at_target: "animation.common.look_at_target",
            controller_setup: "controller.animation.parrot.setup",
            controller_move: "controller.animation.parrot.move"
        },
        renderControllers: ["controller.render.parrot"],
        spawnEgg: { texture: "spawn_egg_parrot" }
    }
});
