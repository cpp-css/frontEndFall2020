import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

// Components
import { Searchbar } from 'react-native-paper';
import EventCard from '../../components/EventCard/EventCard.component';

// Styles
import styles from './Events.styles';

const { width } = Dimensions.get('window');

const cardItems = [
    {
        title: "Career Center Workshop",
        org: "Computer Science Society",
        date: "Tuesday, May 10, 2020",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg")
    },
    {
        title: "Capture The Flag",
        org: "Software Engineering Association",
        date: "Saturday, November 17, 2019",
        link: "https://github.com",
        image: require("../../assets/images/CTF.png")
    },
    {
        title: "Guest Speaker: Lance Kimberlin from Bilizzard",
        org: "Computer Science Society",
        date: "Tuesday, May 10, 2020",
        link: "https://github.com",
        image: require("../../assets/images/Blizzard.png")
    },
    {
        title: "dank mames",
        org: "Computer Science Society",
        date: "Tuesday, May 10, 2020",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg")
    },
    {
        title: "dank mames",
        org: "Computer Science Society",
        date: "Tuesday, May 10, 2020",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg")
    },
]

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
                {cardItems.map((card, id) =>
                        <EventCard
                        key={id}
                        title={card.title}
                        org={card.org}
                        date={card.date}
                        link={card.link}
                        source={card.image}
                        onPress={() => console.log("yeeee")}
                        />
                )} 
            </ScrollView>

        </View>
    );
};

export default Events;