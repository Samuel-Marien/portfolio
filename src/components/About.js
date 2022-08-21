import React from 'react'

const About = () => {
  return (
    <div className="flex">
      <div>
        <img src="public\images\profil1.jpg" />
      </div>
      <div>
        <p>About me</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default About
