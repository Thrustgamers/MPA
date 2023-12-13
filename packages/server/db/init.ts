import Categories from "./models/Categories"
import Lists from "./models/Lists"
import Songs from "./models/Songs"
import Users from "./models/Users"
 
const dbInit = async () => {
   //Production Version
   Categories.sync()
   Songs.sync()
   Users.sync()
   Lists.sync()
   console.log('Database ready')
}
export default dbInit 