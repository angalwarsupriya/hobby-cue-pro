
import Cards from '@/components/Cards/page';
import './page.css'
import Header from '@/components/Header/page'
import Main from '@/components/Main/page';
import AddOwnCard from '@/components/AddOwnCard/page';
import Testimonial from '@/components/Testimonial/page';
import  Login from '@/components/Login/page'
import Footer from '@/components/Footer/page';
export default function Home() {
  return (
    
       <div className="container div d-flex flex-column align-items-center">
        <Header/>
        <Login/>
        <Cards/>
        <AddOwnCard/>
        <Testimonial/>
        <Main/>
        <Footer/>
       </div>
  );
}
