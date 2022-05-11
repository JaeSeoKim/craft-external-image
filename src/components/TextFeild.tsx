import React from 'react'
import { FieldInputProps, useField } from 'formik'
import cx from 'classnames'

const TextField: React.FC<{ label: string } & FieldInputProps<string>> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <div>
      <label className={'flex flex-col gap-1 text-craftSmall font-semibold'}>
        {label}
        <input
          {...field}
          {...props}
          type={'text'}
          className={cx(
            'form-input border-none text-craftSmall p-2 rounded bg-zinc-100 dark:bg-zinc-600',
            meta.touched && meta.error && 'text-red-500 ring-2 ring-red-500 focus:ring-red-500',
          )}
        />
      </label>
      {meta.touched && meta.error && <p className="text-craftSmall text-red-500">{meta.error}</p>}
    </div>
  )
}

export default TextField
