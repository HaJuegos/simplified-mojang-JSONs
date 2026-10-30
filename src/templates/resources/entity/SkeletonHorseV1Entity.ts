import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const SkeletonHorseV1Entity = createRPEntityClient({
    idEntity: "minecraft:skeleton_horse",
    params: {
        materials: { default: "horse" },
        textures: {
            skeleton: "textures/entity/horse/horse_skeleton",
            markings_none: "textures/entity/horse/horse_markings_none",
            armor_none: "textures/entity/horse/armor/horse_armor_none"
        },
        geometry: { default: "geometry.horse" },
        animations: {
            setup: "animation.horse.setup",
            baby_transform: "animation.horse.baby_transform",
            walk: "animation.horse.walk",
            eat: "animation.horse.eat",
            stand: "animation.horse.stand",
            shake_tail: "animation.horse.shake_tail",
            mouth: "animation.horse.mouth",
            look_at_player: "animation.horse.look_at_player"
        },
        scripts: {
            initialize: [
                `${MoLang.variable("eat_anim")} = 0.0;`,
                `${MoLang.variable("mouth_anim")} = 0.0;`,
                `${MoLang.variable("leg_back_origin")} = ${MoLang.boneOrigin("leg1a")};`,
                `${MoLang.variable("leg_front_origin")} = ${MoLang.boneOrigin("leg3a")};`,
                `${MoLang.variable("head_rotation")} = ${MoLang.boneRotation("head")};`
            ],
            preAnimation: [
                `${MoLang.variable("eat_anim")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.variable("eat_anim")} + (${MoLang.isGrazing()} ? ((1.0 - ${MoLang.variable("eat_anim")}) * 0.4 + 0.05) : -${MoLang.variable("eat_anim")} * 0.4 - 0.05) * ${MoLang.deltaTime()} * 20.0`, 1.0))};`,
                `${MoLang.variable("mouth_anim")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.variable("mouth_anim")} + (${MoLang.variable("open_mouth")} ? ((1.0 - ${MoLang.variable("mouth_anim")}) * 0.7 + 0.05) : -${MoLang.variable("mouth_anim")} * 0.7 - 0.05) * ${MoLang.deltaTime()} * 20.0`, 1.0))};`,
                `${MoLang.variable("walk_tail_angle")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.modifiedMoveSpeed()} * 50.0`, 90.0))} * (1.0 - ${MoLang.variable("stand_anim")});`,
                `${MoLang.variable("head_x_rot")} = ${MoLang.targetXRotation()} + (${MoLang.modifiedMoveSpeed()} > 0.2 ? (${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 11.46`)} * 11.46 * ${MoLang.modifiedMoveSpeed()} + ${MoLang.modifiedMoveSpeed()} * 11.46) : 0.0);`,
                `${MoLang.variable("inverse_max_stand_eat")} = (1.0 - ${MoLang.max(MoLang.variable("stand_anim"), MoLang.variable("eat_anim"))});`,
                `${MoLang.variable("base_head_angle")} = ${MoLang.variable("inverse_max_stand_eat")} * (30.0 + ${MoLang.variable("head_x_rot")} + ${MoLang.variable("mouth_anim")} * ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0 + ${MoLang.frameAlpha()}) * 57.3`)} * 2.86);`,
                `${MoLang.variable("leg_walk_factor")} = ${MoLang.cos(`(${MoLang.modifiedDistanceMoved()} * 38.38) + 180.0`)};`,
                `${MoLang.variable("leg_x_rot_anim")} = ${MoLang.variable("leg_walk_factor")} * 45.8 * ${MoLang.modifiedMoveSpeed()};`,
                `${MoLang.variable("leg_stand")} = ${MoLang.cos(`(${MoLang.lifeTime()} * 20.0) * 34.38`)} * ${MoLang.variable("stand_anim")};`,
                `${MoLang.variable("baby_ratio")} = ${MoLang.isBaby()} ? ((0.0625 - ${MoLang.modelScale()}) * 16.0) : 0.0;`
            ],
            animate: [
                "setup",
                { baby_transform: MoLang.isBaby() },
                { walk: `${MoLang.variable("stand_anim")} < 0.5` },
                { stand: `${MoLang.variable("stand_anim")} > 0.0` },
                { eat: `!${MoLang.isStanding()}` },
                { shake_tail: MoLang.variable("shake_tail") },
                "mouth",
                "look_at_player"
            ]
        },
        renderControllers: ["controller.render.skeleton_horse.v1.and.v2"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 32
        }
    }
});
