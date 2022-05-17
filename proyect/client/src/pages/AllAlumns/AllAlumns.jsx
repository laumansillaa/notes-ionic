import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllAlumns} from '../../actions';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
        IonGrid, IonRow, IonCol, IonButtons, IonMenuButton, IonCard, 
        IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, 
        IonIcon, IonFab, IonFabButton, IonLoading} from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';
import './AllAlumns.css';


export default function AllAlumns () {

    const dispatch = useDispatch()
    const alumnsState = useSelector(state => state.alumns)
    //console.log("2Soy state", alumnsState)

    const [showLoading, setShowLoading] = useState(false)

    setTimeout(() => {
        setShowLoading(false)
    }, 2000)

    useEffect(() => {
        setShowLoading(true)
        dispatch(getAllAlumns())
    }, [])

    return (

        <React.Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start' >
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>
                            Gym-Nacho
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {
                            alumnsState?.map(e => (
                                <IonRow key={e.id}>
                                    <IonCol className = 'ion-context' >
                                        <IonCard>
                                            <IonCardHeader>
                                                <IonCardTitle>{e.name} {e.lastname? e.lastname : ''} </IonCardTitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <p>{e.observations? e.observations : ''}</p>
                                                <IonItem>
                                                    <IonButton fill= 'clear'  
                                                    href={'/detail-alumns/' + e.id} 
                                                    className='buttonViewData' >VIEW DATA</IonButton>
                                                </IonItem>
                                            </IonCardContent>
                                        </IonCard>
                                    </IonCol>
                                </IonRow> 
                            )) 
                        } 
                        <IonLoading 
                            isOpen={showLoading}
                            onDidDismiss={() => setShowLoading(false)}
                            message={'Loading...'}
                            duration={5000}
                         />
                    </IonGrid>
                </IonContent>
                                
                    <IonFab vertical='bottom' horizontal='end' slot='fixed'>
                        <IonFabButton href={'/post-alumns'} >
                            <IonIcon icon={addCircleOutline}  />
                        </IonFabButton>
                    </IonFab>
                
            </IonPage>
        </React.Fragment>


    )



}