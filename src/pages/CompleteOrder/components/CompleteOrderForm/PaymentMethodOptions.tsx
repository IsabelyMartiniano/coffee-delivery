import { PaymentMethodOptionsContainer } from "./styles";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";
import { paymentMethods } from "../CompleteOrderForm/PaymentMethods"

export function PaymentMethodOptions() {
    const { 
        register, 
        formState: { errors }, 
    } = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymentMethodOptionsContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput 
                    icon={icon} 
                    label={label} 
                    value={key} 
                    id={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodOptionsContainer>
    )
}