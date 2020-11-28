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