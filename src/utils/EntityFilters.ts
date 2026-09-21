import * as types from "../types/EntityFilters";

/**
 * Clase principal que contiene toda la logica sobre los filtros de entidades y sus condiciones a cumplir en concreto.
 * @class EntityFilters
 * @author HaJuegos - 20-09-2026
 * @export
 */
export class EntityFilters {
    private constructor () { }

    /**
     * Metodo auxiliar que agrupa una lista de condiciones del filtro a cumplir. En este caso, todos los grupos de filtros deben cumplirse.
     * @param {...types.EntityFilter[]} filters Grupo de filtros a considerar y cumplirse.
     * @returns {types.EntityFilterGroup} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @static
     * @public
     */
    public static allOf(...filters: types.EntityFilter[]): types.EntityFilterGroup {
        return { all_of: filters };
    }

    /**
     * Metodo auxiliar que agrupa una lista de condiciones del filtro a cumplir. En este caso, cualquier grupo de filtros debe cumplirse.
     * @param {...types.EntityFilter[]} filters Grupo de filtros a considerar y cumplirse.
     * @returns {types.EntityFilterGroup} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @static
     * @public
     */
    public static anyOf(...filters: types.EntityFilter[]): types.EntityFilterGroup {
        return { any_of: filters };
    }

    /**
     * Metodo auxiliar que agrupa una lista de condiciones del filtro a cumplir. En este caso, ninguno de los grupos de filtros deben cumplirse.
     * @param {...types.EntityFilter[]} filters Grupo de filtros a considerar y cumplirse.
     * @returns {types.EntityFilterGroup} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @static
     * @public
     */
    public static noneOf(...filters: types.EntityFilter[]): types.EntityFilterGroup {
        return { none_of: filters };
    }

    /**
     * Metodo principal que comprueba si la entidad tiene equipado un item con un encantamiento especifico en un slot en concreto.
     * @param {string} value Nombre del encantamiento a buscar.
     * @param {types.EntityFilterDomain} [domain] (Opcional) Slot de la armadura a validar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target en concreto a validar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operador o comparacion a aplicar. Por defecto sera "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static actorHasItemWithEnchantmentInSlot(value: string, domain: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.actorHasItemWithEnchantmentInSlot, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que valida la vida de la entidad en cuestion.
     * @param {number} value Valor a validar en cuestion.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target a validar en cuestion. Por defecto, siempre sera "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operacion matematica a validar en cuestion. Por defecto, siempre sera "==".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static actorHealth(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "=="): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.actorHealth, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que comprueba si todas las ranuras de un slot de armadura especificada están completamente vacías.
     * @param {types.EntityFilterDomain} [value] (Opcional) Slot o ranura a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operacion o comparacion a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static allSlotsEmpty(value: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.allSlotsEmpty, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que comprueba si el slot de armadura especificada tiene al menos una ranura vacía.
     * @param {types.EntityFilterDomain} [value] (Opcional) Slot o ranura a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operacion o comparacion a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static anySlotEmpty(value: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.anySlotEmpty, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si una propiedad booleana de la entidad coincide con el valor especificado.
     * @param {string} domain Nombre de la propiedad a evaluar.
     * @param {boolean} [value] (Opcional) Valor a validar. Por defecto es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static boolProperty(domain: string, value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.boolProperty, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que compara la hora actual del juego con un valor float en un rango de [0,1]. (0.0 = Mediodía, 0.25 = Atardecer, 0.5 = Medianoche, 0.75 = Amanecer).
     * @param {number} value Valor float de tiempo a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @static
     * @public
     */
    public static clockTime(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.clockTime, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que compara la distancia respecto al jugador más cercano con un valor float.
     * @param {number} value Distancia en bloques a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static distanceToNearestPlayer(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.distanceToNearestPlayer, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si una propiedad de tipo enum de la entidad coincide con el valor especificado.
     * @param {string} domain Nombre de la propiedad a evaluar.
     * @param {string} value Valor de enum a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static enumProperty(domain: string, value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.enumProperty, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si una propiedad de tipo float de la entidad coincide con el valor especificado.
     * @param {string} domain Nombre de la propiedad a evaluar.
     * @param {number} value Valor float a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static floatProperty(domain: string, value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.floatProperty, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad posee una habilidad especificada.
     * @param {types.EntityAbility} value Tipo de habilidad a verificar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasAbility(value: types.EntityAbility, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasAbility, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el bioma en el que se encuentra la entidad posee la tag especificada.
     * @param {string} value Tag del bioma a buscar (ej. "ocean", "monster", "plains").
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasBiomeTag(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasBiomeTag, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad posee el componente especificado.
     * @param {string} value Nombre del componente a buscar (ej. "minecraft:health", "minecraft:movement").
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasComponent(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasComponent, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el jugador tiene una UI de contenedor abierta.
     * @param {boolean} [value] (Opcional) Estado del contenedor a verificar. Por defecto esta en true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasContainerOpen(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasContainerOpen, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad recibe un tipo de daño específico.
     * @param {types.EntityDamageType} value Tipo de daño a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasDamage(value: types.EntityDamageType, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasDamage, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el ítem esta dañado en el slot en concreto de la entidad.
     * @param {string} value Nombre del ítem a buscar (ej. "minecraft:iron_sword").
     * @param {types.EntityFilterDomain} [domain] (Opcional) Ubicación o ranura de equipamiento a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasDamagedEquipment(value: string, domain: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasDamagedEquipment, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si hay un ítem especifico en el slot asignado de la entidad.
     * @param {string} value Nombre del ítem a buscar (ej. "minecraft:iron_sword").
     * @param {types.EntityFilterDomain} [domain] (Opcional) Ubicación o ranura de equipamiento a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasEquipment(value: string, domain: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasEquipment, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si un item con una tag en específico en el slot en concreto de la entidad.
     * @param {string} value Nombre del ítem a buscar (ej. "minecraft:iron_sword").
     * @param {types.EntityFilterDomain} [domain] (Opcional) Ubicación o ranura de equipamiento a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasEquipmentTag(value: string, domain: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasEquipmentTag, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sostiene un ítem con un componente en especifico.
     * @param {string} value Nombre del ítem a buscar (ej. "minecraft:iron_sword").
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasItemWithComponent(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasItemWithComponent, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad posee un mob effect en concreto.
     * @param {?string} [value] (Opcional) Nombre del efecto a buscar. (ej. "speed", "poison"). Por defecto valida cualquiera.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasMobEffect(value?: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasMobEffect, {
            subject,
            operator,
            ...(value != undefined && { value })
        });
    }

    /**
     * Método principal que comprueba si la entidad tiene asignada una nametag con nombre personalizado.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasNametag(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasNametag, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad tiene una propiedad definida.
     * @param {string} value Nombre de la propiedad a buscar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasProperty(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasProperty, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sostiene un arma a distancia (como un arco o ballesta).
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto esta en true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasRangedWeapon(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasRangedWeapon, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad tiene el mismo ítem equipado en el slot en especifico con la entidad a comprobar.
     * @param {boolean} value Estado a validar.
     * @param {types.EntityFilterDomain} [domain] (Opcional) Ubicación o ranura de equipamiento a considerar. Por defecto es "any".
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasSameEquipmentInSlotAs(value: boolean, domain: types.EntityFilterDomain = "any", subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasSameEquipmentInSlotAs, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sostiene un ítem con el encantamiento "Toque de seda" (Silk Touch).
     * @param {boolean} [value] (Opcional) Estado a verificar. 
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasSilkTouch(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasSilkTouch, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad posee una tag especificada.
     * @param {?string} [value] (Opcional) Nombre de la etiqueta a buscar. Por defecto con que tengan una ya es valido.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasTag(value?: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasTag, {
            subject,
            operator,
            ...(value !== undefined && { value })
        });
    }

    /**
     * Método principal que comprueba si la entidad tiene un target válido.
     * @param {boolean} [value] (Opcional) Estado a validar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasTarget(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasTarget, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad target tiene items de comercio restantes.
     * @param {boolean} [value] (Opcional) Estado a validar en concreto. Por defecto es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hasTradeSupply(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hasTradeSupply, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que evalúa la distancia entre la entidad y su punto de hogar.
     * @param {number} value Valor numérico de la distancia a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static homeDistance(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.homeDistance, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que compara la hora actual de 24 horas del juego con un valor entero en el rango [0, 24000].
     * @param {number} value Valor que representa la hora en ticks.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static hourlyClockTime(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.hourlyClockTime, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra dentro de un tipo de bloque específico.
     * @param {?string} [value] (Opcional) Identificador del tipo de bloque a buscar (ej. "minecraft:water"). Por defecto si ya estas en uno, es valido.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inBlock(value?: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inBlock, {
            subject,
            operator,
            ...(value !== undefined && { value })
        });
    }


    // Privados

    private static create(test: string, params: Partial<Omit<types.BaseEntityFilter, "test">> = {}): types.BaseEntityFilter {
        return { test, ...params };
    }
}