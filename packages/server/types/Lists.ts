import { Optional } from 'sequelize'

export interface ListAttributes {
   id: number;
   owner: number;
   name : string;
   songs: number[];
}

export interface ListInput extends Optional<ListAttributes, 'id'> {}
export interface ListOuput extends Required<ListAttributes> {}