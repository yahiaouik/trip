export class HttpError extends Error {
    public constructor(private _status: number, private _code: string, private _title: string, private _detail: string = '') {
        super();
    }

    get status() {
        return this._status;
    }

    get code() {
        return this._code;
    }

    get title() {
        return this._title;
    }

    get detail() {
        return this._detail;
    }
}

export class BadRequestError extends HttpError {
    public constructor(message: string = 'Bad request') {
        super(400, 'bad_request', message);
    }
}

export class UnauthorizedError extends HttpError {
    public constructor(message: string = 'Unauthorized') {
        super(401, 'unauthorized', message);
    }
}

export class ForbiddenError extends HttpError {
    public constructor(message: string = 'Forbidden') {
        super(403, 'forbidden', message);
    }
}

export class NotFoundError extends HttpError {
    public constructor(message: string = 'Not found') {
        super(404, 'not_found', message);
    }
}

export class ConflictError extends HttpError {
    public constructor(message: string = '', detail: string = 'Conflict') {
        super(409, 'conflict', message, detail);
    }
}

export class UnprocessableEntityError extends HttpError {
    constructor(message = 'Unprocessable entity') {
        super(422, 'unprocessable_entity', message);
    }
}

export class InternalServerError extends HttpError {
    public constructor(message: string = 'Internal server error') {
        super(500, 'internal_server_error', message);
    }
}
