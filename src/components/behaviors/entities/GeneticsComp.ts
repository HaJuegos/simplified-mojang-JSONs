import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface GeneticsData extends BPComponent {
    mutationRate?: number;
    genes?: GenesTypes[];
}

interface GenesTypes {
    alleleRange?: number | [number, number] | {
        rangeMin: number;
        rangeMax: number;
    };
    name?: string;
    useSimplifiedBreeding?: boolean;
    geneticVariants?: GeneticVariantsTypes[];
}

interface GeneticVariantsTypes {
    birthEvent?: EntityFilterTrigger;
    bothAllele?: {
        rangeMin: number;
        rangeMax: number;
    } | number;
    eitherAllele?: number;
    hiddenAllele?: number;
    mainAllele?: {
        rangeMin: number;
        rangeMax: number;
    } | number;
    mutationRate?: number;
}

export class SetGenetics extends BehaviorEntityComponentBuilder<GeneticsData, "minecraft:genetics"> {
    /**
     * 
     * @param {GeneticsData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GeneticsData) {
        super("minecraft:genetics", params);
    }
}