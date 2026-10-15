import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";

export {
    BPItemFile,
    BPItemComponent,
    BPItemCompOverride,
};

/**
 * Tipado general para fijar el JSON de un componente de item final.
 * @author HaJuegos - 14-10-2026
 */
type BPItemFile = Readonly<Record<string, unknown>>;

/**
 * Tipado general para la creacion de un componente de un item.
 * @author HaJuegos - 15-10-2026
 */
type BPItemComponent = BehaviorItemsComponentsBuilder<any, string>;

/**
 * Tipado general que bloquea los IDs vanilla a un componente custom en concreto.
 * @template {BPItemComponent} C
 * @author HaJuegos - 15-10-2026
 */
type BPItemCompOverride<C extends BPItemComponent> = C['idComp'] extends `minecraft:${string}` ? C : C extends BehaviorItemsComponentsBuilder<infer D, any> ? Partial<D> : C;