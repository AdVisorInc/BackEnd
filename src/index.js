import app from './server';

const port = process.env.PORT || 5005;

app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
});
