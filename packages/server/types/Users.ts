import { Optional } from 'sequelize'

export interface UserAttributes {
   id: number;
   email: string;
   password: string;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOuput extends Required<UserAttributes> {}