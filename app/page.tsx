import Earning from "./components/earning";
import NavBar from "./components/navbar";
import OverviewCustomer from "./components/overviewCustomer";
import Product from "./components/product";
import SideBar from "./components/sidebar";


export default function Home() {
  return (
    <main className="fw-[1440px] h-[1198px] relative bg-slate-50 flex">
      <SideBar />
      <div>
        <NavBar />
        <Earning />
        <OverviewCustomer />
        <Product />
      </div>
    </main>
  )
}
