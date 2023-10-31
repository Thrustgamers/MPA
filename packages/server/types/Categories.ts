import { Optional } from 'sequelize'

export interface CategoryAttributes {
   id: number;
   name: string;
}

export interface CategoryInput extends Optional<CategoryAttributes, 'id'> {}
export interface CategoryOuput extends Required<CategoryAttributes> {}