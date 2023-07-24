function StatisticsSlice() {
    return (
        <div className="Statistics-slice">
            <div className="container Statistics-slice-container">
                <div className="Statistics-slice__directions">
                    <div className="Statistics-slice__directions_text">направлений</div>
                    <div className="Statistics-slice__directions_cout Statistics-slice__title">6</div>
                </div>
                <div className="Statistics-slice__detachment">
                    <div className="Statistics-slice__detachment_text">отрядов</div>
                    <div className="Statistics-slice__detachment_cout Statistics-slice__title">20+</div>
                </div>
                <div className="Statistics-slice__fighters">
                    <div className="Statistics-slice__fighters_text">бойцов</div>
                    <div className="Statistics-slice__fighters_cout Statistics-slice__title">1000+</div>
                </div>
                <div className="Statistics-slice__years">
                    <div className="Statistics-slice__years_text">лет</div>
                    <div className="Statistics-slice__years_cout Statistics-slice__title">8</div>
                </div>
            </div>
        </div>
    );
}

export default StatisticsSlice;