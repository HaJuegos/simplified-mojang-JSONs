import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const ShepherdTradesTemplate = createBPTrading({
    tiers: [
        {
            totalExpRequired: 0,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:white_wool",
                                            quantity: 18,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:gray_wool",
                                            quantity: 18,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:brown_wool",
                                            quantity: 18,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:black_wool",
                                            quantity: 18,
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 2,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 2,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:shears",
                                    quantity: 1
                                }
                            ],
                            traderExp: 1,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 10,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:black_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:gray_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:lime_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:light_blue_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:white_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 10,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:white_wool"
                                        },
                                        {
                                            item: "minecraft:orange_wool"
                                        },
                                        {
                                            item: "minecraft:magenta_wool"
                                        },
                                        {
                                            item: "minecraft:light_blue_wool"
                                        },
                                        {
                                            item: "minecraft:yellow_wool"
                                        },
                                        {
                                            item: "minecraft:lime_wool"
                                        },
                                        {
                                            item: "minecraft:pink_wool"
                                        },
                                        {
                                            item: "minecraft:gray_wool"
                                        },
                                        {
                                            item: "minecraft:light_gray_wool"
                                        },
                                        {
                                            item: "minecraft:cyan_wool"
                                        },
                                        {
                                            item: "minecraft:purple_wool"
                                        },
                                        {
                                            item: "minecraft:blue_wool"
                                        },
                                        {
                                            item: "minecraft:brown_wool"
                                        },
                                        {
                                            item: "minecraft:green_wool"
                                        },
                                        {
                                            item: "minecraft:red_wool"
                                        },
                                        {
                                            item: "minecraft:black_wool"
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 16,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:white_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:orange_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:magenta_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:light_blue_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:yellow_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:lime_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:pink_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:gray_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:light_gray_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:cyan_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:purple_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:blue_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:brown_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:green_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:red_carpet",
                                            quantity: 4
                                        },
                                        {
                                            item: "minecraft:black_carpet",
                                            quantity: 4
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 70,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:red_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:light_gray_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:pink_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:yellow_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:orange_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 20,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:bed",
                                            functions: [
                                                {
                                                    function: "random_aux_value",
                                                    values: {
                                                        min: 0,
                                                        max: 15
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 150,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:green_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:brown_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:blue_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:purple_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:cyan_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        },
                                        {
                                            item: "minecraft:magenta_dye",
                                            quantity: 12,
                                            priceMultiplier: 0.05
                                        }
                                    ]
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 16,
                            rewardExp: true
                        }
                    ]
                },
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 3,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:banner",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "random_aux_value",
                                            values: {
                                                min: 0,
                                                max: 15
                                            }
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        },
        {
            totalExpRequired: 250,
            groups: [
                {
                    numToSelect: 1,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 2,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:painting",
                                    quantity: 3
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
                            rewardExp: true
                        }
                    ]
                }
            ]
        }
    ]
});
