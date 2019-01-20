import superagent from 'superagent';

const httpRequest = {
    post: (url, params, token) => {
        if (token) {
            return superagent.post(url).set('Authentication', token).send(params);
        } else {
            return superagent.post(url).send(params);
        }
    },

    get: (url, params, token) => {
        if (token) {
            return superagent.get(url).set('Authentication', token).query(params);
        } else {
            return superagent.get(url).query(params);
        }
    }
}

export default httpRequest;
