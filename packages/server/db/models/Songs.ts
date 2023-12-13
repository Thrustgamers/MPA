import { CreationOptional, DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { SongAttributes, SongInput} from '../../types/Songs'

export default class Songs extends Model<SongAttributes, SongInput> implements SongAttributes {
  declare id: number
  declare category: number
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}
  
Songs.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  category: { 
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: 'Categories',
      key: 'id',
    }
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  sequelize: sequelizeConnection,
}) 