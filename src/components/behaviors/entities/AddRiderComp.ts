import * as vanilla from '@minecraft/vanilla-data';

import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Parametros adiccionales de las entidades a asignar.
 * @interface RiderComponentData
 * @author HaJuegos - 21-09-2026
 */
interface RiderComponentData {
    /**
     * ID de la entidad en cuestion.
     * @type {(vanilla.MinecraftEntityTypes | string)}
     */
    entityType: vanilla.MinecraftEntityTypes | string;

    /**
     * (Opcional) Evento de spawneo de la entidad en cuestion.
     * @type {?string}
     */
    spawnEvent?: string;
}

/**
 * Parametros principales para la asignacion de entidades montadas.
 * @interface AddRiderComponentData
 * @extends {BPComponent}
 * @author HaJuegos - 21-09-2026
 */
interface AddRiderComponentData extends BPComponent {
    /**
     * Lista de entidades a añadir a la entidad.
     * @type {RiderComponentData[]}
     */
    riders: RiderComponentData[];
}

export class SetAddRider extends BehaviorEntityComponentBuilder<AddRiderComponentData> {
    /**
     * Componente que añade una o varias entidades que estan montando a la misma.
     * @param {AddRiderComponentData} params Parametros del componente.
     * @author HaJuegos - 20-09-2026 
     * @constructor
     * @public
     */
    public constructor (params: AddRiderComponentData) {
        super("minecraft:addrider", { riders: [...params.riders] });
    }
}