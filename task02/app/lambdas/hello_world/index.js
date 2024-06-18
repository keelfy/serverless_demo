exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));

    if (event.httpMethod == 'GET' && event.resource == '/hello') {
        return {
            statusCode: 200,
            message: "Hello from Lambda",
        };
    }
    return {
        statusCode: 400,
        message: `Bad request syntax or unsupported method. Request path: ${event.resource}. HTTP method: ${event.httpMethod}`
    };
};
