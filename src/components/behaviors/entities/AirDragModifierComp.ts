import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Parametros en concreto del componente en cuestion.
 * @interface AirDragModifierData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AirDragModifierData extends BPComponent {
    /**
     * El valor que indica la resistencia de aire. Entre mas mayor sea el numero, mayor sera el efecto de la resistencia del aire. Por defecto sera el valor 1.
     * @type {number}
     */
    value: number;
}

export class SetAirDragModifier extends BehaviorEntityComponentBuilder<AirDragModifierData> {
    /**
     * Componente que define la resistencia aerodinamica que afecta a la entidad.
     * @param {AirDragModifierData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AirDragModifierData) {
        super("minecraft:air_drag_modifier", params);
    }
}