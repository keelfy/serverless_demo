exports.handler = async (event) => {
    const path = event.requestContext.http.path;
    const method = event.requestContext.http.method;
    
    let response = {
        statusCode: 400,
        message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    };

    if (method === 'GET' && path === '/hello') {
        response = {
            statusCode: 200,
            message: "Hello from Lambda",
        };
    }

    return {
        statusCode: response.statusCode,
        body: JSON.stringify(response),
    }
};
