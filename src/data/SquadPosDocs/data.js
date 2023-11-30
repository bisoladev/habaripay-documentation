import {colors} from "../constants"


export const getAllTransactionsAPI = [
    {
        title: "Query",
        children: [
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of transactions per page",
                required: true,
            },
            {
                key: "page",
                dataType: "Integer",
                description: "page number",
                required: true
            },
            {
                key: "date_from",
                dataType: "date",
                description: "Format : YYYY-MM-DD, Start Date",
                required: false
            },
            {
                key: "date_to",
                dataType: "date",
                description: "Format : YYYY-MM-DD, End Date",
                required: false
            },
            {
                key: "sort_by",
                dataType: "String",
                description: "Sorting Parameter. This can have a value of 'createdAt'",
                required: false
            },
            {
                key: "sort_by_dir",
                dataType: "String",
                description: "This arranges the transactions in ascending or descending order. Possible values are 'ASC' - ascending order, 'DESC' - descending order",
                required: false
            },
        ],
    }
]


export const getAllTransactionsResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count": 8,
                "rows": [
                    {
                        "id": "1",
                        "amount": "10000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "1",
                        "location_id": "1"
                    },
                    {
                        "id": "2",
                        "amount": "50000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "1",
                        "location_id": "1"
                    },
                    {
                        "id": "3",
                        "amount": "100000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "2",
                        "location_id": "2"
                    },
                    {
                        "id": "4",
                        "amount": "7000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "2",
                        "location_id": "2"
                    },
                    {
                        "id": "5",
                        "amount": "10000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "3",
                        "location_id": "2"
                    },
                    {
                        "id": "6",
                        "amount": "35000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "3",
                        "location_id": "2"
                    },
                    {
                        "id": "7",
                        "amount": "10000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "4",
                        "location_id": "3"
                    },
                    {
                        "id": "8",
                        "amount": "22000",
                        "status": 0,
                        "card": "5074 *** *** 2234",
                        "createdAt": "2021-12-08T15:05:10.316Z",
                        "updatedAt": "2021-12-08T15:05:10.316Z",
                        "deletedAt": null,
                        "merchant_id": "1",
                        "terminal_id": "4",
                        "location_id": "3"
                    }
                ]
            }
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No API key",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "404:Not Found",
        responseMsg: "Not Profiled for SquadPOS",
        pill: colors.orangeColor,
        code: `{
            "status": 404,
            "success": false,
            "message": "Merchant does not exist",
            "data": {}
        }`
    },
]

export const createTerminalAPI = [
    {
        title: "Header",
        children: [
            {
                key: "content-type",
                dataType: "String",
                description: "application/json",
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
                description: "unique email to be associated to the terminal being created",
                required: true,
            },
            {
                key: "name",
                dataType: "String",
                description: "Name to be associated to the terminal",
                required: true
            },
            {
                key: "phone",
                dataType: "String",
                description: "11 digit phone number to be associated to the terminal",
                required: true
            },
            {
                key: "location_id",
                dataType: "Integer",
                description: "unique ID that identifies a particular location",
                required: true
            },
        ],
    }
]


export const createTerminalResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "enabled": false,
                "id": "8",
                "name": "Sample name",
                "phone": "090123456789",
                "email": "Sample@email.com",
                "location_id": "1",
                "updatedAt": "2021-11-12T10:02:09.413Z",
                "createdAt": "2021-11-12T10:02:09.413Z",
                "deletedAt": null,
                "merchant_id": null
            }
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No API key",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "404:Not Found",
        responseMsg: "Not Profiled for SquadPOS",
        pill: colors.orangeColor,
        code: `{
            "status": 404,
            "success": false,
            "message": "Merchant does not exist",
            "data": {}
        }`
    },
]

export const getAllTerminalsAPI = [
    {
        title: "Query",
        children: [
            {
                key: "perPage",
                dataType: "Integer",
                description: "Number of results per page",
                required: true,
            },
            {
                key: "page",
                dataType: "Integer",
                description: "Page Number",
                required: true
            },
            {
                key: "location_id",
                dataType: "Integer",
                description: "an ID that identifies a location",
                required: false
            },
            {
                key: "sort_by",
                dataType: "String",
                description: "Sorting Parameter. This can have a value of 'createdAt'",
                required: false
            },
            {
                key: "sort_by_dir",
                dataType: "String",
                description: "This arranges the transactions in ascending or descending order. Possible values are 'ASC' - ascending order, 'DESC' - descending order",
                required: false
            },
            {
                key: "date_from",
                dataType: "date",
                description: "Format : YYYY-MM-DD, Start Date",
                required: false
            },
            {
                key: "date_to",
                dataType: "date",
                description: "Format : YYYY-MM-DD End Date",
                required: false
            },
            {
                key: "active",
                dataType: "Boolean",
                description: "It takes a value of 'True' or 'False'",
                required: false
            },
        ],
    }
]


export const getAllTerminalsResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count": 4,
                "rows": [
                    {
                        "id": "2",
                        "merchant_id": "1",
                        "name": "Terminal 2",
                        "email": "merchant1.terminal2@example.com",
                        "phone": "090123456789",
                        "registered": false,
                        "enabled": false,
                        "active": false,
                        "createdAt": "2021-11-20T16:11:21.570Z",
                        "updatedAt": "2021-11-20T16:11:21.570Z",
                        "deletedAt": null,
                        "location_id": "2",
                        "location": {
                            "id": "2",
                            "name": "Abuja",
                            "createdAt": "2021-11-20T16:11:21.410Z",
                            "updatedAt": "2021-11-20T16:11:21.410Z",
                            "deletedAt": null
                        }
                    },
                    {
                        "id": "3",
                        "merchant_id": "1",
                        "name": "Terminal 3",
                        "email": "merchant1.terminal3@example.com",
                        "phone": "090123456789",
                        "registered": false,
                        "enabled": false,
                        "active": false,
                        "createdAt": "2021-11-20T16:11:21.570Z",
                        "updatedAt": "2021-11-20T16:11:21.570Z",
                        "deletedAt": null,
                        "location_id": "2",
                        "location": {
                            "id": "2",
                            "name": "Abuja",
                            "createdAt": "2021-11-20T16:11:21.410Z",
                            "updatedAt": "2021-11-20T16:11:21.410Z",
                            "deletedAt": null
                        }
                    },
                    {
                        "id": "4",
                        "merchant_id": "1",
                        "name": "Terminal 4",
                        "email": "merchant1.terminal4@example.com",
                        "phone": "090123456789",
                        "registered": false,
                        "enabled": false,
                        "active": false,
                        "createdAt": "2021-11-20T16:11:21.570Z",
                        "updatedAt": "2021-11-20T16:11:21.570Z",
                        "deletedAt": null,
                        "location_id": "3",
                        "location": {
                            "id": "3",
                            "name": "Enugu",
                            "createdAt": "2021-11-20T16:11:21.410Z",
                            "updatedAt": "2021-11-20T16:11:21.410Z",
                            "deletedAt": null
                        }
                    },
                    {
                        "id": "1",
                        "merchant_id": "1",
                        "name": "Terminal 1",
                        "email": "merchant1.terminal1@example.com",
                        "phone": "090123456789",
                        "registered": false,
                        "enabled": false,
                        "active": true,
                        "createdAt": "2021-11-20T16:11:21.570Z",
                        "updatedAt": "2021-11-20T16:24:29.624Z",
                        "deletedAt": null,
                        "location_id": "1",
                        "location": {
                            "id": "1",
                            "name": "Lagos",
                            "createdAt": "2021-11-20T16:11:21.410Z",
                            "updatedAt": "2021-11-20T16:11:21.410Z",
                            "deletedAt": null
                        }
                    }
                ]
            }
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No API key",
        pill: colors.orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
    {
        status: "404:Not Found",
        responseMsg: "Not Profiled",
        pill: colors.orangeColor,
        code: `{
            "status": 404,
            "success": false,
            "message": "Merchant does not exist",
            "data": {}
        }`
    },
]