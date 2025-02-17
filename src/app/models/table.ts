export type Columns<T> = {
  accessorKey: keyof T;
  key: string;
  header: string;
  isHeading?: boolean;
  templateName?: string;
};
