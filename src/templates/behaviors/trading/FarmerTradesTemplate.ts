import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const FarmerTradesTemplate = createBPTrading({
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
                                                min: 18,
                                                max: 22
                                            },
                                            item: "minecraft:wheat",
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
                                                min: 15,
                                                max: 19
                                            },
                                            item: "minecraft:potato",
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
                                                min: 15,
                                                max: 19
                                            },
                                            item: "minecraft:carrot",
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
                                                min: 2,
                                                max: 4
                                            },
                                            item: "minecraft:bread",
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
                                            quantity: {
                                                min: 8,
                                                max: 13
                                            },
                                            item: "minecraft:pumpkin",
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
                                                min: 2,
                                                max: 3
                                            },
                                            item: "minecraft:pumpkin_pie",
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
                                            quantity: {
                                                min: 7,
                                                max: 12
                                            },
                                            item: "minecraft:melon_block",
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
                                                min: 5,
                                                max: 7
                                            },
                                            item: "minecraft:apple",
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
                                                min: 6,
                                                max: 10
                                            },
                                            item: "minecraft:cookie",
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
                                            item: "minecraft:cake",
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
