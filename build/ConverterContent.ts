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
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeRatio",
                "inputs": [
                    {
                        "name": "ratio",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeReceivers",
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
                "name": "changeWallet",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeMinDeposit",
                "inputs": [
                    {
                        "name": "minDeposit",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeTransferGas",
                "inputs": [
                    {
                        "name": "coinsTransferGas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeTokensTransferGas",
                "inputs": [
                    {
                        "name": "tokensTransferGas",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeTokenWalletDeployGas",
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
    tvc: "te6ccgECLQEABw8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsqBQQsA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwPDgYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KSkGAzwgghA4PU/Qu+MCIIIQVkMW97vjAiCCEHP0ZAa74wIdEwcEUCCCEF3PAGm64wIgghBoWYTjuuMCIIIQbaKvjbrjAiCCEHP0ZAa64wIQDAoIAygw+Eby4Ez4Qm7jANN/0ds82zzyACgJJQBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4cPhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAKAslAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0NN/03/Tf/pA0fgAUwFy+wJTmW8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVkFtVBvhqVQX4a1UE+GxVAw4nDQFA+G1VAvhuWPhvAfhw+HHIz4UIzoBvz0DJgwb7ANs88gAlA3DtRNDXScIBjy1w7UTQ9AWJcG1vAolwX0D4cfhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GPjDQ8PKABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAMkMPhG8uBM+EJu4wDR2zzjAPIAKBEbA/xopv5g+E2+8uBo+E6nELV/+AX4T/gF+FD4BfgnbxBVAqG1fyKhtX8hobV/cJYg+EtvELmOsSD4S28RgCD0DvKy2zxTIG8RghA7msoAqYS1fwFvEMjPhQjOAfoCgGvPQMlx+wCktQfoW2im/mCCEDuaygD4UamEtX+IcPgoVQMnLBIAaPhJVRQB+Ex/yM+FgMoAz4RAzgH6AnHPC2pVUMjPkc+IhQ7Lf87Lf1UgyM7KAMzNzclw+wAEUCCCED+QEyy64wIgghBEcaN9uuMCIIIQSa8cJbrjAiCCEFZDFve64wIaGBYUAygw+Eby4Ez4Qm7jANN/0ds82zzyACgVJQBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4b/hJyM+FCM6Ab89AyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAKBclAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhu+EnIz4UIzoBvz0DJgwb7AAOmMPhG8uBM+EJu4wDR2zwojjoq0NMB+kAwMcjPhyDOcc8LYV5wyM+TEcaN9s4BbyICyx/0AFVQyM7Lf8t/y39ZyMt/y3/Nzc3JcPsAkl8I4uMA8gAoGRsAIPhK+Ev4TPhN+E74T/hQ+FEDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzjAPIAKBwbACjtRNDT/9M/MfhDWMjL/8s/zsntVAA2+Er4SccF8uBlyM+FCM6Ab89AyYMGpiC1B/sABFAgghALI4p9uuMCIIIQHwNpbbrjAiCCECF7Mwi64wIgghA4PU/QuuMCJCIgHgMoMPhG8uBM+EJu4wDTf9HbPNs88gAoHyUAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G34ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyACghJQBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4avhJyM+FCM6Ab89AyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAKCMlAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhx+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wDTH/QEWW8CAdHbPNs88gAoJiUAcvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg84BbyICyx/0AFVQyM7Lf8t/y39ZyMt/y3/NzcntVAG++Er4SccF8uBl+CdvEGim/mChtX9y+wJfIG8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjD4a/hJyM+FCM6Ab89AyYMG+wAnAA76QNMf0W8CAHbtRNDT/9M/0wAx+kDTH/QEWW8CAdTR0PpA03/Tf9N/1NHQ03/Tf9H4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOLCsAFHNvbCAwLjcxLjAAAA==",
    code: "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",
    codeHash: "70628b7d14585c836f036a1959d7f7af50e6dfed8fb18228318b04c3bdb37798",
};
export default ConverterContract;