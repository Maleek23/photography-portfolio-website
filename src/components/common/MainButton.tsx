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
      className={`relative bg-primary/90 backdrop-blur-xl border border-white/20 light:border-primary/30 text-white ${
        compact ? "h-[2.5rem] px-6 text-[0.875rem]" : "h-[3.68754rem] w-[9.25rem] text-[1.125rem]"
      } font-[600] select-none rounded-xl hover:bg-primary hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] ${classes}`}
      onClick={!disabled ? action : undefined}
      type="button"
      disabled={disabled}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl opacity-50"></div>
    </Button>
  );
};

export default MainButton;
