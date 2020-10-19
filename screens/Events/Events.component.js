import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';

// Styles
import styles from './Events.styles';

const { width } = Dimensions.get('window');

const Events = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{alignItems: 'center'}}>
            <Searchbar
                style={styles.searchBox}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView
               ref={(scrollView) => { this.scrollView = scrollView; }}
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
                <EventCard title="dank memes" org="Computer Science Society" date="10/10/10" link="https://google.com" source={require("../../assets/images/CareerCenterWorkshop.jpg")}/>
                <EventCard title="dank memes" org="Computer Science Society" date="10/10/10" link="https://google.com" source={require("../../assets/images/CareerCenterWorkshop.jpg")}/>
                <EventCard title="dank memes" org="Computer Science Society" date="10/10/10" link="https://google.com" source={require("../../assets/images/CareerCenterWorkshop.jpg")}/>
                <EventCard title="dank memes" org="Computer Science Society" date="10/10/10" link="https://google.com" source={require("../../assets/images/CareerCenterWorkshop.jpg")}/>
            </ScrollView>

        </View>
    );
};

export default Events;
