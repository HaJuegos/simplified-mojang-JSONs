import { BehaviorEntityBuilder } from "../../../builders/behaviors/EntityBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BPEntityComponents } from "../../../components/behaviors/entities";

export class AllayVanillaTemplate extends BehaviorEntityBuilder {
    constructor () {
        super(MinecraftEntityTypes.Allay);

        this.setVersion(FormatVersionEntities.MostRecent);

        this.setDescParams({
            spawnCategory: SpawnCategoryEntities.Creature,
            isSummonable: true,
            isSpawneable: true
        });

        this.setComponentGroups(this.vanillaDynamicComps());
        this.setComponents(this.vanillaStaticComps());

        this.setEvents(this.vanillaEvents());

        this.toJSON(true);
    }

    private vanillaDynamicComps(): Record<string, BehaviorEntityComponentBuilder<any>[]> {
        return {};
    }

    private vanillaStaticComps(): BehaviorEntityComponentBuilder<any>[] {
        return [
            new BPEntityComponents.SetBehaviorMoveToRandomBlock({
                priority: 0
            })
        ];
    }

    private vanillaEvents(): Record<string, unknown> {
        return {};
    }
}

const finalJSON = new AllayVanillaTemplate()
    .setComponentGroups({
        "ha:pruebas": [
            new BPEntityComponents.SetAreaAttack({
                cause: 'attack',
                damagePerTick: 1,
                damageRange: 10
            })
        ]
    });

console.log(finalJSON);