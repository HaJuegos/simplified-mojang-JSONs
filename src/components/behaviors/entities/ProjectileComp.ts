import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityEffectTypes, EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface ProjectileData extends BPComponent {
    onHit?: OnHitTypes;
    anchor?: "origin" | "eye_height" | "middle";
    angleOffset?: number;
    catchFire?: boolean;
    critParticleOnHurt?: boolean;
    destroyOnHurt?: boolean;
    gravity?: number;
    hitNearestPassenger?: boolean;
    ignoredEntities?: (string | MinecraftEntityTypes)[];
    hitGroundSound?: string;
    hitSound?: string;
    homing?: boolean;
    inertia?: number;
    isDangerous?: boolean;
    isolatedPhysics?: boolean;
    lightning?: boolean;
    liquidInertia?: number;
    multipleTargets?: boolean;
    offset?: [number, number, number];
    onFireTime?: number;
    particle?: string;
    potionEffect?: number;
    power?: number;
    reflectImmunity?: number;
    reflectOnHurt?: boolean;
    shootSound?: string;
    shootTarget?: boolean;
    shouldBounce?: "no" | "if_invulnerable" | "if_no_damage_dealt";
    splashRange?: number;
    stopOnHurt?: boolean;
    uncertaintyBase?: number;
    uncertaintyMultiplier?: number;
}

interface OnHitTypes {
    arrowEffect?: {
        applyEffectToBlockingTargets: boolean;
    },
    catchFire?: {},
    definitionEvent?: DefinitionEventOnHitTypes,
    douseFire?: {},
    freezeOnHit?: FreezeOnHitTypes,
    grantXp?: GrantXpTypes,
    hurtOwner?: HurtOwnerTypes,
    ignite?: {},
    impactDamage?: ImpactDamageTypes,
    mobEffect?: MobEffectTypes,
    particleOnHit?: ParticleOnHitTypes,
    removeOnHit?: {},
    spawnAoeCloud?: SpawnCloudTypes,
    spawnChance?: SpawnChanceTypes,
    stickInGround?: {},
    teleportOwner?: {},
    thrownPotionEffect?: {};
    windBurstOnHit?: {};
}

interface DefinitionEventOnHitTypes {
    affectProjectile?: boolean,
    affectShooter?: boolean,
    affectSplashArea?: boolean,
    affectTarget?: boolean,
    eventTrigger?: EntityFilterTrigger,
    splashArea?: number;
}

interface FreezeOnHitTypes {
    shape: "cube" | "sphere",
    size: number,
    snapToBlock: boolean;
}

interface GrantXpTypes {
    maxXP: number,
    minXP: number;
}

interface HurtOwnerTypes {
    ignite: boolean,
    knockback: boolean,
    ownerDamage: number;
}

interface ImpactDamageTypes {
    applyKnockbackToBlockingTargets?: boolean;
    catchFire?: boolean;
    ceilPreCriticalDamage?: boolean;
    channeling?: boolean;
    damage?: {
        min: number;
        max: number;
    } | number,
    destroyOnHit?: boolean;
    destroyOnHitRequiresDamage?: boolean;
    filter?: EntityFilter | EntityFilter[];
    knockback?: boolean;
    maxCriticalDamage?: number;
    minCriticalDamage?: number;
    powerMultiplier?: number;
    setLastHurtRequiresDamage?: number;
    difficultyRandomization?: 'none' | 'additive' | 'multiplicative';
}

interface MobEffectTypes {
    effects: EffectsTypes[];
}

interface EffectsTypes {
    effect: string | EntityEffectTypes,
    amplifier: number,
    durationeasy: number | 'infinite',
    durationnormal: number | 'infinite';
    durationhard: number | 'infinite',
}

interface ParticleOnHitTypes {
    numParticles: number,
    onEntityHit: boolean,
    onOtherHit: boolean,
    particleItemName: {
        [key: string]: EntityFilter | EntityFilter[];
    },
    particleType: string;
}

interface SpawnCloudTypes {
    affectOwner?: boolean,
    duration?: number,
    particle?: string,
    potion?: number,
    radius?: number,
    radiusOnUse?: number,
    reapplicationDelay?: number;
}

interface SpawnChanceTypes {
    onSpawn?: EntityFilterTrigger | EntityFilterTrigger[],
    firstSpawnChance?: number,
    firstSpawnCount?: number,
    secondSpawnChance?: number,
    secondSpawnCount?: number,
    spawnBaby?: boolean,
    spawnDefinition?: string | MinecraftEntityTypes;
}

export class SetProjectile extends BehaviorEntityComponentBuilder<ProjectileData, "minecraft:projectile"> {
    /**
     * 
     * @param {ProjectileData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ProjectileData) {
        super("minecraft:projectile", params);
    }
}