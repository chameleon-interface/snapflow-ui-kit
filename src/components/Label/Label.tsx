import clsx from "clsx";
import { Typography } from "../Typography";
import styles from './Label.module.css';
import { LabelProps } from "./Label.types";

export const Label = ({
    text,
    fieldId,
    textVariant = 'text-14-medium',
    required,
    color,
    className,
    htmlFor,
    ...rest
}: LabelProps) => {
    const resolvedHtmlFor = fieldId ?? htmlFor;

    return (
        <label className={clsx(styles.label, className)} {...rest} htmlFor={resolvedHtmlFor}>
            <Typography variant={textVariant} style={{ color }}>
                {text}
                {required && (
                    <>
                        <span className={styles.required} aria-hidden="true">
                            *
                        </span>
                        <span className={styles.srOnly}> (required)</span>
                    </>
                )}
            </Typography>
        </label>
    );
};
