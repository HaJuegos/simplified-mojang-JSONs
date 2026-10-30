import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const VillagerV2Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:villager_v2",
    params: {
        materials: {
            default: "villager_v2",
            masked: "villager_v2_masked"
        },
        textures: {
            base: "textures/entity/villager2/villager",
            base2: "textures/entity/villager2/villager",
            base3: "textures/entity/villager2/villager",
            base4: "textures/entity/villager2/villager",
            base5: "textures/entity/villager2/villager",
            base6: "textures/entity/villager2/villager",
            desert: "textures/entity/villager2/biomes/biome_desert",
            jungle: "textures/entity/villager2/biomes/biome_jungle",
            plains: "textures/entity/villager2/biomes/biome_plains",
            savanna: "textures/entity/villager2/biomes/biome_savanna",
            snow: "textures/entity/villager2/biomes/biome_snow",
            swamp: "textures/entity/villager2/biomes/biome_swamp",
            taiga: "textures/entity/villager2/biomes/biome_taiga",
            armorer: "textures/entity/villager2/professions/armorer",
            butcher: "textures/entity/villager2/professions/butcher",
            cartographer: "textures/entity/villager2/professions/cartographer",
            cleric: "textures/entity/villager2/professions/cleric",
            farmer: "textures/entity/villager2/professions/farmer",
            fisherman: "textures/entity/villager2/professions/fisherman",
            fletcher: "textures/entity/villager2/professions/fletcher",
            leatherworker: "textures/entity/villager2/professions/leatherworker",
            librarian: "textures/entity/villager2/professions/librarian",
            shepherd: "textures/entity/villager2/professions/shepherd",
            tool_smith: "textures/entity/villager2/professions/toolsmith",
            weapon_smith: "textures/entity/villager2/professions/weaponsmith",
            stonemason: "textures/entity/villager2/professions/stonemason",
            nitwit: "textures/entity/villager2/professions/nitwit",
            unskilled: "textures/entity/villager2/professions/unskilled",
            level_stone: "textures/entity/villager2/levels/level_stone",
            level_iron: "textures/entity/villager2/levels/level_iron",
            level_gold: "textures/entity/villager2/levels/level_gold",
            level_emerald: "textures/entity/villager2/levels/level_emerald",
            level_diamond: "textures/entity/villager2/levels/level_diamond",
            baby_base: "textures/entity/villager2/villager_baby",
            baby_base2: "textures/entity/villager2/villager_baby",
            baby_base3: "textures/entity/villager2/villager_baby",
            baby_base4: "textures/entity/villager2/villager_baby",
            baby_base5: "textures/entity/villager2/villager_baby",
            baby_base6: "textures/entity/villager2/villager_baby",
            baby_desert: "textures/entity/villager2/biomes/biome_desert_baby",
            baby_jungle: "textures/entity/villager2/biomes/biome_jungle_baby",
            baby_plains: "textures/entity/villager2/biomes/biome_plains_baby",
            baby_savanna: "textures/entity/villager2/biomes/biome_savanna_baby",
            baby_snow: "textures/entity/villager2/biomes/biome_snow_baby",
            baby_swamp: "textures/entity/villager2/biomes/biome_swamp_baby",
            baby_taiga: "textures/entity/villager2/biomes/biome_taiga_baby"
        },
        geometry: {
            default: "geometry.villager_v2",
            baby: "geometry.villager.baby"
        },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 0.9375`,
            preAnimation: [
                `${MoLang.variable("num_professions")} = 15;`,
                `${MoLang.variable("num_tiers")} = 3;`,
                `${MoLang.variable("profession_index")} = (${MoLang.variant()} < ${MoLang.variable("num_professions")} ? ${MoLang.variant()} : 0);`,
                `${MoLang.variable("level_index")} = ${MoLang.tradeTier()};`
            ],
            animate: ["controller_general", "controller_move", "controller_raise_arms"]
        },
        animations: {
            general: "animation.villager.general",
            look_at_target: "animation.common.look_at_target",
            move: "animation.villager.move",
            raise_arms: "animation.villager.raise_arms",
            baby_transform: "animation.villager.baby_transform",
            get_in_bed: "animation.villager.get_in_bed",
            get_in_bed_baby: "animation.villager.get_in_bed_baby",
            controller_general: "controller.animation.villager_v2.general",
            controller_move: "controller.animation.villager_v2.move",
            controller_raise_arms: "controller.animation.villager_v2.raise_arms"
        },
        renderControllers: [
            "controller.render.villager_v3_base",
            "controller.render.villager_v3_masked",
            "controller.render.villager_v3_level"
        ],
        spawnEgg: { texture: "spawn_egg_villager" }
    }
});
