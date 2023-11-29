import {colors} from "../constants"


const squadPaymentData = [];
const verifyTransactionData = [];

export const sampleRequest = {
    "amount": 43000,
    "email": "henimastic@gmail.com",
    "currency": "NGN",
    "initiate_type": "inline",
    "transaction_ref": "4678388588350909090AH",
    "callback_url": "http://squadco.com"
}

export const initiatePaymentApi = [
    {
        title: "Header",
        children: [
            {
                key: "Authorization",
                dataType: "String",
                description: "API keys (Secret Key) that authorize your transactions and gotten from your squad dashboard",
                required: true,
            },
        ],
    },
    {
        title: "Body",
        children: [
            {
                key: "email",
                dataType: "String",
                description: "Customer's email address.",
                required: true,
            },
            {
                key: "amount",
                dataType: "String",
                description: "The amount you are debiting customer (expressed in the lowest currency value - kobo& cent). 10000 = 100NGN for Naira Transactions",
                required: true
            },
            {
                key: "initiate_type",
                dataType: "String",
                description: "This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",
                required: true
            },
            {
                key: "currency",
                dataType: "String",
                description: "The currency you want the amount to be charged in. Allowed value is either NGN or USD.",
                required: true
            },
            {
                key: "transaction_ref",
                dataType: "String",
                description: "This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",
                required: true
            },
            {
                key: "initiate_type",
                dataType: "String",
                description: "An alphanumeric string that uniquely identifies a transaction",
                required: false
            },
            {
                key: "customer_name",
                dataType: "String",
                description: "Name of Customer carrying out the transaction",
                required: false
            },
            {
                key: "callback_url",
                dataType: "String",
                description: "Sample: http://squadco.com",
                required: false
            },
            {
                key: "payment_channels",
                dataType: "Array",
                description: "An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; ['card', 'bank' , 'ussd','transfer']",
                required: false
            },
             {
                key: "metadata",
                dataType: "Object",
                description: "Object that contains any additional information that you want to record with the transaction. The custom fields in the object will be returned via webhook and the payment verification endpoint.",
                required: false
            },
            {
                key: "pass_charge",
                dataType: "Boolean",
                description: "It takes two possible values: True or False. It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer). But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.",
                required: false
            },{
                key: "callback_url",
                dataType: "String",
                description: "Sample: http://squadco.com",
                required: false
            },
        ],
    }
]

export const initiatePaymentResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        pill: colors?.greenColor,
        code: `{
    "status": 200,
    "message": "success",
    "data": {
        "auth_url": null,
        "access_token": null,
        "merchant_info": {
            "merchant_response": null,
            "merchant_name": null,
            "merchant_logo": null,
            "merchant_id": "SBN1EBZEQ8"
        },
        "currency": "NGN",
        "recurring": {
            "frequency": null,
            "duration": null,
            "type": 0,
            "plan_code": null,
            "customer_name": null
        },
        "is_recurring": false,
        "plan_code": null,
        "callback_url": "http://squadco.com",
        "transaction_ref": "4678388588350909090AH",
        "transaction_memo": null,
        "transaction_amount": 43000,
        "authorized_channels": [
            "card",
            "ussd",
            "bank"
        ],
        "checkout_url": "https://sandbox-pay.squadco.com/4678388588350909090AH"
    }
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "Invalid/No Authorization Key",
        pill: colors?.orangeColor,
        code: `{
            "status": 401,
            "message": "Initiate transaction Unauthorized",
            "data": null
        }`
    },
    {
        status: "400:Bad Request",
        responseMsg: "Bad Request",
        pill: colors?.orangeColor,
        code: `{
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "|8aec540f-493270cdd9661378.",
        "errors": {
            "email": [
                "The email field is required."
            ]
        }
    }`
    },
]

export const chargeCardApi = [
    {
        title: "Body",
        children: [
            {
                key: "amount",
                dataType: "Integer",
                description: "Amount to charge from card in the lowest currency value. kobo for NGN transactions or cent for USD transactions",
                required: true,
            },
            {
                key: "token_id",
                dataType: "String",
                description: "A unique tokenization code for each card transaction and it is returned via the webhook for first charge on the card.",
                required: true
            },
            {
                key: "transaction_ref",
                dataType: "String",
                description: "Unique case-sensitive transaction reference. If you do not pass this parameter, Squad will generate a unique reference for you.",
                required: false
            },
        ],
    }
]

export const chargeCardResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "transaction_amount": 0,
                "transaction_ref": null,
                "email": null,
                "transaction_status": null,
                "transaction_currency_id": null,
                "created_at": "0001-01-01T00:00:00",
                "transaction_type": null,
                "merchant_name": null,
                "merchant_business_name": null,
                "gateway_transaction_ref": null,
                "recurring": null,
                "merchant_email": null,
                "plan_code": null
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
            "message": "amount cannot be < 0",
            "data": {}
        }`
    },

]

export const verifyTransactionApi = [
    {
        title: "Query",
        children: [
            {
                key: "transaction_ref",
                dataType: "String",
                description: "Unique transaction reference that identifies each transaction",
                required: true,
            },

        ],
    }
]

export const verifyTransactionResponse = [
    {
        status: "200:OK",
        responseMsg: "Valid Transaction Reference",
        pill: colors?.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "transaction_amount": 5000,
                "transaction_ref": "SQCHIZ3634573076082",
                "email": "ayo@gmail.com",
                "transaction_status": "Success",
                "transaction_currency_id": "NGN",
                "created_at": "0001-01-01T00:00:00",
                "transaction_type": "VirtualAccount",
                "merchant_name": "CHIZOBA ANTHONY",
                "merchant_business_name": null,
                "gateway_transaction_ref": "SQCHIZ3634573076082",
                "recurring": null,
                "merchant_email": "okoyeanthonychizoba@gmail.com",
                "plan_code": null
            }
        }
`
    },
    {
        status: "400:Bad Request",
        responseMsg: "Invalid Transaction Reference",
        pill: colors?.orangeColor,
        code: `{
            "status": 400,
            "success": false,
            "message": "Invalid transaction reference",
            "data": {}
        }`
    },
    {
        status: "401:Unauthorized",
        responseMsg: "Unauthorized Request",
        pill: colors?.orangeColor,
        code: `//sending a request without an authorization key
            {
                "success": false,
                "message": "",
                "data": {}
            }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid API Key",
        pill: colors?.orangeColor,
        code: `//sending a request with an Invalid key
            {
                "success": false,
                "message": "API key is invalid. Key must start with sandbox_sk_",
                "data": {}
            }`
    },

]