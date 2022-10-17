import "./ControlPanel.css";
import Next from "@iconscout/react-unicons/icons/uil-skip-forward";
import Last from "@iconscout/react-unicons/icons/uil-step-backward";

const ControlPanel = () => {
  const panelWide = 350;
  const panelSmall = 200;
  const panelHeight = 100;
  const standHeight = 80;
  const standWidth = 70;

  return (
    <div
      className="control-panel-wrapper"
      style={{ height: standHeight + panelHeight * 0.75 }}
    >
      <div className="button-wrapper">
        <div style={{ flex: 5 }} />

        <div className="next-button">
          <Last />
        </div>

        <div style={{ flex: 0.75 }} />

        <div className="next-button">
          <Next />
        </div>

        <div style={{ flex: 5 }} />
      </div>

      <svg
        style={{
          width: panelWide,
          height: panelHeight + standHeight,
        }}
        className="panel-svg"
      >
        <polygon
          points={
            `${panelWide / 2 - standWidth / 2},${panelHeight} ` + // Top Left
            `${panelWide / 2 + standWidth / 2},${panelHeight} ` + // Top Right
            `${panelWide / 2 + standWidth / 2},${panelHeight + standHeight} ` + // Bottom Right
            `${panelWide / 2 - standWidth / 2},${panelHeight + standHeight} ` // Bottom Left
          }
          className="control-panel-polygon"
        />

        <polygon
          points={
            `0,0 ` + // Top Left
            `${panelWide},0 ` + // Top Right
            `${panelWide / 2 + panelSmall / 2},${panelHeight} ` + // Bottom Right
            `${panelWide / 2 - panelSmall / 2},${panelHeight} ` // Bottom Left
          }
          className="control-panel-polygon"
        />
      </svg>
    </div>
  );
};

export default ControlPanel;
