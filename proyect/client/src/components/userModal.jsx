import React from 'react';
import {IonContent, IonGrid, IonRow, IonCol, IonText, IonButton} from '@ionic/react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import {deleteUser} from '../actions';
import './userModal.css'

export default function UserModal ({dismiss}) {

    const {id} = useParams()
    const dispatch = useDispatch()

    const handleDeleteUser = () => {
        dispatch(deleteUser(id))
    }


    return (

        <IonContent>
            <IonGrid>
                <IonRow className='ion-text-center'>
                    <IonCol>
                        <IonText>
                            <h4>Delete to User?</h4>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-text-center' >
                    <IonCol>
                        <IonButton
                            color='danger'
                            fill='clear'
                            // className='userModal'
                            onClick={dismiss}
                            >
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton
                            color='primary'
                            fill='clear'
                            className='ion-text-center'
                            onClick={handleDeleteUser}
                            href={'/all-alumns'}
                            >
                            Delete
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}