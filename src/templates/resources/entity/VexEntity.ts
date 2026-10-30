import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const VexEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:vex",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "vex" },
        textures: {
            default: "textures/entity/vex/vex",
            charging: "textures/entity/vex/vex_charging"
        },
        geometry: { default: "geometry.vex.v1.8" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("empty_handed")} = !${MoLang.isItemEquipped(0)} && !${MoLang.isItemEquipped(1)};`
            ],
            scale: "1.0",
            animate: ["controller_look_at_target", "controller_vex_charge", "controller_vex_idle"]
        },
        animations: {
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            holding: "animation.humanoid.holding",
            brandish_spear: "animation.humanoid.brandish_spear",
            charging: "animation.humanoid.charging",
            "attack.rotations": "animation.humanoid.attack.rotations",
            sneaking: "animation.humanoid.sneaking",
            bob: "animation.humanoid.bob",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs",
            bow_and_arrow: "animation.humanoid.bow_and_arrow",
            swimming: "animation.humanoid.swimming",
            use_item_progress: "animation.humanoid.use_item_progress",
            vex_move: "animation.vex.move",
            vex_charge: "animation.vex.charge",
            vex_idle: "animation.vex.idle",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_vex_charge: "controller.animation.vex.charge",
            controller_vex_idle: "controller.animation.vex.idle"
        },
        renderControllers: ["controller.render.vex"],
        spawnEgg: { texture: "spawn_egg_vex" },
        heldItemIgnoresLighting: true
    }
});
