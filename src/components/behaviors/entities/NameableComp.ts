import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface NameableData extends BPComponent {
    allowNameTagRenaming?: boolean;
    alwaysShow?: boolean;
    defaultTrigger?: EntityFilter | EntityFilter[];
    nameActions?: NameActionsTypes | NameActionsTypes[];
}

interface NameActionsTypes {
    nameFilter: string;
    onNamed: EntityFilter | EntityFilter[];
}

export class SetNameable extends BehaviorEntityComponentBuilder<NameableData> {
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