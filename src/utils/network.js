const networkCaller = url => {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log('fetch error: ', err)
        })
}

export default networkCaller

