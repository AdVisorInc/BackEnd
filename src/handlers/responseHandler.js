const sendResponse = (success, results, error, res) => {
    // eslint-disable-next-line no-console
    console.log(`
        Response Handler
        ==============
        Success: ${success}
        Results: ${JSON.stringify(results)}
        Error: ${error}
    `);

    return res.json({
        data: results,
        error,
        success,
    });
};

export { sendResponse };
