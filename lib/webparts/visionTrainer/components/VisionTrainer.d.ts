/// <reference types="react" />
import * as React from 'react';
import { IListReaderProps } from './IListReaderProps';
import { IListItem } from '../interfaces';
export default class ListReader extends React.Component<IListReaderProps, IListItem> {
    constructor(props: IListReaderProps);
    componentDidUpdate(): void;
    render(): React.ReactElement<IListReaderProps>;
}
