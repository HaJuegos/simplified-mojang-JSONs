import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type PrecipitationTypes = "obstruct_rain_accumulate_snow" | "obstruct_rain" | "snowlogging" | "none";

interface PrecipitationInteractionsData extends BPComponent {
    precipitationBehavior: PrecipitationTypes;
}

export class SetPrecipitationInteractions extends BehaviorBlockComponentBuilder<PrecipitationInteractionsData, "minecraft:precipitation_interactions"> {
    /**
     * 
     * @param {PrecipitationInteractionsData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: PrecipitationInteractionsData) {
        super("minecraft:precipitation_interactions", params);
    }
}