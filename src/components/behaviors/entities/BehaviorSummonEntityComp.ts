import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorSummonEntityData extends BPComponent {
    priority: number;
    summonChoices?: SummonEntityChoicesTypes[];
}

interface SummonEntityChoicesTypes {
    castDuration?: number;
    cooldownTime?: number;
    doCasting?: boolean;
    filters?: EntityFilter | EntityFilter[];
    maxActivationRange?: number;
    minActivationRange?: number;
    particleColor?: string;
    sequence: SequenceSummonEntityTypes[];
    startSoundEvent?: string;
    weight: number;
}

interface SequenceSummonEntityTypes {
    baseDelay?: number;
    delay?: number;
    delayPerSummon?: number;
    entityLifespan?: number;
    entityTypes: string | MinecraftEntityTypes;
    numEntitiesSpawned: number;
    shape: 'circle' | 'line';
    size: number;
    soundEvent?: string;
    summonCap?: number;
    summonCapRadius?: number;
    summonEvent?: string;
    target: 'self' | 'target';
}

export class SetBehaviorSummonEntity extends BehaviorEntityComponentBuilder<BehaviorSummonEntityData> {
    /**
     * 
     * @param {BehaviorSummonEntityData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSummonEntityData) {
        super("minecraft:behavior.summon_entity", params);
    }
}