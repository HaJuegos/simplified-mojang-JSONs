import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const CartographerTradesTemplate = createBPTrading({
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
                }
            ]
        },
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:compass",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emerald",
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
                                min: 7,
                                max: 11
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:emptyMap",
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
                                min: 12,
                                max: 20
                            }
                        },
                        {
                            item: "minecraft:compass",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:map",
                            functions: [
                                {
                                    function: "exploration_map",
                                    destination: "monument"
                                }
                            ]
                        }
                    ]
                },
                {
                    wants: [
                        {
                            item: "minecraft:emerald",
                            quantity: {
                                min: 16,
                                max: 28
                            }
                        },
                        {
                            item: "minecraft:compass",
                            quantity: 1
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:map",
                            functions: [
                                {
                                    function: "exploration_map",
                                    destination: "mansion"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
