import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WolfEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:wolf",
    params: {
        materials: { default: "wolf" },
        textures: {
            default: "textures/entity/wolf/wolf",
            angry: "textures/entity/wolf/wolf_angry",
            tame: "textures/entity/wolf/wolf_tame",
            pale_default: "textures/entity/wolf/wolf",
            pale_angry: "textures/entity/wolf/wolf_angry",
            pale_tame: "textures/entity/wolf/wolf_tame",
            ashen_default: "textures/entity/wolf/wolf_ashen",
            ashen_angry: "textures/entity/wolf/wolf_ashen_angry",
            ashen_tame: "textures/entity/wolf/wolf_ashen_tame",
            black_default: "textures/entity/wolf/wolf_black",
            black_angry: "textures/entity/wolf/wolf_black_angry",
            black_tame: "textures/entity/wolf/wolf_black_tame",
            chestnut_default: "textures/entity/wolf/wolf_chestnut",
            chestnut_angry: "textures/entity/wolf/wolf_chestnut_angry",
            chestnut_tame: "textures/entity/wolf/wolf_chestnut_tame",
            rusty_default: "textures/entity/wolf/wolf_rusty",
            rusty_angry: "textures/entity/wolf/wolf_rusty_angry",
            rusty_tame: "textures/entity/wolf/wolf_rusty_tame",
            snowy_default: "textures/entity/wolf/wolf_snowy",
            snowy_angry: "textures/entity/wolf/wolf_snowy_angry",
            snowy_tame: "textures/entity/wolf/wolf_snowy_tame",
            spotted_default: "textures/entity/wolf/wolf_spotted",
            spotted_angry: "textures/entity/wolf/wolf_spotted_angry",
            spotted_tame: "textures/entity/wolf/wolf_spotted_tame",
            striped_default: "textures/entity/wolf/wolf_striped",
            striped_angry: "textures/entity/wolf/wolf_striped_angry",
            striped_tame: "textures/entity/wolf/wolf_striped_tame",
            woods_default: "textures/entity/wolf/wolf_woods",
            woods_angry: "textures/entity/wolf/wolf_woods_angry",
            woods_tame: "textures/entity/wolf/wolf_woods_tame",
            baby_pale_default: "textures/entity/wolf/wolf_baby",
            baby_pale_angry: "textures/entity/wolf/wolf_angry_baby",
            baby_pale_tame: "textures/entity/wolf/wolf_tame_baby",
            baby_ashen_default: "textures/entity/wolf/wolf_ashen_baby",
            baby_ashen_angry: "textures/entity/wolf/wolf_ashen_angry_baby",
            baby_ashen_tame: "textures/entity/wolf/wolf_ashen_tame_baby",
            baby_black_default: "textures/entity/wolf/wolf_black_baby",
            baby_black_angry: "textures/entity/wolf/wolf_black_angry_baby",
            baby_black_tame: "textures/entity/wolf/wolf_black_tame_baby",
            baby_chestnut_default: "textures/entity/wolf/wolf_chestnut_baby",
            baby_chestnut_angry: "textures/entity/wolf/wolf_chestnut_angry_baby",
            baby_chestnut_tame: "textures/entity/wolf/wolf_chestnut_tame_baby",
            baby_rusty_default: "textures/entity/wolf/wolf_rusty_baby",
            baby_rusty_angry: "textures/entity/wolf/wolf_rusty_angry_baby",
            baby_rusty_tame: "textures/entity/wolf/wolf_rusty_tame_baby",
            baby_snowy_default: "textures/entity/wolf/wolf_snowy_baby",
            baby_snowy_angry: "textures/entity/wolf/wolf_snowy_angry_baby",
            baby_snowy_tame: "textures/entity/wolf/wolf_snowy_tame_baby",
            baby_spotted_default: "textures/entity/wolf/wolf_spotted_baby",
            baby_spotted_angry: "textures/entity/wolf/wolf_spotted_angry_baby",
            baby_spotted_tame: "textures/entity/wolf/wolf_spotted_tame_baby",
            baby_striped_default: "textures/entity/wolf/wolf_striped_baby",
            baby_striped_angry: "textures/entity/wolf/wolf_striped_angry_baby",
            baby_striped_tame: "textures/entity/wolf/wolf_striped_tame_baby",
            baby_woods_default: "textures/entity/wolf/wolf_woods_baby",
            baby_woods_angry: "textures/entity/wolf/wolf_woods_angry_baby",
            baby_woods_tame: "textures/entity/wolf/wolf_woods_tame_baby"
        },
        geometry: {
            default: "geometry.wolf",
            baby: "geometry.wolf.baby"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("body_shake_angle")} = 0.05 * ${MoLang.frameAlpha()} + ${MoLang.shakeAngle()};`,
                "variable.body_roll_progress = Math.clamp((variable.body_shake_angle - 0.16) / 1.8, 0, 1);",
                "variable.body_rot_z = Math.sin(variable.body_roll_progress * 180) * Math.sin(variable.body_roll_progress * 1980) * 27;",
                "variable.upper_body_roll_progress = Math.clamp((variable.body_shake_angle - 0.08) / 1.8, 0, 1);",
                "variable.upper_body_rot_z = (Math.sin(variable.upper_body_roll_progress * 180) * Math.sin(variable.upper_body_roll_progress * 1980) * 27) - variable.body_rot_z;",
                "variable.tail_roll_progress = Math.clamp((variable.body_shake_angle - 0.2) / 1.8, 0, 1);",
                "variable.tail_rot_z = (Math.sin(variable.tail_roll_progress * 180) * Math.sin(variable.tail_roll_progress * 1980) * 27) - variable.body_rot_z;",
                "variable.head_roll_progress = Math.clamp(variable.body_shake_angle / 1.8, 0, 1);",
                "variable.head_rot_z = (Math.sin(variable.head_roll_progress * 180) * Math.sin(variable.head_roll_progress * 1980) * 27) - variable.body_rot_z;"
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            animate: [
                "controller_wolf_setup",
                "controller_wolf_look_at",
                "controller_wolf_head_rot_z",
                "controller_wolf_tail_default",
                "controller_wolf_angry",
                "controller_wolf_sitting",
                "controller_wolf_shaking"
            ]
        },
        animations: {
            wolf_setup: "animation.wolf.setup",
            wolf_baby_scaling: "animation.wolf.baby_scaling",
            wolf_look_at: "animation.common.look_at_target",
            wolf_head_rot_z: "animation.wolf.head_rot_z",
            wolf_tail_default: "animation.wolf.tail_default",
            wolf_angry: "animation.wolf.angry",
            wolf_sitting: "animation.wolf.sitting",
            wolf_shaking: "animation.wolf.shaking",
            wolf_leg_default: "animation.wolf.leg_default",
            wolf_baby_sitting: "animation.wolf.baby_sitting",
            controller_wolf_setup: "controller.animation.wolf.setup",
            controller_wolf_look_at: "controller.animation.wolf.look_at",
            controller_wolf_head_rot_z: "controller.animation.wolf.head_rot_z",
            controller_wolf_tail_default: "controller.animation.wolf.tail_default",
            controller_wolf_angry: "controller.animation.wolf.angry",
            controller_wolf_sitting: "controller.animation.wolf.sitting",
            controller_wolf_shaking: "controller.animation.wolf.shaking"
        },
        renderControllers: ["controller.render.wolf.v2"],
        spawnEgg: { texture: "spawn_egg_wolf" },
        enableAttachables: true
    }
});
