import {supabase} from '@/supabaseClient';
import {useLoadingStore} from '@/stores';
import {useCollectionsStore} from "@/stores/useCollections";

export const getCollections = async (key: string) => {
    const { setLoading } = useLoadingStore.getState();
    const { setCollections } = useCollectionsStore.getState();

    setLoading(true);

    try {
        const { data, error } = await supabase
            .from('collections')
            .select('*')

        if (error) {
            console.error(`Error ${key}:`, error);
            return null;
        }

        setCollections(data || null);
    } catch (err) {
        console.error(`Error ${key}:`, err);
        return null;
    } finally {
        setLoading(false);
    }
};