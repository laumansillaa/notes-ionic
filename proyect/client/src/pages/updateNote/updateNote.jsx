import React, {useState, useEffect} from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonCardSubtitle, 
    IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonButtons, IonToast, IonTextarea
    } from '@ionic/react'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import { updateNotes, detailNotes } from '../../actions';



export default function UpdateNote () {
    
    const {id} = useParams()
    const {title} = useParams()
    const info = useParams()

    const {description} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()


    const detailNote = useSelector((state) => state.detail)

    

    const [titleNote, setTitleNote] = useState('' + title)
    const [descriptionNote, setDescriptionNote] = useState(description)

    useEffect(() => {
        setTitleNote(title)
        setDescriptionNote(description)
    }, [])

    const data = {
        id: id,
        title: titleNote,
        description: descriptionNote
    }



    function handleUpdate () {
        dispatch(updateNotes(data))
        dispatch(detailNotes(id))
        history.push('/detail-note/' + id)
    }


    return (
        <React.Fragment>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Edit a note
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Title to note</IonLabel>
                                <IonInput type='text' name='title' onIonChange={(e) => setTitleNote(e.target.value)} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem >
                                <IonLabel position="floating">Description to note</IonLabel>
                                <IonTextarea type='text' autoGrow='true' name='description' onIonChange={(e) => setDescriptionNote(e.target.value)}></IonTextarea>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center ion-margin-top'>
                            <IonButton expand='block' fill='outline' onClick={handleUpdate}>Update note</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>

    </React.Fragment>

    )


}