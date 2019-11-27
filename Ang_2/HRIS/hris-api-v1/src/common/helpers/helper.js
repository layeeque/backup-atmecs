module.exports = () => {
    return {
        responseSuccessMessage : (status, message, data, token) => {
            const obj = {}
            obj['success'] = status;
            obj['token'] = token;
            obj['message'] = message;
            obj['data'] = data;
            
            return obj;
        },
        responseErrorMessage : (status, message, data) => {
            const obj = {}
            obj['success'] = status;
            obj['message'] = message;
            obj['data'] = data;
            return obj;
        }
    }
}