import React from 'react'
import CommanSection from '../Components/CommanSection'

export default function Contact() {
  return (
    <div>
        <div>
            <CommanSection title = "Contact"></CommanSection>
        </div>

        <section className='container mt-5'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <h3 className='text-center'>Head Office (Ahmedabad)</h3>
                    <p className='text-center'>First Floor, Aditya Avenue, Visat Ghandhinagar Highway, Above Havmore Restaurant, Motera, Ahmedabad Gujarat 380015 India</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'></div>
                <div className='col-lg-4 col-md-4 col-sm-4'></div>
            </div>
        </section>
    </div>
  )
}
