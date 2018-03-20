export interface RequestDetailsModel {
  status: string;
  assignTo: string;
  cupids: Array<string>;
  history: {
    title: string;
    createdBy: string;
    timestamp: number;
    message: string;
    isInternal: boolean;
  };
}
