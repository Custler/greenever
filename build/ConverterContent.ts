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
    codeHash: "8001e41c62843adff97756c59f89d585225691ffff2ee3ebf2374e28b80461f0",
};
export default ConverterContract;