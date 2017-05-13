import 'whatwg-fetch'
import 'es6-promise'

export function getData() {
    var result = fetch('/get/', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
    var result1 = fetch('/get/api/', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

export function postData() {
    var result = fetch('/post/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "a=100&b=200"
    });
    result.then(res => {
        return res.text()
    }).then(json => {
        console.log(json)
    });

    var result1 = fetch('/post/api/', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "a=100&b=200"
    });
    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}
