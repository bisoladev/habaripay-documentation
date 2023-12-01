import {colors} from "../constants"


export const walletAPI = [
    {
        title: "Query",
        children: [
            {
                key: "currency_id",
                dataType: "String",
                description: "It only takes the value 'NGN'. (Please note that you can't get wallet balance for Dollar transactions)",
                required: true,
            }
        ],
    }
]


export const walletResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "balance": "2367013",
                "currency_id": "NGN",
                "merchant_id": "SBN1EBZEQ8"
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