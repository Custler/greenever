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
                "name": "_ratio",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECJgEABc0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsjBQQlA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwQDwYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8IiIGAzwgghA4PU/Qu+MCIIIQXc8AabvjAiCCEG2ir4264wIWCQcDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAIQgeAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AARQIIIQP5ATLLrjAiCCEEjRsIi64wIgghBQJvkOuuMCIIIQXc8AabrjAhMRDQoDJDD4RvLgTPhCbuMA0ds84wDyACELFAP8+CdvEIIQO5rKAKG1f4IQBfXhAKG1f3CWIPhLbxC5jrEg+EtvEYAg9A7ysts8UyBvEYIQO5rKAKmEtX8BbxDIz4UIzgH6AoBrz0DJcfsApLUH6Ftopv5gghA7msoA+E6phLV/iHD4KIIQC+vCAPhJVQT4TH/Iz4WAygDPhEDOICUMAGSCgCC+vCAAAAAAAAAAAAAAAAAAAc8LjlVQyM+Rz4iFDst/zst/VSDIzsoAzM3NyXD7AAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCA8gDgEczoBvz0DJgwb7ANs88gAeA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNEBAhAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyACESFAAU+Er4S/hM+E34TgM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPOMA8gAhFRQAKO1E0NP/0z8x+ENYyMv/yz/Oye1UADb4SvhJxwXy4GXIz4UIzoBvz0DJgwamILUH+wAEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIdGxkXAygw+Eby4Ez4Qm7jANN/0ds82zzyACEYHgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAIRoeAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAhHB4AUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyACEfHgBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ACAADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4lJAAUc29sIDAuNzEuMAAA",
    code: "te6ccgECIwEABaAABCSK7VMg4wMgwP/jAiDA/uMC8gsgAgEiA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Hx8DAzwgghA4PU/Qu+MCIIIQXc8AabvjAiCCEG2ir4264wITBgQDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHgUbAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AARQIIIQP5ATLLrjAiCCEEjRsIi64wIgghBQJvkOuuMCIIIQXc8AabrjAhAOCgcDJDD4RvLgTPhCbuMA0ds84wDyAB4IEQP8+CdvEIIQO5rKAKG1f4IQBfXhAKG1f3CWIPhLbxC5jrEg+EtvEYAg9A7ysts8UyBvEYIQO5rKAKmEtX8BbxDIz4UIzgH6AoBrz0DJcfsApLUH6Ftopv5gghA7msoA+E6phLV/iHD4KIIQC+vCAPhJVQT4TH/Iz4WAygDPhEDOHSIJAGSCgCC+vCAAAAAAAAAAAAAAAAAAAc8LjlVQyM+Rz4iFDst/zst/VSDIzsoAzM3NyXD7AAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCAwdCwEczoBvz0DJgwb7ANs88gAbA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDQ0eAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyAB4PEQAU+Er4S/hM+E34TgM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPOMA8gAeEhEAKO1E0NP/0z8x+ENYyMv/yz/Oye1UADb4SvhJxwXy4GXIz4UIzoBvz0DJgwamILUH+wAEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIaGBYUAygw+Eby4Ez4Qm7jANN/0ds82zzyAB4VGwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHhcbAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAeGRsAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyAB4cGwBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7AB0ADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4iIQAUc29sIDAuNzEuMAAA",
    codeHash: "9397757b8fa4468f3d3dc54644320099a3ce5e48cd9441afb667d04306bd3cf1",
};
export default ConverterContract;