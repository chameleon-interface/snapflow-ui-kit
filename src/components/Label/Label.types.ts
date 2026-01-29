import { ComponentPropsWithoutRef } from "react";
import { TypographyProps } from "../Typography";

export type LabelProps = {
    text?: string;
    textVariant?: TypographyProps['variant'];
    required?: boolean;
    color?: string;
    fieldId?: string;
    className?: string;
} & ComponentPropsWithoutRef<'label'>;