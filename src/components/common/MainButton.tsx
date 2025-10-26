import { Button } from "../ui/button";

type MainButtonProps = {
  text: string;
  action?: () => void;
  disabled?: boolean;
  classes?: string;
  compact?: boolean;
};

const MainButton = ({
  text,
  action,
  disabled = false,
  classes = "",
  compact = false,
}: MainButtonProps) => {
  return (
    <Button
      className={`bg-primary text-white ${
        compact ? "h-[2.5rem] px-6 text-[0.875rem]" : "h-[3.68754rem] w-[9.25rem] text-[1.125rem]"
      } font-[600] select-none rounded-[0.625rem] hover:bg-primary/80 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 ${classes}`}
      onClick={!disabled ? action : undefined}
      type="button"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MainButton;
