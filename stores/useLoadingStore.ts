import { create } from 'zustand';

interface UseLoadingStore {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<UseLoadingStore>((set) => ({
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
}));
