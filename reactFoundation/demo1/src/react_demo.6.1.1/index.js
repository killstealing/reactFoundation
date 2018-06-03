import React, { Component } from 'react'

import RemovePropsDemo from './RemovePropsDemo';
import RemoveProps from './RemoveProps';

import Refs from './Refs';
import RefsDemo from './RefsDemo';

import AddLogs from './AddLogs';
import AddLogsDemo from './AddLogsDemo';

import AddProps from './AddProps';
import AddProps1 from './AddProps1';

export default class componentName extends Component {
  render() {
    const RemovePropsDemoNew = RemoveProps(RemovePropsDemo);
    const RemovePropsDemoProps = { title: 'aaa', title1: 'bbb' };
    const RefsDemoNew = Refs(RefsDemo);
    const AddLogsDemoNew=AddLogs(AddLogsDemo);
    const AddPropsDemoNew=AddProps(RemovePropsDemo,'aaa');
    // const AddProps1DemoNew=AddProps1(RemovePropsDemo);
    return (
      <div>
        <hr />
        <h1>AddLogsDemoNew</h1>
        <AddLogsDemoNew></AddLogsDemoNew>
        <hr />
        <h1>RemovePropsDemoNew</h1>
        <RemovePropsDemoNew {...RemovePropsDemoProps}></RemovePropsDemoNew>
        <hr />
        <h1>RemovePropsDemo</h1>
        <RemovePropsDemo {...RemovePropsDemoProps}></RemovePropsDemo>
        <hr />
        <h1>RefsDemoNew</h1>
        <RefsDemoNew></RefsDemoNew>
        <hr />
        <h1>AddPropsDemoNew</h1>
        <AddPropsDemoNew {...RemovePropsDemoProps}></AddPropsDemoNew>
        <hr />
        <h1>AddProps1_1</h1>
        <AddProps1 user="AddProps1_1">
          {(user)=><div>{user}</div>}
        </AddProps1>
        <hr />
        <h1>AddProps1_2</h1>
        <AddProps1 user="AddProps1_2">
          {
            (user)=><RemovePropsDemo {...RemovePropsDemoProps} title={user}></RemovePropsDemo>
          }
        </AddProps1>
      </div>
    )
  }
}
