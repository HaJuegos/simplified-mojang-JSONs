import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ExperienceOrb = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "experience_orb",
            idMaterialReference: "entity",
            "+defines": ["USE_UV_ANIM", "ALPHA_TEST", "Blending", "USE_OVERLAY", "USE_MASK"]
        }
    ]
});
