import { ServiceScope, ServiceKey } from "@microsoft/sp-core-library";
/**
 * The List service contract
 */
export interface IListService {
    getListData(lID: any, wUrl: any): Promise<IListData>;
}
export interface IListData {
    Title: string;
    ItemsCount: number;
    lID: string;
    wUrl: string;
}
export declare class ListService implements IListService {
    private serviceScope;
    constructor(serviceScope: ServiceScope);
    getListData(lID: any, wUrl: any): Promise<IListData>;
    static serviceKey: ServiceKey<IListService>;
}
