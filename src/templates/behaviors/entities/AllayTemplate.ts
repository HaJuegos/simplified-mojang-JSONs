import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { createBPEntityTemplate } from "../../../builders/behaviors/EntityTemplateBuilder";
import { SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BPEntityComponents } from "../../../components/behaviors/entities";
import { MoLang } from "../../../utils/MoLang";
import { EntityFilters } from "../../../utils/EntityFilters";

/**
 * Plantilla vanilla del Allay para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {FinalEntityBuilderTemplate}
 */
export const AllayTemplate = createBPEntityTemplate({
    id: MinecraftEntityTypes.Allay,
    description: {
        spawnCategory: SpawnCategoryEntities.Creature,
        isSummonable: true,
        isSpawneable: true
    },
    componentsGroups: {
        "pickup_item": [
            new BPEntityComponents.SetBehaviorPickupItems({
                priority: 2,
                canPickupAnyItem: false,
                searchHeight: 32,
                goalRadius: 2.2,
                canPickupToHandOrEquipment: false,
                maxDist: 32,
                pickupBasedOnChance: false,
                pickupSameItemsAsInHand: true,
                speedMultiplier: 6
            })
        ],
        "pickup_item_delay": [
            new BPEntityComponents.SetTimer({
                looping: false,
                time: 3,
                timeDownEvent: {
                    event: "pickup_item_delay_complete",
                    target: 'self'
                }
            })
        ]
    },
    components: [
        new BPEntityComponents.SetAmbientSoundInterval({
            minRandomCooldownSound: 5,
            maxRandomCooldownSound: 5,
            soundEvents: [
                {
                    soundID: "ambient",
                    condition: `${MoLang.isUsingItem()}`
                },
                {
                    soundID: "ambient.tame",
                    condition: `!${MoLang.isUsingItem()}`
                }
            ]
        }),
        new BPEntityComponents.SetBalloonable({
            mass: 0.5
        }),
        new BPEntityComponents.SetBehaviorFloat({
            priority: 7
        }),
        new BPEntityComponents.SetBehaviorFollowOwner({
            priority: 6,
            canTeleport: true,
            ignoreVibration: true,
            speedMultiplier: 8,
            startDistance: 16,
            stopDistance: 4
        }),
        new BPEntityComponents.SetBehaviorGoAndGiveItemsToNoteblock({
            priority: 3,
            runSpeed: 8,
            throwSound: "item_thrown",
            onItemThrow: [
                {
                    event: "pickup_item_delay",
                    target: "self"
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorGoAndGiveItemsToOwner({
            priority: 4,
            runSpeed: 8,
            throwSound: "item_thrown",
            onItemThrow: [
                {
                    event: "pickup_item_delay",
                    target: "self"
                }
            ]
        }),
        new BPEntityComponents.SetBehaviorLookAtPlayer({
            priority: 8,
            lookDistance: 6
        }),
        new BPEntityComponents.SetBehaviorPanic({
            priority: 1,
            speedMultiplier: 2.0
        }),
        new BPEntityComponents.SetBehaviorRandomHover({
            priority: 9,
            hoverHeight: [1, 4],
            yDist: 8,
            interval: 1,
            xzDist: 8,
            yOffset: -1
        }),
        new BPEntityComponents.SetBehaviorRandomLookAround({
            priority: 8
        }),
        new BPEntityComponents.SetBehaviorStayNearNoteblock({
            priority: 5,
            stopDistance: 4,
            startDistance: 16
        }),
        new BPEntityComponents.SetBreathable({
            suffocateTime: 0,
            totalSupply: 15
        }),
        new BPEntityComponents.SetCanFly(),
        new BPEntityComponents.SetCollisionBox({
            height: 0.6,
            width: 0.33
        }),
        new BPEntityComponents.SetConditionalBandwidthOptimization(),
        new BPEntityComponents.SetDamageSensor({
            triggers: [
                {
                    dealsDamage: 'no',
                    onDamage: {
                        filters: EntityFilters.allOf(
                            EntityFilters.isFamily('player', 'other'),
                            EntityFilters.isOwner(true, 'other')
                        )
                    }
                }
            ]
        }),
        new BPEntityComponents.SetFlyingSpeed({
            value: 0.1
        }),
        new BPEntityComponents.SetFollowRange({
            value: 1024
        }),
        new BPEntityComponents.SetGameEventMovementTracking({
            emitFlap: true
        }),
        new BPEntityComponents.SetHealth({
            value: 20
        }),
        new BPEntityComponents.SetHurtOnCondition({
            damageConditions: [
                {
                    cause: 'lava',
                    damagePerTick: 4,
                    filters: EntityFilters.inLava()
                }
            ]
        }),
        new BPEntityComponents.SetInteract({
            interactions: [
                {
                    giveItem: true,
                    interactText: 'action.interact.allay',
                    takeItem: true,
                    onInteract: {
                        filters: EntityFilters.allOf(
                            EntityFilters.hasEquipment('lead', 'hand', 'other', 'not'),
                            EntityFilters.isSneakHeld(false, 'other'),
                            EntityFilters.anyOf(
                                EntityFilters.allSlotsEmpty('hand', 'other', 'not'),
                                EntityFilters.allSlotsEmpty('hand', 'self', 'not')
                            )
                        )
                    }
                }
            ]
        }),
        new BPEntityComponents.SetInventory({
            inventorySize: 1
        }),
        new BPEntityComponents.SetIsHiddenWhenInvisible(),
        new BPEntityComponents.SetJumpStatic(),
        new BPEntityComponents.SetLeashable(),
        new BPEntityComponents.SetLeashableTo(),
        new BPEntityComponents.SetMovement({
            value: 0.1
        }),
        new BPEntityComponents.SetMovementHover(),
        new BPEntityComponents.SetNameable(),
        new BPEntityComponents.SetNavigationHover({
            avoidDamageBlocks: true,
            canPassDoors: false,
            canPathFromAir: true,
            avoidSun: false,
            avoidWater: true,
            canPathOverWater: true,
            canSink: false
        }),
        new BPEntityComponents.SetPhysics({
            hasGravity: true
        }),
        new BPEntityComponents.SetPushableByEntity(),
        new BPEntityComponents.SetPushableByBlock(),
        new BPEntityComponents.SetTypeFamily({
            family: [
                'allay',
                'mob'
            ]
        }),
        new BPEntityComponents.SetVibrationListener()
    ],
    events: {
        "minecraft:entity_spawned": {
            add: {
                componentGroups: [
                    "pickup_item"
                ]
            }
        },
        "pickup_item_delay_complete": {
            remove: {
                componentGroups: [
                    "pickup_item_delay"
                ]
            },
            add: {
                componentGroups: [
                    "pickup_item"
                ]
            }
        },
        "pickup_item_delay": {
            remove: {
                componentGroups: [
                    "pickup_item"
                ]
            },
            add: {
                componentGroups: [
                    "pickup_item_delay"
                ]
            }
        }
    }
});

console.log(AllayTemplate().finalBuild());