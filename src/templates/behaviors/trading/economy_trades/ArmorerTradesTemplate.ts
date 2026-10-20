import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const ArmorerTradesTemplate = createBPTrading({
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
                                    item: "minecraft:coal:0",
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
                                    quantity: 7,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:iron_leggings",
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
                                    quantity: 4,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:iron_boots",
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
                                    quantity: 5,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:iron_helmet",
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
                                    quantity: 9,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:iron_chestplate",
                                    quantity: 1
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
                                    item: "minecraft:iron_ingot",
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
                                    quantity: 36,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:bell",
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
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:chainmail_boots",
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
                                    quantity: 3,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:chainmail_leggings",
                                    quantity: 1
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
                                    item: "minecraft:bucket:10",
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
                                    item: "minecraft:diamond",
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
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:chainmail_helmet",
                                    quantity: 1
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
                                    quantity: 4,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:chainmail_chestplate",
                                    quantity: 1
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
                                    quantity: 5,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:shield",
                                    quantity: 1
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
                                    item: "minecraft:emerald",
                                    quantity: 14,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:diamond_leggings",
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
                            traderExp: 15,
                            maxUses: 3,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:diamond_boots",
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
                            traderExp: 15,
                            maxUses: 3,
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
                                    quantity: 8,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:diamond_helmet",
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
                            traderExp: 30,
                            maxUses: 3,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 16,
                                    priceMultiplier: 0.2
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:diamond_chestplate",
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
                            traderExp: 30,
                            maxUses: 3,
                            rewardExp: true
                        }
                    ]
                }
            ]
        }
    ]
});
