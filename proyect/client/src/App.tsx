import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonMenu, IonRouterOutlet, setupIonicReact, IonHeader, IonToolbar, IonTitle, IonContent, IonList, 
        IonItem, IonIcon, IonLabel, IonMenuToggle, IonAccordion, IonAccordionGroup  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {bookOutline, addCircleOutline} from 'ionicons/icons';


import Home from './pages/Home';
import Notes from './pages/allNotes/allNotes';
import PostNote from './pages/addNote/addNote';
import DetailNote from './pages/detailNote/detailNote';
import updateNote from './pages/updateNote/updateNote';
import PostAlumn from './pages/PostAlumns/PostAlumns';
import AllAlumns from './pages/AllAlumns/AllAlumns';
import DetailAlumns from './pages/DetailAlumns/DetailAlumns';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="menuApp">
        <IonHeader>
          <IonToolbar color= "primary">
            <IonTitle>NotesApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink='/all-alumns' routerDirection= 'none' lines= 'none' >
                <IonIcon icon= {bookOutline} color='medium' slot='start' />
                <IonLabel>All alumns</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem routerLink="/post-alumns" routerDirection="none" lines= "none" >
                <IonIcon icon={addCircleOutline} color="medium" slot="start" />
                <IonLabel>Add alumn</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonAccordionGroup>
                    <IonAccordion>
                        <IonItem><IonLabel>Alumnos</IonLabel></IonItem>
                        <IonList>
                          <IonItem>
                            <IonLabel>Alumno1</IonLabel>
                          </IonItem>
                          <IonItem>
                            <IonLabel>Alumno2</IonLabel>
                          </IonItem>
                          <IonItem>
                            <IonLabel>Alumno2</IonLabel>
                          </IonItem>
                        </IonList>
                    </IonAccordion>

                </IonAccordionGroup>

            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id= "menuApp">
        <Route exact path="/all-alumns" component={AllAlumns}/>
        <Route exact path="/post-alumns" component={PostAlumn}/>
        <Route exact path="/detail-alumns/:id" component={DetailAlumns}/>
        <Route exact path="/post-note" component={PostNote} />
        <Route path="/detail-note/:id" component={DetailNote} />
        <Route path="/update-note/:id" component={updateNote} />
        <Redirect to="/all-alumns"/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
