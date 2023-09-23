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
    tvc: "te6ccgECIwEABPQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsgBQQiA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Hx8GAiggghA4PU/Qu+MCIIIQbaKvjbvjAhMHBFAgghA/kBMsuuMCIIIQSNGwiLrjAiCCEFAm+Q664wIgghBtoq+NuuMCEA4KCAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAeCRsAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gz4ScjPhQjOgG/PQMmDBvsAA/4w+EJu4wD4RvJzIZPU0dDe+kDTH/QEWW8CAdTR0PpA03/Tf9N/1NHQ+kDR+ABTAXL7AlNmbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFVgW1UD+GpVAvhrWPhsAfht+G7Iz4UIDB0LARzOgG/PQMmDBvsA2zzyABsDYu1E0NdJwgGPJnDtRND0BYlwbW8CiXAg+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0NDR4AQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADlDD4RvLgTPhCbuMA0ds8JY4xJ9DTAfpAMDHIz4cgznHPC2FeQMjPkyNGwiLOAW8iAssf9ABVIMjOy3/Lf83NyXD7AJJfBeLjAPIAHg8RABT4SvhL+Ez4TfhOAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds84wDyAB4SEQAo7UTQ0//TPzH4Q1jIy//LP87J7VQANvhK+EnHBfLgZcjPhQjOgG/PQMmDBqYgtQf7AARQIIIQCyOKfbrjAiCCEB8DaW264wIgghAhezMIuuMCIIIQOD1P0LrjAhoYFhQDKDD4RvLgTPhCbuMA03/R2zzbPPIAHhUbAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avht+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAeFxsAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gr4ScjPhQjOgG/PQMmDBvsAAygw+Eby4Ez4Qm7jANN/0ds82zzyAB4ZGwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bvhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMA0x/0BFlvAgHR2zzbPPIAHhwbAFT4TvhN+Ez4S/hK+EP4QsjL/8s/z4POAW8iAssf9ABVIMjOy3/Lf83J7VQBvvhK+EnHBfLgZfgnbxBopv5gobV/cvsCXyBvEMER8uBncCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYw+Gv4ScjPhQjOgG/PQMmDBvsAHQAO+kDTH9FvAgBY7UTQ0//TP9MAMfpA0x/0BFlvAgHU0dD6QNN/03/R+G74bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATiIhABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECIAEABMcABCSK7VMg4wMgwP/jAiDA/uMC8gsdAgEfA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwKCQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HBwDAiggghA4PU/Qu+MCIIIQbaKvjbvjAhAEBFAgghA/kBMsuuMCIIIQSNGwiLrjAiCCEFAm+Q664wIgghBtoq+NuuMCDQsHBQM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAbBhgAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gz4ScjPhQjOgG/PQMmDBvsAA/4w+EJu4wD4RvJzIZPU0dDe+kDTH/QEWW8CAdTR0PpA03/Tf9N/1NHQ+kDR+ABTAXL7AlNmbxDBEfLgZ3AglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFVgW1UD+GpVAvhrWPhsAfht+G7Iz4UICRoIARzOgG/PQMmDBvsA2zzyABgDYu1E0NdJwgGPJnDtRND0BYlwbW8CiXAg+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0KChsAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADlDD4RvLgTPhCbuMA0ds8JY4xJ9DTAfpAMDHIz4cgznHPC2FeQMjPkyNGwiLOAW8iAssf9ABVIMjOy3/Lf83NyXD7AJJfBeLjAPIAGwwOABT4SvhL+Ez4TfhOAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds84wDyABsPDgAo7UTQ0//TPzH4Q1jIy//LP87J7VQANvhK+EnHBfLgZcjPhQjOgG/PQMmDBqYgtQf7AARQIIIQCyOKfbrjAiCCEB8DaW264wIgghAhezMIuuMCIIIQOD1P0LrjAhcVExEDKDD4RvLgTPhCbuMA03/R2zzbPPIAGxIYAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avht+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAbFBgAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gr4ScjPhQjOgG/PQMmDBvsAAygw+Eby4Ez4Qm7jANN/0ds82zzyABsWGABS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bvhJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMA0x/0BFlvAgHR2zzbPPIAGxkYAFT4TvhN+Ez4S/hK+EP4QsjL/8s/z4POAW8iAssf9ABVIMjOy3/Lf83J7VQBvvhK+EnHBfLgZfgnbxBopv5gobV/cvsCXyBvEMER8uBncCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYw+Gv4ScjPhQjOgG/PQMmDBvsAGgAO+kDTH9FvAgBY7UTQ0//TP9MAMfpA0x/0BFlvAgHU0dD6QNN/03/R+G74bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATh8eABRzb2wgMC43MS4wAAA=",
    codeHash: "cbcf8776e2fdc9faae9c705af9c6edc9ba74cad49f0efbc7fad704c0614fc61d",
};
export default ConverterContract;