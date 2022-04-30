import React, {useEffect} from 'react';
import {useParams, Redirect, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {detailNotes, deleteNotes} from '../../actions';
import { IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar, 
        IonCol, IonCard, IonTextarea, IonItem, IonButton, IonRow, IonCardContent, IonIcon, IonButtons } from '@ionic/react';
import {createOutline, CreateOutLine} from 'ionicons/icons';
import classes from './detailNote.module.css';
//import updateNote from '../updateNote';


export default function DetailNote ({title, description}) {

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const detailNote = useSelector((state) => state.detail)
    
    useEffect(() => {
        dispatch(detailNotes(id))
    }, [dispatch])

    const handleDeleteNote = () => {
        dispatch(deleteNotes(id))
        history.push('/all-notes')
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className={classes.toolBar} >
                    <IonButton onClick={handleDeleteNote} >
                        Delete
                    </IonButton>

                    {
                        detailNote?
                        <IonTitle >{detailNote.title}</IonTitle> :
                        <IonTitle>Title not found</IonTitle>
                    }
                    <IonButton size='15' slot='end' 
                    fill='outline' 
                    color='white' >
                        <IonIcon icon={createOutline} color='medium' />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid >
                    <IonCard >
                        <IonCol>
                            <IonCardContent  >
                                {
                                    detailNote?
                                    <IonTextarea className= 'ion-max-height' >{detailNote.description}</IonTextarea> :
                                    <IonTextarea>...and its description? </IonTextarea>
                                }

                            </IonCardContent>
                        </IonCol>
                    </IonCard>
                </IonGrid>
            </IonContent>
            <IonRow>
                <IonCol>                
                    <IonButton href='/all-activities' size='medium' fill='outline' className={classes.ancho}>Go home!</IonButton>
                    <IonButton fill='outline' size='medium' className={classes.ancho} > Save! </IonButton>   
                </IonCol>
            </IonRow>
        </IonPage>
    )

}
