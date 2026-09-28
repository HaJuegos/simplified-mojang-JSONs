import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntitySlotsArmor } from "../../../types/EntityFilters";

interface InteractData extends BPComponent {
    interactions: InteractionsTypes[];
}

interface InteractionsTypes {
    addItems?: {
        table: string;
    };
    admire?: boolean;
    barter?: boolean;
    cooldown?: number;
    cooldownAfterBeingAttacked?: number;
    dropItemSlot?: EntitySlotsArmor;
    dropItemYOffset?: number;
    equipItemSlot?: EntitySlotsArmor;
    giveItem?: boolean;
    healthAmount?: number;
    hurtItem?: number;
    interactText?: string;
    onInteract?: string | EntityFilter | EntityFilter[];
    particleOnStart?: ParticleOnStartTypes;
    playSounds?: string;
    repairEntityItem?: RepairItemsTypes;
    spawnEntities?: string;
    spawnItems?: SpawnItemsTypes;
    swing: boolean,
    takeItem: boolean,
    transformToItem: string,
    useItem: boolean,
    vibration: "entity_act" | 'entity_die' | 'entity_interact' | 'none' | 'shear';
}

interface ParticleOnStartTypes {
    particleOffsetTowardsInteractor: boolean;
    particleType: string;
    particleYOffset: number;
}

interface RepairItemsTypes {
    amount: number;
    slot: string;
}

interface SpawnItemsTypes {
    table: string;
    yOffset: number;
}

export class SetInteract extends BehaviorEntityComponentBuilder<InteractData> {
    /**
     * 
     * @param {InteractData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: InteractData) {
        super("minecraft:interact", params);
    }
}