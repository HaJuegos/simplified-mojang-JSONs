import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const TripodCameraEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:tripod_camera",
    params: {
        materials: { default: "camera" },
        textures: { default: "textures/entity/camera_tripod" },
        geometry: { default: "geometry.tripod_camera" },
        animations: {
            neutral: "animation.tripod_camera.neutral",
            controller_base: "controller.animation.tripod_camera.base_pose"
        },
        renderControllers: ["controller.render.tripod_camera"],
        scripts: {
            animate: ["controller_base"]
        }
    }
});
