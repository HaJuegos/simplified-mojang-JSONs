import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface PushableByEntityData extends BPComponent {
    presets?: PresetsPush[];
}

interface PresetsPush {
    filters: EntityFilter | EntityFilter[],
    kickSpeedScale: number,
    maxDistance: number,
    maxKickSpeed: number,
    minDistance: number,
    minKickSpeed: number,
    playSound: boolean,
    playSoundCooldownInSeconds: number,
    playSoundImpulseThreshold: number,
    pushMode: "ball" | "default" | "legacy_boat" | "legacy_minecart" | "none",
    pushScaleOther: number,
    pushScaleSelf: number,
    requireCollisionOverlap: boolean,
    strengthMultiplier: number,
    verticalKickMultiplier: number;
}

export class SetPushableByEntity extends BehaviorEntityComponentBuilder<PushableByEntityData> {
    /**
     * 
     * @param {PushableByEntityData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PushableByEntityData) {
        super("minecraft:pushable_by_entity", params);
    }
}