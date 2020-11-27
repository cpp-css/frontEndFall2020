const axios = require('axios');

export const getOrganizationInfo = async (organizationId) => {
    const url = "http://10.0.2.2:9090/organization/details/" + organizationId;

    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}