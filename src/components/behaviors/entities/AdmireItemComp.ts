import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface AdmireItemData extends BPComponent {
    cooldownAfterBeingAttacked: number;
    duration: number;
}

export class SetAdmireItem extends BehaviorEntityComponentBuilder<AdmireItemData> {
    private readonly cooldownAfterBeingAttacked: number;
    private readonly duration: number;

    /**
     * Componente que asigna la duracion y cooldown de admiracion de un item a la entidad.
     * @param {number} duration Duracion de admiracion del item.
     * @param {number} cooldownOnHurt Cooldown para volver a admirar un item nuevamente despues de ser lastimado.
     * @author HaJuegos - 20-09-2026
     * @constructor
     * @public
     */
    public constructor (duration: number, cooldownOnHurt: number) {
        super("minecraft:admire_item");
        this.cooldownAfterBeingAttacked = cooldownOnHurt;
        this.duration = duration;
    }

    protected override getComponentData(): AdmireItemData {
        return {
            cooldownAfterBeingAttacked: this.cooldownAfterBeingAttacked,
            duration: this.duration
        };
    }
}