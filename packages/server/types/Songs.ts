import { Optional } from 'sequelize'

export interface SongAttributes {
   id: number;
   category: number;
   name: string;
}

export interface SongInput extends Optional<SongAttributes, 'id' | 'name'> {}
export interface SongOuput extends Required<SongAttributes> {}