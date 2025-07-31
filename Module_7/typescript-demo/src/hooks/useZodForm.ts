import { useState } from 'react';
import { ZodType } from 'zod';

type ZodFormReturn<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setValues: React.Dispatch<React.SetStateAction<T>>;
};

export default function useZodForm<T extends Record<string, any>>(
  schema: ZodType<T>,
  onValidSubmit: (data: T) => void,
  initialValues: T
): ZodFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (result.success) {
      setErrors({});
      onValidSubmit(result.data);
    } else {
      const fieldErrors: Partial<Record<keyof T, string>> = {};
      result.error.issues.forEach(err => {
        const fieldName = err.path[0] as keyof T;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
  };
}