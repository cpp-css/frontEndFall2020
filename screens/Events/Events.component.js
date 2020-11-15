import React, { useContext } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';
import Button from '../../components/MainButton/MainButton.component';

// Context
import { EventContext } from '../../context/EventContext';

// Styles
import styles from './Events.styles';

const { width } = Dimensions.get('window');

const Events = ({navigation}) => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const { allEvents } = useContext(EventContext);
    let filteredCards = allEvents.filter(
        (event) => {
            return event.org.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }
    );



    return (
        <View style={{alignItems: 'center'}}>
            <Searchbar
                style={styles.searchBox}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Button
                onPress={() => {
                    navigation.push('CreateEvent');
                }}
                label="Create Event"
                containerStyle={{padding: '-2%'}}
            />
            <ScrollView
               showsHorizontalScrollIndicator={false}
               horizontal={true}
               decelerationRate={0}
               snapToInterval={width - 60}
               snapToAlignment={"center"}
               contentInset={{
                   top: 0,
                   left: 30,
                   bottom: 0,
                   right: 30
               }}>
               {filteredCards.map((card, id) =>
                    <EventCard
                       key={id}
                       title={card.title}
                       theme={card.theme}
                       perks={card.perks}
                       org={card.org}
                       desc={card.desc}
                       date={card.date}
                       link={card.link}
                       source={card.image}
                    />
               )} 
            </ScrollView>

        </View>
    );
};

export default Events;
