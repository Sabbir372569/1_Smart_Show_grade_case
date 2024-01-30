
import './App.css'
import Header from './Component/Header/Header'
import Form from './Component/Forms/DataTable/Forms/Form'
import Footer from './Component/Footer/Footer'


function Home() {


  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white box-border border-solid border-0 border-e5e7eb before:content-[''] after:content-['']">
            <Header />
            <Form />
            <Footer />
      </div>
    </>
  )
}

export default Home
