import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const FletcherTradesTemplate = createBPTrading({
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
                                    item: "minecraft:stick",
                                    quantity: 32,
                                    priceMultiplier: 0.05
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
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:arrow",
                                    quantity: 16
                                }
                            ],
                            traderExp: 1,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:gravel",
                                    quantity: 10,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:flint",
                                    quantity: 10
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
                                    item: "minecraft:flint",
                                    quantity: 26,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12,
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
                                    item: "minecraft:bow",
                                    quantity: 1
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
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
                                    item: "minecraft:string",
                                    quantity: 14,
                                    priceMultiplier: 0.05
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
                                    item: "minecraft:crossbow",
                                    quantity: 1
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
                                    item: "minecraft:feather",
                                    quantity: 24,
                                    priceMultiplier: 0.05
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
                                    quantity: 2,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:bow",
                                    quantity: 1,
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
                            ],
                            traderExp: 15,
                            maxUses: 3,
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
                                    item: "minecraft:tripwire_hook",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
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
                                    item: "minecraft:crossbow",
                                    quantity: 1,
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
                            ],
                            traderExp: 15,
                            maxUses: 3,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 2,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:arrow",
                                    quantity: 5,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "nightvision"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "invisibility"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "leaping"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "fire_resistance"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "swiftness"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "slowness"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "water_breathing"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "healing"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "harming"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "poison"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "regeneration"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "strength"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "weakness"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "turtle_master"
                                                }
                                            ]
                                        },
                                        {
                                            item: "minecraft:arrow",
                                            quantity: 5,
                                            functions: [
                                                {
                                                    function: "set_potion",
                                                    id: "wither"
                                                }
                                            ]
                                        }
                                    ]
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
