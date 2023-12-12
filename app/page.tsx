import Image from 'next/image'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Banner from './components/Banner/Banner'
import Card from './components/card/card'
import Container from './components/Container'
import Header from './components/Header'
import { getCourses } from '@/actions/getCourses'

export default async function Home() {

  const courses=await getCourses()
  return (
   <div className="flex gap-2 w-full">
    
    <Container>
    <div className="flex flex-col justify-start items-center">
      <Banner/>
      <Header title='Most Popular Courses' border/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-round">
      {courses?.map((course) =><Card key={course.id} course={course}/>)}
      
      </div>
      </div>
    </Container>
   </div>
  )
}
