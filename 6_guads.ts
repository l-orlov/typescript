function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(resp: MyResponse | MyError) {
    if (resp instanceof MyResponse) {
        return {
            info: resp.header + resp.result
        }
    }
    return {
        info: resp.header + resp.message
    }
}

// ======================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ...
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default')
