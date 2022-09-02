import React from 'react';

import styles from './index.less';

export type IButton = {

}

export default function Button(props:IButton){
  return <div className={styles.button}>Hello Button</div>
}
