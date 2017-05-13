import fetch from './fetch'
export function getData() {

    fetch.get('/get/').then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })

    fetch.get('/get/api/').then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export function postData() {

    fetch.post('/post/',{a:'100'}).then(res => {
        return res.text()
    }).then(json => {
        console.log(json)
    });

    fetch.post('/post/api/',{a:'100',b:'20055'}).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}
