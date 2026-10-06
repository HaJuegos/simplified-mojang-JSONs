import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/entities/EntityTemplateBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/entities/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";

/**
 * Plantilla vanilla del NPC para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 * @author HaJuegos - 05-10-2026
 */
export const NpcTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Npc,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isExperimental: false,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {},
    components: [
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            lookTime: {
                min: 1,
                max: 2
            },
            lookDistance: 6
        }),
        new BPEntityComponents.SetCollisionBox({
            height: 2.1,
            width: 0.6
        }),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    cause: "all",
                    dealsDamage: "no"
                }
            ]
        }),
        new BPEntityComponents.SetFireImmune(),
        new BPEntityComponents.SetLoot({
            table: "loot_tables/empty.json"
        }),
        new BPEntityComponents.SetMovement({
            value: 0.5
        }),
        new BPEntityComponents.SetNameable({
            allowNameTagRenaming: false,
            alwaysShow: false
        }),
        new BPEntityComponents.SetNpc({
            npcData: {
                pickerOffsets: {
                    scale: [1.7, 1.7, 1.7],
                    translate: [0, 20, 0]
                },
                portraitOffsets: {
                    scale: [1.75, 1.75, 1.75],
                    translate: [-7, 50, 0]
                },
                skinList: [
                    {
                        variant: 0
                    },
                    {
                        variant: 1
                    },
                    {
                        variant: 2
                    },
                    {
                        variant: 3
                    },
                    {
                        variant: 4
                    },
                    {
                        variant: 5
                    },
                    {
                        variant: 6
                    },
                    {
                        variant: 7
                    },
                    {
                        variant: 8
                    },
                    {
                        variant: 9
                    },
                    {
                        variant: 10
                    },
                    {
                        variant: 11
                    },
                    {
                        variant: 12
                    },
                    {
                        variant: 13
                    },
                    {
                        variant: 14
                    },
                    {
                        variant: 15
                    },
                    {
                        variant: 16
                    },
                    {
                        variant: 17
                    },
                    {
                        variant: 18
                    },
                    {
                        variant: 19
                    },
                    {
                        variant: 25
                    },
                    {
                        variant: 26
                    },
                    {
                        variant: 27
                    },
                    {
                        variant: 28
                    },
                    {
                        variant: 29
                    },
                    {
                        variant: 30
                    },
                    {
                        variant: 31
                    },
                    {
                        variant: 32
                    },
                    {
                        variant: 33
                    },
                    {
                        variant: 34
                    },
                    {
                        variant: 20
                    },
                    {
                        variant: 21
                    },
                    {
                        variant: 22
                    },
                    {
                        variant: 23
                    },
                    {
                        variant: 24
                    },
                    {
                        variant: 35
                    },
                    {
                        variant: 36
                    },
                    {
                        variant: 37
                    },
                    {
                        variant: 38
                    },
                    {
                        variant: 39
                    },
                    {
                        variant: 40
                    },
                    {
                        variant: 41
                    },
                    {
                        variant: 42
                    },
                    {
                        variant: 43
                    },
                    {
                        variant: 44
                    },
                    {
                        variant: 50
                    },
                    {
                        variant: 51
                    },
                    {
                        variant: 52
                    },
                    {
                        variant: 53
                    },
                    {
                        variant: 54
                    },
                    {
                        variant: 45
                    },
                    {
                        variant: 46
                    },
                    {
                        variant: 47
                    },
                    {
                        variant: 48
                    },
                    {
                        variant: 49
                    },
                    {
                        variant: 55
                    },
                    {
                        variant: 56
                    },
                    {
                        variant: 57
                    },
                    {
                        variant: 58
                    },
                    {
                        variant: 59
                    }
                ]
            }
        }),
        new BPEntityComponents.SetPersistent(),
        new BPEntityComponents.SetPhysics(),
        new BPEntityComponents.SetTypeFamily({
            family: ["npc", "mob"]
        })
    ],
    events: {}
});
