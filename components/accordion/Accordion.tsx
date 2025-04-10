import React, {Dispatch, SetStateAction, useState} from 'react'
import {List} from "react-native-paper";
import {Collection} from "@/stores/useCollections";
import {View} from "react-native";

interface Props {
    collections: Collection[]
    expanded: boolean
    setExpanded: Dispatch<SetStateAction<boolean>>
}

export default function Accordion({ collections, expanded, setExpanded } : Props ): JSX.Element {
    const [collection, setCollection] = useState(collections[0]?.name);
    const toggleExpanded = () => setExpanded(!expanded);

    const handlePress = (title: string) => {
        setCollection(title);
        setExpanded(false);
        console.log('handlePress', title);
    }


    return (
        <View>
            {/*<List.Accordion*/}
            {/*    title={collection}*/}
            {/*    left={() => <List.Icon icon="folder"/>}*/}
            {/*    expanded={expanded}*/}
            {/*    onPress={toggleExpanded}*/}
            {/*>*/}
            {/*    {collections.map((item) => (*/}
            {/*        <List.Item onPress={() => handlePress(item.name)} title={item.name} key={item.name}/>*/}
            {/*    ))}*/}
            {/*</List.Accordion>*/}
            <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={toggleExpanded}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </View>

    )
}
