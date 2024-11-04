import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
  ProForm,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'antd-style';
import { randomUUID } from 'crypto';

//uuid

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

type ClientType = {
  id: string; //"62700b6d-c591-486f-ab6f-3050b885f9a1",
  name: string;
  // 'lb.ams.srvio.pro';
  enabled: boolean;
  address: string; //"10.8.0.200",
  publicKey: string; //"1c/qndtOiv21QcvUB9vTTn8gqw5IF2k7CgJOoEJ3fzI=",
  createdAt: string; //"2024-10-31T11:18:40.181Z",
  updatedAt: string; // "2024-10-31T11:18:50.646Z",
  downloadableConfig: boolean;
  persistentKeepalive: string; // "off",
  latestHandshakeAt: string; // "2024-10-31T13:06:57.000Z",
  transferRx: number; // 444,
  transferTx: number; //660
};

interface WireGuardClient {
  id: string | number; // string;
  // key?: string;
  // title?: string;
  name: string;
  publicKey: string;
  privateKey: string;
  allowedIPs: string;
  // server?: string;
  // org?: string;
  // children?: DataSourceType[];
}

// const defaultData: WireGuardClient[] = new Array(5).fill(1).map((_, index) => {
//   return {
//     id: (Date.now() + index).toString(),
//     key: 1000,
//     title: '#' + index,
//     name: 'Client ' + index,
//     publicKey: '********',
//     privateKey: '********',
//     allowedIPs: '0.0.0.0/0',
//     server: 'Server 2',
//     org: 'solid',
//     enabled: 1,
//     // created_at: 1590486176000,
//   };
// });

// const apiData: ClientType[] = require('./api.json');

const apiData = require('./api.json');
const defaultData: WireGuardClient[] = apiData.map((_, index) => {
  return _;
});
export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData
  );

  const [editableKeysC, setEditableRowKeysC] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );

  const [dataSourceC, setDataSourceC] = useState<readonly DataSourceType[]>(
    () => defaultData
  );

  const cientColumns: ProColumns<ClientType>[] = [
    { title: 'ID', key: 'id', dataIndex: 'id' },
    { title: 'Name', key: 'name', dataIndex: 'name', editable: true },
  ];
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'title',
      dataIndex: 'name',

      // width: '30%',
      // formItemProps: {
      //   rules: [
      //     {
      //       required: true,
      //       whitespace: true,
      //       message: 'Required ',
      //     },
      //     {
      //       message: 'Numbers',
      //       pattern: /[0-9]/,
      //     },
      //     {
      //       max: 16,
      //       whitespace: true,
      //       message: 'Max 16',
      //     },
      //     {
      //       min: 6,
      //       whitespace: true,
      //       message: 'Min 6',
      //     },
      //   ],
      // },
    },
    {
      title: 'Server',
      key: 'server',
      dataIndex: 'server',
      valueType: 'select',
      valueEnum: {
        1: { text: 'Server 1', status: 'Server 1', value: 1 },
        2: {
          text: 'Server 2',
          status: 'Server 2',
        },
        3: {
          text: 'Server 3',
          status: 'Server 3',
        },
      },
    },
    {
      title: 'Segment',
      key: 'Segment',
      dataIndex: 'Segment',
      valueType: 'select',
      valueEnum: {
        all: { text: 'Default', status: 'Default' },
        open: {
          text: 'RU',
          status: 'ru',
        },
        closed: {
          text: 'EU',
          status: 'eu',
        },
      },
    },
    {
      title: 'publicKey',
      dataIndex: 'publicKey',
      readonly: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'enabled',
      dataIndex: 'enabled',
    },
    // {
    //   title: 'org',
    //   dataIndex: 'org',
    //   type: 'select',
    //   options: {},
    // },
    {
      title: 'option',
      valueType: 'option',
      width: 250,
      render: () => {
        return null;
      },
    },
  ];

  return (
    <>
      {/* <ProCard title={'Card'}>
        <EditableProTable<ClientType> columns={cientColumns} value={apiData} />
      </ProCard> */}
      <EditableProTable<DataSourceType>
        headerTitle="Data"
        columns={columns}
        rowKey="id"
        scroll={{
          x: 960,
        }}
        value={dataSource}
        onChange={setDataSource}
        recordCreatorProps={{
          newRecordType: 'dataSource',
          record: () => ({
            id: Date.now(),
          }),
        }}
        toolBarRender={() => {
          return [
            <Button
              type="primary"
              key="save"
              onClick={() => {
                // dataSource 就是当前数据，可以调用 api 将其保存
                console.log(dataSource);
              }}
            >
              Save
            </Button>,
          ];
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.delete];
          },
          onValuesChange: (record, recordList) => {
            setDataSource(recordList);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="DataJSON" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
