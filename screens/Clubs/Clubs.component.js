import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
// Components
import { Searchbar } from 'react-native-paper';
import ClubCard from '../../components/ClubCard/ClubCard.component';

import { OrganizationContext } from '../../context/OrganizationContext';
import { UserContext } from '../../context/UserContext';

import { getOrganizationList } from '../../api/organization';

// Styles
import styles from './Clubs.styles';

const { width } = Dimensions.get('window');

const Clubs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const { roles, setUserRoles } = useContext(UserContext);
    const { orgs, setOrgs }  = useContext(OrganizationContext);

    useEffect(() => {
        getOrganizationList().then(res => {
            setOrgs(res);
        })
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
