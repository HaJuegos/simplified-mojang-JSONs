import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface AbsorptionComponentData extends BPComponent {
    value: number;
    max: number;
    min?: number;
}

export class SetAbsorption extends BehaviorEntityComponentBuilder<AbsorptionComponentData> {
    private readonly minH?: number;
    private readonly maxH: number = 20;
    private readonly setH: number = 0;

    /**
     * Metodo principal que asigna absorcion a una entidad en concreto.
     * @param {number} setHealth Vida fija a asignar a la entidad.
     * @param {number} maxHealth Vida maxima a asignar a la entidad.
     * @param {?number} [minHealth] (Opcional) Vida minima a asignar a la entidad.
     * @author HaJuegos - 20-09-2026 
     * @constructor
     * @public
     */
    public constructor (setHealth: number, maxHealth: number, minHealth?: number) {
        super("minecraft:absorption");

        this.minH = minHealth;
        this.maxH = maxHealth;
        this.setH = setHealth;
    }

    protected override getComponentData(): AbsorptionComponentData {
        return {
            value: this.setH,
            max: this.maxH,
            min: this.minH,
        };
    }
}