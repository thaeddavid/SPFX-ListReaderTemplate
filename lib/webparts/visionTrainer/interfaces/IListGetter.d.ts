import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { IListItem } from './IListItems';
export interface IListGetter {
    context: IWebPartContext;
    getListItems: Promise<IListItem>;
}
