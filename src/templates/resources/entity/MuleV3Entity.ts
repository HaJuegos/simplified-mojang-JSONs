import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const MuleV3Entity = createRPEntityClient({
    idEntity: "minecraft:mule",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_17_10,
        materials: { default: "horse" },
        textures: {
            mule: "textures/entity/horse2/mule",
            markings_none: "textures/entity/horse2/horse_markings_none",
            armor_none: "textures/entity/horse2/armor/horse_armor_none",
            baby_mule: "textures/entity/horse2/mule_baby"
        },
        geometry: {
            default: "geometry.horse.v3",
            baby: "geometry.donkeymule.baby"
        },
        animations: {
            baby_transform: "animation.horse.v3.baby_transform",
            walk: "animation.horse.v3.walk",
            eat: "animation.horse.v3.eat",
            rear: "animation.horse.v3.rear",
            tail: "animation.horse.v3.tail",
            look_at_player: "animation.horse.v3.look_at_player"
        },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 0.92`,
            initialize: [`${MoLang.variable("eat_anim")} = 0.0;`],
            preAnimation: [
                `${MoLang.variable("eat_anim")} = ${MoLang.max(0.0, MoLang.min(`${MoLang.variable("eat_anim")} + (${MoLang.isGrazing()} ? ((1.0 - ${MoLang.variable("eat_anim")}) * 0.4 + 0.05) : -${MoLang.variable("eat_anim")} * 0.4 - 0.05) * ${MoLang.deltaTime()} * 20.0`, 1.0))};`,
                `${MoLang.variable("head_x_rot")} = ${MoLang.targetXRotation()} + (${MoLang.modifiedMoveSpeed()} > 0.2 ? (${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 11.46`)} * 11.46 * ${MoLang.modifiedMoveSpeed()} + ${MoLang.modifiedMoveSpeed()} * 11.46) : 0.0);`,
                `${MoLang.variable("inverse_max_stand_eat")} = (1.0 - ${MoLang.max(MoLang.variable("stand_anim"), MoLang.variable("eat_anim"))});`,
                `${MoLang.variable("leg_stand_factor")} = ${MoLang.cos(`(${MoLang.modifiedDistanceMoved()} * 38.38) + 180.0`)};`,
                `${MoLang.variable("leg_x_rot_anim")} = ${MoLang.variable("leg_stand_factor")} * 45.8 * ${MoLang.modifiedMoveSpeed()};`
            ],
            animate: [
                "walk",
                "look_at_player",
                { rear: `${MoLang.variable("stand_anim")} > 0.0` },
                { eat: `!${MoLang.isStanding()}` },
                { tail: MoLang.variable("shake_tail") }
            ]
        },
        renderControllers: ["controller.render.mule.v4"],
        spawnEgg: { texture: "spawn_egg_mule" }
    }
});
