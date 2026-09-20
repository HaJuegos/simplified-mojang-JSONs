import { MoLangValue } from "../types/MoLang";

/**
 * Clase principal y auxiliar que contiene toda la logica del lenguaje MoLang, con sus respectivas funciones y consultas.
 * @class MoLang
 * @author HaJuegos - 16-09-2026
 * @export
 */
export class MoLang {
    /**
     * PI! Que mas puedo decir?
     * @type {number}
     * @public
     * @static
     * @readonly
     */
    public static readonly pi = Math.PI;

    /**
     * Todos los enumeradores y argumentos matematicos que se pueden usar.
     * @type {{ readonly this: "this"; readonly return: "return"; readonly loop: "loop"; readonly forEach: "for_each"; readonly break: "break"; readonly continue: "continue"; }}
     * @public
     * @static
     * @readonly
     */
    public static readonly keywords = {
        this: "this",
        return: "return",
        loop: "loop",
        forEach: "for_each",
        break: "break",
        continue: "continue"
    } as const;

    /**
     * Metodo auxiliar de consulta que permite obtener la altura de un bloque que se encuentra encima del bloque solido mas alto en la posicion de entrada. (x, z)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static aboveTopSolid(): string {
        return this.queryFunction("above_top_solid");
    }

    /**
     * Metodo auxiliar de consulta que permite obtener el numero de actores renderizados en el ultimo frame.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static actorCount(): string {
        return this.queryFunction("actor_count");
    }

    /**
     * Metodo auxiliar de consulta que permite evaluar el primer argumento, si todos los argumentos siguientes se evaluan con el mismo valor que el primero sera true, sino false. (1 y 0)
     * @param {MoLangValue} first Primer argumento a evaluar.
     * @param {MoLangValue} second Segundo argumento a comparar.
     * @param {MoLangValue} third Tercer argumento a comprar.
     * @param {...MoLangValue[]} rest Argumentos adiccionales a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static all(first: MoLangValue, second: MoLangValue, third: MoLangValue, ...rest: MoLangValue[]): string {
        return this.queryFunction("all", first, second, third, ...rest);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true si todas las animaciones del estado actual del animation controller se han reproducido al menos una vez. De lo contrario sera false. (1, 0)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @onlyAnimController - Esta consulta va dirigida a los animations controllers.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static allAnimationsFinished(): string {
        return this.queryFunction("all_animations_finished");
    }

    /**
     * Metodo auxiliar de consulta que valida si un item o bloque tiene todas las tags especificadas.
     * @param {...MoLangValue[]} tags Todas las tags en concreto a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @public
     * @static
     */
    public static allTags(...tags: MoLangValue[]): string {
        return this.queryFunction("all_tags", ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de enojo del actor entre [0,x]. En caso de error o si el acto no tiene nivel de enojo, devuelve 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @serverSide - Es un metodo query o consulta unicamente disponible para el servidor o el add-on, no para clientes o jugadores.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static angerLevel(): string {
        return this.queryFunction("anger_level");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de enojo del actor entre [0,x]. En caso de error o si el acto no tiene nivel de enojo, devuelve 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @serverSide - Es un metodo query o consulta unicamente disponible para el servidor o el add-on, no para clientes o jugadores.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static animTime(): string {
        return this.queryFunction("anim_time");
    }

    /**
     * Metodo auxiliar de consulta que evalua el primer argumento y devuelve true si alguno de los argumentos siguientes se evalua con el mismo valor que el primero. Sino sera false. (1,0)
     * @param {MoLangValue} first Primer argumento a evaluar.
     * @param {MoLangValue} second Segundo argumento a comprar.
     * @param {MoLangValue} third Tercer argumento a comprar.
     * @param {...MoLangValue[]} rest El resto de argumentos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static any(first: MoLangValue, second: MoLangValue, third: MoLangValue, ...rest: MoLangValue[]): string {
        return this.queryFunction("any", first, second, third, ...rest);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true si alguna animacion del estado actual del controller se ha reproducido al menos una vez. Sino sera false.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @onlyAnimController - Esta consulta va dirigida a los animations controllers.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static anyAnimationFinished(): string {
        return this.queryFunction("any_animation_finished");
    }

    /**
     * Metodo auxiliar de consulta que calcula si el item o bloque tiene alguna de las tags especificadas.
     * @param {...MoLangValue[]} tags Las tags en cuestion a calcular.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static anyTag(...tags: MoLangValue[]): string {
        return this.queryFunction("any_tag", ...tags);
    }

    /**
     * Metodo auxiliar de consulta que evalua si todos los argumentos estan dentro de un margen de 0.000000 entre si. Si es el caso, sera true, sino false. (1,0)
     * @param {...MoLangValue[]} values Valores a evaluar en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static approxEq(...values: MoLangValue[]): string {
        return this.queryFunction("approx_eq", ...values);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el color de la armadura en el parametro indicado.
     * @param {MoLangValue} slot Slot en concreto a consultar. 0 (head), 1 (chest), 2 (legs), 3 (feet) y 4 (body).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static armorColorSlot(slot: MoLangValue): string {
        return this.queryFunction("armor_color_slot", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el daño de la armadura en el parametro indicado
     * @param {MoLangValue} slot Slot en concreto a consultar. 0 (head), 1 (chest), 2 (legs), 3 (feet) y 4 (body).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @throws Es posible que en casos que no sea el jugador, el daño no siempre este disponible en side-client.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static armorDamageSlot(slot: MoLangValue): string {
        return this.queryFunction("armor_damage_slot", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el material de la armadura en el parametro indicado.
     * @param {MoLangValue} slot Slot en concreto a consultar. 0 (head), 1 (chest), 2 (legs), 3 (feet) y 4 (body).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static armorMaterialSlot(slot: MoLangValue): string {
        return this.queryFunction("armor_material_slot", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la textura de la armadura en el parametro indicado.
     * @param {MoLangValue} slot Slot en concreto a consultar. 0 (head), 1 (chest), 2 (legs), 3 (feet) y 4 (body).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static armorTextureSlot(slot: MoLangValue): string {
        return this.queryFunction("armor_texture_slot", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo en segundos del tiempo promedio de frames de los ultimos 'x' frames. Si se pasa un argumento, se supone que es el numero de frames anterior que deseas consultar.
     * @param {?MoLangValue} [frames] (Opcional) Numero de frames a consultar en cuestion.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static averageFrameTime(frames?: MoLangValue): string {
        return frames == undefined ? this.queryFunction("average_frame_time") : this.queryFunction("average_frame_time", frames);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la animacion de golpe/ataque del mob determinado por el item que lleva y sin modificaciones por efectos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static baseSwingDuration(): string {
        return this.queryFunction("base_swing_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la cara del bloque correspondiente solo valido para ciertos desencadenantes, como colocar bloques o interactuar con ellos. (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0).
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockFace(): string {
        return this.queryFunction("block_face");
    }

    /**
     * Metodo auxiliar de consulta para tomar una posicion relativa y uno o mas tags. Devuelve true o false dependiendo si el bloque en esa posicion contiene todas las tags en especifico.
     * @param {MoLangValue} position Posicion en concreto a calcular.
     * @param {MoLangValue} firstTag Primer tag a calcular.
     * @param {...MoLangValue[]} tags Los demas tags a calcular.
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockHasAllTags(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("block_has_all_tags", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta para tomar una posicion relativa y uno o mas tags. Devuelve true o false dependiendo si el bloque en esa posicion contiene alguna de las tags en especifico.
     * @param {MoLangValue} position Posicion en concreto a calcular.
     * @param {MoLangValue} firstTag Primer tag a calcular.
     * @param {...MoLangValue[]} tags Los demas tags a calcular.
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockHasAnyTag(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("block_has_any_tag", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta para tomar una posicion relativa al bloque y uno o mas tags. Devuelve true o false dependiendo si el bloque en esa posicion contiene todas las tags en especifico.
     * @param {MoLangValue} position Posicion en concreto. 
     * @param {MoLangValue} firstTag Primer tag a calcular.
     * @param {...MoLangValue[]} tags Los demas tags a calcular.
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockNeighborHasAllTags(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("block_neighbor_has_all_tags", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que toma una posicion relativa del bloque y uno o mas tags. Dependiendo de si el bloque en esa posicion contiene las tags en concreto. Sera true o false. 
     * @param {MoLangValue} position Posicion en concreto.
     * @param {MoLangValue} firstTag El primer tag a calcular.
     * @param {...MoLangValue[]} tags El resto de tags a calcular.
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockNeighborHasAnyTag(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("block_neighbor_has_any_tag", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta para obtener la propiedad del bloque asociado.
     * @param {MoLangValue} property Propiedad del bloque a obtener.
     * @returns {string} Devuelve la consulta formateada y lista. 
     * @deprecated - No disponible en 1.20.40+ en adelante.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockProperty(property: MoLangValue): string {
        return this.queryFunction("block_property", property);
    }

    /**
     * Metodo auxiliar de consulta para obtener el estado del bloque asociado.
     * @param {MoLangValue} property Estado del bloque a obtener.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blockState(property: MoLangValue): string {
        return this.queryFunction("block_state", property);
    }

    /**
     * Metodo auxiliar de consulta para vaidar si la entidad esta bloqueando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static blocking(): string {
        return this.queryFunction("blocking");
    }

    /**
     * Metodo auxiliar de consulta que obtiene la rotacion de inclinacion del cuerpo del actor. De lo contrario, sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static bodyXRotation(): string {
        return this.queryFunction("body_x_rotation");
    }

    /**
     * Metodo auxiliar de consulta que obtiene la rotacion de "yaw" o guiñada del cuerpo del actor. De lo contrario, sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static bodyYRotation(): string {
        return this.queryFunction("body_y_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el cuadro delimitador alineado con el eje del hueso como una estructura que contiene los mimebros .min y .max junto con los valores .x, .y, y .z correspondientes.
     * @param {MoLangValue} bone Nombre del hueso a analizar en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static boneAabb(bone: MoLangValue): string {
        return this.queryFunction("bone_aabb", bone);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la orientacion de hueso en forma de matriz del parametro en especifico, y cuando exista en la consulta. De lo contrario, devuelve la matriz de identidad y genera error.
     * @param {MoLangValue} bone Hueso en concreto a consultar. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static boneOrientationMatrix(bone: MoLangValue): string {
        return this.queryFunction("bone_orientation_matrix", bone);
    }

    /**
     * Metodo auxiliar de consulta que obtiene el TRS (Translate/Rotate/Scale) que devuevle la matriz de orientacion del hueso en concreto desconpuesta en los componentes de TRS, siempre que este exista en la geometria. De lo contrario genera un error junto con la matriz. EL valor devuelto se representa como una variante de tipo 'struct' con los miembros '.t', '.r' y '.s' cada uno con los miembros '.x','.y', y '.z' y se puede acceder a de esta forma: v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x;
     * @param {MoLangValue} bone Hueso en concreto a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static boneOrientationTrs(bone: MoLangValue): string {
        return this.queryFunction("bone_orientation_trs", bone);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el pivot inicial de un hueso como una estructa de miembros '.x', '.y', y '.z'.
     * @param {MoLangValue} bone Hueso en concreto a analizar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static boneOrigin(bone: MoLangValue): string {
        return this.queryFunction("bone_origin", bone);
    }

    /**
     * Metodo auxiliar de consulta para obtener el valor de rotacion inicial de un hueso con una estructura de miembros '.x', '.y', y '.z'.
     * @param {MoLangValue} bone Hueso en concreto a analizar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static boneRotation(bone: MoLangValue): string {
        return this.queryFunction("bone_rotation", bone);
    }

    /**
     * Metodo auxiliar de consulta que toma dos distancias y devuelve un numero entre 0 a 1 basado en la distancia de la camara entre los dos rangos. Si pasas (20,10), una distancia de 20, devolvera 0,0.
     * @param {MoLangValue} firstDistance Primera distancia a considerar.
     * @param {MoLangValue} secondDistance Segunda distancia a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static cameraDistanceRangeLerp(firstDistance: MoLangValue, secondDistance: MoLangValue): string {
        return this.queryFunction("camera_distance_range_lerp", firstDistance, secondDistance);
    }

    /**
     * Metodo auxiliar de consulta que obtiene la rotacion de la camara que requiere un argumento que represente el eje deseado.
     * @param {MoLangValue} axis Eje en concreto a analizar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static cameraRotation(axis: MoLangValue): string {
        return this.queryFunction("camera_rotation", axis);
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad esta escalando o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026
     * @public
     * @static
     */
    public static canClimb(): string {
        return this.queryFunction("can_climb");
    }

    /**
     * Metodo auxiliar de consulta que vaida si la entidad puede causar daño a las entidades cercanas.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canDamageNearbyMobs(): string {
        return this.queryFunction("can_damage_nearby_mobs");
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad puede "dashear" o correr a toda velocidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canDash(): string {
        return this.queryFunction("can_dash");
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad puede volar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canFly(): string {
        return this.queryFunction("can_fly");
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad puede impulsarse al saltar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canPowerJump(): string {
        return this.queryFunction("can_power_jump");
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad puede nadar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canSwim(): string {
        return this.queryFunction("can_swim");
    }

    /**
     * Metodo auxiliar que valida si la entidad puede caminar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static canWalk(): string {
        return this.queryFunction("can_walk");
    }

    /**
     * Metodo auxiliar de consulta que obtiene el valor de la capa entre 0 a 1, 0 siendo que esta totalmente caido y 1 que esta completamente levantado.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static capeFlapAmount(): string {
        return this.queryFunction("cape_flap_amount");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la cara del bloque correspondiente. (Solo valido para el evento on_placed_by_player) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @deprecated - Esto ya no funciona en la actualidad. Usa {@link MoLang.blockFace} en su lugar.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cardinalBlockFacePlacedOn(): string {
        return this.queryFunction("cardinal_block_face_placed_on");
    }

    /**
     * Metodo auxiliar de consulta que obtiene la orientacion actual del jugador. (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cardinalFacing(): string {
        return this.queryFunction("cardinal_facing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la orientacion actual del jugador, sin tomar en cuenta la parte de arriba y abajo en la direccion. (North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cardinalFacing2d(): string {
        return this.queryFunction("cardinal_facing_2d");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la orientacion actual del jugador. (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cardinalPlayerFacing(): string {
        return this.queryFunction("cardinal_player_facing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la distancia maxima de renderizado del cliente actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @clientSide - Este metodo solo funciona si se consulta por parte de un jugador.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static clientMaxRenderDistance(): string {
        return this.queryFunction("client_max_render_distance");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el numero que representa el nivel de memoria de RAM del cliente. 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @clientSide - Este metodo solo funciona si se consulta por parte de un jugador.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static clientMemoryTier(): string {
        return this.queryFunction("client_memory_tier");
    }

    /**
     * Metodo auxiliar de consulta que combina todas las referencias de entidad validas de todos los argumentos en un solo array. No se conserva el orden y se eliminan los valores duplicados y los que no son validos.
     * @param {...MoLangValue[]} entities Entidades a considerar en cuestion. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static combineEntities(...entities: MoLangValue[]): string {
        return this.queryFunction("combine_entities", ...entities);
    }

    /**
     * Metodo auxiliar de consulta que obtiene el total de tiempo de cooldown del item que tiene en la mano o que se lleva en el slot especificado por su nombre. Los slots son los mismos que estan en el comando /replaceitem.
     * @param {MoLangValue} slotName Slot en concreto a consultar.
     * @param {?MoLangValue} [slotId] (Opcional) ID del slot si es necesario a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cooldownTime(slotName: MoLangValue, slotId?: MoLangValue): string {
        return slotId == undefined ? this.queryFunction("cooldown_time", slotName) : this.queryFunction("cooldown_time", slotName, slotId);
    }

    /**
     * Metodo auxiliar de consulta que obtiene los segundos restantes de cooldown del item que porta o del slot seleccionado. De lo contrario, sera 0. Los slots son los mismos que estan en el comando /replaceitem. 
     * @param {...MoLangValue[]} arguments_ Los slots en concreto a consultar. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static cooldownTimeRemaining(...arguments_: MoLangValue[]): string {
        return this.queryFunction("cooldown_time_remaining", ...arguments_);
    }

    /**
     * Metodo auxiliar de consulta que cuenta el numero de valores especificos.
     * @param {...MoLangValue[]} values Los valores en especificos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static count(...values: MoLangValue[]): string {
        return this.queryFunction("count", ...values);
    }

    /**
     * Metodo auxiiliar que consulta el valor de compresion o "squish" de la entidad actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static currentSquishValue(): string {
        return this.queryFunction("current_squish_value");
    }

    /**
     * Metodo auxiliar de consulta que consulta el tiempo de progreso de cooldown del dash si la etndiad puede correr rapidamente. De lo contrario, devuelve 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en 1.20.40+ o posteriores.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static dashCooldownProgress(): string {
        return this.queryFunction("dash_cooldown_progress");
    }

    /**
     * Metodo auxiliar de consulta que devuevle el nivel del dia actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static day(): string {
        return this.queryFunction("day");
    }

    /**
     * Metodo auxiliar de consulta que devuevle los ticks transcurridos desde que la entidad ha muerto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static deathTicks(): string {
        return this.queryFunction("death_ticks");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor de depuracion en la consola para las compilaciones que cuenten con una.
     * @param {MoLangValue} value Valor a depurar en cuestion.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static debugOutput(value: MoLangValue): string {
        return this.queryFunction("debug_output", value);
    }

    /**
     * Metodo auxiliar de consulta de devuelve el tiempo en segundos transcurrido desde el ultimo frame.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static deltaTime(): string {
        return this.queryFunction("delta_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la raiz del actor y la camara.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static distanceFromCamera(): string {
        return this.queryFunction("distance_from_camera");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el total de particulas activas del efecto destinatario. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static effectEmitterCount(): string {
        return this.queryFunction("effect_emitter_count");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el total de particulas activas del efecto destinatario. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static effectParticleCount(): string {
        return this.queryFunction("effect_particle_count");
    }

    /**
     * Metodo auxiliar de consulta que compara el bioma donde se encuentra la entidad con uno o mas tags y devuelve true o false, dependiendo si todos los tags coinciden.
     * @param {MoLangValue} firstTag Primera tag a comparar.
     * @param {...MoLangValue[]} tags El resto de tags a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @clientSide - Este metodo solo funciona si se consulta por parte de un jugador.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static entityBiomeHasAllTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("entity_biome_has_all_tags", firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que compara el bioma en el que esta la entidad con uno o mas IDs y devuelve true o false, dependiendo de si algunos de los IDs coincide.
     * @param {MoLangValue} firstID ID del primer bioma a comparar.
     * @param {...MoLangValue[]} restOfIDs IDs del resto de biomas a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @clientSide - Este metodo solo funciona si se consulta por parte de un jugador.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static entityBiomeHasAnyIdentifier(firstID: MoLangValue, ...restOfIDs: MoLangValue[]): string {
        return this.queryFunction("entity_biome_has_any_identifier", firstID, ...restOfIDs);
    }

    /**
     * Metodo auxiliar de consulta que compara el bioma en el que esta la entidad con uno o mas tags y devuelve true o false, dependiendo de si algunos de los tags coincide.
     * @param {MoLangValue} firstTag Primer tag a consultar.
     * @param {...MoLangValue[]} tags Los demas tags a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @clientSide - Este metodo solo funciona si se consulta por parte de un jugador.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static entityBiomeHasAnyTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("entity_biome_has_any_tags", firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el numero de piezas de armaduras que lleva equipadas en el actor, entre 0 a 5, sin contar los objectos que sostiene en sus manos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static equipmentCount(): string {
        return this.queryFunction("equipment_count");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si los tags que se encuentran en ese objecto equipado son validos a los parametros especificos.
     * @param {MoLangValue} slot Slot en concreto a comparar.
     * @param {MoLangValue} firstTag Primer tag a comparar.
     * @param {...MoLangValue[]} tags Los demas tags a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static equippedItemAllTags(slot: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("equipped_item_all_tags", slot, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si uno o mas de los tags que se encuentran en ese objecto equipado son validos a los parametros especificos.
     * @param {MoLangValue} slot Slot en concreto a comparar.
     * @param {MoLangValue} firstTag Primer tag a comparar.
     * @param {...MoLangValue[]} tags Los demas tags a comparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static equippedItemAnyTag(slot: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("equipped_item_any_tag", slot, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que valida el parametro del slot de la mano deseada (0 siendo mainHand y 1 siendo offHand) y devuelve true o false si es attachable dicho item.
     * @param {MoLangValue} hand Slot a consultar en cuestion.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026  
     * @public
     * @static
     */
    public static equippedItemIsAttachable(hand: MoLangValue): string {
        return this.queryFunction("equipped_item_is_attachable", hand);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotacion del ojo en el eje X de la entidad. Si es aplicable. sino, sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static eyeTargetXRotation(): string {
        return this.queryFunction("eye_target_x_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotacion del ojo en el eje Y de la entidad. Si es aplicable. sino, sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static eyeTargetYRotation(): string {
        return this.queryFunction("eye_target_y_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta atacando a distancia. (osea usando el ranged_attack)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static facingTargetToRangeAttack(): string {
        return this.queryFunction("facing_target_to_range_attack");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la proporcion entre 0 a 1 de cuando este frame esta renderizando entre los ticks de la IA. Es decir, devuelve un radio de segundos por frame de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static frameAlpha(): string {
        return this.queryFunction("frame_alpha");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo restante del fuse de la entidad. Devuelve -1 si la entidad no tiene el componente explode.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static fuseTime(): string {
        return this.queryFunction("fuse_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el ID entero del actor a partir de su string name.
     * @param {MoLangValue} name String name a validar y obtener su ID.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static getActorInfoId(name: MoLangValue): string {
        return this.queryFunction("get_actor_info_id", name);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la textura del item en ese frame respectivo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static getAnimationFrame(): string {
        return this.queryFunction("get_animation_frame");
    }

    /**
     * Metodo auxiliar de consulta que obtiene el eje especificado del pivot de orientacion del hueso indicado.
     * @param {MoLangValue} bone Hueso en cuestion a consultar.
     * @param {MoLangValue} axis Pivote en cuestion a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static getDefaultBonePivot(bone: MoLangValue, axis: MoLangValue): string {
        return this.queryFunction("get_default_bone_pivot", bone, axis);
    }

    /**
     * Metodo auxiliar de consulta que toma los parametros de slots (0 siendo la mainHand y 1 la offHand) y un segundo parametro para el item seleccionado. Y devuelve el nombre del objecto en la reanura seleccionada.
     * @param {?MoLangValue} [hand] (Opcional) Slot en concreto seleccionado. Por defecto siempre sera la mainHand.
     * @param {?MoLangValue} [renderedItem] (Opcional) Slot del item renderizado en concreto. Por defecto siempre es no aplica, osea 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funcional en las nuevas versiones y futuras. Usa {@link MoLang.isItemNameAny} en su lugar.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 17-09-2026 
     * @public
     * @static
     */
    public static getEquippedItemName(hand?: MoLangValue, renderedItem?: MoLangValue): string {
        return renderedItem == undefined ? hand == undefined ? this.queryFunction("get_equipped_item_name") : this.queryFunction("get_equipped_item_name", hand) : this.queryFunction("get_equipped_item_name", hand ?? 0, renderedItem);
    }

    /**
     * Metodo auxiliar de consulta que devuelve un valor en el rango de 0 a 1 basado en la semilla del nivel.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static getLevelSeedBasedFraction(): string {
        return this.queryFunction("get_level_seed_based_fraction");
    }

    /**
     * Metodo auxiliar de consulta que obtiene el desplazamiento del localizacion en el eje especificado.
     * @param {MoLangValue} locator Localizador en concreto.
     * @param {MoLangValue} axis Eje en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static getLocatorOffset(locator: MoLangValue, axis: MoLangValue): string {
        return this.queryFunction("get_locator_offset", locator, axis);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nombre del mob, si lo tiene, de lo contrario seria ''.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en las nuevas versiones. Usa {@link MoLang.isNameAny} en su lugar.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static getName(): string {
        return this.queryFunction("get_name");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor de la configuracion del pack seleccionado.
     * @param {MoLangValue} setting Parametro a considerar de la configuracion del pack.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static getPackSetting(setting: MoLangValue): string {
        return this.queryFunction("get_pack_setting", setting);
    }

    /**
     * Metodo auxiliar de consulta que obtiene el eje especificado del desplazamiento del localizador especificado del modelo raiz.
     * @param {MoLangValue} locator Localizador en concreto.
     * @param {MoLangValue} axis Eje en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static getRootLocatorOffset(locator: MoLangValue, axis: MoLangValue): string {
        return this.queryFunction("get_root_locator_offset", locator, axis);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el cliente tiene uno o varios modos graficos.
     * @param {MoLangValue} firstMode Modo grafico en concreto a considerar. Siendo estos: 'simple', 'fancy', 'deferred' y 'raytraced'.
     * @param {...MoLangValue[]} modes Demas modos graficos a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static graphicsModeIsAny(firstMode: MoLangValue, ...modes: MoLangValue[]): string {
        return this.queryFunction("graphics_mode_is_any", firstMode, ...modes);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la velocidad respecto al suelo de la entidad en metros por segundo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static groundSpeed(): string {
        return this.queryFunction("ground_speed");
    }

    /**
     * Metodo auxiliar de consulta que valida si la entidad tiene un grupo de componentes en concreto por ultima vez cargado. Devuelve true o false dependiendo el caso.
     * @param {MoLangValue} group Grupo de componentes en cuestion a considerar. Este mismo debe estar en un string, como por ej: 'ha:test'.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyBPPack - Esta consulta solo es funcional en packs de comportamiento. (Behavior Packs)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hadComponentGroup(group: MoLangValue): string {
        return this.queryFunction("had_component_group", group);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false dependiendo si la posicion actual el bioma tiene todas las tags en concreto.
     * @param {MoLangValue} firstTag Primer tag a considerar.
     * @param {...MoLangValue[]} tags Demas tags a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static hasAllBiomeTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("has_all_biome_tags", firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false dependiendo si la posicion actual el bioma tiene una o varias tags en concreto.
     * @param {MoLangValue} firstTag Primer tag a considerar.
     * @param {...MoLangValue[]} tags Demas tags a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static hasAnyBiomeTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("has_any_biome_tags", firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false dependiendo si la entidad pertenece a alguna de las familias en concreto.
     * @param {MoLangValue} firstFamily Primer familia a considerar.
     * @param {...MoLangValue[]} families Las demas familias a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasAnyFamily(firstFamily: MoLangValue, ...families: MoLangValue[]): string {
        return this.queryFunction("has_any_family", firstFamily, ...families);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta amarrada a uno o varias entidades mas en concreto.
     * @param {MoLangValue} firstType Primer entidad en concreto.
     * @param {...MoLangValue[]} types Las demas entidades.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasAnyLeashedEntityOfType(firstType: MoLangValue, ...types: MoLangValue[]): string {
        return this.queryFunction("has_any_leashed_entity_of_type", firstType, ...types);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene una pieza de armadura en el slot en especifico.
     * @param {MoLangValue} slot El slot en concreto a considerar. Siendo: 0 (head), 1 (chest), 2 (legs) and 3 (feet).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasArmorSlot(slot: MoLangValue): string {
        return this.queryFunction("has_armor_slot", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el bioma en la ubicacion actual o posicion indicada tiene las tags especificas.
     * @param {MoLangValue} tag Tags en cuestion a considerar.
     * @param {...MoLangValue[]} position Posicion y/o ubicacion en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static hasBiomeTag(tag: MoLangValue, ...position: MoLangValue[]): string {
        return this.queryFunction("has_biome_tag", tag, ...position);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el bloque tiene la propiedad de bloque indicado.
     * @param {MoLangValue} property Propiedad del bloque en concreto.
     * @deprecated - No funciona en versiones actuales. Usa {@link MoLang.hasBlockState} en su lugar para versiones recientes.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasBlockProperty(property: MoLangValue): string {
        return this.queryFunction("has_block_property", property);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el bloque tiene el estado de bloque indicado.
     * @param {MoLangValue} state Estado del bloque en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasBlockState(state: MoLangValue): string {
        return this.queryFunction("has_block_state", state);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene una capa o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasCape(): string {
        return this.queryFunction("has_cape");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene colision o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasCollision(): string {
        return this.queryFunction("has_collision");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene tiempo de recarga de "dash" o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasDashCooldown(): string {
        return this.queryFunction("has_dash_cooldown");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene gravedad asiganada o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasGravity(): string {
        return this.queryFunction("has_gravity");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene un item en su cabeza o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasHeadGear(): string {
        return this.queryFunction("has_head_gear");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el ID de la entidad dueña de la misma, en caso de tener, sino sera false.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasOwner(): string {
        return this.queryFunction("has_owner");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta siendo montada por un jugador.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasPlayerRider(): string {
        return this.queryFunction("has_player_rider");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene una propiedad en especifico.
     * @param {MoLangValue} property Propiedad en concreto a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasProperty(property: MoLangValue): string {
        return this.queryFunction("has_property", property);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta montando. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasRider(): string {
        return this.queryFunction("has_rider");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene un target o un objectivo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static hasTarget(): string {
        return this.queryFunction("has_target");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la cabeza de la entidad esta en el agua.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static headIsInWater(): string {
        return this.queryFunction("head_is_in_water");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el angulo de balanceo de la cabeza de la entidad, si es pertinente.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static headRollAngle(): string {
        return this.queryFunction("head_roll_angle");
    }

    /**
     * Metodo auxiliar de consulta que obtiene la enésima (n) rotación en el eje X de la cabeza de la entidad.
     * @param {MoLangValue} index El índice o posición de la rotación que se desea obtener (basado en cero).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static headXRotation(index: MoLangValue): string {
        return this.queryFunction("head_x_rotation", index);
    }

    /**
     * Metodo auxiliar de consulta que obtiene la enésima (n) rotación en el eje Y de la cabeza de la entidad.
     * @param {MoLangValue} index El índice o posición de la rotación que se desea obtener (basado en cero).
     * @param {MoLangValue} [clamp] (Opcional) OBLIGATORIO SOLO PARA (Caballos, burros, mulas, etc.). El ángulo en grados para limitar (clamp) la rotación.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static headYRotation(index: MoLangValue, clamp?: MoLangValue): string {
        return clamp == undefined ? this.queryFunction("head_y_rotation", index) : this.queryFunction("head_y_rotation", index, clamp);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la vida de la entidad en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static health(): string {
        return this.queryFunction("health");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el intervalo del latido de corazon de la entidad. Devuelve 0 si la entidad no usa ese componente.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static heartbeatInterval(): string {
        return this.queryFunction("heartbeat_interval");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la fase del latido de corazon de la entidad. Siendo 0 la fase inicial y 1 la fase final. En caso de errores o si no tiene el componente de latidos, siempre sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static heartbeatPhase(): string {
        return this.queryFunction("heartbeat_phase");
    }

    /**
     * Metodo auxiliar que devuelve la altura del mapa en la posicion x,z indicada.
     * @param {MoLangValue} x Posicion x en concreto.
     * @param {MoLangValue} z Posicion z en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static heightmap(x: MoLangValue, z: MoLangValue): string {
        return this.queryFunction("heightmap", x, z);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la direccion de la entidad al ser lastimada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static hurtDirection(): string {
        return this.queryFunction("hurt_direction");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo de la entidad siendo lastimada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static hurtTime(): string {
        return this.queryFunction("hurt_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el primer argumento esta entre el minimo y el maximo. (ambos incluso)
     * @param {MoLangValue} value Valor a validar.
     * @param {MoLangValue} minimum Minimo a considerar.
     * @param {MoLangValue} maximum Maximo a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static inRange(value: MoLangValue, minimum: MoLangValue, maximum: MoLangValue): string {
        return this.queryFunction("in_range", value, minimum, maximum);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el numero de ticks de invulnerabilidad de la entidad que le quedan. Si tiene sentido.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static invulnerableTicks(): string {
        return this.queryFunction("invulnerable_ticks");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta admirando un item.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAdmiring(): string {
        return this.queryFunction("is_admiring");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta viva o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAlive(): string {
        return this.queryFunction("is_alive");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta enojada o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAngry(): string {
        return this.queryFunction("is_angry");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta atada a otra entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAttached(): string {
        return this.queryFunction("is_attached");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta atada a una entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAttachedToEntity(): string {
        return this.queryFunction("is_attached_to_entity");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta evadiendo bloques.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAvoidingBlock(): string {
        return this.queryFunction("is_avoiding_block");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta evadiendo entidades.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isAvoidingMobs(): string {
        return this.queryFunction("is_avoiding_mobs");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es un bebe.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isBaby(): string {
        return this.queryFunction("is_baby");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta respirando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isBreathing(): string {
        return this.queryFunction("is_breathing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta sobornada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isBribed(): string {
        return this.queryFunction("is_bribed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta sosteniendo un bloque.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCarryingBlock(): string {
        return this.queryFunction("is_carrying_block");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo magia.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCasting(): string {
        return this.queryFunction("is_casting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta celebrando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCelebrating(): string {
        return this.queryFunction("is_celebrating");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta celebrando, ¡pero con ganas!.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCelebratingSpecial(): string {
        return this.queryFunction("is_celebrating_special");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta cargada o lista para disparar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCharged(): string {
        return this.queryFunction("is_charged");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta embistiendo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCharging(): string {
        return this.queryFunction("is_charging");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene un cofre equipado.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isChested(): string {
        return this.queryFunction("is_chested");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el item equipado en la mano tiene una categoria de cooldown en concreto.
     * @param {MoLangValue} cooldown La categoria en concreto a identificar.
     * @param {MoLangValue} slot El slot en concreto a identificar.
     * @param {?MoLangValue} [slotId] (Opcional) El argumento del ID adiccional del slot a identificar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isCooldownCategory(cooldown: MoLangValue, slot: MoLangValue, slotId?: MoLangValue): string {
        return slotId == undefined ? this.queryFunction("is_cooldown_category", cooldown, slot) : this.queryFunction("is_cooldown_category", cooldown, slot, slotId);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta gateando o en un 1x1.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCrawling(): string {
        return this.queryFunction("is_crawling");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo criticos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCritical(): string {
        return this.queryFunction("is_critical");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo "ribbit" o croando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isCroaking(): string {
        return this.queryFunction("is_croaking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta bailando, omg.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isDancing(): string {
        return this.queryFunction("is_dancing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo ataques con tiempo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isDelayedAttacking(): string {
        return this.queryFunction("is_delayed_attacking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta buscando bajo tierra.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isDigging(): string {
        return this.queryFunction("is_digging");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta comiendo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isEating(): string {
        return this.queryFunction("is_eating");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta comiendo o se comio a un mob.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isEatingMob(): string {
        return this.queryFunction("is_eating_mob");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es anciana o anciano. Como el ElderGuardian, lo pillas?
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isElder(): string {
        return this.queryFunction("is_elder");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta emergiendo de la tierra.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isEmerging(): string {
        return this.queryFunction("is_emerging");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo emotizas o la funcion de emotes.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isEmoting(): string {
        return this.queryFunction("is_emoting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta encantada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isEnchanted(): string {
        return this.queryFunction("is_enchanted");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta mas feliz que todos nosotros programando con este lenguaje.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isFeelingHappy(): string {
        return this.queryFunction("is_feeling_happy");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es inmune al fuego.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isFireImmune(): string {
        return this.queryFunction("is_fire_immune");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador esta en primera persona.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isFirstPerson(): string {
        return this.queryFunction("is_first_person");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es un fantasma, como un espectador o entidad sin ninguna intangibilidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isGhost(): string {
        return this.queryFunction("is_ghost");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta planteando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isGliding(): string {
        return this.queryFunction("is_gliding");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta muy loca!
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isGrazing(): string {
        return this.queryFunction("is_grazing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta quieta o afk.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isIdling(): string {
        return this.queryFunction("is_idling");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta encendida o prendida.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isIgnited(): string {
        return this.queryFunction("is_ignited");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es un capitan illager.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isIllagerCaptain(): string {
        return this.queryFunction("is_illager_captain");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene contacto con el agua.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInContactWithWater(): string {
        return this.queryFunction("is_in_contact_with_water");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en la lava.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInLava(): string {
        return this.queryFunction("is_in_lava");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad quiere algo de amor, y no propio. Si tu me entiendes.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInLove(): string {
        return this.queryFunction("is_in_love");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador esta en alguna UI o interfaz.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInUi(): string {
        return this.queryFunction("is_in_ui");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en el agua.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInWater(): string {
        return this.queryFunction("is_in_water");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en el agua o en la lluvia.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInWaterOrRain(): string {
        return this.queryFunction("is_in_water_or_rain");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta interesada en tu item para tradear.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInterested(): string {
        return this.queryFunction("is_interested");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es invisible.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isInvisible(): string {
        return this.queryFunction("is_invisible");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si hay un item en el slot en concreto.
     * @param {?MoLangValue} [hand] (Opcional) El slot en concreto a tener en cuenta, por defecto sera la mainhand. (Usa 0 o 'main_hand' para la mano principal, 1 o 'off_hand' para la mano secundaria)
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026  
     * @public
     * @static
     */
    public static isItemEquipped(hand?: MoLangValue): string {
        return hand == undefined ? this.queryFunction("is_item_equipped") : this.queryFunction("is_item_equipped", hand);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el slot en concreto tiene alguno de los nombres de items indicados.
     * @param {MoLangValue} slot Slots en concreto a identificar. (Usa los que aparecen en el comando /replaceitem)
     * @param {...MoLangValue[]} arguments_ Nombres de items a conciderar. (Tiene que ir el identificador, osea 'minecraft:')
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isItemNameAny(slot: MoLangValue, ...arguments_: MoLangValue[]): string {
        return this.queryFunction("is_item_name_any", slot, ...arguments_);
    }

    /**
     * Metodo auxiliar que devuelve true o false si la IA de la entidad quiere saltar o su meta requiere saltar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isJumpGoalJumping(): string {
        return this.queryFunction("is_jump_goal_jumping");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta saltando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isJumping(): string {
        return this.queryFunction("is_jumping");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta acostada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLayingDown(): string {
        return this.queryFunction("is_laying_down");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad va a dejar o dejo un huevo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLayingEgg(): string {
        return this.queryFunction("is_laying_egg");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta atada a algo o alguien.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLeashed(): string {
        return this.queryFunction("is_leashed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta levitando o flotando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLevitating(): string {
        return this.queryFunction("is_levitating");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad es persistente o dejara un rastro residual por cierto tiempo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLingering(): string {
        return this.queryFunction("is_lingering");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador esta en tu casa. En modo de pantalla dividida devuelve false siempre.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isLocalPlayer(): string {
        return this.queryFunction("is_local_player");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad se esta moviendo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isMoving(): string {
        return this.queryFunction("is_moving");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad coincide con alguno de los valores establecidos.
     * @param {MoLangValue} firstName Primer nombre a validar.
     * @param {...MoLangValue[]} names Demas nombres a validar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isNameAny(firstName: MoLangValue, ...names: MoLangValue[]): string {
        return this.queryFunction("is_name_any", firstName, ...names);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad se esta quemando o esta en llamas.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isOnFire(): string {
        return this.queryFunction("is_on_fire");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en el suelo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isOnGround(): string {
        return this.queryFunction("is_on_ground");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en la pantalla o en el juego.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isOnScreen(): string {
        return this.queryFunction("is_on_screen");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta huerfana, no dire un chiste al respecto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isOrphaned(): string {
        return this.queryFunction("is_orphaned");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el identificador raiz de la entidad, si esta esta definida, comparandola con uno o mas argumentos.
     * @param {MoLangValue} firstIdentifier Primer ID a considerar.
     * @param {...MoLangValue[]} identifiers Los demas IDs a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isOwnerIdentifierAny(firstIdentifier: MoLangValue, ...identifiers: MoLangValue[]): string {
        return this.queryFunction("is_owner_identifier_any", firstIdentifier, ...identifiers);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si una opcion de configuracion del pack esta activo.
     * @param {MoLangValue} setting Nombre de la opcion a tomar en cuenta.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPackSettingEnabled(setting: MoLangValue): string {
        return this.queryFunction("is_pack_setting_enabled", setting);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si una opcion de configuracion del pack coincide con el valor selecionado.
     * @param {MoLangValue} setting Nombre de la opcion a tomar en cuenta.
     * @param {MoLangValue} selection Valor seleccionado a tomar en cuenta de la opcion.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPackSettingSelected(setting: MoLangValue, selection: MoLangValue): string {
        return this.queryFunction("is_pack_setting_selected", setting, selection);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador hizo una compra cuestionable, o es de consola porque no puede tener skins customs. Osea, si tiene una skin comprada o no. Tambien funciona con las skins vanillas no custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPersonaOrPremiumSkin(): string {
        return this.queryFunction("is_persona_or_premium_skin");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad se esta haciendo el muerto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPlayingDead(): string {
        return this.queryFunction("is_playing_dead");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta cargada, como el creeper cargado o el wither boss en su segunda fase.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPowered(): string {
        return this.queryFunction("is_powered");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta embarazada. No la(o) abandones. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isPregnant(): string {
        return this.queryFunction("is_pregnant");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo un ataque impulsado. Como la cabra.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRamAttacking(): string {
        return this.queryFunction("is_ram_attacking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta descanso asi de relajo, bien tranquila.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isResting(): string {
        return this.queryFunction("is_resting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta montando algo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRiding(): string {
        return this.queryFunction("is_riding");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad se encuentra montando alguna de las entidades de los parametros asignados.
     * @param {MoLangValue} firstType Primer ID a considerar.
     * @param {...MoLangValue[]} types El resto de IDs a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRidingAnyEntityOfType(firstType: MoLangValue, ...types: MoLangValue[]): string {
        return this.queryFunction("is_riding_any_entity_of_type", firstType, ...types);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta usando el componente timer_flag_2.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en versiones actuales.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRising(): string {
        return this.queryFunction("is_rising");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo roaar. O usando el componente knockback_roar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRoaring(): string {
        return this.queryFunction("is_roaring");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta rodando o esta enrollado. ¿Lo has visto en un panda?
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isRolling(): string {
        return this.queryFunction("is_rolling");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad tiene una montura.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSaddled(): string {
        return this.queryFunction("is_saddled");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta asustada. Miedo, terror, ozuna.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isScared(): string {
        return this.queryFunction("is_scared");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta usando el componente timer_flag_1.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en versiones actuales.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isScenting(): string {
        return this.queryFunction("is_scenting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta buscando algo o a alguien.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSearching(): string {
        return this.queryFunction("is_searching");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador tiene seleccionado un item en su inventario.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSelectedItem(): string {
        return this.queryFunction("is_selected_item");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo magia o casting.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isShaking(): string {
        return this.queryFunction("is_shaking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta sacudiendose para limpiarse el agua.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isShakingWetness(): string {
        return this.queryFunction("is_shaking_wetness");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta sin pelo. O bueno, mas bien, si le quitaron la lana. ¿Lo pillas?
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSheared(): string {
        return this.queryFunction("is_sheared");
    }

    /**
     * Metodo auxiliar de consulta que devuelve valor en frames [0f, 1f] si la entidad tiene un escudo activado o no.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isShieldPowered(): string {
        return this.queryFunction("is_shield_powered");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta en sigilo o haciendo silencio.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSilent(): string {
        return this.queryFunction("is_silent");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta sentadita. Relajado.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSitting(): string {
        return this.queryFunction("is_sitting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta dormidita. No la molestes.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSleeping(): string {
        return this.queryFunction("is_sleeping");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta agachada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSneaking(): string {
        return this.queryFunction("is_sneaking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta estornudando. Salud!
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSneezing(): string {
        return this.queryFunction("is_sneezing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta olfateando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSniffing(): string {
        return this.queryFunction("is_sniffing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta lanzando un ataque ultrasonico.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSonicBoom(): string {
        return this.queryFunction("is_sonic_boom");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el jugador esta en espectador.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSpectator(): string {
        return this.queryFunction("is_spectator");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta corriendo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSprinting(): string {
        return this.queryFunction("is_sprinting");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad se puede apilar con otras mas.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isStackable(): string {
        return this.queryFunction("is_stackable");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta acechando a otra. ¡No acoses a nadie!
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isStalking(): string {
        return this.queryFunction("is_stalking");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta parada o de pie. Ojala que hiciera la T pose verdad?
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isStanding(): string {
        return this.queryFunction("is_standing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta aturdida.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isStunned(): string {
        return this.queryFunction("is_stunned");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta nadando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isSwimming(): string {
        return this.queryFunction("is_swimming");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta domada.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isTamed(): string {
        return this.queryFunction("is_tamed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta haciendo una transicion a otra entidad. Respeta eh. Esto no es una broma.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isTransforming(): string {
        return this.queryFunction("is_transforming");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta usando un item.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isUsingItem(): string {
        return this.queryFunction("is_using_item");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta escalando una pared.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static isWallClimbing(): string {
        return this.queryFunction("is_wall_climbing");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo de uso que le queda al item para usarse por completo. Sino, sera 0.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026   
     * @public
     * @static
     */
    public static itemInUseDuration(): string {
        return this.queryFunction("item_in_use_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el item seleccionado esta totalmente cargado y listo para usarse.
     * @param {?MoLangValue} [hand] (Opcional) Slot en concreto a considerar, siendo 0 o 'main_hand' para la mano principal y/o 1 o 'off_hand' para la mano secundaria.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static itemIsCharged(hand?: MoLangValue): string {
        return hand == undefined ? this.queryFunction("item_is_charged") : this.queryFunction("item_is_charged", hand);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo maximo durante el cual se puede utilizar un item.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static itemMaxUseDuration(): string {
        return this.queryFunction("item_max_use_duration");
    }

    /**
     * Metodo auxiliar de consulta devuelve el tiempo que le queda de uso a un item en el slot en concreto. El tiempo restante se normaliza utilizando el valor de normalización, solo si se proporciona uno; de lo contrario, se devuelve en segundos.
     * @param {MoLangValue} slot Slot en concreto. ('main_hand' o 'off_hand')
     * @param {?MoLangValue} [normalization] (Opcional) Tiempo de normalizacion en segundos.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static itemRemainingUseDuration(slot: MoLangValue, normalization?: MoLangValue): string {
        return normalization == undefined ? this.queryFunction("item_remaining_use_duration", slot) : this.queryFunction("item_remaining_use_duration", slot, normalization);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nombre del hueso de la entidad en el slot en concreto.
     * @param {MoLangValue} slot Nombre del slot en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static itemSlotToBoneName(slot: MoLangValue): string {
        return this.queryFunction("item_slot_to_bone_name", slot);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la relacion entre frame anterior y el siguiente.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static keyFrameLerpTime(): string {
        return this.queryFunction("key_frame_lerp_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la duracion maxima de un damage conditions del componente kinetic weapon de la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static kineticWeaponDamageDuration(): string {
        return this.queryFunction("kinetic_weapon_damage_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el delay del componente kinetic weapon de la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static kineticWeaponDelay(): string {
        return this.queryFunction("kinetic_weapon_delay");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el max duration de dismount conditions del componente kinetic weapon de la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static kineticWeaponDismountDuration(): string {
        return this.queryFunction("kinetic_weapon_dismount_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el max duration de khockback conditions del componente kinetic weapon de la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026
     * @public
     * @static
     */
    public static kineticWeaponKnockbackDuration(): string {
        return this.queryFunction("kinetic_weapon_knockback_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo en segundos del ultimo frame.
     * @param {?MoLangValue} [frame] (Opcional) Numero de frames deseados en el pasado a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 19-09-2026 
     * @public
     * @static
     */
    public static lastFrameTime(frame?: MoLangValue): string {
        return frame == undefined ? this.queryFunction("last_frame_time") : this.queryFunction("last_frame_time", frame);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el ultimo hit recibido fue por un jugador.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lastHitByPlayer(): string {
        return this.queryFunction("last_hit_by_player");
    }

    /**
     * Metodo auxiliar de consulta true o false si alguno de los valores especificos concinciden con el ultimo input utilizado en el jugador.
     * @param {MoLangValue} firstMode Uno de los primeros inputs a considerar. 'keyboard_and_mouse', 'touch' y/o 'gamepad'
     * @param {...MoLangValue[]} modes Los demas inputs a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lastInputModeIsAny(firstMode: MoLangValue, ...modes: MoLangValue[]): string {
        return this.queryFunction("last_input_mode_is_any", firstMode, ...modes);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el numero de entidades las cuales estan atadas a esta misma.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static leashedEntityCount(): string {
        return this.queryFunction("leashed_entity_count");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo de acostado transcurrido.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lieAmount(): string {
        return this.queryFunction("lie_amount");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la vida util maxima en segundos de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lifeSpan(): string {
        return this.queryFunction("life_span");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo transcurrido en segundos desde que la animacion empezo. Devuelve 0 si no esta dentro de una animacion.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lifeTime(): string {
        return this.queryFunction("life_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de detalle (LOD) de la entidad segun su distancia de la camara.
     * @param {MoLangValue} firstDistance Primer distancia a considerar en bloques.
     * @param {...MoLangValue[]} distances Lista de distancias umbrales en bloques.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static lodIndex(firstDistance: MoLangValue, ...distances: MoLangValue[]): string {
        return this.queryFunction("lod_index", firstDistance, ...distances);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor asignado en la consola de depuracion.
     * @param {MoLangValue} value Valor a depurar. 
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static log(value: MoLangValue): string {
        return this.queryFunction("log", value);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la duracion maxima de uso de un item en la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static mainHandItemMaxDuration(): string {
        return this.queryFunction("main_hand_item_max_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo de uso del item en la mano principal.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static mainHandItemUseDuration(): string {
        return this.queryFunction("main_hand_item_use_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor de la variante mark, si tiene.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static markVariant(): string {
        return this.queryFunction("mark_variant");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la durabilidad maxima del item.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static maxDurability(): string {
        return this.queryFunction("max_durability");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la vida maxima de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static maxHealth(): string {
        return this.queryFunction("max_health");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel maximo de tradeos en la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static maxTradeTier(): string {
        return this.queryFunction("max_trade_tier");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo maximo de frames en segundos.
     * @param {?MoLangValue} [frames] (Opcional) Cantidad de frames pasados a evaluar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static maximumFrameTime(frames?: MoLangValue): string {
        return frames == undefined ? this.queryFunction("maximum_frame_time") : this.queryFunction("maximum_frame_time", frames);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo minimo de frames en segundos.
     * @param {?MoLangValue} [frames] (Opcional) Cantidad de frames pasados a evaluar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static minimumFrameTime(frames?: MoLangValue): string {
        return frames == undefined ? this.queryFunction("minimum_frame_time") : this.queryFunction("minimum_frame_time", frames);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de escalado que tenga la entidad en su modelo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static modelScale(): string {
        return this.queryFunction("model_scale");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la distancia total que la entidad se ha desplazado horinzontalmente en metros modificada por componentes como is baby o on fire.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static modifiedDistanceMoved(): string {
        return this.queryFunction("modified_distance_moved");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la velocidad de desplazamiento actual de la entidad, modificada por los componentes como is baby o on fire.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static modifiedMoveSpeed(): string {
        return this.queryFunction("modified_move_speed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la duracion de la animacion de golpe o ataque de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static modifiedSwingDuration(): string {
        return this.queryFunction("modified_swing_duration");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de brillo de la luna como: FULL_MOON=1.0, WANING_GIBBOUS=0.75, FIRST_QUARTER=0.5, WANING_CRESCENT=0.25, NEW_MOON=0.0, WAXING_CRESCENT=0.25, LAST_QUARTER=0.5 y/o WAXING_GIBBOUS=0.75
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static moonBrightness(): string {
        return this.queryFunction("moon_brightness");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el estado de la luna como: FULL_MOON=0, WANING_GIBBOUS=1, FIRST_QUARTER=2, WANING_CRESCENT=3, NEW_MOON=4, WAXING_CRESCENT=5, LAST_QUARTER=6 y/o WAXING_GIBBOUS=7
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static moonPhase(): string {
        return this.queryFunction("moon_phase");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el eje especificado delta de la posicion normalizada de la entidad.
     * @param {MoLangValue} axis Eje en especifico a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static movementDirection(axis: MoLangValue): string {
        return this.queryFunction("movement_direction", axis);
    }

    /**
     * Metodo auxiliar de consulta que devuelve un radio simplex de Perlin para la posicion (x,z) indicados.
     * @param {MoLangValue} x La posicion X en especifico.
     * @param {MoLangValue} z La posicion Z en especifico.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static noise(x: MoLangValue, z: MoLangValue): string {
        return this.queryFunction("noise", x, z);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo en llamas de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static onFireTime(): string {
        return this.queryFunction("on_fire_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la entidad esta muy loca y fuera de control.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static outOfControl(): string {
        return this.queryFunction("out_of_control");
    }

    /**
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en futuras versiones y sera eliminada.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static overlayAlpha(): string {
        return this.queryFunction("overlay_alpha");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el identificador raiz de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated - Ya no funciona en versiones futuras y actuales. Usa {@link MoLang.isOwnerIdentifierAny} en su lugar.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static ownerIdentifier(): string {
        return this.queryFunction("owner_identifier");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de experiencia actual del jugador.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static playerLevel(): string {
        return this.queryFunction("player_level");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la posicion absoluta de la entidad, que representa el eje deseado.
     * @param {MoLangValue} axis El eje deseado. 0 == eje x, 1 == eje y/o 2 == eje z.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static position(axis: MoLangValue): string {
        return this.queryFunction("position", axis);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la posicion delta de la entidad, que representa el eje deseado.
     * @param {MoLangValue} axis El eje deseado. 0 == eje x, 1 == eje y/o 2 == eje z.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static positionDelta(axis: MoLangValue): string {
        return this.queryFunction("position_delta", axis);
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor de "squish" anterior de la entidad actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static previousSquishValue(): string {
        return this.queryFunction("previous_squish_value");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el valor de la propiedad en especifico de la entidad.
     * @param {MoLangValue} name Propiedad en especifico a considerar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static property(name: MoLangValue): string {
        return this.queryFunction("property", name);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el bloque en la posicion relativa tiene todos los tags en especifico.
     * @param {MoLangValue} position Posicion relativa en concreto.
     * @param {MoLangValue} firstTag Primer tag en concreto.
     * @param {...MoLangValue[]} tags Los demas tags en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static relativeBlockHasAllTags(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("relative_block_has_all_tags", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si el bloque en la posicion relativa tiene uno o mas tags en especifico.
     * @param {MoLangValue} position Posicion relativa en concreto.
     * @param {MoLangValue} firstTag Primer tag en concreto.
     * @param {...MoLangValue[]} tags Los demas tags en concreto.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static relativeBlockHasAnyTag(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("relative_block_has_any_tag", position, firstTag, ...tags);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la durabilidad restante del item.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static remainingDurability(): string {
        return this.queryFunction("remaining_durability");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación del cuerpo en el eje X (pitch / inclinación) de la montura.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rideBodyXRotation(): string {
        return this.queryFunction("ride_body_x_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación del cuerpo en el eje Y (yaw / guiñada) de la montura.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rideBodyYRotation(): string {
        return this.queryFunction("ride_body_y_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación de la cabeza en el eje X (pitch / inclinación) de la montura.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rideHeadXRotation(): string {
        return this.queryFunction("ride_head_x_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación de la cabeza en el eje Y (yaw / orientación horizontal) de la montura.
     * @param {?MoLangValue} [clamp] (Opcional) Ángulo máximo en grados para restringir la rotación (exclusivo para équidos).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rideHeadYRotation(clamp?: MoLangValue): string {
        return clamp == undefined ? this.queryFunction("ride_head_y_rotation") : this.queryFunction("ride_head_y_rotation", clamp);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación del cuerpo en el eje X (pitch / inclinación) de un pasajero.
     * @param {MoLangValue} index Índice del pasajero a consultar (basado en 0).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026 
     * @public
     * @static
     */
    public static riderBodyXRotation(index: MoLangValue): string {
        return this.queryFunction("rider_body_x_rotation", index);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación del cuerpo en el eje Y (yaw / guiñada) de un pasajero.
     * @param {MoLangValue} index Índice del pasajero a consultar (basado en 0).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static riderBodyYRotation(index: MoLangValue): string {
        return this.queryFunction("rider_body_y_rotation", index);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación de la cabeza en el eje X (pitch / inclinación) de un pasajero.
     * @param {MoLangValue} index Índice del pasajero a consultar (basado en 0).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026 
     * @public
     * @static
     */
    public static riderHeadXRotation(index: MoLangValue): string {
        return this.queryFunction("rider_head_x_rotation", index);
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación de la cabeza en el eje Y (yaw / orientación horizontal) de un pasajero.
     * @param {MoLangValue} index Índice del pasajero a consultar (basado en 0).
     * @param {?MoLangValue} [clamp] (Opcional) Ángulo máximo en grados para restringir la rotación (exclusivo para équidos).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static riderHeadYRotation(index: MoLangValue, clamp?: MoLangValue): string {
        return clamp == undefined ? this.queryFunction("rider_head_y_rotation", index) : this.queryFunction("rider_head_y_rotation", index, clamp);
    }

    /**
     * Metodo auxiliar de consulta que devuelve las veces que se ha hecho un "roll", osea, una probabilidad aleatoria.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rollCounter(): string {
        return this.queryFunction("roll_counter");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación necesaria para orientar la entidad o hueso hacia la cámara del jugador.
     * @param {MoLangValue} axis Eje de rotación a calcular (0 para el eje X, 1 para el eje Y).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static rotationToCamera(axis: MoLangValue): string {
        return this.queryFunction("rotation_to_camera", axis);
    }

    /**
     * Metodo auxiliar de consulta que obtiene el valor de una entrada del Scoreboard para la entidad actual.
     * @param {MoLangValue} entry Nombre del objective a consultar.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyBPPack - Esta consulta solo es funcional en packs de comportamiento. (Behavior Packs)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static scoreboard(entry: MoLangValue): string {
        return this.queryFunction("scoreboard", entry);
    }

    /**
     * Metodo auxiliar de consulta que devuelve un numero que representa la cantidad de memoria que tiene el server. Estos siendo 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyBPPack - Esta consulta solo es funcional en packs de comportamiento. (Behavior Packs)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static serverMemoryTier(): string {
        return this.queryFunction("server_memory_tier");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el angulo de sacudida de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static shakeAngle(): string {
        return this.queryFunction("shake_angle");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo de sacudida de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static shakeTime(): string {
        return this.queryFunction("shake_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la distancia a la que debe desplazarse hacia abajo el escudo de la mano secundaria al bloquear y recibir un golpe.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static shieldBlockingBob(): string {
        return this.queryFunction("shield_blocking_bob");
    }

    /**
     * Metodo auxiliar de consulta que devuelve true o false si la parte inferior de la entidad se esta renderizando.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static showBottom(): string {
        return this.queryFunction("show_bottom");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el progreso actual de la acción de sentarse (sit amount).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sitAmount(): string {
        return this.queryFunction("sit_amount");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el Skin ID de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static skinId(): string {
        return this.queryFunction("skin_id");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación de la cama en la que la entidad está durmiendo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sleepRotation(): string {
        return this.queryFunction("sleep_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el contador de estornudos de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sneezeCounter(): string {
        return this.queryFunction("sneeze_counter");
    }

    /**
     * Metodo auxiliar de consulta que devuelve una estructura con el color de hechizo de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static spellColor(): string {
        return this.queryFunction("spellcolor");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la escala de qué tan erguida o de pie está la entidad (standing scale).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static standingScale(): string {
        return this.queryFunction("standing_scale");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo transcurrido (en segundos) en el estado actual del Animation Controller.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyAnimController - Esta consulta va dirigida a los animations controllers.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static stateTime(): string {
        return this.queryFunction("state_time");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la integridad estructural (structural integrity) de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static structuralIntegrity(): string {
        return this.queryFunction("structural_integrity");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el color de la partícula del bloque situado en la superficie debajo de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static surfaceParticleColor(): string {
        return this.queryFunction("surface_particle_color");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la coordenada de textura para generar partículas del bloque debajo de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static surfaceParticleTextureCoordinate(): string {
        return this.queryFunction("surface_particle_texture_coordinate");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tamaño de textura para generar partículas del bloque debajo de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static surfaceParticleTextureSize(): string {
        return this.queryFunction("surface_particle_texture_size");
    }

    /**
     * Metodo auxiliar de consulta que devuelve qué tan hinchada o inflada está la entidad (swell amount).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static swellAmount(): string {
        return this.queryFunction("swell_amount");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la dirección en la que se está hinchando la entidad (swelling direction).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static swellingDir(): string {
        return this.queryFunction("swelling_dir");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el progreso o la cantidad de nado de la entidad (swim amount).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static swimAmount(): string {
        return this.queryFunction("swim_amount");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el ángulo de la cola de la entidad (tail angle).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static tailAngle(): string {
        return this.queryFunction("tail_angle");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación en el eje X (pitch / inclinación) necesaria para apuntar al objetivo actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static targetXRotation(): string {
        return this.queryFunction("target_x_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la rotación en el eje Y (yaw / guiñada) necesaria para apuntar al objetivo actual.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static targetYRotation(): string {
        return this.queryFunction("target_y_rotation");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el índice del frame de textura del orbe de experiencia.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static textureFrameIndex(): string {
        return this.queryFunction("texture_frame_index");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el número de ticks transcurridos desde el último golpe con un arma cinética.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static ticksSinceLastKineticWeaponHit(): string {
        return this.queryFunction("ticks_since_last_kinetic_weapon_hit");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la hora del día en la dimensión donde se encuentra la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timeOfDay(): string {
        return this.queryFunction("time_of_day");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el tiempo en segundos desde la última vibración detectada por la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timeSinceLastVibrationDetection(): string {
        return this.queryFunction("time_since_last_vibration_detection");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la marca de tiempo (timestamp) actual del nivel o mundo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timeStamp(): string {
        return this.queryFunction("time_stamp");
    }

    /**
     * Metodo auxiliar de consulta que verifica si la bandera de temporizador 1 está en ejecución.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timerFlag1(): string {
        return this.queryFunction("timer_flag_1");
    }

    /**
     * Metodo auxiliar de consulta que verifica si la bandera de temporizador 2 está en ejecución.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timerFlag2(): string {
        return this.queryFunction("timer_flag_2");
    }

    /**
     * Metodo auxiliar de consulta que verifica si la bandera de temporizador 3 está en ejecución.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static timerFlag3(): string {
        return this.queryFunction("timer_flag_3");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el número total de emisores de partículas activos en el mundo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static totalEmitterCount(): string {
        return this.queryFunction("total_emitter_count");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el número total de partículas individuales activas en el mundo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static totalParticleCount(): string {
        return this.queryFunction("total_particle_count");
    }

    /**
     * Metodo auxiliar de consulta que verifica si la entrada táctil afecta exclusivamente a la barra de acceso rápido (hotbar).
     * @returns {string} Devuelve la consulta formateada y lista.
     * @onlyRPPack - Esta consulta solo funciona con packs de recursos. (Resource Pack)
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static touchOnlyAffectsHotbar(): string {
        return this.queryFunction("touch_only_affects_hotbar");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el nivel de trade de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static tradeTier(): string {
        return this.queryFunction("trade_tier");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la infelicidad de los pandas. Pero, eso fue tan cruel que ya no funciona en versiones actuales. Siempre lanzara 0 al usarse.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @deprecated
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static unhappyCounter(): string {
        return this.queryFunction("unhappy_counter");
    }

    /**
     * Metodo auxiliar de consulta que devuelve el variant ID de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static variant(): string {
        return this.queryFunction("variant");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la velocidad vertical de la entidad en metros por segundo.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static verticalSpeed(): string {
        return this.queryFunction("vertical_speed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la distancia total recorrida por la entidad mientras está en el suelo y sin agacharse.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static walkDistance(): string {
        return this.queryFunction("walk_distance");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la posición del aleteo de las alas de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static wingFlapPosition(): string {
        return this.queryFunction("wing_flap_position");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la velocidad del aleteo de las alas de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static wingFlapSpeed(): string {
        return this.queryFunction("wing_flap_speed");
    }

    /**
     * Metodo auxiliar de consulta que devuelve la velocidad de guiñada (yaw speed) de la entidad.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static yawSpeed(): string {
        return this.queryFunction("yaw_speed");
    }

    /**
     * Metodo auxiliar que crea una variable MoLang custom.
     * @param {string} property Nombre de la variable custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static variable(property: string): string {
        return `v.${property}`;
    }

    /**
     * Metodo auxiliar que crea una variable temporal MoLang custom.
     * @param {string} property Nombre de la variable custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static temp(property: string): string {
        return `t.${property}`;
    }

    /**
     * Metodo auxiliar que crea una variable contextual MoLang custom.
     * @param {string} property Nombre de la variable custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static context(property: string): string {
        return `c.${property}`;
    }

    /**
     * Metodo auxiliar que crea una variable Geomtrica custom.
     * @param {string} name Nombre de la geometria custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static geometry(name: string): string {
        return `Geometry.${name}`;
    }

    /**
     * Metodo auxiliar que crea una variable Material custom.
     * @param {string} name Nombre del Material custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static material(name: string): string {
        return `Material.${name}`;
    }

    /**
     * Metodo auxiliar que crea una variable Texture custom.
     * @param {string} name Nombre de la texture custom.
     * @returns {string} Devuelve la consulta formateada y lista.
     * @isQueryFunction - Es un metodo query o consulta simplificada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static texture(name: string): string {
        return `Texture.${name}`;
    }

    /**
     * Metodo principal que calcula el valor absoluto (ABS) de un numero o expresion MoLang.
     * @param {MoLangValue} value Numero o expresion MoLang a evaluar.
     * @returns {MoLangValue} Retorna el valor absoluto calculado o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static abs(value: MoLangValue): MoLangValue {
        return this.unary(value, "abs", Math.abs);
    }

    /**
     * Metodo principal que calcula el arco coseno (ACOS) de un valor, expresado en grados.
     * @param {MoLangValue} value Valor de entrada (típicamente entre -1.0 y 1.0) o expresión Molang.
     * @returns {MoLangValue} Retorna el resultado en grados o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static acos(value: MoLangValue): MoLangValue {
        return this.unary(value, "acos", (number) => this.toDegrees(Math.acos(number)));
    }

    /**
     * Metodo principal que calcula el arco seno (ASIN) de un valor, expresado en grados.
     * @param {MoLangValue} value Valor de entrada (típicamente entre -1.0 y 1.0) o expresión Molang.
     * @returns {MoLangValue} Retorna el resultado en grados o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static asin(value: MoLangValue): MoLangValue {
        return this.unary(value, "asin", (number) => this.toDegrees(Math.asin(number)));
    }

    /**
     * Metodo principal que calcula el arco tangente (ATAN) de un valor, expresado en grados.
     * @param {MoLangValue} value Valor numérico o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el resultado en grados o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static atan(value: MoLangValue): MoLangValue {
        return this.unary(value, "atan", (number) => this.toDegrees(Math.atan(number)));
    }

    /**
     * Método principal que calcula el arco tangente de las coordenadas y y x (atan2), expresado en grados.
     * @param {MoLangValue} y Coordenada Y o expresión Molang.
     * @param {MoLangValue} x Coordenada X o expresión Molang.
     * @returns {MoLangValue} Retorna el ángulo calculado en grados o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026 
     * @public
     * @static
     */
    public static atan2(y: MoLangValue, x: MoLangValue): MoLangValue {
        return this.binary(y, x, "atan2", (first, second) => this.toDegrees(Math.atan2(first, second)));
    }

    /**
     * Método principal que redondea un número hacia arriba (ceil) al entero más cercano.
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el entero redondeado hacia arriba o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static ceil(value: MoLangValue): MoLangValue {
        return this.unary(value, "ceil", Math.ceil);
    }

    /**
     * Método principal que calcula el coseno (cos) de un ángulo dado en grados.
     * @param {MoLangValue} value Ángulo en grados o expresión Molang.
     * @returns {MoLangValue} Retorna el valor del coseno o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static cos(value: MoLangValue): MoLangValue {
        return this.unary(value, "cos", (number) => Math.cos(this.toRadians(number)));
    }

    /**
     * Método principal que calcula la función exponencial natural ($e^x$) de un valor.
     * @param {MoLangValue} value Potencia o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el resultado exponencial calculado o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static exp(value: MoLangValue): MoLangValue {
        return this.unary(value, "exp", Math.exp);
    }

    /**
     * Método principal que redondea un número hacia abajo (floor) al entero más cercano.
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el entero redondeado hacia abajo o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static floor(value: MoLangValue): MoLangValue {
        return this.unary(value, "floor", Math.floor);
    }

    /**
     * Método principal que calcula el logaritmo natural (ln) de un número o expresión Molang.
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el logaritmo natural calculado o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static ln(value: MoLangValue): MoLangValue {
        return this.unary(value, "ln", Math.log);
    }

    /**
     * Método principal que devuelve el valor mayor entre dos números o expresiones Molang (max).
     * @param {MoLangValue} first Primer valor o expresión Molang a comparar.
     * @param {MoLangValue} second Segundo valor o expresión Molang a comparar.
     * @returns {MoLangValue} Retorna el valor máximo o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static max(first: MoLangValue, second: MoLangValue): MoLangValue {
        return this.binary(first, second, "max", Math.max);
    }

    /**
     * Método principal que devuelve el valor menor entre dos números o expresiones Molang (min).
     * @param {MoLangValue} first Primer valor o expresión Molang a comparar.
     * @param {MoLangValue} second Segundo valor o expresión Molang a comparar.
     * @returns {MoLangValue} Retorna el valor mínimo o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static min(first: MoLangValue, second: MoLangValue): MoLangValue {
        return this.binary(first, second, "min", Math.min);
    }

    /**
     * Método principal que eleva una base a la potencia de un exponente dado (pow).
     * @param {MoLangValue} base Base numérica o expresión Molang.
     * @param {MoLangValue} exponent Exponente numérico o expresión Molang.
     * @returns {MoLangValue} Retorna el resultado de la potencia o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static pow(base: MoLangValue, exponent: MoLangValue): MoLangValue {
        return this.binary(base, exponent, "pow", Math.pow);
    }

    /**
     * Método principal que redondea un número al entero más cercano (round).
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna el entero redondeado o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static round(value: MoLangValue): MoLangValue {
        return this.unary(value, "round", Math.round);
    }

    /**
     * Método principal que determina la función signo (sign) de un valor.
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna 1 o -1, o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sign(value: MoLangValue): MoLangValue {
        return this.unary(value, "sign", (number) => number > 0 ? 1 : -1);
    }

    /**
     * Método principal que calcula el seno (sin) de un ángulo dado en grados.
     * @param {MoLangValue} value Ángulo en grados o expresión Molang.
     * @returns {MoLangValue} Retorna el valor del seno o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sin(value: MoLangValue): MoLangValue {
        return this.unary(value, "sin", (number) => Math.sin(this.toRadians(number)));
    }

    /**
     * Método principal que calcula la raíz cuadrada (sqrt) de un número o expresión Molang.
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna la raíz cuadrada calculada o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static sqrt(value: MoLangValue): MoLangValue {
        return this.unary(value, "sqrt", Math.sqrt);
    }

    /**
     * Método principal que trunca la parte decimal de un número, dejando únicamente la parte entera (trunc).
     * @param {MoLangValue} value Número o expresión Molang a evaluar.
     * @returns {MoLangValue} Retorna la parte entera truncada o la cadena de consulta formateada.
     * @author HaJuegos - 20-09-2026
     * @public
     * @static
     */
    public static trunc(value: MoLangValue): MoLangValue {
        return this.unary(value, "trunc", Math.trunc);
    }

    // Privados

    /**
     * Metodo auxiliar que procesa operaciones matemáticas unarias (con un solo argumento).
     * @param {MoLangValue} value Valor numérico o expresión Molang a evaluar.
     * @param {string} functionName Nombre de la función matemática en Molang (ej. "abs", "acos").
     * @param {(value: number) => number} nativeFunction Función nativa de JS equivalente para evaluación local.
     * @returns {MoLangValue} Retorna el resultado numérico directo o la cadena de expresión Molang formateada.
     * @author HaJuegos - 20-09-2026
     * @private
     * @static
     */
    private static unary(value: MoLangValue, functionName: string, nativeFunction: (value: number) => number): MoLangValue {
        return typeof value == "number" ? nativeFunction(value) : `math.${functionName}(${value})`;
    }

    /**
     * Metodo auxiliar privado que construye y formatea las llamadas a consultas.
     * @param {string} name Nombre base de la consulta Molang (ej. "health", "lod_index").
     * @param {...MoLangValue[]} arguments_ Lista opcional de argumentos o parámetros para la consulta.
     * @returns {string} Retorna la cadena formateada de la consulta lista para usarse en scripts o animaciones.
     * @author HaJuegos - 20-09-2026
     * @private
     * @static
     */
    private static queryFunction(name: string, ...arguments_: MoLangValue[]): string {
        return arguments_.length == 0 ? `q.${name}` : `q.${name}(${arguments_.join(", ")})`;
    }

    /**
     * Metodo auxiliar privado que procesa operaciones matemáticas binarias (con dos argumentos).
     * @param {MoLangValue} first Primer valor numérico o expresión Molang (ej. coordenada Y).
     * @param {MoLangValue} second Segundo valor numérico o expresión Molang (ej. coordenada X).
     * @param {string} functionName Nombre de la función matemática binaria en Molang (ej. "atan2").
     * @param {(first: number, second: number) => number} nativeFunction Función nativa de JS equivalente para evaluación local.
     * @returns {MoLangValue} Retorna el resultado numérico directo o la cadena de expresión Molang formateada.
     * @author HaJuegos - 20-09-2026
     * @private
     * @static
     */
    private static binary(first: MoLangValue, second: MoLangValue, functionName: string, nativeFunction: (first: number, second: number) => number): MoLangValue {
        return typeof first == "number" && typeof second == "number" ? nativeFunction(first, second) : `math.${functionName}(${first}, ${second})`;
    }

    /**
     * Método auxiliar privado que convierte un ángulo medido en radianes a grados.
     * @param {number} radians Ángulo expresado en radianes.
     * @returns {number} Retorna el ángulo equivalente convertido a grados.
     * @author HaJuegos - 20-09-2026
     * @private
     * @static
     */
    private static toDegrees(radians: number): number {
        return radians * 180 / Math.PI;
    }

    /**
     * Método auxiliar privado que convierte un ángulo medido en grados a radianes.
     * @param {number} degrees Ángulo expresado en grados.
     * @returns {number} Retorna el ángulo equivalente convertido a radianes.
     * @author HaJuegos - 20-09-2026 
     * @private
     * @static
     */
    private static toRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }
}