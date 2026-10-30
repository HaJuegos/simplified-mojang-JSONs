import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const HorseV2Entity = createRPEntityClient({
    idEntity: "minecraft:horse",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_2_6,
        materials: { default: "horse_leather_armor" },
        textures: {
            base_brown: "textures/entity/horse2/horse_brown",
            base_white: "textures/entity/horse2/horse_white",
            base_creamy: "textures/entity/horse2/horse_creamy",
            base_chestnut: "textures/entity/horse2/horse_chestnut",
            base_black: "textures/entity/horse2/horse_black",
            base_gray: "textures/entity/horse2/horse_gray",
            base_darkbrown: "textures/entity/horse2/horse_darkbrown",
            markings_none: "textures/entity/horse2/horse_markings_none",
            markings_white: "textures/entity/horse2/horse_markings_white",
            markings_whitefield: "textures/entity/horse2/horse_markings_whitefield",
            markings_whitedots: "textures/entity/horse2/horse_markings_whitedots",
            markings_blackdots: "textures/entity/horse2/horse_markings_blackdots",
            armor_none: "textures/entity/horse2/armor/horse_armor_none",
            armor_leather: "textures/entity/horse2/armor/horse_armor_leather",
            armor_iron: "textures/entity/horse2/armor/horse_armor_iron",
            armor_gold: "textures/entity/horse2/armor/horse_armor_gold",
            armor_diamond: "textures/entity/horse2/armor/horse_armor_diamond"
        },
        geometry: { default: "geometry.horse.v2" },
        animations: {
            setup: "animation.horse.v2.setup",
            baby_transform: "animation.horse.v2.baby_transform",
            walk: "animation.horse.v2.walk",
            eat: "animation.horse.v2.eat",
            stand: "animation.horse.v2.stand",
            tail: "animation.horse.v2.tail"
        },
        scripts: {
            initialize: [`${MoLang.variable("eat_anim")} = 0.0;`, `${MoLang.variable("mouth_anim")} = 0.0;`],
            preAnimation: [
                `${MoLang.variable("armor_texture_slot")} = ${MoLang.armorTextureSlot(4)};`,
                `${MoLang.variable("eat_anim")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.variable("eat_anim")} + (${MoLang.isGrazing()} ? ((1.0 - ${MoLang.variable("eat_anim")}) * 0.4 + 0.05) : -${MoLang.variable("eat_anim")} * 0.4 - 0.05) * ${MoLang.deltaTime()} * 20.0`, 1.0))};`,
                `${MoLang.variable("mouth_anim")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.variable("mouth_anim")} + (${MoLang.variable("open_mouth")} ? ((1.0 - ${MoLang.variable("mouth_anim")}) * 0.7 + 0.05) : -${MoLang.variable("mouth_anim")} * 0.7 - 0.05) * ${MoLang.deltaTime()} * 20.0`, 1.0))};`,
                `${MoLang.variable("head_x_rot")} = ${MoLang.targetXRotation()} + (${MoLang.modifiedMoveSpeed()} > 0.2 ? (${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 11.46`)} * 11.46 * ${MoLang.modifiedMoveSpeed()} + ${MoLang.modifiedMoveSpeed()} * 11.46) : 0.0);`,
                `${MoLang.variable("inverse_max_stand_eat")} = (1.0 - ${MoLang.max(MoLang.variable("stand_anim"), MoLang.variable("eat_anim"))});`,
                `${MoLang.variable("base_head_angle")} = ${MoLang.variable("inverse_max_stand_eat")} * (30.0 + ${MoLang.variable("head_x_rot")} + ${MoLang.variable("mouth_anim")} * ${MoLang.sin(`(${MoLang.lifeTime()} * 20.0 + ${MoLang.frameAlpha()}) * 57.3`)} * 2.86);`,
                `${MoLang.variable("leg_stand_factor")} = ${MoLang.cos(`(${MoLang.modifiedDistanceMoved()} * 38.38) + 180.0`)};`,
                `${MoLang.variable("leg_x_rot_anim")} = ${MoLang.variable("leg_stand_factor")} * 45.8 * ${MoLang.modifiedMoveSpeed()};`,
                `${MoLang.variable("leg1a_aabb")} = ${MoLang.boneAabb("leg1a")};`,
                `${MoLang.variable("y_adjust")} = ${MoLang.isBaby()} ? 0.0 : (${MoLang.variable("leg1a_aabb.max.y")} - ${MoLang.variable("leg1a_aabb.min.y")}) * (1.0 - (${MoLang.modelScale()} * 16.0));`
            ],
            animate: [
                "setup",
                { baby_transform: MoLang.isBaby() },
                "walk",
                "stand",
                { eat: `!${MoLang.isStanding()}` },
                { tail: MoLang.variable("shake_tail") }
            ]
        },
        renderControllers: ["controller.render.horse.v1.and.v2"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 23
        }
    }
});
