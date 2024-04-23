
import Banner from "./components/Banner";
import BigCardCarousel from "./components/Carousel/BigCardCarousel";
import Header from "./components/Header";
import PaymentAndBill from "./components/PaymentAndBill";
import Popular from "./components/Popular";
import Recently from "./components/Recently";
import Topup from "./components/Topup";
import { Categories } from "./utils/const";
import { Discount } from "./utils/Icons";

function App() {
  

  return (
    <div className="App">
      <Header />
      <section className="-mt-[40px] py-[50px] rounded-t-[42px] bg-white text-black">
        <div className="overflow-hidden">
          <div className="container">
            <div className='flex items-center justify-between mb-[44px]'>
              <div className='flex items-center gap-[12px]'>
                <Discount size={40} color='blue' />
                <h1 className="text-[35px]">Special offers available only here!</h1>
              </div>
              <a href="#" className="text-[18px] text-blue-500">View all</a>
            </div>
          </div>
          <BigCardCarousel />
          
          <Banner />

          <div className="container">
            <h1 className="text-black font-bold text-[35.42px] mb-[53px]">Choose your category</h1>
            <div className="grid grid-cols-6 gap-[80px] items-center">
              {
                Categories.map((item, idx) => {
                  return (
                    <button className="flex flex-col items-center gap-[25px]">
                      <div className="rounded-full p-[31px]" style={{
                        backgroundColor: 'rgba(251, 248, 255, 1)'
                      }}>
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <span className="text-[22px] text-black">{item.title}</span>
                    </button>
                  )
                })
              }
            </div>
          </div>

          <Topup />
          <PaymentAndBill />
          <Popular />
          <Recently />
        </div>
      </section>
    </div>
  );
}

export default App;
