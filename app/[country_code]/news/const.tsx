export const ProgressStatus = {
  "0": {
    en: "In Progress",
    cn: "進行中",
  },
  "1": {
    en: "Coming Soon",
    cn: "快將推出",
  },
  "2": {
    en: "Finished",
    cn: "已結束",
  },
};

export const ParseJSONToNewsClass = (jsonArr: any[]) => {
  return jsonArr.map(
    (item: any) =>
      new News(
        item.id,
        item.title,
        item.body,
        item.status,
        item.startTime,
        item.endTime
      )
  );
};

export class News {
  id: number;
  title: string;
  body: string[];
  status: string;
  startTime: string;
  endTime: string;

  constructor(
    id: number,
    title: string,
    body: string[],
    status: string,
    startTime: string,
    endTime: string
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.status = status;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
