import React, {useEffect, useState} from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, 
    IonButton, IonMenuButton, IonLabel, IonItem, IonButtons, IonText, IonInput, IonTextarea } from '@ionic/react';

import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import { updateAlumns, getDetailAlumns} from '../../actions';

export default function UpdateAlumns () {

    const {id} = useParams()
    const dispatch = useDispatch()

    const name = window.localStorage.getItem('name')
    const lastname = window.localStorage.getItem('lastname')
    const phone = window.localStorage.getItem('phone')
    const observations = window.localStorage.getItem('observations')

    const [nameAlumn, setNameAlumn] = useState(name)
    const [lastnameAlumn, setLastnameAlumn] = useState(lastname)
    const [phoneAlumn, setPhoneAlumn] = useState(phone)
    const [observationsAlumn, setObservationsAlumn] = useState(observations)

    useEffect(() => {
        dispatch(getDetailAlumns(id))
    })

    const data = {
        id: id,
        name: nameAlumn,
        lastname: lastnameAlumn,
        phone: phoneAlumn,
        observations: observationsAlumn
    }

    function handleUpdate () {
        dispatch(updateAlumns(data))
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Edit a alumn
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Name</IonLabel>
                                <IonInput 
                                    type='text' 
                                    value={nameAlumn} 
                                    onIonChange={e => setNameAlumn(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Lastname</IonLabel>
                                <IonInput 
                                    type='text' 
                                    value={lastnameAlumn} 
                                    onIonChange={e => setLastnameAlumn(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Phone</IonLabel>
                                <IonInput 
                                    type='text' 
                                    value={phoneAlumn} 
                                    onIonChange={e => setPhoneAlumn(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Observations</IonLabel>
                                <IonTextarea 
                                    type='text' 
                                    value={observationsAlumn} 
                                    onIonChange={e => setObservationsAlumn(e.target.value)}></IonTextarea>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton 
                                expand='block' 
                                fill='outline' 
                                onClick={handleUpdate} 
                                href={'/detail-alumns/' + id}>Update</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    )





}