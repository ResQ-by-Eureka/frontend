import React from 'react'
import woman from '../assets/Bye-cuate.png'
import { Button } from './Button'
import { FaCheckDouble, FaMapPin } from 'react-icons/fa'
import bg from '../assets/bgwomen.jpg'

export const Landing = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-around place-items-center md:px-20 px-10 bg-[rgba(35, 41, 70, 0.6)'>
        <img className='h-screen md:h-2/3 lg:h-full md:w-full object-cover absolute top-0 left-0 right-0 -z-10 opacity-50' src={bg} alt='women smiling happily' />
        <div className='text-4xl md:text-7xl md:w-3/4 md:pt-32 md:pb-12'>
          <div className='my-auto mb-8'>The go to app for your personal safety.<br /></div>
          <div className='text-xl md:w-[70%] mx-auto'>We're advocating for a world where everyone can live without fear of violence or harm, and where respect and dignity are fundamental values.</div>
          <Button title="Learn More" btnstyles='bg-button text-xl px-6 py-2 rounded-lg my-6' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row px-10 gap-20 md:px-20 mb-20 md:my-10 pt-20'>
        <img className='md:px-6 object-cover' src={woman} width={400} alt="woman saying bye" />
        <div className='md:text-left mx-auto'>
          <div className='text-4xl font-bold text-button mb-12'>What is Salva?</div>
          <div className='text-xl'>Salva is a unique emergency messaging app that offers a range of features to help women feel safer when they are out and about. <br /><span className=' block mt-8'>We offer a user-friendly and easy-to-use setup process, which means that users can start using the app almost immediately. With just a Google authentication, they can have access to the features they need to stay safe.</span></div>
        </div>
      </div>
      <div className=''>
        <div className='text-4xl font-bold mb-16 md:mb-20 text-button'>Our Services</div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 px-10 md:px-20'>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Check in </div>
              <div className='text-button'><FaCheckDouble /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Tracking </div>
              <div className='text-button'><FaMapPin /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Check in </div>
              <div className='text-button'><FaCheckDouble /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Tracking </div>
              <div className='text-button'><FaMapPin /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Check in </div>
              <div className='text-button'><FaCheckDouble /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
          <div className='flex flex-col bg-paragraph rounded-lg place-items-center px-20 py-12 text-primary text-2xl'>
              <div className='font-bold text-4xl mb-5'>Tracking </div>
              <div className='text-button'><FaMapPin /></div>
              <div className='mt-10'>Feeling unsafe about meeting someone for the first time? Your creepy neighbor? An online date? Tell the app to check on you every 30 minutes from</div>
          </div>
        </div>
      </div>
    </div>
  )
}
