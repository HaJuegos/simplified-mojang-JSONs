import { createRPEntityMaterial } from "../../../../builders/resources/materials/entity/MaterialEntityTemplateBuilder";

/**
 * Plantilla vanilla del material para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PlayerSpectator = createRPEntityMaterial({
    materials: [
        {
            idMaterial: "player_spectator",
            idMaterialReference: "entity_alphablend_nocolor",
            "+defines": ["USE_COLOR_MASK", "USE_UV_ANIM"]
        }
    ]
});
