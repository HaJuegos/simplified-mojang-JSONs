import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorTransportItemsData extends BPComponent {
    priority: number;
    sourceContainerTypes?: (string | MinecraftBlockTypes)[];
    destinationContainerTypes?: (string | MinecraftBlockTypes)[];
    maxStackSize?: number;
    interactionTime?: number;
    allowSimultaneousInteraction?: boolean;
    searchStrategy?: "nearest" | "random";
    searchDistance?: [number, number] | {
        min: number;
        max: number;
    } |
    {
        rangeMin: number;
        rangeMax: number;
    };
    maxVisitedContainers?: number;
    initialCooldown?: number;
    idleCooldown?: number;
    placeStrategy?: "any" | "with_matching" | "with_matching_or_empty";
    allowedItems?: (string | MinecraftItemTypes)[];
    disallowedItems?: (string | MinecraftItemTypes)[];
}

export class SetBehaviorTransportItems extends BehaviorEntityComponentBuilder<BehaviorTransportItemsData> {
    /**
     * 
     * @param {BehaviorTransportItemsData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTransportItemsData) {
        super("minecraft:behavior.transport_items", params);
    }
}