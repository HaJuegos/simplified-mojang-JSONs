import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WindChargeProjectileEntity = createRPEntityClient({
    idEntity: "minecraft:wind_charge_projectile",
    params: {
        materials: { default: "breeze_wind" },
        textures: { default: "textures/entity/wind_charge" },
        geometry: { default: "geometry.wind_charge" },
        animations: { rotate: "animation.wind_charge.rotate" },
        scripts: {
            animate: ["rotate"]
        },
        renderControllers: ["controller.render.wind_charge"]
    }
});
