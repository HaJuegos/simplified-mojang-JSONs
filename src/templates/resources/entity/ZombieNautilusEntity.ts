import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ZombieNautilusEntity = createRPEntityClient({
    idEntity: "minecraft:zombie_nautilus",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_12_0,
        materials: { default: "nautilus" },
        textures: {
            default: "textures/entity/nautilus/zombie_nautilus",
            coral: "textures/entity/nautilus/zombie_nautilus_coral",
            saddle: "textures/entity/nautilus/nautilus_saddle",
            armor_none: "textures/entity/horse2/armor/horse_armor_none",
            armor_copper: "textures/entity/nautilus/armor/nautilus_armor_copper",
            armor_iron: "textures/entity/nautilus/armor/nautilus_armor_iron",
            armor_gold: "textures/entity/nautilus/armor/nautilus_armor_gold",
            armor_diamond: "textures/entity/nautilus/armor/nautilus_armor_diamond",
            armor_netherite: "textures/entity/nautilus/armor/nautilus_armor_netherite"
        },
        geometry: {
            default: "geometry.nautilus",
            coral: "geometry.zombie_nautilus_coral",
            saddle: "geometry.nautilus_saddle",
            armor: "geometry.nautilus_armor"
        },
        animations: {
            breathe: "animation.nautilus.breathe",
            swim: "animation.nautilus.swim",
            look_at_target: "animation.nautilus.look_at_target",
            dashing: "animation.nautilus.dashing",
            sound_controller: "controller.animation.nautilus.sound",
            general_controller: "controller.animation.nautilus.general"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("variant_index")} = ${MoLang.property("minecraft:variant")} == 'coral' ? 1 : 0;`,
                `variable.dash_cooldown = (!(variable.last_dash_cooldown ?? true) && ${MoLang.hasDashCooldown()}) ? 2 : ( variable.dash_cooldown ?? 0 );`,
                `${MoLang.variable("dash_cooldown")} = ${MoLang.max(0, `${MoLang.variable("dash_cooldown")} - ${MoLang.deltaTime()}`)};`,
                `${MoLang.variable("dash_cooldown_progress")} = (2 - ${MoLang.variable("dash_cooldown")}) / 2;`,
                `${MoLang.variable("xTargetRot")} = ${MoLang.max("-10", MoLang.min(MoLang.targetXRotation(), 10))};`,
                `${MoLang.variable("xHeadRot")} = ${MoLang.variable("dash_cooldown_progress")} > 0 ? ${MoLang.max("-25", MoLang.min(`${MoLang.variable("xTargetRot")} + (45 * (1 - ${MoLang.variable("dash_cooldown_progress")}))`, 70))} : ${MoLang.variable("xTargetRot")};`,
                `${MoLang.variable("yHeadRot")} = ${MoLang.max("-10", MoLang.min(MoLang.targetYRotation(), 10))};`,
                `${MoLang.variable("has_armor")} = ${MoLang.equippedItemAnyTag("slot.armor.body", "minecraft:nautilus_armor")};`,
                `${MoLang.variable("armor_texture_slot")} = ${MoLang.armorTextureSlot(4)};`
            ],
            animate: ["general_controller", "sound_controller"],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        particleEffects: { bubbles: "minecraft:nautilus_bubbles_particle" },
        renderControllers: [
            "controller.render.zombie_nautilus",
            "controller.render.nautilus_saddle",
            "controller.render.nautilus_armor"
        ],
        spawnEgg: { texture: "spawn_egg_zombie_nautilus" },
        soundEffects: { dash: "mob.zombie_nautilus.dash" }
    }
});
