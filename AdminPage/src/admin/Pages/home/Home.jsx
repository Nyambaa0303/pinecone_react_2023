import { Chart } from "../../../admin/components/chart/Chart";
import FeaturedInfo from "../../../admin/components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../admin/components/widgetSm/WidgetSm";
import WidgetLg from "../../../admin/components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey="Active User"
        grid
        title="User Analytics"
      />
      <div className="homeWidgts">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
