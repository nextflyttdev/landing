import DatePicker from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { ServiceField } from "../fields/service-field";
import { RadioButtonCustomerType } from "../fields/radio-button-customer-type";

export function StartPage() {
  const { data, setData, errors } = useFormStore();
  return (
    <div>
      <FormPageHeader
        title="Börja din offertförfrågan"
        subtitle={
          <>
            Börja din bokning med kundtyp, kontaktinformation och
            utförandedatum. Om du behöver hjälp eller vill veta mer om våra
            tjänster{" "}
            <a
              href="/kontakta-oss"
              className="font-semibold text-primary hover:text-accent-color underline"
            >
              kontakta oss här
            </a>
          </>
        }
      />
      <div className="flex flex-col gap-6 lg:gap-8 w-full">
        <div>
          <RadioButtonCustomerType
            value={data.customerType}
            onChange={(v) => {
              setData({ customerType: v });
            }}
            name="customerType"
          />
        </div>
        <div className="grid w-full items-center gap-1.5" id="customerName">
          <Label htmlFor="name" >
            Fullständigt namn *
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Anders Andersson"
            value={data.customerName || ""}
            onChange={(e) => setData({ customerName: e.target.value })}
          />
          {errors.includes("customerName") && (
            <p className="text-red-500 text-sm mt-[-6px]">
              Namn måste fyllas i
            </p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5" id="customerEmail">
          <Label htmlFor="email" >
            E-post*
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="exempel@gmail.com"
            value={data.customerEmail || ""}
            onChange={(e) => setData({ customerEmail: e.target.value })}
          />
          {errors.includes("customerEmail") && (
            <p className="text-red-500 text-sm mt-[-6px]">
              E-post måste fyllas i
            </p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5" id="customerEmail">
          <Label htmlFor="phone" >
            Telefon*
          </Label>
          <Input
            type="number"
            id="phone"
            placeholder="070-123 45 67"
            value={data.customerPhone || ""}
            onChange={(e) => setData({ customerPhone: e.target.value })}
          />
          {errors.includes("customerPhone") && (
            <p className="text-red-500 text-sm mt-[-6px]">
              Telefon måste fyllas i
            </p>
          )}
        </div>
        <div className="grid w-full items-center gap-2">
          <div>
            <Label htmlFor="date">Välj gärna ett datum (Lämna tomt om obestämt.)</Label>
          
          </div>
          <DatePicker
            date={data.date}
           calendarDisabled={{before:new Date()}}
            setDate={(e) => {
              setData({ date: e });
            }}
            helper="Välj ett datum"
          />
        </div>

        <div className="grid w-full  items-center gap-1.5" id="service">
          <ServiceField
            error={errors.includes("service")}
            value={data.service}
            onChange={(v) => {
              setData({ service: v });
            }}
          />
        </div>
      </div>
    </div>
  );
}