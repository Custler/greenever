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
                "name": "info",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "ratio",
                        "type": "uint128"
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
    tvc: "te6ccgECHwEABFkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gscBQQeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwREAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GxsGAiggghBQJvkOu+MCIIIQbaKvjbvjAg0HAiggghBkYfatuuMCIIIQbaKvjbrjAgoIAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABoJFwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bPhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAGgwLACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4TvhL+EwEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEFAm+Q664wIWFBIOA/4w+EJu4wD4RvJzIZPU0dDe+kDTH/QEWW8CAdTR0PpA03/Tf9N/1NHQ+kDR+ABTAXL7AlNmbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFVgW1UD+GpVAvhrWPhsAfht+G7Iz4UIEBkPARzOgG/PQMmDBvsA2zzyABcDYu1E0NdJwgGPJnDtRND0BYlwbW8CiXAg+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0RERoAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAGhMXAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAaFRcAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABoYFwBU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ABkADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4eHQAUc29sIDAuNzEuMAAA",
    code: "te6ccgECHAEABCwABCSK7VMg4wMgwP/jAiDA/uMC8gsZAgEbA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GBgDAiggghBQJvkOu+MCIIIQbaKvjbvjAgoEAiggghBkYfatuuMCIIIQbaKvjbrjAgcFAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABcGFABS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bPhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAFwkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4TvhL+EwEUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCEFAm+Q664wITEQ8LA/4w+EJu4wD4RvJzIZPU0dDe+kDTH/QEWW8CAdTR0PpA03/Tf9N/1NHQ+kDR+ABTAXL7AlNmbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFVgW1UD+GpVAvhrWPhsAfht+G7Iz4UIDRYMARzOgG/PQMmDBvsA2zzyABQDYu1E0NdJwgGPJnDtRND0BYlwbW8CiXAg+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0ODhcAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAFxAUAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAXEhQAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+G74ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABcVFABU+E74TfhM+Ev4SvhD+ELIy//LP8+DzgFvIgLLH/QAVSDIzst/y3/Nye1UAb74SvhJxwXy4GX4J28QaKb+YKG1f3L7Al8gbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhr+EnIz4UIzoBvz0DJgwb7ABYADvpA0x/RbwIAWO1E0NP/0z/TADH6QNMf9ARZbwIB1NHQ+kDTf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4bGgAUc29sIDAuNzEuMAAA",
    codeHash: "b1be1f0f9df9eb9517b846a4071e62d987eff7105be0a946d18d7e21d3fbf7f3",
};
export default ConverterContract;