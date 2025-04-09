import { create } from "zustand/index";

type State = {
    count: number;
    increase: () => void;
    decrease: () => void;
};

export const useIncrement = create<State>((set) => ({
    count: 7,
    increase: () => set((state: State) => ({ count: state.count + 1 })),
    decrease: () => set((state: State) => ({ count: state.count - 1 })),
}));