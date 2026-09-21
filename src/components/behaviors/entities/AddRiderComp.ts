import * as vanilla from '@minecraft/vanilla-data';

import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface RiderComponentData {
    entityType: vanilla.MinecraftEntityTypes | string;
    spawnEvent?: string;
}

interface AddRiderComponentData extends BPComponent {
    riders: RiderComponentData[];
}

export class SetAddRider extends BehaviorEntityComponentBuilder<AddRiderComponentData> {
    private readonly riders: RiderComponentData[];

    /**
     * Componente que añade una o varias entidades que estan montando a la misma.
     * @param {RiderComponentData[]} riders Entidades en cuestion.
     * @author HaJuegos - 20-09-2026 
     * @constructor
     * @public
     */
    public constructor (riders: RiderComponentData[]) {
        super("minecraft:addrider");
        this.riders = [...riders];
    }

    protected override getComponentData(): AddRiderComponentData {
        return {
            riders: this.riders
        };
    }
}