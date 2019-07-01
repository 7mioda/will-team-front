import moment from 'moment';

export const getLoanSettlement =  ( amount, duration, interestRate ) => {
  const startDate = new Date();
  const settlements = [];
  settlements.push({
    settlementWithoutInterest: (amount / duration),
    settlementInterest: (((amount / duration) * interestRate) / 100),
    settlement: (amount / duration) + (((amount / duration) * interestRate) / 100),
    settlementDate: moment(startDate).add(30, 'days').format('YYYY-MM-DD') });
  for(let i = 1 ; i < duration; i++){
    settlements.push({
      settlementWithoutInterest: (amount / duration),
      settlementInterest: (((amount / duration) * interestRate) / 100),
      settlement: (amount / duration) + (((amount / duration) * interestRate) / 100),
      settlementDate: moment(settlements[i -1 ].settlementDate).add(30, 'days').format('YYYY-MM-DD') })
  }
  return settlements;
};
