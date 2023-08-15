import '../Statistics-slice/statistics.scss';
import StatisticsBlock from '../StatisticsBlock/StatisticsBlock';

function StatisticsSlice() {
    return (
        <div className="Statistics-slice">
            <div className="container Statistics-slice-container">
                <StatisticsBlock />
                <StatisticsBlock />
                <StatisticsBlock />
            </div>
        </div>
    );
}

export default StatisticsSlice;