import type { ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';

const WireguardConfig = () => {
  //   let config = `[Interface]
  //   PrivateKey = +AzVcipGKNQIhNp+qNYz28LuiZnJ1MHyLG0q7h9ONE0=
  //   Address = 10.8.0.3/24
  //   DNS = 1.1.1.1
  // `;
  // [Peer],
  // PublicKey = jJScwLrbnVH18fRIGS+uKNqas0Hl9qcw758Tjuc6MEQ=
  // PresharedKey = jGgTd+NVsroyrDgBLQ7m5d0CssRPzuz/r8nxBH1PM0c=
  // AllowedIPs = 0.0.0.0/0
  // Endpoint = 195.80.51.74:51820
  let peers = {
    PublicKey: '',
    PresharedKey: '',
    AllowedIPs: '',
    Endpoint: '',
  };
};


type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = new Array(20).fill(1).map((_, index) => {
  return {
    id: (Date.now() + index).toString(),
    title: `Client ${index}`,
    decs: 'Config Client',
    state: 'open',
    created_at: 1590486176000,
  };
});

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id)
  );
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>(
    () => defaultData
  );



};
