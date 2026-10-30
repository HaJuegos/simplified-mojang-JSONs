import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CushionEntity = createRPEntityClient({
    idEntity: "minecraft:cushion",
    params: {
        materials: { default: "cushion" },
        textures: {
            black: "textures/entity/cushion/black_cushion",
            red: "textures/entity/cushion/red_cushion",
            green: "textures/entity/cushion/green_cushion",
            brown: "textures/entity/cushion/brown_cushion",
            blue: "textures/entity/cushion/blue_cushion",
            purple: "textures/entity/cushion/purple_cushion",
            cyan: "textures/entity/cushion/cyan_cushion",
            light_gray: "textures/entity/cushion/light_gray_cushion",
            gray: "textures/entity/cushion/gray_cushion",
            pink: "textures/entity/cushion/pink_cushion",
            lime: "textures/entity/cushion/lime_cushion",
            yellow: "textures/entity/cushion/yellow_cushion",
            light_blue: "textures/entity/cushion/light_blue_cushion",
            magenta: "textures/entity/cushion/magenta_cushion",
            orange: "textures/entity/cushion/orange_cushion",
            white: "textures/entity/cushion/white_cushion"
        },
        geometry: { default: "geometry.cushion" },
        renderControllers: ["controller.render.cushion"]
    }
});
