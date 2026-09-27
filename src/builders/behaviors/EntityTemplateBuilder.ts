import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityBuilder } from "./EntityBuilder";
import { BPAnimationScriptEntities, BPEntityOptionalParams, BPPropertiesEntities, FormatVersionEntities } from "../../types/behaviors/EntitiesEnums";
import { BehaviorEntityComponentBuilder } from "./EntityCompsBuilder";

export abstract class BehaviorEntityTemplateBuilder extends BehaviorEntityBuilder {
    constructor (id: string | MinecraftEntityTypes) {
        super(id);
    };

    protected setVersionT(): FormatVersionEntities | string {
        return FormatVersionEntities.MostRecent;
    }

    protected setAnimationScriptsT(): Record<string, BPAnimationScriptEntities> | undefined {
        return undefined;
    }

    protected setPropertiesT(): Record<string, BPPropertiesEntities> | undefined {
        return undefined;
    }

    protected abstract setDescParamsT(): BPEntityOptionalParams;
    protected abstract setComponentGroupsT(): Record<string, BehaviorEntityComponentBuilder<any>[]>;
    protected abstract setComponentsT(): BehaviorEntityComponentBuilder<any>[];
    protected abstract setEventsT(): Record<string, unknown>;
}

type BPEntityFile = Readonly<Record<string, unknown>>;

export type LockedTemplate<T extends abstract new (...args: any) => any> = new (...args: ConstructorParameters<T>) => BPEntityFile;