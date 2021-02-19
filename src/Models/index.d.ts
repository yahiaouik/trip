import { TokenUser } from '../Core/auth-middleware';

declare module 'express-serve-static-core' {
    interface Request {
        user?: TokenUser
    }
}
