import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BreezeEntity = createRPEntityClient({
    idEntity: "minecraft:breeze",
    params: {
        materials: {
            default: "breeze",
            breeze_eyes: "breeze_eyes",
            breeze_wind: "breeze_wind"
        },
        textures: {
            default: "textures/entity/breeze/breeze",
            breeze_wind: "textures/entity/breeze/breeze_wind",
            breeze_eyes: "textures/entity/breeze/breeze_eyes"
        },
        geometry: {
            default: "geometry.breeze",
            breeze_eyes: "geometry.breeze_eyes",
            breeze_wind_top: "geometry.breeze_wind_top",
            breeze_wind_mid: "geometry.breeze_wind_mid",
            breeze_wind_bottom: "geometry.breeze_wind_bottom"
        },
        spawnEgg: { texture: "spawn_egg_breeze" },
        scripts: {
            animate: [
                "look_at_controller",
                "idle_controller",
                "move_controller",
                "ground_particles_controller",
                "shoot_controller",
                "jump_controller"
            ],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            look_at: "animation.common.look_at_target",
            idle: "animation.breeze.idle",
            jump: "animation.breeze.jump",
            shoot: "animation.breeze.shoot",
            slide: "animation.breeze.slide",
            idle_ground_particles: "animation.breeze.idle_ground_particles",
            slide_ground_particles: "animation.breeze.slide_ground_particles",
            whirl_sound: "animation.breeze.whirl_sound",
            idle_ground_sound: "animation.breeze.idle_ground_sound",
            look_at_controller: "controller.animation.breeze.look_at",
            idle_controller: "controller.animation.breeze.idle",
            move_controller: "controller.animation.breeze.move",
            ground_particles_controller: "controller.animation.breeze.ground_particles",
            shoot_controller: "controller.animation.breeze.shoot",
            jump_controller: "controller.animation.breeze.jump",
            idle_ground_sound_controller: "controller.animation.breeze.idle_ground_sound"
        },
        renderControllers: [
            "controller.render.breeze",
            "controller.render.breeze_eyes",
            "controller.render.breeze_wind_top",
            "controller.render.breeze_wind_mid",
            "controller.render.breeze_wind_bottom"
        ],
        soundEffects: {
            charge: "mob.breeze.charge",
            inhale: "mob.breeze.inhale",
            slide: "mob.breeze.slide",
            whirl: "mob.breeze.whirl",
            idleGroundSound: "mob.breeze.idle_ground"
        },
        particleEffects: { ground_particles: "minecraft:breeze_ground_particle" }
    }
});
