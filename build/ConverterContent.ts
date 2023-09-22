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
    tvc: "te6ccgECGwEAA7cAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwWFAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FxcGAiggghAhezMIu+MCIIIQIcJDubrjAgoHA4Yw+Eby4Ez4Qm7jANHbPCOOKiXQ0wH6QDAxyM+HIM5xzwthXiDIz5KHCQ7mzst/AW8iAssf9ADNyXD7AJJfA+LjAPIAFQkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAM+Er4S/hMBE4gggkgheO64wIgghALI4p9uuMCIIIQHwNpbbrjAiCCECF7Mwi64wIRDw0LAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABUMEgBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4avhJyM+FCM6Ab89AyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAFQ4SAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhr+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wDTH/QEWW8CAdHbPNs88gAVEBIBrvhK+EnHBfLgZfgnbxBopv5gobV/cvsCIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhs+EnIz4UIzoBvz0DJgwb7ABMD7DD4Qm7jAPhG8nMhk9TR0N76QNN/0x/0BFlvAgHTf9TR0PpA0fgAUwFy+wIjcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYwVUBbWPhqAfhr+GzIz4UIzoBvz0DJgwb7ANs88gAUExIARPhM+Ev4SvhD+ELIy//LP8+DzlnIy38BbyICyx/0AM3J7VQADvpA0x/RbwICVu1E0NdJwgGOoHDtRND0BYlwIG1vAvhs+Gv4aoBA9A7yvdcL//hicPhj4w0WFQBI7UTQ0//TP9MAMfpA1NHQ03/TH/QEWW8CAdH4bPhr+Gr4Y/hiAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAr4RvLgTAIQ9KQg9L3ywE4aGQAUc29sIDAuNzEuMAAA",
    code: "te6ccgECGAEAA4oABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwTEQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FBQDAiggghAhezMIu+MCIIIQIcJDubrjAgcEA4Yw+Eby4Ez4Qm7jANHbPCOOKiXQ0wH6QDAxyM+HIM5xzwthXiDIz5KHCQ7mzst/AW8iAssf9ADNyXD7AJJfA+LjAPIAEgYFACjtRNDT/9M/MfhDWMjL/8s/zsntVAAM+Er4S/hMBE4gggkgheO64wIgghALI4p9uuMCIIIQHwNpbbrjAiCCECF7Mwi64wIODAoIAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABIJDwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4avhJyM+FCM6Ab89AyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAEgsPAFL4SvhJxwXy4GX4J28QaKb+YKG1f3L7Avhr+EnIz4UIzoBvz0DJgwb7AAM0MPhG8uBM+EJu4wDTH/QEWW8CAdHbPNs88gASDQ8BrvhK+EnHBfLgZfgnbxBopv5gobV/cvsCIHAglVMCbxC5jpZTAm8RgCD0DvKy2zxvESKgtT8ypLUH6DCCEDuaygC68uBmMPhs+EnIz4UIzoBvz0DJgwb7ABAD7DD4Qm7jAPhG8nMhk9TR0N76QNN/0x/0BFlvAgHTf9TR0PpA0fgAUwFy+wIjcCCVUwJvELmOllMCbxGAIPQO8rLbPG8RIqC1PzKktQfoMIIQO5rKALry4GYwVUBbWPhqAfhr+GzIz4UIzoBvz0DJgwb7ANs88gAREA8ARPhM+Ev4SvhD+ELIy//LP8+DzlnIy38BbyICyx/0AM3J7VQADvpA0x/RbwICVu1E0NdJwgGOoHDtRND0BYlwIG1vAvhs+Gv4aoBA9A7yvdcL//hicPhj4w0TEgBI7UTQ0//TP9MAMfpA1NHQ03/TH/QEWW8CAdH4bPhr+Gr4Y/hiAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAr4RvLgTAIQ9KQg9L3ywE4XFgAUc29sIDAuNzEuMAAA",
    codeHash: "58f56eab021f9cb16fb445bc96ec10ef63984310d6eaab05a956d96846b76d04",
};
export default ConverterContract;