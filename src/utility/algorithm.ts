type HistoricalData = {
  date: string;
  quantity: number;
};

const historicalData: HistoricalData[] = [
  { date: "2023-01-01", quantity: 10 },
  { date: "2023-02-01", quantity: 12 },
  { date: "2023-03-01", quantity: 15 },
];

function predictFutureOrders(
  historicalData: HistoricalData[],
  futureMonths: number
) {
  const millisecondsPerMonth = 30 * 24 * 60 * 60 * 1000;

  const features = historicalData.map((data, index) => [
    (index + 1) * millisecondsPerMonth,
  ]);
  const labels = historicalData.map((data) => data.quantity);

  function linearRegression(features: any, labels: any) {
    const meanFeature =
      features.reduce((acc: any, val: any) => acc + val, 0) / features.length;
    const meanLabel =
      labels.reduce((acc: any, val: any) => acc + val, 0) / labels.length;

    const numerator = features.reduce(
      (acc: any, val: any, index: number) =>
        acc + (val - meanFeature) * (labels[index] - meanLabel),
      0
    );
    const denominator = features.reduce(
      (acc: any, val: any) => acc + Math.pow(val - meanFeature, 2),
      0
    );

    const slope = numerator / denominator;
    const intercept = meanLabel - slope * meanFeature;

    return { slope, intercept };
  }

  const { slope, intercept } = linearRegression(features, labels);

  const predictedOrders = [];
  for (let i = 1; i <= futureMonths; i++) {
    const futureDate = new Date(
      new Date().getTime() + i * millisecondsPerMonth
    );
    const futureFeature = [(historicalData.length + i) * millisecondsPerMonth];
    const predictedQuantity = slope * futureFeature[0] + intercept;
    predictedOrders.push({
      date: futureDate.toISOString().split("T")[0],
      quantity: predictedQuantity,
    });
  }

  return predictedOrders;
}

const futureOrders = predictFutureOrders(historicalData, 6);
console.log("Predicted Future Orders:");
console.log(futureOrders);
