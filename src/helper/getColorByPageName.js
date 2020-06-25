// @flow
import {
  EPOCHS,
  LAYERS,
  TXNS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
} from '../config/constants';

// Colors
import * as colors from '../styles/utilities/_variables.scss';

export const getColorByPageName = (pageName: string) => {
  switch(pageName) {
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
      return colors.rewardsColor;
    case ACCOUNTS:
      return colors.accountsColor;
    case SMESHER:
      return colors.smesherColor;
    case SMART_WALLET:
      return colors.smartWalletColor;
    default:
      return {
        textColor: colors.overviewColor,
        bgColor: colors.overviewBgColor,
      }
  }
};
