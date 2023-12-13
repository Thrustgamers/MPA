import { CreationOptional, DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { CategoryAttributes, CategoryInput} from '../../types/Categories'

export default class Categories extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  declare id: number
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}
  
Categories.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize: sequelizeConnection,
})