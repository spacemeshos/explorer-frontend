// @flow
import {
  EPOCHS,
  LAYERS,
  TXNS,
  ATXS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  BLOCKS,
  NOT_FOUND,
} from '../config/constants';

export const getColorByPageName = (pageName: string, theme?: string) => {
  switch (pageName) {
    case EPOCHS:
      return {
        textColor: colors.epochColor,
        bgColor: colors.epochBgColor,
      };
    case LAYERS:
      return {
        textColor: colors.layerColor,
        bgColor: colors.layerBgColor,
      };
    case TXNS:
      return {
        textColor: colors.transactionColor,
        bgColor: colors.transactionBgColor,
      };
    case ATXS:
      return {
        textColor: colors.activationColor,
        bgColor: theme === 'dark' ? colors.activationBgColor : colors.activationLightBgColor,
      };
    case REWARDS:
      return {
        textColor: colors.rewardsColor,
        bgColor: colors.rewardsBgColor,
      };
    case ACCOUNTS:
      return {
        textColor: colors.accountsColor,
        bgColor: colors.accountsBgColor,
      };
    case SMART_WALLET:
      return {
        textColor: colors.smartWalletColor,
        bgColor: colors.smartWalletBgColor,
      };
    case SMESHER:
      return {
        textColor: colors.smesherColor,
        bgColor: theme === 'dark' ? colors.smesherBgColor : colors.smesherLightBgColor,
      };
    case BLOCKS:
      return {
        textColor: colors.layerColor,
        bgColor: colors.layerBgColor,
      };
    case NOT_FOUND:
      return {
        textColor: colors.notFoundColor,
        bgColor: colors.notFoundBgColor,
      };
    default:
      return {
        textColor: colors.overviewColor,
        bgColor: colors.overviewBgColor,
      };
  }
};

const colors = {
  overviewColor: '#AA58B1',
  overviewBgColor: 'rgba(223, 50, 175, 0.2)',
  epochColor: '#F79F53',
  epochBgColor: 'rgba(247, 159, 83, 0.2)',
  layerColor: '#1776E3',
  layerBgColor: 'rgba(23, 118, 227, 0.2)',
  transactionColor: '#65B042',
  transactionBgColor: 'rgba(101, 176, 66, 0.2)',
  rewardsColor: '#24AEA6',
  rewardsBgColor: 'rgba(36, 174, 166, 0.2)',
  accountsColor: '#DF32AF',
  activationColor: '#7B42F4',
  activationBgColor: '#362A52',
  activationLightBgColor: '#DBD0F3',
  accountsBgColor: 'rgba(223, 50, 175, 0.2)',
  smesherColor: '#F7D353',
  smesherBgColor: '#4F4731',
  smesherLightBgColor: '#F4EDD3',
  blockColor: '#1744E3',
  smartWalletColor: '#DF3266',
  smartWalletBgColor: 'rgba(223, 50, 102, 0.2)',
  notFoundColor: '#EC5C3D',
  notFoundBgColor: 'rgba(236, 92, 61, 0.2)',
};
