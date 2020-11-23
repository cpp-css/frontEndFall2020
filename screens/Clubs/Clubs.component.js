import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, Dimensions } from 'react-native';
// Components
import { Card, Searchbar } from 'react-native-paper';
import ClubCard from '../../components/ClubCard/ClubCard.component';

import { OrganizationContext } from "../../context/OrganizationContext";
import { UserContext } from "../../context/UserContext";
// Styles
import styles from './Clubs.styles';

const axios = require("axios");
const { width } = Dimensions.get('window');

const Clubs = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const {orgs,setOrgs} = useContext(UserContext);

    // let filteredCards = cardItems.filter(
    //     (event) => {
    //         return event.org.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    //     }
    // );
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
          console.log(response.data.result)
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        getOrgs();
      }, []);

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
                {orgs.map((card, id) =>
                    <ClubCard
                        key={id}
                        org_name={card.org_name}
                        org_id={card.organization_id}
                        categories={card.categories}
                        source={require("../../assets/images/CareerCenterWorkshop.jpg")} // hardcoded
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default Clubs;
