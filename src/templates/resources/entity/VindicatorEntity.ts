import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const VindicatorEntity = createRPEntityClient({
    idEntity: "minecraft:vindicator",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "vindicator" },
        textures: { default: "textures/entity/vindicator" },
        geometry: { default: "geometry.vindicator.v1.8" },
        spawnEgg: { texture: "spawn_egg_vindicator" },
        scripts: {
            scale: "0.9375",
            animate: [
                "vindicator_base",
                "vindicator_walk",
                "controller_look_at_target",
                "controller_vindicator_base",
                "controller_riding"
            ],
            preAnimation: [
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.25;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ]
        },
        animations: {
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            "riding.arms": "animation.vindicator.riding.arms",
            "riding.legs": "animation.vindicator.riding.legs",
            vindicator_base: "animation.vindicator.base",
            vindicator_attack: "animation.vindicator.attack",
            vindicator_walk: "animation.vindicator.walk",
            celebrating: "animation.humanoid.celebrating",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_vindicator_base: "controller.animation.vindicator.base",
            controller_riding: "controller.animation.humanoid.riding",
            vindicator_hand_attack: "animation.vindicator.hand_attack",
            "riding.body": "animation.humanoid.riding.body"
        },
        renderControllers: ["controller.render.vindicator"],
        enableAttachables: true,
        hideArmor: true
    }
});
