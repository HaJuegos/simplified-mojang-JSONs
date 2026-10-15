import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type AllowOffHandComponentData = boolean | {
    value?: boolean;
};

/**
 * Clase principal del componente que permite ponerte el item en la mano secundaria con sus respectivos parametros.
 * @class SetAllowOfHand
 * @extends {BehaviorItemsComponentsBuilder<AllowOffHandComponentData, "minecraft:allow_off_hand">}
 * @author HaJuegos - 14-10-2026
 * @export
 */
export class SetAllowOffHand extends BehaviorItemsComponentsBuilder<AllowOffHandComponentData, "minecraft:allow_off_hand"> {
    /**
     * Componente y parametros para permitir que el item pueda estar en la mano secundaria.
     * @param {AllowOffHandComponentData} params Parametros del componente en cuestion.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: AllowOffHandComponentData) {
        super("minecraft:allow_off_hand", params);
    }
}