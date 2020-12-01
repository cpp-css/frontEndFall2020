import { Alert } from 'react-native';
import API from './axios';

export const getOrganizationInfo = async (organizationId) => {
    const url = "/organization/details/" + organizationId;
    try {
        let response = await API.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getOrganizationList = async () => {
    const url = "/organization/list";
    const settings = {
        headers: {
        "Content-Type": "application/json",
        },
    };

    try {
        let response = await API.get(url, settings);
        return response.data.result;
    } catch (error) {
        console.error(error);
    }

}

export const joinOrganization = async (organizationId, token) => {
    const url = "/organization/register/"+ organizationId;
    const settings = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    
    try {
        let response = await API.post(url, {}, settings);
        Alert.alert(response.data.message)
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const leaveOrganization = async (organizationId, token) => {
    const url = "/organization/resign/"+ organizationId;
    const settings = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    
    try {
        let response = await API.delete(url, settings);
        Alert.alert(response.data.message)
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}