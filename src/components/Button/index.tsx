import { ButtonContainer } from "./style";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | number
}

export function Button({ text, ...props }: ButtonProps) {
    return (
        <ButtonContainer {...props}>
            {text}
        </ButtonContainer>
    )
}