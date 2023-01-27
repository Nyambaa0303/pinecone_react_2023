import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i1.sndcdn.com/artworks-000479984109-o17xg2-t500x500.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Big Gee</span>
            </td>
            <td className="widgetLgDate">2023.01.26</td>
            <td className="widgetLgAmount">$ 12435</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i1.sndcdn.com/artworks-000479984109-o17xg2-t500x500.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Big Gee</span>
            </td>
            <td className="widgetLgDate">2023.01.26</td>
            <td className="widgetLgAmount">$ 12435</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i1.sndcdn.com/artworks-000479984109-o17xg2-t500x500.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Big Gee</span>
            </td>
            <td className="widgetLgDate">2023.01.26</td>
            <td className="widgetLgAmount">$ 12435</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i1.sndcdn.com/artworks-000479984109-o17xg2-t500x500.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Big Gee</span>
            </td>
            <td className="widgetLgDate">2023.01.26</td>
            <td className="widgetLgAmount">$ 12435</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://i1.sndcdn.com/artworks-000479984109-o17xg2-t500x500.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Big Gee</span>
            </td>
            <td className="widgetLgDate">2023.01.26</td>
            <td className="widgetLgAmount">$ 12435</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
