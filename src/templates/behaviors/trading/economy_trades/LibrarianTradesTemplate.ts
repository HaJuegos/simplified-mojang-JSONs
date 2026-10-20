import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const LibrarianTradesTemplate = createBPTrading({
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
                                    item: "minecraft:paper",
                                    quantity: 24,
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
                                    quantity: 9,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:bookshelf",
                                    quantity: 1
                                }
                            ],
                            traderExp: 1,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    priceMultiplier: 0.2
                                },
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "enchant_book_for_trading",
                                            baseCost: 2,
                                            baseRandomCost: 5,
                                            perLevelRandomCost: 10,
                                            perLevelCost: 3
                                        }
                                    ]
                                }
                            ],
                            traderExp: 1,
                            maxUses: 12,
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
                                    item: "minecraft:book",
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
                            traderExp: 10,
                            maxUses: 12,
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
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:lantern",
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
                                    priceMultiplier: 0.2
                                },
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "enchant_book_for_trading",
                                            baseCost: 2,
                                            baseRandomCost: 5,
                                            perLevelRandomCost: 10,
                                            perLevelCost: 3
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
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
                                    item: "minecraft:dye:0",
                                    quantity: 5,
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
                            maxUses: 12,
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
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:glass",
                                    quantity: 4
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    priceMultiplier: 0.2
                                },
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "enchant_book_for_trading",
                                            baseCost: 2,
                                            baseRandomCost: 5,
                                            perLevelRandomCost: 10,
                                            perLevelCost: 3
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12,
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
                                    item: "minecraft:writable_book",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:writable_book",
                                    quantity: 1,
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
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 4,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 5,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:clock",
                                    quantity: 1
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    priceMultiplier: 0.2
                                },
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:book",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "enchant_book_for_trading",
                                            baseCost: 2,
                                            baseRandomCost: 5,
                                            perLevelRandomCost: 10,
                                            perLevelCost: 3
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
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
                                    item: "minecraft:red_candle",
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
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:red_candle",
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
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:red_candle",
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
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:yellow_candle",
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
