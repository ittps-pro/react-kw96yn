'use client';
import React, { useState } from 'react';

import {
  ProForm,
  ProFormDependency,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const Form2 = (data: any[]) => {
  return (
    <>
      <ProForm title={''}>
        <ProFormSelect
          options={[
            {
              value: 'select',
              label: 'select',
            },
            {
              value: 'input',
              label: 'input',
            },
          ]}
          width="xs"
          name="globalUseMode"
          label="全局生效方式组件的类型"
        />
        <ProFormList
          name={['default', 'users']}
          label="用户信息"
          initialValue={[
            {
              name: '1111',
            },
          ]}
          alwaysShowItemLabel
        >
          <ProForm.Group key="group">
            <ProFormSelect
              options={[
                {
                  value: 'select',
                  label: '选择框',
                },
                {
                  value: 'input',
                  label: '输入框',
                },
              ]}
              width="xs"
              name="useMode"
              label="生效方式组件的类型"
            />
            <ProFormDependency name={['useMode']}>
              {({ useMode }) => {
                if (useMode === 'select') {
                  return (
                    <ProFormSelect
                      options={[
                        {
                          value: 'chapter',
                          label: 'chapter',
                        },
                      ]}
                      width="md"
                      name="function"
                      label="function"
                    />
                  );
                }
                return (
                  <ProFormText width="md" name="function" label="生效方式" />
                );
              }}
            </ProFormDependency>

            <ProFormDependency
              key="globalUseMode"
              name={['globalUseMode']}
              ignoreFormListField
            >
              {({ globalUseMode }) => {
                if (globalUseMode === 'select') {
                  return (
                    <ProFormSelect
                      options={[
                        {
                          value: 'chapter',
                          label: 'chapter',
                        },
                      ]}
                      width="md"
                      name="gfunction"
                      label="chapter"
                    />
                  );
                }
                return (
                  <ProFormText width="md" name="gfunction" label="gfunction" />
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
        </ProFormList>
      </ProForm>
    </>
  );
};

export default Form2;
