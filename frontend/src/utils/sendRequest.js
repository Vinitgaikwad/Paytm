import axios from 'axios';

export default async function sendRequest(url, method = 'GET', body = null, headers = {}) {
    const config = {
        method,
        url,
        headers,
    };

    if (body) config.data = { userObj: body };
    if (method.toUpperCase() === 'GET' && body) config.params = body;

    try {
        const response = await axios(config);
        console.log('Response:', response.data);
        return response;
    } catch (error) {
        console.error('Request failed:', error.response?.data || error.message);
        return {
            data: error.response?.data || { msg: 'Network or server error', success: false },
            status: error.response?.status || 500,
            success: false
        };
    }
}
