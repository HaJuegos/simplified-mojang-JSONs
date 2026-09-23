import { BehaviorEntityBuilder } from "../../../builders/behaviors/EntityBuilder";
import { FormatVersionEntities, SpawnCategoryEntities } from "../../../types/behaviors/EntitiesEnums";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";

export class AllayVanillaTemplate extends BehaviorEntityBuilder {
    constructor () {
        super('minecraft:allay');

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
        return [];
    }

    private vanillaEvents(): Record<string, unknown> {
        return {};
    }
}

