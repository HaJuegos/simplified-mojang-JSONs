import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EvocationIllagerEntity = createRPEntityClient({
    idEntity: "minecraft:evocation_illager",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "evoker" },
        textures: { default: "textures/entity/illager/evoker" },
        geometry: { default: "geometry.evoker.v1.8" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_move"],
            preAnimation: [
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.25;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ]
        },
        animations: {
            general: "animation.evoker.general",
            casting: "animation.evoker.casting",
            look_at_target: "animation.common.look_at_target",
            move: "animation.evoker.move",
            celebrating: "animation.humanoid.celebrating",
            controller_general: "controller.animation.evoker.general",
            controller_move: "controller.animation.villager.move",
            "riding.legs": "animation.humanoid.riding.legs",
            controller_riding: "controller.animation.humanoid.riding_legs_only",
            "riding.body": "animation.humanoid.riding.body"
        },
        particleEffects: { spell: "minecraft:evoker_spell" },
        renderControllers: ["controller.render.evoker"],
        spawnEgg: { texture: "spawn_egg_evoker" }
    }
});
