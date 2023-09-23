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
    tvc: "te6ccgECJQEABXYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwPDgYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ISEGAzwgghA4PU/Qu+MCIIIQXc8AabvjAiCCEG2ir4264wIVCQcDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAIAgdAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AARQIIIQP5ATLLrjAiCCEEjRsIi64wIgghBQJvkOuuMCIIIQXc8AabrjAhIQDAoDJDD4RvLgTPhCbuMA0ds84wDyACALEwG6aKb+YIIQO5rKAPhOqYS1f4hw+CiCEAvrwgD4SVUE+Ex/yM+FgMoAz4RAzoKAIdzWUAAAAAAAAAAAAAAAAAABzwuOVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3JcPsAJAP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCA4fDQEczoBvz0DJgwb7ANs88gAdA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDw8gAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyACAREwAU+Er4S/hM+E34TgM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPOMA8gAgFBMAKO1E0NP/0z8x+ENYyMv/yz/Oye1UADb4SvhJxwXy4GXIz4UIzoBvz0DJgwamILUH+wAEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIcGhgWAygw+Eby4Ez4Qm7jANN/0ds82zzyACAXHQBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAIBkdAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAgGx0AUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyACAeHQBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7AB8ADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4kIwAUc29sIDAuNzEuMAAA",
    code: "te6ccgECIgEABUkABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwMCwMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Hh4DAzwgghA4PU/Qu+MCIIIQXc8AabvjAiCCEG2ir4264wISBgQDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHQUaAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhs+EnIz4UIzoBvz0DJgwb7AARQIIIQP5ATLLrjAiCCEEjRsIi64wIgghBQJvkOuuMCIIIQXc8AabrjAg8NCQcDJDD4RvLgTPhCbuMA0ds84wDyAB0IEAG6aKb+YIIQO5rKAPhOqYS1f4hw+CiCEAvrwgD4SVUE+Ex/yM+FgMoAz4RAzoKAIdzWUAAAAAAAAAAAAAAAAAABzwuOVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3JcPsAIQP+MPhCbuMA+EbycyGT1NHQ3vpA0x/0BFlvAgHU0dD6QNN/03/Tf9TR0PpA0fgAUwFy+wJTZm8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjBVYFtVA/hqVQL4a1j4bAH4bfhuyM+FCAscCgEczoBvz0DJgwb7ANs88gAaA2LtRNDXScIBjyZw7UTQ9AWJcG1vAolwIPhu+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDAwdAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5Qw+Eby4Ez4Qm7jANHbPCWOMSfQ0wH6QDAxyM+HIM5xzwthXkDIz5MjRsIizgFvIgLLH/QAVSDIzst/y3/Nzclw+wCSXwXi4wDyAB0OEAAU+Er4S/hM+E34TgM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPOMA8gAdERAAKO1E0NP/0z8x+ENYyMv/yz/Oye1UADb4SvhJxwXy4GXIz4UIzoBvz0DJgwamILUH+wAEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEDg9T9C64wIZFxUTAygw+Eby4Ez4Qm7jANN/0ds82zzyAB0UGgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAHRYaAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAdGBoAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyAB0bGgBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ABwADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4hIAAUc29sIDAuNzEuMAAA",
    codeHash: "1adb43a107c089c9e73052715df7b74794d29a9b016e26d32c31fed325314d27",
};
export default ConverterContract;