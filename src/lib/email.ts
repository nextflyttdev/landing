import emailjs from "@emailjs/browser";
import { OfferFormData } from "./types/form.types";

const SERVICE_ID = "service_joadttf";
const TEMPLATE_ID = "template_78s8rvs";
const PUBLIC_KEY = "eZXiu3IFmQIhfr7pa";

/**
 * Converts an object of fields into an HTML table for email formatting
 */
export const formatFieldsToHTML = (fields: Record<string, any>) => {
  const rows = Object.entries(fields)
    .map(([key, value]) => {
      let displayValue: string;

      if (Array.isArray(value)) {
        // Format arrays as comma-separated list
        displayValue = value.join(", ");
      } else if (typeof value === "object" && value !== null) {
        // Format objects as JSON string
        displayValue = JSON.stringify(value, null, 2);
      } else {
        displayValue = String(value);
      }

      return `
        <tr>
          <td style="padding:8px; font-weight:600; text-transform:capitalize; border:1px solid #ddd;">
            ${key}
          </td>
          <td style="padding:8px; border:1px solid #ddd;">
            ${displayValue}
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <table style="border-collapse:collapse; font-family:sans-serif; font-size:14px; width:100%; max-width:600px;">
      ${rows}
    </table>
  `;
};


/**
 * Sends an email using EmailJS
 */
export const sendEmail = async (fields: OfferFormData) => {
  const htmlContent = formatFieldsToHTML(fields);

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {

      email: fields.customerEmail,
      message: htmlContent,
    },
    PUBLIC_KEY
  );
};
