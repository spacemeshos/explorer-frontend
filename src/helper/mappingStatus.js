export const mappingStatus = (status) => {
  switch (status) {
    case 0:
      return 'unspecified';
    case 1:
      return 'rejected';
    case 2:
      return 'insufficientFunds';
    case 3:
      return 'conflicting';
    case 4:
      return 'pending';
    case 5:
      return 'processing';
    case 6:
      return 'approved';
    default:
      break;
  }
};
