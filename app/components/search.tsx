import {GoSearch} from 'react-icons/go'
import {GrFormClose} from 'react-icons/gr'

const Search = () => {
  return ( <div className=" border flex gap-1 rounded bg-white hover:shadow p-1 items-center">
    <label className='text-slate-500'><GoSearch size={25}/></label>
    <input className="outline-none" type="search" />
    <button className="px-4 border-none "><GrFormClose size={20}/></button>
  </div> );
}
 
export default Search;