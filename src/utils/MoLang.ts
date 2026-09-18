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
     * Metodo auxiliar 
     * @returns {string} 
     * @public
     * @static
     */
    public static getLevelSeedBasedFraction(): string {
        return this.queryFunction("get_level_seed_based_fraction");
    }

    public static getLocatorOffset(locator: MoLangValue, axis: MoLangValue): string {
        return this.queryFunction("get_locator_offset", locator, axis);
    }

    public static getName(): string {
        return this.queryFunction("get_name");
    }

    public static getPackSetting(setting: MoLangValue): string {
        return this.queryFunction("get_pack_setting", setting);
    }

    public static getRootLocatorOffset(locator: MoLangValue, axis: MoLangValue): string {
        return this.queryFunction("get_root_locator_offset", locator, axis);
    }

    public static graphicsModeIsAny(firstMode: MoLangValue, ...modes: MoLangValue[]): string {
        return this.queryFunction("graphics_mode_is_any", firstMode, ...modes);
    }

    public static groundSpeed(): string {
        return this.queryFunction("ground_speed");
    }

    public static hadComponentGroup(group: MoLangValue): string {
        return this.queryFunction("had_component_group", group);
    }

    public static hasAllBiomeTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("has_all_biome_tags", firstTag, ...tags);
    }

    public static hasAnyBiomeTags(firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("has_any_biome_tags", firstTag, ...tags);
    }

    public static hasAnyFamily(firstFamily: MoLangValue, ...families: MoLangValue[]): string {
        return this.queryFunction("has_any_family", firstFamily, ...families);
    }

    public static hasAnyLeashedEntityOfType(firstType: MoLangValue, ...types: MoLangValue[]): string {
        return this.queryFunction("has_any_leashed_entity_of_type", firstType, ...types);
    }

    public static hasArmorSlot(slot: MoLangValue): string {
        return this.queryFunction("has_armor_slot", slot);
    }

    public static hasBiomeTag(tag: MoLangValue, ...position: MoLangValue[]): string {
        return this.queryFunction("has_biome_tag", tag, ...position);
    }

    public static hasBlockProperty(property: MoLangValue): string {
        return this.queryFunction("has_block_property", property);
    }

    public static hasBlockState(state: MoLangValue): string {
        return this.queryFunction("has_block_state", state);
    }

    public static hasCape(): string {
        return this.queryFunction("has_cape");
    }

    public static hasCollision(): string {
        return this.queryFunction("has_collision");
    }

    public static hasDashCooldown(): string {
        return this.queryFunction("has_dash_cooldown");
    }

    public static hasGravity(): string {
        return this.queryFunction("has_gravity");
    }

    public static hasHeadGear(): string {
        return this.queryFunction("has_head_gear");
    }

    public static hasOwner(): string {
        return this.queryFunction("has_owner");
    }

    public static hasPlayerRider(): string {
        return this.queryFunction("has_player_rider");
    }

    public static hasProperty(property: MoLangValue): string {
        return this.queryFunction("has_property", property);
    }

    public static hasRider(): string {
        return this.queryFunction("has_rider");
    }

    public static hasTarget(): string {
        return this.queryFunction("has_target");
    }

    public static headIsInWater(): string {
        return this.queryFunction("head_is_in_water");
    }

    public static headRollAngle(): string {
        return this.queryFunction("head_roll_angle");
    }

    public static headXRotation(index: MoLangValue): string {
        return this.queryFunction("head_x_rotation", index);
    }

    public static headYRotation(index: MoLangValue, clamp?: MoLangValue): string {
        return clamp === undefined
            ? this.queryFunction("head_y_rotation", index)
            : this.queryFunction("head_y_rotation", index, clamp);
    }

    public static health(): string {
        return this.queryFunction("health");
    }

    public static heartbeatInterval(): string {
        return this.queryFunction("heartbeat_interval");
    }

    public static heartbeatPhase(): string {
        return this.queryFunction("heartbeat_phase");
    }

    public static heightmap(x: MoLangValue, z: MoLangValue): string {
        return this.queryFunction("heightmap", x, z);
    }

    public static hurtDirection(): string {
        return this.queryFunction("hurt_direction");
    }

    public static hurtTime(): string {
        return this.queryFunction("hurt_time");
    }

    public static inRange(value: MoLangValue, minimum: MoLangValue, maximum: MoLangValue): string {
        return this.queryFunction("in_range", value, minimum, maximum);
    }

    public static invulnerableTicks(): string {
        return this.queryFunction("invulnerable_ticks");
    }

    public static isAdmiring(): string {
        return this.queryFunction("is_admiring");
    }

    public static isAlive(): string {
        return this.queryFunction("is_alive");
    }

    public static isAngry(): string {
        return this.queryFunction("is_angry");
    }

    public static isAttached(): string {
        return this.queryFunction("is_attached");
    }

    public static isAttachedToEntity(): string {
        return this.queryFunction("is_attached_to_entity");
    }

    public static isAvoidingBlock(): string {
        return this.queryFunction("is_avoiding_block");
    }

    public static isAvoidingMobs(): string {
        return this.queryFunction("is_avoiding_mobs");
    }

    public static isBaby(): string {
        return this.queryFunction("is_baby");
    }

    public static isBreathing(): string {
        return this.queryFunction("is_breathing");
    }

    public static isBribed(): string {
        return this.queryFunction("is_bribed");
    }

    public static isCarryingBlock(): string {
        return this.queryFunction("is_carrying_block");
    }

    public static isCasting(): string {
        return this.queryFunction("is_casting");
    }

    public static isCelebrating(): string {
        return this.queryFunction("is_celebrating");
    }

    public static isCelebratingSpecial(): string {
        return this.queryFunction("is_celebrating_special");
    }

    public static isCharged(): string {
        return this.queryFunction("is_charged");
    }

    public static isCharging(): string {
        return this.queryFunction("is_charging");
    }

    public static isChested(): string {
        return this.queryFunction("is_chested");
    }

    public static isCooldownCategory(cooldown: MoLangValue, slot: MoLangValue, slotId?: MoLangValue): string {
        return slotId === undefined
            ? this.queryFunction("is_cooldown_category", cooldown, slot)
            : this.queryFunction("is_cooldown_category", cooldown, slot, slotId);
    }

    public static isCrawling(): string {
        return this.queryFunction("is_crawling");
    }

    public static isCritical(): string {
        return this.queryFunction("is_critical");
    }

    public static isCroaking(): string {
        return this.queryFunction("is_croaking");
    }

    public static isDancing(): string {
        return this.queryFunction("is_dancing");
    }

    public static isDelayedAttacking(): string {
        return this.queryFunction("is_delayed_attacking");
    }

    public static isDigging(): string {
        return this.queryFunction("is_digging");
    }

    public static isEating(): string {
        return this.queryFunction("is_eating");
    }

    public static isEatingMob(): string {
        return this.queryFunction("is_eating_mob");
    }

    public static isElder(): string {
        return this.queryFunction("is_elder");
    }

    public static isEmerging(): string {
        return this.queryFunction("is_emerging");
    }

    public static isEmoting(): string {
        return this.queryFunction("is_emoting");
    }

    public static isEnchanted(): string {
        return this.queryFunction("is_enchanted");
    }

    public static isFeelingHappy(): string {
        return this.queryFunction("is_feeling_happy");
    }

    public static isFireImmune(): string {
        return this.queryFunction("is_fire_immune");
    }

    public static isFirstPerson(): string {
        return this.queryFunction("is_first_person");
    }

    public static isGhost(): string {
        return this.queryFunction("is_ghost");
    }

    public static isGliding(): string {
        return this.queryFunction("is_gliding");
    }

    public static isGrazing(): string {
        return this.queryFunction("is_grazing");
    }

    public static isIdling(): string {
        return this.queryFunction("is_idling");
    }

    public static isIgnited(): string {
        return this.queryFunction("is_ignited");
    }

    public static isIllagerCaptain(): string {
        return this.queryFunction("is_illager_captain");
    }

    public static isInContactWithWater(): string {
        return this.queryFunction("is_in_contact_with_water");
    }

    public static isInLava(): string {
        return this.queryFunction("is_in_lava");
    }

    public static isInLove(): string {
        return this.queryFunction("is_in_love");
    }

    public static isInUi(): string {
        return this.queryFunction("is_in_ui");
    }

    public static isInWater(): string {
        return this.queryFunction("is_in_water");
    }

    public static isInWaterOrRain(): string {
        return this.queryFunction("is_in_water_or_rain");
    }

    public static isInterested(): string {
        return this.queryFunction("is_interested");
    }

    public static isInvisible(): string {
        return this.queryFunction("is_invisible");
    }

    public static isItemEquipped(hand?: MoLangValue): string {
        return hand === undefined
            ? this.queryFunction("is_item_equipped")
            : this.queryFunction("is_item_equipped", hand);
    }

    public static isItemNameAny(slot: MoLangValue, ...arguments_: MoLangValue[]): string {
        return this.queryFunction("is_item_name_any", slot, ...arguments_);
    }

    public static isJumpGoalJumping(): string {
        return this.queryFunction("is_jump_goal_jumping");
    }

    public static isJumping(): string {
        return this.queryFunction("is_jumping");
    }

    public static isLayingDown(): string {
        return this.queryFunction("is_laying_down");
    }

    public static isLayingEgg(): string {
        return this.queryFunction("is_laying_egg");
    }

    public static isLeashed(): string {
        return this.queryFunction("is_leashed");
    }

    public static isLevitating(): string {
        return this.queryFunction("is_levitating");
    }

    public static isLingering(): string {
        return this.queryFunction("is_lingering");
    }

    public static isLocalPlayer(): string {
        return this.queryFunction("is_local_player");
    }

    public static isMoving(): string {
        return this.queryFunction("is_moving");
    }

    public static isNameAny(firstName: MoLangValue, ...names: MoLangValue[]): string {
        return this.queryFunction("is_name_any", firstName, ...names);
    }

    public static isOnFire(): string {
        return this.queryFunction("is_on_fire");
    }

    public static isOnGround(): string {
        return this.queryFunction("is_on_ground");
    }

    public static isOnScreen(): string {
        return this.queryFunction("is_on_screen");
    }

    public static isOnfire(): string {
        return this.queryFunction("is_onfire");
    }

    public static isOrphaned(): string {
        return this.queryFunction("is_orphaned");
    }

    public static isOwnerIdentifierAny(firstIdentifier: MoLangValue, ...identifiers: MoLangValue[]): string {
        return this.queryFunction("is_owner_identifier_any", firstIdentifier, ...identifiers);
    }

    public static isPackSettingEnabled(setting: MoLangValue): string {
        return this.queryFunction("is_pack_setting_enabled", setting);
    }

    public static isPackSettingSelected(setting: MoLangValue, selection: MoLangValue): string {
        return this.queryFunction("is_pack_setting_selected", setting, selection);
    }

    public static isPersonaOrPremiumSkin(): string {
        return this.queryFunction("is_persona_or_premium_skin");
    }

    public static isPlayingDead(): string {
        return this.queryFunction("is_playing_dead");
    }

    public static isPowered(): string {
        return this.queryFunction("is_powered");
    }

    public static isPregnant(): string {
        return this.queryFunction("is_pregnant");
    }

    public static isRamAttacking(): string {
        return this.queryFunction("is_ram_attacking");
    }

    public static isResting(): string {
        return this.queryFunction("is_resting");
    }

    public static isRiding(): string {
        return this.queryFunction("is_riding");
    }

    public static isRidingAnyEntityOfType(firstType: MoLangValue, ...types: MoLangValue[]): string {
        return this.queryFunction("is_riding_any_entity_of_type", firstType, ...types);
    }

    public static isRising(): string {
        return this.queryFunction("is_rising");
    }

    public static isRoaring(): string {
        return this.queryFunction("is_roaring");
    }

    public static isRolling(): string {
        return this.queryFunction("is_rolling");
    }

    public static isSaddled(): string {
        return this.queryFunction("is_saddled");
    }

    public static isScared(): string {
        return this.queryFunction("is_scared");
    }

    public static isScenting(): string {
        return this.queryFunction("is_scenting");
    }

    public static isSearching(): string {
        return this.queryFunction("is_searching");
    }

    public static isSelectedItem(): string {
        return this.queryFunction("is_selected_item");
    }

    public static isShaking(): string {
        return this.queryFunction("is_shaking");
    }

    public static isShakingWetness(): string {
        return this.queryFunction("is_shaking_wetness");
    }

    public static isSheared(): string {
        return this.queryFunction("is_sheared");
    }

    public static isShieldPowered(): string {
        return this.queryFunction("is_shield_powered");
    }

    public static isSilent(): string {
        return this.queryFunction("is_silent");
    }

    public static isSitting(): string {
        return this.queryFunction("is_sitting");
    }

    public static isSleeping(): string {
        return this.queryFunction("is_sleeping");
    }

    public static isSneaking(): string {
        return this.queryFunction("is_sneaking");
    }

    public static isSneezing(): string {
        return this.queryFunction("is_sneezing");
    }

    public static isSniffing(): string {
        return this.queryFunction("is_sniffing");
    }

    public static isSonicBoom(): string {
        return this.queryFunction("is_sonic_boom");
    }

    public static isSpectator(): string {
        return this.queryFunction("is_spectator");
    }

    public static isSprinting(): string {
        return this.queryFunction("is_sprinting");
    }

    public static isStackable(): string {
        return this.queryFunction("is_stackable");
    }

    public static isStalking(): string {
        return this.queryFunction("is_stalking");
    }

    public static isStanding(): string {
        return this.queryFunction("is_standing");
    }

    public static isStunned(): string {
        return this.queryFunction("is_stunned");
    }

    public static isSwimming(): string {
        return this.queryFunction("is_swimming");
    }

    public static isTamed(): string {
        return this.queryFunction("is_tamed");
    }

    public static isTransforming(): string {
        return this.queryFunction("is_transforming");
    }

    public static isUsingItem(): string {
        return this.queryFunction("is_using_item");
    }

    public static isWallClimbing(): string {
        return this.queryFunction("is_wall_climbing");
    }

    public static itemInUseDuration(): string {
        return this.queryFunction("item_in_use_duration");
    }

    public static itemIsCharged(hand?: MoLangValue): string {
        return hand === undefined
            ? this.queryFunction("item_is_charged")
            : this.queryFunction("item_is_charged", hand);
    }

    public static itemMaxUseDuration(): string {
        return this.queryFunction("item_max_use_duration");
    }

    public static itemRemainingUseDuration(slot: MoLangValue, normalization?: MoLangValue): string {
        return normalization === undefined
            ? this.queryFunction("item_remaining_use_duration", slot)
            : this.queryFunction("item_remaining_use_duration", slot, normalization);
    }

    public static itemSlotToBoneName(slot: MoLangValue): string {
        return this.queryFunction("item_slot_to_bone_name", slot);
    }

    public static keyFrameLerpTime(): string {
        return this.queryFunction("key_frame_lerp_time");
    }

    public static kineticWeaponDamageDuration(): string {
        return this.queryFunction("kinetic_weapon_damage_duration");
    }

    public static kineticWeaponDelay(): string {
        return this.queryFunction("kinetic_weapon_delay");
    }

    public static kineticWeaponDismountDuration(): string {
        return this.queryFunction("kinetic_weapon_dismount_duration");
    }

    public static kineticWeaponKnockbackDuration(): string {
        return this.queryFunction("kinetic_weapon_knockback_duration");
    }

    public static lastFrameTime(frame?: MoLangValue): string {
        return frame === undefined
            ? this.queryFunction("last_frame_time")
            : this.queryFunction("last_frame_time", frame);
    }

    public static lastHitByPlayer(): string {
        return this.queryFunction("last_hit_by_player");
    }

    public static lastInputModeIsAny(firstMode: MoLangValue, ...modes: MoLangValue[]): string {
        return this.queryFunction("last_input_mode_is_any", firstMode, ...modes);
    }

    public static leashedEntityCount(): string {
        return this.queryFunction("leashed_entity_count");
    }

    public static lieAmount(): string {
        return this.queryFunction("lie_amount");
    }

    public static lifeSpan(): string {
        return this.queryFunction("life_span");
    }

    public static lifeTime(): string {
        return this.queryFunction("life_time");
    }

    public static lodIndex(firstDistance: MoLangValue, ...distances: MoLangValue[]): string {
        return this.queryFunction("lod_index", firstDistance, ...distances);
    }

    public static log(value: MoLangValue): string {
        return this.queryFunction("log", value);
    }

    public static mainHandItemMaxDuration(): string {
        return this.queryFunction("main_hand_item_max_duration");
    }

    public static mainHandItemUseDuration(): string {
        return this.queryFunction("main_hand_item_use_duration");
    }

    public static markVariant(): string {
        return this.queryFunction("mark_variant");
    }

    public static maxDurability(): string {
        return this.queryFunction("max_durability");
    }

    public static maxHealth(): string {
        return this.queryFunction("max_health");
    }

    public static maxTradeTier(): string {
        return this.queryFunction("max_trade_tier");
    }

    public static maximumFrameTime(frames?: MoLangValue): string {
        return frames === undefined
            ? this.queryFunction("maximum_frame_time")
            : this.queryFunction("maximum_frame_time", frames);
    }

    public static minimumFrameTime(frames?: MoLangValue): string {
        return frames === undefined
            ? this.queryFunction("minimum_frame_time")
            : this.queryFunction("minimum_frame_time", frames);
    }

    public static modelScale(): string {
        return this.queryFunction("model_scale");
    }

    public static modifiedDistanceMoved(): string {
        return this.queryFunction("modified_distance_moved");
    }

    public static modifiedMoveSpeed(): string {
        return this.queryFunction("modified_move_speed");
    }

    public static modifiedSwingDuration(): string {
        return this.queryFunction("modified_swing_duration");
    }

    public static moonBrightness(): string {
        return this.queryFunction("moon_brightness");
    }

    public static moonPhase(): string {
        return this.queryFunction("moon_phase");
    }

    public static movementDirection(axis: MoLangValue): string {
        return this.queryFunction("movement_direction", axis);
    }

    public static noise(x: MoLangValue, z: MoLangValue): string {
        return this.queryFunction("noise", x, z);
    }

    public static onFireTime(): string {
        return this.queryFunction("on_fire_time");
    }

    public static outOfControl(): string {
        return this.queryFunction("out_of_control");
    }

    public static overlayAlpha(): string {
        return this.queryFunction("overlay_alpha");
    }

    public static ownerIdentifier(): string {
        return this.queryFunction("owner_identifier");
    }

    public static playerLevel(): string {
        return this.queryFunction("player_level");
    }

    public static position(axis: MoLangValue): string {
        return this.queryFunction("position", axis);
    }

    public static positionDelta(axis: MoLangValue): string {
        return this.queryFunction("position_delta", axis);
    }

    public static previousSquishValue(): string {
        return this.queryFunction("previous_squish_value");
    }

    public static property(name: MoLangValue): string {
        return this.queryFunction("property", name);
    }

    public static relativeBlockHasAllTags(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("relative_block_has_all_tags", position, firstTag, ...tags);
    }

    public static relativeBlockHasAnyTag(position: MoLangValue, firstTag: MoLangValue, ...tags: MoLangValue[]): string {
        return this.queryFunction("relative_block_has_any_tag", position, firstTag, ...tags);
    }

    public static remainingDurability(): string {
        return this.queryFunction("remaining_durability");
    }

    public static rideBodyXRotation(): string {
        return this.queryFunction("ride_body_x_rotation");
    }

    public static rideBodyYRotation(): string {
        return this.queryFunction("ride_body_y_rotation");
    }

    public static rideHeadXRotation(): string {
        return this.queryFunction("ride_head_x_rotation");
    }

    public static rideHeadYRotation(clamp?: MoLangValue): string {
        return clamp === undefined
            ? this.queryFunction("ride_head_y_rotation")
            : this.queryFunction("ride_head_y_rotation", clamp);
    }

    public static riderBodyXRotation(index: MoLangValue): string {
        return this.queryFunction("rider_body_x_rotation", index);
    }

    public static riderBodyYRotation(index: MoLangValue): string {
        return this.queryFunction("rider_body_y_rotation", index);
    }

    public static riderHeadXRotation(index: MoLangValue): string {
        return this.queryFunction("rider_head_x_rotation", index);
    }

    public static riderHeadYRotation(index: MoLangValue, clamp?: MoLangValue): string {
        return clamp === undefined
            ? this.queryFunction("rider_head_y_rotation", index)
            : this.queryFunction("rider_head_y_rotation", index, clamp);
    }

    public static rollCounter(): string {
        return this.queryFunction("roll_counter");
    }

    public static rotationToCamera(axis: MoLangValue): string {
        return this.queryFunction("rotation_to_camera", axis);
    }

    public static scoreboard(entry: MoLangValue): string {
        return this.queryFunction("scoreboard", entry);
    }

    public static serverMemoryTier(): string {
        return this.queryFunction("server_memory_tier");
    }

    public static shakeAngle(): string {
        return this.queryFunction("shake_angle");
    }

    public static shakeTime(): string {
        return this.queryFunction("shake_time");
    }

    public static shieldBlockingBob(): string {
        return this.queryFunction("shield_blocking_bob");
    }

    public static showBottom(): string {
        return this.queryFunction("show_bottom");
    }

    public static sitAmount(): string {
        return this.queryFunction("sit_amount");
    }

    public static skinId(): string {
        return this.queryFunction("skin_id");
    }

    public static sleepRotation(): string {
        return this.queryFunction("sleep_rotation");
    }

    public static sneezeCounter(): string {
        return this.queryFunction("sneeze_counter");
    }

    public static spellColor(entity?: MoLangValue): string {
        return entity === undefined
            ? this.queryFunction("spellcolor")
            : this.queryFunction("spellcolor", entity);
    }

    public static standingScale(): string {
        return this.queryFunction("standing_scale");
    }

    public static stateTime(): string {
        return this.queryFunction("state_time");
    }

    public static structuralIntegrity(): string {
        return this.queryFunction("structural_integrity");
    }

    public static surfaceParticleColor(): string {
        return this.queryFunction("surface_particle_color");
    }

    public static surfaceParticleTextureCoordinate(): string {
        return this.queryFunction("surface_particle_texture_coordinate");
    }

    public static surfaceParticleTextureSize(): string {
        return this.queryFunction("surface_particle_texture_size");
    }

    public static swellAmount(): string {
        return this.queryFunction("swell_amount");
    }

    public static swellingDir(): string {
        return this.queryFunction("swelling_dir");
    }

    public static swimAmount(): string {
        return this.queryFunction("swim_amount");
    }

    public static tailAngle(): string {
        return this.queryFunction("tail_angle");
    }

    public static targetXRotation(): string {
        return this.queryFunction("target_x_rotation");
    }

    public static targetYRotation(): string {
        return this.queryFunction("target_y_rotation");
    }

    public static textureFrameIndex(): string {
        return this.queryFunction("texture_frame_index");
    }

    public static ticksSinceLastKineticWeaponHit(): string {
        return this.queryFunction("ticks_since_last_kinetic_weapon_hit");
    }

    public static timeOfDay(): string {
        return this.queryFunction("time_of_day");
    }

    public static timeSinceLastVibrationDetection(): string {
        return this.queryFunction("time_since_last_vibration_detection");
    }

    public static timeStamp(): string {
        return this.queryFunction("time_stamp");
    }

    public static timerFlag1(): string {
        return this.queryFunction("timer_flag_1");
    }

    public static timerFlag2(): string {
        return this.queryFunction("timer_flag_2");
    }

    public static timerFlag3(): string {
        return this.queryFunction("timer_flag_3");
    }

    public static totalEmitterCount(): string {
        return this.queryFunction("total_emitter_count");
    }

    public static totalParticleCount(): string {
        return this.queryFunction("total_particle_count");
    }

    public static touchOnlyAffectsHotbar(): string {
        return this.queryFunction("touch_only_affects_hotbar");
    }

    public static tradeTier(): string {
        return this.queryFunction("trade_tier");
    }

    public static unhappyCounter(): string {
        return this.queryFunction("unhappy_counter");
    }

    public static variant(): string {
        return this.queryFunction("variant");
    }

    public static verticalSpeed(): string {
        return this.queryFunction("vertical_speed");
    }

    public static walkDistance(): string {
        return this.queryFunction("walk_distance");
    }

    public static wingFlapPosition(): string {
        return this.queryFunction("wing_flap_position");
    }

    public static wingFlapSpeed(): string {
        return this.queryFunction("wing_flap_speed");
    }

    public static yawSpeed(): string {
        return this.queryFunction("yaw_speed");
    }

    public static variable(property: string): string {
        return `v.${property}`;
    }

    public static temp(property: string): string {
        return `t.${property}`;
    }

    public static context(property: string): string {
        return `c.${property}`;
    }

    public static geometry(name: string): string {
        return `Geometry.${name}`;
    }

    public static material(name: string): string {
        return `Material.${name}`;
    }

    public static texture(name: string): string {
        return `Texture.${name}`;
    }

    public static abs(value: MoLangValue): MoLangValue {
        return this.unary(value, "abs", Math.abs);
    }

    public static acos(value: MoLangValue): MoLangValue {
        return this.unary(value, "acos", (number) => this.toDegrees(Math.acos(number)));
    }

    public static asin(value: MoLangValue): MoLangValue {
        return this.unary(value, "asin", (number) => this.toDegrees(Math.asin(number)));
    }

    public static atan(value: MoLangValue): MoLangValue {
        return this.unary(value, "atan", (number) => this.toDegrees(Math.atan(number)));
    }

    public static atan2(y: MoLangValue, x: MoLangValue): MoLangValue {
        return this.binary(y, x, "atan2", (first, second) => this.toDegrees(Math.atan2(first, second)));
    }

    public static ceil(value: MoLangValue): MoLangValue {
        return this.unary(value, "ceil", Math.ceil);
    }

    public static cos(value: MoLangValue): MoLangValue {
        return this.unary(value, "cos", (number) => Math.cos(this.toRadians(number)));
    }

    public static exp(value: MoLangValue): MoLangValue {
        return this.unary(value, "exp", Math.exp);
    }

    public static floor(value: MoLangValue): MoLangValue {
        return this.unary(value, "floor", Math.floor);
    }

    public static ln(value: MoLangValue): MoLangValue {
        return this.unary(value, "ln", Math.log);
    }

    public static max(first: MoLangValue, second: MoLangValue): MoLangValue {
        return this.binary(first, second, "max", Math.max);
    }

    public static min(first: MoLangValue, second: MoLangValue): MoLangValue {
        return this.binary(first, second, "min", Math.min);
    }

    public static pow(base: MoLangValue, exponent: MoLangValue): MoLangValue {
        return this.binary(base, exponent, "pow", Math.pow);
    }

    public static round(value: MoLangValue): MoLangValue {
        return this.unary(value, "round", Math.round);
    }

    public static sign(value: MoLangValue): MoLangValue {
        return this.unary(value, "sign", (number) => number > 0 ? 1 : -1);
    }

    public static sin(value: MoLangValue): MoLangValue {
        return this.unary(value, "sin", (number) => Math.sin(this.toRadians(number)));
    }

    public static sqrt(value: MoLangValue): MoLangValue {
        return this.unary(value, "sqrt", Math.sqrt);
    }

    public static trunc(value: MoLangValue): MoLangValue {
        return this.unary(value, "trunc", Math.trunc);
    }

    // Privados

    private static unary(value: MoLangValue, functionName: string, nativeFunction: (value: number) => number): MoLangValue {
        return typeof value == "number" ? nativeFunction(value) : `math.${functionName}(${value})`;
    }

    private static queryFunction(name: string, ...arguments_: MoLangValue[]): string {
        return arguments_.length == 0 ? `q.${name}` : `q.${name}(${arguments_.join(", ")})`;
    }

    private static binary(first: MoLangValue, second: MoLangValue, functionName: string, nativeFunction: (first: number, second: number) => number): MoLangValue {
        return typeof first == "number" && typeof second == "number" ? nativeFunction(first, second) : `math.${functionName}(${first}, ${second})`;
    }

    private static toDegrees(radians: number): number {
        return radians * 180 / Math.PI;
    }

    private static toRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }
}