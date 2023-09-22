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
            }
        ]
    },
    tvc: "te6ccgECGwEAA0cAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwREAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FxcGAiggghAhezMIu+MCIIIQIcJDubrjAgoHA4Yw+Eby4Ez4Qm7jANHbPCOOKiXQ0wH6QDAxyM+HIM5xzwthXiDIz5KHCQ7mzst/AW8iAssf9ADNyXD7AJJfA+LjAPIAFgkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAM+Er4S/hMBFAgghALI4p9uuMCIIIQEmrwvLrjAiCCEB8DaW264wIgghAhezMIuuMCEg8NCwM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAWDBMAGvhK+EnHBfLgZfgA+GoDKDD4RvLgTPhCbuMA03/R2zzbPPIAFg4TABr4SvhJxwXy4GX4APhrA7Iw+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB0fgAIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFj4agH4a/hs2zzyABAVEwJW7UTQ10nCAY6gcO1E0PQFiXAgbW8C+Gz4a/hqgED0DvK91wv/+GJw+GPjDREWAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABYUEwBE+Ez4S/hK+EP4QsjL/8s/z4POWcjLfwFvIgLLH/QAzcntVAF2+Er4SccF8uBl+AAgcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYw+GwVAA76QNMf0W8CAEjtRNDT/9M/0wAx+kDU0dDTf9Mf9ARZbwIB0fhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLAThoZABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECGAEAAxoABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FBQDAiggghAhezMIu+MCIIIQIcJDubrjAgcEA4Yw+Eby4Ez4Qm7jANHbPCOOKiXQ0wH6QDAxyM+HIM5xzwthXiDIz5KHCQ7mzst/AW8iAssf9ADNyXD7AJJfA+LjAPIAEwYFACjtRNDT/9M/MfhDWMjL/8s/zsntVAAM+Er4S/hMBFAgghALI4p9uuMCIIIQEmrwvLrjAiCCEB8DaW264wIgghAhezMIuuMCDwwKCAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gATCRAAGvhK+EnHBfLgZfgA+GoDKDD4RvLgTPhCbuMA03/R2zzbPPIAEwsQABr4SvhJxwXy4GX4APhrA7Iw+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB0fgAIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMFj4agH4a/hs2zzyAA0SEAJW7UTQ10nCAY6gcO1E0PQFiXAgbW8C+Gz4a/hqgED0DvK91wv/+GJw+GPjDQ4TAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAzQw+Eby4Ez4Qm7jANMf9ARZbwIB0ds82zzyABMREABE+Ez4S/hK+EP4QsjL/8s/z4POWcjLfwFvIgLLH/QAzcntVAF2+Er4SccF8uBl+AAgcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYw+GwSAA76QNMf0W8CAEjtRNDT/9M/0wAx+kDU0dDTf9Mf9ARZbwIB0fhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLAThcWABRzb2wgMC43MS4wAAA=",
    codeHash: "cef788e911f41f80197b164a408c0ba80521c08fabf387ca35321ff527316d20",
};
export default ConverterContract;