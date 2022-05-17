import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
        IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonLabel, 
        IonItem, IonInput, IonButtons, IonTextarea} from '@ionic/react';

import {useHistory} from 'react-router-dom';
import {postAlumn, getAllAlumns} from '../../actions';
// import AllAlumns from '../../components/AllAlumns';


export default function PostAlumn () {
    
    const dispatch = useDispatch();
    const history = useHistory()

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [observations, setObservations] = useState('')

    const data = {
        name: name,
        lastname: lastname,
        phone: phone,
        observations: observations
    }

    const handlePost = () => {
        //console.log('SOY DATA', data)
        dispatch(postAlumn(data))
        //dispatch(getAllAlumns())
        // setName('')
        // setLastname('')
        // setPhone('')
        // setObservations('')
        //history.push('/all-alumns')
    }


    return (

        <React.Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle className='title'>
                            Add new alumn
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Name </IonLabel>
                                    <IonInput type="text" value={name} onIonChange={(e) => setName(e.target.value)} >
                                    </IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>Lastname </IonLabel>
                                    <IonInput type='text' value={lastname}
                                    onIonChange={(e) => setLastname(e.target.value)}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>Phone </IonLabel>
                                    <IonInput type='text' value={phone}
                                    onIonChange={(e) => setPhone(e.target.value)}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Observations </IonLabel>
                                    <IonTextarea type='text' value={observations}
                                    onIonChange={(e) => setObservations(e.target.value)}></IonTextarea>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                <IonButton expand='block' fill='outline' onClick={handlePost} href={'/all-alumns'}>Post</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    )

}