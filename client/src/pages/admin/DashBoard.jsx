import Chart from "../../components/admin/dashboard/Chart";

const DashBoard = () => {
    return (
        <div className='px-10 w-3/4 h-[650px]  overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>DashBoard</p>
            <main>
                <div className="analyse">
                    <div className="sales">
                        <div className="status">
                            <div className="info">
                                <h3>Total Sales</h3>
                                <h1>$65,024</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+81%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visits">
                        <div className="status">
                            <div className="info">
                                <h3>Total Users</h3>
                                <h1>24,981</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>-48%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="searches">
                        <div className="status">
                            <div className="info">
                                <h3>Orders</h3>
                                <h1>14,147</h1>
                            </div>
                            <div className="progresss">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="percentage">
                                    <p>+21%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Chart />
        </div>
    )
}

export default DashBoard