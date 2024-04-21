
const DashBoard = () => {
  return (
    <div className='px-10 w-3/4 h-[650px] overflow-y-scroll'>
      <p className='text-4xl font-semibold tracking-wider text-textGray'>DashBoard</p>
      <main>
        <div className="analytics">
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Orders</h5>
                <p>3 Products</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <i className='bx bx-map-pin'></i>
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Wishlist</h5>
                <p>50 Products</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <i className='bx bx-user-voice'></i>
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Cart</h5>
                <p>4 Products</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <i className='bx bxs-plane-land'></i>
          </div>
          <div className="item">
            <div className="progress">
              <div className="info">
                <h5>Addresses</h5>
                <p>2 Address</p>
              </div>
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <i className='bx bxs-castle'></i>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashBoard