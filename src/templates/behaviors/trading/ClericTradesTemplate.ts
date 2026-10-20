import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const ClericTradesTemplate = createBPTrading({
    tiers: [
        {
            groups: [
                {
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 36,
                                                max: 40
                                            },
                                            item: "minecraft:rotten_flesh",
                                            functions: []
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
                            ]
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 8,
                                                max: 10
                                            },
                                            item: "minecraft:gold_ingot",
                                            functions: []
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
                            ]
                        }
                    ]
                }
            ],
            totalExpRequired: 0
        },
        {
            groups: [
                {
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                max: 4
                                            },
                                            item: "minecraft:redstone",
                                            functions: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                max: 2
                                            },
                                            item: "minecraft:dye:4",
                                            functions: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            totalExpRequired: 1
        },
        {
            groups: [
                {
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:emerald",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                max: 3
                                            },
                                            item: "minecraft:glowstone",
                                            functions: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 7
                                            },
                                            item: "minecraft:emerald",
                                            functions: []
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
                            ]
                        }
                    ]
                }
            ],
            totalExpRequired: 2
        },
        {
            groups: [
                {
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 3,
                                                max: 11
                                            },
                                            item: "minecraft:emerald",
                                            functions: []
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
                            ]
                        }
                    ]
                }
            ],
            totalExpRequired: 3
        }
    ]
});
