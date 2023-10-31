async def HttpHandleError(msg, error_http):
    return {
        "response": "DANGER",
        "msg": msg,
        "error": error_http
    }