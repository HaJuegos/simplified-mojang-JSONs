import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PiglinBruteEntity = createRPEntityClient({
    idEntity: "minecraft:piglin_brute",
    params: {
        materials: { default: "piglin_brute" },
        textures: { default: "textures/entity/piglin/piglin_brute" },
        geometry: { default: "geometry.piglin" },
        spawnEgg: { texture: "spawn_egg_piglin_brute" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                "variable.attack = Math.sin((1.0 - (1.0 - variable.attack_time) * (1.0 - variable.attack_time)) * 180.0) * 57.3;",
                "variable.attack2 = Math.sin(variable.attack_time * 180.0) * 57.3;",
                `variable.z_bob = Math.cos(${MoLang.lifeTime()} * 103.13244) * 2.865 + 2.865;`,
                `variable.x_bob = Math.sin(${MoLang.lifeTime()} * 76.776372) * 2.865;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.0;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ],
            animate: [
                { humanoid_big_head: MoLang.isBaby() },
                "move",
                "bob",
                "look_at_target_controller",
                "piglin_attack_controller",
                "riding_controller"
            ]
        },
        animations: {
            move: "animation.piglin.move",
            bob: "animation.humanoid.bob",
            humanoid_big_head: "animation.humanoid.big_head",
            look_at_target_controller: "controller.animation.humanoid.look_at_target",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            piglin_attack_controller: "controller.animation.piglin.attack",
            crossbow_hold: "animation.piglin.crossbow.hold",
            crossbow_charge: "animation.piglin.crossbow.charge",
            melee_attack: "animation.piglin.sword.attack",
            hand_attack: "animation.piglin.hand.attack",
            riding_controller: "controller.animation.humanoid.riding",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            "riding.body": "animation.humanoid.riding.body"
        },
        renderControllers: ["controller.render.piglin_brute"],
        enableAttachables: true
    }
});
