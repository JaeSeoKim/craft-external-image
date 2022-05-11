import React from 'react'
import { Formik } from 'formik'
import TextField from '../components/TextFeild'
import CheckBoxFeild from '../components/CheckBoxFeild'

const InsertImage: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          url: '',
          isInsertToPageCover: false,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          const page = await craft.dataApi.getCurrentPage()

          if (page.status === 'error') {
            throw new Error('getCurrentPage failed')
          }

          if (values.isInsertToPageCover) {
            page.data.style.coverImage = {
              enabled: true,
              url: values.url,
            }

            await craft.dataApi.updateBlocks([page.data])
          } else {
            const imageBlock = craft.blockFactory.imageBlock({
              url: values.url,
            })

            await craft.dataApi.addBlocks([imageBlock], {
              type: 'afterBlockLocation',
              pageId: page.data!.id,
            })
          }

          setSubmitting(false)
        }}
        validate={values => {
          const errors: {
            [key in keyof typeof values]?: string
          } = {}

          console.log(values)

          if (!values.url || values.url === '') {
            errors.url = 'The value of the URL must not be empty.'
          } else if (
            !values.url.match(
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            ) &&
            !values.url.match(/data:image\/([a-zA-Z]*);base64[^"]/g)
          ) {
            errors.url = 'Not a valid URL format'
          }
          return errors
        }}
      >
        {({ handleSubmit, errors, isSubmitting, handleChange, handleBlur, values }) => (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <TextField
              label="External Image URL"
              name="url"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <CheckBoxFeild
              label="Insert To Current Page Cover"
              name="isInsertToPageCover"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              disabled={isSubmitting || !!errors.url}
              className="text-craftSmall p-2 rounded bg-zinc-300 dark:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating Image Block...' : 'Create Image Block'}
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default InsertImage
