import React, { useContext } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';
import Button from '../../components/MainButton/MainButton.component';

// Context
import { EventContext } from '../../context/EventContext';
import { UserContext } from '../../context/UserContext';

// Styles
import styles from './Events.styles';

const { width } = Dimensions.get('window');

const Events = ({navigation}) => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const { allEvents } = useContext(EventContext);
    const { userEvents } = useContext(UserContext);
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
                {filteredCards.sort((a, b) => (a.startDate > b.startDate) ? 1 :
                    ((b.startDate > a.startDate) ? -1 : 0)).map((card, id) =>
                    (userEvents.indexOf(card.title) === -1) ?
                    (<EventCard
                       key={id}
                       title={card.title}
                       theme={card.theme}
                       perks={card.perks}
                       org={card.org}
                       desc={card.desc}
                       startDate={card.startDate}
                       link={card.link}
                       source={card.image}
                        />) : console.log(card.id)
               )} 
            </ScrollView>

        </View>
    );
};

export default Events;
