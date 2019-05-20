import * as React from 'react';
import styles from './ListReader.module.scss';
import { IListReaderProps } from './IListReaderProps';
import {
  ListService
} from '../services/listservice';
import { IListItem } from '../interfaces';

export default class ListReader extends React.Component<IListReaderProps, IListItem> {
  constructor(props: IListReaderProps) {
    super(props);

    this.state = {
      Title: 'Please select a list by editing the web part properties.'
    }
  }
  public componentDidMount(): void {
    this.callListService();
  }
  public componentDidUpdate(): void {
    this.callListService();
  }
  private callListService(): void {
    const gl: ListService = new ListService(this.props.sScope);
    if (this.props.listID != null) {
      gl.getListData(this.props.listID, this.props.wUrl).then((lval: IListItem) => {
        this.setState({ Title: lval.Title });
      })
    }
  }
  public render(): React.ReactElement<IListReaderProps> {
    return (
      <div className={ styles.listReader }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.title }>List selected: {this.state.Title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
