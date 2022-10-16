import "./App.css";

const ControlPanel = () => {
  const panelWide = 350;
  const panelSmall = 200;
  const panelHeight = 100;
  const standHeight = 80;
  const standWidth = 70;

  return (
    <div className="control-panel-wrapper">
      <svg
        style={{
          width: panelWide,
          height: panelHeight + standHeight,
          display: 'block',
          margin: 'auto',
        }}
      >
        <polygon
          points={
            `${panelWide / 2 - standWidth / 2},${panelHeight} ` + // Top Left
            `${panelWide / 2 + standWidth / 2},${panelHeight} ` + // Top Right
            `${panelWide / 2 + standWidth / 2},${panelHeight + standHeight} ` + // Bottom Right
            `${panelWide / 2 - standWidth / 2},${panelHeight + standHeight} ` // Bottom Left
          }
          className="control-panel"
        />

        <polygon
          points={
            `0,0 ` + // Top Left
            `${panelWide},0 ` + // Top Right
            `${panelWide / 2 + panelSmall / 2},${panelHeight} ` + // Bottom Right
            `${panelWide / 2 - panelSmall / 2},${panelHeight} ` // Bottom Left
          }
          className="control-panel"
        />
      </svg>
    </div>
  );
};

export default ControlPanel;
