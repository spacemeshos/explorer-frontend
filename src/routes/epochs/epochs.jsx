import { observer } from 'mobx-react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { EPOCHS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const Epochs = () => {
  const store = useStore();
  const { network, epoch } = store.networkInfo;

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title="Epochs"
          color={getColorByPageName(EPOCHS)}
          desc="Epochs across the entire mesh"
        />
        <RightSideBlock
          color={getColorByPageName(EPOCHS)}
          number={epoch && epoch.number + 1}
          unit="Epochs since genesis"
          startTime={network && network.genesis}
          label="Genesis Time"
        />
      </div>
      <Table name={EPOCHS} />
    </>
  );
};

export default observer(Epochs);
