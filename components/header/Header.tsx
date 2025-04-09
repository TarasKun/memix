import React, {useState} from 'react';
import {Appbar, List} from 'react-native-paper';
import {useCollectionsStore} from "@/stores/useCollections";

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const {collections} = useCollectionsStore();
    const [collection, setCollection] = useState(collections[0]?.name);
    const toggleExpanded = () => setExpanded(!expanded);

    const handlePress = (title: string) => {
        setCollection(title);
        setExpanded(false);
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {
            }}/>
            <List.Accordion
                title={collection}
                left={() => <List.Icon icon="folder"/>}
                expanded={expanded}
                onPress={toggleExpanded}
            >
                {collections.map((item) => (
                    <List.Item onPress={() => handlePress(item.name)} title={item.name} key={item.name}/>
                ))}
            </List.Accordion>
            <Appbar.Action icon="calendar" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>
    )


};


export default Header;