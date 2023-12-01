import {colors} from "../constants"


export const accountLookupAPI = [
    {
        title: "Body",
        children: [
            {
                key: "bank_code",
                dataType: "String",
                description: "Unique NIP code that identifies a bank. ",
                required: true,
            },
            {
                key: "account_number",
                dataType: "String",
                description: "Account number you want to transfer to",
                required: true
            }
        ],
    }
]


export const accountLookupResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "account_name": "JENNY SQUAD",
                "account_number": "0123456789"
            }
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No Authorization",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const errorCodeAPI = [
    {
        title: "Body",
        children: [
            {
                key: "transaction_reference",
                dataType: "String",
                description: "Unique Transaction Reference used to initiate a transfer. Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.",
                required: true,
            },
            {
                key: "amount",
                dataType: "String",
                description: "Amount to be transferred. Value is in Kobo.",
                required: true
            },
            {
                key: "bank_code",
                dataType: "String",
                description: "Unique NIP Code that identifies a bank. ",
                required: true
            },
            {
                key: "account_number",
                dataType: "String",
                description: "10-digit NUBAN account number to be transferred to. Must be an account that has been looked up and vetted to be transferred to.",
                required: true
            },
            {
                key: "account_name",
                dataType: "String",
                description: "The account name tied to the account number you are transferring to which you have looked up using our look up API.",
                required: true
            },
            {
                key: "currency_id",
                dataType: "String",
                description: "Takes only the value 'NGN'",
                required: true
            },
            {
                key: "remark",
                dataType: "String",
                description: "A unique remark that will be sent with the transfer.",
                required: true
            },
            
        ],
    }
]


export const errorCodeResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
    },
    {
        status: "401:Unathorized",
        responseMsg: "No Authorization",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const reQueryTransferAPI = [
    {
        title: "Body",
        children: [
            {
                key: "transaction_reference",
                dataType: "String",
                description: "Unique Transaction Reference used to initiate a transfer. Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.",
                required: true,
            },
        ],
    }
]


export const reQueryTransferResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
    },
    {
        status: "401:Unathorized",
        responseMsg: "No Authorization",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const allTransfersAPI = [
    {
        title: "Body",
        children: [
            {
                key: "page",
                dataType: "Integer",
                description: "Number of Pages",
                required: false,
            },
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of records per page",
                required: false
            },
            {
                key: "dir",
                dataType: "String",
                description: "Allows you sort the records in either ascending or descending order. It takes the value 'ASC' or 'DESC'",
                required: false
            }
        ],
    }
]


export const allTransfersResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": [
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "2000",
                    "total_amount_debited": "3000",
                    "success": true,
                    "recipient": "Dummy Dummy",
                    "bank_code": "058",
                    "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",
                    "transaction_status": "success",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "2000",
                    "total_amount_debited": "2500",
                    "success": true,
                    "recipient": "Dummy Dummy",
                    "bank_code": "058",
                    "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",
                    "transaction_status": "success",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "4000",
                    "total_amount_debited": "4500",
                    "success": true,
                    "recipient": "Dummy Dummy",
                    "bank_code": "058",
                    "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",
                    "transaction_status": "success",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "300000",
                    "total_amount_debited": "300000",
                    "success": false,
                    "recipient": "Tee Fifi",
                    "bank_code": "058",
                    "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",
                    "transaction_status": "pending",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "300000",
                    "total_amount_debited": "300000",
                    "success": false,
                    "recipient": "Tee Fifi",
                    "bank_code": "058",
                    "transaction_reference": "optional-sample-unique-id",
                    "transaction_status": "pending",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "300000",
                    "total_amount_debited": "300000",
                    "success": true,
                    "recipient": "Hay Stack",
                    "bank_code": "058",
                    "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",
                    "transaction_status": "success",
                    "switch_transaction": null
                },
                {
                    "account_number_credited": "0254896325",
                    "amount_debited": "300000",
                    "total_amount_debited": "300000",
                    "success": true,
                    "recipient": "Jenny Squad",
                    "bank_code": "058",
                    "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",
                    "transaction_status": "success",
                    "switch_transaction": null
                }
            ]
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No Authorization",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
     {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong API Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

