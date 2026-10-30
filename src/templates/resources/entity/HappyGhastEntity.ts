import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const HappyGhastEntity = createRPEntityClient({
    idEntity: "minecraft:happy_ghast",
    params: {
        materials: { default: "ghast" },
        geometry: {
            default: "geometry.happy_ghast",
            ropes: "geometry.happy_ghast_ropes"
        },
        textures: {
            ghastling: "textures/entity/happy_ghast/ghastling",
            happy_ghast: "textures/entity/happy_ghast/happy_ghast",
            ropes: "textures/entity/happy_ghast/happy_ghast_ropes"
        },
        renderControllers: ["controller.render.happy_ghast", "controller.render.happy_ghast_ropes"],
        scripts: {
            preAnimation: [
                `${MoLang.variable("is_harnessed")} = ${MoLang.equipmentCount()} > 0;`,
                `${MoLang.variable("shrink_scalar_to_avoid_z_fighting")} = 3.975f / 4.0f;`,
                `${MoLang.variable("shrink_scalar_when_harnessed")} = ${MoLang.variable("is_harnessed")} ? (16.0f / 17.0f) : 1.0f;`,
                `${MoLang.variable("scale")} = ${MoLang.variable("shrink_scalar_to_avoid_z_fighting")} * ${MoLang.variable("shrink_scalar_when_harnessed")};`,
                `${MoLang.variable("render_ropes")} = ${MoLang.variable("is_harnessed")} && ${MoLang.hasAnyLeashedEntityOfType("minecraft:boat", "minecraft:chest_boat", "minecraft:horse", "minecraft:skeleton_horse", "minecraft:zombie_horse", "minecraft:mule", "minecraft:donkey", "minecraft:camel", "minecraft:sniffer")};`
            ],
            animate: ["move_controller", "scale_controller"],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            move: "animation.happy_ghast.move",
            move_controller: "controller.animation.happy_ghast.move",
            scale: "animation.happy_ghast.scale",
            scale_controller: "controller.animation.happy_ghast.scale"
        },
        enableAttachables: true,
        spawnEgg: { texture: "spawn_egg_happy_ghast" }
    }
});
