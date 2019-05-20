var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './ListReader.module.scss';
import { ListService } from '../services/listservice';
var ListReader = (function (_super) {
    __extends(ListReader, _super);
    function ListReader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            Title: 'Please select a list by editing the web part properties.'
        };
        return _this;
    }
    ListReader.prototype.componentDidUpdate = function () {
        var _this = this;
        var gl = new ListService(this.props.sScope);
        if (this.props.listID != null) {
            gl.getListData(this.props.listID, this.props.wUrl).then(function (lval) {
                _this.setState({ Title: lval.Title });
            });
        }
    };
    ListReader.prototype.render = function () {
        return (React.createElement("div", { className: styles.listReader },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("p", { className: styles.title },
                            "List selected: ",
                            this.state.Title))))));
    };
    return ListReader;
}(React.Component));
export default ListReader;
//# sourceMappingURL=ListReader.js.map