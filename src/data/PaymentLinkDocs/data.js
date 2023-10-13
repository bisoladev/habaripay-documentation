export const paymentLinkAPI = [
    {
        key: "1",
        dataType: "String",
        description: "Title/Name of the Payment Link",
        required: true,
        active: 0
    },
    {
        key: "2",
        dataType: "String",
        description: "Title/Name of the Payment Link",
        required: true
    },
    {
        key: "3",
        dataType: "String",
        description: "Title/Name of the Payment Link",
        required: true
    },
    {
        key: "4",
        dataType: "String",
        description: "URL to be redirected to after payment. When this is not provided, the default redirect URL set on your dashboard will be used",
        required: true
    },
    {
        key: "5",
        dataType: "String",
        description: "Title/Name of the Payment Link",
        required: true
    },
]


export const paymentLinkResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        Badge: "green",
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
        status: "200:OK",
        responseMsg: "Successful",
        Badge: "green",
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
]

