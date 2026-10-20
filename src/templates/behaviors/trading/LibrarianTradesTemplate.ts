import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const LibrarianTradesTemplate = createBPTrading({
    tiers: [
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:paper",
                            quantity: {
                                min: 24,
                                max: 36
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald",
                            quantity: 1
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 5,
                                max: 64
                            }
                        },
                        {
                            item: "minecraft:book",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:enchanted_book",
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
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:book",
                            quantity: {
                                min: 8,
                                max: 10
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald",
                            quantity: 1
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 10,
                                max: 12
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:compass",
                            quantity: 1
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 3,
                                max: 4
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:bookshelf",
                            quantity: 1
                        }
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 10,
                                max: 12
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:clock",
                            quantity: 1
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:glass",
                            quantity: {
                                min: 3,
                                max: 5
                            }
                        }
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 5,
                                max: 64
                            }
                        },
                        {
                            item: "minecraft:book",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:enchanted_book",
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
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 5,
                                max: 64
                            }
                        },
                        {
                            item: "minecraft:book",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:enchanted_book",
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
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 20,
                                max: 22
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:name_tag",
                            quantity: 1
                        }
                    ]
                }
            ]
        }
    ]
});
