import "./featuredinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuresItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.435</span>
          <span className="featuredMoneyRate">
            -22,5
            <ArrowDownwardIcon className="featutedIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.435</span>
          <span className="featuredMoneyRate">
            -22,5
            <ArrowDownwardIcon className="featutedIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.435</span>
          <span className="featuredMoneyRate">
            +22,5
            <ArrowUpwardIcon className="featutedIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
