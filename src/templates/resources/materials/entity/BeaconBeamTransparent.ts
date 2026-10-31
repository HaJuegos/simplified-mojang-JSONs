import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BeaconBeamTransparent = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "beacon_beam_transparent",
            idMaterialReference: "entity",
            "+states": ["Blending", "DisableCulling", "DisableDepthWrite", "DisableAlphaWrite"],
            vertexShader: "shaders/color_uv.vertex",
            vrGeometryShader: "shaders/color_uv.geometry",
            fragmentShader: "shaders/color_texture.fragment",
            blendSrc: "SourceAlpha",
            blendDst: "OneMinusSrcAlpha",
            vertexFields: [
                { field: "Position" },
                { field: "Color" },
                { field: "Normal" },
                { field: "UV0" }
            ],
            variants: [
                {
                    skinning: {
                        "+defines": ["USE_SKINNING"],
                        vertexFields: [
                            { field: "Position" },
                            { field: "BoneId0" },
                            { field: "Color" },
                            { field: "Normal" },
                            { field: "UV0" }
                        ]
                    }
                }
            ]
        }
    ]
});
