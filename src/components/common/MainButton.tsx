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
      className={`bg-superGray text-white ${
        compact ? "h-[2.5rem] w-[7rem] text-[0.875rem]" : "h-[3.68754rem] w-[9.25rem] text-[1.125rem]"
      } font-[500] select-none rounded-[0.625rem] hover:opacity-90 hover:bg-superGray ${classes}`}
      onClick={!disabled ? action : undefined}
      type="button"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default MainButton;
