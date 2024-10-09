import 'react-responsive-modal/styles.css';
import { observer } from 'mobx-react';
import Modal from 'react-responsive-modal';
import { useStore } from '../../store';
import { getColorByPageName } from '../../helper/getColorByPageName';
import { EPOCHS } from '../../config/constants';
import BitmapSVG from '../TitleBlock/BitmapSVG';

const ThrottleWarningPopup = () => {
  const store = useStore();

  const color = getColorByPageName(EPOCHS);
  const closeStyle = { color: color.textColor, cursor: 'pointer', marginRight: '8px', fontSize: '40px' };

  return (
    <Modal
      open={store.isThrottlePopupOpen}
      closeOnOverlayClick
      showCloseIcon={false}
      onClose={() => store.hideThrottlePopup()}
      center
      styles={{
        modal: {
          maxWidth: '650px',
          padding: 0,
        },
      }}
    >
      <div className="titleBlock">
        <div className="titleBlock-wrap" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ color: color.textColor }} className="titleBlock-title">Slow Down!</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a className="close" style={closeStyle} onClick={() => store.hideThrottlePopup()}>
            &times;
          </a>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <BitmapSVG invert={store.theme !== 'dark'} />
          </div>
        </div>
      </div>
      <div className="titleBlock">
        <div className="titleBlock-wrap" style={{ display: 'flex', alignItems: 'center' }}>
          <p className="titleBlock-desc">Our system detected that you are using the app too heavily. Please slow down to avoid further limitations.</p>
        </div>
      </div>
    </Modal>
  );
};

export default observer(ThrottleWarningPopup);
