import { Optional } from 'sequelize'

export interface ListAttributes {
   id: number;
   owner: number;
   name : string;
   songs: string;
}

export interface ListInput extends Optional<ListAttributes, 'id'> {}
export interface ListOuput extends Required<ListAttributes> {}