export const WebhookValidationApi = [
    {
        title: "Header",
        children: [
            {
                key: "x-squad-encrypted-body",
                dataType: "Hash",
                description: "This is the encrypted payload which serves as a test of truth for all transactions. This should be compared against the body sent via the webhook by encrypting the body of data and comparing the value with this value",
                required: true,
            },
            {
                key: "Content-type",
                dataType: "JSON",
                description: "application/json",
                required: true
            },
        ],
    }
]