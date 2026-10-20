import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const StoneMasonTradesTemplate = createBPTrading({
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
                                                min: 10,
                                                max: 13
                                            },
                                            item: "minecraft:clay_ball",
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
                                                max: 2
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
                                            quantity: {
                                                min: 16,
                                                max: 16
                                            },
                                            item: "minecraft:brick",
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
                                                min: 20,
                                                max: 26
                                            },
                                            item: "minecraft:stone:0",
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
                                                max: 2
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
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:stonebrick:3",
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
                                                min: 16,
                                                max: 21
                                            },
                                            item: "minecraft:stone:1",
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
                                                min: 16,
                                                max: 21
                                            },
                                            item: "minecraft:stone:5",
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
                                                min: 16,
                                                max: 21
                                            },
                                            item: "minecraft:stone:3",
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
                                                max: 2
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
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:stone:2",
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
                                                max: 2
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
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:stone:6",
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
                                                max: 2
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
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:stone:4",
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
                                                min: 20,
                                                max: 26
                                            },
                                            item: "minecraft:quartz",
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
            totalExpRequired: 3
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
                                                max: 2
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
                                            item: "minecraft:quartz_block:2",
                                            functions: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            totalExpRequired: 4
        }
    ]
});
