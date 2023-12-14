export const mappingStatus = (status) => {
  switch (status) {
    case 6:
      return 'approved';
    default:
      return 'pending';
  }
};
