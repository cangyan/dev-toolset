import { useDispatch, useSelector } from 'react-redux'

export default function curlConvert() {
    const curlInput = useSelector((state) => state.CurlConvertReducer.curlInput)
    const protocol = useSelector((state) => state.CurlConvertReducer.protocol)
    const host = useSelector((state) => state.CurlConvertReducer.host)
    const port = useSelector((state) => state.CurlConvertReducer.port)
    const headers = useSelector((state) => state.CurlConvertReducer.headers)
    const result = useSelector((state) => state.CurlConvertReducer.result)
    const availableHeaders = useSelector((state) => state.CurlConvertReducer.availableHeaders)
    const dispatch = useDispatch()

    const parseCurlHeaders = (curlCommand) => {
        if (!curlCommand || !curlCommand.startsWith('curl')) {
            return []
        }

        // Support both -H and --header syntax
        const headerMatches = curlCommand.match(/(-H|--header)\s+['"]([^'"]+)['"]/g) || []
        return headerMatches.map(h => h.replace(/(-H|--header)\s+['"]([^'"]+)['"]/, '$2'))
    }

    const updateCurlInput = (input) => {
        // Only parse headers when input changes, not on blur
        const parsedHeaders = parseCurlHeaders(input)

        // Headers that should not be selected by default
        const excludedHeaders = ['user-agent', 'accept-encoding', 'content-length', 'host']

        // Filter out excluded headers from the selected headers
        const selectedHeaders = parsedHeaders.filter(header => {
            const headerName = header.split(':')[0].toLowerCase().trim()
            return !excludedHeaders.includes(headerName)
        })

        dispatch({
            type: "CURL_CONVERT_UPDATE_INPUT",
            payload: {
                curlInput: input,
                availableHeaders: parsedHeaders,
                headers: selectedHeaders // Only select non-excluded headers by default
            }
        })
    }

    const updateProtocol = (protocol) => {
        dispatch({
            type: "CURL_CONVERT_UPDATE_PROTOCOL",
            payload: {
                protocol: protocol,
            }
        })
    }

    const updateHost = (host) => {
        dispatch({
            type: "CURL_CONVERT_UPDATE_HOST",
            payload: {
                host: host,
            }
        })
    }

    const updatePort = (port) => {
        dispatch({
            type: "CURL_CONVERT_UPDATE_PORT",
            payload: {
                port: port,
            }
        })
    }

    const updateHeaders = (headers) => {
        dispatch({
            type: "CURL_CONVERT_UPDATE_HEADERS",
            payload: {
                headers: headers,
            }
        })
    }

    const convertCurl = () => {
        let convertedResult = ""

        try {
            const curlCommand = curlInput.trim()

            if (curlCommand.startsWith('curl')) {
                // Create a copy of the original command for modification
                let resultCommand = curlCommand

                // Extract original URL for replacement
                const urlMatch = curlCommand.match(/(?:'|")(https?:\/\/[^'"]+)(?:'|")/)
                if (urlMatch) {
                    const originalUrl = urlMatch[1]

                    // Parse the original URL
                    const urlParts = originalUrl.match(/^(https?):\/\/([^:\/]+)(?::(\d+))?(\/.*)?$/)
                    if (urlParts) {
                        const [, originalProtocol, originalHost, originalPort, path] = urlParts

                        // Replace protocol
                        const targetProtocol = protocol || originalProtocol

                        // Replace host
                        const targetHost = host  ? host : originalHost

                        // Replace port - only include if not default port
                        let targetPort = port  ? port : originalPort
                        if (!targetPort && targetProtocol === 'https') {
                            targetPort = '443'
                        }

                        // console.log(targetHost, targetPort, targetProtocol,host,port,protocol)

                        // Build new URL - omit port if it's default
                        let newUrl = `${targetProtocol}://${targetHost}`
                        if (targetPort && targetPort !== '80' && targetPort !== '443') {
                            newUrl += `:${targetPort}`
                        }
                        if (path) {
                            newUrl += path
                        }
                        console.log(originalUrl, newUrl)
                        // Replace the URL in the original command
                        resultCommand = resultCommand.replace(originalUrl, newUrl)
                    }
                }

                // Process headers - remove unselected headers
                const headerMatches = resultCommand.match(/(-H|--header)\s+['"]([^'"]+)['"]/g) || []

                // Create a map of selected headers for quick lookup
                const selectedHeadersMap = new Set(headers)

                // Remove headers that are not selected
                headerMatches.forEach(headerMatch => {
                    const headerValue = headerMatch.replace(/(-H|--header)\s+['"]([^'"]+)['"]/, '$2')
                    if (!selectedHeadersMap.has(headerValue)) {
                        // Remove this header from the command
                        resultCommand = resultCommand.replace(headerMatch, '')
                    }
                })

                // Clean up the command - remove multiple spaces and empty lines
                resultCommand = resultCommand
                    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
                    .replace(/\s*\\\s*/g, ' \\\n') // Format line continuations
                    .replace(/\n\s*\n/g, '\n') // Remove empty lines
                    .trim()

                convertedResult = resultCommand

            } else {
                convertedResult = "Invalid curl command format"
            }
        } catch (e) {
            convertedResult = `Error: ${e.message}`
        }

        // Only update the result, keep original input unchanged
        dispatch({
            type: "CURL_CONVERT_UPDATE_RESULT",
            payload: {
                result: convertedResult,
            }
        })
    }

    return {
        curlInput,
        protocol,
        host,
        port,
        headers,
        result,
        availableHeaders,
        updateCurlInput,
        updateProtocol,
        updateHost,
        updatePort,
        updateHeaders,
        convertCurl
    }
}



