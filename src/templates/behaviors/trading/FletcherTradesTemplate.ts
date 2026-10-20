import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const FletcherTradesTemplate = createBPTrading({
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
                                                min: 15,
                                                max: 20
                                            },
                                            item: "minecraft:string",
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
                                                min: 8,
                                                max: 12
                                            },
                                            item: "minecraft:arrow",
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
                                                min: 10,
                                                max: 10
                                            },
                                            item: "minecraft:gravel",
                                            functions: []
                                        }
                                    ]
                                },
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
                                            item: "minecraft:flint",
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
                                                min: 2,
                                                max: 3
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
                                            item: "minecraft:bow",
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
        }
    ]
});
