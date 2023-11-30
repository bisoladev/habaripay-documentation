import {colors} from "../constants"

//API Specifications

export const customerModelApi = [
    {
        title: "Body",
        children: [
            {
                key: "first_name",
                dataType: "String",
                description: "customer first name",
                required: true,
            },
            {
                key: "last_name",
                dataType: "String",
                description: "customer last name",
                required: true
            },
            {
                key: "middle_name",
                dataType: "String",
                description: "customer middle name",
                required: false
            },
            {
                key: "mobile_num",
                dataType: "String",
                description: "08012345678 (doesn't take more than 11 digits)",
                required: true
            },
            {
                key: "dob",
                dataType: "Date",
                description: "dd/mm/yyyy",
                required: true
            },
            {
                key: "email",
                dataType: "String",
                description: "customer email",
                required: false
            },
            {
                key: "bvn",
                dataType: "String",
                description: "BVN is compulsory",
                required: true
            },
            {
                key: "gender",
                dataType: "String",
                description: "'1' - Male, '2' -Female",
                required: true
            },
            {
                key: "address",
                dataType: "String",
                description: "customer address",
                required: true
            },
             {
                key: "customer_identifier",
                dataType: "String",
                description: "unique customer identifier as given by merchant",
                required: true
            },
            {
                key: "beneficiary_account",
                dataType: "String",
                description: "Beneficiary Account is the 10 Digit Bank Account Number (GTBank) provided by the Merchant where money sent to this Virtual account is paid into. Please note that when beneficiary account is not provided, money paid into this virtual account go into your wallet and will be paid out/settled in T+1 settlement time.",
                required: false
            }
        ],
    }
]

export const customerModelResponse = [
    {
        status: "200:OK",
        responseMsg: "Success Response",
        pill: colors?.greenColor,
        code: `{
            "customer_identifier": "CCC",
            "first_name": "Techzilla- Joesph",
            "last_name": "Okoye",
            "mobile_num": "08139011943",
            "email": "ayo@gmail.com",
            "bvn": "12343211654",
            "dob": "30/10/1990",
            "address": "22 Kota street, UK",
            "gender": "1",
            "beneficiary_account": "4920299492"
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API keys",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const BusinessModelApi = [
    {
        title: "Body",
        children: [
            {
                key: "bvn",
                dataType: "String",
                description: "Bank Verification Number",
                required: true,
            },
            {
                key: "business_name",
                dataType: "String",
                description: "Name of Business/Customer",
                required: true
            },
            {
                key: "customer_identifier",
                dataType: "String",
                description: "An alphanumeric string used to identify a customer/business in your system which will be tied to the virtual account being created",
                required: true
            },
            {
                key: "mobile_num",
                dataType: "String",
                description: "Customer's Phone Number Sample: 08012345678 (doesn't take more than 11 digits)",
                required: true
            },
            {
                key: "beneficiary_account",
                dataType: "Date",
                description: "Beneficiary Account is your 10 Digit Bank Account Number (GTBank) where money sent to this Virtual account is paid into. Please note that when beneficiary account is not provided, money paid into this virtual account go into your wallet and will be paid out/settled in T+1 settlement time.",
                required: false
            },
            
        ],
    }
]

export const BusinessModelResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Techzilla-Will",
                "last_name": "Okoye",
                "bank_code": "058",
                "virtual_account_number": "2474681469",
                "beneficiary_account": null,
                "customer_identifier": "Tech910260",
                "created_at": "2023-08-07T13:18:21.287Z",
                "updated_at": "2023-08-07T13:18:21.287Z"
            }
        }`
    },
     {
        status: "400:Bad Request",
        responseMsg: "Bad Request",
        pill: colors?.orangeColor,
        code: `{
            "status": 400,
            "success": false,
            "message": "\"customer_identifier\" is required",
            "data": {}
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No API key",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid Authorization key or token",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const getWebhookErrorLogApi = [
    {
        title: "Query",
        children: [
            {
                key: "page",
                dataType: "Integer",
                description: "The page you are on",
                required: false,
            },
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of records you want to appear on a page",
                required: false
            },           
        ],
    }
]

export const getWebhookErrorLogResponse = [
    {
        status: "200:OK",
        responseMsg: "Response description",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count": 2,
                "rows": [
                    {
                        "id": "229f9f3d-53e4-450e-a9e9-164a8b882a60",
                        "payload": {
                            "hash": "659c24ba0b6c3ac324b587f2f079c8ee876c56609ff11b7106cd868f84674a5c37fcb088373859f8d900713f03c47d819de79623cde67e70bbca945fd20f3cb3",
                            "meta": {
                                "freeze_transaction_ref": null,
                                "reason_for_frozen_transaction": null
                            },
                            "channel": "virtual-account",
                            "remarks": "Transfer FROM OKOYE, CHIZOBA ANTHONY | [CCtyttytC] TO CHIZOBA ANTHONY OKOYE",
                            "currency": "NGN",
                            "fee_charged": "0.05",
                            "sender_name": "OKOYE, CHIZOBA ANTHONY",
                            "encrypted_body": "DiPEa8Z4Cbfiqulhs3Q8lVJXGjMIFzbWwI2g7utVGbhXihbtK3H2xsA/+ZnjOpFA0AU8vAN5LUTEH6elfrK58ub2wydaRk0ngvQXWUFz3iB19qWBcdGQRnppKAT/AB5xyy1iQZvEHP7zq3Y7na5zcx9ttkU1mZIeAIoisM9k+ghVLxkTeql4UvfFcLyDdGzMd/BC4YgJFyrZxifhfhKi073od7xJnz4Hhz08UBE/FAwNYMWkwWD9izlbcaaJtfh1VIN6t9rl1gotlb5qmNq/UytgoSvuN5uaEXxegdB3VWvmsDMHqoYwDs4oEuv0lp8zUUG3cZ9zPQ6xH3shGQjVOWErkuIfCk62fRzkwxya4Gu/x2KHMSQjutbvD4vNDjVGfuCIoHuZEXPThWrq1jpTy7cNMLc8ZZ8IowJnfwWHL+O6fuepxXxfrJHlswMCI35ZHSvef1AEXgbUlx2O7yzytceCogpUkY+QJ1yLddl1FeE1u2JKOM+casP3pfiT+t3Mv55aSCVQO7hUy46gd6H/bIHaSIp2K3CcjfdflZ/bxCZaZoe/sRqfVdVIzpSpTc0Lq5sOXM2gijOdeg+zex/CgnMIKGJdzUT9YUJtaaVrMmhk0EcM0rHRrqs0iM7xaSTdZ7K8hnzl0RPJhDXIhu5a/Y2NxS3ZTC2lYRVZd6I3lerpoMQG69VfmqvaVgW2k03f",
                            "settled_amount": "49.95",
                            "principal_amount": "50.00",
                            "transaction_date": "2023-09-01T00:00:00.000Z",
                            "customer_identifier": "CCtyttytC",
                            "transaction_indicator": "C",
                            "transaction_reference": "REF20230901162737156459_1",
                            "virtual_account_number": "0760640237"
                        },
                        "transaction_ref": "REF20230901162737156459_1"
                    }
                ]
            }
        }`
    },
     {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
]

export const deleteWebhookErrorLogApi = [
    {
        title: "Path",
        children: [
            {
                key: "transaction_ref",
                dataType: "String",
                description: "Unique Transaction Ref that identifies each virtual account and gotten from the retrieved webhook error log",
                required: true,
            },           
        ],
    }
]

export const deleteWebhookErrorLogResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": 1
        }`
    },
     {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Wrong/Invalid API Keys",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const queryCustomerTransactionApi = [
    {
        title: "Path",
        children: [
            {
                key: "customer_identifier",
                dataType: "String",
                description: "Unique Customer Identifier that identifies each virtual account",
                required: false,
            },           
        ],
    }
]

export const queryAllMerchantTransactionsApi = [
    {
        title: "No Parameters",
    }
]

export const queryAllMerchantTransactionsMultipleFiltersApi = [
    {
        title: "Query",
        children: [
            {
                key: "page",
                dataType: "Integer",
                description: "Page Number to Display",
                required: false,
            },  
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of records per Page",
                required: false,
            }, 
            {
                key: "virtualAccount",
                dataType: "Integer",
                description: "a unique 10-digit virtual account number",
                required: false,
            },  
            {
                key: "customerIdentifier",
                dataType: "String",
                description: "Unique Identifier used to create/identify a customer's virtual account",
                required: false,
            }, 
            {
                key: "startDate",
                dataType: "Date",
                description: "MM-DD-YYYY E.G: 09-19-2022",
                required: false,
            }, 
            {
                key: "endDate",
                dataType: "Date",
                description: "MM-DD-YYYY E.G: 09-19-2022",
                required: false,
            },
            {
                key: "transactionReference",
                dataType: "String",
                description: "Unique Identifier of a transaction",
                required: false,
            }, 
            {
                key: "session_id",
                dataType: "String",
                description: "Unique ID that identifies all NIP transactions",
                required: false,
            }, 
            {
                key: "dir",
                dataType: "String",
                description: "Takes two possible values: 'DESC' and 'ASC'. 'DESC' - descending order ,'ASC' - ascending order",
                required: false,
            }, 
                     
        ],
    }
]

export const queryAllMerchantTransactionsMultipleFiltersResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 15,
        "rows": [
            {
                "transaction_reference": "REF20221007130357_1",
                "virtual_account_number": "0713810881",
                "principal_amount": "50.00",
                "settled_amount": "50.00",
                "fee_charged": "0.00",
                "transaction_date": "2022-10-07T00:00:00.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample | [CCC1234334] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-10-07T12:04:11.635Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "CCC1234334"
                }
            },
            {
                "transaction_reference": "REF20221004191517_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-10-04T00:00:00.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample Name4 | [OPPO] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-10-04T18:15:29.463Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220913181048_1",
                "virtual_account_number": "0709108705",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-09-13T18:10:48.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample Name4 | [TSP/00008786500] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-09-20T09:51:04.999Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "TSP/00008786500"
                }
            },
            {
                "transaction_reference": "REF20220713143436_1",
                "virtual_account_number": "0713694755",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-07-13T14:34:36.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name | [123CCC] to Sample Name5",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-07-13T13:35:13.410Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "123CCC"
                }
            },
            {
                "transaction_reference": "REF20220707162950_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-07-07T16:29:50.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name4 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-07-07T15:30:06.761Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220624160230_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-24T16:02:30.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name5 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-24T15:03:29.054Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220624155515_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-24T15:55:15.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name4 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-24T14:56:23.266Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220623095446_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-23T09:54:46.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-23T08:55:06.599Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220617131121_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-17T13:11:21.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T12:11:38.228Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617130949_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T13:09:49.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T12:10:14.605Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617125618_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T12:56:18.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from sample Name1 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T11:56:42.868Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617115436_1",
                "virtual_account_number": "0709056301",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T11:54:36.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [TSP/00002900] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T10:54:54.837Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "TSP/00002900"
                }
            }
        ],
        "query": {}
    }
}`
    },
     {
        status: "400:Bad Request",
        responseMsg: "Wrong/ Invalid Input",
        pill: colors?.orangeColor,
        code: `{
        "status": 400,
        "success": false,
        "message": "\"virtualAccount\" is not allowed to be empty",
        "data": {}
    }`
    },
     {
        status: "401:Unauthorized",
        responseMsg: "No API Keys",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Invalid Keys/Token",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const customerDetailsByVirtualAccountNumberApi = [
    {
        title: "Path",
        children: [
            {
                key: "virtual_account_number",
                dataType: "String",
                description: "Unique 10-digit virtual account number assigned to a customer",
                required: true,
            },                     
        ],
    }
]

export const customerDetailsByVirtualAccountNumberResponse = [
    {
        status: "200:OK",
        responseMsg: "Valid Virtual Account Number",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Timothy",
                "last_name": "Oke",
                "mobile_num": "08000000000",
                "email": "atioke@gmail.com",
                "customer_identifier": "CCtyttytC",
                "virtual_account_number": "0686786837"
            }
        }`
    },
     {
        status: "404:Not Found",
        responseMsg: "Invalid Virtual Account Number",
        pill: colors?.orangeColor,
        code: `{
            "status": 404,
            "success": false,
            "message": "Virtual account not found",
            "data": {}
        }`
    },
]

export const customerDetailsUsingCustomerIdentifierApi = [
    {
        title: "Path",
        children: [
            {
                key: "customer_identifier",
                dataType: "String",
                description: "Unique Customer Identifier that identifies each virtual account",
                required: false,
            },                     
        ],
    }
]

export const updateCustomerBVNAndUnfreezeTransactionApi = [
    {
        title: "Path",
        children: [
            {
                key: "customer_bvn",
                dataType: "String",
                description: "Bank Verification Number of Customer",
                required: true,
            }, 
            {
                key: "customer_identifier",
                dataType: "String",
                description: "Unique number given to customer by merchant.",
                required: true,
            },
            {
                key: "phone_number",
                dataType: "String",
                description: "customer's phone number",
                required: true,
            },                    
        ],
    }
]

export const queryAllMerchantVirtualAccountsApi = [
    {
        title: "Query",
        children: [
            {
                key: "page",
                dataType: "String",
                description: "Number of Pages",
                required: false,
            }, 
            {
                key: "perPage",
                dataType: "String",
                description: "Number of Accounts to be returned per page",
                required: false,
            },
            {
                key: "startDate",
                dataType: "Date",
                description: "YY-MM-DD",
                required: false,
            },  
            {
                key: "EndDate",
                dataType: "Date",
                description: "YY-MM-DD",
                required: false,
            },                   
        ],
    }
]

export const updateBeneficiaryAccountApi = [
    {
        title: "Body",
        children: [
            {
                key: "beneficiary_account",
                dataType: "String",
                description: "10 digit valid NUBAN account number",
                required: true,
            },
            {
                key: "virtual_account_number",
                dataType: "String",
                description: "The Virtual account number whose beneficiary account is to be updated",
                required: true,
            },                     
        ],
    }
]

export const updateBeneficiaryAccountResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Sheena",
                "last_name": "Grace",
                "virtual_account_number": "3832649897",
                "beneficiary_account": "1234567890",
                "customer_identifier": "2086601683696"
            }
        }`
    },
     {
        status: "400:Bad Request",
        responseMsg: "Bad Request",
        pill: colors?.orangeColor,
        code: `{
            "status": 400,
            "success": false,
            "message": "\"virtual_account_number\" is required",
            "data": {}
        }`
    },
     {
        status: "401:Unauthorized",
        responseMsg: "No/Invalid API Key",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
]

export const simulatePaymentApi = [
    {
        title: "Header",
        children: [
            {
                key: "content-type",
                dataType: "String",
                description: "application/json",
                required: true,
            },
            {
                key: "Authorization",
                dataType: "String",
                description: "Private Key or Secret Key (Gotten from your dashboard)",
                required: true,
            },                     
        ],
    },
    {
        title: "Body",
        children: [
            {
                key: "virtual_account_number",
                dataType: "String",
                description: "Virtual Account number of customer that wants to make payment.",
                required: true,
            },
            {
                key: "amount",
                dataType: "String",
                description: "Simulated Amount",
                required: true,
            },                     
        ],
    }
]

export const simulatePaymentResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        pill: colors?.greenColor,
        code: `{
            "success": true,
            "message": "Success",
            "data": {}
        }`
    },
]


//Encryption & Decryption 

export const javascriptData = [
    {
        language: "Javascript",
        headerOne: "Encryption",
        headerTwo: "Decryption",
        codeOne: ` let key = crypto.createHash('sha256').update(String(merchant_secret_key)).digest('base64').substr(0, 32);
                let IV = crypto.createHash('sha256').update(String(merchant_public_key)).digest('base64').substr(0, 16);
                const cipher = crypto.createCipheriv('aes256', key, IV);
                let encrypted = cipher.update(JSON.stringify(body), 'utf8', 'base64');
                return encrypted += cipher.final('base64');
                `,
        codeTwo: ` let key = crypto.createHash('sha256').update(String(merchant_secret_key)).digest('base64').substr(0, 32);
                let IV = crypto.createHash('sha256').update(String(merchant_public_key)).digest('base64').substr(0, 16);
                const decipher = crypto.createDecipheriv('aes256', key, IV);
                let decrypted = decipher.update(body, 'base64', 'utf8');
                decrypted += decipher.final('utf8');
                return JSON.parse(decrypted);`
    },
]

export const pythonData = [
    {
        language: "Python",
        codeOne: `from Crypto.Cipher import AES
                import base64
                import hashlib


                def _pad(s): return s + (AES.block_size - len(s) % AES.block_size) * chr(AES.block_size - len(s) % AES.block_size) 
                def _cipher():
                    key = hashlib.md5(merchant_secret_key).hexdigest() # 32 character hexadecimal
                    iv = hashlib.md5(merchant_public_key).digest() # 16 byte binary
                    return AES.new(key=key, mode=AES.MODE_CBC, IV=iv)

                def encrypt_token(data):
                    return _cipher().encrypt(_pad(data))
                    
                def decrypt_token(data):
                    return _cipher().decrypt(data)

                if __name__ == '__main__':
                    print('Python encrypt: ' + base64.b64encode(encrypt_token('dmyz.org')))
                    print('Python decrypt: ' + decrypt_token(base64.b64decode('FSfhJ/gk3iEJOPVLyFVc2Q==')))`
    },
]

export const phpData = [
    {
        language: "PHP",
        codeOne: ` <?php

            class AES
            {
                
                function encryptToken($data, $merchant_secret_key, $merchant_public_key)
                {
                    $key = substr(hash('sha256', $merchant_secret_key, true), 0, 32);
                    $iv = substr(hash('sha256', $merchant_public_key, true), 0, 16);
                    // use openssl:
                    return openssl_encrypt($data, 'aes256', $key, OPENSSL_RAW_DATA, $iv);
                }

                function decryptToken($data, $merchant_secret_key, $merchant_public_key)
                {
                    $key = substr(hash('sha256', $merchant_secret_key, true), 0, 32);
                $iv = substr(hash('sha256', $merchant_public_key, true), 0, 16);
                    // use openssl:
                    return openssl_decrypt(base64_decode($data), 'aes256', $key, OPENSSL_RAW_DATA, $iv);
                
                }
            }

            $aes = new AES();
            $arr = array(
            'transaction_reference'=>'49test_1',
            'virtual_account_number'=>'4899284992',
            'principal_amount'=> '2350.00',
            'settled_amount'=> '2338.25',
            'fee_charged'=> '11.75',
            'transaction_date'=> '2022-02-19T00:00:00.000Z',
            'customer_identifier'=> '10A2',
            'transaction_indicator'=> 'C',
            'remarks'=> 'Payment from 10A2 to 4899284992',
            'currency'=> 'NGN',
            'channel'=> 'virtual-account'
            );

            echo ('PHP encrypt: '.base64_encode($aes->encryptToken(json_encode($arr), 'staging_sk_sample-secret-key-1', 'staging_pk_sample-public-key-1')))."\n";
            echo ('PHP decrypt: '.$aes->decryptToken('Ajc/9TOSwbz1lTReb7BTo4XjL7bzJ0GWIxuncvSXfK83ZsYFt4bOt5+QQRz0jFFNSf6+7Axuqp91rR7aD/YwYczQQgUM+7QrK7nTw1KJbwTvPSSk3/IEektOlUx7DK7uXHlBBN9eVmn8tfDLKrsgj7zhymQhCfCoUTcDou3UyYWbKitwGH0o2X3hZo7cVqqq6Khnb12EwlK2kVhZvAjnu5g+T7erI1+RSb3jjab0MguWO6I3oXs9OGsiQKmCqZn564/q3ojArjk5OR8r3jBFgH4d96FoXS536rS8Toh5KPIVSGUjXLthcsWdgQ2VNzqBJ2iktzftFNgQRMdxQFCpaE0JwTKVkAyX0n3JDXt7DC+cTY+cHvAHRtl0zYhhrqT0WX4x95h+/WCdT27FEIJJJqJPBPHS1VAXwPS/v5sPGqdkqgFngTrYPaExk3YWoTxhonzT2tkagsGCaDuk8eptSA==', 'staging_sk_sample-secret-key-1', 'staging_pk_sample-public-key-1'))."\n";

            ?>
                `
    },
]

export const cSharpData = [
    {
        language: "C#",
        codeOne: `using System;  
                using System.IO;  
                using System.Security.Cryptography;  
                class ManagedAesSample {  
                    public static void Main() {  
                        Console.WriteLine("Enter text that needs to be encrypted..");  
                        string data = Console.ReadLine();  
                        EncryptAesManaged(data);  
                        Console.ReadLine();  
                    }  
                    static void EncryptAesManaged(string raw) {  
                        try {  
                            // Create Aes that generates a new key and initialization vector (IV).    
                            // Same key must be used in encryption and decryption    
                            using(AesManaged aes = new AesManaged()) {  
                                // Encrypt string    
                                byte[] encrypted = Encrypt(raw, aes.Key, aes.IV);  
                                // Print encrypted string    
                                Console.WriteLine($ "Encrypted data: {System.Text.Encoding.UTF8.GetString(encrypted)}");  
                                // Decrypt the bytes to a string.    
                                string decrypted = Decrypt(encrypted, aes.Key, aes.IV);  
                                // Print decrypted string. It should be same as raw data    
                                Console.WriteLine($ "Decrypted data: {decrypted}");  
                            }  
                        } catch (Exception exp) {  
                            Console.WriteLine(exp.Message);  
                        }  
                        Console.ReadKey();  
                    }  
                    static byte[] Encrypt(string plainText, byte[] Key, byte[] IV) {  
                        byte[] encrypted;  
                        // Create a new AesManaged.    
                        using(AesManaged aes = new AesManaged()) {  
                            // Create encryptor    
                            ICryptoTransform encryptor = aes.CreateEncryptor(Key, IV);  
                            // Create MemoryStream    
                            using(MemoryStream ms = new MemoryStream()) {  
                                // Create crypto stream using the CryptoStream class. This class is the key to encryption    
                                // and encrypts and decrypts data from any given stream. In this case, we will pass a memory stream    
                                // to encrypt    
                                using(CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write)) {  
                                    // Create StreamWriter and write data to a stream    
                                    using(StreamWriter sw = new StreamWriter(cs))  
                                    sw.Write(plainText);  
                                    encrypted = ms.ToArray();  
                                }  
                            }  
                        }  
                        // Return encrypted data    
                        return encrypted;  
                    }  
                    static string Decrypt(byte[] cipherText, byte[] Key, byte[] IV) {  
                        string plaintext = null;  
                        // Create AesManaged    
                        using(AesManaged aes = new AesManaged()) {  
                            // Create a decryptor    
                            ICryptoTransform decryptor = aes.CreateDecryptor(Key, IV);  
                            // Create the streams used for decryption.    
                            using(MemoryStream ms = new MemoryStream(cipherText)) {  
                                // Create crypto stream    
                                using(CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read)) {  
                                    // Read crypto stream    
                                    using(StreamReader reader = new StreamReader(cs))  
                                    plaintext = reader.ReadToEnd();  
                                }  
                            }  
                        }  
                        return plaintext;  
                    }  
                }  `
    },
]

//Dynamic Virtual Account

export const createDynamicVAAccountsResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {}
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const getPoolCountResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count_dynamic_virtual_account": 8
            }
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API Keys",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const initiateDynamicVATransactionApi = [
    {
        title: "Body",
        children: [
            {
                key: "amount",
                dataType: "Integer",
                description: "Amount is in Kobo",
                required: true,
            },
            {
                key: "duration",
                dataType: "Integer",
                description: "Time allowed before an account/transaction is expired. Duration is in seconds. i.e duration:60 = 1 minute",
                required: true,
            }, 
            {
                key: "email",
                dataType: "string",
                description: "a valid email address for notification to customer",
                required: true,
            },{
                key: "transaction_ref",
                dataType: "string",
                description: "Unique transaction Reference that identifies the transaction on your system",
                required: true,
            },                    
        ],
    }
]

export const initiateDynamicVATransactionResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "is_blocked": false,
                "account_name": "SQUAD CHECKOUT",
                "account_number": "4879261135",
                "expected_amount": "100.00",
                "expires_at": "2023-08-08T08:23:27.791Z",
                "transaction_reference": "dva123",
                "bank": "GTBank",
                "currency": "NGN"
            }
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
        {
        status: "403:Forbidden",
        responseMsg: "Wrong/Invalid API Keys",
        pill: colors?.greenColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const reQueryTransactionApi = [
    {
        title: "Path",
        children: [
            {
                key: "transaction_reference",
                dataType: "String",
                description: "Merchant's transaction reference passed when initiating / generating the dynamic virtual account.",
                required: true,
            },                  
        ],
    }
]

export const reQueryTransactionResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count": 3,
                "rows": [
                    {
                        "transaction_status": "EXPIRED",
                        "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                        "created_at": "2023-08-08T07:02:59.672Z",
                        "refund": false
                    },
                    {
                        "transaction_status": "SUCCESS",
                        "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                        "created_at": "2023-08-08T07:02:54.052Z",
                        "refund": null
                    },
                    {
                        "transaction_status": "MISMATCH",
                        "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                        "created_at": "2023-08-08T07:02:29.392Z",
                        "refund": false
                    }
                ]
            }
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
        {
        status: "403:Forbidden",
        responseMsg: "Wrong/Invalid API Keys",
        pill: colors?.greenColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

 export const editAmountOrDurationApi = [
    {
        title: "Body",
        children: [
            {
                key: "transaction_reference",
                dataType: "String",
                description: "The transaction ref of the already initiated transaction.",
                required: true,
            },  
            {
                key: "amount",
                dataType: "Integer",
                description: "Amount is in Kobo",
                required: false,
            }, 
            {
                key: "duration",
                dataType: "Integer",
                description: "Amount of time before transaction expires. Duration is in seconds.",
                required: false,
            },                 
        ],
    }
]

export const editAmountOrDurationResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "account_number": "0852491446",
                "currency": "NGN",
                "amount": 5000,
                "expires_at": "2023-08-30T17:01:46.973Z",
                "transaction_reference": "ify21"
            }
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Wrong/Invalid API Keys",
        pill: colors?.greenColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
    {
        status: "404:Not Found",
        responseMsg: "Invalid Transaction Ref",
        pill: colors?.greenColor,
        code: `{
            "status": 404,
            "success": false,
            "message": "Transaction not found",
            "data": {}
        }`
    },
]

 export const simulatePaymentEndpointApi = [
    {
        title: "Body",
        children: [
            {
                key: "virtual_account_number",
                dataType: "String",
                description: "10-digit Dynamic Account gotten after initiating a virtual transfer. ",
                required: true,
            },  
            {
                key: "amount",
                dataType: "String",
                description: "Amount is in naira. This is the expected amount to be transferred into the dynamic virtual account.",
                required: true,
            }, 
            {
                key: "dva",
                dataType: "boolean",
                description: "true",
                required: true,
            },                 
        ],
    }
]

export const simulatePaymentEndpointResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": "Payment successful"
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "No Authorization",
        pill: colors?.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Wrong/Invalid API Keys",
        pill: colors?.greenColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    }
]

