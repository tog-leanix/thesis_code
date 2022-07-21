type PerformanceName =
  | "total-duration"
  | "time-add-data"
  | "time-start-add"
  | "time-to-data";

interface MyPerformanceEntry extends PerformanceEntry {
  name: PerformanceName;
}

interface RelativePerformanceRunData {
  runIndex: number | "Average";
  type?: "Normal" | "SDS";
  totalDuration: number;
  "time-add-data": number;
  "time-start-add": number;
  "time-to-data": number;
}

const normalPerformanceData = calculatePerformanceData("./data/normal");
const sdsPerformanceData = calculatePerformanceData("./data/sds");
const avaragePerformanceData = getAvaragePerformanceData(
  normalPerformanceData[normalPerformanceData.length - 1],
  sdsPerformanceData[sdsPerformanceData.length - 1]
);

writeFilesASJSON("./normalCalculatedData.json", normalPerformanceData);
writeFilesASJSON("./sdsCalculatedData.json", sdsPerformanceData);
writeFilesASJSON("./avaragesCalculatedData.json", avaragePerformanceData);

writeFilesASCSV("./chiTestData.csv", avaragePerformanceData);
writeFilesASCSV("./totalTime.csv", [
  normalPerformanceData.reduce((prev, d, i) => {
    prev[i] = d.totalDuration;
    return prev;
  }, {} as Record<string, number>),
  sdsPerformanceData.reduce((prev, d, i) => {
    prev[i] = d.totalDuration;
    return prev;
  }, {} as Record<string, number>),
]);

function calculatePerformanceData(path: string) {
  const calculatedData = readFilesASJSON(path)
    .map(mapPerformanceDataToRelativeData)
    .sort((a, b) => a["time-start-add"] - b["time-start-add"])
    .sort((a, b) => a["time-to-data"] - b["time-to-data"]);
  calculatedData.push(addAvarageData(calculatedData));
  return calculatedData;
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

function writeFilesASJSON<T>(path: string, data: Array<T>) {
  const __currentDir = new URL(".", import.meta.url);
  const dataUrl = new URL(path, __currentDir);
  Deno.writeTextFileSync(dataUrl, JSON.stringify(data));
}

function writeFilesASCSV<T>(path: string, data: Array<T>) {
  const keys = Object.keys(data[0]);
  const headers = keys.join("\t") + "\n";
  const rows = data
    .map((entry) =>
      Object.values(entry)
        .map((a) => Number.parseFloat(a).toString().replace(".", ","))
        .join("\t")
    )
    .join("\n");
  const csvContent = `${headers}${rows}`;
  const __currentDir = new URL(".", import.meta.url);
  const dataUrl = new URL(path, __currentDir);
  Deno.writeTextFileSync(dataUrl, csvContent);
}

function mapPerformanceDataToRelativeData(
  testRun: MyPerformanceEntry[],
  index: number
): RelativePerformanceRunData {
  const totalDuration = testRun.find(
    (run) => run.name === "total-duration"
  )?.duration;
  if (totalDuration) {
    const runData = testRun.reduce((prev, run) => {
      if (run.name !== "total-duration") {
        prev[run.name] = run.duration / totalDuration;
      } else {
        prev["totalDuration"] = totalDuration;
      }
      return prev;
    }, {} as RelativePerformanceRunData);
    runData.runIndex = index + 1;
    return runData;
  } else {
    throw new Error("No total duration found.");
  }
}

function addAvarageData(
  calculatedData: RelativePerformanceRunData[]
): RelativePerformanceRunData {
  const initAvarageData: RelativePerformanceRunData = {
    "time-add-data": 0,
    "time-start-add": 0,
    "time-to-data": 0,
    totalDuration: 0,
    runIndex: "Average",
  };
  const sumOfAllRuns = calculatedData.reduce((prev, data) => {
    prev["time-add-data"] = prev["time-add-data"] + data["time-add-data"];
    prev["time-start-add"] = prev["time-start-add"] + data["time-start-add"];
    prev["time-to-data"] = prev["time-to-data"] + data["time-to-data"];
    prev["totalDuration"] = prev["totalDuration"] + data["totalDuration"];
    return prev;
  }, initAvarageData);
  sumOfAllRuns["time-add-data"] =
    sumOfAllRuns["time-add-data"] / calculatedData.length;
  sumOfAllRuns["time-start-add"] =
    sumOfAllRuns["time-start-add"] / calculatedData.length;
  sumOfAllRuns["time-to-data"] =
    sumOfAllRuns["time-to-data"] / calculatedData.length;
  sumOfAllRuns["totalDuration"] =
    sumOfAllRuns["totalDuration"] / calculatedData.length;
  return sumOfAllRuns;
}

function getAvaragePerformanceData(
  normal: RelativePerformanceRunData,
  sds: RelativePerformanceRunData
): [RelativePerformanceRunData, RelativePerformanceRunData] {
  normal.totalDuration = normal.totalDuration / 1000;
  sds.totalDuration = sds.totalDuration / 1000;
  return [
    {
      ...normal,
      "time-add-data": normal["time-add-data"] * normal.totalDuration,
      "time-start-add": normal["time-start-add"] * normal.totalDuration,
      "time-to-data": normal["time-to-data"] * normal.totalDuration,
      type: "Normal",
    },
    {
      ...sds,
      "time-add-data": sds["time-add-data"] * sds.totalDuration,
      "time-start-add": sds["time-start-add"] * sds.totalDuration,
      "time-to-data": sds["time-to-data"] * sds.totalDuration,
      type: "SDS",
    },
  ];
}

function calculateChiSquareData(
  normalPerformanceData: RelativePerformanceRunData[],
  sdsPerformanceData: RelativePerformanceRunData[]
) {
  const normal = normalPerformanceData
    .filter((d) => d.runIndex !== "Average")
    .map((d) => d.totalDuration);
  const sds = sdsPerformanceData
    .filter((d) => d.runIndex !== "Average")
    .map((d) => d.totalDuration);

  return new Array(normal.length)
    .fill(1)
    .map((_, index) => ({ index, normal: normal[index], sds: sds[index] }));
}
