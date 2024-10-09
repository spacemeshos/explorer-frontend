import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { LAYERS, REWARDS } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { useStore } from '../../store';
import Table from '../../components/Table';
import { AmountBlock } from '../../components/CountBlock';

const LayerRewards = () => {
  const store = useStore();
  const params = useParams();

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Layer ${params.id} - Rewards`}
          color={getColorByPageName(LAYERS)}
          desc={`Rewards within Layer ${params.id}`}
        />
        <AmountBlock
          number={params.id}
          startTime={store.layerTimestamp(params.id)}
          unit="layers"
          color={getColorByPageName(LAYERS)}
        />
      </div>
      <Table name={LAYERS} subPage={REWARDS} id={params.id} />
    </>
  );
};

export default observer(LayerRewards);
