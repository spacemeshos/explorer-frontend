// @flow
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { calculateEpoch, hexToBase64 } from '../../helper/converter';

const addressTestLength = 51;
const addressLength = 48;
const idLength = 66;

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const store = useStore();
  const [error, setError] = useState();
  if (error) throw error;

  const onChangeHandler = (e) => setSearchValue(e.target.value);

  const onClickHandler = async () => {
    switch (searchValue.length) {
      case 0:
        break;
      case addressLength:
      case addressTestLength:
        navigate(`/accounts/${searchValue}`);
        break;
      case idLength:
        const tx = await store.api.transaction.transactionServiceList({
          txid: [hexToBase64(searchValue)],
          limit: 1,
          includeResult: false,
          includeState: false,
        }).catch((err) => {
          if (err.status === 429) {
            store.showThrottlePopup();
          }
        });
        if (tx.transactions.length > 0) {
          navigate(`/txs/${searchValue}`);
          break;
        }

        const atx = await store.api.activation.activationServiceList({
          id: [hexToBase64(searchValue)],
          limit: 1,
        }).catch((err) => {
          if (err.status === 429) {
            store.showThrottlePopup();
          }
        });
        if (atx.activations.length > 0) {
          navigate(`/atxs/${searchValue}`);
          break;
        }

        const response = await fetch(`${store.statsApiUrl}/smesher/${searchValue}`);
        if (response.status === 429) {
          store.showThrottlePopup();
        } else if (!response.ok) {
          const err = new Error('Not found');
          err.id = searchValue;
          setError(err);
          break;
        }
        navigate(`/smeshers/${searchValue}`);
        break;
      default:
        const id = parseInt(searchValue, 10);
        if (Number.isNaN(id)) {
          const err = new Error('Not found');
          err.id = searchValue;
          setError(err);
        }
        const currentLayer = store.nodeStatus.currentLayer;
        const currentEpoch = calculateEpoch(currentLayer, store.netInfo.layersPerEpoch);
        if (id > currentEpoch + 1) {
          if (id <= currentLayer && id > 0) {
            navigate(`/layers/${id}`);
          }
        } else if (id > 0) {
          navigate(`/epochs/${id}`);
        }
        break;
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        onClickHandler();
        setSearchValue('');
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [searchValue, setSearchValue]);

  return (
    <div className="search">
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.36495 8.37517C9.40899 7.01277 9.72746 5.1629 9.20651 3.48507C8.68557 1.80725 7.39926 0.540067 5.8069 0.13567C4.214 -0.269278 2.54107 0.246056 1.38427 1.49747C0.227448 2.7489 -0.248926 4.55864 0.12542 6.28183C0.499216 8.00442 1.67048 9.39594 3.2216 9.95948C4.77257 10.523 6.48262 10.1785 7.74199 9.04908L11.2908 12.8881C11.461 13.0461 11.7156 13.0357 11.874 12.8637C12.033 12.6923 12.0427 12.4169 11.8966 12.2328L8.36495 8.37517ZM0.867719 5.1217C0.867719 4.01204 1.27534 2.94831 2.00037 2.1639C2.72538 1.37959 3.70876 0.93862 4.73454 0.93862C5.76033 0.93862 6.74362 1.37958 7.46872 2.1639C8.19374 2.94822 8.60137 4.01202 8.60137 5.1217C8.60137 6.23138 8.19375 7.29509 7.46872 8.0795C6.7437 8.86381 5.76033 9.30478 4.73454 9.30478C3.70876 9.30478 2.72547 8.86383 2.00037 8.0795C1.27535 7.29518 0.867719 6.23138 0.867719 5.1217Z" fill="black" />
      </svg>
      <input
        onChange={(e) => onChangeHandler(e)}
        type="text"
        className="search-input"
        placeholder={window.innerWidth < '1150' ? 'search' : 'search by account / transaction / layer / atx'}
        value={searchValue}
      />
      <button type="button" onClick={onClickHandler} className="search-button">search &gt;</button>
    </div>
  );
};

export default Search;
