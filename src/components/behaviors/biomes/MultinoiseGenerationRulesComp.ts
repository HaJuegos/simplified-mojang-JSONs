import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

/**
 * 
 * @interface MultinoiseGenerationRulesData
 * @extends {BPComponent}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 */
interface MultinoiseGenerationRulesData extends BPComponent {
    targetAltitude: number;
    targetHumidity: number;
    targetTemperature: number;
    targetWeirdness: number;
    weight: number;
}

/**
 * 
 * @class SetMultinoiseGenerationRules
 * @extends {BehaviorBiomeComponentBulder<MultinoiseGenerationRulesData, "minecraft:multinoise_generation_rules">}
 * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
 * @author HaJuegos - 15-10-2026
 * @export
 */
export class SetMultinoiseGenerationRules extends BehaviorBiomeComponentBulder<MultinoiseGenerationRulesData, "minecraft:multinoise_generation_rules"> {
    /**
     * 
     * @param {MultinoiseGenerationRulesData} params Parametros del componente.
     * @deprecated Ya no se usa en biomes custom, solo esta por compatibilidad de los biomas vanillas. NO USAR.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MultinoiseGenerationRulesData) {
        super("minecraft:multinoise_generation_rules", params);
    }
}