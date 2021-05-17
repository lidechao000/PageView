import { useState } from 'react';
export default function useOpenId() {
  const [openId, setOpenId] = useState('')
  const [appId, setAppId] = useState('')
  function getOpenId (options) {
    wx.cloud.callFunction({
      name: 'functions',
      config: {
        env: options.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then(({result}) => {
      console.log(result)
      setOpenId(result.openid)
      setAppId(result.appid)
    })
  }
  return [{openId, appId}, getOpenId];
}