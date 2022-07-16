type PerformanceName =
  | "total-duration"
  | "time-add-data"
  | "time-start-add"
  | "time-add-button"
  | "time-to-data";

interface MyPerformanceEntry extends PerformanceEntry {
  name: PerformanceName;
}

interface RelativePerformanceData {
  name: PerformanceName;
  relativeTime: number;
}

const normalPerformanceData = calculatePerformanceData("./data/normal");
const sdsPerformanceData = calculatePerformanceData("./data/sds");

writeFilesASJSON("./normalCalculatedData.json", normalPerformanceData);
writeFilesASJSON("./sdsCalculatedData.json", sdsPerformanceData);

function calculatePerformanceData(path: string) {
  return readFilesASJSON(path)
    .map(mapPerformanceDataToRelativeData)
    .reduce((prev, run) => {
      prev.push(...run);
      return prev;
    }, [] as RelativePerformanceData[]);
}

function mapRunDataToRelative(
  run: MyPerformanceEntry,
  totalDuration: number
): RelativePerformanceData {
  const relativeTime = run.duration / totalDuration;

  return {
    name: run.name,
    relativeTime,
  };
}

function readFilesASJSON(path: string) {
  const __currentDir = new URL(".", import.meta.url);
  const dataUrl = new URL(path, __currentDir);
  return Array.from(Deno.readDirSync(dataUrl)).map((entry) => {
    const fileUrl = new URL(`${path}/${entry.name}`, __currentDir);
    const text = Deno.readTextFileSync(fileUrl);
    const json = JSON.parse(text) as MyPerformanceEntry[];
    return json;
  });
}

function writeFilesASJSON(path: string, data: RelativePerformanceData[]) {
  const __currentDir = new URL(".", import.meta.url);
  const dataUrl = new URL(path, __currentDir);
  Deno.writeTextFileSync(dataUrl, JSON.stringify(data));
}

function mapPerformanceDataToRelativeData(testRun: MyPerformanceEntry[]) {
  const totalDuration = testRun.find(
    (run) => run.name === "total-duration"
  )?.duration;
  if (totalDuration) {
    const relativeTime = testRun
      .map((run) => mapRunDataToRelative(run, totalDuration))
      .filter(
        (entry) =>
          entry.name === "time-to-data" ||
          entry.name === "time-add-data" ||
          entry.name === "time-start-add"
      );
    return relativeTime;
  } else {
    throw new Error("No total duration found.");
  }
}
