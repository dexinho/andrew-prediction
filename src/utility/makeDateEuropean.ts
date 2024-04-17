export const makeDateEuropean = (dateData: any[] | null): any[] => {
  const fixedData: any[] = [];

  if (!dateData) return [];

  dateData.forEach((data: any) => {
    const prop: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (typeof value === "string" && value.split("-").length === 3) {
          prop[key] = value.split("-").reverse().join("-");
        } else {
          prop[key] = value;
        }
      }
    }

    fixedData.push(prop);
  });

  console.log("fixedDateObject", fixedData);

  return fixedData;
};
