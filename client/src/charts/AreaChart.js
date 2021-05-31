// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'
import Tooltip from './Tooltip'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "day": "2021-04-08",
      "value": 2
    },
    {
      "day": "2021-04-07",
      "value": 2
    },
    {
      "day": "2021-04-06",
      "value": 2
    },
    {
      "day": "2021-04-05",
      "value": 2
    },
    {
      "day": "2021-03-16",
      "value": 1
    },
    {
      "day": "2021-01-16",
      "value": 0
    },
    {
      "day": "2021-01-01",
      "value": 0
    }
  ]
const AreaChart = (props) => (
    <div style={{height: 300}}>
        <ResponsiveCalendar
            data={data}
            from={`${new Date().getFullYear()}-01-02`}
            to={`${new Date().getFullYear()}-12-31`}
            emptyColor="#eeeeee"
            colors={[ '#f47560', '#619bcd', '#61cdbb' ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthSpacing={5}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            onClick={(day, event) => console.log(day)}
            tooltip={data => <Tooltip data={data} />}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
    </div>
)

export default AreaChart