const getCountryCode = (countryId: string): string  => {
  switch(countryId) {
    case '1':
      return 'CUB';
    case '2':
      return 'ALB';
    case '3':
      return 'PER';
    case '4':
      return 'CAN';
    case '5':
      return 'ISL';
    case '6':
      return 'PRT';
    case '7':
      return 'JOR';
    case '8':
      return 'CRI';
    default:
      return '';
  }
}

export default getCountryCode;
