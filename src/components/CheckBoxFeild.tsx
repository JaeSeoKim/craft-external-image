import React from 'react'
import { FieldInputProps, useField } from 'formik'
import cx from 'classnames'

const CheckBoxFeild: React.FC<{ label: string } & Omit<FieldInputProps<string>, 'value'>> = ({ label, ...props }) => {
  const [field] = useField(props)

  return (
    <label className={'flex items-center gap-2 text-craftSmall font-semibold'}>
      <input
        {...field}
        {...props}
        type="checkbox"
        className={cx(
          'appearance-none form-checkbox',
          'w-4 h-4 rounded',
          'dark:bg-zinc-500',
          'border-zinc-300',
          'dark:border-zinc-400',
          'text-sky-500',
          'shadow-sm',
          'focus:border-indigo-300',
          'focus:ring',
          'focus:ring-offset-0',
          'focus:ring-indigo-200',
          'focus:ring-opacity-50',
        )}
      />
      {label}
    </label>
  )
}

export default CheckBoxFeild
