import React, {useState} from 'react';
import {Appbar} from 'react-native-paper';
import {useCollectionsStore} from "@/stores/useCollections";
import Accordion from "@/components/accordion/Accordion";

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const {collections} = useCollectionsStore();

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {
            }}/>
            <Accordion collections={collections} expanded={expanded} setExpanded={setExpanded} />
            <Appbar.Action icon="calendar" onPress={() => {
            }}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>
    )
};

export default Header;