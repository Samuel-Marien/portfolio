import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RiMailSendLine } from 'react-icons/ri'
import { AiFillAlert } from 'react-icons/ai'

const MySubmitButton = (props) => {
  const { title, icon, className, iconClass } = props
  return (
    <div
      className="text-white hover:text-slate-800 bg-slate-800 hover:bg-white cursor-pointer
       hover:shadow-lg transition-all duration-500 rounded-lg md:px-6 md:py-2 px-2 w-max"
    >
      <button
        type="submit"
        className={`${className} text-base md:text-xl flex items-center `}
        rel="noreferrer"
      >
        {title}
        <span className={`${iconClass}  ml-5 `}>{icon}</span>
      </button>
    </div>
  )
}
MySubmitButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.element
}

const MyErrorMessage = (props) => {
  const { errorType } = props
  return (
    <div
      style={{ boxShadow: '0 0 4px red' }}
      className="mt-2 mb-8 flex items-center justify-center text-red-200 bg-red-600 p-2 rounded"
    >
      <span className="animate-pulse text-xl">
        <AiFillAlert />
      </span>
      <span className="mx-10 text-red-100">{errorType}</span>
      <span className="animate-pulse text-xl">
        <AiFillAlert />
      </span>
    </div>
  )
}
MyErrorMessage.propTypes = {
  errorType: PropTypes.string
}

const Contact = () => {
  const form = useRef()

  // Email service
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  // Form validator
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: ''
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
      message: Yup.string()
        .max(2000, 'Must be 2000 characters or less')
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      user_email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      sendEmail(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div
      className="h-screen pt-36"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(images/bgContact.png)'
      }}
    >
      <div className="bg-white mx-48 p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
          <div className="h-96 flex flex-col justify-center ">
            <p className="md:tracking-widest text-5xl font-bold text-slate-800">
              Drop me a line. I would like to hear from you.
            </p>
          </div>
          <div className="">
            <form
              className="flex flex-col justify-around h-full"
              ref={form}
              onSubmit={formik.handleSubmit}
            >
              <p className="font-bold text-4xl text-red-500">Get in Touch</p>

              <input
                className="border p-1 rounded"
                placeholder="Name"
                name="user_name"
                id="user_name"
                type="text"
                {...formik.getFieldProps('user_name')}
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <MyErrorMessage errorType={formik.errors.user_name} />
              ) : null}

              <input
                className="border p-1 rounded"
                placeholder="Email"
                name="user_email"
                id="user_email"
                type="email"
                {...formik.getFieldProps('user_email')}
              />
              {formik.touched.user_email && formik.errors.user_email ? (
                <MyErrorMessage errorType={formik.errors.user_email} />
              ) : null}

              <textarea
                className="border p-1 rounded h-36"
                placeholder="Message"
                name="message"
                id="message"
                type="textarea"
                {...formik.getFieldProps('message')}
              />
              {formik.touched.message && formik.errors.message ? (
                <MyErrorMessage errorType={formik.errors.message} />
              ) : null}
              <MySubmitButton title="Envoyé" icon={<RiMailSendLine />} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
