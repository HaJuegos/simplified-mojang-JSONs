import { createBPTrading } from "../../../../builders/behaviors/trading/TradingTemplateBuilder";
import { EntityFilters } from "../../../../utils/EntityFilters";

/**
 * Plantilla vanilla del trading para la sobreescritura del mismo. Sus datos base ya estan definidos.
 * @type {BPTradingOverInstance}
 * @author HaJuegos - 20-10-2026
 */
export const CartographerTradesTemplate = createBPTrading({
    tiers: [
        {
            totalExpRequired: 0,
            groups: [
                {
                    numToSelect: 2,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:paper",
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
                            traderExp: 2,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 7,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:empty_map",
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
                    numToSelect: 2,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:glass_pane",
                                    quantity: 11,
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
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "village_taiga"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(0),
                                                    EntityFilters.isMarkVariant(4),
                                                    EntityFilters.isMarkVariant(5)
                                                )
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "swamp_hut"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(2),
                                                    EntityFilters.isMarkVariant(4),
                                                    EntityFilters.isMarkVariant(6)
                                                )
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "village_snowy"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(5),
                                                    EntityFilters.isMarkVariant(6)
                                                ),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "village_savanna"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(0),
                                                    EntityFilters.isMarkVariant(1),
                                                    EntityFilters.isMarkVariant(2)
                                                ),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "village_plains"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(1),
                                                    EntityFilters.isMarkVariant(3),
                                                    EntityFilters.isMarkVariant(4),
                                                    EntityFilters.isMarkVariant(6)
                                                )
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "jungle_temple"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.inOverworld(),
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(1),
                                                    EntityFilters.isMarkVariant(3),
                                                    EntityFilters.isMarkVariant(5)
                                                )
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 5,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    choice: [
                                        {
                                            item: "minecraft:map",
                                            quantity: 1,
                                            functions: [
                                                {
                                                    function: "exploration_map",
                                                    destination: "village_desert"
                                                }
                                            ],
                                            filters: EntityFilters.allOf(
                                                EntityFilters.anyOf(
                                                    EntityFilters.isMarkVariant(2),
                                                    EntityFilters.isMarkVariant(3)
                                                )
                                            )
                                        }
                                    ]
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
                    numToSelect: 2,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:compass",
                                    quantity: 1,
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
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 13,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:map",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "exploration_map",
                                            destination: "monument"
                                        }
                                    ],
                                    filters: EntityFilters.inOverworld()
                                }
                            ],
                            traderExp: 10,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 12,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:map",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "exploration_map",
                                            destination: "trial_chambers"
                                        }
                                    ],
                                    filters: EntityFilters.inOverworld()
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
                    numToSelect: 2,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 7,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:frame",
                                    quantity: 1
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:4",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(4),
                                                EntityFilters.isMarkVariant(6)
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:15",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(0),
                                                EntityFilters.isMarkVariant(4)
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:1",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(3),
                                                EntityFilters.isMarkVariant(4),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:2",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(1),
                                                EntityFilters.isMarkVariant(2),
                                                EntityFilters.isMarkVariant(3),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:10",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(1),
                                                EntityFilters.isMarkVariant(6),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:5",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(5),
                                                EntityFilters.isMarkVariant(6),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:6",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(1),
                                                EntityFilters.isMarkVariant(4),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:11",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(0),
                                                EntityFilters.isMarkVariant(2),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:14",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(1),
                                                EntityFilters.isMarkVariant(3),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:3",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(0),
                                                EntityFilters.isMarkVariant(2),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:13",
                                            quantity: 1,
                                            filters: EntityFilters.isMarkVariant(3)
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:12",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(4),
                                                EntityFilters.isMarkVariant(5)
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:9",
                                            quantity: 1,
                                            filters: EntityFilters.anyOf(
                                                EntityFilters.isMarkVariant(0),
                                                EntityFilters.isMarkVariant(6),
                                            )
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner:8",
                                            quantity: 1,
                                            filters: EntityFilters.isMarkVariant(1)
                                        }
                                    ]
                                }
                            ],
                            traderExp: 15,
                            maxUses: 12,
                            rewardExp: true
                        },
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
                                    choice: [
                                        {
                                            item: "minecraft:banner",
                                            quantity: 1,
                                            filters: EntityFilters.isMarkVariant(5)
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
                    numToSelect: 2,
                    trades: [
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 8,
                                    priceMultiplier: 0.05
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:globe_banner_pattern",
                                    quantity: 1
                                }
                            ],
                            traderExp: 30,
                            maxUses: 12,
                            rewardExp: true
                        },
                        {
                            wants: [
                                {
                                    item: "minecraft:emerald",
                                    quantity: 14,
                                    priceMultiplier: 0.05
                                },
                                {
                                    item: "minecraft:compass",
                                    quantity: 1
                                }
                            ],
                            gives: [
                                {
                                    item: "minecraft:map",
                                    quantity: 1,
                                    functions: [
                                        {
                                            function: "exploration_map",
                                            destination: "mansion"
                                        }
                                    ],
                                    filters: EntityFilters.inOverworld()
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
