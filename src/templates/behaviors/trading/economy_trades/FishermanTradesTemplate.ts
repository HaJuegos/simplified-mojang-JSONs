import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";
import { EntityFilters } from "../../../../utils/EntityFilters";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const FishermanTradesTemplate = createBPTrading({
    tiers: [
        {
            totalExpRequired: 0,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:string",
                                    quantity: 20,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 2,
                            maxUses: 16,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:coal:0",
                                    quantity: 10,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 2,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:bucket:2",
                                    quantity: 1
                                }
                            ],
                            traderExp: 1,
                            maxUses: 16,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:fish",
                                    quantity: 6
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:cooked_fish",
                                    quantity: 6
                                }
                            ],
                            traderExp: 1,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 10,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:fish",
                                    quantity: 15,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 10,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 2,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:campfire",
                                    quantity: 1
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:salmon",
                                    quantity: 6
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:cooked_salmon",
                                    quantity: 6
                                }
                            ],
                            traderExp: 5,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 70,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:salmon",
                                    quantity: 13,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 20,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:fishing_rod",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "enchant_with_levels",
                                            treasure: false,
                                            levels: {
                                                min: 5,
                                                max: 19
                                            }
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
                            maxUses: 3,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 150,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:clownfish",
                                    quantity: 6,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 250,
            groups: [
                {
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:pufferfish",
                                    quantity: 4,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:oak_boat",
                                            quantity: 1,
                                            priceMultiplier: 0.05,
                                            filters: EntityFilters.isMarkVariant(0)
                                        },
                                        {
                                            item: "minecraft:spruce_boat",
                                            quantity: 1,
                                            priceMultiplier: 0.05,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(4),
                                                EntityFilters.isMarkVariant(6)
                                            )
                                        },
                                        {
                                            item: "minecraft:jungle_boat",
                                            quantity: 1,
                                            priceMultiplier: 0.05,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(1),
                                                EntityFilters.isMarkVariant(2)
                                            )
                                        },
                                        {
                                            item: "minecraft:acacia_boat",
                                            quantity: 1,
                                            priceMultiplier: 0.05,
                                            filters: EntityFilters.isMarkVariant(3)
                                        },
                                        {
                                            item: "minecraft:dark_oak_boat",
                                            quantity: 1,
                                            priceMultiplier: 0.05,
                                            filters: EntityFilters.isMarkVariant(5)
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        }
    ]
});
