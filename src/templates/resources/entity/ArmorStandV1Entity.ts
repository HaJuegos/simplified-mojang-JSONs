import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const ArmorStandV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:armor_stand",
    params: {
        materials: { default: "armor_stand" },
        textures: { default: "textures/entity/armor_stand" },
        animations: {
            default_pose: "animation.armor_stand.default_pose",
            no_pose: "animation.armor_stand.no_pose",
            solemn_pose: "animation.armor_stand.solemn_pose",
            athena_pose: "animation.armor_stand.athena_pose",
            brandish_pose: "animation.armor_stand.brandish_pose",
            honor_pose: "animation.armor_stand.honor_pose",
            entertain_pose: "animation.armor_stand.entertain_pose",
            salute_pose: "animation.armor_stand.salute_pose",
            riposte_pose: "animation.armor_stand.riposte_pose",
            zombie_pose: "animation.armor_stand.zombie_pose",
            cancan_a_pose: "animation.armor_stand.cancan_a_pose",
            cancan_b_pose: "animation.armor_stand.cancan_b_pose",
            hero_pose: "animation.armor_stand.hero_pose",
            wiggle: "animation.armor_stand.wiggle",
            controller_pose: "controller.animation.armor_stand.pose",
            controller_wiggling: "controller.animation.armor_stand.wiggle"
        },
        geometry: { default: "geometry.armor_stand" },
        renderControllers: ["controller.render.armor_stand"],
        enableAttachables: true,
        scripts: {
            animate: ["controller_pose", "controller_wiggling"]
        }
    }
});
