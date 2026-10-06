import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { VanillaEntityFamilies } from "../../../types/EntityFilters";

interface TypeFamilyData extends BPComponent {
    family: (VanillaEntityFamilies | (string & {}))[];
}

export class SetTypeFamily extends BehaviorEntityComponentBuilder<TypeFamilyData, "minecraft:type_family"> {
    /**
     * 
     * @param {TypeFamilyData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TypeFamilyData) {
        super("minecraft:type_family", params);
    }
}