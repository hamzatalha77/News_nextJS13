import Buttons from '@/components/buttons/buttons'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/18103058/pexels-photo-18103058/free-photo-of-husky-dogs-in-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="background"
          className={styles.image_filter}
        />
        <div className="absolute bottom-5 left-5 bg-[#66FCF1] p-1 text-white">
          <h1>Chat GPT New Generation</h1>
          <h2>You Gonna be Able to See the world.stay stunned </h2>
        </div>
      </div>
      <div>
        <div>
          <h1>Who I am ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            tempora aut eos vitae amet tenetur eligendi aspernatur magnam ipsum
            impedit inventore obcaecati, facilis incidunt accusamus optio, natus
            mollitia porro. Nihil. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aspernatur quod beatae illo, suscipit non possimus ducimus
            voluptates sunt, velit ab, fugiat modi perferendis aliquam
            praesentium rerum! Reprehenderit, reiciendis debitis?
          </p>
        </div>
        <div>
          <h1>What I do ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eius
            mollitia tempora, nihil obcaecati, ullam quis eum inventore error
            iusto quia ex. Veritatis quas facere perferendis, dolor eos delectus
            cum!
            <br />
            <br />
            -Lorem ipsum dolor sit -amet, consectetur adipisicing -elit.
            Tempora, fugit.
          </p>
          <Buttons url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
