const OVERVIEW_MOCK_DATA = {
    platforms: [
        {
            color: '#1c81c2',
            id: 123,
            image: 'https://i.ibb.co/2gsZYDg/meta-logo.png',
            name: 'Meta',
            nickname: "Bui's Cupcake Shop",
            scoreContribution: {
                delta: 0.0254,
                total: 0.3,
            },
            stats: {
                ctr: {
                    deltaPercent: 0.125,
                    deltaTimeFrame: 86400,
                    deltaUnits: 500,
                    total: 56475.99,
                },
                spend: {
                    total: 3586.22,
                    updated: 1709245587,
                },
            },
            type: 'Ads',
        },
        {
            color: '#333',
            id: 345,
            image: 'https://i.ibb.co/kc5X5xt/tiktok-logo.png',
            name: 'TikTok',
            nickname: "Bui's Computer Parts",
            scoreContribution: {
                delta: -0.0122,
                total: 0.25,
            },
            stats: {
                ctr: {
                    deltaPercent: -0.0324,
                    deltaTimeFrame: 86400,
                    deltaUnits: -90,
                    total: 1968,
                },
                spend: {
                    total: 586.83,
                    updated: 1709259987,
                },
            },
            type: 'Ads',
        },
        {
            color: '#ff9900',
            id: 489,
            image: 'https://i.ibb.co/4tMNsRB/google-logo.png',
            name: 'Google',
            nickname: "Ramzi's Pharmacy",
            scoreContribution: {
                delta: 0.105,
                total: 0.45,
            },
            stats: {
                ctr: {
                    deltaPercent: -0.33,
                    deltaTimeFrame: 86400,
                    deltaUnits: -5,
                    total: 23,
                },
                spend: {
                    total: 4985,
                    updated: 1709259987,
                },
            },
            type: 'Ads',
        },
    ],
    totalScore: 536,
    totalScoreDelta: 38,
    user: {
        name: 'Peter Bui',
        title: 'Project Manager',
    },
};

export { OVERVIEW_MOCK_DATA };
