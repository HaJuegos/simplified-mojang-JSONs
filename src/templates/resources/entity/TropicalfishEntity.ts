import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const TropicalfishEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:tropicalfish",
    params: {
        materials: { default: "tropicalfish" },
        textures: {
            typeA: "textures/entity/fish/tropical_a",
            typeB: "textures/entity/fish/tropical_b",
            aPattern1: "textures/entity/fish/tropical_a_pattern_1",
            aPattern2: "textures/entity/fish/tropical_a_pattern_2",
            aPattern3: "textures/entity/fish/tropical_a_pattern_3",
            aPattern4: "textures/entity/fish/tropical_a_pattern_4",
            aPattern5: "textures/entity/fish/tropical_a_pattern_5",
            aPattern6: "textures/entity/fish/tropical_a_pattern_6",
            bPattern1: "textures/entity/fish/tropical_b_pattern_1",
            bPattern2: "textures/entity/fish/tropical_b_pattern_2",
            bPattern3: "textures/entity/fish/tropical_b_pattern_3",
            bPattern4: "textures/entity/fish/tropical_b_pattern_4",
            bPattern5: "textures/entity/fish/tropical_b_pattern_5",
            bPattern6: "textures/entity/fish/tropical_b_pattern_6"
        },
        scripts: {
            preAnimation: [
                `variable.ZRot = !${MoLang.isInWater()} ? Math.cos((${MoLang.timeStamp()} + ${MoLang.frameAlpha()}) * 0.25) * 90 : 0.0;`,
                `variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, ${MoLang.frameAlpha()});`
            ],
            animate: ["controller_general"]
        },
        geometry: {
            typeA: "geometry.tropicalfish_a",
            typeB: "geometry.tropicalfish_b"
        },
        animations: {
            flop: "animation.tropicalfish.flop",
            swim: "animation.tropicalfish.swim",
            controller_general: "controller.animation.fish.general"
        },
        renderControllers: ["controller.render.tropicalfish"],
        spawnEgg: { texture: "spawn_egg_tropicalfish" }
    }
});
