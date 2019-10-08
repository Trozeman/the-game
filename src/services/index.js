const postReq = (url, data) => {
    return fetch(url,
        {
            method: 'POST',
            mode: 'cors',
            referrer: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .catch(e => console.log(e));
};

const getReq = (url) => {
    return fetch(url,
        {
            method: 'GET',
            mode: 'cors',
            referrer: 'no-referrer',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .catch(e => console.log(e));
};

export {postReq, getReq};
