import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

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

  return (
    <div
      className="h-screen pt-36"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '1800px',
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
            <p className="font-bold text-4xl text-red-500">Get in Touch</p>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
