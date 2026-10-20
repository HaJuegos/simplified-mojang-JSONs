import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
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
                                                max: 10
                                            },
                                            item: "minecraft:clay_ball",
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
                                                min: 10,
                                                max: 10
                                            },
                                            item: "minecraft:brick",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            maxUses: 16
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
                                                max: 20
                                            },
                                            item: "minecraft:stone",
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
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:chiseled_stone_bricks",
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
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 16,
                                                max: 16
                                            },
                                            item: "minecraft:granite",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            quantity: {
                                                min: 16,
                                                max: 16
                                            },
                                            item: "minecraft:diorite",
                                            functions: [],
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            quantity: {
                                                min: 16,
                                                max: 16
                                            },
                                            item: "minecraft:andesite",
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
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:polished_granite",
                                            functions: []
                                        },
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:polished_diorite",
                                            functions: []
                                        },
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:polished_andesite",
                                            functions: []
                                        },
                                        {
                                            quantity: {
                                                min: 4,
                                                max: 4
                                            },
                                            item: "minecraft:dripstone_block",
                                            functions: []
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
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
                    numToSelect: -1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            quantity: {
                                                min: 12,
                                                max: 12
                                            },
                                            item: "minecraft:quartz",
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
                                            item: "minecraft:white_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:orange_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:magenta_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:light_blue_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:yellow_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:lime_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:pink_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:gray_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:light_gray_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:cyan_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:purple_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:blue_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:brown_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:green_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:red_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:black_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:black_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:blue_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:brown_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:cyan_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:gray_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:green_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:light_blue_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:lime_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:magenta_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:orange_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:pink_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:purple_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:red_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:silver_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:white_glazed_terracotta",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:yellow_glazed_terracotta",
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
                    numToSelect: -1,
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
                                            item: "minecraft:quartz_block",
                                            functions: []
                                        },
                                        {
                                            item: "minecraft:quartz_pillar",
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
