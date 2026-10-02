import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface HeartbeatData extends BPComponent {
    interval?: string | MoLangValue;
    soundEvent?: string;
}

export class SetHeartbeat extends BehaviorEntityComponentBuilder<HeartbeatData, "minecraft:heartbeat"> {
    /**
     * 
     * @param {HeartbeatData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: HeartbeatData) {
        super("minecraft:heartbeat", params);
    }
}