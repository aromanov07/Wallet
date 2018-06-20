/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Payment from './pages/payment';

export default (context: any) => {

  render(<Payment />, context.document.currentPage());

}
