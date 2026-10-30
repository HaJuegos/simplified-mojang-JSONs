import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SnifferEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:sniffer",
    params: {
        materials: { default: "sniffer" },
        textures: {
            default: "textures/entity/sniffer/sniffer",
            baby: "textures/entity/sniffer/snifflet"
        },
        scripts: {
            preAnimation: [`${MoLang.variable("moving")} = ${MoLang.min(1.0, `${MoLang.modifiedMoveSpeed()} * 10`)};`],
            scale: `${MoLang.isBaby()} ? (1 / 0.45) : 1.0`,
            animate: [
                "controller_general",
                "controller_walk",
                "controller_sniffsniff",
                "controller_long_sniff",
                "controller_search",
                "controller_dig",
                "controller_stand_up",
                "controller_feeling_happy"
            ]
        },
        geometry: {
            default: "geometry.sniffer",
            baby: "geometry.sniffer.baby"
        },
        animations: {
            baby_transform: "animation.sniffer.baby_transform",
            walk: "animation.sniffer.walk",
            look_at_target: "animation.common.look_at_target",
            sniffsniff: "animation.sniffer.sniffsniff",
            long_sniff: "animation.sniffer.longsniff",
            search: "animation.sniffer.search",
            dig: "animation.sniffer.dig",
            stand_up: "animation.sniffer.stand_up",
            feeling_happy: "animation.sniffer.feeling_happy",
            controller_general: "controller.animation.sniffer.general",
            controller_walk: "controller.animation.sniffer.walk",
            controller_sniffsniff: "controller.animation.sniffer.sniffsniff",
            controller_long_sniff: "controller.animation.sniffer.long_sniff",
            controller_search: "controller.animation.sniffer.search",
            controller_dig: "controller.animation.sniffer.dig",
            controller_stand_up: "controller.animation.sniffer.stand_up",
            controller_feeling_happy: "controller.animation.sniffer.feeling_happy"
        },
        renderControllers: ["controller.render.sniffer.v2"],
        spawnEgg: { texture: "spawn_egg_sniffer" },
        soundEffects: {
            dropSeed: "mob.sniffer.drop_seed",
            sniffsniff: "mob.sniffer.sniffsniff",
            searching: "mob.sniffer.searching",
            longSniff: "mob.sniffer.long_sniff",
            digging: "mob.sniffer.digging",
            standUp: "mob.sniffer.stand_up",
            happy: "mob.sniffer.happy"
        }
    }
});
