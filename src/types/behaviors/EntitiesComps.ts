export {
    BPComponent,
    BPCompsGroups
};

type BPComponent = Record<string, unknown>;

interface BPCompsGroups {
    idGroup: string;
    components: BPComponent[];
}