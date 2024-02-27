// External Libraries
import express from 'express';
import cors from 'cors';

// Middlewares
import { logger } from './middlewares/logger';

// Routes
import routes from './routes';
import {
    createError,
    HTTP_ERROR_CODES,
    HTTP_ERROR_MESSAGES,
} from './handlers/errorHandler';
import { sendResponse } from './handlers/responseHandler';

// Initialize the server
const app = express();

// Add server middlewares
app.use(
    cors({
        origin: true,
    }),
);

app.use(
    express.urlencoded({
        extended: true,
        limit: '500mb',
        parameterLimit: 50000,
    }),
);
app.use(
    express.json({
        limit: '500mb',
    }),
);
app.use(logger);

// Add server routes
app.use(routes);

// Catch 404
app.use((req, res) => {
    const err = createError(
        HTTP_ERROR_CODES.notFound,
        HTTP_ERROR_MESSAGES.unknown,
    );

    return sendResponse(false, null, err, res);
});

export default app;
