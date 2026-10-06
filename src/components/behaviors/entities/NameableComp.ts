import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface NameableData extends BPComponent {
    allowNameTagRenaming?: boolean;
    alwaysShow?: boolean;
    defaultTrigger?: EntityFilterTrigger | EntityFilterTrigger[];
    nameActions?: NameActionsTypes | NameActionsTypes[];
}

interface NameActionsTypes {
    nameFilter: string;
    onNamed: EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetNameable extends BehaviorEntityComponentBuilder<NameableData, "minecraft:nameable"> {
    /**
     * 
     * @param {NameableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: NameableData) {
        super("minecraft:nameable", params);
    }
}