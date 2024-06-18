import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'bda96f8e-4e53-4989-b33f-18a597df2c38',
};

export const sampleWithPartialData: IAuthority = {
  name: '231224dc-8c08-4c50-a325-5e805a7a8d0a',
};

export const sampleWithFullData: IAuthority = {
  name: 'daadd3e5-95f4-4877-8267-ba5e3dd7e458',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
