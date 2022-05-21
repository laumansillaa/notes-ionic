import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {detailNotes, deleteNotes} from '../../actions';
import { IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar, 
        IonCol, IonCard, IonTextarea, IonButton, IonCardContent, IonIcon, IonFab, IonFabButton,
        IonFabList, IonModal } from '@ionic/react';
import {createOutline, arrowBackOutline, addCircleOutline, trashOutline, menuOutline} from 'ionicons/icons';
import classes from './detailNote.module.css';
//import updateNote from '../updateNote';
import CompleteModal from '../../components/completeModal';


export default function DetailNote () {

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const detailNote = useSelector((state) => state.detail)

    window.localStorage.setItem('title', detailNote.title)
    window.localStorage.setItem('description', detailNote.description)

    const idUser = window.localStorage.getItem('id')

    useEffect(() => {
        dispatch(detailNotes(id))
    }, [dispatch])

    const [open, setOpen] = useState(false)

    // const openToModal = (e) => {
    //     setOpen(e)
    // }

    const handleDeleteNote = () => {
        dispatch(deleteNotes(id))
        history.push('/all-notes')
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <IonModal 
                isOpen={open} 
                canDismiss={true} 
                onDidDismiss={closeModal}
                breakpoints={[0,0.1,0.2,1]}
                initialBreakpoint={[0.1]}
                backdropBreakpoint={0.2} 
                >
                <CompleteModal dismiss={closeModal}  />

            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar className={classes.toolBar} >
                        <IonButton 
                            href={'/detail-alumns/' + idUser} 
                            slot='start' 
                            fill='outline' 
                            color='white'

                        ><IonIcon icon={arrowBackOutline} /></IonButton>
                        {
                            detailNote?
                            <IonTitle >{detailNote.title}</IonTitle> :
                            <IonTitle>Title not found</IonTitle>
                        }
                        <IonButton 
                            size='15' 
                            slot='end' 
                            fill='outline' 
                            color='white'
                            href={'/update-note/' + id} >
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
                <IonFab 
                    vertical='bottom' 
                    horizontal='end' 
                    slot='fixed'>
                    <IonFabButton>
                        <IonIcon icon={menuOutline} />
                    </IonFabButton>
                    <IonFabList side='top'>
                        <IonFabButton href={'/update-note/' + id}>
                            <IonIcon icon={createOutline}  />
                        </IonFabButton>
                        <IonFabButton >
                            <IonIcon 
                                icon= {trashOutline}
                                onClick={() => setOpen(true)}
                                />
                        </IonFabButton>
                        <IonFabButton href={'/post-note'}>
                            <IonIcon icon={addCircleOutline}/>
                        </IonFabButton>
                    </IonFabList>
                </IonFab>
            </IonPage>
        </React.Fragment>
    )

}
