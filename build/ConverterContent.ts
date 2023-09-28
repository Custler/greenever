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
                        "name": "coinsTransferValue",
                        "type": "uint128"
                    },
                    {
                        "name": "tokensTransferValue",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenWalletDeployValue",
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
                "name": "up",
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
                "name": "setCoinsTransferValue",
                "inputs": [
                    {
                        "name": "coinsTransferValue",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTokensTransferValue",
                "inputs": [
                    {
                        "name": "tokensTransferValue",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTokenWalletDeployValue",
                "inputs": [
                    {
                        "name": "tokenWalletDeployValue",
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
                        "name": "coinsTransferValue",
                        "type": "uint128"
                    },
                    {
                        "name": "tokensTransferValue",
                        "type": "uint128"
                    },
                    {
                        "name": "tokenWalletDeployValue",
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
        "events": [
            {
                "name": "TokenTransferFailed",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
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
                "name": "_coinsTransferValue",
                "type": "uint128"
            },
            {
                "name": "_tokensTransferValue",
                "type": "uint128"
            },
            {
                "name": "_tokenWalletDeployValue",
                "type": "uint128"
            },
            {
                "name": "_ratio",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECLwEAB+IABCSK7VMg4wMgwP/jAiDA/uMC8gssAgEuA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwREAMDZu1E0NdJwwH4ZiLQ0wP6QDD4aak4AOMCIccAIJ8wIdcNH/K8IcAAIJJsId7f4wIB2zzyPComAwRQIIIQP5ATLLvjAiCCEFrdq3274wIgghB4WKhGu+MCIIIQftCKPbvjAhwUCQQCKCCCEHvo9Wa64wIgghB+0Io9uuMCBwUDKDD4RvLgTPhCbuMA03/R2zzbPPIAKQYiAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhu+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wDTH/QEWW8CAdHbPNs88gApCCIBvvhK+EnHBfLgZfgnbxBopv5gobV/cvsCXyBvEMER8uBncCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYw+Gv4ScjPhQjOgG/PQMmDBvsAKARQIIIQW7qRV7rjAiCCEGhZhOO64wIgghBrbLMGuuMCIIIQeFioRrrjAhIODAoDODD4RvLgTPhCbuMAIZPU0dDe+kDTf9HbPOMA8gApCysANPhK+EnHBfLgZXL7AsjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyACkNIgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4avhJyM+FCM6Ab89AyYMG+wAD/jD4Qm7jAPhG8nMhk9TR0N76QNMf9ARZbwIB1NHQ+kDTf9N/03/U0dDTf9N/03/6QNH4AFMBcvsCU5lvEMER8uBncCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYwVZBbVQb4alUF+GtVBPhsVQMQKA8BQPhtVQL4blj4bwH4cPhxyM+FCM6Ab89AyYMG+wDbPPIAIgNw7UTQ10nCAY8tcO1E0PQFiXBtbwKJcF9A+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0RESkAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAKRMiAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AARQIIIQRHGjfbrjAiCCEEsdbZm64wIgghBM0y7HuuMCIIIQWt2rfbrjAhoZFxUDKDD4RvLgTPhCbuMA03/R2zzbPPIAKRYiAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avht+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gApGCIAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+HD4ScjPhQjOgG/PQMmDBvsAAyQw+Eby4Ez4Qm7jANHbPOMA8gApLisDpjD4RvLgTPhCbuMA0ds8KI46KtDTAfpAMDHIz4cgznHPC2FecMjPkxHGjfbOAW8iAssf9ABVUMjOy3/Lf8t/WcjLf8t/zc3NyXD7AJJfCOLjAPIAKRsrACD4SvhL+Ez4TfhO+E/4UPhRBFAgghATKoXfuuMCIIIQNA1KPLrjAiCCEDfdN7O64wIgghA/kBMsuuMCJCEfHQM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPOMA8gApHisANvhK+EnHBfLgZcjPhQjOgG/PQMmDBqYgtQf7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gApICIAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G/4ScjPhQjOgG/PQMmDBvsAAygw+Eby4Ez4Qm7jANN/0ds82zzyACkjIgBy+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVVDIzst/y3/Lf1nIy3/Lf83Nye1UAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhx+EnIz4UIzoBvz0DJgwb7AAM4MPhG8uBM+EJu4wAhk9TR0N76QNN/0ds84wDyACklKwFi+Er4SccF8uBl+CdvEGim/mChtX9y+wL4T/gF+FD4Bds8+EnIz4UIzoBvz0DJgwb7ACcE/vhG8uBM+EJu4wBopv5g+E2+8uBo+CdvEPhOpxC1f6G1f/hPobV/cJYg+EtvELmOsSD4S28RgCD0DvKy2zxTIG8RghA7msoAqYS1fwFvEMjPhQjOAfoCgGvPQMlx+wCktQfoW2im/mCCEDuaygD4UamEtX/4SQH4T/hQ2zwg4wApKCcrAW6IcPhJVQJVI/hMf8jPhYDKAM+EQM4B+gJxzwtqVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3JcPsALgAO+kDTH9FvAgB27UTQ0//TP9MAMfpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0NN/03/R+HH4cPhv+G74bfhs+Gv4avhj+GIBfiHWHzH4RvLgTCDTHzK1H4IQc+IhQ7qOIiDTfzK1f40EcAAAAAAAAAAAAAAAABNhedjgyM7Lf8lw+wDeMCDjACsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAhD0pCD0vfLATi4tABRzb2wgMC43MS4wAAA=",
    codeHash: "1dd7c398e56fb9884b5832ccfda1267b437e225a78d5f0a9246009862962094a",
};
export default ConverterContract;