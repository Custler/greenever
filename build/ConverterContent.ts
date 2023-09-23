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
    tvc: "te6ccgECIQEABK0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0GAiggghA4PU/Qu+MCIIIQbaKvjbvjAhEHAzwgghBI0bCIuuMCIIIQUCb5DrrjAiCCEG2ir4264wIOCggDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHAkZAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCAwbCwEczoBvz0DJgwb7ANs88gAZA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDQ0cAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyABwQDwAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4TPhN+E4EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIYFhQSAygw+Eby4Ez4Qm7jANN/0ds82zzyABwTGQBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHBUZAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAcFxkAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABwaGQBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ABsADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4gHwAUc29sIDAuNzEuMAAA",
    code: "te6ccgECHgEABIAABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwKCQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GhoDAiggghA4PU/Qu+MCIIIQbaKvjbvjAg4EAzwgghBI0bCIuuMCIIIQUCb5DrrjAiCCEG2ir4264wILBwUDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAGQYWAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCAkYCAEczoBvz0DJgwb7ANs88gAWA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNCgoZAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyABkNDAAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4TPhN+E4EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIVExEPAygw+Eby4Ez4Qm7jANN/0ds82zzyABkQFgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAGRIWAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAZFBYAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABkXFgBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ABgADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4dHAAUc29sIDAuNzEuMAAA",
    codeHash: "5c903e52c9471ca8c14d01e15606d90381d87577e8e559d7336dcdf8507f1522",
};
export default ConverterContract;