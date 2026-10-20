import { createBPTrading } from "../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @deprecated - Estos archivos son viejos y no son compatibles con las versiones recientes de los aldeanos. Usa los de {@link .EconomyTrades} que es una buena alternativa.
 * @author HaJuegos - 20-10-2026
 */
export const LeatherWorkerTradesTemplate = createBPTrading({
    tiers: [
        {
            trades: [
                {
                    wants: [
                        {
                            item: "minecraft:leather",
                            quantity: {
                                min: 9,
                                max: 12
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
                                min: 2,
                                max: 4
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:leather_leggings"
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
                                max: 12
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:leather_chestplate",
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
                            item: "minecraft:emerald",
                            quantity: {
                                min: 8,
                                max: 10
                            }
                        }
                    ],
                    gives: [
                        {
                            item: "minecraft:saddle"
                        }
                    ]
                }
            ]
        }
    ]
});
