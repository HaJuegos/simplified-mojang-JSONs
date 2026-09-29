import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface OffspringData extends BPComponent {
    blendAttributes?: boolean;
    denyParentsVariant?: DenyParentsTypes;
    mutationFactor?: MutationFactorTypes;
    mutationStrategy?: string | 'none';
    parentCentricAttributeBlending?: string[];
    propertyInheritance?: InheritancePropertyTypes;
    randomExtraVariantMutationInterval?: [number, number];
    randomVariantMutationInterval?: [number, number];
    inheritTamed?: boolean;
    combineParentColors?: boolean;
    offspringPairs?: {
        [key: string]: string;
    };
}

interface DenyParentsTypes {
    chance: number;
    maxVariant: number;
    minVariant: number;
}

interface MutationFactorTypes {
    color: number;
    extraVariant: number;
    variant: number;
}

interface InheritancePropertyTypes {
    mutationChance: number;
    mutationValues: string[];
}

export class SetOffspring extends BehaviorEntityComponentBuilder<OffspringData> {
    /**
     * 
     * @param {OffspringData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OffspringData) {
        super("minecraft:offspring", params);
    }
}