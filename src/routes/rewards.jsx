import { observer } from 'mobx-react';
import TitleBlock from '../components/TitleBlock';
import { getColorByPageName } from '../helper/getColorByPageName';
import { REWARDS } from '../config/constants';
import RightSideBlock from '../components/CountBlock/RightSideBlock';
import { useStore } from '../store';
import Table from '../components/Table';

const Rewards = () => {
  const store = useStore();
  const { epoch } = store.networkInfo;
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
          number={epoch?.stats.cumulative.rewardsnumber}
          unit="rewards distributed"
          coinCaption="Rewards value since genesis"
          coins={epoch?.stats.cumulative.rewards}
        />
      </div>
      <Table name={REWARDS} />
    </>
  );
};

export default observer(Rewards);
