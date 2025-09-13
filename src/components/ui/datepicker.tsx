import { useState } from "react";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { Calendar } from "./calendar";
import { cn } from "@/lib/utils";

interface IDatePicker {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  helper: string;
}

const DatePicker = (props: IDatePicker) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    props.setDate(date);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full justify-start text-left h-14 text-base font-normal ring-offset-background focus:ring-2 focus:ring-ring",
            !props.date && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {props.date ? (
            format(props.date, "PPP", { locale: sv })
          ) : (
            <span>{props.helper}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props.date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;