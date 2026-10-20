import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const ToolSmithTradesTemplate = createBPTrading({
    tiers: [
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:coal:0",
                            quantity: {
                                min: 16,
                                max: 24
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald"
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 5,
                                max: 7
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:iron_shovel",
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
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:iron_ingot",
                            quantity: {
                                min: 7,
                                max: 9
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald"
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 9,
                                max: 10
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:iron_pickaxe",
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
                    ]
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:diamond",
                            quantity: {
                                min: 3,
                                max: 4
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald"
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 12,
                                max: 15
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:diamond_pickaxe",
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
                    ]
                }
            ]
        }
    ]
});
