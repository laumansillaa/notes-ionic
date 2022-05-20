import React from 'react';
import {IonContent, IonGrid, IonRow, IonCol, IonText, IonButton} from '@ionic/react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router';
import {deleteUser} from '../actions';

export default function UserModal ({dismiss}) {

    const {id} = useParams()
    const dispatch = useDispatch()

    const handleDeleteUser = () => {
        dispatch(deleteUser(id))
    }


    return (

        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonText>
                            <h4>Delete to User?</h4>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton
                            color='danger'
                            fill='clear'
                            onClick={dismiss}
                            >
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton
                            color='primary'
                            fill='clear'
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