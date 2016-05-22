/*
* @Author: chaofan
* @Date:   2016-05-19 14:35:37
* @Last Modified by:   chaofan
* @Last Modified time: 2016-05-19 15:38:29
*/

'use strict';
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
