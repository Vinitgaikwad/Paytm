import axios from 'axios';

export default async function sendRequest(url, method = 'GET', body = null, headers = {}) {
    const config = {
        method: method,
        url: url,
        headers: headers
    };

    if (body) {
        config.data = { userObj: body };
    }
    if (method.toUpperCase() === 'GET' && body) {
        config.params = body;
    }

    const response = await axios(config);
    console.log('Response:', response.data);
    return response;
}