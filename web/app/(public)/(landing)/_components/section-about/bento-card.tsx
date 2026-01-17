import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function BentoCard({ children, className }: Props) {
  return <div>BentoCard</div>;
}
