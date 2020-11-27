import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from 'react-native';
// Components
import { Searchbar } from 'react-native-paper';
import ClubCard from '../../components/ClubCard/ClubCard.component';


// Styles
import styles from './Clubs.styles';

const axios = require('axios');

const { width } = Dimensions.get('window');

const Clubs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [orgs, setOrgs] = useState([]);

    const getOrgs = async () => {
        const url = "http://10.0.2.2:9090/organization/list";
        const settings = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        try {
          let response = await axios.get(url, settings);
          setOrgs(response.data.result);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        getOrgs();
    }, []);

    let filteredCards = orgs.filter(
        (event) => {
            return event.org_name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
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
                {filteredCards.map((card) =>
                    <ClubCard
                        key={card.organization_id}
                        name={card.org_name}
                        source={require('./../../assets/images/CareerCenterWorkshop.jpg')}
                        relatedTo={card.categories}
                        organization_id={card.organization_id}
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default Clubs;
