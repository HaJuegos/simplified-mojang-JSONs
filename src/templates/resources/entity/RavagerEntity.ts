import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const RavagerEntity = createRPEntityClient({
    idEntity: "minecraft:ravager",
    params: {
        textures: { default: "textures/entity/illager/ravager" },
        materials: { default: "ravager" },
        geometry: { default: "geometry.ravager" },
        renderControllers: ["controller.render.ravager"],
        spawnEgg: { texture: "spawn_egg_ravager" },
        animations: {
            walk: "animation.ravager.walk",
            look_at_target: "animation.common.look_at_target",
            idle_mouth: "animation.ravager.idle_mouth",
            stunned: "animation.ravager.stunned",
            roaring: "animation.ravager.roaring",
            move: "controller.animation.ravager.move",
            head: "controller.animation.ravager.head_movement",
            biting: "animation.ravager.biting"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("roar_length")} = 1.0;`,
                `${MoLang.variable("bite_anim_duration")} = 0.75f;`,
                `${MoLang.variable("bite_neck_length")} = 10;`
            ],
            animate: ["move", "head"]
        },
        particleEffects: { stun_particles: "minecraft:stunned_emitter" }
    }
});
