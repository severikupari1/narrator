import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            otsikko: data.otsikko,
            tekstiselite: data.tekstiselite,
            kuvaUrl: data.kuvaUrl,
            kategoria: data.kategoria,
            isFavorite: data.isFavorite,
            countti: data.countti,
            createdAt: Date.now()
        }
    };

    try {
        await dynamoDbLib.call("put", params);
        callback(null, success(params.Item));
    } catch (e) {
        callback(null, failure({ status: false }));
    }
}