import { useEffect } from 'react';
import { View } from 'react-native';

import { getCollections } from '@/services/collectionService';
import {useLoadingStore} from '@/stores';

const CollectionList = () => {
    const isLoading = useLoadingStore((state) => state.isLoading);


    useEffect(() => {
        getCollections();
    }, []);


    return (
        <View>
            Test
        </View>
    );
};

export default CollectionList;
