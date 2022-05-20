import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailAlumns} from '../../actions';
import {IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar,
        IonCol, IonCard, IonItem, IonButton, IonRow, IonCardContent, 
        IonIcon, IonFab, IonFabButton, IonCardHeader, IonCardTitle, IonFabList, IonModal} from '@ionic/react';
import { arrowBackOutline, addCircleOutline, menuOutline, trashOutline, createOutline } from 'ionicons/icons';
import './DetailAlumns.css'
import UserModal from '../../components/userModal';


export default function DetailAlumns () {

    const {id} = useParams()
    const dispatch = useDispatch()
    // const history = useHistory()
    const detailAlumns = useSelector((state) => state.detail)

    const [open, setOpen] = useState(false)


    window.localStorage.setItem("lastname", detailAlumns.lastname)
    window.localStorage.setItem('id', detailAlumns.id)

    useEffect(() => {
        dispatch(getDetailAlumns(id))
    }, [dispatch])

    const closeModal = () => {
        setOpen(false)
    }


    return (
        <React.Fragment>
            <IonModal 
                isOpen={open}
                canDismiss={true}
                onDidDismiss={closeModal}
                breakpoints={[0, 0.1, 0.2, 1]}
                initialBreakpoint={0.2}
                backdropBreakpoint={0.2}
                >
                <UserModal />

            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar >
                        <IonButton href='/all-alumns'
                            slot='start'
                            fill='outline'
                            color='white'
                            ><IonIcon icon={arrowBackOutline} /></IonButton>
                            {
                                detailAlumns?
                                <IonTitle >{detailAlumns.name}</IonTitle> :
                                <IonTitle>Name not found</IonTitle>
                            }
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>

                        {
                            detailAlumns.Notes?.map((note) => {
                                return (
                                    <IonRow key= {note.id }>
                                        <IonCol>
                                            <IonCard>
                                                <IonCardHeader>
                                                    <IonCardTitle>{note.title}</IonCardTitle>
                                                </IonCardHeader>
                                                <IonCardContent>
                                                    <IonItem>
                                                        <IonButton 
                                                            fill='clear'
                                                            className='detailViewNote'
                                                            href={'/detail-note/' + note.id}>
                                                            VIEW NOTE
                                                        </IonButton>
                                                    </IonItem>
                                                </IonCardContent>
                                            </IonCard>
                                        </IonCol>
                                    </IonRow>

                                )
                            })
                        
                        }
                    </IonGrid>
                </IonContent>
                <IonFab 
                    vertical='bottom' 
                    horizontal='end' 
                    slot='fixed'>
                    <IonFabButton >
                        <IonIcon icon={menuOutline}/>
                    </IonFabButton>
                    <IonFabList side='top'>
                        <IonFabButton href={'/post-note'}>
                            <IonIcon icon={addCircleOutline}/>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon 
                                icon={trashOutline}
                                onClick={() => setOpen(true)}
                                />
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={createOutline} />
                        </IonFabButton>
                    </IonFabList>
                </IonFab>
            </IonPage>
        </React.Fragment>



    )


}