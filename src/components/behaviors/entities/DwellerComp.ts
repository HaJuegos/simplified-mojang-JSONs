import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface DwellerData extends BPComponent {
    dwellingType?: "village";
    dwellerRole?: "inhabitant" | "defender" | "hostile" | "passive";
    updateIntervalBase?: number;
    updateIntervalVariant?: number;
    canFindPoi?: boolean;
    firstFoundingReward?: number;
    canMigrate?: boolean;
    dwellingBoundsTolerance?: number;
    preferredProfession?: string;
}

export class SetDweller extends BehaviorEntityComponentBuilder<DwellerData, "minecraft:dweller"> {
    /**
     * 
     * @param {DwellerData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DwellerData) {
        super("minecraft:dweller", params);
    }
}