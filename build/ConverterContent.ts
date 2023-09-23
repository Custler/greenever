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
    tvc: "te6ccgECHwEABEcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gscBQQeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwREAYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GxsGAiggghApFDJ9u+MCIIIQbaKvjbvjAg0HAiggghBkYfatuuMCIIIQbaKvjbrjAgoIAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABoJFwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAGgwLACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4S/hM+E0EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCECkUMn264wIWFBIOA/ww+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB03/U0dD6QNTR0PpA0fgAUxJy+wJTRG8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjAG+GpVA/hrVQL4bPhtW8jPhQjOgG/PQMkQGQ8BEIMG+wDbPPIAFwNc7UTQ10nCAY8jcO1E0PQFiXAgbW8Cifht+Gz4a/hqgED0DvK91wv/+GJw+GPjDRERGgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAaExcAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gr4ScjPhQjOgG/PQMmDBvsAAygw+Eby4Ez4Qm7jANN/0ds82zzyABoVFwBS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4a/hJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMA0x/0BFlvAgHR2zzbPPIAGhgXAEz4TfhM+Ev4SvhD+ELIy//LP8+DzlUgyMt/AW8iAssf9ADOzcntVAG++Er4SccF8uBl+CdvEGim/mChtX9y+wJfIG8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjD4bPhJyM+FCM6Ab89AyYMG+wAZAA76QNMf0W8CAFDtRNDT/9M/0wAx+kDU0dDTf9Mf9ARZbwIB+kDR+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4eHQAUc29sIDAuNzEuMAAA",
    code: "te6ccgECHAEABBoABCSK7VMg4wMgwP/jAiDA/uMC8gsZAgEbA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8GBgDAiggghApFDJ9u+MCIIIQbaKvjbvjAgoEAiggghBkYfatuuMCIIIQbaKvjbrjAgcFAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABcGFABS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4bfhJyM+FCM6Ab89AyYMG+wADjjD4RvLgTPhCbuMA0ds8JI4uJtDTAfpAMDHIz4cgznHPC2FeMMjPk5GH2rbOy38BbyICyx/0AAHIzs3NyXD7AJJfBOLjAPIAFwkIACjtRNDT/9M/MfhDWMjL/8s/zsntVAAQ+Er4S/hM+E0EUCCCEAsjin264wIgghAfA2ltuuMCIIIQIXszCLrjAiCCECkUMn264wITEQ8LA/ww+EJu4wD4RvJzIZPU0dDe+kDTf9Mf9ARZbwIB03/U0dD6QNTR0PpA0fgAUxJy+wJTRG8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjAG+GpVA/hrVQL4bPhtW8jPhQjOgG/PQMkNFgwBEIMG+wDbPPIAFANc7UTQ10nCAY8jcO1E0PQFiXAgbW8Cifht+Gz4a/hqgED0DvK91wv/+GJw+GPjDQ4OFwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAM0MPhG8uBM+EJu4wAhk9TR0N76QNHbPNs88gAXEBQAUvhK+EnHBfLgZfgnbxBopv5gobV/cvsC+Gr4ScjPhQjOgG/PQMmDBvsAAygw+Eby4Ez4Qm7jANN/0ds82zzyABcSFABS+Er4SccF8uBl+CdvEGim/mChtX9y+wL4a/hJyM+FCM6Ab89AyYMG+wADNDD4RvLgTPhCbuMA0x/0BFlvAgHR2zzbPPIAFxUUAEz4TfhM+Ev4SvhD+ELIy//LP8+DzlUgyMt/AW8iAssf9ADOzcntVAG++Er4SccF8uBl+CdvEGim/mChtX9y+wJfIG8QwRHy4GdwIJVTAm8QuY6WUwJvEYAg9A7ysts8bxEioLU/MqS1B+gwghA7msoAuvLgZjD4bPhJyM+FCM6Ab89AyYMG+wAWAA76QNMf0W8CAFDtRNDT/9M/0wAx+kDU0dDTf9Mf9ARZbwIB+kDR+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4bGgAUc29sIDAuNzEuMAAA",
    codeHash: "bf56da7c0ee7b202db60531935b749126d5c48700eae7e334ea9d5eea428f3b4",
};
export default ConverterContract;