export default function reducer(state = {
    curlInput: "",
    protocol: "http",
    host: "localhost",
    port: "80",
    headers: [],
    availableHeaders: [],
    result: "",
}, action) {
    switch (action.type) {
        case "CURL_CONVERT_UPDATE_INPUT":
            return {
                ...state,
                curlInput: action.payload.curlInput,
                availableHeaders: action.payload.availableHeaders || [],
                headers: action.payload.headers || state.headers,
            }
        case "CURL_CONVERT_UPDATE_PROTOCOL":
            return {
                ...state,
                protocol: action.payload.protocol,
            }
        case "CURL_CONVERT_UPDATE_HOST":
            return {
                ...state,
                host: action.payload.host,
            }
        case "CURL_CONVERT_UPDATE_PORT":
            return {
                ...state,
                port: action.payload.port,
            }
        case "CURL_CONVERT_UPDATE_HEADERS":
            return {
                ...state,
                headers: action.payload.headers,
            }
        case "CURL_CONVERT_UPDATE_RESULT":
            return {
                ...state,
                result: action.payload.result,
            }
    }
    return state
}
