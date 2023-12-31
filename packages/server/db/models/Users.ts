import { CreationOptional, DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../config'
import { UserAttributes, UserInput} from '../../types/Users'

export default class Users extends Model<UserAttributes, UserInput> implements UserAttributes {
  declare id: number
  declare email: string
  declare password: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}
  
Users.init({
  id: {
   type: DataTypes.INTEGER.UNSIGNED,
   autoIncrement: true,
   primaryKey: true,
  },
  email: {
   type: DataTypes.INTEGER(),
   allowNull: false
  },
  password: {
   type: DataTypes.STRING(50),
   allowNull: false,
  }
}, {
  sequelize: sequelizeConnection,
})