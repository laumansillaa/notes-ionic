import React, {useState} from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonGrid, IonRow, IonCol, IonButton, IonMenuButton, IonCardSubtitle, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonDatetime, IonButtons, IonToast 
    } from '@ionic/react'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { updateNotes, detailNotes } from '../../actions';



export default function UpdateNote ({route}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const {id, title, description} = route.params

    const [titleNote, setTitleNote] = useState("")
    const [descriptionNote, setDescriptionNote] = useState("")

    UseEffect(() => {
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
                                <IonInput type='text' name='title' onIonChange={(e) => setTitleNote(e.target.value)} >{title}</IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem >
                                <IonLabel position="floating">Description to note</IonLabel>
                                <IonTextarea type='text' autoGrow='true' name='description' onIonChange={(e) => setDescriptionNote(e.target.value)}>{description}</IonTextarea>
                                
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