const ConverterContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "wallet",
                                "type": "address"
                            },
                            {
                                "name": "share",
                                "type": "uint32"
                            }
                        ],
                        "name": "receivers",
                        "type": "tuple[]"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "minDeposit",
                        "type": "uint128"
                    },
                    {
                        "name": "coinsTransferGas",
                        "type": "uint128"
                    },
                    {
                        "name": "tokensTransferGas",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenWalletDeployGas",
                        "type": "uint128"
                    },
                    {
                        "name": "ratio",
                        "type": "uint128"
                    },
                    {
                        "name": "balance",
                        "type": "uint128"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "convert",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "terminate",
                "inputs": [
                    {
                        "name": "destination",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdrawTokens",
                "inputs": [
                    {
                        "name": "destination",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "drain",
                "inputs": [
                    {
                        "name": "destination",
                        "type": "address"
                    },
                    {
                        "name": "remainBalance",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setRatio",
                "inputs": [
                    {
                        "name": "ratio",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setReceivers",
                "inputs": [
                    {
                        "components": [
                            {
                                "name": "wallet",
                                "type": "address"
                            },
                            {
                                "name": "share",
                                "type": "uint32"
                            }
                        ],
                        "name": "receivers",
                        "type": "tuple[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setWallet",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setMinDeposit",
                "inputs": [
                    {
                        "name": "minDeposit",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCoinsTransferGas",
                "inputs": [
                    {
                        "name": "coinsTransferGas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTokensTransferGas",
                "inputs": [
                    {
                        "name": "tokensTransferGas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTokenWalletDeployGas",
                "inputs": [
                    {
                        "name": "tokenWalletDeployGas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "info",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "wallet",
                                "type": "address"
                            },
                            {
                                "name": "share",
                                "type": "uint32"
                            }
                        ],
                        "name": "receivers",
                        "type": "tuple[]"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "minDeposit",
                        "type": "uint128"
                    },
                    {
                        "name": "coinsTransferGas",
                        "type": "uint128"
                    },
                    {
                        "name": "tokensTransferGas",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenWalletDeployGas",
                        "type": "uint128"
                    },
                    {
                        "name": "ratio",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "components": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "share",
                        "type": "uint32"
                    }
                ],
                "name": "_receivers",
                "type": "tuple[]"
            },
            {
                "name": "_wallet",
                "type": "address"
            },
            {
                "name": "_minDeposit",
                "type": "uint128"
            },
            {
                "name": "_coinsTransferGas",
                "type": "uint128"
            },
            {
                "name": "_tokensTransferGas",
                "type": "uint128"
            },
            {
                "name": "_tokenWalletDeployGas",
                "type": "uint128"
            },
            {
                "name": "_ratio",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "4d7d1a0db1489210bd471a23f511174bcd11f61cc6a3e0515f1602c8ecc83c62",
};
export default ConverterContract;