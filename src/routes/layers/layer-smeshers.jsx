import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { LAYERS, SMESHER } from '../../config/constants';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const LayerSmeshers = () => {
  const store = useStore();
  const { layer } = store.networkInfo;
  const params = useParams();

  return (
    <>
      <div className="page-wrap">
        <TitleBlock
          title={`Layers ${params.id} Smeshers`}
          color={getColorByPageName(LAYERS)}
          desc="Smeshers who submitted at least one block"
        />
        <RightSideBlock
          number={layer && layer.smeshers}
          startTime={layer && layer.start}
          unit="smeshers"
          color={getColorByPageName(LAYERS)}
        />
      </div>
      <Table name={LAYERS} subPage={SMESHER} id={params.id} />
    </>
  );
};

export default observer(LayerSmeshers);
