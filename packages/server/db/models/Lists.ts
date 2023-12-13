import { CreationOptional, DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { ListAttributes, ListInput} from '../../types/Lists'

export default class Lists extends Model<ListAttributes, ListInput> implements ListAttributes {
  declare id: number
  declare owner: number
  declare name: string
  declare songs: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}
  
Lists.init({
  id: {
   type: DataTypes.INTEGER.UNSIGNED,
   autoIncrement: true,
   primaryKey: true,
   unique: true
  },
  owner: {
   type: DataTypes.NUMBER,
   allowNull: false,
   defaultValue: 1,
   references: {
      model: 'Users',
      key: 'id',
    }
  },
  name : {
    type : DataTypes.STRING(50),
    allowNull: false,
  },
  songs: {
   type: DataTypes.STRING(500)
  }
}, {
  sequelize: sequelizeConnection,
})