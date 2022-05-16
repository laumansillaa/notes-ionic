import React, {useEffect} from 'react';
import {useParams, Redirect, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailAlumns} from '../../actions';
import {IonContent, IonGrid, IonTitle, IonPage, IonHeader, IonToolbar,
        IonCol, IonCard, IonTextarea, IonItem, IonButton, IonRow, IonCardContent, IonIcon, IonButtons, IonFooter, IonFab, IonFabButton, IonCardHeader, IonCardTitle} from '@ionic/react';
import { arrowBackOutline, addCircleOutline, logoWindows } from 'ionicons/icons';
import './DetailAlumns.css'


export default function DetailAlumns () {

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const detailAlumns = useSelector((state) => state.detail)

    window.localStorage.setItem("lastname", detailAlumns.lastname)
    window.localStorage.setItem('id', detailAlumns.id)
    console.log('SOY DETAIL ALUMNS',detailAlumns.Notes)
    useEffect(() => {
        dispatch(getDetailAlumns(id))
    }, [dispatch])


    return (
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
            {/* <IonContent>
                <IonGrid>
                    <IonCard>
                        <IonCol>
                            <IonCardContent>
                                {
                                    detailAlumns?
                                    <IonTextarea className='ion-max-height' >{detailAlumns.observations}</IonTextarea> :

                                    <IonTextarea>...and its observations?</IonTextarea>
                                }
                            </IonCardContent>
                        </IonCol>
                    </IonCard>
                </IonGrid>
            </IonContent> */}
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
                                                    <IonButton fill='clear'
                                                    className='detailViewNote'>
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
            <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                <IonFabButton href={'/post-note'} >
                    <IonIcon icon={addCircleOutline}  />
                </IonFabButton>
            </IonFab>
        </IonPage>


    )


}