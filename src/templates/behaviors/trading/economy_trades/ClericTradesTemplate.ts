import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const ClericTradesTemplate = createBPTrading({
    tiers: [
        {
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 32,
                                                max: 32
                                            },
                                            item: "minecraft:rotten_flesh",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 2,
                            maxUses: 16
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 2,
                                                max: 2
                                            },
                                            item: "minecraft:redstone",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            maxUses: 12
                        }
                    ]
                }
            ],
            totalExpRequired: 0
        },
        {
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 3,
                                                max: 3
                                            },
                                            item: "minecraft:gold_ingot",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:dye:4",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12
                        }
                    ]
                }
            ],
            totalExpRequired: 10
        },
        {
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 2,
                                                max: 2
                                            },
                                            item: "minecraft:rabbit_foot",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 20,
                            maxUses: 12
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:emerald",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:glowstone",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12
                        }
                    ]
                }
            ],
            totalExpRequired: 70
        },
        {
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:turtle_shell_piece",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 9,
                                                max: 9
                                            },
                                            item: "minecraft:glass_bottle",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 5,
                                                max: 5
                                            },
                                            item: "minecraft:emerald",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:ender_pearl",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12
                        }
                    ]
                }
            ],
            totalExpRequired: 150
        },
        {
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 22,
                                                max: 22
                                            },
                                            item: "minecraft:nether_wart",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 3,
                                                max: 3
                                            },
                                            item: "minecraft:emerald",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:experience_bottle",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12
                        }
                    ]
                }
            ],
            totalExpRequired: 250
        }
    ]
});
