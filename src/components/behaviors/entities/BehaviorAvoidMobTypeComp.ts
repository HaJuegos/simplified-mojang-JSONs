import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityAttackableTargetFilters, EntityFiltersTarget } from "../../../types/EntityFilters";

type SoundIntervalTypes = number | { min: number; max: number; };

interface BehaviorAvoidMobTypeData extends BPComponent {
    priority?: number;
    avoidMobSound?: string;
    avoidTargetXz?: number;
    avoidTargetY?: number;
    ignoreVisibility?: boolean;
    maxDist?: number;
    maxFlee?: number;
    probabilityPerStrength?: number;
    removeTarget?: boolean;
    sprintDistance?: number;
    sprintSpeedMultiplier?: number;
    walkSpeedMultiplier?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    onEscapeEvent?: string | EntityFiltersTarget;
    soundInterval?: SoundIntervalTypes;
}

export class SetBehaviorAvoidMobType extends BehaviorEntityComponentBuilder<BehaviorAvoidMobTypeData, "minecraft:behavior.avoid_mob_type"> {
    /**
     * 
     * @param {BehaviorAvoidMobTypeData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorAvoidMobTypeData) {
        super("minecraft:behavior.avoid_mob_type", params);
    }
}