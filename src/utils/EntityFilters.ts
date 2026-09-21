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

    /**
     * Método principal que comprueba si la entidad forma parte de una caravana. Ole!
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inCaravan(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inCaravan, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra a la altura de las nubes.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inClouds(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inClouds, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está en contacto con cualquier tipo de agua.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inContactWithWater(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inContactWithWater, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra dentro de lava.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inLava(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inLava, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en la dimensión del Nether.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inNether(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inNether, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en la dimensión del Overworld.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inOverworld(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inOverworld, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra dentro del agua.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inWater(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inWater, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en agua o bajo la lluvia.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inWaterOrRain(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inWaterOrRain, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si se ha alcanzado la duración especificada en segundos de inactividad para el despawn.
     * @param {number} value Duracion en segundos de inactividad a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static inactivityTimer(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.inactivityTimer, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si una propiedad de tipo int de la entidad coincide con el valor indicado.
     * @param {string} domain Nombre de la propiedad a evaluar.
     * @param {number} value Valor a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static intProperty(domain: string, value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.intProperty, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba la altitud actual de la entidad en comparación con el valor proporcionado (donde 0 es la altura de la bedrock).
     * @param {number} value Valor a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isAltitude(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isAltitude, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra huyendo de otros mobs.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isAvoidingMobs(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isAvoidingMobs, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad evaluada es un bebé.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isBaby(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isBaby, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra actualmente en el bioma especificado.
     * @param {types.EntityBiomeType} value 
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isBiome(value: types.EntityBiomeType, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isBiome, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el bloque involucrado coincide con el nombre dado.
     * @param {string} value Nombre del bloque a evaluar (ej. "minecraft:stone").
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isBlock(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isBlock, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el Creaking Heart que engendró al Creaking actual todavía existe.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isBoundToCreakingHeart(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isBoundToCreakingHeart, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el nivel de brillo actual en la posición de la entidad comparado con un valor decimal en el rango [0,1].
     * @param {number} value Valor decimal de brillo a comparar entre 0 a 1.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isBrightness(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isBrightness, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra escalando.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isClimbing(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isClimbing, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad es del color de la paleta especificado.
     * @param {types.EntityPaletteColor} value Nombre del color a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isColor(value: types.EntityPaletteColor, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isColor, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el pasajero que controla a la entidad pertenece a la familia especificada.
     * @param {string} value Nombre de la familia a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isControllingPassengerFamily(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isControllingPassengerFamily, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el juego se encuentra de día.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isDaytime(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isDaytime, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el nivel de dificultad actual del juego.
     * @param {types.EntityDifficultyType} value Nivel de dificultad a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isDifficulty(value: types.EntityDifficultyType, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isDifficulty, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad pertenece a la familia indicada.
     * @param {string} value Nombre de la familia a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isFamily(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isFamily, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si un Game Rule específicado se encuentra activo o coincide con el valor indicado.
     * @param {string} domain Nombre del game rule a comprobar.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isGameRule(domain: string, value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isGameRule, {
            domain,
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en un área con humedad.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isHumid(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isHumid, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está inmóvil (sin IA, cambiando de dimensión o sin salud).
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isImmobile(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isImmobile, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está montada en el mismo vehículo que la entidad emisora.
     * @param {boolean} value Estado a validar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isInSameVehicle(value: boolean, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isInSameVehicle, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está dentro de los límites de una aldea.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isInVillage(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isInVillage, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sujeto está atada a otra.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isLeashed(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isLeashed, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sujeto está atada a la entidad emisora/que ejecuta el test.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isLeashedTo(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isLeashedTo, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad coincide con el número de variante de mark_variant especificado.
     * @param {number} value Número correspondiente a la variante.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isMarkVariant(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isMarkVariant, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el la entidad no se encuentra con la vida al máximo.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isMissingHealth(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isMissingHealth, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en movimiento.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isMoving(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isMoving, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el sujeto está ejecutando navegación/pathfinding activo (requiere "minecraft:navigation").
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isNavigating(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isNavigating, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad es el dueño de la entidad que realiza la llamada.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isOwner(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isOwner, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra en estado de pánico.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isPanicking(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isPanicking, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la persistencia de la entidad coincide con el valor indicado.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isPersistent(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isPersistent, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad es un raider.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isRaider(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isRaider, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está montada en otra entidad.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isRiding(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isRiding, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está montada específicamente sobre la entidad emisora que ejecuta el test.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isRidingSelf(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isRidingSelf, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra sentado.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSitting(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSitting, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el skin id de la entidad coincide con el valor indicado.
     * @param {number} value Numero correspondiente al ID de la skin.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSkinId(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSkinId, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra durmiendo.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSleeping(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSleeping, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el jugador esta manteniendo presionada la tecla/botón de agacharse.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSneakHeld(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSneakHeld, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra agachada.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSneaking(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSneaking, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está en una zona cubierta de nieve.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSnowCovered(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSnowCovered, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra corriendo.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isSprinting(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isSprinting, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está domesticada.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isTamed(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isTamed, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad es el target de la entidad emisora.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isTarget(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isTarget, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la categoría de temperatura del bioma coincide con el tipo especificado.
     * @param {types.TemperatureCategory} value Categoría de temperatura del bioma.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isTemperatureType(value: types.TemperatureCategory, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isTemperatureType, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el valor de la temperatura actual del bioma entre [0,1].
     * @param {types.TemperatureCategory} value Valor de temperatura a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isTemperatureValue(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isTemperatureValue, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad se encuentra bajo tierra (bloques sólidos sobre ella).
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isUnderground(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isUnderground, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está completamente sumergida bajo el agua.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isUnderwater(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isUnderwater, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el variant ID de la entidad coincide con el valor indicado.
     * @param {number} value Número de la variante a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isVariant(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isVariant, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el vehículo de la entidad pertenece a la familia indicada.
     * @param {number} value  Nombre de la familia a verificar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isVehicleFamily(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isVehicleFamily, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad sujeto es visible.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isVisible(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isVisible, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si el bloque sujeto se encuentra waterlogeado.
     * @param {boolean} value Estado a validar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isWaterlogged(value: boolean, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isWaterlogged, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el clima actual.
     * @param {string} value Nombre del clima a verificar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @deprecated - Ya no funciona en las versiones actuales. Usa {@link EntityFilters.weather} o {@link EntityFilters.weatherAtPosition} en su lugar.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static isWeather(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.isWeather, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está en un nivel de luz dentro del rango [0,16].
     * @param {number} value Nivel de luz entero a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static lightLevel(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.lightLevel, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que compara la intensidad actual de la luna con un valor flotante en el rango [0,1].
     * @param {boolean} value Valor de intensidad lunar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static moonIntensity(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.moonIntensity, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que compara la fase lunar actual con un valor entero en el rango [0,7].
     * @param {boolean} value Valor correspondiente a la fase lunar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static moonPhase(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.moonPhase, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está prendido en fuego.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static onFire(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.onFire, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está tocando el suelo.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static onGround(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.onGround, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está sobre un bloque caliente.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static onHotBlock(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.onHotBlock, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está escalando o sobre una escalera.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static onLadder(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.onLadder, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que comprueba la distancia entre la entidad y su dueño.
     * @param {number} value Distancia a verificar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static ownerDistance(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.ownerDistance, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo principal que funciona como cálculo probabilístico al azar obtiene 0 de un rango máximo especificado.
     * @param {number} value Valor que define el rango máximo de probabilidad.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static randomChance(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.randomChance, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo publico que comprueba la intensidad de la señal de redstone en la posición actual de la entidad.
     * @param {number} value Intensidad de redstone esperada.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static redstoneStrengthAtPosition(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.redstoneStrengthAtPosition, {
            subject,
            operator,
            value
        });
    }

    /**
     * Metodo publico que comprueba el número de pasajeros montados sobre esta entidad.
     * @param {number} value Cantidad de pasajeros a comparar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static riderCount(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.riderCount, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad es clasificado como un surface mob.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static surfaceMob(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.surfaceMob, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad está recibiendo daño por fuego.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static takingFireDamage(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.takingFireDamage, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba la distancia entre la entidad y su target.
     * @param {number} value Valor de distancia a evaluar.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static targetDistance(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.targetDistance, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad confía en el target.
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static trusts(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.trusts, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba si la entidad fue atacado en los últimos 400 segundos (si fue un jugador) o 60 segundos (si fue un mob).
     * @param {boolean} [value] (Opcional) Estado a validar. Por defecto, es true.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static wasLastHurtBy(value: boolean = true, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.wasLastHurtBy, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el clima actual en la dimensión contra un valor especificado.
     * @param {string} value Nombre del clima a validar
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static weather(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.weather, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba el clima actual específicamente en la posición de la entidad contra un valor dado.
     * @param {string} value Nombre del clima a validar en la posición.
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static weatherAtPosition(value: string, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.weatherAtPosition, {
            subject,
            operator,
            value
        });
    }

    /**
     * Método principal que comprueba la rotación en el eje Y (guiñada/yaw) de la entidad.
     * @param {string} value 
     * @param {types.EntityFilterSubject} [subject] (Opcional) Target de entidad a considerar. Por defecto es "self".
     * @param {types.EntityFilterOperator} [operator] (Opcional) Operación o comparación a aplicar. Por defecto es "equals".
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @public
     * @static
     */
    public static yRotation(value: number, subject: types.EntityFilterSubject = "self", operator: types.EntityFilterOperator = "equals"): types.BaseEntityFilter {
        return this.create(types.EntityFilterTest.yRotation, {
            subject,
            operator,
            value
        });
    }

    // Privados

    /**
     * Metodo auxiliar que crea el formateo de un filtro con sus respectivos parametros.
     * @param {string} test Nombre del filtro en cuestion.
     * @param {Partial<Omit<types.BaseEntityFilter, "test">>} [params] (Opcional) Sus respectivos parametros como el subject, domain, operator y value. En caso de asignarse. Sino sera un {}.
     * @returns {types.BaseEntityFilter} Devuelve el grupo de entidades formateado y listo para usarse.
     * @author HaJuegos - 21-09-2026
     * @private
     * @static
     */
    private static create(test: string, params: Partial<Omit<types.BaseEntityFilter, "test">> = {}): types.BaseEntityFilter {
        return { test, ...params };
    }
}