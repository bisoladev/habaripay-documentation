import {colors} from "../constants"


export const getAllDisputesResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: colors.greenColor,
        code: `{ // Response 
} 
            `
    },
    {
        status: "401:Unathorized",
        responseMsg: "No API Key",
        pill: colors.orangeColor,
        code: `{ // Response 
}
            `
    },
]

export const getUploadUrlAPI = [
    {
        title: "Path",
        children: [
            {
                key: "ticket_id",
                dataType: "String",
                description: "",
                required: true,
            },
            {
                key: "file_name",
                dataType: "String",
                description: "",
                required: true,
            }
        ],
    }
]

export const resolveDisputesAPI = [
    {
        title: "Path",
        children: [
            {
                key: "ticket_id",
                dataType: "String",
                description: "A unique ID that identifies the dispute you want to reject or accept",
                required: true,
            },
        ],
    },
    {
        title: "Body",
        children: [
            {
                key: "action",
                dataType: "String",
                description: "This is the action you want to be taken on the raised dispute. The value of this action can be either 'rejected' or 'accepted'",
                required: true,
            },
            {
                key: "file_name",
                dataType: "String",
                description: "The name of the file uploaded",
                required: false,
            },
        ],
    }
]


