import {colors} from "../constants"


export const vendAirtimeAPI = [
    {
        title: "Body",
        children: [
            {
                key: "phone_number",
                dataType: "String",
                description: "11 digit phone number. Format: : '08139011943'",
                required: true,
            },
            {
                key: "amount",
                dataType: "Integer",
                description: "Amount is in Naira.",
                required: true
            },
        ],
    }
]


export const vendAirtimeResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "reference": "app_08139011943_5000_1690387362399", 
                "amount": "5000.00", 
                "merchant_amount": "4900.00", 
                "phone_number": "08139011943", 
                "merchant_id": "T6AGJQEY", 
                "wallet_batch_id": "20230726160242715_490000_T6AGJQEY_AIRTIME_NGN", 
                "transaction_id": "app_08139011943_5000_1690387362399", 
                "type": "airtime", 
                "action": "debit", 
                "status": "pending", 
                "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690387362399\",\"network\":\"MTN\"}", 
                "createdAt": "2023-07-26T16:02:43.341Z" 
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

export const vendDataBundlesAPI = [
    {
        title: "Body",
        children: [
            {
                key: "phone_number",
                dataType: "String",
                description: "11 digit phone number. Format: : '08139011943'",
                required: true,
            },
            {
                key: "plan_code",
                dataType: "String",
                description: "The plan code is gotten from the Get Plan Code endpoint and usually in the format: '1001'",
                required: true
            },
        ],
    }
]


export const vendDataBundlesResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "reference": "app_7062918558_100_1001_1679914203047", 
                "amount": "100.00", 
                "merchant_amount": "98.00", 
                "phone_number": "+2347062918558", 
                "merchant_id": "AABBCCDDEEFFGGHHJJKK", 
                "wallet_batch_id": "BC8BE65JWG44ZW7AN9KG", 
                "transaction_id": "edf867fa-8ad6-4eac-bd87-6e5f8ec9b945", 
                "type": "data", 
                "action": "debit", 
                "status": "success", 
                "meta": "{\"vending_status\":\"success\",\"status_code\":\"200\",\"message\":\"successfully submitted for processing\",\"phonenumber\":\"07062918558\",\"transaction_id\":\"edf867fa-8ad6-4eac-bd87-6e5f8ec9b945\",\"network\":\"MTN\"}", 
                "createdAt": "2023-03-27T10:50:04.073Z" 
            } 
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No Authorization keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Invalid/Wrong Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const getDataBundlesAPI = [
    {
        title: "Query",
        children: [
            {
                key: "network",
                dataType: "String",
                description: "Teleco ID: MTN, GLO, AIRTEL, 9MOBILE",
                required: true,
            },
        ],
    }
]


export const getDataBundlesResponse = [
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
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "100MB ", 
                    "bundle_validity": " Daily Plan", 
                    "bundle_description": " Daily Plan", 
                    "bundle_price": "100", 
                    "plan_code": "1001", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "200MB", 
                    "bundle_validity": " 2-day Plan", 
                    "bundle_description": " 2-day Plan", 
                    "bundle_price": "200", 
                    "plan_code": "1002", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "350MB", 
                    "bundle_validity": " Weekly Plan", 
                    "bundle_description": " Weekly Plan", 
                    "bundle_price": "300", 
                    "plan_code": "1003", 
                    "network": "MTN" 
                }, 
                { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "750MB", 
                    "bundle_validity": " 2-Week plan", 
                    "bundle_description": " 2-Week plan", 
                    "bundle_price": "500", 
                    "plan_code": "1004", 
                    "network": "MTN" 
                }, 
                        { 
                    "plan_name": "MTN data_plan", 
                    "bundle_value": "1500GB", 
                    "bundle_validity": "365 days", 
                    "bundle_description": "365 days", 
                    "bundle_price": "450000", 
                    "plan_code": "1111", 
                    "network": "MTN" 
                } 
            ] 
        } `
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
        responseMsg: "Invalid/Wrong Keys",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]

export const getAllTransactionsAPI = [
    {
        title: "Query",
        children: [
            {
                key: "page",
                dataType: "Integer",
                description: "The page of the transaction you want to view",
                required: false,
            },
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of transaction you want to view per page",
                required: false,
            },
            {
                key: "action",
                dataType: "string",
                description: "The type of transaction you want to see: 'debit'",
                required: false,
            },
        ],
    }
]


export const getAllTransactionsResponse = [
    {
        status: "200:OK",
        responseMsg: "Response description",
        pill: colors.greenColor,
        code: `{ 
            "status": 200, 
            "success": true, 
            "message": "Success", 
            "data": { 
                "count": 5, 
                "rows": [ 
                    { 
                        "reference": "app_08139011943_5000_1690387362399", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726160242715_490000_T6AGJQEY_AIRTIME_NGN", 
                        "transaction_id": "app_08139011943_5000_1690387362399", 
                        "type": "airtime", 
                        "action": "debit", 
                        "status": "pending", 
                        "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690387362399\",\"network\":\"MTN\"}", 
                        "createdAt": "2023-07-26T16:02:43.341Z" 
                    }, 
                    { 
                        "reference": "app_08132448598_500_1001_1690387247434", 
                        "amount": "500.00", 
                        "merchant_amount": "490.00", 
                        "phone_number": "08132448598", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726160047736_49000_T6AGJQEY_DATA__NGN", 
                        "transaction_id": null, 
                        "type": "data", 
                        "action": "debit", 
                        "status": "failed", 
                        "meta": null, 
                        "createdAt": "2023-07-26T16:00:48.212Z" 
                    }, 
                    { 
                        "reference": "app_08139011943_5000_1001_1690387152681", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726155914250_490000_T6AGJQEY_DATA__NGN", 
                        "transaction_id": null, 
                        "type": "data", 
                        "action": "debit", 
                        "status": "failed", 
                        "meta": null, 
                        "createdAt": "2023-07-26T15:59:15.602Z" 
                    }, 
                    { 
                        "reference": "app_08139011943_5000_1690363943917", 
                        "amount": "5000.00", 
                        "merchant_amount": "4900.00", 
                        "phone_number": "08139011943", 
                        "merchant_id": "T6AGJQEY", 
                        "wallet_batch_id": "20230726093224159_490000_T6AGJQEY_AIRTIME_NGN", 
                        "transaction_id": "app_08139011943_5000_1690363943917", 
                        "type": "airtime", 
                        "action": "debit", 
                        "status": "pending", 
                        "meta": "{\"vending_status\":\"pending\",\"status_code\":\"301\",\"message\":\"pending confirmation\",\"phonenumber\":\"08139011943\",\"transaction_id\":\"app_08139011943_5000_1690363943917\",\"network\":\"MTN\"}", 
                        "createdAt": "2023-07-26T09:32:24.638Z" 
                    } 
                ] 
            } 
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "Response description",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "403:Forbidden",
        responseMsg: "Response description",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
        }`
    },
]


