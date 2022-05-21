import React from 'react';
import {IonContent, IonGrid, IonRow, IonCol, IonText, IonButton} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { deleteNotes } from '../actions';
import './completeModal.css'


export default function CompleteModal ({dismiss}) {

    const {id} = useParams()
    console.log('SOY ID PARAMS', id)
    const dispatch = useDispatch()

    const idUser = window.localStorage.getItem('id')

    const handleDeleteNote = () => {
        dispatch(deleteNotes(id))
        // history.push('/all-notes')
    }


    return (
        <IonContent>
            <IonGrid>
                {/* <IonRow>
                    <IonCol>
                        <IonText>
                            <h4>Delete to Note?</h4>
                        </IonText>
                    </IonCol>
                </IonRow> */}
                <IonRow className='ion-text-center'>
                    <IonCol>
                        <IonButton 
                        color='danger'
                        fill='clear'
                        
                        onClick= {dismiss}
                        >
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton 
                            color='primary'
                            fill='clear'                         
                            onClick={handleDeleteNote}
                            href={'/detail-alumns' + idUser} >
                            Delete
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )


}