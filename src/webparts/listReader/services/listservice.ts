import { ServiceScope, ServiceKey } from "@microsoft/sp-core-library";
import { SPHttpClient } from "@microsoft/sp-http";

/**
 * The List service contract
 */
export interface IListService {
    getListData(lID, wUrl): Promise<IListData>;
}

export interface IListData {
    Title: string;
    ItemsCount: number;
    lID: string;
    wUrl: string;
}

const SERVICE_KEY_TOKEN = "ListService";

export class ListService implements IListService {

    constructor(private serviceScope: ServiceScope) {}

    public getListData(lID, wUrl): Promise<IListData> {
        const apiUrl = `${wUrl}/_api/web/lists(guid'${lID}')?$select=Title,ItemCount`;
        const client = this.serviceScope.consume(SPHttpClient.serviceKey);
        return client.get(apiUrl, SPHttpClient.configurations.v1)
        .then(r => r.json())
        .then(r => ({
            Title: r.Title,
            ItemsCount: r.ItemCount
        } as IListData));
    }

    public static serviceKey: ServiceKey<IListService> = ServiceKey.create(SERVICE_KEY_TOKEN, ListService);
}