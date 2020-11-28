import Axios from 'axios';
import { Alert } from 'react-native';
import API from './axios';

export const getPublishedEvents = async () => {
    const url = "/event/published_list";

    const settings = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        let response = await API.get(url, settings);
        return response.data.result;
    } catch(error) {
        console.error(error);
    }
}

export const getPublishedEvent = async (eventId) => {
    const url = "/event/published_list";

    const settings = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        let response = await API.get(url, settings);
        return response.data.result.find(event => event.event_id == eventId);
    } catch(error) {
        console.error(error);
    }
}

export const registerEvent = async (eventId, token) => {
    const url = "/event/register/" + eventId;

    const settings = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    }

    try {
        let response = await API.post(url, {}, settings);
        if (!response.data.success) {
            Alert.alert(response.data.message);
        }
    } catch(error) {
        console.error(error);
    }
}

export const getRegisteredEvents = async (token) => {
    const url = "/user/me/events";

    const settings = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    }

    try {
        let response = await API.get(url, settings);
        if (!response.data.success) {
            Alert.alert(response.data.message);
        }

        return response.data.events;
    } catch(error) {
        console.error(error);
    }

}

export const unregisterEvent = async (eventId, token) => {
    const url = "/event/unregister/" + eventId;

    const settings = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    }

    try {
        let response = await API.delete(url, settings);
        Alert.alert(response.data.message);
    } catch(error) {
        console.error(error);
    }
}