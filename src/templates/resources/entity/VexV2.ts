import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const VexV2 = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:vex",
    params: {
        materials: { default: "vex" },
        textures: {
            default: "textures/entity/vex/vex",
            charging: "textures/entity/vex/vex_charging"
        },
        geometry: { default: "geometry.vex" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                "variable.attackbodyroty = Math.sin(Math.sqrt(variable.attack_time) * 360.0) * 11.46;"
            ],
            scale: "0.4",
            animate: [
                "controller_humanoid_base_pose",
                "controller_look_at_target",
                "controller_move",
                "controller_riding",
                "controller_holding",
                "controller_brandish_spear",
                "controller_charging",
                "controller_attack",
                "controller_sneaking",
                "controller_bob",
                "controller_damage_nearby_mobs",
                "controller_bow_and_arrow",
                "controller_swimming",
                "controller_use_item_progress",
                "controller_vex_move"
            ]
        },
        animations: {
            humanoid_base_pose: "animation.humanoid.base_pose.v1.0",
            look_at_target_default: "animation.humanoid.look_at_target.default.v1.0",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding.v1.0",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming.v1.0",
            move: "animation.humanoid.move.v1.0",
            "riding.arms": "animation.humanoid.riding.arms.v1.0",
            "riding.legs": "animation.humanoid.riding.legs.v1.0",
            holding: "animation.humanoid.holding.v1.0",
            brandish_spear: "animation.humanoid.brandish_spear.v1.0",
            charging: "animation.humanoid.charging.v1.0",
            "attack.rotations": "animation.vex.attack.rotations.v1.0",
            sneaking: "animation.humanoid.sneaking.v1.0",
            bob: "animation.humanoid.bob.v1.0",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs.v1.0",
            bow_and_arrow: "animation.humanoid.bow_and_arrow.v1.0",
            swimming: "animation.humanoid.swimming.v1.0",
            use_item_progress: "animation.humanoid.use_item_progress.v1.0",
            vex_move: "animation.vex.move",
            controller_humanoid_base_pose: "controller.animation.humanoid.base_pose",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_move: "controller.animation.humanoid.move",
            controller_riding: "controller.animation.humanoid.riding",
            controller_holding: "controller.animation.humanoid.holding",
            controller_brandish_spear: "controller.animation.humanoid.brandish_spear",
            controller_charging: "controller.animation.humanoid.charging",
            controller_attack: "controller.animation.humanoid.attack",
            controller_sneaking: "controller.animation.humanoid.sneaking",
            controller_bob: "controller.animation.humanoid.bob",
            controller_damage_nearby_mobs: "controller.animation.humanoid.damage_nearby_mobs",
            controller_bow_and_arrow: "controller.animation.humanoid.bow_and_arrow",
            controller_swimming: "controller.animation.humanoid.swimming",
            controller_use_item_progress: "controller.animation.humanoid.use_item_progress",
            controller_vex_move: "controller.animation.vex.move"
        },
        renderControllers: ["controller.render.vex"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 41
        }
    }
});
