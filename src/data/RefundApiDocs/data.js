const greenColor = "bg-[#217837]";
const orangeColor = "bg-[#A94A09]";


export const refundAPI = [
    {
        title: "Body",
        children: [
            {
                key: "gateway_transaction_ref",
                dataType: "String",
                description: "Unique reference that uniquely identifies the medium of payment and can be obtained from  the webhook notification sent to you.",
                required: true,
            },
            {
                key: "transaction_ref",
                dataType: "String",
                description: "unique reference that identifies a transaction. Can be obtained from the dashboard or the webhook notification sent to you",
                required: true
            },
            {
                key: "refund_type",
                dataType: "String",
                description: "The value of this parameter is either 'Full' or 'Partial'",
                required: true
            },
            {
                key: "reason_for_refund",
                dataType: "String",
                description: "Reason for initiating the refund",
                required: true
            },
            {
                key: "refund_amount",
                dataType: "String",
                description: "Refund amount is in kobo or cent. This is only required for 'Partial' refunds",
                required: false
            },
        ],
    }
]


export const refundResponse = [
    {
        status: "200:OK",
        responseMsg: "Success",
        pill: greenColor,
        code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "gateway_refund_status": "pending",
                "refund_status": 2,
                "refund_reference": "REFUND-SQOKOY1708696818297_1_1"
            }
        }`
    },
    {
        status: "401:Unathorized",
        responseMsg: "No API Key",
        pill: orangeColor,
        code: `{
            "success": false,
            "message": "",
            "data": {}
        }`
    },
]


