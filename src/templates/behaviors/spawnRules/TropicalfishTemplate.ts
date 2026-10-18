import { createBPSpawnRule } from "../../../builders/behaviors/spawnRules/SpawnRuleTemplateBuilder";
import { BPSpawnRuleComponents } from "../../../components/behaviors/spawnRules";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del spawn rule para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalSpawnRuleTemplateBuilder}
 * @author HaJuegos - 18-10-2026
 */
export const TropicalfishTemplate = createBPSpawnRule({
    idSpawnRule: "minecraft:tropicalfish",
    categoryControl: "water_animal",
    conditions: [
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 75
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 20
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 0,
                max: 64
            }),
            new BPSpawnRuleComponents.SetHerd([
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_anenonme"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_black_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_blue_dory"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_butterfly_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_clownfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cc_betta"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_dog_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_e_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_goat_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_moorish_idol"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_ornate_butterfly"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_parrot_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_queen_angel_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_lipped_benny"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_threadfin"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_tomato_clown"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_triggerfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tail_parrot"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("warm", "self", "=="),
                        EntityFilters.hasBiomeTag("lukewarm", "self", "==")
                    )
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 25
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 20
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 50,
                max: 64
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.allOf(
                    EntityFilters.hasBiomeTag("ocean", "self", "=="),
                    EntityFilters.anyOf(
                        EntityFilters.hasBiomeTag("warm", "self", "=="),
                        EntityFilters.hasBiomeTag("lukewarm", "self", "==")
                    )
                )
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 75
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                underground: 20
            }),
            new BPSpawnRuleComponents.SetHerd([
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_anenonme"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_black_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_blue_dory"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_butterfly_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_clownfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cc_betta"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_dog_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_e_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_goat_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_moorish_idol"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_ornate_butterfly"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_parrot_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_queen_angel_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_lipped_benny"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_threadfin"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_tomato_clown"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_triggerfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tail_parrot"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("lush_caves", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsUnderground(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 25
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                underground: 20
            }),
            new BPSpawnRuleComponents.SetHerd({
                minSize: 1,
                maxSize: 3
            }),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("lush_caves", "self", "==")
            )
        ],
        [
            new BPSpawnRuleComponents.SetSpawnsOnSurface(),
            new BPSpawnRuleComponents.SetSpawnsUnderwater(),
            new BPSpawnRuleComponents.SetDistanceFilter({
                min: 12,
                max: 32
            }),
            new BPSpawnRuleComponents.SetWeight({
                default: 25
            }),
            new BPSpawnRuleComponents.SetDensityLimit({
                surface: 20
            }),
            new BPSpawnRuleComponents.SetHeightFilter({
                min: 0,
                max: 64
            }),
            new BPSpawnRuleComponents.SetHerd([
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_anenonme"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_black_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_blue_dory"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_butterfly_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_clownfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_cc_betta"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_dog_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_e_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_goat_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_moorish_idol"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_ornate_butterfly"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_parrot_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_queen_angel_fish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_cichlid"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_lipped_benny"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_red_snapper"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_threadfin"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_tomato_clown"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_triggerfish"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tang"
                },
                {
                    minSize: 3,
                    maxSize: 5,
                    event: "minecraft:become_yellow_tail_parrot"
                }
            ]),
            new BPSpawnRuleComponents.SetBiomeFilter(
                EntityFilters.hasBiomeTag("mangrove_swamp", "self", "==")
            )
        ]
    ]
});
