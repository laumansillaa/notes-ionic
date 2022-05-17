import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {detailNotes, deleteNotes} from '../../actions';
import { IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar, 
        IonCol, IonCard, IonTextarea, IonButton, IonCardContent, IonIcon, IonFab, IonFabButton,
        IonFabList } from '@ionic/react';
import {createOutline, arrowBackOutline, addCircleOutline, trashOutline, menuOutline} from 'ionicons/icons';
import classes from './detailNote.module.css';
//import updateNote from '../updateNote';


export default function DetailNote () {

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
                    <IonButton href='/all-activities' 
                        slot='start' 
                        fill='outline' 
                        color='white'

                    ><IonIcon icon={arrowBackOutline} /></IonButton>
                    {
                        detailNote?
                        <IonTitle >{detailNote.title}</IonTitle> :
                        <IonTitle>Title not found</IonTitle>
                    }
                    <IonButton size='15' 
                        slot='end' 
                        fill='outline' 
                        color='white'
                        href={'/update-note/' + id + '/' + detailNote.title + '/' + detailNote.description } >
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
            {/* <IonFooter>
                <IonToolbar>                
                    <IonButton onClick={handleDeleteNote}> Delete </IonButton>
                    <IonButton fill='outline' size='medium' > Save! </IonButton>   
                </IonToolbar>
            </IonFooter> */}
            <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                <IonFabButton>
                    <IonIcon icon={menuOutline} />
                </IonFabButton>
                <IonFabList side='top'>
                    <IonFabButton href={'/post-note'} >
                        <IonIcon icon={createOutline}  />
                    </IonFabButton>
                    <IonFabButton >
                        <IonIcon icon= {trashOutline}/>
                    </IonFabButton>
                    <IonFabButton>
                        <IonIcon icon={addCircleOutline}/>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        </IonPage>
    )

}
