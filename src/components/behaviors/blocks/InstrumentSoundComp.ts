import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type ListOfSoundsVanilla = "note.banjo" | "note.bassattack" | "note.bd" | "note.bell" | "note.bit" | "note.chime" | "note.cow_bell" | "note.creeper" | "note.didgeridoo" | "note.enderdragon" | "note.flute" | "note.guitar" | "note.harp" | "note.hat" | "note.iron_xylophone" | "note.none" | "note.piglin" | "note.pling" | "note.skeleton" | "note.snare" | "note.trumpet" | "note.trumpet_exposed" | "note.trumpet_oxidized" | "note.trumpet_weathered" | "note.witherskeleton" | "note.xylophone" | "note.zombie" | (string & {});

interface InstrumentSoundData extends BPComponent {
    up: ListOfSoundsVanilla;
    down: ListOfSoundsVanilla;
}

export class SetInstrumentSound extends BehaviorBlockComponentBuilder<InstrumentSoundData, "minecraft:instrument_sound"> {
    /**
     * 
     * @param {InstrumentSoundData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: InstrumentSoundData) {
        super("minecraft:instrument_sound", params);
    }
}