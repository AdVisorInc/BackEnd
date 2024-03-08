const getAccountsFunc = userUID => {
    const TEST_ACCOUNTS = [
        {
            campaigns: [
                {
                    budget: 1000,
                    id: 1029310283,
                    objective: 'Brand Awareness',
                    status: 'Active',
                },
            ],
            color: '#1c81c2',
            id: 123,
            name: 'Meta',
            nickname: "Bui's Cupcake Shop",
        },
    ];

    return TEST_ACCOUNTS;
};

export { getAccountsFunc };
