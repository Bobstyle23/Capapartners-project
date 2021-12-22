import React from "react";

interface Data {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
  docs?: number;
}
interface Props {
  handleChange: (check: any) => void;
  check: boolean;
  // data: Data[];
}

const ConsultationCard: React.FC<Props> = ({ check, handleChange }) => {
  return <div></div>;
};

export default ConsultationCard;
