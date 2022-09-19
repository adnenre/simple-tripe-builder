// BUTTON UI INTERFACE
export interface ButtonUI extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  btnType?: "primary" | "secondary" | "danger" | "warning" | "info" | undefined;
}

// INPUT UI INTERFACE
export interface InputUI extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: "text" | "password" | "file" | "date";
  value?: string;
  required?: boolean;
  onUpload?: (file: any) => void;
}
export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  currrentTripId: string | undefined;
  onSelectAction: (currrentTripId: string) => void;
}

export interface ITrip {
  id: string | undefined;
  name: string | undefined;
  destination: string | undefined;
  start_date: string | undefined;
  end_date: string | undefined;
  trip_image: string | undefined;
}
