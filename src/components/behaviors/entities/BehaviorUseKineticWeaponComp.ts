import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorUseKineticWeaponData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    approachDistance?: number;
    repositionDistance?: {
        min: number;
        max: number;
    };
    cooldownDistance?: {
        min: number;
        max: number;
    };
    repositionSpeedMultiplier?: number;
    cooldownSpeedMultiplier?: number;
    weaponReachMultiplier?: number;
    weaponMinSpeedMultiplier?: number;
    maxPathTime?: number;
    meleeFov?: number;
    minPathTime?: number;
    outerBoundaryTimeIncrease?: number;
    pathFailTimeIncrease?: number;
    pathInnerBoundary?: number;
    pathOuterBoundary?: number;
    requireCompletePath?: boolean;
    trackTarget?: boolean;
    cooldownTime?: number;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
    randomStopInterval?: number;
    attackOnce?: boolean;
    hijackMountNavigation?: boolean;
}

export class SetBehaviorUseKineticWeapon extends BehaviorEntityComponentBuilder<BehaviorUseKineticWeaponData, "minecraft:behavior.use_kinetic_weapon"> {
    /**
     * 
     * @param {BehaviorUseKineticWeaponData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorUseKineticWeaponData) {
        super("minecraft:behavior.use_kinetic_weapon", params);
    }
}