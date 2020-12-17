export const reMappingNetworkArray = (data) => data.map((network) => ({ value: network.explorerAPI, label: network.netName, explorer: network.explorer, dash: network.dash }));
