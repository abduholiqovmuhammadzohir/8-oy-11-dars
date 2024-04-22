import './App.css'
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function App() {

  return (
    <>
      <div className="container">
        <div className="nav">
          <div className='icon'>
            <RiMoneyDollarBoxLine />
            <h2>Convert</h2>
          </div>
          <div className='icon'>
            <BsSend />
            <h2>Send</h2>
          </div>
          <div className='icon'>
            <FaChartLine />
            <h2>Charts</h2>
          </div>
          <div className='icon'>
            <CiBellOn />
            <h2>Alerts</h2>
          </div>
        </div>
        <div className="select">
          <div>
            <label>Amount</label><br />
            <input type="text" />
          </div>
          <div>
            <label>From</label><br />
            <select className="form-select" aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='left_right'>
            <h5><HiArrowsRightLeft /></h5>
          </div>
          <div>
            <label>To</label><br />
            <select className="form-select" aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="medium">
          <h3>2,222.00 US Dollars =</h3>
          <h2>1,801.3044 British Pounds</h2>
          <h4>1 USD = 0.810668 GBP</h4>
          <h4>1 GBP = 1.23355 USD</h4>
        </div>
        <div className="footer">
          <div className="left">
            <h4><AiOutlineExclamationCircle /></h4>
            <p>
              We use the mid-market rate for our Converter. This is for informational purposes only. <br />
              You won’t receive this rate when sending money. <a href="#"> Login to view send rates</a> </p>
          </div>
          <div className="right">
            <div className="btn">
              <button className='btn1'>Track currency</button>
              <button className='btn2'>View transfer quote</button>
            </div>
            <p> <a href="#">US Dollar</a> to <a href="#">British Pound</a> conversion — Last updated Apr 22, 2024, 11:04 UTC</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
