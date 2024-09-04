import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import TitleBlock from '../../components/TitleBlock';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { LAYERS } from '../../config/constants';
import RightSideBlock from '../../components/CountBlock/RightSideBlock';
import { useStore } from '../../store';
import Table from '../../components/Table';
import Loader from '../../components/Loader';

const Layers = ({ customPageWrap }) => {
  const store = useStore();
  const [layer, setLayer] = useState(0);

  useEffect(() => {
    if (store.api.layer === undefined) return;
    store.api.layer.layerServiceList({
      limit: 1,
      sort_order: 1,
    }).then((data) => {
      setLayer(data.layers[0].number);
    });
  }, [store.api.layer]);

  if (layer === 0) {
    return <Loader size={100} />;
  }

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
                    number={layer || 0}
                    unit="MOST RECENT LAYER"
                    startTime={store.layerTimestamp(layer || 0)}
                  />
                </div>
                )
            }
      <Table name={LAYERS} />
    </>
  );
};

export default observer(Layers);
