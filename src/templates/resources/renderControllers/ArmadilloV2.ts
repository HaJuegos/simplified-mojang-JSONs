import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ArmadilloV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "armadillo.v2",
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.baby : Texture.default`],
            partVisibility: [
                { body: "!variable.use_rolled_up_model" },
                { tail: "!variable.use_rolled_up_model" },
                { leftHindLeg: "!variable.use_rolled_up_model" },
                { rightHindLeg: "!variable.use_rolled_up_model" },
                { bodyRolledUp: "variable.use_rolled_up_model" }
            ]
        }
    ]
});
