import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface ShooterData extends BPComponent {
    magic?: boolean;
    power?: number;
    projectiles?: ProyectilesTypes[];
    sound?: string;
}

interface ProyectilesTypes {
    filters?: EntityFilter | EntityFilter[];
    auxVal?: number;
    def: string | MinecraftEntityTypes;
}

export class SetShooter extends BehaviorEntityComponentBuilder<ShooterData, "minecraft:shooter"> {
    /**
     * 
     * @param {ShooterData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ShooterData) {
        super("minecraft:shooter", params);
    }
}