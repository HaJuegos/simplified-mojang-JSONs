import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const ButcherTradesTemplate = createBPTrading({
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
                                                min: 14,
                                                max: 14
                                            },
                                            item: "minecraft:chicken",
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
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:rabbit",
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
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 7,
                                                max: 7
                                            },
                                            item: "minecraft:porkchop",
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
                                            item: "minecraft:rabbit_stew",
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
                                                min: 15,
                                                max: 15
                                            },
                                            item: "minecraft:coal:0",
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
                                                min: 8,
                                                max: 8
                                            },
                                            item: "minecraft:cooked_chicken",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 16
                        },
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
                                                min: 5,
                                                max: 5
                                            },
                                            item: "minecraft:cooked_porkchop",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 16
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
                                                min: 10,
                                                max: 10
                                            },
                                            item: "minecraft:beef",
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
                            maxUses: 16
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 7,
                                                max: 7
                                            },
                                            item: "minecraft:muttonraw",
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
                            maxUses: 16
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
                                                min: 10,
                                                max: 10
                                            },
                                            item: "minecraft:dried_kelp_block",
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
                                                min: 10,
                                                max: 10
                                            },
                                            item: "minecraft:sweet_berries",
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
                }
            ],
            totalExpRequired: 250
        }
    ]
});
