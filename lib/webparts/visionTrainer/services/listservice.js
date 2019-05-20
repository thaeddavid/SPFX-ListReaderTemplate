import { ServiceKey } from "@microsoft/sp-core-library";
import { SPHttpClient } from "@microsoft/sp-http";
var SERVICE_KEY_TOKEN = "ListService";
var ListService = (function () {
    function ListService(serviceScope) {
        this.serviceScope = serviceScope;
    }
    ListService.prototype.getListData = function (lID, wUrl) {
        var apiUrl = wUrl + "/_api/web/lists(guid'" + lID + "')?$select=Title,ItemCount";
        var client = this.serviceScope.consume(SPHttpClient.serviceKey);
        return client.get(apiUrl, SPHttpClient.configurations.v1)
            .then(function (r) { return r.json(); })
            .then(function (r) { return ({
            Title: r.Title,
            ItemsCount: r.ItemCount
        }); });
    };
    ListService.serviceKey = ServiceKey.create(SERVICE_KEY_TOKEN, ListService);
    return ListService;
}());
export { ListService };
//# sourceMappingURL=listservice.js.map