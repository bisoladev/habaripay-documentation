const greenColor = "bg-[#217837]";
const orangeColor = "bg-[#A94A09]";

const array = [1, 1, 2, 3]

export const paymentLinkAPI = [
    {
        title: "Header",
        children: [
            {
                key: "transaction_ref1",
                dataType: "String",
                description: "Title/Name of the Payment Link",
                required: true,
            },
        ],
    },
    {
        title: "Body",
        children: [
            {
                key: "transaction_ref2",
                dataType: "String",
                description: "Title/Name of the Payment Link",
                required: true,
            },
            {
                key: "transaction_ref3",
                dataType: "String",
                description: "Title/Name of the Payment Link",
                required: true
            },
            {
                key: "transaction_ref4",
                dataType: "String",
                description: "Title/Name of the Payment Link",
                required: true
            }
        ],
    }
]


export const paymentLinkResponse = [
    {
        status: "400:Bad Request",
        responseMsg: "Successful",
        pill: orangeColor,
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
        pill: greenColor,
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


