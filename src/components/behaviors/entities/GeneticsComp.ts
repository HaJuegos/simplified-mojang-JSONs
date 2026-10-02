import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface GeneticsData extends BPComponent {
    mutationRate?: number;
    genes?: GenesTypes[];
}

interface GenesTypes {
    alleleRange: number;
    name: string;
    geneticVariants: GeneticVariantsTypes[];
}

interface GeneticVariantsTypes {
    birthEvent: EntityFilterTrigger;
    bothAllele: {
        rangeMin: number;
        rangeMax: number;
    } | number;
    eitherAllele: number;
    hiddenAllele: number;
    mainAllele: {
        rangeMin: number;
        rangeMax: number;
    } | number;
    mutationRate: number;
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