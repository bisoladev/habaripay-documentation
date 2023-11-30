const greenColor = "bg-[#217837]";
const orangeColor = "bg-[#A94A09]";


export const paymentLinkAPI = [
    {
        title: "Body",
        children: [
            {
                key: "name",
                dataType: "String",
                description: "Title/Name of the Payment Link",
                required: true,
            },
            {
                key: "hash",
                dataType: "String",
                description: "Unique string that identifies each payment Link (cannot exceed 255 characters)",
                required: true
            },
            {
                key: "link_status",
                dataType: "Integer",
                description: "Value can be 0 or 1. 1 - Active, 0 - Inactive",
                required: true
            },
            {
                key: "expire_by",
                dataType: "String",
                description: "sample: 2021-04-26T11:22:08.587Z",
                required: true
            },
            {
                key: "amount",
                dataType: "Integer",
                description: "Amount must be in the lowest currency. (kobo for Naira transactions and cent for Dollar transaction) i.e 40000 = 400NGN",
                required: true
            },
            {
                key: "currency_id",
                dataType: "String",
                description: "USD or NGN (USD - US Dollars & NGN - Nigerian Naira)",
                required: true
            },
            {
                key: "description",
                dataType: "String",
                description: "This describes what the payment link does",
                required: true
            },
            {
                key: "redirect_link",
                dataType: "String",
                description: "URL to be redirected to after payment. When this is not provided, the default redirect URL set on your dashboard will be used",
                required: false
            },
            {
                key: "return_msg",
                dataType: "String",
                description: "Message to be displayed to the customer after payment via the link",
                required: false
            },
        ],
    }
]


export const paymentLinkResponse = [
    {
        status: "200:OK",
        responseMsg: "Successful",
        pill: greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "name": "Demo Otp Link",
                "link_type": "otp",
                "hash": "mypaymentlink",
                "description": "My description",
                "currencies": null,
                "redirect_link": "https://squadco.com",
                "return_msg": "Successful",
                "support_email": null,
                "support_phone": null,
                "terms_condition": null,
                "return_policy": null,
                "pickup_location": null,
                "expire_by": "2021-04-26T11:22:08.587Z",
                "merchant_id": "SBN1EBZEQ8",
                "link_status": 0,
                "extra": null,
                "createdAt": "2022-08-08T09:24:41.269Z",
                "updatedAt": "2022-08-08T09:24:41.269Z",
                "archivedAt": null,
                "image_id": null,
                "image": null,
                "amounts": [
                    {
                        "amount": 4000,
                        "currency_id": "NGN"
                    }
                ]
            }
        }`
    },
    {
        status: "400:Bad Request",
        responseMsg: "Bad Request",
        pill: orangeColor,
        code: `{
            "status": 400,
            "success": false,
            "message": "Custom link already taken",
            "data": {}
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "Unathorized",
        pill: orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
]


