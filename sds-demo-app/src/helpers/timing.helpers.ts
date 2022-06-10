type MarkerName = "start" | "visit-data" | "add-data-done" | "add-data-start";

export function addMarker(markerName: MarkerName) {
  window.performance.mark(markerName);
}

export function getPerformanceJson() {
  const measures: [string, MarkerName, MarkerName][] = [
    ["time-to-data", "start", "visit-data"],
    ["time-add-button", "visit-data", "add-data-start"],
    ["time-start-add", "visit-data", "add-data-start"],
    ["time-add-data", "add-data-start", "add-data-done"],
    ["total-duration", "start", "add-data-done"],
  ];

  const jsonArray = measures.map(([name, start, end]) =>
    window.performance.measure(name, start, end).toJSON()
  );

  console.log(jsonArray);
}
