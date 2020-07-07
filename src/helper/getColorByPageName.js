// @flow
import {
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  BLOCKS,
  NOT_FOUND,
} from '../config/constants';

// Colors
import * as colors from '../styles/utilities/_variables.scss';

export const getColorByPageName = (pageName: string) => {
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
        textColor: colors.accountsColor,
        bgColor: colors.accountsBgColor,
      };
    case SMESHER:
      return {
        textColor: colors.smesherColor,
        bgColor: colors.smesherBgColor,
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
