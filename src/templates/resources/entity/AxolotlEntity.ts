import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const AxolotlEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:axolotl",
    params: {
        materials: {
            default: "axolotl",
            limbs: "axolotl_limbs"
        },
        textures: {
            blue: "textures/entity/axolotl/axolotl_blue",
            cyan: "textures/entity/axolotl/axolotl_cyan",
            gold: "textures/entity/axolotl/axolotl_gold",
            lucy: "textures/entity/axolotl/axolotl_lucy",
            wild: "textures/entity/axolotl/axolotl_wild",
            baby_blue: "textures/entity/axolotl/axolotl_blue_baby",
            baby_cyan: "textures/entity/axolotl/axolotl_cyan_baby",
            baby_gold: "textures/entity/axolotl/axolotl_gold_baby",
            baby_lucy: "textures/entity/axolotl/axolotl_lucy_baby",
            baby_wild: "textures/entity/axolotl/axolotl_wild_baby"
        },
        geometry: {
            default: "geometry.axolotl",
            baby: "geometry.axolotl.baby"
        },
        animations: {
            idle_float: "animation.axolotl.idle_underwater",
            idle_floor: "animation.axolotl.idle_floor",
            idle_floor_water: "animation.axolotl.idle_floor_underwater",
            swim: "animation.axolotl.swim",
            walk_floor: "animation.axolotl.walk_floor",
            walk_floor_water: "animation.axolotl.walk_floor_underwater",
            play_dead: "animation.axolotl.play_dead",
            swim_angle: "animation.axolotl.swim_angle",
            look_at_target: "animation.common.look_at_target",
            baby_idle_floor: "animation.axolotl.baby_idle_floor",
            baby_idle_floor_water: "animation.axolotl.baby_idle_floor_underwater",
            baby_idle_float: "animation.axolotl.baby_idle_underwater",
            baby_swim: "animation.axolotl.baby_swim",
            baby_walk_floor: "animation.axolotl.baby_walk_floor",
            baby_walk_floor_water: "animation.axolotl.baby_walk_floor_underwater",
            controller_general: "controller.animation.axolotl.general",
            controller_move: "controller.animation.axolotl.move.v2"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("moving")} = ${MoLang.groundSpeed()} > 0 || ${MoLang.verticalSpeed()} > 0;`,
                `${MoLang.variable("pitch")} = ${MoLang.bodyXRotation()};`
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            animate: ["controller_general", "controller_move"]
        },
        renderControllers: ["controller.render.axolotl.v2"],
        spawnEgg: { texture: "spawn_egg_axolotl" }
    }
});
