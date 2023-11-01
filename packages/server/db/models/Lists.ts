import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { ListAttributes, ListInput} from '../../types/Lists'

export default class Lists extends Model<ListAttributes, ListInput> implements ListAttributes {
  declare id: number
  declare owner: number
  declare name: string
  declare songs: number[]
}
  
Lists.init({
  id: {
   type: DataTypes.INTEGER.UNSIGNED,
   autoIncrement: true,
   primaryKey: true,
   unique: true
  },
  owner: {
   type: DataTypes.INTEGER(),
   allowNull: false,
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
   type: DataTypes.ARRAY(DataTypes.NUMBER),
   allowNull: false,
  }
}, {
  sequelize: sequelizeConnection,
})