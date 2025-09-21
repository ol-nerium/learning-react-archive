export interface stateType {
  value: string;
  picturesData: any[];
  page: number;
  totalPages: number;
  loading: boolean;
  modalData: { visible: boolean; dataOriginal: string; alt: string };
  status: string;
}
