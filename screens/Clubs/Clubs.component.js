import React from "react";
import { View, ScrollView, Dimensions } from 'react-native';
// Components
import { Searchbar } from 'react-native-paper';
import ClubCard from '../../components/ClubCard/ClubCard.component';

// Styles
import styles from './Clubs.styles';

const { width } = Dimensions.get('window');

const cardItems = [
    {
        org: "Computer Science Society",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "engineering, science, computer science"
    },
    {
        org: "Software Engineering Association",
        link: "https://github.com",
        image: require("../../assets/images/CTF.png"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "archery, math, engineering"
    },
    {
        org: "IEEE",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "science, hip-hop"
    },
    {
        org: "Computer Science Society",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "engineering, science, computer science"
    },
    {
        org: "Software Engineering Association",
        link: "https://github.com",
        image: require("../../assets/images/CTF.png"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "archery, math, engineering"
    },
    {
        org: "IEEE",
        link: "https://github.com",
        image: require("../../assets/images/CareerCenterWorkshop.jpg"),
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        relatedTo: "science, hip-hop"
    },
]

const Clubs = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    let filteredCards = cardItems.filter(
        (event) => {
            return event.org.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
        }
    );
    return (
        <View style={{flex: 1}}>
            <Searchbar
                style={styles.searchBox}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}
                decelerationRate={0}
                snapToInterval={width + 75}
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 30,
                    bottom: 0,
                    right: 30
                }}>
                {filteredCards.map((card, id) =>
                    <ClubCard
                        key={id}
                        title={card.title}
                        org={card.org}
                        link={card.link}
                        source={card.image}
                        info={card.info}
                        relatedTo={card.relatedTo}
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default Clubs;
