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
                        "name": "balance",
                        "type": "uint128"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "wallet",
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
                "name": "_ratio",
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
                "name": "_receivers",
                "type": "tuple[]"
            },
            {
                "name": "_wallet",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECHgEABDQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBQQdA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwQDwYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GhoGAiggghApFDJ9u+MCIIIQbaKvjbvjAg0HAiggghBkYfatuuMCIIIQbaKvjbrjAgoIAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABkJFgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAGQwLACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4S/hM+E0EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCECkUMn264wIVExEOA/ww+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB03/U0dD6QNTR0PpA0fgAUxJy+wIkcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYwBvhqVQP4a1UC+Gz4bVvIz4UIzoBvz0DJgwb7ANs88gAPGBYDXO1E0NdJwgGPI3DtRND0BYlwIG1vAon4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0QEBkAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAGRIWAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAZFBYAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gv4ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABkXFgBM+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjLfwFvIgLLH/QAzs3J7VQBrvhK+EnHBfLgZfgnbxBopv5gobV/cvsCIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhs+EnIz4UIzoBvz0DJgwb7ABgADvpA0x/RbwIAUO1E0NP/0z/TADH6QNTR0NN/0x/0BFlvAgH6QNH4bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATh0cABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECGwEABAcABCSK7VMg4wMgwP/jAiDA/uMC8gsYAgEaA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FxcDAiggghApFDJ9u+MCIIIQbaKvjbvjAgoEAiggghBkYfatuuMCIIIQbaKvjbrjAgcFAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABYGEwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAFgkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4S/hM+E0EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCECkUMn264wISEA4LA/ww+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB03/U0dD6QNTR0PpA0fgAUxJy+wIkcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYwBvhqVQP4a1UC+Gz4bVvIz4UIzoBvz0DJgwb7ANs88gAMFRMDXO1E0NdJwgGPI3DtRND0BYlwIG1vAon4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0NDRYAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIAFg8TAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhq+EnIz4UIzoBvz0DJgwb7AAMoMPhG8uBM+EJu4wDTf9HbPNs88gAWERMAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gv4ScjPhQjOgG/PQMmDBvsAAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABYUEwBM+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjLfwFvIgLLH/QAzs3J7VQBrvhK+EnHBfLgZfgnbxBopv5gobV/cvsCIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhs+EnIz4UIzoBvz0DJgwb7ABUADvpA0x/RbwIAUO1E0NP/0z/TADH6QNTR0NN/0x/0BFlvAgH6QNH4bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLAThoZABRzb2wgMC43MS4wAAA=",
    codeHash: "ea7cca2ddbb163815db62d85e597b3594be41c833e78fc57ec18aebda944f653",
};
export default ConverterContract;