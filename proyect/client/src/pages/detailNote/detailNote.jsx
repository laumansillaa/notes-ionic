import React, {useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {detailNotes} from '../../actions';
import { IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar, IonCol, IonCard, IonTextarea, IonItem, IonButton } from '@ionic/react';



export default function DetailNote () {

    const {id} = useParams()
    console.log('SOY ID DETAIL', id)
    const dispatch = useDispatch()
    const detailNote = useSelector((state) => state.detail)
    console.log('SOY DETAIL', detailNote)

    useEffect(() => {
        dispatch(detailNotes(id))
    }, [dispatch])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {
                        detailNote?
                        <IonTitle>{detailNote.title}</IonTitle> :

                        <IonTitle>Title not found</IonTitle>
                    } 

                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonCol>
                        <IonCard>
                            {
                                detailNote?
                                <IonTextarea>{detailNote.description}</IonTextarea> :
                                <IonTextarea>...and its description? </IonTextarea>
                            }

                        </IonCard>
                    </IonCol>
                </IonGrid>
            </IonContent>
            <IonItem>                
                <IonButton href='/all-activities'>Go home!</IonButton>   
            </IonItem>
        </IonPage>
    )

}
