import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { getCollections } from '@/services/collectionService';
import {useLoadingStore} from '@/stores';

const CollectionList = () => {
    const [collections, setCollections] = useState<any[]>([]);
    const isLoading = useLoadingStore((state) => state.isLoading);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCollections();
                setCollections(data);
            } catch (error) {
                console.error('Помилка:', error);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <Card style={{ margin: 10 }}>
            <Card.Cover source={{ uri: item.coverImage }} />
            <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.description}</Paragraph>
            </Card.Content>
        </Card>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={collections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

export default CollectionList;
