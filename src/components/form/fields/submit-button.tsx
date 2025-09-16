import { Button } from "@/components/ui/button";
import { sendEmail } from "@/lib/email";
import { useFormStore } from "@/stores/form.store";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SubmitButton = () => {
  const { data,setThankYou } = useFormStore();

  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();


    setLoading(true);
    try {
      await sendEmail(data);
      setThankYou(true)
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Kunde inte skicka e-post. Försök igen senare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size={"lg"}
      className={` min-w-[200px] font-bold `}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <Loader className=" animate-spin" /> : "Skicka"}
    </Button>
  );
};

export default SubmitButton;
