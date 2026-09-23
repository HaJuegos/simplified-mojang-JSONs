import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

/**
 * Lista de parametros fijos del componente en concreto.
 * @interface AnnotationBreakDoorData
 * @extends {BPComponent}
 * @author HaJuegos - 22-09-2026
 */
interface AnnotationBreakDoorData extends BPComponent {
    /**
     * El tiempo en segundos para romper las puertas.
     * @type {number}
     */
    breakTime: number;

    /**
     * La dificultad minima en la que la entidad puede romper las puertas.
     * @type {string}
     */
    minDifficulty: string;
}

export class SetAnnotationBreakDoor extends BehaviorEntityComponentBuilder<AnnotationBreakDoorData> {
    /**
     * Componente que permite a la entidad romper puertas, siempre y cuando se haya configurado los indicadores correspondientes para que el componente los utilice en la navegacion.
     * @param {AnnotationBreakDoorData} params Parametros del componente.
     * @author HaJuegos - 22-09-2026
     * @constructor
     * @public
     */
    public constructor (params: AnnotationBreakDoorData) {
        super("minecraft:annotation.break_door", params);
    }
}