import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import { match } from "./seacrhData";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
        }}
      >
        <ResponsiveChoropleth
          data={match}
          features={data?.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          unknownColor="#ffffff"
          domain={[0, 1000000]}
          label="properties.id"
          valueFormat=".2s"
          projectionScale={5000}
          projectionTranslation={[0.15, 1.3]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          borderWidth={0.5}
          isInteractive={true}
          borderColor="#111111"
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: true,
              translateX: -10,
              translateY: -100,
              itemsSpacing: 32,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 32,
              itemTextColor: "#57656B",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#ffffff",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
