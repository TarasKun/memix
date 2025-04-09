import { create } from 'zustand';

export interface Collection {
    id: number;
    name: string;
    description: string;
    coverImage: string;
    isPublic: boolean;
    ownerId: number;
    created_at: string;
}

interface UseCollectionsStore {
    collections: Collection[];
    setCollections: (collections: Collection[]) => void;
}

export const useCollectionsStore = create<UseCollectionsStore>((set) => ({
    collections: [],
    setCollections: (collections) => set({ collections }),
}));
