import React, {useState, useEffect} from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonGrid, IonRow, IonCol, IonButton, IonMenuButton, 
    IonLabel, IonItem, IonInput, IonButtons, IonToast, IonTextarea
    } from '@ionic/react'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import { updateNotes, detailNotes } from '../../actions';



export default function UpdateNote () {
    
    const {id} = useParams()
    // const {title} = useParams()
    // const {description} = useParams()
    
    const dispatch = useDispatch()
    // const history = useHistory()
    //const detail = useSelector(state => state.detail)

    const title = window.localStorage.getItem('title')
    const description = window.localStorage.getItem('description')

    const [titleNote, setTitleNote] = useState(title)
    const [descriptionNote, setDescriptionNote] = useState(description)

    //console.log("SOMOS LA NOTA", title, description)

    useEffect(() => {
        dispatch(detailNotes(id))
    })


    const data = {
        id: id,
        title: titleNote,
        description: descriptionNote
    }


    function handleUpdate () {
        dispatch(updateNotes(data))
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
                                <IonInput 
                                    type='text' 
                                    name='title'
                                    value={titleNote}
                                    onIonChange={(e) => setTitleNote(e.target.value)} ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem >
                                <IonLabel position="floating">Description to note</IonLabel>
                                <IonTextarea 
                                    type='text' 
                                    autoGrow='true' 
                                    name='description'
                                    value={descriptionNote}
                                    onIonChange={(e) => setDescriptionNote(e.target.value)}></IonTextarea>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center ion-margin-top'>
                            <IonButton 
                                expand='block' 
                                fill='outline' 
                                onClick={handleUpdate} 
                                href={'/detail-note/' + id}
                                >Update note</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    </React.Fragment>

    )


}