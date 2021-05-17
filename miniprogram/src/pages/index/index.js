import React, { useState } from 'react';
import { View, Image } from 'remax/wechat';
import styles from './index.css';
import useEnv from '../../hooks/env'
import { POWER_LIST } from './config'
import { envList } from '../../../envList'
import arrow from '../../images/arrow.svg'

export default () => {
  const [power] = useState(POWER_LIST)
  const [{env}, setEnv] = useEnv(envList)
  return (
    <View className={styles.app}>
      <View className={styles.title}>快速了解云开发</View>
      <View className={styles.topTip}>免鉴权接口调用 免部署后台 高并发</View>
      {power.map((item, index) => 
        <View className={styles.power} key={item.title}>
          <View className={styles.powerInfo} >
            <View className={styles.powerInfoText}>
              <View className={styles.powerInfoTextTitle}>{item.title}</View>
              <View className={styles.powerInfoTextTip}>{item.tip}</View>
            </View>
            <Image
              className={item.showItem ? styles.powerInfoLess : styles.powerInfoMore}
              src={arrow}
            >
            </Image>
          </View>
          {/* <View wx:if="{{power.showItem}}">
            <View wx:key="title" wx:for="{{power.item}}">
              <View class="line"></View>
              <View class="power_item" bindtap="jumpPage" data-page="{{item.page}}">
                <View class="power_item_title">{{item.title}}</View>
                <Image class="power_item_icon" src="../../images/arrow.svg"></Image>
              </View>
            </View>
          </View> */}
        </View>
      )}
      <View className={styles.environment} onClick={setEnv}>当前环境{env.alias}</View>
      <cloud-tip-modal showUploadTipProps="{{showUploadTip}}"></cloud-tip-modal>
    </View>
  );
};
