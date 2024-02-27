const logger = (req, res, next) => {
    var truncatedBody = JSON.stringify(req.body);
    truncatedBody =
        truncatedBody.length > 256
            ? `${truncatedBody.slice(0, 256)}...`
            : truncatedBody;

    // eslint-disable-next-line no-console
    console.log(`
        Request Logger
        ==============
        Hostname: ${req.hostname} 
        Url: ${req.baseUrl}
        Path: ${req.path}
        Body: ${truncatedBody}
        Params: ${JSON.stringify(req.params)}
        Query: ${JSON.stringify(req.query)}
    `);
    next();
};

export { logger };
