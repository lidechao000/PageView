import { chooseImage } from 'remax/wechat';
import { useState } from 'react';
export default function useUpload(defaultUrl) {
  const [url, setUrl] = useState(defaultUrl)
  function upload() {
    wx.showLoading()
    chooseImage({
      count: 1,
      success: chooseResult => {
        wx.cloud.uploadFile({
          cloudPath: 'my-photo.png',
          filePath: chooseResult.tempFilePaths[0],
          config: {
            env: ''
          }
        }).then(({fileID}) => {
          console.log('上传成功', fileID)
          setUrl(fileID);
        }).finally(() => {
          wx.hideLoading()
        })
      },
    })
  }
  return [url, upload];
}