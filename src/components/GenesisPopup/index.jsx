import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { EPOCHS } from '../../config/constants';
import genesisTimeline from '../../assets/genesis_timeline.png';
import BitmapSVG from '../TitleBlock/BitmapSVG';
import { useStore } from '../../store';

const GenesisPopup = () => {
  const store = useStore();
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);
  const color = getColorByPageName(EPOCHS);
  const imageStyle = { 'max-width': '100%', 'max-height': '100%' };
  const closeStyle = { color: color.textColor, cursor: 'pointer', 'margin-right': '8px', 'font-size': '40px' };

  return (
    <Modal
      open={open}
      closeOnOverlayClick
      showCloseIcon={false}
      onClose={closeModal}
      center
      styles={{
        modal: {
          'max-width': '1200px',
          padding: 0,
        },
      }}
    >
      <div className="titleBlock">
        <div className="titleBlock-wrap" style={{ display: 'flex', 'align-items': 'center' }}>
          <p style={{ color: color.textColor }} className="titleBlock-title">Genesis period</p>
        </div>
        <div style={{ display: 'flex', 'align-items': 'center' }}>
          <a className="close" style={closeStyle} onClick={closeModal}>
            &times;
          </a>
          <div style={{ display: 'flex', 'align-items': 'flex-start' }}>
            <BitmapSVG invert={store.theme !== 'dark'} />
          </div>
        </div>
      </div>
      <img src={genesisTimeline} alt="genesis period" style={imageStyle} />
    </Modal>
  );
};

export default GenesisPopup;
