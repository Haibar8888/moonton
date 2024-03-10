import React, { useEffect, useRef } from 'react';


export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    defaultValue,
    variant = "primary",
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className} ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                defaultValue={defaultValue}
                // onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
