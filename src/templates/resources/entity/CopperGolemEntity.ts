import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CopperGolemEntity = createRPEntityClient({
    idEntity: "minecraft:copper_golem",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_12_0,
        materials: {
            default: "copper_golem",
            eyes: "copper_golem_eyes",
            flower: "copper_golem_flower"
        },
        textures: {
            default: "textures/entity/copper_golem/copper_golem",
            exposed: "textures/entity/copper_golem/copper_golem_exposed",
            weathered: "textures/entity/copper_golem/copper_golem_weathered",
            oxidized: "textures/entity/copper_golem/copper_golem_oxidized",
            eyes_default: "textures/entity/copper_golem/copper_golem_eyes",
            eyes_exposed: "textures/entity/copper_golem/copper_golem_eyes_exposed",
            eyes_weathered: "textures/entity/copper_golem/copper_golem_eyes_weathered",
            eyes_oxidized: "textures/entity/copper_golem/copper_golem_eyes_oxidized",
            flower: "textures/entity/copper_golem/copper_golem_flower"
        },
        geometry: {
            default: "geometry.copper_golem",
            flower: "geometry.copper_golem.flower",
            standing: "geometry.copper_golem",
            sitting: "geometry.copper_golem.sitting",
            running: "geometry.copper_golem.running",
            star: "geometry.copper_golem.star"
        },
        animations: {
            look_at_target: "animation.common.look_at_target",
            walk: "animation.copper_golem.walk",
            walk_holding_item: "animation.copper_golem.walk_holding_item",
            spin: "animation.copper_golem.spin",
            spin_weathered: "animation.copper_golem.spin.weathered",
            spin_oxidized: "animation.copper_golem.spin.oxidized",
            walk_controller: "controller.animation.copper_golem.walk",
            hold_item: "animation.copper_golem.hold_item",
            idle_controller: "controller.animation.copper_golem.idle",
            chest_interaction_controller: "controller.animation.copper_golem.chest_interaction",
            "chest_interaction.put_item": "animation.copper_golem.chest_interaction.put_item",
            "chest_interaction.put_item_fail": "animation.copper_golem.chest_interaction.put_item_fail",
            "chest_interaction.take_item": "animation.copper_golem.chest_interaction.take_item",
            "chest_interaction.take_item_fail": "animation.copper_golem.chest_interaction.take_item_fail"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("oxidation")} = ${MoLang.property("minecraft:oxidation_level")};`,
                `${MoLang.variable("index")} = (${MoLang.variable("oxidation")} == 'unoxidized') ? 0 : ((${MoLang.variable("oxidation")} == 'exposed') ? 1 : ((${MoLang.variable("oxidation")} == 'weathered') ? 2 : 3));`,
                `${MoLang.variable("walking")} = ${MoLang.modifiedMoveSpeed()} > 0.01;`,
                `${MoLang.variable("chest_interaction")} = ${MoLang.property("minecraft:chest_interaction")};`
            ],
            animate: [
                "look_at_target",
                { walk_controller: `${MoLang.property("minecraft:chest_interaction")} == 'none'` },
                { idle_controller: `${MoLang.property("minecraft:chest_interaction")} == 'none'` },
                "chest_interaction_controller"
            ],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        soundEffects: {
            spin: "mob.copper_golem.spin",
            spinWeathered: "mob.copper_golem.weathered.spin",
            spinOxidized: "mob.copper_golem.oxidized.spin",
            putItem: "mob.copper_golem.chest_interaction.put_item",
            putItemFail: "mob.copper_golem.chest_interaction.put_item_fail",
            takeItem: "mob.copper_golem.chest_interaction.take_item",
            takeItemFail: "mob.copper_golem.chest_interaction.take_item_fail"
        },
        renderControllers: [
            "controller.render.copper_golem_flower",
            "controller.render.copper_golem",
            "controller.render.copper_golem_eyes"
        ],
        spawnEgg: { texture: "spawn_egg_copper_golem" },
        enableAttachables: true
    }
});
