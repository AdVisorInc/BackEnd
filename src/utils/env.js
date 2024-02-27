import { config } from 'firebase-functions';

const getFirebaseConfig = () => {
    const {
        api_key,
        app_id,
        auth_domain,
        database_url,
        measurement_id,
        messaging_sender_id,
        project_id,
        storage_bucket,
    } = config().env.service_account;

    return {
        apiKey: api_key,
        appId: app_id,
        authDomain: auth_domain,
        measurementId: measurement_id,
        messagingSenderId: messaging_sender_id,
        projectId: project_id,
        storageBucket: storage_bucket,
        ...(database_url ? { databaseURL: database_url } : {}),
    };
};

const getServiceAPISecrets = () => {
    const { service_apis } = config().env;

    return service_apis;
};

export { getFirebaseConfig, getServiceAPISecrets };
