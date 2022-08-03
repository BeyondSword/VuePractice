import { service } from './http';

// 封装通用的请求

//GET
export function getAction(url, params) {
    return service({
        url,
        method: 'get',
        params: params
    })
}

//POST
export function postAction(url, params) {
    return service({
        url,
        method: 'post',
        data: params
    })
}

//PUT
export function putAction(url, params) {
    return service({
        url,
        method: 'put',
        data: params
    })
}

//DELETE
export function deleteAction(url, params) {
    return service({
        url,
        method: 'delete',
        data: params
    })
}

export function httpAction(url, params, method, headers) {
    return service({
        url,
        method,
        data: params,
        headers
    })
}

//FORM 表单提交
export function formDataAction(url, data) {
    return service({
        url,
        method: 'post',
        headers: {
            'content-type': 'multipart/form-data'
        },
        data,
    })
}
