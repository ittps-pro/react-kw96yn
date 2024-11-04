/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Form2 from './components/Form2';
import './main.css';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider themeMode={'dark'}>
    <App />
  </ThemeProvider>
);
