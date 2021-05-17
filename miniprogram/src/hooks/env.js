import { useState } from 'react'
import { showActionSheet } from 'remax/wechat';
export default function useEnv(envList) {
  const [env = {}, setEnv] = useState()
  function onChangeSelectedEnv({tapIndex}) {
    if (env.envId === envList[tapIndex].envId) {
      return
    }
    setEnv(envList[tapIndex])
  }
  return [{env, envList}, () => {
    showActionSheet({
      itemList: envList.map(({ alias }) => alias),
      success: onChangeSelectedEnv,
      fail: (res) => console.log(res.errMsg)
    })
  }];
}