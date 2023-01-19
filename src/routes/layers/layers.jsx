import { observer } from 'mobx-react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { LAYERS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';

const Layers = ({ customPageWrap }) => {
  const store = useStore();
  const { layer } = store.networkInfo;

  return (
    <>
      {
                customPageWrap || (
                <div className="page-wrap">
                  <TitleBlock
                    title="Layers"
                    color={getColorByPageName(LAYERS)}
                    desc="Layers across the entire mesh"
                  />
                  <RightSideBlock
                    color={getColorByPageName(LAYERS)}
                    number={layer && layer.number}
                    unit="MOST RECENT LAYER"
                    startTime={layer && layer.start}
                  />
                </div>
                )
            }
      <Table name={LAYERS} />
    </>
  );
};

export default observer(Layers);
