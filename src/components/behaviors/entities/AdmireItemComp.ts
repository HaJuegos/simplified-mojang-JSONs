import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Parametros princiopales del componente en cuestion.
 * @interface AdmireItemData
 * @extends {BPComponent}
 * @author HaJuegos - 21-09-2026
 */
interface AdmireItemData extends BPComponent {
    /**
     * Cooldown asignado a la entidad para volver a admirar un item despues de ser lastimado.  Por defecto sera el valor 0.
     * @type {number}
     */
    cooldownAfterBeingAttacked: number;

    /**
     * Duracion de admiracion del item. Por defecto sera el valor 10.
     * @type {number}
     */
    duration: number;
}

export class SetAdmireItem extends BehaviorEntityComponentBuilder<AdmireItemData> {
    /**
     * Componente que asigna la duracion y cooldown de admiracion de un item a la entidad.
     * @param {AdmireItemData} params Parametros del componente.
     * @author HaJuegos - 20-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AdmireItemData) {
        super("minecraft:admire_item", {
            cooldownAfterBeingAttacked: params.cooldownAfterBeingAttacked ?? 0,
            duration: params.duration ?? 10
        });
    }
}