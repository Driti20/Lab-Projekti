import React from 'react';
import CardItemmm from './CardItemmm';
import './Cards2.css'; 

function Cards2() {
    return (
        <div className='cards2'>
            <h1>KOSIG ESHTE LIDER ME PRODUKTET ME TE AVANCUARA TE SIGURISE! </h1>
            <div className='cards__container2'>
             <div className='cards__wrapper2'>
               <ul className='cards__item2'>
                   <CardItemmm
                    src="images/image-5.jpg"
                    text="Hikvision prodhuesi kryesor në botë për produkte dhe zgjidhje inovative të video vëzhgimit me kualitetin më të lartë dhe koston më efektive në treg. "
                    label='Sistemet e Kamerave te Sigurise'
                    path='/produktet'
                    />
                    <CardItemmm
                    src="images/image-6.jpg"
                    text="Bëni shtëpinë tuaj një vend më të sigurt dhe shijoni një ndjenjë të paqës së vërtetë. Alarmi JABLOTRON 100+ do të mbrojë tërë shtëpinë tuaj."
                    label='Sistemet e Alarmit Kundër Thyerjes'
                    path='/produktet'
                    />
                    <CardItemmm
                    src="images/image-7.jpg"
                    text="Sistemet për zbulimin e tymit dhe zjarrit shpëtojnë jetë, kështu që mos mbani dhe mos u vononi t'i vendosni në shtëpinë dhe biznesin tuaj."
                    label='Sistemet e Alarmit Kundër Zjarrit'
                    path='/produktet'
                    />
                </ul>
                <ul className='cards__item2'>
                    <CardItemmm
                    src="images/image-8.jpg"
                    text="Një panik alarm është një pajisje elektronike e dizajnuar për të ndihmuar në alarmimin e dikujt në situata emergjente, ku ekziston një kërcënim për pronën."
                    label='Butoni i Panikut'
                    path='/produktet'
                    />
                    <CardItemmm
                    src="images/image-9.jpg"
                    text="KOSIG mundëson të gjithë klientëve pajisjet e GPS për nevoja të ndryshme duke përfshirë një zgjidhje të plotë Hardware dhe Software."
                    label='Sistemet GPS/GPRS'
                    path='/produktet'
                    />
                    <CardItemmm
                    src="images/image-10.jpg"
                    text="KOSIG po krijon vlerë dhe siguri të jetës që çdo klient meriton ta shijojë. Sistemi i kontrollit të qasjës që ndërthur të gjitha elementet e cilësisë dhe komoditetit."
                    label='Kontrolli Qasjes'
                    path='/produktet'
                    />
                </ul>
              
             </div>
          </div>
      </div>
        
    );
}

export default Cards2;