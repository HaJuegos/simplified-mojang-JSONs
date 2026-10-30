import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const AllayEntity = createRPEntityClient({
    idEntity: "minecraft:allay",
    params: {
        materials: {
            default: "allay"
        },
        textures: {
            default: "textures/entity/allay/allay"
        },
        geometry: {
            default: "geometry.allay"
        },
        spawnEgg: {
            texture: "spawn_egg_allay"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("holding_trident")} = ${MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:trident")};`
            ],
            animate: [
                "controller_general",
                "controller_look_at_target",
                "controller_holding",
                "controller_dancing"
            ]
        },
        animations: {
            idle: "animation.allay.idle",
            fly: "animation.allay.fly",
            hold_item: "animation.allay.hold_item",
            dance: "animation.allay.dance",
            hold_item_fly: "animation.allay.hold_item_fly",
            look_at_target_default: "animation.allay.look_at_target.default",

            controller_general: "controller.animation.allay.general",
            controller_look_at_target: "controller.animation.allay.look_at_target",
            controller_holding: "controller.animation.allay.holding",
            controller_dancing: "controller.animation.allay.dancing"
        },
        renderControllers: [
            "controller.render.allay"
        ],
        enableAttachables: true,
        heldItemIgnoresLighting: true
    }
});
