import { observer } from 'mobx-react';
import { Tooltip } from 'react-tooltip';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import { REWARDS } from '../config/constants';
import RightSideBlock from '../components/CountBlock/RightSideBlock';
import { useStore } from '../store';
import Table from '../components/Table';

const Rewards = () => {
  const store = useStore();

  // prepare func which will take an integer and convert it to a string like 29 million
  const formatNumber = (num) => {
    const numString = num.toString();
    const numLength = numString.length;
    if (numLength <= 6) {
      return numString;
    }
    if (numLength <= 9) {
      return `${numString.slice(0, numLength - 6)}mil`;
    }
    return `${numString.slice(0, numLength - 9)}bil`;
  };

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="Smeshing Rewards"
          color={getColorByPageName(REWARDS)}
          desc="Rewards across the entire mesh"
        />
        <RightSideBlock
          color={getColorByPageName(REWARDS)}
          number={formatNumber(store.overview.rewards_count || 0)}
          unit="rewards distributed"
          coinCaption="Rewards value since genesis"
          coins={store.overview.rewards_sum}
          rewards
          tooltip1={{
            'data-tooltip-id': 'rewards-tooltip',
            'data-tooltip-html': 'This shows the total number of individual rewards distributed.<br/> Each reward represents a separate payout made to participants.',
            'data-tooltip-place': 'bottom',
          }}
          tooltip2={{
            'data-tooltip-id': 'rewards-tooltip',
            'data-tooltip-html': 'This shows the total combined value of all rewards distributed in SMH.<br/> It represents the sum of all individual rewards.',
            'data-tooltip-place': 'bottom',
          }}
        />
      </div>
      <Tooltip id="rewards-tooltip" multiline />
      <Table name={REWARDS} />
    </>
  );
};

export default observer(Rewards);
