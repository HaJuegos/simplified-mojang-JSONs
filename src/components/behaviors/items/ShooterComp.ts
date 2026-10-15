import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ShooterData extends BPComponent {
    ammunition: AmmunitionData[];
    maxDrawDuration: number;
    scalePowerByDrawDuration: boolean;
    chargeOnDraw: boolean;
}

interface AmmunitionData {
    item: string | MinecraftEntityTypes;
    useOffhand: boolean;
    searchInventory: boolean;
    useInCreative: boolean;
}

export class SetShooter extends BehaviorItemsComponentsBuilder<ShooterData, "minecraft:shooter"> {
    /**
     * 
     * @param {ShooterData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ShooterData) {
        super("minecraft:shooter", params);
    }
}