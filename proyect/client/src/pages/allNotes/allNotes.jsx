import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNotes} from '../../actions';
import classes from './allNotes.module.css';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButtons, 
        IonMenuButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, IonModal } from '@ionic/react';


export default function Notes () {
    
    const dispatch = useDispatch()
    const notesState = useSelector(state => state.notes)
    
    // const errorstate = useSelector(state => state.error)
    // console.log(errorstate)


    useEffect(() => {
        dispatch(getNotes())

    }, [dispatch])



    return (
        
        <React.Fragment>
            {/* <IonModal isOpen={!!activityToComplete} swipeToClose={true} >
                <CompleteModalActivity activity={activityToComplete as Activity} dismissModal={closeModal}/>

            </IonModal> */}


            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start' >
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>
                            All Activities
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        { 
                            notesState?.map(e => (
                                <IonRow key={e.id}>
                                    <IonCol className = 'ion-context' >
                                        <IonCard>                                            
                                            <IonCardHeader>
                                                <IonCardTitle>{e.title} </IonCardTitle>

                                            </IonCardHeader>
                                            <IonCardContent>
                                                <p>{e.description}</p>
                                                <IonItem  lines='none'>
                                                    <IonButton fill= 'clear' className={classes.FullWidth}>
                                                        OPEN THE NOTE
                                                    </IonButton>
                                                </IonItem>

                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            ))
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>

    )




}