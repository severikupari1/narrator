import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    let data = "";
    if (typeof event.body == "string") {
        data = JSON.parse(event.body);
    }
    else {
        data = event.body;
    }
    const params = {
        TableName: process.env.tableName,
        // 'Key' defines the partition key and sort key of the item to be updated
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'noteId': path parameter
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        },
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression: "SET kategoria = :kategoria, kuvaUrl = :kuvaUrl, otsikko = :otsikko, tekstiselite = :tekstiselite, isFavorite = :isFavorite, countti = :countti",
        ExpressionAttributeValues: {
            ":kategoria": data.kategoria ? data.kategoria : null,
            ":kuvaUrl": data.kuvaUrl ? data.kuvaUrl : null,
            ":otsikko": data.otsikko ? data.otsikko : null,
            ":tekstiselite": data.tekstiselite ? data.tekstiselite : null,
            ":countti": data.countti ? data.countti : null,
            ":isFavorite": data.isFavorite ? data.isFavorite : null,
        },
        ReturnValues: "ALL_NEW"
    };

    try {
        const result = await dynamoDbLib.call("update", params);
        callback(null, success({ status: true }));
    } catch (e) {
        callback(null, failure({ status: e }));
    }
}