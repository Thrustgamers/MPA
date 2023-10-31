import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { SongAttributes, SongInput} from '../../types/Songs'

export default class Songs extends Model<SongAttributes, SongInput> implements SongAttributes {
  declare id: number
  declare category: number
  declare name: string
}
  
Songs.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  category: {
    type: DataTypes.INTEGER(),
    allowNull: false,
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