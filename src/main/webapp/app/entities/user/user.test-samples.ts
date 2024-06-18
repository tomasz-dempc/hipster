import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32725,
  login: 'lGSkjd',
};

export const sampleWithPartialData: IUser = {
  id: 13251,
  login: 'qT0',
};

export const sampleWithFullData: IUser = {
  id: 9029,
  login: '4i',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
