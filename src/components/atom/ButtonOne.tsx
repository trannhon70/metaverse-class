import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

interface ButtonOneType {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;
}

const ButtonOne: React.FC<ButtonOneType> = ({
  text,
  className,
  isLoading,
  type = "button",
  ...props
}) => {
  return (
    <Button
      type={type}
      {...props}
      className={clsx(
        "text-3xl text-[#ED8087] bg-[#403248] w-fit h-[60px] px-20 rounded-full mx-auto",
        className
      )}>
      {isLoading && <Loader2 className="mr-6 h-6 w-6 animate-spin" />}
      {text}
    </Button>
  );
};

export default ButtonOne;
