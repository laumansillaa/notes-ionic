import React from 'react';
import {IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonTextarea, IonToolbar, IonCardContent, IonRow , IonIcon, IonCol, IonTitle, IonSubtitle, IonText, IonButton, IonButtons, IonCard} from '@ionic/react';
import {useParams} from 'react-router';
import { informationCircleOutline } from 'ionicons/icons';

export default function ProfileModal ({dismiss}) {

    const name = window.localStorage.getItem('name')
    const lastname = window.localStorage.getItem('lastname')
    const phone = window.localStorage.getItem('phone')
    const observations = window.localStorage.getItem('observations')

    return (
        <IonContent>
            <IonHeader traslucent>
                <IonToolbar>
                    <IonIcon icon={informationCircleOutline} />
                    <IonTitle>Info to user</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={dismiss}>
                            Close
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonGrid>
                {/* <IonRow className='ion-text-center'>
                    <IonCol>
                        <IonTitle>
                            Info to alumn
                        </IonTitle>
                    </IonCol>
                </IonRow> */}
                <IonRow className='ion-no-padding'>
                    <IonCol>
                        <IonItem>
                            <IonTitle>
                                Name: {name}
                            </IonTitle>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-margin-top'>
                    <IonCol>
                        <IonItem>
                            <IonTitle className='ion-no-padding'>
                                Lastname: {lastname}
                            </IonTitle>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonTitle className='ion-no-padding'>
                                Phone: {phone}
                                {/* <IonText className='ion-no-padding'>
                                    {phone}
                                </IonText> */}
                            </IonTitle>
                        </IonItem>
                    </IonCol>
                </IonRow>
                    <IonGrid>
                        <IonCard>
                            <IonCol>
                                <IonCardContent >
                                    <IonTextarea className='ion-margin-top:0'>
                                        {observations}
                                    </IonTextarea>
                                </IonCardContent>
                            </IonCol>
                        </IonCard>
                    </IonGrid>
            </IonGrid>
        </IonContent>
    )




}