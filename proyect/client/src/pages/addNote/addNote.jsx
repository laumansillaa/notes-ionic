import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonCardSubtitle, IonSegment, 
    IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonButtons, IonToast, IonNote, IonTextarea} from '@ionic/react'

import {useHistory} from 'react-router-dom';
import {postNotes, getNotes} from '../../actions';
import classes from './addNote.module.css';


export default function PostNote () {

    const dispatch = useDispatch()
    const history = useHistory()
    

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    window.localStorage.setItem('title', title)
    window.localStorage.setItem('description', description)

    const data = {
        title: title,
        description: description
    }


    function handlePost () {
        
        dispatch(postNotes(data))
        setTitle('')
        setDescription('')
        dispatch(getNotes())
        history.push('/all-notes')

    }





    return (
        <React.Fragment>
            <IonPage className='addPost'>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle className='title'>
                            Add new note
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent >
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Title to note</IonLabel>
                                    <IonInput type='text' name='title' onIonChange={(e) => setTitle(e.target.value)} ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem >
                                    <IonLabel position="floating">Description to note</IonLabel>
                                    <IonTextarea type='text' autoGrow='true' name='description' onIonChange={(e) => setDescription(e.target.value)}></IonTextarea>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                <IonButton expand='block' fill='outline' onClick={handlePost}>Add note</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>



    ) 
}