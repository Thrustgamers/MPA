import Categories from "./models/Categories"
import Songs from "./models/Songs"
 
const dbInit = () => {
   //Production Version
   Categories.sync()
   Songs.sync()
   console.log('Database ready')
}
export default dbInit 