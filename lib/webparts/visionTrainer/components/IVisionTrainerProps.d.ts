import { SPHttpClient } from '@microsoft/sp-http';
import { ServiceScope } from "@microsoft/sp-core-library";
export interface IListReaderProps {
    description: string;
    listID: string | string[];
    SPHttpClient: SPHttpClient;
    sScope: ServiceScope;
    wUrl: string;
}
